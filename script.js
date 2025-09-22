AOS.init({ duration: 800, once: true });

feather.replace();

function togglePwd() {
    const pwd = document.getElementById('pwd');
    const eyeOpen = document.getElementById('eyeOpen');
    const eyeClosed = document.getElementById('eyeClosed');
    if (pwd.type === 'password') {
        pwd.type = 'text';
        eyeOpen.classList.add('hidden');
        eyeClosed.classList.remove('hidden');
    } else {
        pwd.type = 'password';
        eyeOpen.classList.remove('hidden');
        eyeClosed.classList.add('hidden');
    }
}

function toggleCnfrmPwd() {
    const pwd = document.getElementById('cnfrmPwd');
    const eyeOpen = document.getElementById('eyeOpenCnfrm');
    const eyeClosed = document.getElementById('eyeClosedCnfrm');
    if (pwd.type === 'password') {
        pwd.type = 'text';
        eyeOpen.classList.add('hidden');
        eyeClosed.classList.remove('hidden');
    } else {
        pwd.type = 'password';
        eyeOpen.classList.remove('hidden');
        eyeClosed.classList.add('hidden');
    }
}

document.getElementById('signupForm').addEventListener('submit', e => {
    e.preventDefault();
    
    const password = document.getElementById('pwd').value.trim();
    const confirmPassword = document.getElementById('cnfrmPwd').value.trim();
    
    if (password !== confirmPassword) {
        alert('Passwords do not match! Try again.');
        // Optionally, add visual feedback by focusing on the confirm password field
        document.getElementById('cnfrmPwd').focus();
        return;
    }

    alert('Account created successfully! (This is just a demo.)');

});
