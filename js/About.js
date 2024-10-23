
let previousContent = ".Who_Content";  // Variable to store previous value of content

function Content(val) {
  // Log the previous content before changing it
  if (previousContent) {
    console.log("Previous content:", previousContent);  // Log the previous value of `content`
    
    // Select the previous element by class name and hide it
    let Hide_Class = document.querySelector(previousContent);
    if (Hide_Class) {
      let Hide_Value = "none";
      Hide_Class.style.setProperty('display', Hide_Value);  // Hide the previous content
    }
  }

  let content = val;
  let content_Class = document.querySelector("." + content); // Select the current element by class name
  
  if (content_Class) {
    // Set the new display value to 'block' to show the current content
    let newValue = 'block';
    content_Class.style.setProperty('display', newValue);
    
    // Store the current content as the previous content for the next call
    previousContent = "." + val;  // Store the class with the leading dot (e.g., ".newClass")
  } else {
    console.error("Element with class '" + content + "' not found.");
  }
}