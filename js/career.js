let Roll="";



function Application(val){
    let Hide_class  = document.querySelector('.contact');

    if(val){
        Roll=val;
        console.log(Roll)
    }

    Hide_class.style.setProperty('display', 'block')
}

function closingButton(val){
    let CloseTag = document.querySelector('.contact');

    CloseTag.style.setProperty('display',val)

    console.log(Roll)
}

function CareerForm(){
    let nameField=document.getElementById("Name");
    let emailField=document.getElementById("Email");
    let phoneField=document.getElementById("Phone");
    let experianceField=document.getElementById("Experience");
    let resumeField=document.getElementById("Document");


    let name = nameField?.value || "";
    let email = emailField?.value || "";
    let phone = phoneField?.value || "";
    let experience = experianceField?.value || "";
    let resume = resumeField?.value || "";
    const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;

    let finalmessage = `Dear DCI, 


I hope this message finds you well. We are reaching out from ${experience} to express our keen intrest in working with your esteemed organized. Having reviewed your services/products, We are impressed with your reputation for excellence and believe there is grate synergy between our businesses.

we ${Roll}look forward to the opportunity to collaborate with you and explore how we can work together to achieve mutual success. Pleace let us know a convenient time to discuss further or schedule a meeting. 
                         
Thank you, and we look forward to buliding a fruitful relationship with you.
                         
${resume}

Best regards,
 ${name}.
 ${email}
 ${phone}.`;

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
    else if (experience.trim() === "" || experience === "Choose") {
        if (experianceField) companyField.style.borderColor = "red";
        alert('Please enter your company');
    } 
    else if (!allowedExtensions.exec(resume)) {
        alert('Please upload a file having extensions .pdf, .doc, or .docx only.');
        fileInput.value = ''; // Clear the input
        return false;
    }

    // if (resumeField) projectField.style.borderColor = "red";
    else {
        // Send email
        window.open(`mailto:esther@dcitechnologies.in?subject=HII DCI PROJECT-OFFER&body=${encodeURIComponent(finalmessage)}`);
        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(Roll)
        console.log(experience)
        console.log(resume)
    }

}
