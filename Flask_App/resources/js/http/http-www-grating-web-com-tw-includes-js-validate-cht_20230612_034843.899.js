function checkStrId(obj, cName) {
	var data1 = obj.value;
	reg = /[^a-z\d]/g;
	if (data1.match(reg) != null) {
		alert(cName + "請輸入小寫英文字母或數字！");
		obj.focus();
		return false
	}
	if (data1.length < 4) {
		alert(cName + "字元數不得小於四個！");
		obj.focus();
		return false
	}
	return true
}
function checkStrPwd(obj, cName) {
	var data1 = rmTrailingBlank(obj.value);
	if (data1.length < 6) {
		alert(cName + "字元數不得小於六個！");
		obj.focus();
		return false
	}
	if (!/\d+/.test(data1) || !/[a-zA-Z]/.test(data1) || !/[A-Z]/.test(data1)) {
		alert(cName + "請使用包含大小寫英文字母與數字的密碼");
		obj.focus();
		return false
	}
	return true
}
function checkStrUserPwd(obj, cName) {
	var data1 = rmTrailingBlank(obj.value);
	if (data1.length < 4) {
		alert(cName + "字元數不得小於四個！");
		obj.focus();
		return false
	}
	return true
}
function checkPwdSame(obj1, obj2, cName) {
	var data1 = rmTrailingBlank(obj1.value);
	var data2 = rmTrailingBlank(obj2.value);
	if (data1 != data2) {
		alert(cName + "不相同！");
		obj2.focus();
		return false
	}
	return true
}
function replaceBigComma(obj) {
	str = obj.value;
	if (str == "" || str == null) return str
	if (str.indexOf("，") != -1) {
		str = str.replace(/，/g, ",")
	}
	obj.value = str;
	return true
}
function rmTrailingBlank(str) {
	if (str == "" || str == null) return str
	var lastBlank = str.lastIndexOf(' ');
	if (lastBlank == (str.length - 1)) {
		var i
		for (i = str.length - 2; i >= 0; i--) {
			if (str.charAt(i) != ' ') break
		}
		return str.substring(0, i + 1)
	} else return str
}
function cleartext(obj) {
	obj.value = ""
}
function trim(Source, Chr) {
	Chr = Chr || " ";
	return Ltrim(Rtrim(Source, Chr), Chr)
}
function checkStrLength(obj, cName, limit) {
	var data1 = obj.value;
	if (data1.length > limit) {
		alert(cName + "字數不得超過" + limit + "個字元(含空白)！");
		obj.focus();
		return false
	}
	return true
}
function checkStrLength_Low(obj, cName, limit) {
	var data1 = obj.value;
	if (data1.length < limit) {
		alert(cName + "字數不得少於" + limit + "個字元！");
		obj.focus();
		return false
	}
	return true
}
function checkNotEmpty(obj, cName) {
	var data1 = obj.value;
	if (data1 == "") {
		alert(cName + " 未填寫！");
		if (obj.type == 'text') obj.focus();
		return false
	}
	return true
}
function checkNotAllEmpty(obj1, obj2, cName) {
	var data1 = obj1.value;
	var data2 = obj2.value;
	if (data1 == "" && data2 == "") {
		alert(cName + "至少填寫1個！");
		if (obj1.type == 'text') obj1.focus();
		return false
	}
	return true
}
function checkNotFirst(obj, cName) {
	var data1 = obj.selectedIndex;
	if (data1 == 0) {
		alert(cName + " 尚未選取！");
		obj.focus();
		return false
	}
	return true
}
function checkNotLast(obj, cName) {
	var data1 = obj.selectedIndex;
	if (data1 == (obj.options.length - 1)) {
		alert(cName + " 尚未選取！");
		obj.focus();
		return false
	}
	return true
}
function checkCheckBox(obj, cName) {
	for (i = 0; i < obj.length; i++) {
		if (obj[i].checked) {
			return true
		}
	}
	alert(cName + " 尚未選取！");
	return false
}
function checkCheckBoxThan(obj, cName, n) {
	chk = 0;
	for (i = 0; i < obj.length; i++) {
		if (obj[i].checked) {
			chk++
		}
	}
	if (chk > n) {
		alert(cName + " 不可選超過 " + n + " 個!");
		return false
	}
	return true
}
function checkCheckRadio(obj, cName) {
	for (i = 0; i < obj.length; i++) {
		if (obj[i].checked) {
			return true
		}
	}
	alert(cName + " 尚未選取！");
	return false
}
function checkPlusNumber(obj, cName) {
	var data1 = obj.value;
	n1 = Number(data1);
	n2 = Math.floor(n1);
	if (isNaN(n1) || (n1 < 0) || (n1 != n2)) {
		alert(cName + "必需為正整數！");
		obj.focus();
		return false
	}
	return true
}
function checkPlusFloat(obj, cName) {
	var data1 = obj.value;
	n1 = Number(data1);
	if (isNaN(n1) || (n1 < 0)) {
		alert(cName + "必需為正數！");
		obj.focus();
		return false
	}
	return true
}
function checkEmail(obj, cName) {
	var data1 = obj.value;
	var len = data1.length;
	var errflag = 0;
	if (len == 0) {
		return true
	}
	for (var i = 0; i < len; i++) {
		var c = data1.charAt(i);
		if (!((c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9") || (c == "_") || (c == "-") || (c == ".") || (c == "@") || (c == "_"))) {
			errflag = 1
		}
	}
	if ((data1.indexOf("@") == -1) || (data1.indexOf("@") == 0) || (data1.indexOf("@") == (len - 1))) {
		errflag = 1
	} else if ((data1.indexOf("@") != -1) && (data1.substring(data1.indexOf("@") + 1, len).indexOf("@") != -1)) {
		errflag = 1
	} else if ((data1.indexOf(".") == -1) || (data1.indexOf(".") == 0) || (data1.lastIndexOf(".") == (len - 1))) {
		errflag = 1
	}
	if (errflag == 1) {
		alert(cName + " 格式不正確！");
		obj.focus();
		return false
	}
	return true
}
function checkSpecialChar(allobj) {
	var check = new Array("'", "\"", "&&", "%", "+", "$", "<>", "<", ">", "=", "\\", "|", "~", "--");
	var errflag = 0;
	var data1 = "";
	for (var i = 0; i < allobj.length; i++) {
		if (((allobj[i].type == "text") || (allobj[i].type == "textarea")) && (allobj[i].className.indexOf('editor') == -1) && (allobj[i].className.indexOf('url') == -1) && (allobj[i].name.indexOf('url') == -1) && (allobj[i].name.indexOf('cont') == -1) && (allobj[i].name.indexOf('mediaYTBconf') == -1) && (allobj[i].name.indexOf('querystr') == -1)) {
			data1 = allobj[i].value;
			for (var j = 0; j < check.length; j++) {
				if (data1.indexOf(check[j]) != -1) {
					alert("請勿輸入特殊字元！");
					allobj[i].focus();
					return false
				}
			}
		}
	}
	return true
}
function checkPersonalID(obj, cName) {
	var data1 = obj.value;
	var intIdLength = data1.length;
	var strIdFirst = data1.charAt(0).toUpperCase();
	var strIdSecond = data1.charAt(1);
	var strIdNum = data1.substr(1, 9);
	var errflag = 0;
	if (intIdLength != 10) {
		errflag = 1
	} else if (strIdFirst < 'A' || strIdFirst > 'Z') {
		errflag = 1
	} else if (strIdSecond != '1' && strIdSecond != '2') {
		errflag = 1
	}
	for (i = 0; i <= 8; i++) {
		if (isNaN(strIdNum.substr(i, 1))) {
			errflag = 1
		}
	}
	if (errflag == 1) {
		alert(cName + "請輸入正確格式！");
		obj.focus();
		return false
	}
	var intVerify1 = ("ABCDEFGHJKLMNPQRSTUVXYWZIO".indexOf(strIdFirst, 0)) + 10;
	data1 = "" + intVerify1 + strIdNum;
	var intVerify2 = eval(data1.substr(0, 1));
	for (i = 1; i <= 9; i++) {
		intVerify2 = intVerify2 + (eval(data1.substr(i, 1)) * (10 - i))
	}
	intVerify2 = intVerify2 + eval(data1.substr(10, 1));
	if (intVerify2 % 10 == 0) {
		return true
	} else {
		alert(cName + "請輸入正確格式！");
		obj.focus();
		return false
	}
}