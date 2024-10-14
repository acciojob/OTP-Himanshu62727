//your JS code here. If required.

const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
        // Move to next input when typing a number
        if (e.key >= 0 && e.key <= 9) {
            inputs[index].value = ''; // Clears the input
            setTimeout(() => {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }, 10);
        } else if (e.key === 'Backspace') {
            // Move to previous input on Backspace
            setTimeout(() => {
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }, 10);
        }
    });

    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
});
