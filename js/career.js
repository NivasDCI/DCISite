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
    <br/>
     NAME      :- ${name}
     <br/>
     ROll      :- ${Roll}
     <br/>
     Email     :-${email}
     <br/>
     Phone     :- ${phone}
     <br/>
     Experiance:-${experience}`;

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





// function CareerForm() {
//     let nameField = document.getElementById("Name");
//     let emailField = document.getElementById("Email");
//     let phoneField = document.getElementById("Phone");
//     let experienceField = document.getElementById("Experience");
//     let resumeField = document.getElementById("Document");

//     let name = nameField?.value || "";
//     let email = emailField?.value || "";
//     let phone = phoneField?.value || "";
//     let experience = experienceField?.value || "";
//     let resumeFile = resumeField?.files[0]; // Access the actual file object
//     const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;

//     // Construct the final message (excluding the attachment part)
//     let finalmessage = `Dear DCI, 

// I hope this message finds you well. We are reaching out from ${experience} to express our keen interest in working with your esteemed organization. Having reviewed your services/products, we are impressed with your reputation for excellence and believe there is great synergy between our businesses.

// We look forward to the opportunity to collaborate with you and explore how we can work together to achieve mutual success. Please let us know a convenient time to discuss further or schedule a meeting.

// Thank you, and we look forward to building a fruitful relationship with you.

// Best regards,
// ${name}.
// ${email}
// ${phone}.`;

//     // Validation checks
//     if (name.trim() === "") {
//         nameField.style.borderColor = "red";
//         alert('Please enter your name');
//         return;
//     } 
//     else if (email.trim() === "") {
//         emailField.style.borderColor = "red";
//         alert('Please enter your email');
//         return;
//     } 
//     else if (phone.trim() === "") {
//         phoneField.style.borderColor = "red";
//         alert('Please enter your phone number');
//         return;
//     } 
//     else if (experience.trim() === "" || experience === "Choose") {
//         experienceField.style.borderColor = "red";
//         alert('Please enter your company');
//         return;
//     } 
//     else if (!resumeFile || !allowedExtensions.exec(resumeFile.name)) {
//         alert('Please upload a file having extensions .pdf, .doc, or .docx only.');
//         resumeField.value = ''; // Clear the input
//         return;
//     }

//     // Here you can prepare to send the email (without attachment)
//     window.open(`mailto:santhananivas.dci@gmail.com?subject=HII DCI PROJECT-OFFER&body=${encodeURIComponent(finalmessage)}`);
    
//     // Simulate that the data is ready
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Phone:', phone);
//     console.log('Experience:', experience);
//     console.log('Resume File:', resumeFile ? resumeFile.name : 'No file selected');
    
//     // NOTE: To send the file, you need a server-side solution.
// }
