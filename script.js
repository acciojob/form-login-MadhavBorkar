function getFormvalue(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values of the First Name and Last Name fields
    const FName = document.getElementById("first-name").value;
    const LName = document.getElementById("last-name").value;

    // Display an alert with the first and last name
    alert(`${FName} ${LName}`);
}