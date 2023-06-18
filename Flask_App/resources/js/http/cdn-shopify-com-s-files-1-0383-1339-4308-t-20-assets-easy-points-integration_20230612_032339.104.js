/**
 * v1.0.0
 *  - v0.0.1 for custom with ajax cart support
 *
 * Functions from `easy_points.js`
 *  - updateLoyaltyTargets/0
 *  - updateDisplayedDiscount/0
 *  - displayDiscount/1
 *  - formatBigNumber/1
 *  - insertPointValue/1
 */

window.addEventListener('DOMContentLoaded', function() {
  var cartNode = document.getElementById('CartContainer');

  console.log(cartNode);

  if (cartNode) {
    var config = { attributes: false, childList: true, subtree: false };
    var callback = function(mutationsList, observer) {
      for (var mutation of mutationsList) {
        console.log(mutation);
        if (mutation.target == cartNode) {
          if (document.querySelectorAll('.easy-points-form__container').length > 0) {
            EasyPointsIntegration.Debug.print('Observer: Reset & Bind events');
            EasyPointsIntegration.handleReset();
            EasyPointsIntegrationRegister.run();
          } else {
            EasyPointsIntegration.Debug.print('Observer: Update loyalty targets');
            updateLoyaltyTargets();
          }

          EasyPointsIntegration.Cart.setRedemptionForm();

          break;
        }
      }
    };

    var observer = new MutationObserver(callback);
    observer.observe(cartNode, config);
  }
});

function getElementBy$(element, selector, nodes = false) {
  var element =
    nodes ? element.querySelectorAll(selector) : element.querySelector(selector);

  if (!element) {
    EasyPointsIntegration.Debug.print('Could not locate ' + selector, 'warn');
  }

  return element;
}

function getRedeemPointsButtonEl(element, nodes = false) {
  return getElementBy$(element, '.easy-points-button__redeem', nodes);
}

function getResetPointsButtonEl(element, nodes = false) {
  return getElementBy$(element, '.easy-points-button__reset', nodes);
}

function getRedeemPointsInputEl(element, nodes = false) {
  return getElementBy$(element, '.easy-points-form__input > input', nodes);
}

function getCheckoutButtonEl(element, nodes = false) {
  return getElementBy$(element, 'button[type="submit"][name="checkout"]', nodes);
}

