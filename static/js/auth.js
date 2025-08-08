document.addEventListener('DOMContentLoaded', function() {
    // Password toggle functionality
    window.togglePassword = function(inputId, icon) {
        const input = document.getElementById(inputId);
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    };

    // Password strength checker
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            checkPasswordStrength(this.value);
        });
    }

    // Form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your login logic here
            console.log('Login form submitted');
            // Simulate successful login
            simulateLogin();
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate passwords match
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                showError('Passwords do not match');
                return;
            }
            
            // Validate terms checkbox
            if (!document.getElementById('terms').checked) {
                showError('You must agree to the terms and conditions');
                return;
            }
            
            // Add your signup logic here
            console.log('Signup form submitted');
            // Simulate successful signup
            simulateSignup();
        });
    }

    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('google') ? 'Google' : 'Facebook';
            console.log(`Logging in with ${provider}`);
            // Add social login logic here
        });
    });
});

function checkPasswordStrength(password) {
    const strengthMeter = document.querySelector('.strength-meter');
    const strengthText = document.getElementById('strengthValue');
    
    // Reset classes
    strengthMeter.parentElement.classList.remove('password-weak', 'password-medium', 'password-strong');
    
    if (!password) {
        strengthText.textContent = '';
        return;
    }
    
    // Calculate strength
    let strength = 0;
    
    // Length check
    if (password.length > 7) strength++;
    if (password.length > 11) strength++;
    
    // Character variety checks
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    // Update UI based on strength
    if (strength <= 2) {
        strengthMeter.parentElement.classList.add('password-weak');
        strengthText.textContent = 'weak';
    } else if (strength <= 4) {
        strengthMeter.parentElement.classList.add('password-medium');
        strengthText.textContent = 'medium';
    } else {
        strengthMeter.parentElement.classList.add('password-strong');
        strengthText.textContent = 'strong';
    }
}

function showError(message) {
    // In a real app, you'd want to display this error to the user
    console.error(message);
    // You could add a nice error display element in your HTML and show it here
}

function simulateLogin() {
    // In a real app, this would be an API call to your backend
    console.log('Simulating login...');
    // Show loading state
    const btn = document.querySelector('#loginForm .auth-btn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
    btn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Redirect to dashboard or show success
        console.log('Login successful!');
        btn.innerHTML = 'Login Successful!';
        // window.location.href = 'dashboard.html'; // Uncomment to redirect
    }, 1500);
}

function simulateSignup() {
    // In a real app, this would be an API call to your backend
    console.log('Simulating signup...');
    // Show loading state
    const btn = document.querySelector('#signupForm .auth-btn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
    btn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Redirect to login or show success
        console.log('Signup successful!');
        btn.innerHTML = 'Account Created!';
        // window.location.href = 'login.html'; // Uncomment to redirect
    }, 1500);
}