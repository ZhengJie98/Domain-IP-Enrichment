
//======================================================================================
// NbNWbNU
//======================================================================================
function CheckClickJack(strBlankPageUrl, strErrorPageUrl)
{
	try
	{
		// CCt[H
		if (window.self.location != window.top.location)
		{
			// hCuN
			if (window.top.location.host != window.self.location.host)
			{
				location.href = strBlankPageUrl;
			}
		}
	}
	catch (ex)
	{
		// NXTCghCQuN
		location.href = strBlankPageUrl;
	}
}

//======================================================================================
// d`FbNh~
//======================================================================================
var exec_submit_flg = 0;
function exec_submit()
{
	if (exec_submit_flg == 0)
	{
		exec_submit_flg = 1;
		return true;
	}
	else
	{
		return false;
	}
}

// iOS bfcache
var use_bf_cache_flg = false;
var request_count = 0;
window.onpageshow = function(e) {
	if (e.persisted)
	{
		exec_submit_flg = 0;
		use_bf_cache_flg = true;
		request_count = 0;
	}
};

// IOS safariuEUobNpageshowCxgAXVm
history.replaceState(null, document.getElementsByTagName('title')[0].innerHTML, null);
window.addEventListener('popstate', function (e) {
	request_count = 0;
});

//======================================================================================
// Zbg
//======================================================================================
var strOriginalImageNameMouseMoveChange = null;
function reset_picture(tag_name)
{
	var obj = document.getElementById(tag_name);
	if (obj != null)
	{
		// IWiO
		if (strOriginalImageNameMouseMoveChange != null)
		{
			obj.src = strOriginalImageNameMouseMoveChange;
		}
	}
}

//======================================================================================
// 
//======================================================================================
function change_picture(tag_name, file)
{
	var obj = document.getElementById(tag_name);
	if (obj != null)
	{
		// IWiO
		if (strOriginalImageNameMouseMoveChange == null)
		{
			strOriginalImageNameMouseMoveChange = obj.src;
		}
		obj.src = file;
	}
	return false;
}

//======================================================================================
// EChE|bvAbv
//======================================================================================
function show_popup_window(strUrl, iWidth, iHeight, blDispScrollbar, blResizable, strWindowName)
{
	var strScrollbars = blDispScrollbar ? "yes" : "no";
	var strResizable = blResizable ? "yes" : "no";
	scWidthCenter = screen.availWidth / 2;
	scHeightCenter = screen.availHeight / 2;
	var strOption = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=" + strScrollbars + ",resizable=" + strResizable + ",width=" + iWidth + ",height=" + iHeight + ",left=" + (scWidthCenter - (iWidth / 2)) + ",top=" + (scHeightCenter - (iHeight / 2));
	var wObj = window.open(strUrl, strWindowName, strOption);
	if (wObj != null)
	{
		wObj.focus();
	}
}

// Co^Jp`FbN
function add_favorite_check(isAlready) {
	var message = (isAlready) ? "Co^B" : "Co^B";
	$('#txt-tooltip').html(message);
	$('#addFavoriteTip').css("top", yPos + 20);
	$('#addFavoriteTip').css("left", xPos + 20);
	showTooltip();
}

//tootip\ËY
function showTooltip() {
	// J[gc[`bv\s
	$('p.toolTip').fadeIn(function () {
		autoFadeOut();
	});
	// J[gIcookieNA
	var delDate = new Date();
	delDate.setTime(0);

	var popcounter;
	function autoFadeOut() {
		popcounter = setTimeout(function () {
			$('p.toolTip').fadeOut();
		}, 2000);
	}

	$('p.toolTip').mouseenter(function () {
		clearTimeout(popcounter);
	});
	$('p.toolTip').mouseleave(function () {
		autoFadeOut();
	});
}

var xPos, yPos;
// }EXCxg
function init() {
	if (window.Event) {
		document.captureEvents(Event.MOUSEMOVE);
	}
	document.onmousemove = getXY;
}

