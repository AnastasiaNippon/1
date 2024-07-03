document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');
    const fields = form.querySelectorAll('input, select');
    
    const validateField = (field) => {
        let valid = true;
        if (field.type === 'text' && (field.value.length < 2 || field.value.length > 20 || !/^[A-Za-zА-Яа-я\s]+$/.test(field.value))) {
            valid = false;
        }
        if (field.type === 'email' && !field.value.includes('@')) {
            valid = false;
        }
        if (field.type === 'password' && !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(field.value)) {
            valid = false;
        }
        return valid;
    };

    const checkFormValidity = () => {
        let formValid = true;
        fields.forEach(field => {
            if (!validateField(field) || !field.checkValidity()) {
                formValid = false;
            }
        });
        submitBtn.disabled = !formValid;
    };

    fields.forEach(field => {
        field.addEventListener('input', checkFormValidity);
        field.addEventListener('focus', () => {
            field.classList.remove('error');
        });
        field.addEventListener('blur', () => {
            if (!validateField(field)) {
                field.classList.add('error');
            }
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let formValid = true;
        fields.forEach(field => {
            if (!validateField(field) || !field.checkValidity()) {
                formValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        
        if (formValid) {
            const formData = new FormData(form);
            console.log('Имя:', formData.get('name'));
            console.log('Электронная почта:', formData.get('email'));
            console.log('Возраст:', formData.get('age'));
            console.log('Пол:', formData.get('gender'));
            console.log('Профессия:', formData.get('profession'));
            console.log('Пароль:', formData.get('password'));
            form.reset();
            submitBtn.disabled = true;
        }
    });

    checkFormValidity();
});
