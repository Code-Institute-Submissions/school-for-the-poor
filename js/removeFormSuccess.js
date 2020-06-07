function removeFormSuccess(){  
    var el1 = document.getElementById("contact-div");
    el1.parentNode.removeChild(el1);    
    var el2 = document.getElementById("contact-info");
    el2.parentNode.removeChild(el2);
    var el = "";
    el += `<p>Thanks! We've received you're request and will be in touch shortly.</p>`;
      document.getElementById("email-success").innerHTML = el;
    el.classList.add("sm-text");
}