// }EXXYWèÔ 
function getXY(e) {
	xPos = (window.Event) ? e.clientX : event.clientX;
	yPos = (window.Event) ? e.clientY : event.clientY;
}

// onloadCxgB 
function addOnload(func) {
	try {
		window.addEventListener("load", func, false);
	} catch (e) {
		// IEp 
		window.attachEvent("onload", func);
	}
}


//======================================================================================
// y[W[h
//======================================================================================
function pageLoad_common() {
	// dNGXgLZ
	cancel_multiple_async_request();
}

//======================================================================================
// dNGXgLZ
//======================================================================================
function cancel_multiple_async_request() {
	// AsMLZ
	if (Sys.WebForms) {
		var mng = Sys.WebForms.PageRequestManager.getInstance();
		mng.add_initializeRequest(
			function (sender, args) {
				if (mng.get_isInAsyncPostBack() && ((use_bf_cache_flg == false) || request_count != 0)) {
					args.set_cancel(true);
				} else {
					request_count += 1;
				}
			}
		);

		// |XgobN
		mng.add_endRequest(
			function (sender, args) {
				request_count -= 1;
			}
		);
	}
}

//======================================================================================
// iEjUsipj
//======================================================================================
function execAutoKanaHiragana(firstName, firstNameKana, lastName, lastNameKana) {
	$.fn.autoKana(firstName, firstNameKana);
	$.fn.autoKana(lastName, lastNameKana);
}

//======================================================================================
// iEjUsiJ^Jipj
//======================================================================================
function execAutoKanaKatakana(firstName, firstNameKana, lastName, lastNameKana) {
	$.fn.autoKana(firstName, firstNameKana, { katakana: true });
	$.fn.autoKana(lastName, lastNameKana, { katakana: true });
}

//======================================================================================
// ñbiEjJisipj
//======================================================================================
function execAutoChangeKanaHiragana(firstNameKana, lastNameKana) {
	$.fn.autoChangeKana(firstNameKana);
	$.fn.autoChangeKana(lastNameKana);
}

//======================================================================================
// ñbiEjJisiJ^Jipj
//======================================================================================
function execAutoChangeKanaKatakana(firstNameKana, lastNameKana) {
	$.fn.autoChangeKana(firstNameKana, { katakana: true });
	$.fn.autoChangeKana(lastNameKana, { katakana: true });
}

//======================================================================================
// X`FbNiXsj
//======================================================================================
function checkZipCodeLength(zip1, zip2) {
	return ((zip1.val().length + zip2.val().length) == 7);
}

//======================================================================================
// X`FbNyXs
//======================================================================================
function checkZipCodeLengthAndExecPostback(zip1, zip2, eventTarget, postUrl, errorMessageId) {
	if (checkZipCodeLength(zip1, zip2)) {
		getAddrJsonAsync(zip1.val(), zip2.val(), eventTarget, postUrl, errorMessageId);
	}
}

//======================================================================================
// X`FbNyXsiSPpj
//======================================================================================
function checkZipCodeLengthAndExecPostbackForSp(zip1, zip2, eventTarget, postUrl, errorMessageId, errorMessageNecessary, errorMessageLength) {
	var zipcodeLength = zip1.val().length + zip2.val().length;
	if (zipcodeLength == 7) {
		getAddrJsonAsync(zip1.val(), zip2.val(), eventTarget, postUrl, errorMessageId);
	} else if (zipcodeLength == 0) {
		$(errorMessageId).html(errorMessageNecessary + errorMessageLength);
	} else {
		$(errorMessageId).html(errorMessageLength);
	}
}

