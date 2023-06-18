function data_copy(data){
    navigator.clipboard.writeText(data);
}



function hideModal(e){
	document.getElementById('modal').style.opacity = '0';
	setTimeout(function(){
		document.getElementById('modal').style.display = 'none';
	},400)
}

function showModal(e){
	document.getElementById('modal').style.display = 'flex';
	setTimeout(function(){
		document.getElementById('modal').style.opacity = '1';
	},100);
	e.preventDefault();
}


if(document.getElementById('modal')){
	document.getElementById('close').addEventListener('click',hideModal,false);
	document.getElementById('embed').addEventListener('click',showModal,false);

	document.getElementById('modal').addEventListener('click',function(e){
		if(e.target.className == 'modal'){
			hideModal();
		}	
	},false);
}

//script search...
document.getElementById('s').addEventListener('keyup',change,false)
document.getElementById('s').addEventListener('focusout',hideSearch,false)
document.getElementById('s').addEventListener('focusin',change,false)

function change(){
  let value = this.value.toLowerCase()

  if(value != ''){
    let li;
    document.getElementById('result').innerHTML = ''
    for (var i = 0; i < search_data.length; i++) {
      if(search_data[i].substr(0,value.length) == value){
        document.getElementById('result').style.display = "block"

        let newLi = document.createElement('li')
        newLi.addEventListener('mousedown',searchSelect,false)
        newLi.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> '+search_data[i]
        document.getElementById('result').appendChild(newLi)

      }
    }

  
  }else{
    hideSearch()
  }
  
}

function hideSearch(){
  document.getElementById('result').style.display = "none"
}

function searchSelect(){
  console.log(this.innerHTML)
  let value = this.innerHTML.split('>')
  value = value[value.length-1]
  document.getElementById('s').value = value.trim()
  document.getElementById('searchform').submit()
}
