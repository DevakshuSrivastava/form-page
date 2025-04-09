document.getElementById('webpageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        if (data[key]) {
            if (!Array.isArray(data[key])) {
                data[key] = [data[key]];
            }
            data[key].push(value);
        } else {
            data[key] = value;
        }
    });

    // Send data to Google Apps Script
    fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        mode: 'no-cors', // Add this to avoid CORS errors
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Success:', response);
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit the form. Please try again.');
    });
});