//======================================================================================
// iEjUs
//======================================================================================
function execAutoKana(firstName, firstNameKana, lastName, lastNameKana, kanaType) {
	// UAsBJ^JiAJ^Jis
	if (kanaType == 'FULLWIDTH_HIRAGANA') {
		execAutoKanaHiragana(firstName, firstNameKana, lastName, lastNameKana);
	} else if (kanaType == 'FULLWIDTH_KATAKANA') {
		execAutoKanaKatakana(firstName, firstNameKana, lastName, lastNameKana);
	}
}

//======================================================================================
// ñbiEjJis
//======================================================================================
function execAutoChangeKana(firstNameKana, lastNameKana, kanaType) {
	// UAsBJ^JiAJ^Jis
	if (kanaType == 'FULLWIDTH_HIRAGANA') {
		execAutoChangeKanaHiragana(firstNameKana, lastNameKana);
	} else if (kanaType == 'FULLWIDTH_KATAKANA') {
		execAutoChangeKanaKatakana(firstNameKana, lastNameKana);
	}
}

//======================================================================================
// ZC[\
//======================================================================================
function showPopupAndLayer(fadeIntime) {
	$('#search-result-layer').fadeIn(fadeIntime);
}

//======================================================================================
// ZC[
//======================================================================================
function closePopupAndLayer() {
	// Z
	$(".search-result-layer-addrs").empty();

	$('#search-result-layer').hide();
}

//======================================================================================
// ZèÔ
//======================================================================================
function getAddrJsonAsync(zipcode1, zipcode2, eventTarget, postUrl, errorMessageId) {
	// MZJsonèÔ
	$.ajax({
		type: "POST",
		url: postUrl,
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
		data: "{ zipcode1: '" + zipcode1 + "', zipcode2: '" + zipcode2 + "' }",
		success: function (result) {
			// ZC[oCh
			var jsonAddrSearchResult = JSON.parse(result.d);
			var addrSearchResultCount = jsonAddrSearchResult.length
			$(".search-result-layer-addrs").empty();
			$.each(jsonAddrSearchResult, function (i, addr) {
				$('.search-result-layer-addrs')
					.append('<li><span class="addr">' + addr.Prefecture +
							'</span>&nbsp;<span class="city">' + addr.City +
							'</span>&nbsp;<span class="town">' + addr.Town +
							'</span></li>');
			});

			// Z1ZCxgsA2C[oCh
			if ((addrSearchResultCount == 0) || (addrSearchResultCount == 1)) {
				__doPostBack(eventTarget, "");
			} else if (addrSearchResultCount > 1) {
				showPopupAndLayer(200);
				$('.search-result-count').text("[" + addrSearchResultCount + "]");
				$('.search-result-layer-addrs li').attr('class', 'search-result-layer-addr');
				$(".search-result-layer-addr").css("padding", "10px 20px");
				$(errorMessageId).html("");
			}
		},
		error: function () {
		}
	});
}

//======================================================================================
// L[CxgLL[R[h
//======================================================================================
function isValidKeyCodeForKeyEvent(keyCode) {
	// L[R[h
	// [9FTab], [35FEnd], [36FHome], [37F], [38F], [39F], [40F]
	var invalidKeyCodes = [9, 35, 36, 37, 38, 39, 40];
	return ($.inArray(keyCode, invalidKeyCodes) == -1);
}

//======================================================================================
// Wy[WRecÑv
//======================================================================================

function sortFeaturePageContents(sort) {
  for (var startPos = 0; startPos < sort.length; startPos++) {
    var startElement = $('#' + sort[startPos]);
    for (var afterElementPos = startPos + 1; afterElementPos < sort.length; afterElementPos++) {
      var afterElement = $('#' + sort[afterElementPos]);

      // Ñët
      if(sort[afterElementPos] == 'feature-group-items'){
        if ($(startElement).index() > $(afterElement).parent().index()) {
          swapItem("#" + sort[startPos], "#" + sort[afterElementPos]);
        }
      } else if (sort[startPos] == 'feature-group-items'){
        if ($(startElement).parent().index() > $(afterElement).index()) {
          swapItem("#" + sort[startPos], "#" + sort[afterElementPos]);
        }
      } else{
        if ($(startElement).index() > $(afterElement).index()) {
          swapItem("#" + sort[startPos], "#" + sort[afterElementPos]);
        }
      }
    }
  }
};