var EasyPointsIntegration = {

  Debug: {
    DEBUG: false,

    print: function(msg, type = 'info') {
      if (!this.DEBUG) {
        return;
      }

      msg = "[EasyPoints] " + msg

      switch (type.toLowerCase()) {
        case 'warn':
          console.warn(msg);
          break;
        case 'error':
          console.error(msg);
          break;
        default:
          console.info(msg);
          break;
      }
    }
  },

  Utils: {
    getPriceFromEl: function(element, selector = null, regex = /[^\d]/g) {
      var el = selector ? element.querySelector(selector) : element;

      if (el) {
        return parseInt(el.textContent.replace(regex, ''));
      }

      return null;
    },

    setLoyalCurrencyCost: function(element, price, container = null) {
      var els = container
        ? element.querySelectorAll(`${container} > [data-loyal-currency-cost]`)
        : element.querySelectorAll('[data-loyal-currency-cost]');

      els.forEach(function(el) {
        el.setAttribute('data-loyal-currency-cost', price * 100);
      });
    }
  },

  Cart: {
    url: function() {
      return window.location.origin + '/cart.json';
    },

    getFromJSON: function(callback) {
      var req = new XMLHttpRequest();

      req.onreadystatechange = function() {
        if(req.readyState === XMLHttpRequest.DONE) {
          var status = req.status;

          if (status === 0 || (status >= 200 && status < 400)) {
            callback(JSON.parse(req.responseText));
          } else {
            EasyPointsIntegration.Debug.print('Failed getting data from /cart.json', 'error');
          }
        }
      };

      req.open('GET', this.url());
      req.setRequestHeader('accept', 'application/json');
      req.send();
    },

    setRedemptionForm: function() {
      this.getFromJSON(function(cart) {
        var form = document.getElementById('point-redemption-form');

        if (form) {
          if (maxRedeemableInput = form.querySelector('input[name="coupon[max_redeemable]"]')) {
            maxRedeemableInput.value = cart.total_price / 100;
          }

          cart.items.forEach(function(item) {
            var inputs = form.querySelectorAll('input[name="coupon[product_ids][]"]');
            var exists = Array.prototype.find.call(inputs, function (el) {
              return el.value == item.product_id;
            });

            if (!exists) {
              var input = document.createElement('input');
              input.setAttribute('type', 'hidden');
              input.setAttribute('name', 'coupon[product_ids][]');
              input.setAttribute('value', item.product_id);
              form.appendChild(input);

              EasyPointsIntegration.Debug.print('New cart item input created for the submission form.');
            }
          });
        }
      });
    }
  },

  showResetButton: function() {
    getRedeemPointsInputEl(document, true).forEach(function(pointsInput) {
      pointsInput.setAttribute('disabled', true);

      var discount = EasyPointsIntegration.getDiscountSession();

      if (
        !pointsInput.classList.contains('valid') &&
        (pointsInput.value == '' || pointsInput.value <= 0) && discount > 0) {
        pointsInput.value = discount;
      }
    });

    getResetPointsButtonEl(document, true).forEach(function(resetBtn) {
      resetBtn.classList.remove('easy-points-hide');
    });

    getRedeemPointsButtonEl(document, true).forEach(function(redeemBtn) {
      redeemBtn.classList.add('easy-points-hide');
    });
  },

  hideResetButton: function() {
    getRedeemPointsInputEl(document, true).forEach(function(pointsInput) {
      pointsInput.removeAttribute('disabled');
    });

    getResetPointsButtonEl(document, true).forEach(function(resetBtn) {
      resetBtn.classList.add('easy-points-hide');
    });

    getRedeemPointsButtonEl(document, true).forEach(function(redeemBtn) {
      redeemBtn.classList.remove('easy-points-hide');
    });
  },

  show: function() {
    var nodes = document.getElementsByClassName('hidden-unless-discount-applied');

    Array.prototype.slice.call(nodes).forEach(function(el) {
      el.classList.remove('easy-points-hide');
    });
  },

  hide: function() {
    var nodes = document.getElementsByClassName('hidden-unless-discount-applied');

    Array.prototype.slice.call(nodes).forEach(function(el) {
      el.classList.add('easy-points-hide');
    });
  },

  getDiscountSession: function() {
    var discount = sessionStorage.getItem("appliedDiscount");

    return discount ? parseInt(discount) : 0;
  },

  applyCartTotals: function() {
    var subtotalNodes = document.querySelectorAll('.easy-point-subtotal__price');

    if (!subtotalNodes) {
      return;
    }

    subtotalNodes.forEach(function(subtotalEl) {
      var discount = EasyPointsIntegration.getDiscountSession();
      var subtotal = parseInt(subtotalEl.textContent.replace(/[^\d]/g, ''));
      var subtotalAfterDiscount = subtotal - discount;

      if (subtotalAfterDiscount >= 0) {
        var cartTotalNodes = document.querySelectorAll('.cart-total-after-discount');
        Array.prototype.slice.call(cartTotalNodes).forEach(function(el) {
          el.textContent = '¥' + formatBigNumber(subtotalAfterDiscount);
        });

        var pointsAfterDiscountNodes = document.getElementsByClassName('points-after-applied-discount');
        Array.prototype.slice.call(pointsAfterDiscountNodes).forEach(function(el) {
          el.setAttribute('data-loyal-currency-cost', subtotalAfterDiscount * 100);
          insertPointValue(el);
        });
      } else {
        EasyPointsIntegration.handleReset();
      }
    });
  },

  applyDiscount: function() {
    var discount = this.getDiscountSession();

    EasyPointsIntegration.Debug.print('Applying discount: ' + discount);

    if (discount > 0) {
      displayDiscount(discount);
      this.showResetButton();
      this.show();
    }

    this.applyCartTotals();
  },

  handleRedeem: function(e) {
    var form = e.target.form;

    if (!form) {
      return;
    }

    if (input = getRedeemPointsInputEl(form)) {
      input.value = input.value.toString().replace(/[^\d]/g, '');

      if (EasyPointsIntegration.updateRedemptionForm(input.value)) {
        displayDiscount(input.value.toString());
        this.applyDiscount();
      }
    }
  },

  handleReset: function() {
    this.hideResetButton();
    this.hide();

    getRedeemPointsInputEl(document, true).forEach(function(pointsInput) {
      pointsInput.value = '';
    });

    sessionStorage.removeItem('appliedDiscount');
    this.applyCartTotals();
  },

  updateRedemptionForm(points) {
    if (input = getElementBy$(document, '#redemption-point-value')) {
      input.value = points;

      if (!pointRedemptionValidation()) {
        sessionStorage.removeItem('appliedDiscount');

        getRedeemPointsInputEl(document, true).forEach(function(el) {
          el.classList.add('invalid');
        });

        return false;
      } else {
        sessionStorage.setItem("appliedDiscount", points);

        getRedeemPointsInputEl(document, true).forEach(function(el) {
          el.classList.remove('invalid');
        });

        return true;
      }
    }

    return false;
  }
};

