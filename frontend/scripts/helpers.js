 
  async function getRequest(url, params) {
    try {
      // Construct query string from params if provided
      if (params) {
        const queryString = Object.keys(params)
          .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
          .join('&');
        url = `${url}?${queryString}`;
      }
  
      // Make the GET request using fetch
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse response body as JSON
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

function encodeImage(file) {
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

function decodeImage(base64String) {
    return "data:image/jpeg;base64," + base64String;
}