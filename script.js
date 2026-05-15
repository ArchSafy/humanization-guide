document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const setTheme = (theme) => {
        rootElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (systemPrefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = rootElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // 2. Header Scroll Effect
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust scroll position for fixed header
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update active class in navigation
                document.querySelectorAll('.main-nav a').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // 4. Reveal Elements on Scroll
    const revealElements = document.querySelectorAll('.principle-card, .section-header');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    // Set initial state for reveal elements
    revealElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        revealOnScroll.observe(el);
    });

    // 5. Tabs Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // 6. Search Functionality
    const searchInput = document.getElementById('site-search');
    const searchResults = document.getElementById('search-results');
    
    // Index searchable content
    const getSearchData = () => {
        const data = [];
        
        // Gallery Cards (The new primary content)
        document.querySelectorAll('.gallery-card').forEach(el => {
            data.push({
                title: el.querySelector('.card-title').innerText,
                text: el.querySelector('.card-desc').innerText,
                element: el,
                category: 'معرض الأنسنة'
            });
        });
        
        // Guidelines
        document.querySelectorAll('.guideline-card').forEach(el => {
            data.push({
                title: el.querySelector('h3') ? el.querySelector('h3').innerText : '',
                text: el.querySelector('p') ? el.querySelector('p').innerText : '',
                element: el,
                category: 'إرشادات التصميم'
            });
        });
        
        return data;
    };

    const searchData = getSearchData();

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }
        
        const filtered = searchData.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.text.toLowerCase().includes(query)
        );
        
        displayResults(filtered);
    });

    const displayResults = (results) => {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">لا توجد نتائج مطابقة</div>';
        } else {
            results.forEach(result => {
                const item = document.createElement('div');
                item.className = 'search-item';
                item.innerHTML = `
                    <h4>${result.title}</h4>
                    <p>${result.category} - ${result.text.substring(0, 50)}...</p>
                `;
                
                item.addEventListener('click', () => {
                    // Adjust for fixed header
                    const headerHeight = document.querySelector('.main-header').offsetHeight;
                    const elementPosition = result.element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Highlight the element briefly
                    result.element.style.borderColor = 'var(--clr-primary)';
                    result.element.style.boxShadow = 'var(--shadow-lg)';
                    setTimeout(() => {
                        result.element.style.borderColor = '';
                        result.element.style.boxShadow = '';
                    }, 2000);
                    
                    searchResults.classList.remove('active');
                    searchInput.value = '';
                });
                
                searchResults.appendChild(item);
            });
        }
        
        searchResults.classList.add('active');
    };

    // 7. Mobile Menu Functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-overlay a');

    const toggleMenu = () => {
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // 8. Checklist Persistence Logic
    const checklistInputs = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const resetBtn = document.getElementById('reset-checklists');

    // Load saved states
    const loadChecklistState = () => {
        const savedState = JSON.parse(localStorage.getItem('humanizationChecklist') || '{}');
        checklistInputs.forEach(input => {
            if (savedState[input.id]) {
                input.checked = true;
            }
        });
    };

    // Save state on change
    checklistInputs.forEach(input => {
        input.addEventListener('change', () => {
            const savedState = JSON.parse(localStorage.getItem('humanizationChecklist') || '{}');
            savedState[input.id] = input.checked;
            localStorage.setItem('humanizationChecklist', JSON.stringify(savedState));
            
            // Add a little celebration if all items are checked
            checkCompletion();
        });
    });

    const checkCompletion = () => {
        const allChecked = Array.from(checklistInputs).every(input => input.checked);
        if (allChecked) {
            triggerConfetti();
        }
    };

    const triggerConfetti = () => {
        const confettiCount = 100;
        const colors = ['#1C4039', '#6E8C69', '#2B7317', '#BFA084', '#8C6046'];
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.opacity = Math.random();
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }
    };

    resetBtn.addEventListener('click', () => {
        if (confirm('هل أنت متأكد من رغبتك في إعادة تعيين كافة القوائم؟')) {
            checklistInputs.forEach(input => input.checked = false);
            localStorage.removeItem('humanizationChecklist');
        }
    });

    loadChecklistState();

    // 9. Hero Stone Slideshow (Flip Transition)
    const stones = document.querySelectorAll('.stone');
    const imagePool = [
        'streets-guide.png',
        'plazas-guide.png',
        'materials-granite.png',
        'hero-bg.png'
    ];

    const advanceSlideshow = (stone) => {
        const activeImg = stone.querySelector('.stone-img.active');
        const nextImg = stone.querySelector('.stone-img.next');
        
        // Pick a new random image for the hidden 'next' image
        let randomImg = imagePool[Math.floor(Math.random() * imagePool.length)];
        
        // Prepare next image
        nextImg.src = randomImg;
        
        // Trigger the flip animation via CSS class
        stone.classList.add('is-flipping');
        
        // After transition completes (1.2s in CSS), commit the change
        setTimeout(() => {
            activeImg.src = randomImg;
            stone.classList.remove('is-flipping');
        }, 1200);
    };

    stones.forEach((stone, index) => {
        // Staggered start for a natural feel
        setTimeout(() => {
            setInterval(() => {
                advanceSlideshow(stone);
            }, 4000); 
        }, index * 1000);
    });
});
