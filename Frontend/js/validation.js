document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const nameInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('senha');
    const confirmPasswordInput = document.getElementById('confirmacaoSenha');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const successMessage = document.getElementById('successMessage');
    const submitButton = registrationForm.querySelector('button');

    const unavailableEmails = ['teste@exemplo.com', 'joao@exemplo.com', 'maria@acme.net'];

    registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        let isValid = true;

        // Nome Validation
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Nome é obrigatório.';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Email Validation
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email é obrigatório.';
            emailError.style.display = 'block';
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Email inválido.';
            emailError.style.display = 'block';
            isValid = false;
        } else if (unavailableEmails.includes(emailInput.value)) {
            emailError.textContent = 'Este email já está cadastrado.';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Senha Validation
        const password = passwordInput.value;
        if (!password) {
            passwordError.textContent = 'Senha é obrigatória.';
            passwordError.style.display = 'block';
            isValid = false;
        } else if (!validatePassword(password)) {
            passwordError.textContent = 'A senha deve ter no mínimo 8 caracteres, incluindo 1 letra maiúscula, 1 letra minúscula e 1 número.';
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }

        // Confirmação de Senha Validation
        if (!confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Confirmação de senha é obrigatória.';
            confirmPasswordError.style.display = 'block';
            isValid = false;
        } else if (confirmPasswordInput.value !== password) {
            confirmPasswordError.textContent = 'As senhas não coincidem.';
            confirmPasswordError.style.display = 'block';
            isValid = false;
        } else {
            confirmPasswordError.style.display = 'none';
        }

        if (isValid) {
            // Desabilitar o botão e mostrar o GIF de carregamento
            submitButton.disabled = true;
            submitButton.innerHTML = '<img src="Utils/Gif/output-onlinegiftools.gif" class="loading-gif" alt="Carregando...">';
            
            // Realizar a requisição à API
            const success = await submitForm(nameInput.value, emailInput.value, passwordInput.value, confirmPasswordInput.value);
            
            // Restaurar o estado do botão
            submitButton.disabled = false;
            submitButton.innerHTML = 'CADASTRAR';
            
            if (success) {
                successMessage.textContent = 'Cadastro realizado com sucesso!';
                successMessage.style.display = 'block';
            } else {
                successMessage.style.display = 'none';
            }
        } else {
            successMessage.style.display = 'none';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return re.test(String(password));
    }
});
