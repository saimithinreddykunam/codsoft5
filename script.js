// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Register User
document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'login.html';
        })
        .catch(error => {
            document.getElementById('register-error').textContent = error.message;
        });
});

// Login User
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'dashboard.html';
        })
        .catch(error => {
            document.getElementById('login-error').textContent = error.message;
        });
});

// Logout
document.getElementById('logout')?.addEventListener('click', function () {
    auth.signOut().then(() => {
        window.location.href = 'index.html';
    });
});

// Dashboard
auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById('user-email').textContent = user.email;
        loadUserRole(user);
    } else {
        window.location.href = 'login.html';
    }
});

function loadUserRole(user) {
    // This function should load user role from the database
    // and display relevant UI components for students or instructors
    // Example:
    // if (user.email === "instructor@example.com") {
    //     document.getElementById('user-role').innerHTML = '<h3>Instructor Dashboard</h3>';
    // } else {
    //     document.getElementById('user-role').innerHTML = '<h3>Student Dashboard</h3>';
    // }
}
