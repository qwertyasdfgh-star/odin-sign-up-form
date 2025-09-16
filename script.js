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
        document.getElementById('signupForm').addEventListener('submit', e => {
            e.preventDefault();
            alert('Account created successfully! (This is just a demo.)');
        });

AOS.init({ duration: 800, once: true });
        feather.replace();
        function toggleCnfrmPwd() {
            const pwd = document.getElementById('cnfrmPwd');
            const eyeOpen = document.getElementById('eyeOpen1');
            const eyeClosed = document.getElementById('eyeClosed1');
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
            alert('Account created successfully! (This is just a demo.)');
        });