

// クライアント検証
function ClientValidate(cvalidator, e)
{
	// Replaces delimiter in phone number format if phone number has contain delimiter
	replaceAHyphenInTelephone(cvalidator.controltovalidate, e);

	var checked_message_html = "";
	var languageLocaleId = getParamFromCss(cvalidator, 'languageLocaleId');
	var countyIsoCode = getParamFromCss(cvalidator, 'countyIsoCode');

	//alert($("#" + cvalidator.controltovalidate).attr('class'));

	$.ajax({
		url: "/Form/ValidateModule.aspx",
		type: "post",
		data: {
			'group': cvalidator.validationGroup,
			'control': document.getElementById(cvalidator.controltovalidate).name,
			'value': e.Value,
			'languageLocaleId' : languageLocaleId,
			'countyIsoCode' : countyIsoCode
		},
		async: false,
		success: function(data)
		{
			exec_submit_flg = 0;	// 二重押しチェック用
			
			checked_message_html = data.replace('<?xml version="1.0" encoding="utf-8" ?>', '').replace("@@ 1 @@", "： " + e.Value);
			if (checked_message_html.length != 0)
			{
				e.IsValid = false;
				
				document.getElementById(cvalidator.id).innerHTML = checked_message_html;
				
				if (document.getElementById(cvalidator.controltovalidate).className.match(/ error_input /i) == null)
				{
					document.getElementById(cvalidator.controltovalidate).className += " error_input ";
				}

				// iosのSafariのfocus()の代用処理
				var isIosSafari =
					((navigator.userAgent.toLowerCase().indexOf("iphone") > -1)
					|| (navigator.userAgent.toLowerCase().indexOf("ipad") > -1))
					&& (navigator.userAgent.toLowerCase().indexOf("safari") > -1);
				if (isIosSafari && (cvalidator.focusOnError == 't')){
					var controllOffset = window.pageYOffset + document.getElementById(cvalidator.id).getBoundingClientRect().top;
					if(window.pageYOffset > controllOffset)
					{
						document.getElementById(cvalidator.id).scrollIntoView();
					}
				}

				resetErrorMessage(cvalidator);
			}
			else
			{
				e.IsValid = true;

				document.getElementById(cvalidator.id).innerHTML = "";
				
				document.getElementById(cvalidator.controltovalidate).className =
					document.getElementById(cvalidator.controltovalidate).className.replace(" error_input ", "");
			}
		},
		error: function(data)
		{
			e.IsValid = false;
			
			checked_message_html = "システムエラーが発生しました";			
			document.getElementById(cvalidator.id).innerHTML = checked_message_html;
		}
	});

	function getParamFromCss(cvalidator, header)
	{
		if ($("#" + cvalidator.controltovalidate).attr('class'))
		{
			var myregex = new RegExp(" " + header + ":.+? ");
			var match = $("#" + cvalidator.controltovalidate).attr('class').match(myregex);
			if (match) return match[0].replace(header + ":", "").trim();
		}
		return "";
	}

	// Replaces delimiter in phone number format if phone number has contain delimiter
	function replaceAHyphenInTelephone(id, e) {
		$(".shortTel").each(function (index, element) {
			var tel = $(".shortTel")[index].value;
			if ((tel != undefined) && (tel != "")) {
				if ((tel.split("-").length <= 2) && (id == element.id)) {
					var value = e.Value.replace("-", "");
					$("#" + element.id).val(value);
					e.Value = value;
				}
				if ((tel.split("ｰ").length <= 2) && (id == element.id)) {
					var value = e.Value.replace("ｰ", "");
					$("#" + element.id).val(value);
					e.Value = value;
				}
			}
		});
	}

	// Reset the error message
	function resetErrorMessage(customValidator) {
		if (customValidator.id.toLowerCase().indexOf("zip") > -1) {
			if (customValidator.classList.length >= 2) {
				switch (customValidator.classList[1]) {
					case "zip_input_error_message":
						hideErrorMessage(cvalidator.className, 'shortZipInputErrorMessage');
						break;

					case "cvOwnerZipShortInput":
						hideErrorMessage(cvalidator.className, 'sOwnerZipError');
						break;

					case "cvShippingZipShortInput":
						hideErrorMessage(cvalidator.className, 'sShippingZipError');
						break;

					case "cvSenderZipShortInput":
						hideErrorMessage(cvalidator.className, 'sSenderZipError');
						break;

					case "cvShippingZipShortInput":
						hideErrorMessage(cvalidator.className, 'sShippingZipError');
				}
			}
		}
	}

	// Hide unnecessary error messages
	function hideErrorMessage(classNameCustomValidate, classNameZip) {
		var zipErrorMessage = document.getElementsByClassName(classNameCustomValidate);
		if (zipErrorMessage[0].innerHTML !== "")
		{
			if (document.getElementsByClassName(classNameZip)[0].innerHTML !== "")
			document.getElementsByClassName(classNameZip)[0].innerHTML = "";
		}
	}
}
