
const otpInputs = document.querySelectorAll(".otp-inputs input");
const verifyBtn = document.querySelector(".verify-btn");

otpInputs[0].focus();

otpInputs.forEach((input, index) => {

    input.addEventListener("keyup", event => {

        if (input.value !== '' && index !== otpInputs.length - 1) {
            const nextInput = otpInputs[index + 1];
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        if (event.key === "Backspace" && index !== 0) {
            const prevInput = otpInputs[index - 1];
            prevInput.focus();

            for (let idx = index; idx < otpInputs.length; ++idx) {
                otpInputs[idx].setAttribute("disabled", "");
                otpInputs[idx].value = "";
            }
        }

        if (index === otpInputs.length - 1 && input.value != '')
            verifyBtn.classList.add("active");
        else
            verifyBtn.classList.remove("active");

    });

    input.addEventListener("keypress", event => {
        if (input.value.length === 1) {
            event.preventDefault();
        }
    });

});
