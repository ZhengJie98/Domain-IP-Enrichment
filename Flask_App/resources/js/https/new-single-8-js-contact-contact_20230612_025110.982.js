var lbRequired = '<label class="error">Please enter information</label>';
var lbEmailFalse = '<label class="error">E-mail invalid</label>';
var lbNumberFalse = '<label class="error">Phone invalid</label>';
var SUCCESS = 0;
var FAIL = 1;
(function ($) {
  if (enable_appointment_date == 1) {
    $("#timepicker1").timepicker();
    $(".datepicker").datepicker({
      format: "dd/mm/yyyy",
    });
    $("#timepicker1").click(function () {
      $(".timepicker .input-group-addon").click();
    });
  }
  $(".chosen-select1").select2({
    placeholder: "Click to select Unit Type(s)",
  });
  validateCotactForm($("#contactForm"));
  initRulesContactForm();
  if ($(window).width() > 991) {
    setTimeout(function () {
      $(".project-tabs-roll-box").css("height", $(".project-tabs-content").height());
    }, 300);
  }
  $("#phone").intlTelInput({
    preferredCountries: ["sg", "cn", "id", "my", "in", "hk", "us"],
    utilsScript: "/countries_code/js/utils.js",
  });
  $("#phone").on("keyup", function () {
    var value = $(this).val();
    if (value.indexOf("+65") == 0) {
      value = value.substring(3);
    }
    $(this).val(getCountryCode("#phone") + value);
  });
  $("#phone").intlTelInput("setCountry", currentCountry);
  $("#phone").on("countrychange", function (e, countryData) {
    addCountryCode("#phone");
  });
  addCountryCode("#phone");

  $("#btn_contact").on("click", function () {
    if ($("#contactForm").valid()) {
      if (enableCaptcha && standard_captcha == 1) {
        if (checkCaptcha("#captcha_field") == false) {
          return false;
        }
      }
      if (checkPhone("#phone") == false) {
        return false;
      }

      var form = $(this).closest("#contactForm");
      var name = form.find("#name");
      var phone = form.find("#phone");
      var email = form.find("#email");
      var captcha = form.find("#captcha_field");
      var description = form.find("#description");

      var unit_types = "";

      if ($("select.chosen-select1").length > 0 && $("select.chosen-select1").val() != null) {
        unit_types = $("select.chosen-select1").val().toString();
      }
      var arrInput = [name, phone, email, description];

      var tokenKey = $("#tokenKey").prop("name");
      var tokenVal = $("#tokenKey").val();
      var reCaptCha = "";
      var reCaptChaV = "";

      if (useGoogleCaptcha > 0) {
        reCaptCha = $("#g-recaptcha-response").val();
        reCaptChaV = $("#g-recaptcha-v").val();
      }

      var receive_information = 0;
      if ($("#receive_information").is(":checked")) {
        receive_information = 1;
      }

      var data = {
        salutation: $("#salutation").val(),
        name: name.val(),
        email: email.val(),
        phone: $("#phone").intlTelInput("getNumber"),
        dialcode: $("#phone").intlTelInput("getSelectedCountryData").name + " (+" + $("#phone").intlTelInput("getSelectedCountryData").dialCode + ")",
        description: description.val(),
        property_site_id: $("#property_site_id").val(),
        property_site_name: $("#property_site_name").val(),
        unit_types: unit_types,
        captcha_field: captcha.val(),
        url: window.location.href,
        reCaptCha: reCaptCha,

        receive_information: receive_information,
        "g-recaptcha-v": reCaptChaV,
      };
      if (enable_appointment_date == 1) {
        data["appointment_date"] = $(".datepicker").val();
        data["appointment_time"] = $("#timepicker1").val();
      }
      data[tokenKey] = tokenVal;
      if (typeof privyr !== "undefined") {
        var code = $("#privyr").val();
        data["code"] = code;
        callPrivyr(code, data);
      }
      submitContact(".phone_detail_project", arrInput, data);
    }
    return false;
  });
  if ($("input[type='search']").length > 0) {
    $("input[type='search']").rules("remove");
  }

  reloadCaptCha();
  $(".reload_captcha").on("click", function () {
    reloadCaptCha();
  });

  $("#btn_contact").rules("remove");
})(jQuery);

function reloadCaptCha() {
  var url = "/capcha/getcaptcha";
  var captcha = $(".captcha_image");
  captcha.attr("src", url + "?" + Math.random());
  return false;
}
function callPrivyr(code, data) {
  var flag = false;
  $.ajax({
    url: "/apiform/save?code=" + code,
    type: "POST",
    data: data,
    dataType: "json",
    async: false,
    success: function (res) {
      // gọi function append vào html
      console.log(res);
    },
  });
}
function checkCaptcha(id) {
  $(".error-capcha").remove();
  var flag = false;
  var dataajax = { captcha: $(id).val() };
  $.ajax({
    url: "/capcha/checkcaptcha",
    type: "POST",
    data: dataajax,
    dataType: "json",
    async: false,
    success: function (data) {
      // gọi function append vào html
      if (data.err == 1) {
        flag = true;
      }
      if (data.err == 2) {
        var $html = '<label for="capcha_field" class="error error-capcha">' + data.msg + "</label>";
        $(id).after($html);
        flag = false;
      }
    },
  });
  return flag;
}

