/*
Copyright (c) 2021 ACESWEB,inc.
*/

//Container Query Polyfill
if (!('container' in document.documentElement.style)) {
	import('https://unpkg.com/container-query-polyfill@^0.2.0');
}

//遅延読込用
window.addEventListener('load',function(){
  document.body.classList.add('onload');
  document.body.setAttribute('ontouchstart', '');
});



//ランキング画像スライド
const rankslider = document.querySelectorAll('.rankbox-slider');
rankslider.forEach(function(v,e){
  let l = v.childElementCount;
  if(l > 1){
    //spanタグに変更
    for(let a = 0; a < l; a++) {
      let img_parent = v.children[a];
      img_parent.outerHTML = '<span>' + img_parent.outerHTML + '</span>';
      let parentElem = v.children[a].firstChild;
      while (parentElem.firstChild) {
        parentElem.parentNode.insertBefore(parentElem.firstChild, parentElem);
      }
      parentElem.parentNode.removeChild(parentElem);
    }
    //クラス名「rslide+e」で囲む
    v.innerHTML = "<div class="+'rslide'+e+">" + v.innerHTML + "</div>";
    
    //サムネイル作成
    let clone = v.firstChild.cloneNode(true);
    clone.className = 'crl-d';
    
    //前後ボタン表示
    var arrow = document.createElement('div');
    arrow.classList.add('rslide-arrow');
    arrow.innerHTML = "<button class="+'prev'+">prev</button><button class="+'next'+">next</button>";
    v.appendChild(arrow);

    //クラス名「rslide-wrap」で囲む
    v.innerHTML = "<div class="+'rslide-wrap'+">" + v.innerHTML + "</div>";
    
    //サムネイル表示
    for(let b = 0; b < clone.childElementCount; b++) {
      let img_parent = clone.children[b];
      img_parent.outerHTML = '<button class="crl-d-ctl">' + img_parent.outerHTML + '</button>';
      let parentElem = clone.children[b].firstChild;
      while (parentElem.firstChild) {
        parentElem.parentNode.insertBefore(parentElem.firstChild, parentElem);
      }
      parentElem.parentNode.removeChild(parentElem);
    }
    clone.children[0].classList.add('selected');
    v.appendChild(clone);
    
    //スライダー初期化
    const mySiema = new Siema({
      selector: '.rslide' + e,
      loop: true,
      onChange: () => {
        v.querySelector('.selected').classList.remove('selected');
        crlD.children[mySiema.currentSlide].classList.add('selected');
      }
    });
    
    //サムネイルボタン
    let crlD = v.querySelector('.crl-d');
    let crlDctl = crlD.querySelectorAll('.crl-d-ctl');
    for(let c = 0; c < crlD.childElementCount; c++) {
      crlD.children[c].addEventListener('click', (e) => {
        mySiema.goTo([c]);
      }, false);
    }
    
    //前後ボタン
    v.querySelector('.prev').addEventListener('click', (e) => {
      mySiema.prev();
    }, false);
    v.querySelector('.next').addEventListener('click', (e) => {
      mySiema.next();
    }, false);
  }
});



// もっと見るボタン 
const moreBtn = document.querySelectorAll('.pagenation__more');
if(moreBtn != null) {
  for(let i = 0; i < moreBtn.length; i++) {
    let moreCount = moreBtn[i].getAttribute('data-more');
    if(moreCount == '') moreCount = 4;
    const listElement = moreBtn[i].previousElementSibling;
    const childNodesCount = listElement.childElementCount;
    if(childNodesCount <= moreCount){
       moreBtn[i].remove()
    } else {
      for(let b=moreCount; b<childNodesCount; b++) {
        listElement.children[b].classList.add('is__btn__hidden');
      }
      moreBtn[i].firstElementChild.addEventListener('click', (e) => {
        e.preventDefault();
        const hiddenItems = listElement.querySelectorAll('.is__btn__hidden');
        for(let c = 0; c < hiddenItems.length; c++) {
          if(c < moreCount) {
            hiddenItems[c].classList.remove('is__btn__hidden');
          }
        }
        if(hiddenItems.length <= moreCount) {
          moreBtn[i].remove();
        }
      }, false);
    }
  }
}



