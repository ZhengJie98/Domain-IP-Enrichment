﻿
function toggleTo(img) {
    var lengths1 = document.getElementById("tags").getElementsByTagName("div")
    for (var i = 1; i <= lengths1.length; i++) {
        if (img == i) {
            document.getElementById("oDIV" + i).style.display = "block";
            document.getElementById("tab_" + i).className = '';
        }
        else {
            document.getElementById("oDIV" + i).style.display = "none";
            document.getElementById("tab_" + i).className = '';
        }
    }
}


function ChangeDiv(divfront,divId,divName,zDivCount) 
{ 
 for(i=0;i<=zDivCount;i++)
 {
   document.getElementById(divName+i).style.display="none"; 
   document.getElementById(divfront+i).className='';
 }
 document.getElementById(divName+divId).style.display="block"; 
 document.getElementById(divfront+divId).className='on';
}


function distable(tablei) {

    var zy = document.getElementById("zy");
    var fw = document.getElementById("fw");
    var gk = document.getElementById("gk");
    var bz = document.getElementById("bz");
    var zy1 = document.getElementById("zy1");
    var fw1 = document.getElementById("fw1");
    var gk1 = document.getElementById("gk1");
    var bz1 = document.getElementById("bz1");
    var zy2 = document.getElementById("zy2");
    var fw2 = document.getElementById("fw2");
    var gk2 = document.getElementById("gk2");
    var bz2 = document.getElementById("bz2");
    var tzgg = document.getElementById("tzgg");
    var tzgg1 = document.getElementById("tzgg1");
    var zydt = document.getElementById("zydt");
    var zydt1 = document.getElementById("zydt1");
	var gnxw = document.getElementById("gnxw");
    var gnxw1 = document.getElementById("gnxw1");
    var vqimg = document.getElementById("vqimg");
    var vqredimg = document.getElementById("vqredimg");
    var emailredimg = document.getElementById("emailredimg");
    var emailimg = document.getElementById("emailimg");
    var readerredimg = document.getElementById("readerredimg");
    var readerimg = document.getElementById("readerimg");
    var flowerredimg = document.getElementById("flowerredimg");
    var flowerimg = document.getElementById("flowerimg");
	var telimg = document.getElementById("telimg");
    var telredimg = document.getElementById("telredimg");

    if (tablei == 1) {
        zy.style.display = "block";
        fw.style.display = "block";
        gk.style.display = "block";
        bz.style.display = "none";
        zy1.style.display = "none";
        fw1.style.display = "none";
        gk1.style.display = "none";
        bz1.style.display = "block";
        zy2.style.display = "none";
        fw2.style.display = "none";
        gk2.style.display = "none";
        bz2.style.display = "block";
    }
    if (tablei == 5) {
        zy.style.display = "none";
        fw.style.display = "block";
        gk.style.display = "block";
        bz.style.display = "block";
        zy1.style.display = "block";
        fw1.style.display = "none";
        gk1.style.display = "none";
        bz1.style.display = "none";
        zy2.style.display = "block";
        fw2.style.display = "none";
        gk2.style.display = "none";
        bz2.style.display = "none";
    }
    if (tablei == 6) {
        zy.style.display = "block";
        fw.style.display = "none";
        gk.style.display = "block";
        bz.style.display = "block";
        zy1.style.display = "none";
        fw1.style.display = "block";
        gk1.style.display = "none";
        bz1.style.display = "none";
        zy2.style.display = "none";
        fw2.style.display = "block";
        gk2.style.display = "none";
        bz2.style.display = "none";
    }
    if (tablei == 7) {
        zy.style.display = "block";
        fw.style.display = "block";
        gk.style.display = "none";
        bz.style.display = "block";
        zy1.style.display = "none";
        fw1.style.display = "none";
        gk1.style.display = "block";
        bz1.style.display = "none";
        zy2.style.display = "none";
        fw2.style.display = "none";
        gk2.style.display = "block";
        bz2.style.display = "none";
    }
    if (tablei == 8) {
        tzgg.style.display = "block";
        tzgg1.style.display = "none";
        zydt.style.display = "block";
        zydt1.style.display = "none";
    }
    if (tablei == 9) {
        tzgg.style.display = "none";
        tzgg1.style.display = "block";
        zydt.style.display = "none";
        zydt1.style.display = "block";
    }
	if (tablei == 18) {
        tzgg.style.display = "none";
        tzgg1.style.display = "block";
        zydt.style.display = "block";
        zydt1.style.display = "none";
        gnxw.style.display = "none";
        gnxw1.style.display = "block";
    }
    if (tablei == 10) {
        vqimg.style.display = "none";
        vqredimg.style.display = "block";

    }
    if (tablei == 11) {
        vqimg.style.display = "block";
        vqredimg.style.display = "none";
    }
    if (tablei == 12) {
        emailredimg.style.display = "block";
        emailimg.style.display = "none";
    }
    if (tablei == 13) {
        emailimg.style.display = "block";
        emailredimg.style.display = "none";
    }
    if (tablei == 14) {
        readerredimg.style.display = "block";
        readerimg.style.display = "none";
    }
    if (tablei == 15) {
        readerimg.style.display = "block";
        readerredimg.style.display = "none";
    }

    if (tablei == 16) {
        flowerredimg.style.display = "block";
        flowerimg.style.display = "none";
    }
    if (tablei == 17) {
        flowerimg.style.display = "block";
        flowerredimg.style.display = "none";
    }
    if (tablei == 22) {
        telredimg.style.display = "block";
        telimg.style.display = "none";
		//flowerredimg.style.display = "block";
        //flowerimg.style.display = "none";
    }
	if (tablei == 23) {
        telimg.style.display = "block";
        telredimg.style.display = "none";
    }


}
var changliang = 0;
function userclear(t) {
    if (changliang == 0) {
        t.value = "";
        t.className = "forminput_search03";
        t.focus();
        t.select();
        changliang = changliang + 1;
    } else {
        t.focus();
        t.select();
    }
}


