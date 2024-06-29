const BACKEND_PORT = '5000';

// document.getElementById('fileInput').addEventListener('change', encodeImageFileAsURL);
function encodeImageFileAsURL() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onloadend = function () {
    const base64String = reader.result.split(',')[1];
    console.log(base64String); // This is your Base64 string
    // You can do something else with the base64String, like sending it to a server
  };

  if (file) {
    reader.readAsDataURL(file); // This triggers the onloadend event above
  } else {
    console.error('Failed to load file');
  }
}

function displayImageFromBase64(base64String) {
  return 'data:image/jpeg;base64,' + base64String;
}

const generateApiFunction = (method) => {
  return async function (path, data) {
    let reqBody;
    let urlToFetch = `http://localhost:${BACKEND_PORT}/${path}`;
    if (method === 'GET' || method === 'DELETE') {
      urlToFetch += `?${data}`;
    } else {
      reqBody = JSON.stringify(data);
    }

    const response = await fetch(urlToFetch, {
      method,
      body: reqBody,
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await response.json();
  };
};

export const apiCallPost = generateApiFunction('POST');
export const apiCallPut = generateApiFunction('PUT');
export const apiCallGet = generateApiFunction('GET');
export const apiCallDelete = generateApiFunction('DELETE');
