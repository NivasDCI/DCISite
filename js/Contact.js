

function SendEmail() {
    console.log("click");

    // Get form input values safely
    let nameField = document.getElementById("Name");
    let emailField = document.getElementById("Mail");
    let companyField = document.getElementById("Company");
    let phoneField = document.getElementById("Phone");
    let projectField = document.getElementById("Project");
    let checkboxField = document.getElementById("CheckBox");

    // Extract values, fallback to empty strings if elements are not found
    let name = nameField?.value || "";
    let email = emailField?.value || "";
    let company = companyField?.value || "";
    let phone = phoneField?.value || "";
    let project = projectField?.value || "";
    let isCheckboxChecked = checkboxField?.checked || false;  // Checked property of the checkbox

    let finalmessage = `Dear DCI, 


I hope this message finds you well. We are reaching out from ${company} to express our keen intrest in working with your esteemed organized. Having reviewed your services/products, We are impressed with your reputation for excellence and believe there is grate synergy between our businesses.

we look forward to the opportunity to collaborate with you and explore how we can work together to achieve mutual success. Pleace let us know a convenient time to discuss further or schedule a meeting. 
                         
Thank you, and we look forward to buliding a fruitful relationship with you.
                         
                         
Best regards,
 ${name}.
 ${company}.
 ${email}
 ${phone}.`;

    // Validation with existence check for style manipulation
    if (name.trim() === "") {
        if (nameField) nameField.style.borderColor = "red";
        alert('Please enter your name');
    } 
    else if (email.trim() === "") {
        if (emailField) emailField.style.borderColor = "red";
        alert('Please enter your email');
    } 
    else if (phone.trim() === "") {
        if (phoneField) phoneField.style.borderColor = "red";
        alert('Please enter your phone number');
    } 
    else if (company.trim() === "") {
        if (companyField) companyField.style.borderColor = "red";
        alert('Please enter your company');
    } 
    else if (project.trim() === "") {
        if (projectField) projectField.style.borderColor = "red";
        alert('Please enter your project');
    } 
    else if (!isCheckboxChecked) {  // Check if checkbox is not checked
        alert('Please accept the Privacy Policy');
    }
    else {
        // Send email
        // window.open(`mailto:esther@dcitechnologies.in?subject=HII DCI PROJECT-OFFER&body=${encodeURIComponent(finalmessage)}`);
        Email.send({
            SecureToken: "314b2ae0-d10e-4c37-9d78-7a9f1916021e",
            To: 'santhananivas.dci@gmail.com',  // Recipient email
            From: "santhananivas.dci@gmail.com",  // Sender email
            Subject: "Career Form Submission",    // Subject of the email
            Body: finalmessage,                    // Email body content
        }).then(
            message => alert(message)
        ).catch(
            error => console.error('Failed to send email:', error) // Catch any sending error
        );
    }
}
