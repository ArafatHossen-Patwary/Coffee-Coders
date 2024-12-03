const loginButton = document.getElementById('loginButton');
        const signUpButton = document.getElementById('signUpButton');
        const formSection = document.getElementById('formSection');
        const formTitle = document.getElementById('formTitle');
        const loginForm = document.getElementById('loginForm');
        const signUpForm = document.getElementById('signUpForm');

        // Show Login Form
        loginButton.addEventListener('click', () => {
            formSection.style.display = 'block';
            formTitle.textContent = 'Login';
            loginForm.style.display = 'block';
            signUpForm.style.display = 'none';
        });

        // Show Sign-Up Form
        signUpButton.addEventListener('click', () => {
            formSection.style.display = 'block';
            formTitle.textContent = 'Sign-Up';
            loginForm.style.display = 'none';
            signUpForm.style.display = 'block';
        });

