
let isSignupMode = true;
let selectedUserType = 'student';

document.addEventListener('DOMContentLoaded', function () {
    updateUI();
});


function toggleAuthMode() {
    isSignupMode = !isSignupMode;
    updateUI();
}

function updateUI() {
    const title = document.getElementById('authTitle');
    const submitBtn = document.getElementById('submitBtn');
    const toggleQuestion = document.getElementById('toggleQuestion');
    const toggleBtn = document.getElementById('toggleBtn');
    const repeatPasswordGroup = document.getElementById('repeatPasswordGroup');
    const rememberMe = document.getElementById('rememberMe');
    const forgotPassword = document.getElementById('forgotPassword');
    const termsText = document.getElementById('termsText');
    const socialText = document.getElementById('socialText');

    if (isSignupMode) {

        title.textContent = 'Sign Up';
        submitBtn.textContent = 'Sign up';
        toggleQuestion.textContent = 'Already have an account?';
        toggleBtn.textContent = 'Log in';
        repeatPasswordGroup.style.display = 'block';
        rememberMe.style.display = 'flex';
        forgotPassword.style.display = 'none';
        termsText.style.display = 'block';
        socialText.textContent = 'Sign up with social account';
    } else {
        // Log In Mode
        title.textContent = 'Log In';
        submitBtn.textContent = 'Log in';
        toggleQuestion.textContent = "Don't have an account?";
        toggleBtn.textContent = 'Sign up';
        repeatPasswordGroup.style.display = 'none';
        rememberMe.style.display = 'none';
        forgotPassword.style.display = 'block';
        termsText.style.display = 'none';
        socialText.textContent = 'Log in with social account';
    }
}

// Select user type (Student/Teacher)
function selectUserType(type) {
    selectedUserType = type;

    const studentBtn = document.getElementById('studentBtn');
    const teacherBtn = document.getElementById('teacherBtn');

    if (type === 'student') {
        studentBtn.classList.add('active');
        teacherBtn.classList.remove('active');
    } else {
        teacherBtn.classList.add('active');
        studentBtn.classList.remove('active');
    }
}

// Handle form submission
function handleSubmit() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;

    // Basic validation
    if (!email) {
        alert('Please enter your email');
        return;
    }

    if (!password) {
        alert('Please enter your password');
        return;
    }

    if (isSignupMode && password !== repeatPassword) {
        alert('Passwords do not match');
        return;
    }

    // Success message
    const mode = isSignupMode ? 'Sign up' : 'Log in';
    const message = `${mode} successful!\nUser Type: ${selectedUserType.charAt(0).toUpperCase() + selectedUserType.slice(1)}\nEmail: ${email}`;
    alert(message);

    // Clear form
    clearForm();
}

// Handle Google login
function handleGoogleLogin() {
    const mode = isSignupMode ? 'sign up' : 'log in';
    alert(`Google ${mode} clicked!\nUser Type: ${selectedUserType.charAt(0).toUpperCase() + selectedUserType.slice(1)}`);
}

// Clear form fields
function clearForm() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('repeatPassword').value = '';
}

// Handle Enter key press
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleSubmit();
    }
});