var EasyPointsIntegrationRegister = {

  submissionReady: false,

  run: function() {
    updateLoyaltyTargets();
    EasyPointsIntegration.applyDiscount();

    this._applyEventListeners();
  },

  _applyEventListeners: function() {
    var formContainerEl = document.querySelector('.easy-points-form__container');

    if (formContainerEl) {
      getRedeemPointsInputEl(document, true).forEach(function(node) {
        node.addEventListener('focus', EasyPointsIntegrationRegister.onPointsInput);

        if (node.value > 0) {
          EasyPointsIntegration.updateRedemptionForm(EasyPointsIntegration.getDiscountSession());
        }
      });

      getRedeemPointsButtonEl(document, true).forEach(function(node) {
        node.addEventListener('click', EasyPointsIntegrationRegister.onClickRedeemBtn);
      });
      getResetPointsButtonEl(document, true).forEach(function(node) {
        node.addEventListener('click', EasyPointsIntegrationRegister.onClickResetBtn);
      });
      getCheckoutButtonEl(document, true).forEach(function(node) {
        node.addEventListener('click', EasyPointsIntegrationRegister.onClickCheckoutBtn);
      });

      EasyPointsIntegration.Debug.print('Applied all required event listeners');
    } else {
      EasyPointsIntegration.Debug.print('Not applying any event listeners - form is not rendered');
    }
  },

  onPointsInput(e) {
    e.target.classList.remove('invalid');
  },

  onClickRedeemBtn: function(e) {
    e.preventDefault();

    EasyPointsIntegration.Debug.print('Clicked: Redeem');
    EasyPointsIntegration.handleRedeem(e);
  },

  onClickResetBtn: function(e) {
    e.preventDefault();

    EasyPointsIntegration.Debug.print('Clicked: Reset');
    EasyPointsIntegration.handleReset();
    EasyPointsIntegrationRegister.submissionReady = false;
  },

  onClickCheckoutBtn: function(e) {
    EasyPointsIntegration.Debug.print('Clicked: Check out');

    if (!EasyPointsIntegrationRegister.submissionReady) {
      checkoutBtn = e.target;
      e.preventDefault();
      e.stopPropagation();

      checkoutBtn.classList.add('btn--loading');
      checkoutBtn.setAttribute('disabled', true);

      if (sessionStorage.getItem('appliedDiscount')) {
        form = buildForm('/apps/loyalty/redeem');
      } else {
        form = buildForm('/apps/loyalty/reset');
      }

      if (form) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(event) {
          if (this.readyState == 4) {
            EasyPointsIntegration.Debug.print('Submitted');

            EasyPointsIntegrationRegister.submissionReady = true;
            checkoutBtn.classList.remove('btn--loading');
            checkoutBtn.removeAttribute('disabled');
            checkoutBtn.click();
          }
        };

        xhr.open('POST', form.action);
        var formData = new FormData(form);
        xhr.send(formData);

        EasyPointsIntegration.Debug.print('Submitting easypoints form');
      } else {
        EasyPointsIntegrationRegister.submissionReady = true;
        checkoutBtn.classList.remove('btn--loading');
        checkoutBtn.removeAttribute('disabled');
        checkoutBtn.click();
      }
    }
  }
};
