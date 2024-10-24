// function SendEmail() {
//     console.log("click");

//     // Get form input values safely
//     let nameField = document.getElementById("Name");
//     let emailField = document.getElementById("Mail");
//     let companyField = document.getElementById("Company");
//     let phoneField = document.getElementById("Phone");
//     let projectField = document.getElementById("Project");
//     let checkboxField = document.getElementById("CheckBox");

//     // Extract values, fallback to empty strings if elements are not found
//     let name = nameField?.value || "";
//     let email = emailField?.value || "";
//     let company = companyField?.value || "";
//     let phone = phoneField?.value || "";
//     let project = projectField?.value || "";
//     let isCheckboxChecked = checkboxField?.checked || false;  // Using 'checked' for checkbox

//     // Final message
//     let finalmessage = `Hi DCI, 
//                         I am ${name}. We are calling from ${company}. Your shortlist in ${project} is in our company. Are you interested in working with us? Please send your resume to this email: ${email} or contact this mobile number: ${phone}.`;

//     // Validation with existence check for style manipulation
//     if (name.trim() === "") {
//         if (nameField) nameField.style.borderColor = "red";
//         alert('Please enter your name');
//     } 
//     else if (email.trim() === "") {
//         if (emailField) emailField.style.borderColor = "red";
//         alert('Please enter your email');
//     } 
//     else if (phone.trim() === "") {
//         if (phoneField) phoneField.style.borderColor = "red";
//         alert('Please enter your phone number');
//     } 
//     else if (company.trim() === "") {
//         if (companyField) companyField.style.borderColor = "red";
//         alert('Please enter your company');
//     } 
//     else if (project.trim() === "") {
//         if (projectField) projectField.style.borderColor = "red";
//         alert('Please enter your project');
//     } 
//     else if (!isCheckboxChecked) {  // Checkbox is not checked
//         if (checkboxField) checkboxField.style.borderColor = "red";  // Style is not usually applied to checkboxes, so this might not work
//         alert('Please accept the Privacy Policy');
//     }
//     else {
//         console.log(name);
//         console.log(company);
//         console.log(email);
//         console.log(phone);
//         console.log(project);
        
//         // Send email
//         window.open(`mailto:esther@dcitechnologies.in?subject=HII DCI PROJECT-OFFER&body=${encodeURIComponent(finalmessage)}`);
//     }
// }


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


I hope this message finds you well. We are reaching out from ${company} to express our keen intrest in working with your esteemed organized .Having reviewed your seervices/products, we are impressed with your reputation for excellence and believe there is grate synergy between our bussiness.

we look forword to the opportunity to collabrate with you and explore how we can work together to achive mutual success. Pleace let us know a convenient time to discuss further or schedule a meeting. 
                         
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