var changliang1 = 0;
function userclear1(t) {
    if (changliang1 == 0) {
        t.value = "";
        t.className = "forminput_search03";
        t.focus();
        t.select();
        changliang1 = changliang1 + 1;
    } else {
        t.focus();
        t.select();
    }
}
var changliang2 = 0;
function userclear2(t) {
    if (changliang2 == 0) {
        t.value = "";
        t.className = "forminput_search03";
        t.focus();
        t.select();
        changliang2 = changliang2 + 1;
    } else {
        t.focus();
        t.select();
    }
}
var changliang3 = 0;
function userclear3(t) {
    if (changliang3 == 0) {
        t.value = "";
        t.className = "forminput_search03";
        t.focus();
        t.select();
        changliang3 = changliang3 + 1;
    } else {
        t.focus();
        t.select();
    }
}




function Search1() {
    var txtsjk = document.getElementById("textfield1").value;
    var formID = document.getElementById("form1");
    var actionURL = "http://opac.ysu.edu.cn:8080/opac/openlink.php";
    var select1 = document.getElementById("select10");
    switch (select1.value) {
        case "1":
            {
                actionURL = actionURL + "?strSearchType=title&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL";
                break;
            }
        case "2":
            {
                actionURL = actionURL + "?strSearchType=author&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL" ;
                break;
            }
        case "3":
            {
                actionURL = actionURL + "?strSearchType=keyword&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL" ;
                break;
            }
        case "4":
            {
                actionURL = actionURL + "?strSearchType=isbn&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL" ;
                break;
            }
        case "5":
            {
                actionURL = actionURL + "?strSearchType=asordno&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL" ;
                break;
            }
        case "6":
            {
                actionURL = actionURL + "?strSearchType=coden&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL" ;
                break;
            }
        case "7":
            {
                actionURL = actionURL + "?strSearchType=callno&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL" ;
                break;
            }
        case "8":
            {
                actionURL = actionURL + "?strSearchType=publisher&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL" ;
                break;
            }
        case "9":
            {
                actionURL = actionURL + "?strSearchType=series&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL" ;
                break;
            }
        case "10":
            {
                actionURL = actionURL + "?strSearchType=tpinyin&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL" ;
                break;
            }
        case "11":
            {
                actionURL = actionURL + "?strSearchType=callno&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL" ;
                break;
            }
			default:
            {
                actionURL = actionURL + "?strSearchType=apinyin&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL" ;
                break;
            }
    }
    window.open(actionURL, "_blank");
}

