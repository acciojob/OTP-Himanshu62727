//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

// Function to handle input focus on next/previous input field
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        // Only move to next if input is a number between 0-9
        if (input.value.match(/^[0-9]$/)) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        } else {
            input.value = ''; // Clear invalid input
        }
    });

    input.addEventListener('keydown', (e) => {
        // Handle Backspace key
        if (e.key === 'Backspace') {
            input.value = ''; // Clear current input
            if (index > 0) {
                inputs[index - 1].focus(); // Move to previous input
            }
        }

        // Handle arrow keys for navigation
        if (e.key === 'ArrowLeft' && index > 0) {
            inputs[index - 1].focus();
        } else if (e.key === 'ArrowRight' && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('paste', (e) => {
        // Handle pasting a 6-digit OTP
        const pasteData = e.clipboardData.getData('text');
        if (pasteData.match(/^[0-9]{6}$/)) {
            // Fill each input with corresponding digit
            inputs.forEach((input, i) => {
                input.value = pasteData[i];
            });
            e.preventDefault(); // Prevent default paste behavior
            inputs[inputs.length - 1].focus(); // Focus last input
        }
    });
});

// Initial focus on the first input field
inputs[0].focus();

