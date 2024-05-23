document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('uploadForm');
    const alertBox = document.getElementById('alert');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        fetch('/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(responseData => {
            if (responseData.error) {
                showAlert('danger', 'Error uploading project: ' + responseData.error);
            } else {
                showAlert('success', 'Project uploaded successfully');
                form.reset();
            }
        })
        .catch(error => {
            showAlert('danger', 'Error uploading project: ' + error.message);
        });
    });

    function showAlert(type, message) {
        alertBox.className = `alert alert-${type}`;
        alertBox.textContent = message;
        setTimeout(() => {
            alertBox.className = '';
            alertBox.textContent = '';
        }, 5000);
    }
});
