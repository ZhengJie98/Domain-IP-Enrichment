//******************
//¶Œ
//******************
function f_showItem(product_id, type) {

    if(type == 1) {
        //è´©è´©
        wUrl = "./?mode=ITEM&p_id=" + product_id;
        gf_OpenNewWindow(wUrl, "Item", "width=600:height=500");

    } else {
        //
        wUrl = "./?mode=ITEM2&p_id=" + product_id;
        location.href=wUrl;
    }
}

//***********************
//¶Œ(¶≥)
//***********************
function f_showItem2(product_id) {
    wUrl = "./?mode=ITEM&state=INFO&p_id=" + product_id;
    gf_OpenNewWindow(wUrl, "Item", "width=600:height=500");
}


//************************
//è©©è´£
//************************
function f_check_num(select) {
    if(select.value == 0) {
        window.alert("è©©");
        return false;
    } else {
        return true;
    }
}

//***********************************
//è©©UPDOWN
//***********************************
function f_change_num2(select, pType, pMinNum, pStockNum) {
    if( select.value.match(/[^0-9]/)){ select.value = pMinNum; return; }
    wNum = parseInt(select.value);
    if (pType == "0" && wNum > pMinNum) {
        select.value = String(wNum-1);
    }
    if (pType == "1") {
        if (pStockNum) {
            if (wNum >= pStockNum) return;
        }
        select.value = String(wNum+1);
    }
}
//***********************************
//¶¥
//***********************************
function f_opener_move(URL) {
    if(opener.closed) {
        NewWin=window.open("","blank");
        NewWin.location.href=URL;
    } else {
        opener.location.href=URL;
    }
    window.close();
}

function f_opener_reload() {
    opener.location.reload();
    window.close();
}

//**************************************************************************************
////////////////////      //////////////////
//--------------------------------------------------------------------------------------
//        gf_OpenNewWindow(URL,NAME,SIZE)
//        SIZE"width=800:height=600"¶≥è‹·
//**************************************************************************************
function gf_OpenNewWindow(pURL,pName,pSize){
    var wWidth,wHeight;
    var wSize,wFeatures;
    var wLeft,wTop,PositionX,PositionY;

    wWidth = window.screen.availWidth/2;
    wHeight = window.screen.availHeight/2;
    wSize = pSize.split(":");
    wLeft = wSize[0].split("=");
    wTop = wSize[1].split("=");
    PositionX = wWidth-wLeft[1]/2;
    PositionY = wHeight-wTop[1]/2;

    wFeatures = wSize+",left="+PositionX+",top="+PositionY;
    wWindow = window.open(pURL,pName,wFeatures+",scrollbars=yes,status=yes,resizable=yes");

    wWindow.focus();
}


function empt_cart() {
    if(confirm ("")) {
        document.location.href = "./?mode=cart&empt=1";
    }
}

//***********************************
//
//***********************************
function mm_send(Type) {
    document.frm.type.value  = Type;
    document.frm.submit();
}

//***********************************
//Email¶«è´©
//***********************************
function validate_email(Email) {

    if(!Email.match(/^[a-zA-Z0-9./?+_-]+\@[a-zA-Z0-9._-]+$/)) {
        return false;
    }
    return true;
}