//======================================================================================
// vf
//======================================================================================
function swapItem(from, to) {
	var $from = $(from);
	var $to = $(to);

	$from.replaceWith('<div id="REPLACE_TEMP_DIV"></div>');
	$to.replaceWith($from);
	$("#REPLACE_TEMP_DIV").replaceWith($to);
}

function LoadingShow() {
    $("#loadingBackground").show();
    $("#loadingIcon").fadeIn();
}

function LoadingHide() {
    $("#loadingBackground").fadeOut();
    $("#loadingIcon").fadeOut();
}

// ZbV\bh
var MaintainSession = (function () {
    var path = '';
    var mouseX = 0;
    var mouseY = 0;

	// C\bh
	function _execute(pathroot) {
		path = pathroot + 'MaintainSession.ashx';
		setInterval(function () {
			document.addEventListener('touchstart', _moveListener);
			document.addEventListener('mousemove', _moveListener);
		}, 18 * 60 * 1000);
	};

	// mCxgXi[
	function _moveListener(e) {
		if (mouseX !== e.clientX || mouseY !== e.clientY) {
			_fetch();
			document.removeEventListener('mousemove', _moveListener);
			document.removeEventListener('touchstart', _moveListener);
		}
		e = window.event || e;
		mouseX = e.clientX;
		mouseY = e.clientY;
	}

	// ZbVpNGXg\bh
	function _fetch() {
		try {
			var http = new XMLHttpRequest();
			http.open('GET', path);
			http.send(null);
		} catch (e) {
			// MG[
		}
	}

	return {
		execute: _execute
	}
}());

// Amazon(CV2)XNvg
function showAmazonPayCv2Button(divId, sellerId, isSandbox, payload, signature, publickKeyId) {
	if ($(divId).length) {
		amazon.Pay.renderButton(divId, {
			merchantId: sellerId,
			ledgerCurrency: 'JPY',
			sandbox: isSandbox,
			checkoutLanguage: 'ja_JP',
			productType: 'PayAndShip',
			placement: 'Cart',
			buttonColor: 'Gold',
			createCheckoutSessionConfig: {
				payloadJSON: payload,
				signature: signature,
				publicKeyId: publickKeyId
			}
		});
	}
}
// AmazonOC(CV2)XNvg
function showAmazonSignInCv2Button(divId, sellerId, isSandbox, payload, signature, publickKeyId) {
	if ($(divId).length) {
		amazon.Pay.renderButton(divId, {
			merchantId: sellerId,
			ledgerCurrency: 'JPY',
			sandbox: isSandbox,
			checkoutLanguage: 'ja_JP',
			productType: 'SignIn',
			placement: 'Cart',
			buttonColor: 'Gold',
			signInConfig: {
				payloadJSON: payload,
				signature: signature,
				publicKeyId: publickKeyId
			}
		});
	}
}
// Amazon(CV2)XNvg
function showAmazonCv2Button(divId, sellerId, isSandbox, payload, signature, publickKeyId, type) {
	switch (type) {
		case 'PayAndShip':
			showAmazonPayCv2Button(divId, sellerId, isSandbox, payload, signature, publickKeyId);
			break;
		case 'SignIn':
			showAmazonSignInCv2Button(divId, sellerId, isSandbox, payload, signature, publickKeyId);
			break;
		default:
			return;
	}
}

// [hCèÔ
function getMailDomains(source)
{
	var datas = [];
	$.ajax({
		type: "GET",
		url: source,
		dataType: "xml",
		global: false,
		async: false,
		success: function (xmlContent)
		{
			$(xmlContent).find('value').each(function ()
			{
				datas.push($(this).text());
			});
		}
	});
	return datas;
}

