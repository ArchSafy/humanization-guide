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
    // 6. Search Functionality
    const searchInput = document.getElementById('site-search');
    const searchResults = document.getElementById('search-results');
    
    // Global search index for the entire website
    const globalSearchIndex = [
        {
            title: 'المبادئ الأساسية لأنسنة المدن',
            text: 'الفلسفة والمبادئ العشرة لأنسنة المدن ومقياس الإنسان وقابلية المشي والوصول الشامل والراحة والسلامة والاستدامة.',
            url: 'principles.html',
            category: 'الصفحات الرئيسية'
        },
        {
            title: 'دليل التصميم للفراغات الحضرية',
            text: 'معايير تصميم الفراغات الحضرية والشوارع والساحات العامة والواجهات البحرية والحدائق ومسارات المشاة والزوائد التنظيمية.',
            url: 'design.html',
            category: 'الصفحات الرئيسية'
        },
        {
            title: 'دليل التنفيذ والمواد',
            text: 'مصفوفة المواد والتقنيات ومواصفات التشطيبات للأرصفة والممرات والمواد المعتمدة مثل الجرانيت والخرسانة والإنترلوك.',
            url: 'execution.html',
            category: 'الصفحات الرئيسية'
        },
        {
            title: 'صمم بنفسك (مصمم الشوارع التفاعلي)',
            text: 'أداة تفاعلية لتصميم مقاطع الشوارع الحضرية واختبار معايير الأنسنة وتقييمها تلقائياً.',
            url: 'interactive-street-builder.html',
            category: 'الأدوات التفاعلية'
        },
        {
            title: 'الخريطة التفاعلية ومواقع التدخلات الحضرية',
            text: 'مستكشف جغرافي لمواقع التدخلات الحضرية ومشاريع الأنسنة والبلديات الفرعية بالمنطقة الشرقية.',
            url: 'interactive-map.html',
            category: 'الأدوات التفاعلية'
        },
        {
            title: 'مقياس الإنسان - المبدأ الأول',
            text: 'توجيه الأبعاد والسرعات والفراغات لتناسب حركة الإنسان وإدراكه قبل المركبة والسيارات.',
            url: 'principles.html#human-scale',
            category: 'المبادئ الأساسية'
        },
        {
            title: 'قابلية المشي والأرصفة - المبدأ الثاني',
            text: 'شبكة أرصفة مستمرة وآمنة ومتصلة تجعل المشي خياراً طبيعياً وسهلاً في الشارع.',
            url: 'principles.html#walkability',
            category: 'المبادئ الأساسية'
        },
        {
            title: 'السلامة والأمان المروري - المبدأ الثالث',
            text: 'تقليل المخاطر المرورية ورفع الإحساس بالأمان عبر الرؤية والإنارة وتهدئة الحركة والسرعات.',
            url: 'principles.html#safety',
            category: 'المبادئ الأساسية'
        },
        {
            title: 'الوصول الشامل وذوي الإعاقة - المبدأ الرابع',
            text: 'فراغات قابلة للاستخدام من الجميع بلا عوائق أو مسارات منقطعة لذوي الاحتياجات الخاصة والهمم وكبار السن.',
            url: 'principles.html#accessibility',
            category: 'المبادئ الأساسية'
        },
        {
            title: 'الراحة البيئية والتظليل - المبدأ الخامس',
            text: 'توفير الظل، تقليل الإجهاد الحراري، وتحسين تجربة الاستخدام والتشجير ومكافحة حرارة الصيف.',
            url: 'principles.html#comfort',
            category: 'المبادئ الأساسية'
        },
        {
            title: 'الواجهات النشطة للمحلات - المبدأ السادس',
            text: 'تنشيط حواف الشارع بأنشطة ومحلات تجارية وأبواب وشفافية تعزز الحيوية والمراقبة الطبيعية.',
            url: 'principles.html#frontage',
            category: 'المبادئ الأساسية'
        },
        {
            title: 'الحيوية والهوية البصرية - المبدأ السابع',
            text: 'صناعة أماكن جاذبة تحمل طابع المنطقة الشرقية وتدعم اللقاء والتجمع والاستخدام اليومي المتنوع.',
            url: 'principles.html#vitality',
            category: 'المبادئ الأساسية'
        },
        {
            title: 'الاستدامة والغطاء النباتي - المبدأ الثامن',
            text: 'اختيار حلول ومواد تقلل الهدر وتدعم إدارة المياه والري والغطاء النباتي طويل الأمد.',
            url: 'principles.html#sustainability',
            category: 'المبادئ الأساسية'
        },
        {
            title: 'التكامل والاتساق العمراني - المبدأ التاسع',
            text: 'ربط العناصر والفراغات والمواد في تجربة حضرية واحدة مفهومة ومتماسكة ولغة تصميمية موحدة.',
            url: 'principles.html#integration',
            category: 'المبادئ الأساسية'
        },
        {
            title: 'قابلية التنفيذ والصيانة - المبدأ العاشر',
            text: 'تحويل المبادئ إلى تفاصيل قابلة للبناء والفحص والصيانة بدون فقدان جودة التصميم.',
            url: 'principles.html#implementation',
            category: 'المبادئ الأساسية'
        },
        {
            title: 'الشوارع الحضرية وتصنيفها',
            text: 'تصميم الشوارع الشريانية والتجميعية والمحلية والتجارية والسكنية وعرض الأرصفة والتقاطعات وتهدئة السرعات.',
            url: 'urban-streets.html',
            category: 'دليل التصميم'
        },
        {
            title: 'الساحات العامة والفراغات التجمعية',
            text: 'تصميم وتوزيع الحركة والجلوس والظلال والأرضيات والحواف النشطة ونقاط الجذب بالساحات العامة.',
            url: 'public-squares.html',
            category: 'دليل التصميم'
        },
        {
            title: 'الحدائق والمتنزهات والمساحات الخضراء',
            text: 'تصميم مناطق اللعب والمشي والجلوس والتشجير والري والإضاءة والسلامة بالحدائق العامة والمسطحات الخضراء.',
            url: 'parks-gardens.html',
            category: 'دليل التصميم'
        },
        {
            title: 'الواجهات البحرية والكورنيش',
            text: 'تصميم مسارات الكورنيش ونقاط المشاهدة والحماية وأثاث الشارع والظلال والأنشطة بالواجهات البحرية والبحيرات.',
            url: 'waterfronts.html',
            category: 'دليل التصميم'
        },
        {
            title: 'مسارات المشاة والأرصفة المتصلة',
            text: 'استمرارية المسار والعبور والميول والمنحدرات والعوائق والتوجيه والإضاءة ومناطق الراحة على طول رحلة المشاة.',
            url: 'pedestrian-paths.html',
            category: 'دليل التصميم'
        },
        {
            title: 'الزوائد التنظيمية وارتدادات المباني',
            text: 'معايير تهيئة ارتدادات المباني والخطوط التنظيمية والمواد المعتمدة والتشجير والتكامل مع الرصيف العام.',
            url: 'regulatory-offsets.html',
            category: 'دليل التصميم'
        },
        {
            title: 'مصفوفة المواد والتشطيبات بالأرضيات',
            text: 'مواصفات المواد مثل الجرانيت، الخرسانة الممشطة، الانترلوك، الإضاءة، التشجير، وأثاث الشارع بالمنطقة الشرقية.',
            url: 'execution.html#materials',
            category: 'دليل التنفيذ'
        },
        {
            title: 'جودة التنفيذ والاستدامة والصيانة',
            text: 'مواصفات التنفيذ الفنية ومراقبة الجودة وفحص واستلام المواد وأعمال المقاولين واستدامة المشاريع.',
            url: 'execution.html#quality',
            category: 'دليل التنفيذ'
        }
    ];

    // Index searchable content from current page DOM
    const getSearchData = () => {
        const data = [...globalSearchIndex];
        
        // Dynamic additions from current page
        // 1. Principle cards
        document.querySelectorAll('.principle-card').forEach(el => {
            const title = el.querySelector('h4') ? el.querySelector('h4').innerText : '';
            const desc = el.querySelector('p') ? el.querySelector('p').innerText : '';
            const key = el.dataset.principle;
            if (title && key) {
                const index = data.findIndex(item => item.url === `principles.html#${key}`);
                if (index !== -1) {
                    data[index].element = el;
                } else {
                    data.push({
                        title: title,
                        text: desc,
                        url: `principles.html#${key}`,
                        element: el,
                        category: 'المبادئ الأساسية'
                    });
                }
            }
        });
        
        // 2. Urban Typology Cards
        document.querySelectorAll('.urban-typology-card').forEach(el => {
            const title = el.querySelector('h4') ? el.querySelector('h4').innerText : '';
            const desc = el.querySelector('p') ? el.querySelector('p').innerText : '';
            const href = el.getAttribute('href');
            if (title && href) {
                const index = data.findIndex(item => item.url === href);
                if (index !== -1) {
                    data[index].element = el;
                } else {
                    data.push({
                        title: title,
                        text: desc,
                        url: href,
                        element: el,
                        category: 'دليل التصميم'
                    });
                }
            }
        });
        
        // 3. Street Type Cards
        document.querySelectorAll('.street-type-card').forEach(el => {
            const title = el.querySelector('h4') ? el.querySelector('h4').innerText : '';
            const desc = el.querySelector('p') ? el.querySelector('p').innerText : '';
            if (title) {
                const currentPage = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1) || 'index.html';
                data.push({
                    title: title,
                    text: desc,
                    element: el,
                    url: currentPage,
                    category: 'تصنيف العناصر'
                });
            }
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
                    <p>${result.category} - ${result.text.substring(0, 60)}...</p>
                `;
                
                item.addEventListener('click', () => {
                    if (result.url) {
                        const currentPath = window.location.pathname;
                        const targetUrlParts = result.url.split('#');
                        const targetPage = targetUrlParts[0];
                        const targetAnchor = targetUrlParts[1];
                        
                        const currentPageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
                        
                        if (targetPage === currentPageName || (targetPage === 'index.html' && currentPageName === '')) {
                            // Smooth scroll on same page
                            let targetElement = result.element;
                            if (!targetElement && targetAnchor) {
                                targetElement = document.getElementById(targetAnchor) || 
                                                document.querySelector(`[data-principle="${targetAnchor}"]`);
                            }
                            
                            if (targetElement) {
                                const headerHeight = document.querySelector('.main-header').offsetHeight;
                                const elementPosition = targetElement.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
                                
                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });
                                
                                // Trigger principle selection on principles.html if available
                                if (targetAnchor && typeof selectPrinciple === 'function' && targetElement.classList.contains('principle-card')) {
                                    selectPrinciple(targetAnchor);
                                } else {
                                    targetElement.style.borderColor = 'var(--clr-primary)';
                                    targetElement.style.boxShadow = 'var(--shadow-lg)';
                                    setTimeout(() => {
                                        targetElement.style.borderColor = '';
                                        targetElement.style.boxShadow = '';
                                    }, 2000);
                                }
                            } else {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        } else {
                            // Redirect to other page
                            window.location.href = result.url;
                        }
                    }
                    
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
        
        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('active');
            }
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
            dont: 'تصميم الشارع كقطاع مروري فقط، ثم محاولة إضافة عناصر إنسانية بعد تثبيت العرض والسرعات.',
            do: 'تصميم الشارع من رصيف المشاة إلى الخارج (Inside-Out)، وتحديد السرعة المستهدفة أولاً (مثلاً 30 كم/س).'
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
            dont: 'اعتبار الرصيف مساحة متبقية بعد توزيع المركبات والمواقف، بدل كونه العنصر الرئيسي للحركة.',
            do: 'تأمين رصيف مستمر وخالٍ من العوائق بعرض 1.8 متر على الأقل كأولوية تخطيطية أولى.'
        },
        safety: {
            number: '03',
            eyebrow: 'Safety & Security',
            title: 'السلامة والأمان',
            summary: 'تقليل المخاطر مرورية ورفع الإحساس بالأمان عبر الرؤية، الإضاءة، وتهدئة الحركة.',
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
            dont: 'الاعتماد على الإشارات التحذيرية فقط لتقليل السرعة، بدلاً من التعديل المادي لهندسة الشارع.',
            do: 'استخدام عناصر مادية لتهدئة السرعة (مثل المطبات الصاعدة، تضييق الحارات، وتقاطعات مشاة مرتفعة).'
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
            dont: 'وضع منحدرات حادة جداً أو إنهاء المسارات الملمسية أمام حوائط أو عوائق.',
            do: 'منحدرات بزاوية ميل لا تتعدى 1:12 ومسارات ملمسية متصلة تقود بأمان إلى مناطق العبور.'
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
            dont: 'زراعة أشجار ديكورية بعيدة عن المسار الفعلي للمشاة، فتبدو جميلة ولا تصنع راحة.',
            do: 'استخدام أشجار ذات مظلة وارفة لتوفير ظل مستمر، وأرصفة ذات معامل انعكاس شمسي (SRI) عالٍ.'
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
            dont: 'تصميم رصيف جيد أمام واجهات مغلقة لا تقدم سببًا للمشي أو التوقف.',
            do: 'تصميم نوافذ شفافة ومداخل متعددة ومتاجر صغيرة تنشط حافة الرصيف وتوفر رقابة طبيعية.'
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
            dont: 'الاعتماد على عنصر بصري واحد كبير بدل بناء تجربة مكان كاملة قابلة للاستخدام.',
            do: 'تصميم مقاعد مندمجة ومظللة باستخدام خامات محلية وألوان مستوحاة من عمارة الساحل الشرقي.'
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
            dont: 'اختيار حلول خضراء شكلية تحتاج صيانة عالية فتفشل بعد فترة قصيرة.',
            do: 'تطبيق أنظمة الصرف المستدام (SUDS) وزراعة نباتات محلية مقاومة للجفاف وموفرة للمياه.'
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
            dont: 'تجميع عناصر جيدة منفردة لكنها تتنافس بصريًا ووظيفيًا عند وضعها معًا.',
            do: 'توحيد باليتة الألوان والمواد، وتنظيم المسارات في قطاعات واضحة (التأثيث، المشي، الواجهة).'
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
            dont: 'ترك المبادئ في مستوى العبارات العامة دون تحويلها إلى تفاصيل ومقاييس استلام.',
            do: 'استخدام تفاصيل معيارية قابلة للبناء، ومواد متينة متوفرة محلياً لضمان سهولة الصيانة مستقبلاً.'
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
    const detailDont = document.getElementById('principle-detail-dont');
    const detailDo = document.getElementById('principle-detail-do');

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
        if (detailDont) detailDont.textContent = data.dont;
        if (detailDo) detailDo.textContent = data.do;
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

        // 9.1. Interactive Link Matrix Hover Logic
        const matrixCards = document.querySelectorAll('.matrix-grid div[data-matrix]');
        if (matrixCards.length) {
            const matrixLinks = {
                'pedestrian': ['human-scale', 'walkability', 'accessibility'],
                'safety': ['safety', 'accessibility', 'integration'],
                'climate': ['comfort', 'sustainability'],
                'identity': ['frontage', 'vitality', 'integration'],
                'execution': ['implementation', 'sustainability']
            };

            matrixCards.forEach((mCard) => {
                mCard.addEventListener('mouseenter', () => {
                    const matrixKey = mCard.dataset.matrix;
                    const activeKeys = matrixLinks[matrixKey] || [];
                    mCard.classList.add('active-matrix');

                    principleCards.forEach((pCard) => {
                        const pKey = pCard.dataset.principle;
                        if (activeKeys.includes(pKey)) {
                            pCard.classList.add('highlight-link');
                            pCard.classList.remove('dimmed');
                        } else {
                            pCard.classList.add('dimmed');
                            pCard.classList.remove('highlight-link');
                        }
                    });
                });

                mCard.addEventListener('mouseleave', () => {
                    mCard.classList.remove('active-matrix');
                    principleCards.forEach((pCard) => {
                        pCard.classList.remove('dimmed');
                        pCard.classList.remove('highlight-link');
                    });
                });
            });
        }

        // 9.2. Humanization Score Calculator Logic
        const calcBtns = document.querySelectorAll('.calc-btn');
        const calcScoreEl = document.getElementById('calc-score');
        const calcProgressBar = document.getElementById('calc-progress-bar');
        const calcTitleEl = document.getElementById('calc-status-title');
        const calcDescEl = document.getElementById('calc-status-desc');

        if (calcBtns.length && calcScoreEl) {
            const updateCalculatorScore = () => {
                let score = 0;
                const activeBtns = document.querySelectorAll('.calc-btn.active');
                activeBtns.forEach(btn => {
                    score += parseInt(btn.dataset.val || '0', 10);
                });

                score = Math.min(Math.max(score, 0), 100);
                calcScoreEl.textContent = `${score}%`;

                const circumference = 377;
                const offset = circumference - (score / 100) * circumference;
                if (calcProgressBar) {
                    calcProgressBar.style.strokeDashoffset = offset;
                    if (score >= 80) {
                        calcProgressBar.setAttribute('stroke', '#a57f61');
                    } else if (score >= 50) {
                        calcProgressBar.setAttribute('stroke', '#f39c12');
                    } else {
                        calcProgressBar.setAttribute('stroke', '#c0392b');
                    }
                }

                if (score >= 85) {
                    calcTitleEl.textContent = 'شارع إنساني متكامل';
                    calcDescEl.textContent = 'رائع! هذا التصميم يحقق أعلى درجات الأنسنة وجودة الحياة ومطابق للأدلة المعتمدة بالكامل.';
                } else if (score >= 60) {
                    calcTitleEl.textContent = 'شارع مقبول جزئياً';
                    calcDescEl.textContent = 'جيد، لكن الشارع يحتاج لبعض التحسينات في مجالات التشجير والراحة البيئية أو عروض الأرصفة ليكون مريحاً بالكامل.';
                } else {
                    calcTitleEl.textContent = 'شارع طارد للمشاة';
                    calcDescEl.textContent = 'تنبيه: هذا التصميم يفتقر لأبسط مقومات أنسنة المدن، ويعزز سيطرة حركة السيارات على حساب سلامة المشاة.';
                }
            };

            calcBtns.forEach((btn) => {
                btn.addEventListener('click', () => {
                    const question = btn.dataset.question;
                    document.querySelectorAll(`.calc-btn[data-question="${question}"]`).forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    updateCalculatorScore();
                });
            });

            updateCalculatorScore();
        }

        let initialPrinciple = principleCards[0].dataset.principle;
        const hash = window.location.hash.substring(1);
        if (hash && Array.from(principleCards).some(c => c.dataset.principle === hash)) {
            initialPrinciple = hash;
            setTimeout(() => {
                const targetCard = document.querySelector(`[data-principle="${hash}"]`);
                if (targetCard) {
                    const headerHeight = document.querySelector('.main-header').offsetHeight;
                    const elementPosition = targetCard.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
        selectPrinciple(initialPrinciple);
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

    // 12. Dynamic Homepage Status Widgets (Date, Time, Weather, Location)
    const initStatusWidgets = () => {
        const dateEl = document.getElementById('widget-date');
        const timeEl = document.getElementById('widget-time');
        const weatherTempEl = document.getElementById('widget-weather-temp');
        const weatherIconEl = document.getElementById('widget-weather-icon');
        
        if (!dateEl || !timeEl) return;
        
        // A. Update Date in Arabic format
        const updateDate = () => {
            const today = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateEl.textContent = today.toLocaleDateString('ar-EG', options);
        };
        
        // B. Update Time
        const updateTime = () => {
            const today = new Date();
            let hours = today.getHours();
            let minutes = today.getMinutes();
            const ampm = hours >= 12 ? 'م' : 'ص';
            hours = hours % 12;
            hours = hours ? hours : 12; 
            minutes = minutes < 10 ? '0' + minutes : minutes;
            timeEl.textContent = `${hours}:${minutes} ${ampm}`;
        };
        
        // C. Update Weather dynamically based on time of day (summer profile for Dammam)
        const updateWeather = () => {
            const today = new Date();
            const hour = today.getHours();
            
            let temp = 38;
            let iconClass = 'fa-sun';
            let weatherDesc = 'مشمس';
            let iconColor = '#FFD740';
            
            if (hour >= 12 && hour <= 15) {
                temp = 44; 
                iconClass = 'fa-sun';
                weatherDesc = 'مشمس شديد الحرارة';
                iconColor = '#FFB300';
            } else if (hour >= 9 && hour < 12) {
                temp = 41;
                iconClass = 'fa-sun';
                weatherDesc = 'مشمس';
                iconColor = '#FFD740';
            } else if (hour > 15 && hour <= 18) {
                temp = 42;
                iconClass = 'fa-sun';
                weatherDesc = 'مشمس حار';
                iconColor = '#FFA000';
            } else if (hour > 18 && hour <= 21) {
                temp = 36;
                iconClass = 'fa-cloud-moon';
                weatherDesc = 'غائم جزئياً ورطب';
                iconColor = '#CFD8DC';
            } else if (hour > 21 || hour < 5) {
                temp = 33;
                iconClass = 'fa-moon';
                weatherDesc = 'صافي ورطب';
                iconColor = '#90CAF9';
            } else { 
                temp = 35;
                iconClass = 'fa-cloud-sun';
                weatherDesc = 'غائم جزئياً';
                iconColor = '#FFE082';
            }
            
            if (weatherTempEl) {
                weatherTempEl.textContent = `${temp}°م - ${weatherDesc}`;
            }
            if (weatherIconEl) {
                weatherIconEl.className = 'fas';
                weatherIconEl.classList.add(iconClass);
                weatherIconEl.style.color = iconColor;
            }
        };
        
        updateDate();
        updateTime();
        updateWeather();
        
        setInterval(updateTime, 1000 * 30);
        setInterval(updateWeather, 1000 * 60 * 10);
    };
    initStatusWidgets();

    // 13. Stats Counter Logic (IntersectionObserver & requestAnimationFrame)
    const initStatsCounter = () => {
        const statsSection = document.querySelector('.stats-section');
        const statNumbers = document.querySelectorAll('.stat-number');
        if (!statsSection || statNumbers.length === 0) return;

        const animateCount = (el) => {
            const target = parseFloat(el.getAttribute('data-target'));
            const decimals = parseInt(el.getAttribute('data-decimals') || '0');
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            const updateCount = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                if (elapsedTime >= duration) {
                    el.textContent = target.toFixed(decimals);
                } else {
                    const progress = elapsedTime / duration;
                    const easeProgress = progress * (2 - progress); // Ease out quad
                    const currentVal = easeProgress * target;
                    el.textContent = currentVal.toFixed(decimals);
                    requestAnimationFrame(updateCount);
                }
            };

            requestAnimationFrame(updateCount);
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statNumbers.forEach(num => animateCount(num));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        counterObserver.observe(statsSection);
    };
    initStatsCounter();
});