// js 过滤特殊字符
function stripscript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
        var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs;
}

function Search2() {
    var title = stripscript(document.getElementById("textfield2").value);
    actionURL = "source.aspx?caid=1&title=" + title;
    window.open(actionURL, "_blank");
}

function Search3() {
    var txted = document.getElementById("textfield3").value;
    var actionURL = "http://www.yidu.edu.cn/100000/search.html?q="+txted;

    window.open(actionURL, "_blank");
}

function Search4() {
    var txtss = document.getElementById("textfield4").value;
    var actionURL = "https://book.duxiu.com/search?Field=all&channel=search&sw=" + encodeURIComponent(txtss) + "&ecode=utf-8&edtype=&searchtype=&view=0";

    
    window.open(actionURL, "_blank");
}

function Search5() {
    var txtss = document.getElementById("textfield5").value;
    var actionURL = "https://ysu.summon.serialssolutions.com/search?s.q=data#!/search?ho=t&include.ft.matches=f&l=zh-CN&q=" + encodeURIComponent(txtss);

    window.open(actionURL, "_blank");
}

function EDUchange() {
    var edselect = document.getElementById("select2");

    var all = document.getElementById("all");
    var zwts = document.getElementById("zwts");
    var wwts = document.getElementById("wwts");
    var qkwz = document.getElementById("qkwz");
    var zwqk = document.getElementById("zwqk");
    var wwqk = document.getElementById("wwqk");
    var xwlw = document.getElementById("xwlw");

    switch (edselect.value) {
        case "99":
            {
                all.style.display = "block";
                zwts.style.display = "none";
                wwts.style.display = "none";
                qkwz.style.display = "none";
                zwqk.style.display = "none";
                wwqk.style.display = "none";
                xwlw.style.display = "none";
                break;
            }
        case "0":
            {
                all.style.display = "none";
                zwts.style.display = "block";
                wwts.style.display = "none";
                qkwz.style.display = "none";
                zwqk.style.display = "none";
                wwqk.style.display = "none";
                xwlw.style.display = "none";
                break;
            }
        case "1":
            {
                all.style.display = "none";
                zwts.style.display = "none";
                wwts.style.display = "none";
                qkwz.style.display = "block";
                zwqk.style.display = "none";
                wwqk.style.display = "none";
                xwlw.style.display = "none";
                break;
            }
        case "2":
            {
                all.style.display = "none";
                zwts.style.display = "none";
                wwts.style.display = "none";
                qkwz.style.display = "none";
                zwqk.style.display = "none";
                wwqk.style.display = "block";
                xwlw.style.display = "none";
                break;
            }
        case "3":
            {
                all.style.display = "none";
                zwts.style.display = "none";
                wwts.style.display = "none";
                qkwz.style.display = "none";
                zwqk.style.display = "none";
                wwqk.style.display = "none";
                xwlw.style.display = "block";
                break;
            }
        case "4":
            {
                all.style.display = "none";
                zwts.style.display = "none";
                wwts.style.display = "block";
                qkwz.style.display = "none";
                zwqk.style.display = "none";
                wwqk.style.display = "none";
                xwlw.style.display = "none";
                break;
            }
        case "5":
            {
                all.style.display = "none";
                zwts.style.display = "none";
                wwts.style.display = "none";
                qkwz.style.display = "none";
                zwqk.style.display = "block";
                wwqk.style.display = "none";
                xwlw.style.display = "none";
                break;
            }

    }
}
