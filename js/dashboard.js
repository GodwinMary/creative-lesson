// Dashboard Management System
const DashboardManager = {
    currentWeek: 1,
    currentClass: '',
    
    // Week curriculum data
    weekData: {
        jss1: {
            1: {
                days: {
                    1: {
                        topic: 'Introduction to Cultural Arts',
                        activity: 'Reading & Video',
                        content: {
                            reading: 'Cultural and Creative Arts is an important subject that helps students understand and appreciate their cultural heritage.',
                            video: 'Watch the introductory video about Nigerian cultural arts',
                            questions: [
                                { question: 'What is Cultural Arts?', options: ['Study of cultural heritage', 'Only drawing', 'Only music', 'Only drama'], correct: 0 },
                                { question: 'Why is CCA important?', options: ['It preserves culture', 'It is easy', 'It is optional', 'It is boring'], correct: 0 }
                            ]
                        }
                    },
                    2: {
                        topic: 'Elements of Art',
                        activity: 'Practice Exercises',
                        content: {
                            reading: 'The elements of art include line, shape, color, texture, and form.',
                            video: 'Demonstration of basic art elements',
                            questions: [
                                { question: 'Which is NOT an element of art?', options: ['Line', 'Color', 'Height', 'Texture'], correct: 2 },
                                { question: 'What do elements help create?', options: ['Artwork', 'Problems', 'Noise', 'Confusion'], correct: 0 }
                            ]
                        }
                    },
                    3: {
                        topic: 'Color Theory',
                        activity: 'Hands-on Project',
                        content: {
                            reading: 'Color theory helps us understand how colors work together.',
                            video: 'Primary and secondary colors demonstration',
                            questions: [
                                { question: 'What are primary colors?', options: ['Red, Blue, Yellow', 'Green, Orange, Purple', 'Black, White, Gray', 'All colors'], correct: 0 },
                                { question: 'What color does red and blue make?', options: ['Green', 'Orange', 'Purple', 'Brown'], correct: 2 }
                            ]
                        }
                    },
                    4: {
                        topic: 'Drawing Techniques',
                        activity: 'Studio Work',
                        content: {
                            reading: 'Basic drawing techniques include sketching, shading, and perspective.',
                            video: 'Drawing fundamentals tutorial',
                            questions: [
                                { question: 'What is sketching?', options: ['Quick drawing', 'Slow painting', 'Singing', 'Dancing'], correct: 0 },
                                { question: 'What helps create depth?', options: ['Shading', 'Bright colors', 'Big lines', 'Small paper'], correct: 0 }
                            ]
                        }
                    },
                    5: {
                        topic: 'Weekly Assessment',
                        activity: 'Quiz & Review',
                        content: {
                            reading: 'Review all topics from this week.',
                            video: 'Summary of week 1 concepts',
                            questions: [
                                { question: 'What did we learn in Day 1?', options: ['Cultural Arts', 'Math', 'Science', 'History'], correct: 0 },
                                { question: 'What are the three primary colors?', options: ['Red, Blue, Yellow', 'Red, Green, Blue', 'Black, White, Gray', 'Orange, Purple, Green'], correct: 0 }
                            ]
                        }
                    }
                }
            },
            2: {
                days: {
                    1: {
                        topic: 'Nigerian Culture',
                        activity: 'Reading & Discussion',
                        content: {
                            reading: 'Nigeria has diverse cultural heritage with over 250 ethnic groups.',
                            video: 'Introduction to Nigerian cultural diversity',
                            questions: [
                                { question: 'How many ethnic groups in Nigeria?', options: ['Over 250', '50', '10', '500'], correct: 0 },
                                { question: 'What makes Nigerian culture special?', options: ['Diversity', 'Being new', 'Being simple', 'Being modern'], correct: 0 }
                            ]
                        }
                    },
                    2: {
                        topic: 'Traditional Music',
                        activity: 'Listening Practice',
                        content: {
                            reading: 'Traditional Nigerian music uses various instruments and rhythms.',
                            video: 'Traditional instruments demonstration',
                            questions: [
                                { question: 'What is a common traditional instrument?', options: ['Talking Drum', 'Piano', 'Electric Guitar', 'Violin'], correct: 0 },
                                { question: 'What does music express?', options: ['Emotions', 'Numbers', 'Letters', 'Buildings'], correct: 0 }
                            ]
                        }
                    },
                    3: {
                        topic: 'Folktales and Stories',
                        activity: 'Storytelling',
                        content: {
                            reading: 'Folktales teach moral lessons and preserve cultural values.',
                            video: 'Traditional folktale performance',
                            questions: [
                                { question: 'What do folktales teach?', options: ['Moral lessons', 'Math', 'Science', 'Sports'], correct: 0 },
                                { question: 'Who tells folktales?', options: ['Elders', 'Children only', 'Animals', 'Books'], correct: 0 }
                            ]
                        }
                    },
                    4: {
                        topic: 'Traditional Dance',
                        activity: 'Movement Practice',
                        content: {
                            reading: 'Traditional dances tell stories and celebrate events.',
                            video: 'Traditional dance demonstrations',
                            questions: [
                                { question: 'What do traditional dances express?', options: ['Stories and emotions', 'Only happiness', 'Only sadness', 'Nothing'], correct: 0 },
                                { question: 'When are traditional dances performed?', options: ['Festivals and ceremonies', 'Only in school', 'Only at night', 'Never'], correct: 0 }
                            ]
                        }
                    },
                    5: {
                        topic: 'Week 2 Assessment',
                        activity: 'Quiz & Review',
                        content: {
                            reading: 'Review Nigerian culture and traditional arts.',
                            video: 'Week 2 summary',
                            questions: [
                                { question: 'What did we learn about Nigerian culture?', options: ['Diversity and heritage', 'Only food', 'Only weather', 'Only buildings'], correct: 0 },
                                { question: 'What is the purpose of traditional arts?', options: ['Preserve culture', 'Make money only', 'Pass time', 'Show off'], correct: 0 }
                            ]
                        }
                    }
                }
            }
        },
        jss2: {
            1: {
                days: {
                    1: {
                        topic: 'Advanced Art Techniques',
                        activity: 'Reading & Demonstration',
                        content: {
                            reading: 'Advanced art techniques build upon basic skills to create more sophisticated works.',
                            video: 'Advanced art techniques demonstration',
                            questions: [
                                { question: 'What builds on basic skills?', options: ['Advanced techniques', 'Only colors', 'Only lines', 'Nothing'], correct: 0 },
                                { question: 'What makes work sophisticated?', options: ['Advanced skills', 'Only size', 'Only price', 'Only frame'], correct: 0 }
                            ]
                        }
                    },
                    2: {
                        topic: 'Perspective Drawing',
                        activity: 'Practice Exercises',
                        content: {
                            reading: 'Perspective creates the illusion of depth and distance in drawings.',
                            video: 'One-point perspective tutorial',
                            questions: [
                                { question: 'What does perspective create?', options: ['Depth illusion', 'Flat images', 'Only colors', 'Only lines'], correct: 0 },
                                { question: 'How many points in one-point perspective?', options: ['One', 'Two', 'Three', 'Four'], correct: 0 }
                            ]
                        }
                    },
                    3: {
                        topic: 'Color Harmony',
                        activity: 'Color Mixing',
                        content: {
                            reading: 'Color harmony uses pleasing color combinations.',
                            video: 'Creating harmonious color schemes',
                            questions: [
                                { question: 'What is color harmony?', options: ['Pleasing combinations', 'Random colors', 'Only one color', 'No colors'], correct: 0 },
                                { question: 'What do harmonious colors create?', options: ['Visual balance', 'Confusion', 'Boredom', 'Chaos'], correct: 0 }
                            ]
                        }
                    },
                    4: {
                        topic: 'Portrait Drawing',
                        activity: 'Figure Studies',
                        content: {
                            reading: 'Portrait drawing captures human features and expressions.',
                            video: 'Basic portrait drawing techniques',
                            questions: [
                                { question: 'What do portraits capture?', options: ['Features and expressions', 'Only hair', 'Only clothes', 'Only background'], correct: 0 },
                                { question: 'What is important in portraits?', options: ['Proportions', 'Only colors', 'Only size', 'Only frame'], correct: 0 }
                            ]
                        }
                    },
                    5: {
                        topic: 'Week 1 Assessment',
                        activity: 'Quiz & Review',
                        content: {
                            reading: 'Review advanced art techniques and concepts.',
                            video: 'Week 1 summary and review',
                            questions: [
                                { question: 'What makes advanced art different?', options: ['Complexity and skill', 'Only materials', 'Only size', 'Only price'], correct: 0 },
                                { question: 'Why is perspective important?', options: ['Creates realism', 'Makes drawing easy', 'Uses less colors', 'Takes less time'], correct: 0 }
                            ]
                        }
                    }
                }
            }
        },
        jss3: {
            1: {
                days: {
                    1: {
                        topic: 'Professional Art Techniques',
                        activity: 'Studio Work',
                        content: {
                            reading: 'Professional techniques require mastery and understanding of advanced concepts.',
                            video: 'Professional artist demonstration',
                            questions: [
                                { question: 'What do professional techniques require?', options: ['Mastery and understanding', 'Only talent', 'Only expensive tools', 'Only time'], correct: 0 },
                                { question: 'What makes art professional?', options: ['Skill and technique', 'Only price', 'Only gallery', 'Only fame'], correct: 0 }
                            ]
                        }
                    },
                    2: {
                        topic: 'Portfolio Development',
                        activity: 'Portfolio Building',
                        content: {
                            reading: 'A portfolio showcases your best work and artistic journey.',
                            video: 'Creating an effective portfolio',
                            questions: [
                                { question: 'What does a portfolio showcase?', options: ['Best work', 'Only mistakes', 'Only sketches', 'Only ideas'], correct: 0 },
                                { question: 'What makes portfolio effective?', options: ['Quality and variety', 'Only quantity', 'Only size', 'Only frame'], correct: 0 }
                            ]
                        }
                    },
                    3: {
                        topic: 'Art Criticism',
                        activity: 'Critical Analysis',
                        content: {
                            reading: 'Art criticism involves analyzing and evaluating artistic works.',
                            video: 'Introduction to art criticism',
                            questions: [
                                { question: 'What is art criticism?', options: ['Analysis and evaluation', 'Only negative comments', 'Only positive comments', 'No opinions'], correct: 0 },
                                { question: 'What does criticism help develop?', options: ['Critical thinking', 'Only drawing skills', 'Only painting', 'Only singing'], correct: 0 }
                            ]
                        }
                    },
                    4: {
                        topic: 'Contemporary Nigerian Art',
                        activity: 'Research & Presentation',
                        content: {
                            reading: 'Contemporary Nigerian art blends traditional and modern influences.',
                            video: 'Contemporary Nigerian artists showcase',
                            questions: [
                                { question: 'What does contemporary art blend?', options: ['Traditional and modern', 'Only traditional', 'Only modern', 'No influences'], correct: 0 },
                                { question: 'What makes Nigerian art unique?', options: ['Cultural identity', 'Only materials', 'Only techniques', 'Only prices'], correct: 0 }
                            ]
                        }
                    },
                    5: {
                        topic: 'Week 1 Assessment',
                        activity: 'Final Quiz',
                        content: {
                            reading: 'Comprehensive review of professional art concepts.',
                            video: 'Week 1 complete summary',
                            questions: [
                                { question: 'What is essential for professional art?', options: ['Technical skill and creativity', 'Only expensive materials', 'Only gallery representation', 'Only social media'], correct: 0 },
                                { question: 'Why study contemporary art?', options: ['Understand current trends', 'Only for exams', 'Only for fun', 'Only for money'], correct: 0 }
                            ]
                        }
                    }
                }
            }
        }
    },

    // Initialize dashboard
    init() {
        this.loadUserProfile();
        this.loadWeekProgress();
        this.updateDashboard();
    },

    // Load user profile
    loadUserProfile() {
        const profile = localStorage.getItem('arts-ai-profile');
        if (profile) {
            const data = JSON.parse(profile);
            document.getElementById('studentName').textContent = data.fullName || 'Student';
            document.getElementById('currentClass').textContent = this.getDisplayName(data.classLevel);
            this.currentClass = data.classLevel;
        }
    },

    // Get class display name
    getDisplayName(classLevel) {
        const names = {
            'jss1': 'JSS 1',
            'jss2': 'JSS 2',
            'jss3': 'JSS 3'
        };
        return names[classLevel] || 'Not Set';
    },

    // Load week progress
    loadWeekProgress() {
        const weekProgress = localStorage.getItem(`arts-ai-week-progress-${this.currentClass}`);
        if (weekProgress) {
            const progress = JSON.parse(weekProgress);
            this.currentWeek = progress.currentWeek || 1;
        }
        document.getElementById('currentWeek').textContent = `Week ${this.currentWeek}`;
    },

    // Update dashboard display
    updateDashboard() {
        if (!this.currentClass) return;
        
        const weekData = this.weekData[this.currentClass]?.[this.currentWeek];
        if (!weekData) return;

        // Update each day
        for (let day = 1; day <= 5; day++) {
            const dayData = weekData.days[day];
            if (dayData) {
                document.getElementById(`day${day}-topic`).textContent = dayData.topic;
                document.getElementById(`day${day}-activity`).textContent = dayData.activity;
                this.updateDayStatus(day);
            }
        }

        // Update overall progress
        this.updateOverallProgress();
    },

    // Update day status
    updateDayStatus(day) {
        const progressKey = `${this.currentClass}-week${this.currentWeek}-day${day}`;
        const progress = localStorage.getItem(progressKey);
        
        if (progress) {
            const data = JSON.parse(progress);
            const statusEl = document.getElementById(`day${day}-status`);
            const btnEl = document.getElementById(`day${day}-btn`);
            
            if (data.completed) {
                statusEl.textContent = 'Completed';
                statusEl.className = 'text-xs px-2 py-1 bg-accent text-white rounded-full';
                btnEl.textContent = 'Review Lesson';
                btnEl.className = 'w-full bg-accent text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition';
                btnEl.disabled = false;
            } else if (data.started) {
                statusEl.textContent = 'In Progress';
                statusEl.className = 'text-xs px-2 py-1 bg-secondary text-white rounded-full';
                btnEl.textContent = 'Continue Lesson';
                btnEl.className = 'w-full bg-secondary text-white py-2 rounded-lg font-semibold hover:bg-yellow-500 transition';
                btnEl.disabled = false;
            }
        }

        // Enable/disable buttons based on progression
        this.updateButtonStates(day);
    },

    // Update button states
    updateButtonStates(day) {
        for (let i = 2; i <= 5; i++) {
            const prevDayKey = `${this.currentClass}-week${this.currentWeek}-day${i-1}`;
            const prevProgress = localStorage.getItem(prevDayKey);
            const btnEl = document.getElementById(`day${i}-btn`);
            
            if (i <= day) {
                if (prevProgress && JSON.parse(prevProgress).completed) {
                    btnEl.disabled = false;
                    btnEl.className = 'w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-terracotta transition';
                    btnEl.textContent = 'Start Lesson';
                } else if (prevProgress && JSON.parse(prevProgress).started) {
                    btnEl.disabled = false;
                    btnEl.className = 'w-full bg-secondary text-white py-2 rounded-lg font-semibold hover:bg-yellow-500 transition';
                    btnEl.textContent = 'Continue Lesson';
                } else {
                    btnEl.disabled = true;
                    btnEl.className = 'w-full bg-gray-300 text-gray-500 py-2 rounded-lg font-semibold cursor-not-allowed';
                    btnEl.textContent = `Complete Day ${i-1} First`;
                }
            }
        }
    },

    // Update overall progress
    updateOverallProgress() {
        const profile = JSON.parse(localStorage.getItem('arts-ai-profile') || '{}');
        const classLevel = profile.classLevel;
        
        if (classLevel) {
            // Get progress for current class
            const progressData = localStorage.getItem(`arts-ai-progress-${classLevel}`);
            const progress = progressData ? JSON.parse(progressData) : {};
            
            const totalLessons = 12;
            const completedLessons = Object.keys(progress).filter(key => progress[key]).length;
            
            document.getElementById('totalLessons').textContent = totalLessons;
            document.getElementById('completedLessons').textContent = completedLessons;
            
            // Calculate quiz average
            const quizData = localStorage.getItem(`arts-ai-quiz-${classLevel}`);
            const quizzes = quizData ? JSON.parse(quizData) : [];
            const averageScore = quizzes.length > 0 ? 
                Math.round(quizzes.reduce((sum, quiz) => sum + quiz.score, 0) / quizzes.length) : 0;
            
            document.getElementById('averageScore').textContent = averageScore + '%';
        }
    },

    // Start lesson
    startLesson(day) {
        const weekData = this.weekData[this.currentClass]?.[this.currentWeek];
        const dayData = weekData?.days[day];
        
        if (!dayData) return;

        // Mark as started
        const progressKey = `${this.currentClass}-week${this.currentWeek}-day${day}`;
        const existingProgress = localStorage.getItem(progressKey);
        const progress = existingProgress ? JSON.parse(existingProgress) : {};
        progress.started = true;
        localStorage.setItem(progressKey, JSON.stringify(progress));

        // Show lesson modal
        this.showLessonModal(day, dayData);
        this.updateDayStatus(day);
    },

    // Show lesson modal
    showLessonModal(day, dayData) {
        const modal = document.getElementById('lessonModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        
        modalTitle.textContent = `Day ${day}: ${dayData.topic}`;
        
        modalContent.innerHTML = `
            <div class="space-y-6">
                <div>
                    <h3 class="font-bold text-lg mb-3">📚 Reading Material</h3>
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p class="text-gray-700 leading-relaxed">${dayData.content.reading}</p>
                    </div>
                </div>
                
                <div>
                    <h3 class="font-bold text-lg mb-3">🎥 Video Content</h3>
                    <div class="bg-gray-100 rounded-lg p-4">
                        <p class="text-gray-600 mb-3">${dayData.content.video}</p>
                        <div class="bg-gray-200 h-48 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-400">
                            <div class="text-center">
                                <div class="text-4xl mb-2">▶️</div>
                                <p class="text-gray-500 font-semibold">Video Player</p>
                                <p class="text-gray-400 text-sm">Click to play lesson video</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 class="font-bold text-lg mb-3">📝 Practice Questions</h3>
                    <div id="quizContainer" class="space-y-4">
                        ${this.generateQuizQuestions(dayData.content.questions)}
                    </div>
                </div>
                
                <div class="flex gap-4 bg-gray-50 p-4 rounded-lg">
                    <button onclick="DashboardManager.submitQuiz(${day})" class="bg-accent text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition flex-1">
                        Submit Answers
                    </button>
                    <button onclick="DashboardManager.markAsComplete(${day})" class="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-terracotta transition flex-1">
                        Mark as Complete
                    </button>
                    <button onclick="DashboardManager.closeLesson()" class="bg-gray-300 text-gray-700 px-6 py-3 rounded-full font-bold hover:bg-gray-400 transition">
                        Close
                    </button>
                </div>
            </div>
        `;
        
        modal.classList.remove('hidden');
    },

    // Generate quiz questions
    generateQuizQuestions(questions) {
        return questions.map((q, index) => `
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <p class="font-semibold text-gray-800 mb-3">${index + 1}. ${q.question}</p>
                <div class="space-y-2">
                    ${q.options.map((option, optIndex) => `
                        <label class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                            <input type="radio" name="question${index}" value="${optIndex}" class="w-4 h-4 text-primary focus:ring-primary">
                            <span class="text-gray-700">${option}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');
    },

    // Submit quiz
    submitQuiz(day) {
        const weekData = this.weekData[this.currentClass]?.[this.currentWeek];
        const questions = weekData.days[day].content.questions;
        
        let score = 0;
        questions.forEach((q, index) => {
            const selected = document.querySelector(`input[name="question${index}"]:checked`);
            if (selected && parseInt(selected.value) === q.correct) {
                score++;
    // Show quiz result
    showQuizResult(percentage, correct, total) {
        const modalContent = document.getElementById('modalContent');
        const message = percentage >= 70 ? 
            'Excellent work! You have mastered this lesson.' : 
            percentage >= 50 ? 
            'Good effort! Review the material and try again if needed.' :
            'Keep practicing! Review the lesson content and retake the quiz.';
        
        modalContent.innerHTML = `
            <div class="text-center py-8">
                <div class="text-6xl mb-4">${percentage >= 70 ? '🎉' : percentage >= 50 ? '👍' : '📚'}</div>
                <h3 class="font-bold text-2xl mb-4">Quiz Results</h3>
                <div class="text-4xl font-bold text-primary mb-4">${percentage}%</div>
                <p class="text-lg mb-2">You got ${correct} out of ${total} questions correct</p>
                <p class="text-gray-600 mb-6">${message}</p>
                <button onclick="DashboardManager.closeLesson()" class="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-terracotta transition">
                    Close Lesson
                </button>
            </div>
        `;
    },

    // Mark lesson as complete without quiz
    markAsComplete(day) {
        // Mark day as completed
        const progressKey = `${this.currentClass}-week${this.currentWeek}-day${day}`;
        const progress = {
            started: true,
            completed: true,
            markedComplete: true,
            completedAt: new Date().toISOString()
        };
        localStorage.setItem(progressKey, JSON.stringify(progress));
        
        // Show success message
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <div class="text-center py-8">
                <div class="text-6xl mb-4">✅</div>
                <h3 class="font-bold text-2xl mb-4">Lesson Completed!</h3>
                <p class="text-lg mb-2">Great job! You've completed Day ${day}.</p>
                <p class="text-gray-600 mb-6">You can now move on to the next day's lesson.</p>
                <button onclick="DashboardManager.closeLesson()" class="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-terracotta transition">
                    Close Lesson
                </button>
            </div>
        `;
        
        this.updateDayStatus(day);
        this.updateOverallProgress();
    },

    // Close lesson modal
    closeLesson() {
        document.getElementById('lessonModal').classList.add('hidden');
    },

    // Week navigation
    previousWeek() {
        if (this.currentWeek > 1) {
            this.currentWeek--;
            this.saveWeekProgress();
            this.updateDashboard();
        }
    },

    nextWeek() {
        const maxWeeks = Object.keys(this.weekData[this.currentClass] || {}).length;
        if (this.currentWeek < maxWeeks) {
            this.currentWeek++;
            this.saveWeekProgress();
            this.updateDashboard();
        }
    },

    // Save week progress
    saveWeekProgress() {
        const progressKey = `arts-ai-week-progress-${this.currentClass}`;
        const progress = {
            currentWeek: this.currentWeek,
            updatedAt: new Date().toISOString()
        };
        localStorage.setItem(progressKey, JSON.stringify(progress));
        document.getElementById('currentWeek').textContent = `Week ${this.currentWeek}`;
    }
};

// Global functions
function startLesson(day) {
    DashboardManager.startLesson(day);
}

function previousWeek() {
    DashboardManager.previousWeek();
}

function nextWeek() {
    DashboardManager.nextWeek();
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('cca-current-user');
        window.location.href = 'index.html';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    DashboardManager.init();
});
