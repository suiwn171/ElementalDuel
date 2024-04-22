const form = document.querySelector('.needs-validation');

let validBlockcode = `<div class="valid-feedback"> Look good! </div>`;

let invalidBlockcode =  `<div class="invalid-feedback"> Invalid feedback. </div>`;

function verify(event){

    form.classList.add('was-validated');

    let validip = true;

    event.preventDefault();
    
    document.querySelectorAll(".invalid-feedback").forEach((el => {
        el.remove();
    }));

    document.querySelectorAll(".valid-feedback").forEach((ea => {
        ea.remove();
    }))

    let fname = document.getElementById('validationCustom01');
    if(fname.value.length < 8){
        fname.setCustomValidity('Invalid Firstname, too short.');

        fname.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode));
        validip = false;
    }else{
        fname.setCustomValidity('');
        fname.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode));
    }

    let lname = document.getElementById('validationCustom02');
    if(lname.value == fname.value || lname.value.length < 5){
        lname.setCustomValidity('Invalid Lastname, too short.');
        
        lname.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode));
        validip = false;
    }else{
        lname.setCustomValidity('');
        lname.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode));
    }




    let username = document.getElementById("validationCustomUsername");
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
    
    if(username.value.length < 8 || username.value.match(decimal)){
        username.setCustomValidity('Invalid First name too short');
        if (username.hasChildNodes()){
            username.removeChild(username.firstElementChild);
        }
        username.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode));
        validip = false;
    }
    else {
        username.setCustomValidity('');
        if (username.hasChildNodes()){
            username.removeChild(username.firstElementChild);
        }
        username.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode));
    }


    let city = document.getElementById('validationCustom03');
    if(city.value.trim() == ''){
        city.setCustomValidity('Invalid city, too short.');
        city.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode));
        validip = false;
    }else{
        city.setCustomValidity('');
        city.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode));
    }

    let State = document.getElementById('validationCustom04');
    if(State.selectedIndex == 0){
        State.setCustomValidity('Invalid State, too short.');
        State.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode));
        validip = false;
    }else{
        State.setCustomValidity('');
        State.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode));
    }

    let zip = document.getElementById('validationCustom05');
    if(isNaN(zip.value) || zip.value.toString().length < 5){
        zip.setCustomValidity('Invalid zip, too short.');
        zip.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode));
        validip = false;
    }else{
        zip.setCustomValidity('');
        zip.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode));
    }

    let check = document.getElementById('invalidCheck');
    if(check == false){
        check.setCustomValidity('Invalid check, too short.');
        check.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode));
        validip = false;
    }else{
        check.setCustomValidity('');
        check.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode));
    }

}

form.addEventListener('submit', verify);
