
      function btv_Language_cls () {
        this.get = function (key) {
          var retval =  "";
          switch (key) {
      case "btn_compare": retval="Compare"; break;
case "btn_title_clear_all": retval="Clear all products from compare list"; break;
case "check_invalid_fields": retval="Some errors were found, please correct them."; break;
case "cookie_wall_close": retval="Close"; break;
case "cookie_wall_more_info": retval="More information about cookies"; break;
case "cookie_wall_text": retval="This site uses functional cookies to make this site work on your computer, as well as anonymous analytical cookies to improve our service to you."; break;
case "ddd": retval="ddsd"; break;
case "err_accept_terms": retval="Please agree to our terms and conditions"; break;
case "err_account_icp_req": retval="For VAT-free sales, an account is required. Please check the \'create account\' tick and fill out a password."; break;
case "err_account_pwd_not_match": retval="Passwords do not match, please verify the password"; break;
case "err_select_shipping_method": retval="Please select a shipping method"; break;
case "msg_added_cart": retval="Added"; break;
case "new_site_tooltip": retval="You are currently using the new site layout. If you experience a problem with the site or prefer the old layout, you can click this button to visit the old site."; break;
case "old_site_tooltip": retval="You are currently using the old site layout. We do have a new site that improves a lot on the look and feel, we think. We would like to invite you to try it and give us feedback. If you happen to find an issue, please share your feedback."; break;
case "search_suggestions_loading": retval="Loading search suggestions..."; break;
case "select_payment_method": retval="Please select a payment method"; break;
case "title_compare": retval="Product Compare"; break;

            default: retval = key;
          }
          return retval;
        }
      }
      
      btv_Language = new btv_Language_cls();
      