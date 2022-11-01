
let globalIsSubmitted = false

function validate(isSubmitted = false) {

    let FirstName = document.getElementById("first-name").value
    let MiddleName = document.getElementById("middle-Name").value
    let LastName = document.getElementById("last-Name").value
    let Gender1 = document.getElementById("gender1").checked
    let Gender2 = document.getElementById("gender2").checked
    let Gender3 = document.getElementById("gender3").checked
    let PhoneNumber = document.getElementById("phone-number").value
    let email = document.getElementById("email").value
    let City = document.getElementById("city").value
    let State = document.getElementById("state").value
    let Country = document.getElementById("country").value
    let Zip = document.getElementById("zip").value
    let TnC = document.getElementById("TnC").checked
    let error = false


    if (isSubmitted) {
        globalIsSubmitted = true
    }
    var name = /^[a-zA-Z]+$/;
    if (globalIsSubmitted) {

        /* First Name
       - At least 3 characters
       - No digits allowed  
       - without Number and without space
       */
        if ((FirstName.length > 2) && (isNaN(FirstName)) && FirstName.match(name)) {
            document.getElementById("first-name-valid").style.display = 'block'
            document.getElementById("first-name-invalid").style.display = 'none'
        } else {
            document.getElementById("first-name-invalid").style.display = 'block'
            document.getElementById("first-name-valid").style.display = 'none'
            error = true
        }

        /* Middle Name
       - At least 3 characters
       - No digits allowed  
       - without Number and without space
       */
        if (MiddleName.length > 2 && (isNaN(MiddleName)) && MiddleName.match(name)) {
            document.getElementById("middle-name-valid").style.display = 'block'
            document.getElementById("middle-name-invalid").style.display = 'none'
        } else {
            document.getElementById("middle-name-invalid").style.display = 'block'
            document.getElementById("middle-name-valid").style.display = 'none'
            error = true
        }

        /* Last Name
       - At least 3 characters
       - No digits allowed  
       - without Number and without space
       */
        if (LastName.length > 2 && (isNaN(LastName)) && LastName.match(name)) {
            document.getElementById("last-name-valid").style.display = 'block'
            document.getElementById("last-name-invalid").style.display = 'none'
        } else {
            document.getElementById("last-name-invalid").style.display = 'block'
            document.getElementById("last-name-valid").style.display = 'none'
            error = true
        }

        /* Gender
        - Only one selection allowed
        - At least one selected
        */
        if (Gender1 || Gender2 || Gender3) {
            document.getElementById("gender-invalid").style.display = 'none'
            document.getElementById("gender-valid").style.display = 'block'
        } else {
            document.getElementById("gender-invalid").style.display = 'block'
            document.getElementById("gender-valid").style.display = 'none'
            error = true
        }

        /* Phone No.// 
        - first 1 digit is 6,7,8,9 only
        - remaining are 0-9 
        - phone no without space and without character
        - Length exactly equal to 10 characters
        - Only numbers allowed
        - Cannot start with 0, 1, 2, 3, 4, 5
        */
        var phoneno = /^\(?([6-9]{1})\)?([0-9]{9})$/;
        if ((!isNaN(PhoneNumber)) && (PhoneNumber.match(phoneno))) {
            document.getElementById("phone-number-valid").style.display = 'block'
            document.getElementById("phone-number-invalid").style.display = 'none'
        } else {
            document.getElementById("phone-number-invalid").style.display = 'block'
            document.getElementById("phone-number-valid").style.display = 'none'
            error = true
        }

        /* Email-ID 
        - Include '@'
        - Include '.' 
        - Atleast 1 character before '@'
        - Atleast 2 characters after last '.'
        - First character should not be '@'
        - last digit should not be '.' and '@'
        - Email entered (not left blank)
        */
        if (email.includes('@') &&
            email.includes('.') &&
            (email.indexOf('@') != email.length - 1) &&
            email.indexOf('@') != 0 &&
            email.length - email.lastIndexOf(".") >= 3) {
            document.getElementById("email-valid").style.display = 'block'
            document.getElementById("email-invalid").style.display = 'none'
        } else {
            document.getElementById("email-invalid").style.display = 'block'
            document.getElementById("email-valid").style.display = 'none'
            error = true
        }

        /* City 
        - selection of city of all india only
        - Only one selection allowed
        - At least one selected
        */
        if (City != 'None') {
            document.getElementById("city-valid").style.display = 'block'
            document.getElementById("city-invalid").style.display = 'none'
        } else {
            document.getElementById("city-invalid").style.display = 'block'
            document.getElementById("city-valid").style.display = 'none'
            error = true
        }

        /* State 
        - selection of state of all india only
        - Only one selection allowed
        - At least one selected
        */
        if (State != 'None') {
            document.getElementById("state-valid").style.display = 'block'
            document.getElementById("state-invalid").style.display = 'none'
        } else {
            document.getElementById("state-invalid").style.display = 'block'
            document.getElementById("state-valid").style.display = 'none'
            error = true
        }

        // Country // selection of country india and USA only
        /* Country 
        - selection of country india and USA only
        - Only one selection allowed
        - At least one selected
        */
        if (Country != 'None') {
            document.getElementById("country-valid").style.display = 'block'
            document.getElementById("country-invalid").style.display = 'none'
        } else {
            document.getElementById("country-invalid").style.display = 'block'
            document.getElementById("country-valid").style.display = 'none'
            error = true
        }

        /* Pin Code
        - enter no. only
        -length should be 6 digit
        - character not allowed
        */
        let zipNumber = parseInt(Zip)
        if ((Zip.length === 6) && (!isNaN(zipNumber))) {
            document.getElementById("zip-valid").style.display = 'block'
            document.getElementById("zip-invalid").style.display = 'none'
        } else {
            document.getElementById("zip-invalid").style.display = 'block'
            document.getElementById("zip-valid").style.display = 'none'
            error = true
        }

        // Terms & Conditions //
        if (TnC) {
            document.getElementById("TnC-invalid").style.display = 'none'
        } else {
            document.getElementById("TnC-invalid").style.display = 'block'
            error = true
        }

        // Alert Message //
        if (!error && isSubmitted) {
            alert('Your details have been saved successfully!')

            // Reset Form //
            document.getElementById('registration-form').reset()

            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for (let i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for (let i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }
}
