function sendMail() {
    var params = {
        firstname: document.getElementById("FirstName").value,
        lastname: document.getElementById("LastName").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("Phone Number").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_29es8h4";
    const templateID = "template_fi4vd1a";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {

            document.getElementById("FirstName").value = "";
            document.getElementById("LastName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("Phone Number").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent successfully");

        })
        .catch((err) => console.log(err));
}