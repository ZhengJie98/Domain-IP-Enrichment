(function () {
    const modalArea = document.getElementById('modalArea');
    const openModal = document.getElementById('openModal');
    const closeModal = document.getElementById('closeModal');
    const modalBg = document.getElementById('modalBg');
    const toggle = [openModal,closeModal,modalBg];

    for(let i=0, len=toggle.length ; i<len ; i++){
    toggle[i].addEventListener('click',function(){
      modalArea.classList.toggle('is-show');
    },false);
    }
}());


(function () {
    const modalArea_sp = document.getElementById('modalArea_sp');
    const openModal_sp = document.getElementById('openModal_sp');
    const closeModal_sp = document.getElementById('closeModal_sp');
    const modalBg_sp = document.getElementById('modalBg_sp');
    const toggle_sp = [openModal_sp,closeModal_sp,modalBg_sp];

    for(let i=0, len=toggle_sp.length ; i<len ; i++){
    toggle_sp[i].addEventListener('click',function(){
      modalArea_sp.classList.toggle('is-show');
    },false);
    }
}());