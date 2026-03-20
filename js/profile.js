// Profile Management System
const ProfileManager = {
    // Initialize profile on page load
    init() {
        this.loadProfile();
        this.updateProgress();
    },

    // Load profile from localStorage
    loadProfile() {
        const profile = localStorage.getItem('creative-arts-profile');
        if (profile) {
            const data = JSON.parse(profile);
            document.getElementById('fullName').value = data.fullName || '';
            document.getElementById('classLevel').value = data.classLevel || '';
            document.getElementById('school').value = data.school || '';
        }
    },

    // Save profile to localStorage
    saveProfile() {
        const profile = {
            fullName: document.getElementById('fullName').value,
            classLevel: document.getElementById('classLevel').value,
            school: document.getElementById('school').value,
            createdAt: localStorage.getItem('creative-arts-profile') ? JSON.parse(localStorage.getItem('creative-arts-profile')).createdAt : new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        localStorage.setItem('creative-arts-profile', JSON.stringify(profile));
        this.showNotification('Profile saved successfully! Redirecting to dashboard...');
        this.updateProgress();
        
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    },

    // Update progress displays
    updateProgress() {
        const profile = JSON.parse(localStorage.getItem('creative-arts-profile') || '{}');
        const classLevel = profile.classLevel;

        if (classLevel) {
            // Get progress for the current class
            const progress = this.getClassProgress(classLevel);
            
            // Update overall progress
            document.getElementById('overallProgress').textContent = progress.overall + '%';
            document.getElementById('overallProgressBar').style.width = progress.overall + '%';
            
            // Update lessons progress
            document.getElementById('lessonsCompleted').textContent = `${progress.completedLessons}/${progress.totalLessons}`;
            document.getElementById('lessonsProgressBar').style.width = progress.lessonsPercentage + '%';
            
            // Update quiz average
            document.getElementById('quizAverage').textContent = progress.quizAverage + '%';
            document.getElementById('quizProgressBar').style.width = progress.quizAverage + '%';
        }
    },

    // Get progress data for a specific class
    getClassProgress(classLevel) {
        const progressData = localStorage.getItem(`creative-arts-progress-${classLevel}`);
        const quizData = localStorage.getItem(`creative-arts-quiz-${classLevel}`);
        
        const progress = progressData ? JSON.parse(progressData) : {};
        const quizzes = quizData ? JSON.parse(quizData) : [];
        
        // Calculate total lessons (12 topics per class)
        const totalLessons = 12;
        const completedLessons = Object.keys(progress).filter(key => progress[key]).length;
        const overall = Math.round((completedLessons / totalLessons) * 100);
        const lessonsPercentage = Math.round((completedLessons / totalLessons) * 100);
        
        // Calculate quiz average
        let quizAverage = 0;
        if (quizzes.length > 0) {
            const totalScore = quizzes.reduce((sum, quiz) => sum + quiz.score, 0);
            quizAverage = Math.round(totalScore / quizzes.length);
        }
        
        return {
            overall,
            completedLessons,
            totalLessons,
            lessonsPercentage,
            quizAverage
        };
    },

    // Show notification
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-accent text-white px-6 py-3 rounded-lg shadow-lg z-50';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    },

    // Logout function
    logout() {
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('cca-current-user');
            window.location.href = 'index.html';
        }
    }
};

// Navigation functions
function saveProfile() {
    ProfileManager.saveProfile();
}

function goToDashboard() {
    window.location.href = 'dashboard.html';
}

function logout() {
    ProfileManager.logout();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    ProfileManager.init();
});
