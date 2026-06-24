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

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = rootElement.getAttribute('data-theme');
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

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

    if (searchInput && searchResults) {
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
    }

    // 7. Mobile Menu Functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-overlay a');

    const toggleMenu = () => {
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
    };

    if (mobileMenuBtn && mobileOverlay && closeMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

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
        const colors = ['#E9E7E2', '#C8AB99', '#BDB4AC', '#A57F61', '#6EBECF', '#555D71'];
        
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

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
        if (confirm('هل أنت متأكد من رغبتك في إعادة تعيين كافة القوائم؟')) {
            checklistInputs.forEach(input => input.checked = false);
            localStorage.removeItem('humanizationChecklist');
        }
        });
    }

    if (checklistInputs.length) {
        loadChecklistState();
    }

    // 9. Principles Dashboard
    const principleData = {
        'human-scale': {
            number: '01',
            eyebrow: 'Human Scale',
            title: 'مقياس الإنسان',
            summary: 'توجيه الأبعاد، السرعات، والفراغات لتناسب حركة الإنسان وإدراكه قبل المركبة.',
            actions: [
                'تقليل عرض المسارات وسرعات المركبات في المناطق ذات النشاط المشاة.',
                'استخدام واجهات وأثاث حضري وأبعاد قراءة قريبة من مستوى العين.',
                'تقسيم الفراغات الكبيرة إلى مناطق جلوس وحركة واضحة.'
            ],
            indicators: [
                'هل يستطيع المستخدم فهم المسار والوجهة خلال ثوان؟',
                'هل توجد نقاط توقف وجلوس ضمن مسافات مريحة؟',
                'هل السرعة التصميمية مناسبة للبيئة الحضرية؟'
            ],
            mistake: 'تصميم الشارع كقطاع مروري فقط، ثم محاولة إضافة عناصر إنسانية بعد تثبيت العرض والسرعات.'
        },
        walkability: {
            number: '02',
            eyebrow: 'Walkability',
            title: 'قابلية المشي',
            summary: 'شبكة أرصفة مستمرة وآمنة ومتصلة تجعل المشي خيارًا طبيعيًا لا اضطراريًا.',
            actions: [
                'توفير أرصفة مستمرة بعرض واضح وخالية من العوائق.',
                'تقليل مسافات العبور وتوضيح نقاط التقاطع.',
                'ربط المداخل والخدمات ومحطات النقل بمسارات مباشرة.'
            ],
            indicators: [
                'هل ينقطع الرصيف بسبب مواقف أو أعمدة أو مناسيب؟',
                'هل مسافة العبور آمنة ومقروءة؟',
                'هل المسار يخدم الوجهات اليومية فعليًا؟'
            ],
            mistake: 'اعتبار الرصيف مساحة متبقية بعد توزيع المركبات والمواقف، بدل كونه العنصر الرئيسي للحركة.'
        },
        safety: {
            number: '03',
            eyebrow: 'Safety & Security',
            title: 'السلامة والأمان',
            summary: 'تقليل المخاطر المرورية ورفع الإحساس بالأمان عبر الرؤية، الإضاءة، وتهدئة الحركة.',
            actions: [
                'استخدام عناصر تهدئة حركة عند التقاطعات والمناطق النشطة.',
                'توفير إنارة منتظمة دون مناطق مظلمة أو وهج مزعج.',
                'ضمان خطوط رؤية واضحة بين المشاة والسائقين.'
            ],
            indicators: [
                'هل توجد تعارضات واضحة بين المركبات والمشاة؟',
                'هل الإضاءة تغطي الأرصفة والمعابر؟',
                'هل التصميم يشجع السرعات المنخفضة؟'
            ],
            mistake: 'الاكتفاء باللوحات والتنبيهات بدل معالجة سبب الخطر في شكل الطريق نفسه.'
        },
        accessibility: {
            number: '04',
            eyebrow: 'Universal Accessibility',
            title: 'الوصول الشامل',
            summary: 'فراغات قابلة للاستخدام من الجميع، بلا عوائق أو مسارات منقطعة أو حلول شكلية.',
            actions: [
                'توفير منحدرات ومناسيب متصلة عند كل عبور ومدخل.',
                'ترك مسار حر واضح يخدم الكراسي المتحركة وعربات الأطفال.',
                'استخدام مواد وتفاصيل لا تسبب تعثرًا أو انزلاقًا.'
            ],
            indicators: [
                'هل يستطيع مستخدم الكرسي المتحرك عبور المسار كاملًا؟',
                'هل أماكن الجلوس والمداخل متاحة للجميع؟',
                'هل توجد عوائق داخل المسار الحر؟'
            ],
            mistake: 'إضافة منحدر في نقطة واحدة فقط بينما باقي المسار مليء بعوائق أو فروق مناسيب.'
        },
        comfort: {
            number: '05',
            eyebrow: 'Environmental Comfort',
            title: 'الراحة البيئية',
            summary: 'توفير الظل، تقليل الإجهاد الحراري، وتحسين تجربة الاستخدام في مناخ المنطقة.',
            actions: [
                'توزيع الأشجار والمظلات على مسارات المشي والانتظار.',
                'اختيار مواد أرضيات تقلل امتصاص الحرارة والوهج.',
                'توفير نقاط جلوس مرتبطة بالظل والأنشطة.'
            ],
            indicators: [
                'هل المسار الرئيسي مظلل في أوقات الاستخدام؟',
                'هل توجد أماكن راحة على امتداد المسار؟',
                'هل المواد مناسبة للمناخ المحلي؟'
            ],
            mistake: 'زراعة أشجار ديكورية بعيدة عن المسار الفعلي للمشاة، فتبدو جميلة ولا تصنع راحة.'
        },
        frontage: {
            number: '06',
            eyebrow: 'Active Frontage',
            title: 'الواجهات النشطة',
            summary: 'تنشيط حواف الشارع بأنشطة وأبواب وشفافية تعزز الحيوية والمراقبة الطبيعية.',
            actions: [
                'زيادة المداخل والنوافذ والأنشطة على مستوى المشاة.',
                'تقليل الأسوار الصماء والواجهات غير المتفاعلة.',
                'توفير مناطق انتقالية بين الخاص والعام مثل الجلسات الخارجية.'
            ],
            indicators: [
                'هل توجد واجهات صماء طويلة؟',
                'هل يرى المستخدم نشاطًا ووجهات على امتداد الرصيف؟',
                'هل الحافة تدعم الإحساس بالأمان؟'
            ],
            mistake: 'تصميم رصيف جيد أمام واجهات مغلقة لا تقدم سببًا للمشي أو التوقف.'
        },
        vitality: {
            number: '07',
            eyebrow: 'Vitality & Identity',
            title: 'الحيوية والهوية',
            summary: 'صناعة أماكن جاذبة تحمل طابع المنطقة وتدعم اللقاء والاستخدام اليومي المتنوع.',
            actions: [
                'دمج أنشطة يومية وموسمية تناسب المجتمع المحلي.',
                'استخدام مواد وألوان وعناصر تعكس هوية المنطقة الشرقية.',
                'توفير فراغات مرنة للجلوس، الانتظار، والفعاليات الصغيرة.'
            ],
            indicators: [
                'هل يوجد سبب واضح لبقاء الناس في المكان؟',
                'هل الهوية تظهر في المواد والتفاصيل لا في الشعار فقط؟',
                'هل يخدم الفراغ أكثر من فئة عمرية؟'
            ],
            mistake: 'الاعتماد على عنصر بصري واحد كبير بدل بناء تجربة مكان كاملة قابلة للاستخدام.'
        },
        sustainability: {
            number: '08',
            eyebrow: 'Sustainability',
            title: 'الاستدامة',
            summary: 'اختيار حلول ومواد تقلل الهدر وتدعم إدارة المياه والغطاء النباتي طويل الأمد.',
            actions: [
                'اختيار نباتات محلية أو متكيفة قليلة الاحتياج للمياه.',
                'استخدام مواد متينة وقابلة للصيانة والاستبدال الجزئي.',
                'دمج حلول تصريف وإدارة مياه أمطار حيثما أمكن.'
            ],
            indicators: [
                'هل تكلفة الصيانة منطقية على المدى الطويل؟',
                'هل المواد تتحمل الاستخدام والمناخ؟',
                'هل يوجد منطق واضح للري والتصريف؟'
            ],
            mistake: 'اختيار حلول خضراء شكلية تحتاج صيانة عالية فتفشل بعد فترة قصيرة.'
        },
        integration: {
            number: '09',
            eyebrow: 'Integration & Cohesion',
            title: 'التكامل والاتساق',
            summary: 'ربط العناصر والفراغات والمواد في تجربة حضرية واحدة مفهومة ومتماسكة.',
            actions: [
                'توحيد لغة المواد والأثاث والإنارة عبر المسار.',
                'ربط الشارع بالساحات والواجهات ومحطات النقل.',
                'استخدام تسلسل بصري واضح يساعد على التوجيه.'
            ],
            indicators: [
                'هل تبدو العناصر كمنظومة واحدة أم إضافات متفرقة؟',
                'هل الانتقال بين الفراغات سهل ومقروء؟',
                'هل توجد تعارضات بين التشجير، الإنارة، الأثاث، والحركة؟'
            ],
            mistake: 'تجميع عناصر جيدة منفردة لكنها تتنافس بصريًا ووظيفيًا عند وضعها معًا.'
        },
        implementation: {
            number: '10',
            eyebrow: 'Implementation & Maintenance',
            title: 'قابلية التنفيذ والصيانة',
            summary: 'تحويل المبادئ إلى تفاصيل قابلة للبناء والفحص والصيانة بدون فقدان جودة التصميم.',
            actions: [
                'ربط كل مبدأ بتفصيل تنفيذي أو مواصفة قابلة للقياس.',
                'تحديد مواد وطبقات وتركيبات قابلة للتوريد والصيانة.',
                'إعداد قوائم فحص للاستلام والتشغيل.'
            ],
            indicators: [
                'هل يمكن للمقاول فهم التفصيل دون اجتهادات كبيرة؟',
                'هل يمكن استبدال عنصر تالف دون كسر المنظومة؟',
                'هل توجد معايير قبول واضحة في الموقع؟'
            ],
            mistake: 'ترك المبادئ في مستوى العبارات العامة دون تحويلها إلى تفاصيل ومقاييس استلام.'
        }
    };

    const principleCards = document.querySelectorAll('.principle-card[data-principle]');
    const principleFilterBtns = document.querySelectorAll('.principle-filter-btn');
    const detailNumber = document.getElementById('principle-detail-number');
    const detailEyebrow = document.getElementById('principle-detail-eyebrow');
    const detailTitle = document.getElementById('principle-detail-title');
    const detailSummary = document.getElementById('principle-detail-summary');
    const detailActions = document.getElementById('principle-detail-actions');
    const detailIndicators = document.getElementById('principle-detail-indicators');
    const detailMistake = document.getElementById('principle-detail-mistake');

    const renderList = (element, items) => {
        if (!element) return;
        element.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
    };

    const selectPrinciple = (key) => {
        const data = principleData[key];
        if (!data) return;

        principleCards.forEach((card) => {
            card.classList.toggle('active', card.dataset.principle === key);
        });

        if (detailNumber) detailNumber.textContent = data.number;
        if (detailEyebrow) detailEyebrow.textContent = data.eyebrow;
        if (detailTitle) detailTitle.textContent = data.title;
        if (detailSummary) detailSummary.textContent = data.summary;
        renderList(detailActions, data.actions);
        renderList(detailIndicators, data.indicators);
        if (detailMistake) detailMistake.textContent = data.mistake;
    };

    if (principleCards.length) {
        principleCards.forEach((card) => {
            card.addEventListener('click', () => selectPrinciple(card.dataset.principle));
        });

        principleFilterBtns.forEach((button) => {
            button.addEventListener('click', () => {
                const audience = button.dataset.audience;
                principleFilterBtns.forEach((btn) => btn.classList.remove('active'));
                button.classList.add('active');

                let firstVisible = null;
                principleCards.forEach((card) => {
                    const audiences = (card.dataset.audiences || '').split(' ');
                    const isVisible = audience === 'all' || audiences.includes(audience);
                    card.classList.toggle('hidden-by-filter', !isVisible);
                    if (isVisible && !firstVisible) firstVisible = card;
                });

                if (firstVisible) {
                    selectPrinciple(firstVisible.dataset.principle);
                }
            });
        });

        selectPrinciple(principleCards[0].dataset.principle);
    }

    // 10. Neuron Constellation Logic
    const initNeuronConstellation = () => {
        const canvas = document.getElementById('neuron-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const wrapper = document.getElementById('neuron-wrapper');
        const nodes = document.querySelectorAll('.neuron-node');
        
        let width, height;
        const nodeData = [];
        const sparkles = [];
        
        // Base setup
        const resize = () => {
            width = wrapper.offsetWidth;
            height = wrapper.offsetHeight;
            canvas.width = width;
            canvas.height = height;
        };
        
        window.addEventListener('resize', resize);
        resize();
        
        // Init nodes with random positions and velocities
        nodes.forEach((node) => {
            // Need radius for collision
            const radius = node.offsetWidth / 2 || 50; 
            
            // Start somewhere inside
            const x = Math.random() * (width - radius * 2) + radius;
            const y = Math.random() * (height - radius * 2) + radius;
            
            nodeData.push({
                el: node,
                r: radius,
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                hover: false
            });
            
            node.addEventListener('mouseenter', () => {
                const nd = nodeData.find(n => n.el === node);
                if (nd) nd.hover = true;
            });
            node.addEventListener('mouseleave', () => {
                const nd = nodeData.find(n => n.el === node);
                if (nd) nd.hover = false;
            });
        });
        
        // Init sparkles (Increased count)
        for(let i=0; i<160; i++) {
            sparkles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2.5 + 0.5,
                alpha: Math.random()
            });
        }
        
        let mouseX = width/2;
        let mouseY = height/2;
        wrapper.addEventListener('mousemove', (e) => {
            const rect = wrapper.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });
        
        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            
            // Update node physics (Movement & Collision)
            for(let i=0; i<nodeData.length; i++) {
                const n1 = nodeData[i];
                if (!n1.hover) {
                    n1.x += n1.vx;
                    n1.y += n1.vy;
                    
                    // Bounce walls
                    if (n1.x < n1.r || n1.x > width - n1.r) n1.vx *= -1;
                    if (n1.y < n1.r || n1.y > height - n1.r) n1.vy *= -1;
                }
                
                // Node-Node Collision
                for(let j=i+1; j<nodeData.length; j++) {
                    const n2 = nodeData[j];
                    let dx = n2.x - n1.x;
                    let dy = n2.y - n1.y;
                    
                    if (dx === 0 && dy === 0) {
                        dx = Math.random() - 0.5;
                        dy = Math.random() - 0.5;
                    }
                    
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    
                    // Min dist = radius1 + radius2 + 10px padding
                    const minDist = n1.r + n2.r + 10; 
                    
                    if (dist < minDist) {
                        // Repel them
                        const angle = Math.atan2(dy, dx);
                        const force = (minDist - dist) * 0.05;
                        const fx = Math.cos(angle) * force;
                        const fy = Math.sin(angle) * force;
                        
                        if (!n1.hover) {
                            n1.vx -= fx;
                            n1.vy -= fy;
                        }
                        if (!n2.hover) {
                            n2.vx += fx;
                            n2.vy += fy;
                        }
                    }
                }
                
                // Friction for stable speeds
                if (!n1.hover) {
                    const speed = Math.sqrt(n1.vx*n1.vx + n1.vy*n1.vy);
                    if (speed > 0.5) {
                        n1.vx *= 0.95;
                        n1.vy *= 0.95;
                    } else if (speed < 0.1) {
                        // Add random nudge to prevent freezing
                        n1.vx += (Math.random() - 0.5) * 0.05;
                        n1.vy += (Math.random() - 0.5) * 0.05;
                    }
                }
            }
            
            // Apply visual positions
            nodeData.forEach(nd => {
                nd.el.style.left = nd.x + 'px';
                nd.el.style.top = nd.y + 'px';
            });
            
            // Draw connections (Thicker light grey)
            ctx.lineWidth = 2.5;
            for(let i=0; i<nodeData.length; i++) {
                for(let j=i+1; j<nodeData.length; j++) {
                    const n1 = nodeData[i];
                    const n2 = nodeData[j];
                    const dx = n1.x - n2.x;
                    const dy = n1.y - n2.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    
                    if (dist < 350) {
                        const alpha = 1 - (dist / 350);
                        // Using light grey #BDB4AC -> rgba(189, 180, 172, alpha)
                        ctx.strokeStyle = `rgba(189, 180, 172, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(n1.x, n1.y);
                        ctx.lineTo(n2.x, n2.y);
                        ctx.stroke();
                    }
                }
            }
            
            // Update & Draw sparkles
            sparkles.forEach(s => {
                s.x += s.vx;
                s.y += s.vy;
                s.alpha += (Math.random() - 0.5) * 0.15;
                s.alpha = Math.max(0.1, Math.min(1, s.alpha));
                
                // Mouse repulsion
                const dx = s.x - mouseX;
                const dy = s.y - mouseY;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 120) {
                    s.x += dx * 0.03;
                    s.y += dy * 0.03;
                }
                
                if (s.x < 0) s.x = width;
                if (s.x > width) s.x = 0;
                if (s.y < 0) s.y = height;
                if (s.y > height) s.y = 0;
                
                // Sparkles use primary/accent color mix
                ctx.fillStyle = `rgba(110, 190, 207, ${s.alpha})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();
            });
            
            requestAnimationFrame(draw);
        };
        
        draw();
    };
    
    initNeuronConstellation();

    // 11. Skyline Wipe Scroll Reveal
    const initSkylineReveal = () => {
        const skylineSection = document.querySelector('.skyline-section');
        if (skylineSection) {
            const skylineObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            skylineObserver.observe(skylineSection);
        }
    };
    initSkylineReveal();
});
