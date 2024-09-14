document.addEventListener('DOMContentLoaded', () => {
    // Close modal functionality
    const closeModalButton = document.getElementById('closeModal');
    closeModalButton.addEventListener('click', function (e) {
        document.getElementById('modal').style.display = 'none';
    });
});

function validateForm() {
    let isValid = true;
    let price = 500
    // Get form elements
    let nameField = document.getElementById('name');
    let ageField = document.getElementById('age');
    let guardianField = document.getElementById('guardian');
    let phoneField = document.getElementById('phone');
    let emailField = document.getElementById('email');
    let instructorField = document.getElementById('instructor');
    let carTypeField = document.getElementById('carType');
    let acOptionField = document.getElementById('acOption');
    let lessonTimeField = document.getElementById('lessonTime');
    let lessonDateField = document.getElementById('lessonDate');
    let daysPerWeekField = document.getElementById('daysPerWeek');
    let lessonDaysField = document.getElementById('lessonDays');
    let lessonHours = document.getElementById('lessonHours');

    // Regular Expressions
    const phoneRegex = /^[0-9]{11}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation for Name
    if (nameField.value === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Validation for Age
    if (ageField.value === '') {
        document.getElementById('ageError').textContent = 'Age is required';
        isValid = false;
    } else if (Number(ageField.value) < 18) {
        document.getElementById('ageError').textContent = 'Age must be 18 or older';
        isValid = false;
    } else {
        document.getElementById('ageError').textContent = '';
    }

    // Validation for Guardian Details
    if (guardianField.value === '') {
        document.getElementById('guardianError').textContent = 'Guardian details are required ';
        isValid = false;
    } else {
        document.getElementById('guardianError').textContent = '';
    }

    // Validation for Phone Number
    if (phoneField.value === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required';
        isValid = false;
    } else if (!phoneRegex.test(phoneField.value)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number';
        isValid = false;
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    // Validation for Email
    if (emailField.value === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(emailField.value)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validation for Preferred Instructor
    if (instructorField.value === '') {
        document.getElementById('instructorError').textContent = 'Preferred instructor is required';
        isValid = false;
    } else {
        document.getElementById('instructorError').textContent = '';
    }

    // Validation for Car Type
    if (carTypeField.value === '') {
        document.getElementById('carTypeError').textContent = 'Car type is required';
        isValid = false;
    } else {
        document.getElementById('carTypeError').textContent = '';
    }

    // Validation for AC Option
    if (acOptionField.value === '') {
        document.getElementById('acOptionError').textContent = 'AC option is required';
        isValid = false;
    } else {
        document.getElementById('acOptionError').textContent = '';
    }

    // Validation for Lesson Time
    if (lessonTimeField.value === '') {
        document.getElementById('lessonTimeError').textContent = 'Lesson time is required';
        isValid = false;
    } else {
        document.getElementById('lessonTimeError').textContent = '';
    }

    if (lessonHours.value === '') {
        document.getElementById('hoursError').textContent = 'Lesson Hours is required';
        isValid = false;
    } else {
        document.getElementById('hoursError').textContent = '';
    }

    // Validation for Lesson Date
    if (lessonDateField.value === '') {
        document.getElementById('lessonDateError').textContent = 'Lesson date is required';
        isValid = false;
    } else {
        document.getElementById('lessonDateError').textContent = '';
    }

    // Validation for Days Per Week
    if (daysPerWeekField.value === '') {
        document.getElementById('daysPerWeekError').textContent = 'Days per week is required';
        isValid = false;
    } else if (Number(daysPerWeekField.value) < 1 || Number(daysPerWeekField.value) > 5) {
        document.getElementById('daysPerWeekError').textContent = 'Days per week must be between 1 and 5';
        isValid = false;
    } else {
        document.getElementById('daysPerWeekError').textContent = '';
    }

    // Validation for Lesson Days
    if (lessonDaysField.selectedOptions.length === 0) {
        document.getElementById('lessonDaysError').textContent = 'At least one lesson day is required';
        isValid = false;
    } else {
        document.getElementById('lessonDaysError').textContent = '';
    }

    // Check for weekend days
    const weekendDays = ['saturday', 'sunday'];
    const selectedDays = Array.from(lessonDaysField.selectedOptions).map(option => option.value);
    const hasWeekend = selectedDays.some(day => weekendDays.includes(day));

    if (hasWeekend) {
        document.getElementById('lessonDaysError').textContent = 'No slots available for weekends';
        isValid = false;
    }

    // If form is valid, show the modal
    if (isValid) {
        const modal = document.getElementById('modal');
        const bookingSummary = document.getElementById('bookingSummary');
        
        bookingSummary.innerHTML = `
            <p><strong>Name:</strong> ${nameField.value}</p>
            <p><strong>Age:</strong> ${ageField.value}</p>
            <p><strong>Guardian Details:</strong> ${guardianField.value}</p>
            <p><strong>Phone Number:</strong> ${phoneField.value}</p>
            <p><strong>Email:</strong> ${emailField.value}</p>
            <p><strong>Preferred Instructor:</strong> ${instructorField.value}</p>
            <p><strong>Car Type:</strong> ${carTypeField.value}</p>
            <p><strong>AC Option:</strong> ${acOptionField.value}</p>
            <p><strong>Lesson Time:</strong> ${lessonTimeField.value}</p>
            <p><strong>Hours per lesson:</strong> ${lessonHours.value}</p>
            <p><strong>Lesson Date:</strong> ${lessonDateField.value}</p>
            <p><strong>Days Per Week:</strong> ${daysPerWeekField.value}</p>
            <p><strong>Lesson Days:</strong> ${Array.from(lessonDaysField.selectedOptions).map(option => option.text).join(', ')}</p>
            <p><strong>Price:</strong> $${price}</p>

        `;


        modal.style.display = 'block';
    }
}
