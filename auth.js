// RooMatch - Authentication

document.addEventListener('DOMContentLoaded', () => {
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Register Form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    // Social Login Buttons
    document.querySelectorAll('.btn-social').forEach(btn => {
        btn.addEventListener('click', handleSocialLogin);
    });
});

function handleLogin(e) {
    e.preventDefault();
    
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const lang = StorageManager.getCurrentLanguage();
    
    // Validation
    if (!phone || !password) {
        alert(lang === 'vi' ? 'Vui lòng điền đầy đủ thông tin!' : 'Please fill in all fields!');
        return;
    }

    // Simulate login (in real app, this would call an API)
    const user = {
        phone: phone,
        name: phone.substring(0, 10), // Mock name
        email: `user@example.com`,
        role: null, // Will be set in role selection
        loginTime: new Date().toISOString()
    };

    StorageManager.saveCurrentUser(user);
    
    // Redirect to role selection
    window.location.href = 'role-selection.html';
}

function handleRegister(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('regPhone').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const lang = StorageManager.getCurrentLanguage();
    
    // Validation
    if (!fullName || !email || !phone || !password || !confirmPassword) {
        alert(lang === 'vi' ? 'Vui lòng điền đầy đủ thông tin!' : 'Please fill in all fields!');
        return;
    }

    if (password !== confirmPassword) {
        alert(lang === 'vi' ? 'Mật khẩu không khớp!' : 'Passwords do not match!');
        return;
    }

    if (password.length < 6) {
        alert(lang === 'vi' ? 'Mật khẩu phải có ít nhất 6 ký tự!' : 'Password must be at least 6 characters!');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert(lang === 'vi' ? 'Email không hợp lệ!' : 'Invalid email format!');
        return;
    }

    // Create user
    const user = {
        name: fullName,
        email: email,
        phone: phone,
        role: null,
        registrationTime: new Date().toISOString()
    };

    StorageManager.saveCurrentUser(user);
    
    // Show success message
    alert(lang === 'vi' ? 'Đăng ký thành công!' : 'Registration successful!');
    
    // Redirect to role selection
    window.location.href = 'role-selection.html';
}

function handleSocialLogin(e) {
    const lang = StorageManager.getCurrentLanguage();
    const btnText = e.currentTarget.textContent.trim();
    
    // Simulate social login
    alert(lang === 'vi' 
        ? `Đang kết nối với ${btnText}... (Tính năng demo)`
        : `Connecting with ${btnText}... (Demo feature)`);
    
    // Mock successful social login
    const user = {
        name: "Demo User",
        email: "demo@example.com",
        phone: "+84123456789",
        role: null,
        socialLogin: true,
        loginTime: new Date().toISOString()
    };

    StorageManager.saveCurrentUser(user);
    window.location.href = 'role-selection.html';
}