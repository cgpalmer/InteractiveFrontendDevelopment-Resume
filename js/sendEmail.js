function sendMail(contactForm) {
    emailjs.send("cgpalmer91_gmail_com", "first_template", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Success", response);
        },
        function(error){
            console.log("Failed", error);
        });
    return false;
}