// Function to handle submit for JSON input
function handleSubmit() {
    const jsonInput = document.getElementById('jsonInput').value;
    const errorElem = document.getElementById('jsonError');
    const dropdownDiv = document.getElementById('dropdownDiv');
    const responseDiv = document.getElementById('responseDiv');
    const responseDataElem = document.getElementById('responseData');

    // Validate JSON format
    try {
        const parsedJson = JSON.parse(jsonInput);
        errorElem.innerText = ""; // Clear error if valid

        // Call the API with the valid JSON payload
        fetch('https://bajaj-project-2a3zjqj4d-shivangi-guptas-projects-bec7f9ad.vercel.app/submit', { // Replace with your API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parsedJson)
        })
            .then(response => response.json())
            .then(data => {
                // Show the dropdown and the response section
                dropdownDiv.style.display = 'block';
                responseDiv.style.display = 'none'; // Hide response until options are selected

                // Store the data to be filtered later
                window.apiResponseData = data;
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an issue processing the request. Please try again.');
            });

    } catch (error) {
        // Show error if JSON is invalid
        errorElem.innerText = "Invalid JSON input!";
        dropdownDiv.style.display = 'none'; // Hide dropdown until valid JSON is entered
        responseDiv.style.display = 'none'; // Hide response section
    }
}

// Function to handle dropdown options submit
function handleDropdownSubmit() {
    const selectedOptions = Array.from(document.getElementById('options').selectedOptions).map(option => option.value);
    const responseDiv = document.getElementById('responseDiv');
    const responseDataElem = document.getElementById('responseData');

    // Filter response based on selected options
    const filteredData = filterData(selectedOptions);

    // Display filtered response
    responseDataElem.textContent = JSON.stringify(filteredData, null, 2);
    responseDiv.style.display = 'block'; // Show the response section
}

// Function to filter API response based on selected options
function filterData(selectedOptions) {
    let data = window.apiResponseData; // Stored response data
    let filteredData = {};

    if (selectedOptions.includes('Alphabets') && data.alphabets) {
        filteredData.alphabets = data.alphabets;
    }

    if (selectedOptions.includes('Numbers') && data.numbers) {
        filteredData.numbers = data.numbers;
    }

    if (selectedOptions.includes('Highest alphabet') && data.highest_alphabet) {
        filteredData.highest_alphabet = data.highest_alphabet;
    }

    return filteredData;
}
