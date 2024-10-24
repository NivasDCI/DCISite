

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


I hope this message finds you well. We are reaching out from ${company} to express our keen intrest in working with your esteemed organized .Having reviewed your services/products, we are impressed with your reputation for excellence and believe there is grate synergy between our business.

we look forword to the opportunity to collaborate with you and explore how we can work together to achive mutual success. Pleace let us know a convenient time to discuss further or schedule a meeting. 
                         
Thank you, and we look forword to buliding a fruitful relationship with you.
                         
                         
Best regards,
 ${name}.
 ${company}.
 ${email}
 ${phone}..`;

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
        window.open(`mailto:esther@dcitechnologies.in?subject=HII DCI PROJECT-OFFER&body=${encodeURIComponent(finalmessage)}`);
    }
}
