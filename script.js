//your JS code here. If required.


const codeInputs = document.querySelectorAll('.code');
 
codeInputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        if (e.target.value.length === 1 && index<codeInputs.length - 1) {
            codeInputs[index + 1].focus();
        }
    });
 
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0 && e.target.value.length === 0) {
            codeInputs[index - 1].focus();
            codeInputs[index - 1].select();
        }
    });
});
 
document.getElementById('code-1').focus();