(function () {
    const formElements = [
        {
            input: document.getElementById('voornaam'),
            error: document.querySelector('#voornaamError'),
            validation: {
                regex: /^[a-zA-Z].+[a-zA-Z]$/,
                errorMsg: 'Vul een geldige voornaam in "geen spatie voor en achter"'
            }
        },
        {
            input: document.getElementById('achternaam'),
            error: document.querySelector('#achternaamError'),
            validation: {
                regex: /^[a-zA-Z].+[a-zA-Z]$/,
                errorMsg: 'Vul een geldige achternaam in "geen spatie voor en achter"'
            }
        },
        {
            input: document.getElementById('telefoonNummer'),
            error: document.querySelector('#telError'),
            validation: {
                regex: /^0?[1-9][1-9]{7,8}$/,
                errorMsg: 'Vul een geldig GSM nummer in'
            }
        },
        {
            input: document.getElementById('email'),
            error: document.querySelector('#emailError'),
            validation: {
                regex: /^[A-Za-z]+\.[A-Za-z]+@(student\.)?kdg\.be$/,
                errorMsg: 'Vul een geldig email in a.u.b.'
            }
        },
        {
            input: document.getElementById('leveringsadres')
        },
        {
            input: document.getElementById('gemeente')
        }
    ];

    formElements.forEach(element => {
        element.input.addEventListener('blur', () => validateInput(element));
    });

    document.getElementById('email').addEventListener('input', () => validateInput(formElements[3]));

    document.querySelector('form').addEventListener('submit', checkFormSubmission);

    function validateInput(element) {
        const { input, error, validation } = element;
        const { regex, errorMsg } = validation || {};

        if (regex && !regex.test(input.value)) {
            input.classList.remove('validInput');
            if (error && errorMsg) {
                error.innerHTML = errorMsg;
                error.style.color = 'red';
            }
        } else {
            input.classList.add('validInput');
            if (error && errorMsg) {
                error.innerHTML = '';
            }
        }
    }

    function checkFormSubmission(event) {
        const invalidInputs = formElements.filter(element => {
            const { input, validation } = element;
            return validation && !validation.regex.test(input.value);
        });

        if (invalidInputs.length > 0) {
            document.querySelector('#zendingError').innerHTML = 'Niet alle velden zijn correct ingevuld';
            document.querySelector('#zendingError').style.color = 'red';
            event.preventDefault();
        }
    }
})();
