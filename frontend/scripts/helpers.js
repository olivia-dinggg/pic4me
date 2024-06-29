
document.getElementById('fileInput').addEventListener('change', encodeImageFileAsURL);
function encodeImageFileAsURL() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
        const base64String = reader.result.split(',')[1];
        console.log(base64String); // This is your Base64 string
        // You can do something else with the base64String, like sending it to a server
    }

    if (file) {
        reader.readAsDataURL(file); // This triggers the onloadend event above
    } else {
        console.error("Failed to load file");
    }
}

function displayImageFromBase64(base64String) {
    return "data:image/jpeg;base64," + base64String;
}