// wvfSXN[
function scrollToElementCenter(elementId) {
	var element = document.getElementById(elementId);
	element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Check zip code short input length
function checkZipCodeShortInputLength(zip) {
	var result = ((zip.length >= 7) && (zip.length <= 8));
	return result;
}

// Check zip code short input length and execution postback
function checkZipCodeShortInputLengthAndExecPostback(
	zip,
	eventTarget,
	postUrl,
	errorMessageId) {
	var zipCode = zip.val().replace("-", "");
	if (checkZipCodeShortInputLength(zipCode)) {
		getAddrJsonAsync(
			zipCode.substr(0, 3),
			zipCode.substr(3, zipCode.length - 3),
			eventTarget,
			postUrl,
			errorMessageId);
	}
}

// Check zip code short input length and execution postback for smart phone
function checkZipCodeShortInputLengthAndExecPostbackForSp(
	zip,
	eventTarget,
	postUrl,
	errorMessageId,
	errorMessageNecessary,
	errorMessageLength) {
	var zipCode = zip.val().replace("-", "");
	var zipcodeLength = zipCode.length;

	if ((zipcodeLength == 7)
		|| (zipcodeLength == 8)) {
		getAddrJsonAsync(
			zipCode.substr(0, 3),
			zipCode.substr(3, zipCode.length - 3),
			eventTarget,
			postUrl,
			errorMessageId);
	} else if (zipcodeLength == 0) {
		$(errorMessageId).html(errorMessageNecessary + errorMessageLength);
	} else {
		$(errorMessageId).html(errorMessageLength);
	}
}

// Set zip code
function textboxChangeSearchZipCode(
	textboxId,
	textboxId1,
	textboxId2,
	uniqueId,
	uniqueId2,
	url,
	errorMessageId) {
	if (textboxId2 == "") {
		$('#' + textboxId).keyup(function (e) {
			if (isValidKeyCodeForKeyEvent(e.keyCode) == false) return;

			checkZipCodeShortInputLengthAndExecPostback(
				$('#' + textboxId),
				uniqueId,
				url,
				errorMessageId)
		});
	}
	else {
		$('#' + textboxId2).keyup(function (e) {
			if (isValidKeyCodeForKeyEvent(e.keyCode) == false) return;

			checkZipCodeLengthAndExecPostback(
				$('#' + textboxId1),
				$('#' + textboxId2),
				uniqueId2,
				url,
				errorMessageId)
		});
	}
}

// Click search zip code
function clickSearchZipCode(
	textboxId,
	textboxId1,
	textboxId2,
	linkbuttonClientId,
	linkbuttonUniqueId,
	url,
	errorMessageId) {
	$('#' + linkbuttonClientId).on('click', function () {
		if (textboxId2 == "") {
			checkZipCodeShortInputLengthAndExecPostback(
				$('#' + textboxId),
				linkbuttonUniqueId,
				url,
				errorMessageId)
		}
		else {
			checkZipCodeLengthAndExecPostback(
				$('#' + textboxId1),
				$('#' + textboxId2),
				linkbuttonUniqueId,
				url,
				errorMessageId)
		}
	});
}

// Textbox change search zip code
function textboxChangeSearchZipCodeInRepeater(
	textboxId,
	textboxId1,
	textboxId2,
	uniqueId1,
	uniqueId2,
	linkbuttonId,
	url,
	errorMessageId,
	type) {
	if (textboxId1 == "") {
		$('#' + textboxId).keyup(function (e) {
			if (isValidKeyCodeForKeyEvent(e.keyCode) == false) return;

			$('#' + linkbuttonId).click();
		});
	}
	else {
		$('#' + textboxId2).keyup(function (e) {
			if (isValidKeyCodeForKeyEvent(e.keyCode) == false) return;

			checkZipCodeLengthAndExecPostback(
				$('#' + textboxId1),
				$('#' + textboxId2),
				uniqueId2,
				url,
				errorMessageId)
		});
	}
	multiAddrsearchTriggerType = type;
}

// Click search zip code
function clickSearchZipCodeInRepeater(
	textboxId,
	textboxId1,
	textboxId2,
	linkbuttonClientId,
	linkbuttonUniqueId,
	url,
	errorMessageId,
	type) {
	$('#' + linkbuttonClientId).on('click', function () {
		if (textboxId1 == "") {
			checkZipCodeShortInputLengthAndExecPostback(
				$('#' + textboxId),
				linkbuttonUniqueId,
				url,
				errorMessageId)
		}
		else {
			checkZipCodeLengthAndExecPostback(
				$('#' + textboxId1),
				$('#' + textboxId2),
				linkbuttonUniqueId,
				url,
				errorMessageId)
		}

		var topValue = $("#" + linkbuttonClientId).offset().top + 24;
		var leftValue = $("#" + textboxId).offset().left;

		if (type == "shipping") {
		  topValue -= ($("#dvUserBox").length) ? $("#dvUserBox").offset().top : 0;
		  leftValue -= ($("#dvUserBox").length) ? $("#dvUserBox").offset().left : 0;
		}

		if (($("#search-result-layer").css != undefined)
			&& ($("#search-result-layer").position() != undefined)) {
		  $("#search-result-layer").css("top", topValue);
		  $("#search-result-layer").css("left", leftValue);
		}
		multiAddrsearchTriggerType = type;
	});
}

// Textbox change search zip code for smart phone
function textboxChangeSearchZipCodeForSp(
	textboxId,
	textboxId1,
	textboxId2,
	uniqueId,
	uniqueId2,
	url,
	errorMessageId) {
	if (textboxId2 == "") {
		$('#' + textboxId).keyup(function (e) {
			if (isValidKeyCodeForKeyEvent(e.keyCode) == false) return;

			checkZipCodeShortInputLengthAndExecPostback(
				$('#' + textboxId),
				uniqueId,
				url,
				errorMessageId)
		});
	}
	else {
		$('#' + textboxId2).keyup(function (e) {
			if (isValidKeyCodeForKeyEvent(e.keyCode) == false) return;

			checkZipCodeLengthAndExecPostback(
				$('#' + textboxId1),
				$('#' + textboxId2),
				uniqueId2,
				url,
				errorMessageId)
		});
	}
}

// Click search zip code for smart phone
function clickSearchZipCodeForSp(
	textboxId,
	textboxId1,
	textboxId2,
	linkbuttonClientId,
	linkbuttonUniqueId,
	url,
	errorMessageId,
	errorMessageNecessary,
	errorMessageLength) {
	$('#' + linkbuttonClientId).on('click', function () {
		if (textboxId2 == "") {
			checkZipCodeShortInputLengthAndExecPostbackForSp(
				$('#' + textboxId),
				linkbuttonUniqueId,
				url,
				errorMessageId,
				errorMessageNecessary,
				errorMessageLength)
		}
		else {
			checkZipCodeLengthAndExecPostbackForSp(
				$('#' + textboxId1),
				$('#' + textboxId2),
				linkbuttonUniqueId,
				url,
				errorMessageId,
				errorMessageNecessary,
				errorMessageLength)
		}
	});
}

// Textbox change search zip code in repeater for smart phone
function textboxChangeSearchZipCodeInRepeaterForSp(
	textboxId,
	textboxId1,
	textboxId2,
	uniqueId1,
	uniqueId2,
	linkbuttonId,
	url,
	errorMessageId,
	type) {
	if (textboxId2 == "") {
		$('#' + textboxId).keyup(function (e) {
			if (isValidKeyCodeForKeyEvent(e.keyCode) == false) return;

			$('#' + linkbuttonId).click();
		});
	}
	else {
		$('#' + textboxId2).keyup(function (e) {
			if (isValidKeyCodeForKeyEvent(e.keyCode) == false) return;

			checkZipCodeLengthAndExecPostback(
				$('#' + textboxId1),
				$('#' + textboxId2),
				uniqueId2,
				url,
				errorMessageId)
		});
	}
}

// Click search zip code in repeater for smart phone
function clickSearchZipCodeInRepeaterForSp(
	textboxId,
	textboxId1,
	textboxId2,
	linkbuttonClientId,
	linkbuttonUniqueId,
	url,
	errorMessageId,
	triggerType,
	errorMessageNecessary,
	errorMessageLength) {
	$('#' + linkbuttonClientId).on('click', function () {
		if (textboxId2 == "") {
			checkZipCodeShortInputLengthAndExecPostbackForSp(
				$('#' + textboxId),
				linkbuttonUniqueId,
				url,
				errorMessageId,
				errorMessageNecessary,
				errorMessageLength)
		}
		else {
			checkZipCodeLengthAndExecPostbackForSp(
				$('#' + textboxId1),
				$('#' + textboxId2),
				linkbuttonUniqueId,
				url,
				errorMessageId,
				errorMessageNecessary,
				errorMessageLength)
		}
		var topValue = $("#" + linkbuttonClientId).offset().top + 24;
		var leftValue = $("#" + textboxId).offset().left;

    if (($("#search-result-layer").css != undefined)
			&& ($("#search-result-layer").position() != undefined)) {
		  $("#search-result-layer").css("top", topValue);
		  $("#search-result-layer").css("left", leftValue);
		}
  });
}

// Scroll
function ScrollToTop() {
  $('html,body').animate({
    scrollTop: $("#orderDetailsInput").offset().top
  }, 0);
}

// Textbox change search global zip
function textboxChangeSearchGlobalZip(
	globalZipCodeId,
	eventTarget) {
	$('#' + globalZipCodeId).keyup(function (e) {
	if (isValidKeyCodeForKeyEvent(e.keyCode) == false) return;

	// Check length for global zipcode
	if (checkGlobalZipLength(globalZipCodeId) == false) return;
	__doPostBack(eventTarget, "");
	});
}

// Check global zipcode length
function checkGlobalZipLength(globalZipCodeId) {
	var globalZipCodeLength = $('#' + globalZipCodeId).val().length;
	var isValid = ((globalZipCodeLength >= 3)
		&& (globalZipCodeLength <= 20));
	return isValid;
}

//======================================================================================
// hbv_EXgAWI{^Xgl(uEUobNlh~j
//======================================================================================

function UpdateDdlAndRbl(
	ddlOwnerBirthYearId,
	ddlOwnerBirthMonthId,
	ddlOwnerBirthDayId,
	rblOwnerSexId,
	ddlOwnerCountryId,
	selectedIndexYear,
	selectedIndexMonth,
	selectedIndexDay,
	selectedValueSex,
	selectedIndexCountry) {

	const LOCAL_NAME = "input";

	var ddlOwnerBirthYear = document.getElementById(ddlOwnerBirthYearId);
	var ddlOwnerBirthMonth = document.getElementById(ddlOwnerBirthMonthId);
	var ddlOwnerBirthDay = document.getElementById(ddlOwnerBirthDayId);
	var rblOwnerSex = document.getElementById(rblOwnerSexId);
	var ddlOwnerCountry = document.getElementById(ddlOwnerCountryId);

	if (ddlOwnerBirthYear != null) ddlOwnerBirthYear[selectedIndexYear].selected = true;
	if (ddlOwnerBirthMonth != null) ddlOwnerBirthMonth[selectedIndexMonth].selected = true;
	if (ddlOwnerBirthDay != null) ddlOwnerBirthDay[selectedIndexDay].selected = true;
	if (ddlOwnerCountry != null) ddlOwnerCountry[selectedIndexCountry].selected = true;

	if (rblOwnerSex != null) {
		for (var elem of rblOwnerSex.childNodes) {
			if ((elem.localName == LOCAL_NAME) && (elem.value == selectedValueSex)) {
				elem.checked = true;
				break;
			}
		}
	}
}

// Set interval authentication message
var setIntervalId;
var timeCount = 0;
function setIntervalAuthenticationMessage(
	authenticationStatusId,
	authenticationMessageId,
	phoneNumber,
	authCodeDigits,
	expirationTime) {
	timeCount = expirationTime;
	clearInterval(setIntervalId);
	setIntervalId = setInterval(function () {
		timeCount--;
		var lbAuthenticationStatus = document.getElementById(authenticationStatusId);

		if (lbAuthenticationStatus == null) clearInterval(setIntervalId);

		var message = 'db '
			+ phoneNumber
			+ ' FR[hMB<br />'
			+ timeCount
			+ ' b'
			+ authCodeDigits
			+ ' FR[hB';

		lbAuthenticationStatus.innerHTML = message;

		if (timeCount <= 0) {
			var lbAuthenticationMessage = document.getElementById(authenticationMessageId);
			lbAuthenticationMessage.style.color = "#FF0000";
			lbAuthenticationMessage.style.display = "block";
			lbAuthenticationMessage.innerHTML = 'FR[hLBxFR[hèÔB'
			clearInterval(setIntervalId);
		}
	}, 1000);
}

// Check authentication code input
function checkAuthenticationCodeInput() {
	if ($('[id*=hfResetAuthenticationCode]') == undefined) return;
	if ($('[id*=tbAuthenticationCode]')[0].value === '') return;
	
	// Trigger event of button
	$('[id*=hfResetAuthenticationCode]')[0].value = '';
	$('[id*=lbCheckAuthenticationCode')[0].click();
};

// Reset authentication code
function resetAuthenticationCodeInput(customValidatorId) {
	if ($('[id*=hfResetAuthenticationCode]') == undefined) return;

	if (($('[id*=lbHasAuthentication]').length == 0)
		&& ($('[id*=lbAuthenticationStatus]')[0].innerHTML === '')) {
		return;
	}

	var customValidator = $('[id*=' + customValidatorId + ']');
	if (customValidator.length > 0) {
		if (customValidator[0].innerHTML !== '') return;
	}

	clearInterval(setIntervalId);

	// Trigger event of button
	$('[id*=hfResetAuthenticationCode]')[0].value = 'reset';
	$('[id*=lbCheckAuthenticationCode')[0].click();
}

// Check tel no
function checkTelNo(
	tbTel1Id,
	tbTel2Id,
	tbTel3Id,
	tbTelId,
	tbTelGlobalId) {
	var tbTel1Id = $('#' + tbTel1Id)[0];
	var tbTel2Id = $('#' + tbTel2Id)[0];
	var tbTel3Id = $('#' + tbTel3Id)[0];
	var telNo = $('#' + tbTelId)[0];
	var telNoGlobal = $('#' + tbTelGlobalId)[0];
	var telNoValue = '';

	// If there are 3 textboxes phone number
	if ((tbTel1Id !== undefined)
		&& (tbTel2Id !== undefined)
		&& (tbTel3Id !== undefined)) {
		telNoValue = tbTel1Id.value + tbTel2Id.value + tbTel3Id.value;
	}

	// If there are 1 textbox phone number
	if (telNo !== undefined) telNoValue = telNo.value;
	if (telNoGlobal !== undefined) telNoValue = telNoGlobal.value;

	var regex = /^\+?(^[0-9]{2,5}(-|)[0-9]{1,4}(-|)[0-9]{2,4}$)|^([0-9]{10,11}$)$/;
	if (telNoValue.match(regex)) return true;

	return false;
}