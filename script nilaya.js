/**
 * NILAYA MAURYA - PORTFOLIO INTERACTOR
 * Interactive bookshelf open/close animations & template loading
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const books = document.querySelectorAll('.book');
    const bookModal = document.getElementById('bookModal');
    const closeBookBtn = document.getElementById('closeBookBtn');
    const pageLeftContent = document.getElementById('pageLeftContent');
    const pageRightContent = document.getElementById('pageRightContent');
    const openBook = document.getElementById('openBook');

    // Book Click Event Listeners
    books.forEach(book => {
        book.addEventListener('click', () => {
            const bookType = book.getAttribute('data-book');
            openBookView(bookType);
        });

        // Accessible Keyboard Interaction (Enter / Space)
        book.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const bookType = book.getAttribute('data-book');
                openBookView(bookType);
            }
        });
    });

    // Close Book Actions
    closeBookBtn.addEventListener('click', closeBookView);

    bookModal.addEventListener('click', (e) => {
        if (e.target === bookModal) {
            closeBookView();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && bookModal.classList.contains('active')) {
            closeBookView();
        }
    });

    /**
     * Opens the modal and injects the corresponding template content
     * @param {string} type - Identifier of the book clicked
     */
    function openBookView(type) {
        const template = document.getElementById(`tpl-${type}`);
        if (!template) return;

        // Clear existing page contents
        pageLeftContent.innerHTML = '';
        pageRightContent.innerHTML = '';

        // Clone Template Content
        const contentClone = template.content.cloneNode(true);

        // Split into Left and Right pages
        pageLeftContent.appendChild(contentClone);

        // Optional right page custom message or companion content
        if (type === 'about') {
            pageRightContent.innerHTML = `
                <div class="handwritten-entry">
                    <div class="book-header-badge">Personal Motto</div>
                    <div class="cursive-text" style="margin-top: 2rem;">
                        <p class="greeting" style="color: var(--gold-accent);">"Driven by Curiosity & Consistency."</p>
                        <p style="margin-top: 1.5rem;">
                            I believe every dataset tells a story waiting to be discovered. By combining analytical thinking with hands-on coding, I aim to create impactful digital solutions.
                        </p>
                        <div style="margin-top: 2.5rem; text-align: center; font-size: 2rem; color: var(--book-teal);">
                            ✦ 📊 💻 ✦
                        </div>
                    </div>
                </div>
            `;
        } else if (type === 'education') {
            pageRightContent.innerHTML = `
                <div class="handwritten-entry">
                    <div class="book-header-badge">Academic Focus</div>
                    <div class="cursive-text" style="margin-top: 1.5rem;">
                        <p class="greeting" style="color: var(--book-maroon);">Building Strong Foundations</p>
                        <p>Currently mastering fundamental Computer Science subjects and foundational Data Science concepts:</p>
                        <ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 1rem; font-size: 1.5rem;">
                            <li>Data Structures & Algorithms</li>
                            <li>Object-Oriented Programming</li>
                        </ul>
                    </div>
                </div>
            `;
        } else if (type === 'skills') {
            pageRightContent.innerHTML = `
                <div class="handwritten-entry">
                    <div class="book-header-badge">Growth Roadmap</div>
                    <div class="cursive-text" style="margin-top: 1.5rem;">
                        <p class="greeting" style="color: var(--book-sage);">Continuous Learning</p>
                        <p>I actively practice coding and logical problem solving daily, step by step filling up my block meters as I complete new projects!</p>
                        <div style="margin-top: 2rem; padding: 1rem; background: #F8F5EE; border-radius: 8px; border: 1px dashed var(--paper-line);">
                            <p style="font-size: 1.35rem; font-weight: 700; margin: 0; color: var(--text-primary);">Next Skill Targets:</p>
                            <p style="font-size: 1.45rem; margin-top: 0.5rem; color: var(--text-muted); font-weight: 600;">Python</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (type === 'achievements') {
            pageRightContent.innerHTML = `
                <div class="handwritten-entry">
                    <div class="book-header-badge">Martial Arts & Life</div>
                    <div class="cursive-text" style="margin-top: 1.5rem;">
                        <p class="greeting" style="color: var(--book-amber);">Discipline in Motion</p>
                        <p>
                            Kung Fu is more than a sport to me — it is a mindset of perseverance. Winning gold at state & national levels required hundreds of hours of focused practice.
                        </p>
                        <p style="margin-top: 1rem;">
                            I bring that exact same warrior spirit and dedication to solving engineering challenges.
                        </p>
                    </div>
                </div>
            `;
        } else if (type === 'interests') {
            pageRightContent.innerHTML = `
                <div class="handwritten-entry">
                    <div class="book-header-badge">Future Horizons</div>
                    <div class="cursive-text" style="margin-top: 1.5rem;">
                        <p class="greeting" style="color: var(--book-rose);">Exploring & Innovating</p>
                        <p>
                            I am eager to apply data analytics and machine learning to solve real-world problems.
                        </p>
                        <p style="margin-top: 1rem;">
                            Whether it's web development or analyzing trends in large datasets, I enjoy building software that makes a difference.
                        </p>
                    </div>
                </div>
            `;
        } else if (type === 'contact') {
            pageRightContent.innerHTML = `
                <div class="handwritten-entry">
                    <div class="book-header-badge">Open for Opportunities</div>
                    <div class="cursive-text" style="margin-top: 1.5rem;">
                        <p class="greeting" style="color: var(--book-navy);">Let's Connect!</p>
                        <p>
                            Feel free to reach out via email for project collaborations, student tech groups, or simply to say hello!
                        </p>
                        <p style="margin-top: 2rem; font-size: 1.25rem; color: var(--text-muted); font-style: normal; font-family: var(--font-heading);">
                            📍 SVKM's NMIMS, Shirpur Campus<br>
                            💻 B.Tech CSE (Data Science)
                        </p>
                    </div>
                </div>
            `;
        }

        // Show Modal with Smooth Opening Transition
        bookModal.classList.add('active');
        bookModal.setAttribute('aria-hidden', 'false');
    }

    /**
     * Closes the book modal view
     */
    function closeBookView() {
        bookModal.classList.remove('active');
        bookModal.setAttribute('aria-hidden', 'true');
    }
});
