//(function($) {
    "use strict";

    // SETUP VARIABLES
    var myinfoRoot = 'https://singpass.ndi-sg.com/fullstacksys';
    var serverRedirectURL = window.location.href.split('?')[0];
    var scrollToAppForm = true,
        authApiUrl,
        clientId, // your app_id/client_id provided to you during onboarding
        redirectUrl,
        attributes,
        authLevel,
        purpose,
        state,
        data_json;

    $(document).ready(function(){
        $.ajax({
            url: myinfoRoot + '/get-env?redirectURL=' + serverRedirectURL,
            data: {},
            type: 'GET',
            success: function(res) {
                var _data = res.data;
                if (res.statusCode === 200) {
                    clientId    = _data.clientId;
                    redirectUrl = _data.redirectUrl;
                    authApiUrl  = _data.authApiUrl;
                    attributes  = _data.attributes;
                    authLevel   = _data.authLevel;
                    purpose     = _data.purpose;
                    state       = _data.state;
                } else {
                    alert("ERROR: " + JSON.stringify(_data.message));
                }
            }
        });
    });

    $(function() {
        $('.myinfo').click(function(event) {
            event.preventDefault();
            callAuthoriseApi();
        });

    });
    
    // Function for calling API #1 - Authorise
    function callAuthoriseApi() {
        window.location = authApiUrl + "?client_id=" + clientId +
            "&attributes=" + attributes +
            "&purpose=" + purpose +
            "&state=" + encodeURIComponent(state)  +
            "&redirect_uri=" + redirectUrl;
    }

    // Function for calling server side APIs (token & person) to get the person data for prefilling form

    function callServerAPIs() {
        var authCode = $.url(window.location.href).param('code');
        if (authCode)
        {
            
          $("#loadingScreenWrapper").show();
          

          $.ajax({
              url: myinfoRoot + '/get-entity?redirectURL=' + serverRedirectURL,
              data: { code: authCode },
              type: 'GET',
              success: function(response) {
                  var _data = response.data;
                  if (response.statusCode === 200) {
                      fillForm(_data);  
                      $('html, body').animate({scrollTop: $('#form').offset().top }, 'normal');
                  } 

                  $("#loadingScreenWrapper").fadeOut();
              }
          });          
        }

    }

    // Prefill Online Form with MyInfo data
    function fillForm(data) {
      
        var formValues = {
            "company_uen": str(data.entity["basic-profile"]["uen"]),
            "company_name": str(data.entity["basic-profile"]["entity-name"]),
            "primary_activity": str(data.entity["basic-profile"]["primary-activity"]),
            "contact_name": str(data.person.name),
            "email": str(data.person.email),
            "contact_no": str(data.person.mobileno),

        };
        // Populate values
        populate('#myinfo-form', formValues);
    }

    function formatMoney(number, decPlaces, decSep, thouSep) {
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSep = typeof decSep === "undefined" ? "." : decSep;
        thouSep = typeof thouSep === "undefined" ? "," : thouSep;
        var sign = number < 0 ? "-" : "";
        var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
        var j = (j = i.length) > 3 ? j % 3 : 0;
  
        return sign +
            (j ? i.substr(0, j) + thouSep : "") +
            i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
            (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
      }
  

    function populate(frm, data) {
        $.each(data, function(key, value) {

        if (value)
        {
            if ($('[name=' + key + ']', frm).is('textarea'))
            {
              $('[name=' + key + ']', frm).val(value);
            }
              
            if ($('[name=' + key + ']', frm).is('input'))
            {
              $('[name=' + key + ']', frm).val(value);
            }
  
            if ($('[name=' + key + ']', frm).is('select'))
            {
              $('[name=' + key + ']', frm).find('option')
              .remove()
              .end()
              .append('<option value="'+value+'">'+value+'</option>')
              .val(value);
            }

            if (!$('[name=' + key + ']', frm).hasClass("editable"))
            {
              $('[name=' + key + ']', frm).prop('disabled', true);
            }
        }


          
        });
    }

    // used to output data items with value or desc
    function str(data) {
        if (!data)
            return null;
        if (data.value)
            return data.value;
        else if (data.desc)
            return data.desc;
        else if (typeof data === "string")
            return data;
        else
            return "";
    }
        
    callServerAPIs();

    $('#without-singpass').on('click',function(){
        $('.close').click();
    }); 
    