function submitContact(el, arrInput, formData) {
  var flg = true;
  $.ajax({
    url: "/contact/saveForProject2",
    type: "POST",
    data: formData,
    //async: false,
    dataType: "json",
    beforeSend: function () {
      showPopupMessage("notification1", '<img src="/apartment/images/loading.gif"/>   Sending...');
    },
    success: function (data) {
      if (data.err == FAIL) {
        flg = false;
        showPopupMessage("notification1", "Contact Us fail, please try ...");
      } else {
        if (link_thank_page != "") {
          window.location = link_thank_page;
        } else {
          showPopupMessage("notification1", html);
        }
      }
    },
    error: function (error) {
      flg = false;
      closeModal("notification1");
    },
  });
  return flg;
}
function showPopupMessage(idModal, msg) {
  $("#" + idModal)
    .find(".modal-body")
    .html(msg);
  $("#" + idModal).modal("show");
  $("#" + idModal).appendTo("body");
}
function closeModal(idModal) {
  $("#" + idModal).modal("hide");
}

function validateCotactForm($form) {
  $form.validate({
    ignore: "",
    onsubmit: false,
    onfocusout: function (element, event) {
      if ($(element).valid()) {
        $(element).closest("div.form-group").removeClass("has-error");
        $(element).closest("div.form-group").find("label.error").remove();
      }
    },

    onkeyup: function (element, event) {
      $(element).valid();
    },

    errorPlacement: function (error, element) {
      $(element).closest("div.form-group").addClass("has-error");
      if ($(element).hasClass("ckbox")) {
        $(element).closest("div.form-group").find(".ckbox-error").append(error);
      } else {
        error.insertAfter(element);
      }
    },
    invalidHandler: function (form, validator) {
      if (!validator.numberOfInvalids()) {
        return;
      }
      //scrollToTopElement($(validator.errorList[0].element));
    },
  });
}

function initRulesContactForm() {
  $("#name").rules("add", {
    required: true,
    minlength: 2,
  });
  $("#email").rules("add", {
    required: true,
    email: true,
  });
  $("#phone").rules("add", {
    required: true,
  });
}

function getCountryCode(el) {
  var countryCode = $(el).intlTelInput("getSelectedCountryData").dialCode;
  if (countryCode === undefined) {
    $(el).intlTelInput("setCountry", currentCountry.toLowerCase());
    countryCode = $(el).intlTelInput("getSelectedCountryData").dialCode;
  }
  return "+" + countryCode;
  //$(".country_code").val('+' + countryCode);
}
//add countrycode for phone number
function addCountryCode(el) {
  var countryCode = $(el).intlTelInput("getSelectedCountryData").dialCode;
  if (countryCode === undefined) {
    $(el).intlTelInput("setCountry", currentCountry.toLowerCase());
    countryCode = $(el).intlTelInput("getSelectedCountryData").dialCode;
  }
  $(el).val("+" + countryCode);
  //$(".country_code").val('+' + countryCode);
}
/*function checkPhone(input){
    var regex = /^\+?\d+$/;
    var value = $(input).val();
    if(value == ""){
        return false;
    }
    if(value.match(regex)){
        return true;
    }
    $('<label id="form-contact-phone-error" class="error" for="form-contact-phone">Please enter number.</label>').insertAfter($(input));
    return false;
}*/
function checkPhone(el) {
  if ($(el).val() == "") {
    return false;
  }
  var countryCode = $(el).intlTelInput("getSelectedCountryData").dialCode;
  //malaysia
  var regex60 = /^(|\+6)(?:[0-9]( |-)?){6,10}[0-9]/gm;
  //vietnam
  var regex84 = /^((\+){0,1}((841[0-9]{9})|((849|848)[0-9]{8})))$|^((09|08)[0-9]{8})$|^(01[0-9]{9})$/gm;
  //sin
  var regex65 = /(\+65|65|(65)|(\+65)|\+65 |65 |\(65\) |\(\+65\) |)(6|8|9)(\d{7})/g;
  var arrCode = ["60", "65", "84"];
  var rule = { 60: regex60, 84: regex84, 65: regex65 };
  if (arrCode.indexOf(countryCode) >= 0) {
    if ($(el).val().match(rule[countryCode])) {
      if (countryCode == 65) {
        if ($("#phone").val().length == 11) {
          return true;
        }
      } else {
        return true;
      }
    }
  } else {
    var regex = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
    if ($(el).val().match(regex)) {
      return true;
    }
  }

  $('<label id="form-contact-phone-error" class="error" for="form-contact-phone">Please enter valid phone number.</label>').insertAfter($(el).closest(".intl-tel-input"));
  return false;
}
