// Custom JavaScript for Formspree AJAX submission
window.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = document.querySelector(".contact-form");
    var status = document.createElement("div"); // To display submission status
    status.style.marginTop = "15px";
    form.parentNode.insertBefore(status, form.nextSibling);


    // Success and Error functions for after the form is submitted
    function success() {
        form.reset();
        status.classList.remove("alert", "alert-danger");
        status.classList.add("alert", "alert-success");
        status.innerHTML = "Thanks! Your message has been sent.";
    }

    function error() {
        status.classList.remove("alert", "alert-success");
        status.classList.add("alert", "alert-danger");
        status.innerHTML = "Oops! There was a problem submitting your form.";
    }

    // Handle the form submission event
    form.addEventListener("submit", function(ev) {
        ev.preventDefault(); // Prevent the default form submission
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// Helper function for AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}