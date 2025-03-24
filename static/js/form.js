function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        service : document.getElementById("service").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_38y1eox","template_v0hwtm5",params).then(alert("Your email has been sent."))
}