// グローバルナビ 
const spmenuBtn = document.getElementById('spmenu-btn');
const header = document.getElementById('header');
let newElement = document.createElement('div');
newElement.setAttribute('id','spmenu-overlay');
header.appendChild(newElement);
let html = document.getElementsByTagName('html')[0];
let spmenu = Boolean('');
const wrap = document.getElementById('wrap');
let headerStyle;
let headerHeight;
function wrapPaddingTop() {
	if(!header.classList.contains('fix')) {
		headerStyle = getComputedStyle(header,null).getPropertyValue('position');
		headerHeight = header.clientHeight + parseInt(window.getComputedStyle(header).marginBottom) + parseInt(window.getComputedStyle(header).marginTop);
		if(headerStyle=='static' || headerStyle=='relative') wrap.style.paddingTop = headerHeight+'px';
		else if(headerStyle=='fixed') wrap.style.paddingTop = '';
	}
}
function clickFunction() {
	if(getComputedStyle(spmenuBtn,null).getPropertyValue('display')!='none') {
		wrapPaddingTop();
		spmenu = !spmenu;
		html.dataset.spmenu = spmenu;
	}
}
if(spmenuBtn != null) {
  spmenuBtn.addEventListener('click',clickFunction,false);
	newElement.addEventListener('click',clickFunction,false);
}
let spMenuLinkAll = document.getElementById('spmenu').querySelectorAll('a[href*="#"]');
for (let i = 0; i < spMenuLinkAll.length; i++){
	spMenuLinkAll[i].addEventListener('click',clickFunction,false);
}
const spmenuSwitch = matchMedia('(min-width: 1025px)');
handle(spmenuSwitch);
spmenuSwitch.addListener(handle);
function handle(mq) {
	if (mq.matches) {
		spmenu = Boolean('');
		html.dataset.spmenu = spmenu;
		if(!header.classList.contains('fix')) wrap.style.paddingTop = '';
	}
}



// カテゴリーメニュー
const haschildAll = document.querySelectorAll('.haschild');
if(haschildAll != null) {
  for(let i = 0; i < haschildAll.length; i++) {
    haschildAll[i].addEventListener('click', (e) => {
      e.stopPropagation();
      e.target.classList.toggle('show');
    }, false);
  }
}



// Q&Aアコーディオン
const qalistAll = document.querySelectorAll('.qa-list');
if(qalistAll != null) {
  for(let a = 0; a < qalistAll.length; a++) {
    const question2All = qalistAll[a].querySelectorAll('.question2');
    for(let i = 0; i < question2All.length; i++) {
      question2All[i].addEventListener('click', (e) => {
        e.target.classList.toggle('show');
      }, false);
    }
  }
}



// ページトップ
const toTop = document.getElementById('pagetop');
const mainHeader = document.getElementById('main-header');
if(toTop != null) {
  (new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      toTop.classList.remove('show');
    } else {
      toTop.classList.add('show');
    }
  },{
    rootMargin: '50% 0px'
  })).observe(mainHeader);
}



// 追従CTA
const ctaFixed = document.getElementById('cta-fixed');
if(ctaFixed != null) {
  (new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      ctaFixed.classList.add('fixed__follow');
    }
  },{
    rootMargin: '0px 0px -50% 0px'
  })).observe(ctaFixed);
  const fixedCloseBtn = ctaFixed.querySelector('#cta-fixedbtn');
  if(fixedCloseBtn != null) {
    fixedCloseBtn.addEventListener('click', () => {
      ctaFixed.classList.toggle('fixed__close');
    }, false);
  }
}


