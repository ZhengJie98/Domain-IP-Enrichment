if (document.querySelector('.edit-profile')){
    document.querySelector('.edit-button-container').addEventListener('click',function(e){
        let editbodyall = document.querySelectorAll('.edit-profile');
            editbodyall.forEach(input=>{
                input.classList.add("d-none");

        })   
        let editbody = document.querySelector('#data-change');
        editbody.classList.remove("d-none");
    });

    document.querySelector('.password-button-change').addEventListener('click',function(e){
        let editbodyall = document.querySelectorAll('.edit-profile');
            editbodyall.forEach(input=>{
                input.classList.add("d-none");

        })   
        let editbody = document.querySelector('#password-change');
        editbody.classList.remove("d-none");
    });

    document.querySelector('.address-button-change').addEventListener('click',function(e){
        let editbodyall = document.querySelectorAll('.edit-profile');
            editbodyall.forEach(input=>{
                input.classList.add("d-none");

        })   
        let editbody = document.querySelector('#address-change');
        editbody.classList.remove("d-none");
    });

    document.querySelector('.profile-img').addEventListener('click',function(e){
        // console.log(e.target.parentNode.parentNode.parentNode)
        let editbodyall = document.querySelectorAll('.edit-profile');
            editbodyall.forEach(input=>{
                input.classList.add("d-none");

        })   
        let editbody = document.querySelector('#image-change-modal');
        editbody.classList.remove("d-none");
    });

    document.querySelectorAll('.cancel-edit').forEach(button=>{
        button.addEventListener('click',function(e){
            let editbody = document.querySelectorAll('.edit-profile');
            editbody.forEach(input=>{
                input.classList.add("d-none");

            })            
            const inputElements = document.querySelectorAll("input, textarea");
            inputElements.forEach(input => {
                input.value = "";
            });
        });    

    });
}
