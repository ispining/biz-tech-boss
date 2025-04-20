// script.js

let projectSwiperInstance; // Объявляем переменную для экземпляра Swiper в более широкой области видимости

// === Объект с переводами ===
const translations = {
    ru: {
        "hero.title": "Илья Лазарев",
        "hero.subtitle": "Это не начало твоего пути в технологичный мир, это уже конечная цель",
        "hero.button": "Обсудить проект",
        "nav.products": "Продукты",
        "nav.categories": "Категории",
        "nav.categories.hero": "Главный экран",
        "nav.categories.courses": "Курсы",
        "nav.categories.projects": "Каталог проектов",
        "nav.categories.services": "Наши услуги",
        "nav.categories.about": "Обо мне",
        "nav.categories.technologies": "Технологии",
        "nav.categories.contact": "Свяжитесь с нами",
        "about.title": "Обо мне",
        "about.name": "Илья Лазарев",
        "about.description": "Привет! Мне 28 лет, я Full-Stack разработчик из Израиля. Увлекаюсь созданием интерактивных веб-приложений, автоматизацией процессов и исследованием возможностей ИИ. Всегда в поиске интересных проектов и новых вызовов.",
        "about.photoAlt": "Фото Ильи Лазарева",
        "services.title": "Наши услуги",
        "services.ai.title": "ИИ для бизнеса",
        "services.ai.description": "Внедрение решений на основе искусственного интеллекта для оптимизации и анализа.",
        "services.webdev.title": "Разработка сайтов",
        "services.webdev.description": "Создание современных, адаптивных и высокопроизводительных веб-сайтов.",
        "services.automation.title": "Автоматизация",
        "services.automation.description": "Автоматизация рутинных бизнес-процессов для повышения эффективности.",
        "services.software.title": "Разработка ПО",
        "services.software.description": "Разработка кастомного программного обеспечения под уникальные задачи вашего бизнеса.",
        "services.prototyping.title": "Разработка прототипов",
        "services.prototyping.description": "Быстрое создание интерактивных прототипов для тестирования идей.",
        "services.scripts.title": "Скрипты и боты",
        "services.scripts.description": "Разработка скриптов и ботов для автоматизации задач и взаимодействия.",
        "services.tech_support.title": "Техподдержка бизнеса",
        "services.tech_support.description": "Комплексная техническая поддержка для бесперебойной работы вашего бизнеса.",
        "services.security.title": "Безопасность и защита",
        "services.security.description": "Установка и настройка систем видеонаблюдения и сигнализации.",
        "services.smart_home.title": "Умные дома",
        "services.smart_home.description": "Проектирование и внедрение систем умного дома для комфорта и безопасности.",
        "services.details_button": "Подробнее",
        "courses.title": "Курсы",
        "courses.course1.title": "Курс по Python",
        "courses.course1.description": "Изучите основы и продвинутые возможности Python для разработки.",
        "courses.course1.button": "Подробнее",
        "courses.course2.title": "Курс по JavaScript",
        "courses.course2.description": "Освойте современный JavaScript для фронтенд и бекенд разработки.",
        "courses.course2.button": "Подробнее",
        "courses.course3.title": "bizTechLab - Технологии в бизнесе",
        "courses.course3.description": "Курс по интеграции современных технологий в бизнес-процессы.",
        "courses.course3.button": "Перейти к курсу",
        "projects.title": "Каталог проектов",
        "projects.worker_ai.title": "Worker-AI",
        "projects.worker_ai.description": "Проект для индикации личностных качеств сотрудников",
        "projects.project_site_button": "Сайт проекта", // Translation for the project site button
        "projects.py_converts.title": "PyConverts",
        "projects.py_converts.description": "Python конвертеры: REST/cURL >>> Python",
        "projects.ai_translate.title": "AI-translate",
        "projects.ai_translate.description": "Интеллектуальный переводчик на базе ИИ для быстрого и точного перевода текстов.",
        "projects.project2.title": "Проект 2: Мобильное приложение для фитнеса",
        "projects.project2.description": "Создание нативного мобильного приложения с функциями отслеживания активности.",
        "projects.project2.button": "Подробнее",
        "projects.project3.title": "Проект 3: Система автоматизации",
        "projects.project3.description": "Разработка системы для автоматизации внутренних процессов компании.",
        "projects.project3.button": "Подробнее",



        "technologies.title": "Технологии",
        "tech.python": "Python",
        "tech.nodejs": "Node.js",
        "tech.react": "React",
        "tech.vuejs": "Vue.js",
        "tech.docker": "Docker",
        "tech.kubernetes": "Kubernetes",
        "contact.title": "Свяжитесь с нами",
        "contact.form.name": "Ваше имя",
        "contact.form.email": "Ваш Email",
        "contact.form.message": "Ваше сообщение",
        "contact.form.button": "Отправить",
        "contact.email": "Email: lazarevillya031@gmail.com",
        "contact.phone": "Телефон: +972 504834744",
        "footer.copyright": "© 2025 Разработчик Илья Лазарев. Все права защищены.",
        // Переводы для модальных окон услуг
        "modal.ai.title": "ИИ для бизнеса",
        "modal.ai.details": "<p>Мы предлагаем комплексные решения по интеграции искусственного интеллекта в ваш бизнес. Это включает:</p><ul><li>Анализ данных и прогнозирование</li><li>Автоматизация принятия решений</li><li>Чат-боты и виртуальные ассистенты</li><li>Оптимизация процессов с помощью машинного обучения</li></ul><p>Наши решения помогут повысить эффективность, снизить затраты и открыть новые возможности для роста.</p>",
        "modal.webdev.title": "Разработка сайтов",
        "modal.webdev.details": "<p>Создаем современные, быстрые и безопасные веб-сайты любой сложности:</p><ul><li>Корпоративные сайты</li><li>Интернет-магазины</li><li>Лендинги</li><li>Веб-приложения</li></ul><p>Уделяем особое внимание дизайну, пользовательскому опыту и SEO-оптимизации.</p>",
        "modal.automation.title": "Автоматизация",
        "modal.automation.details": "<p>Автоматизируем рутинные и повторяющиеся задачи в вашем бизнесе:</p><ul><li>Автоматизация документооборота</li><li>Автоматизация маркетинга</li><li>Автоматизация продаж</li><li>Создание скриптов для различных задач</li></ul><p>Это позволяет освободить время сотрудников для более важных задач и минимизировать ошибки.</p>",
        "modal.software.title": "Разработка ПО",
        "modal.software.details": "<p>Разрабатываем индивидуальное программное обеспечение, полностью соответствующее вашим требованиям:</p><ul><li>Десктопные приложения</li><li>Мобильные приложения</li><li>Специализированное ПО для конкретных отраслей</li></ul><p>Гарантируем высокое качество кода, надежность и безопасность.</p>",
        "modal.prototyping.title": "Разработка прототипов",
        "modal.prototyping.details": "<p>Быстро создаем интерактивные прототипы для проверки идей и концепций:</p><ul><li>Прототипы веб-сайтов и приложений</li><li>Прототипы пользовательских интерфейсов</li><li>Тестирование пользовательского опыта</li></ul><p>Прототипирование позволяет сэкономить время и ресурсы на ранних этапах разработки.</p>",
        "modal.scripts.title": "Скрипты и боты",
        "modal.scripts.details": "<p>Разрабатываем скрипты и ботов для автоматизации задач, парсинга данных, взаимодействия с API и других целей:</p><ul><li>Парсеры данных</li><li>Telegram-боты</li><li>Скрипты для автоматизации рутинных операций</li><li>Интеграционные скрипты</li></ul><p>Помогаем автоматизировать повторяющиеся действия и собирать необходимую информацию.</p>",
        "modal.tech_support.title": "Техподдержка бизнеса",
        "modal.tech_support.details": "<p>Обеспечиваем стабильную работу вашей IT-инфраструктуры:</p><ul><li>Удаленная и выездная поддержка</li><li>Обслуживание компьютеров и серверов</li><li>Настройка сетей и ПО</li><li>Консультации и обучение персонала</li></ul><p>Ваш надежный IT-партнер.</p>",
        "modal.security.title": "Безопасность и защита",
        "modal.security.details": "<p>Защитите свой дом или бизнес с помощью современных систем безопасности:</p><ul><li>Установка камер видеонаблюдения (IP, аналоговые)</li><li>Монтаж охранной и пожарной сигнализации</li><li>Системы контроля доступа</li><li>Интеграция с мобильными приложениями</li></ul><p>Круглосуточная защита вашего имущества.</p>",
        "modal.smart_home.title": "Умные дома",
        "modal.smart_home.details": "<p>Создайте дом будущего с нашими решениями:</p><ul><li>Управление освещением, климатом, шторами</li><li>Голосовое управление (Алиса, Google Assistant, Alexa)</li><li>Системы мультирум (аудио/видео)</li><li>Автоматизация сценариев (уход из дома, пробуждение)</li></ul><p>Комфорт, безопасность и энергоэффективность в одном решении.</p>",
        // Swiper a11y
        "swiper.prevSlideMessage": "Предыдущий проект",
        "swiper.nextSlideMessage": "Следующий проект",
        "swiper.paginationBulletMessage": "Перейти к проекту {{index}}"
    },
    en: {
        "hero.title": "Illya Lazarev",
        "hero.subtitle": "This is not the beginning of your journey into the world of technology — this is already the ultimate goal.",
        "hero.button": "Discuss a Project",
        "about.title": "About Me",
        "about.name": "Ilya Lazarev",
        "about.description": "Hi! I'm 28 years old, a Full-Stack developer from Israel. I'm passionate about creating interactive web applications, automating processes, and exploring the possibilities of AI. Always looking for interesting projects and new challenges.",
        "nav.products": "Products",
        "nav.categories": "Categories",
        "nav.categories.hero": "Hero Section",
        "nav.categories.courses": "Courses",
        "nav.categories.projects": "Project Catalog",
        "nav.categories.services": "Our Services",
        "nav.categories.about": "About Me",
        "nav.categories.technologies": "Technologies",
        "nav.categories.contact": "Contact Us",
        "about.photoAlt": "Photo of Ilya Lazarev",
        "services.title": "Our Services",
        "services.ai.title": "AI for Business",
        "services.ai.description": "Implementing artificial intelligence solutions for optimization and analysis.",
        "services.webdev.title": "Website Development",
        "services.webdev.description": "Creating modern, responsive, and high-performance websites.",
        "services.automation.title": "Automation",
        "services.automation.description": "Automating routine business processes to increase efficiency.",
        "services.software.title": "Software Development",
        "services.software.description": "Developing custom software tailored to your unique business needs.",
        "services.prototyping.title": "Prototyping",
        "services.prototyping.description": "Rapid creation of interactive prototypes for testing ideas.",
        "services.scripts.title": "Scripts and Bots",
        "services.scripts.description": "Developing scripts and bots for task automation and interaction.",
        "services.tech_support.title": "Business Tech Support",
        "services.tech_support.description": "Comprehensive technical support for the smooth operation of your business.",
        "services.security.title": "Security and Protection",
        "services.security.description": "Installation and configuration of video surveillance and alarm systems.",
        "services.smart_home.title": "Smart Homes",
        "services.smart_home.description": "Design and implementation of smart home systems for comfort and security.",
        "services.details_button": "Details",
        "courses.title": "Courses",
        "courses.course1.title": "Python Course",
        "courses.course1.description": "Learn the basics and advanced features of Python for development.",
        "courses.course1.button": "Details",
        "courses.course2.title": "JavaScript Course",
        "courses.course2.description": "Master modern JavaScript for frontend and backend development.",
        "courses.course2.button": "Details",
        "courses.course3.title": "bizTechLab - Business technologies",
        "courses.course3.description": "A course on integrating modern technologies into business processes.",
        "courses.course3.button": "Go to course",
        "projects.title": "Project Catalog",
        "projects.worker_ai.title": "Worker-AI",
        "projects.worker_ai.description": "A project for identifying employees' personality traits",
        "projects.project_site_button": "Project Website", // Translation for the project site button
        "projects.py_converts.title": "PyConverts",
        "projects.py_converts.description": "Python converters: REST/cURL >>> Python",
        "projects.ai_translate.title": "AI-translate",
        "projects.ai_translate.description": "AI-powered translator for fast and accurate text translation.",
        "projects.project2.title": "Project 2: Mobile Fitness App",
        "projects.project2.description": "Creating a native mobile application with activity tracking features.",
        "projects.project2.button": "Details",
        "projects.project3.title": "Project 3: Automation System",
        "projects.project3.description": "Development of a system to automate internal company processes.",
        "projects.project3.button": "Details",



        "technologies.title": "Technologies",
        "tech.python": "Python",
        "tech.nodejs": "Node.js",
        "tech.react": "React",
        "tech.vuejs": "Vue.js",
        "tech.docker": "Docker",
        "tech.kubernetes": "Kubernetes",
        "contact.title": "Contact Us",
        "contact.form.name": "Your Name",
        "contact.form.email": "Your Email",
        "contact.form.message": "Your Message",
        "contact.form.button": "Send",
        "contact.email": "Email: lazarevillya031@gmail.com",
        "contact.phone": "Phone: +972 504834744",
        "footer.copyright": "© 2025 developed by Illya Lazarev. All rights reserved.",
        // Translations for service modals
        "modal.ai.title": "AI for Business",
        "modal.ai.details": "<p>We offer comprehensive solutions for integrating artificial intelligence into your business. This includes:</p><ul><li>Data analysis and forecasting</li><li>Decision-making automation</li><li>Chatbots and virtual assistants</li><li>Process optimization using machine learning</li></ul><p>Our solutions will help increase efficiency, reduce costs, and unlock new opportunities for growth.</p>",
        "modal.webdev.title": "Website Development",
        "modal.webdev.details": "<p>We create modern, fast, and secure websites of any complexity:</p><ul><li>Corporate websites</li><li>Online stores</li><li>Landing pages</li><li>Web applications</li></ul><p>We pay special attention to design, user experience, and SEO optimization.</p>",
        "modal.automation.title": "Automation",
        "modal.automation.details": "<p>We automate routine and repetitive tasks in your business:</p><ul><li>Document workflow automation</li><li>Marketing automation</li><li>Sales automation</li><li>Creating scripts for various tasks</li></ul><p>This frees up employee time for more important tasks and minimizes errors.</p>",
        "modal.software.title": "Software Development",
        "modal.software.details": "<p>We develop custom software that fully meets your requirements:</p><ul><li>Desktop applications</li><li>Mobile applications</li><li>Specialized software for specific industries</li></ul><p>We guarantee high code quality, reliability, and security.</p>",
        "modal.prototyping.title": "Prototyping",
        "modal.prototyping.details": "<p>We quickly create interactive prototypes to test ideas and concepts:</p><ul><li>Website and application prototypes</li><li>User interface prototypes</li><li>User experience testing</li></ul><p>Prototyping saves time and resources in the early stages of development.</p>",
        "modal.scripts.title": "Scripts and Bots",
        "modal.scripts.details": "<p>We develop scripts and bots for task automation, data parsing, API interaction, and other purposes:</p><ul><li>Data parsers</li><li>Telegram bots</li><li>Scripts for automating routine operations</li><li>Integration scripts</li></ul><p>We help automate repetitive actions and collect necessary information.</p>",
        "modal.tech_support.title": "Business Tech Support",
        "modal.tech_support.details": "<p>Ensuring the stable operation of your IT infrastructure:</p><ul><li>Remote and on-site support</li><li>Computer and server maintenance</li><li>Network and software setup</li><li>Consultations and staff training</li></ul><p>Your reliable IT partner.</p>",
        "modal.security.title": "Security and Protection",
        "modal.security.details": "<p>Protect your home or business with modern security systems:</p><ul><li>Installation of video surveillance cameras (IP, analog)</li><li>Installation of security and fire alarms</li><li>Access control systems</li><li>Integration with mobile applications</li></ul><p>24/7 protection of your property.</p>",
        "modal.smart_home.title": "Smart Homes",
        "modal.smart_home.details": "<p>Create the home of the future with our solutions:</p><ul><li>Control of lighting, climate, curtains</li><li>Voice control (Alice, Google Assistant, Alexa)</li><li>Multi-room systems (audio/video)</li><li>Scenario automation (leaving home, waking up)</li></ul><p>Comfort, security, and energy efficiency in one solution.</p>",
        // Swiper a11y
        "swiper.prevSlideMessage": "Previous project",
        "swiper.nextSlideMessage": "Next project",
        "swiper.paginationBulletMessage": "Go to project {{index}}"
    },
    he: {
        "hero.title": "איליה לזרב",
        "hero.subtitle": "זו לא תחילת הדרך לעולם הטכנולוגיה, זה כבר היעד",
        "hero.button": "לדון בפרויקט",
        "about.title": "עליי",
        "about.name": "איליה לזרב",
        "about.description": "שלום! אני בן 28, מפתח Full-Stack מישראל. אני מתלהב מיצירת יישומי רשת אינטראקטיביים, אוטומציה של תהליכים וחקר אפשרויות הבינה המלאכותית. תמיד מחפש פרויקטים מעניינים ואתגרים חדשים.",
        "about.photoAlt": "תמונה של איליה לזרב",
        "services.title": "השירותים שלנו",
        "nav.products": "מוצרים",
        "nav.categories": "קטגוריות",
        "nav.categories.hero": "מסך ראשי",
        "nav.categories.courses": "קורסים",
        "nav.categories.projects": "קטלוג פרויקטים",
        "nav.categories.services": "השירותים שלנו",
        "nav.categories.about": "עליי",
        "nav.categories.technologies": "טכנולוגיות",
        "nav.categories.contact": "צור קשר",
        "services.ai.title": "בינה מלאכותית לעסקים",
        "services.ai.description": "יישום פתרונות מבוססי בינה מלאכותית לאופטימיזציה וניתוח.",
        "services.webdev.title": "פיתוח אתרים",
        "services.webdev.description": "יצירת אתרים מודרניים, רספונסיביים ובעלי ביצועים גבוהים.",
        "services.automation.title": "אוטומציה",
        "services.automation.description": "אוטומציה של תהליכים עסקיים שגרתיים להגברת היעילות.",
        "services.software.title": "פיתוח תוכנה",
        "services.software.description": "פיתוח תוכנה מותאמת אישית לצרכים הייחודיים של העסק שלך.",
        "services.prototyping.title": "פיתוח אבות טיפוס",
        "services.prototyping.description": "יצירה מהירה של אבות טיפוס אינטראקטיביים לבדיקת רעיונות.",
        "services.scripts.title": "סקריפטים ובוטים",
        "services.scripts.description": "פיתוח סקריפטים ובוטים לאוטומציה של משימות ואינטראקציה.",
        "services.tech_support.title": "תמיכה טכנית לעסקים",
        "services.tech_support.description": "תמיכה טכנית מקיפה לתפעול חלק של העסק שלך.",
        "services.security.title": "אבטחה והגנה",
        "services.security.description": "התקנה והגדרה של מערכות מעקב וידאו ואזעקה.",
        "services.smart_home.title": "בתים חכמים",
        "services.smart_home.description": "תכנון והטמעה של מערכות בית חכם לנוחות ובטיחות.",
        "services.details_button": "פרטים נוספים",
        "courses.title": "קורסים",
        "courses.course1.title": "קורס פייתון",
        "courses.course1.description": "למד את היסודות והתכונות המתקדמות של פייתון לפיתוח.",
        "courses.course1.button": "פרטים נוספים",
        "courses.course2.title": "קורס JavaScript",
        "courses.course2.description": "שלוט ב-JavaScript מודרני לפיתוח פרונטאנד ובקאנד.",
        "courses.course2.button": "פרטים נוספים",
        "courses.course3.title": "bizTechLab - טכנולוגיה עסקית",
        "courses.course3.description": "קורס על שילוב טכנולוגיות מודרניות בתהליכים עסקיים.",
        "courses.course3.button": "עבור לקורס",
        "projects.title": "קטלוג פרויקטים",
        "projects.worker_ai.title": "Worker-AI",
        "projects.worker_ai.description": "פרויקט לזיהוי תכונות אישיות של עובדים",
        "projects.project_site_button": "אתר הפרויקט", // Translation for the project site button
        "projects.py_converts.title": "PyConverts",
        "projects.py_converts.description": "ממירי פייתון: REST/cURL >>> Python",
        "projects.ai_translate.title": "AI-translate",
        "projects.ai_translate.description": "מתרגם מבוסס בינה מלאכותית לתרגום טקסטים מהיר ומדויק.",
        "projects.project2.title": "פרויקט 2: אפליקציית כושר מובייל",
        "projects.project2.description": "יצירת אפליקציית מובייל נייטיב עם תכונות מעקב אחר פעילות.",
        "projects.project2.button": "פרטים נוספים",
        "projects.project3.title": "פרויקט 3: מערכת אוטומציה",
        "projects.project3.description": "פיתוח מערכת לאוטומציה של תהליכים פנימיים בחברה.",
        "projects.project3.button": "פרטים נוספים",



        "technologies.title": "טכנולוגיות",
        "tech.python": "פייתון",
        "tech.nodejs": "נוד.ג'ס",
        "tech.react": "ריאקט",
        "tech.vuejs": "ויו.ג'ס",
        "tech.docker": "דוקר",
        "tech.kubernetes": "קובורנטס",
        "contact.title": "צור קשר",
        "contact.form.name": "השם שלך",
        "contact.form.email": "האימייל שלך",
        "contact.form.message": "ההודעה שלך",
        "contact.form.button": "שלח",
        "contact.email": "אימייל: lazarevillya031@gmail.com",
        "contact.phone": "טלפון: <span dir=\"ltr\">+972 504834744</span>",
        "footer.copyright": "© 2025 איליה לזרב כל הזכויות שמורות.",
        // Translations for social media buttons
        "social.whatsapp": "WhatsApp",
        "social.telegram": "Telegram",
        "social.linkedin": "LinkedIn",
        "social.facebook": "Facebook",
        "social.youtube": "YouTube",
        // Translations for service modals
        "modal.ai.title": "בינה מלאכותית לעסקים",
        "modal.ai.details": "<p>אנו מציעים פתרונות מקיפים לשילוב בינה מלאכותית בעסק שלך. זה כולל:</p><ul><li>ניתוח נתונים וחיזוי</li><li>אוטומציה של קבלת החלטות</li><li>צ'אטבוטים ועוזרים וירטואליים</li><li>אופטימיזציה של תהליכים באמצעות למידת מכונה</li></ul><p>הפתרונות שלנו יעזרו להגביר יעילות, להפחית עלויות ולפתוח הזדמנויות חדשות לצמיחה.</p>",
        "modal.webdev.title": "פיתוח אתרים",
        "modal.webdev.details": "<p>אנו יוצרים אתרים מודרניים, מהירים ומאובטחים בכל רמת מורכבות:</p><ul><li>אתרי תדמית</li><li>חנויות מקוונות</li><li>דפי נחיתה</li><li>יישומי רשת</li></ul><p>אנו מקדישים תשומת לב מיוחדת לעיצוב, חווית משתמש ואופטימיזציית SEO.</p>",
        "modal.automation.title": "אוטומציה",
        "modal.automation.details": "<p>אנו מבצעים אוטומציה של משימות שגרתיות וחוזרות בעסק שלך:</p><ul><li>אוטומציה של זרימת מסמכים</li><li>אוטומציה של שיווק</li><li>אוטומציה של מכירות</li><li>יצירת סקריפטים למשימות שונות</li></ul><p>זה מאפשר לפנות זמן לעובדים למשימות חשובות יותר ולמזער שגיאות.</p>",
        "modal.software.title": "פיתוח תוכנה",
        "modal.software.details": "<p>אנו מפתחים תוכנה אישית, התואמת לחלוטין את הדרישות שלך:</p><ul><li>יישומי דסקטופ</li><li>יישומי מובייל</li><li>תוכנה מיוחדת לתעשיות ספציפיות</li></ul><p>אנו מבטיחים איכות קוד גבוהה, אמינות ואבטחה.</p>",
        "modal.prototyping.title": "פיתוח אבות טיפוס",
        "modal.prototyping.details": "<p>אנו יוצרים במהירות אבות טיפוס אינטראקטיביים לבדיקת רעיונות וקונספטים:</p><ul><li>אבות טיפוס של אתרים ויישומים</li><li>אבות טיפוס של ממשקי משתמש</li><li>בדיקת חווית משתמש</li></ul><p>פיתוח אבות טיפוס מאפשר לחסוך זמן ומשאבים בשלבים המוקדמים של הפיתוח.</p>",
        "modal.scripts.title": "סקריפטים ובוטים",
        "modal.scripts.details": "<p>אנו מפתחים סקריפטים ובוטים לאוטומציה של משימות, ניתוח נתונים, אינטראקציה עם API ומטרות אחרות:</p><ul><li>מנתחי נתונים</li><li>בוטים לטלגרם</li><li>סקריפטים לאוטומציה של פעולות שגרתיות</li><li>סקריפטים אינטגרציה</li></ul><p>אנו עוזרים לבצע אוטומציה של פעולות חוזרות ולאסוף את המידע הדרוש.</p>",
        "modal.tech_support.title": "תמיכה טכנית לעסקים",
        "modal.tech_support.details": "<p>אנו מבטיחים את הפעולה היציבה של תשתית ה-IT שלך:</p><ul><li>תמיכה מרחוק ובאתר</li><li>תחזוקת מחשבים ושרתים</li><li>הגדרת רשתות ותוכנה</li><li>ייעוץ והדרכת צוות</li></ul><p>שותף ה-IT האמין שלך.</p>",
        "modal.security.title": "אבטחה והגנה",
        "modal.security.details": "<p>הגן על הבית או העסק שלך באמצעות מערכות אבטחה מודרניות:</p><ul><li>התקנת מצלמות מעקב וידאו (IP, אנלוגי)</li><li>התקנת אזעקות אבטחה ואש</li><li>מערכות בקרת כניסה</li><li>אינטגרציה עם אפליקציות מובייל</li></ul><p>הגנה 24/7 על הרכוש שלך.</p>",
        "modal.smart_home.title": "בתים חכמים",
        "modal.smart_home.details": "<p>צור את בית העתיד עם הפתרונות שלנו:</p><ul><li>שליטה בתאורה, אקלים, וילונות</li><li>שליטה קולית (אליסה, Google Assistant, Alexa)</li><li>מערכות מולטי-רום (אודיו/וידאו)</li><li>אוטומציה של תרחישים (יציאה מהבית, התעוררות)</li></ul><p>נוחות, בטיחות ויעילות אנרגטית בפתרון אחד.</p>",
        // Swiper a11y
        "swiper.prevSlideMessage": "פרויקט קודם",
        "swiper.nextSlideMessage": "פרויקט הבא",
        "swiper.paginationBulletMessage": "עבור לפרויקט {{index}}"
    }
};

// === Функция для получения перевода по ключу ===
// Возвращает переведенную строку или ключ, если перевод не найден
function getTranslation(key) {
    const currentLanguage = document.documentElement.lang || 'ru';
    return translations[currentLanguage]?.[key] || key; // Возвращаем ключ как fallback
}


// === Функция для применения переводов ===
function applyTranslations(language) {
    // Получаем все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            // Use innerHTML for contact info to preserve HTML structure like dir="ltr"
            if (key === 'contact.email' || key === 'contact.phone') {
                element.innerHTML = translations[language][key];
            } else {
                element.textContent = translations[language][key];
            }
        }
    });

    // Обработка placeholder'ов
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[language] && translations[language][key]) {
            element.placeholder = translations[language][key];
        }
    });

    // Обновляем атрибут lang у html
    document.documentElement.lang = language;

    // Обработка RTL для иврита
    // Обработка RTL для иврита и арабского
    if (language === 'he' || language === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }

    // Обработка видимости кнопки YouTube
    const youtubeIcon = document.querySelector('.youtube-icon');
    if (youtubeIcon) {
        if (language === 'ru') {
            youtubeIcon.style.display = 'inline-block'; // Показываем кнопку YouTube для русского языка
        } else {
            youtubeIcon.style.display = 'none'; // Скрываем кнопку YouTube для других языков
        }
    }

}

// === Переключение языка ===
const languageSelect = document.getElementById('language-select');

if (languageSelect) {
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        applyTranslations(selectedLanguage);
        // Сохраняем выбранный язык в localStorage
        localStorage.setItem('language', selectedLanguage);
        // Обновляем Swiper после смены языка, чтобы пересчитать размеры и положение слайдов/кнопок
        if (projectSwiperInstance) {
            projectSwiperInstance.update();
        }
    });
}


// === Плавная прокрутка по якорям (Fallback для старых браузеров) ===
// Обеспечивает плавный переход при клике на ссылки с якорями.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное действие ссылки

        // Находим целевой элемент и плавно прокручиваем к нему
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// === Интерактивная фоновая графика в Hero Section (Canvas) ===
const heroBackground = document.querySelector('.hero-background');
const canvas = document.createElement('canvas'); // Создаем элемент canvas
const ctx = canvas.getContext('2d'); // Получаем контекст 2D для рисования

let particles = []; // Массив для хранения частиц
const numberOfParticles = 150; // Увеличим количество частиц
let mouse = { // Объект для отслеживания положения мыши
    x: null,
    y: null,
    radius: 150 // Увеличим радиус взаимодействия
};

// Добавляем canvas в hero-background
heroBackground.appendChild(canvas);

// Обновляем положение мыши при движении
window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

// Сбрасываем положение мыши, когда она уходит с экрана
window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

// Класс для создания отдельной частицы
class Particle {
    constructor(x, y) {
        this.x = x; // Начальная позиция X
        this.y = y; // Начальная позиция Y
        this.size = Math.random() * 4 + 1; // Случайный размер частицы (1-5px)
        this.baseX = this.x; // Базовая позиция X (для возвращения)
        this.baseY = this.y; // Базовая позиция Y (для возвращения)
        this.density = (Math.random() * 20) + 5; // Плотность частицы (влияет на скорость реакции)
        this.color = `hsl(${Math.random() * 360}, 100%, 70%)`; // Случайный яркий цвет
    }

    // Метод для отрисовки частицы
    draw() {
        ctx.fillStyle = this.color; // Цвет частицы
        ctx.beginPath(); // Начинаем новый путь
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Рисуем круг
        ctx.closePath(); // Закрываем путь
        ctx.fill(); // Заливаем круг цветом
    }

    // Метод для обновления положения частицы
    update() {
        // Расстояние от частицы до курсора мыши
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy); // Расчет дистанции по теореме Пифагора

        // Направление от частицы к курсору
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;

        // Сила, с которой мышь отталкивает частицу (обратно пропорциональна квадрату расстояния)
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        // Если частица находится в радиусе действия мыши, отталкиваем ее
        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            // Если частица вне радиуса, плавно возвращаем ее на базовую позицию
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 10; // Двигаемся на 1/10 расстояния к базе
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 10; // Двигаемся на 1/10 расстояния к базе
            }
        }
    }
}

// Функция для инициализации частиц
function initParticles() {
    particles = []; // Очищаем массив частиц
    // Создаем частицы и добавляем их в массив
    for (let i = 0; i < numberOfParticles; i++) {
        // Случайные координаты в пределах размеров canvas
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
    }
}

// Функция для соединения частиц линиями
function connectParticles() {
    let opacityValue = 1; // Начальная прозрачность линии
    // Перебираем все пары частиц
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            // Расстояние между двумя частицами
            let distance = Math.sqrt(
                (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
                (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y)
            );

            // Если расстояние меньше определенного порога, рисуем линию
            if (distance < 100) { // Увеличенный порог расстояния для соединения
                opacityValue = 1 - (distance / 100); // Прозрачность зависит от расстояния
                ctx.strokeStyle = `rgba(0, 255, 255, ${opacityValue})`; // Неоновый цвет линии
                ctx.lineWidth = 1; // Толщина линии
                ctx.beginPath(); // Начинаем новый путь
                ctx.moveTo(particles[a].x, particles[a].y); // Начальная точка линии
                ctx.lineTo(particles[b].x, particles[b].y); // Конечная точка линии
                ctx.stroke(); // Рисуем линию
            }
        }
    }
}

// Основной цикл анимации
function animateParticles() {
    // requestAnimationFrame вызывает функцию перед следующей перерисовкой браузера
    requestAnimationFrame(animateParticles);
    // Добавляем небольшой полупрозрачный фон для эффекта "следа"
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Черный с низкой прозрачностью
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Заливаем весь canvas

    // Обновляем и отрисовываем каждую частицу
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    connectParticles(); // Соединяем частицы линиями
}

// Функция для создания интерактивного фона (вызывается при загрузке)
function createInteractiveBackground() {
    // Устанавливаем размеры canvas равными размерам hero-background
    canvas.width = heroBackground.offsetWidth;
    canvas.height = heroBackground.offsetHeight;
    initParticles(); // Инициализируем частицы
    animateParticles(); // Запускаем анимацию
}

// Обновляем размеры canvas и переинициализируем частицы при изменении размера окна
window.addEventListener('resize', () => {
    canvas.width = heroBackground.offsetWidth;
    canvas.height = heroBackground.offsetHeight;
    initParticles(); // Переинициализируем частицы для новых размеров
});


// === Обработка формы обратной связи ===
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) { // Используем async для await fetch
        e.preventDefault(); // Предотвращаем стандартную отправку формы

        // Простая клиентская валидация
        const nameInput = this.querySelector('input[name="name"]');
        const emailInput = this.querySelector('input[name="email"]');
        const messageInput = this.querySelector('textarea[name="message"]');

        const name = nameInput.value.trim(); // Удаляем пробелы по краям
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            // TODO: Перевести это сообщение об ошибке
            alert('Пожалуйста, заполните все поля формы.');
            return;
        }

        // Создаем объект с данными формы
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // ВНИМАНИЕ: Для полноценной работы формы требуется серверный скрипт для обработки данных.
        // Текущая реализация только имитирует отправку на стороне клиента.
        const formEndpoint = 'YOUR_SERVER_SIDE_FORM_HANDLER_URL'; // Замените на реальный URL, если появится бэкенд

        console.log('Имитация отправки формы:', formData);
        // TODO: Перевести это сообщение об успехе
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        this.reset(); // Очищаем форму

        /*
        // Пример реальной отправки с fetch (раскомментировать при наличии бэкенда)
        try {
            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // TODO: Перевести это сообщение об успехе
                alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
                this.reset();
            } else {
                console.error('Ошибка при отправке формы:', response.status, response.statusText);
                // TODO: Перевести это сообщение об ошибке
                alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
            }
        } catch (error) {
            console.error('Ошибка сети или другое исключение:', error);
            // TODO: Перевести это сообщение об ошибке
            alert('Произошла ошибка при отправке формы. Пожалуйста, проверьте ваше интернет-соединение.');
        }
        */
    });
}




// === Логика модального окна для услуг ===
const serviceModal = document.getElementById('service-modal');
const closeModalBtn = document.querySelector('.modal .close-button');
const openModalBtns = document.querySelectorAll('.service-item'); // Изменено с .open-modal-btn на .service-item
const modalTitle = document.getElementById('modal-title');
const modalDetails = document.getElementById('modal-details');

// Объект с детальным описанием услуг для модальных окон
const serviceDetails = {
    ru: {
        ai: {
            title: "ИИ для бизнеса",
            details: "<p>Мы предлагаем комплексные решения по интеграции искусственного интеллекта в ваш бизнес. Это включает:</p><ul><li>Анализ данных и прогнозирование</li><li>Автоматизация принятия решений</li><li>Чат-боты и виртуальные ассистенты</li><li>Оптимизация процессов с помощью машинного обучения</li></ul><p>Наши решения помогут повысить эффективность, снизить затраты и открыть новые возможности для роста.</p>"
        },
        webdev: {
            title: "Разработка сайтов",
            details: "<p>Создаем современные, быстрые и безопасные веб-сайты любой сложности:</p><ul><li>Корпоративные сайты</li><li>Интернет-магазины</li><li>Лендинги</li><li>Веб-приложения</li></ul><p>Уделяем особое внимание дизайну, пользовательскому опыту и SEO-оптимизации.</p>"
        },
        automation: {
            title: "Автоматизация",
            details: "<p>Автоматизируем рутинные и повторяющиеся задачи в вашем бизнесе:</p><ul><li>Автоматизация документооборота</li><li>Автоматизация маркетинга</li><li>Автоматизация продаж</li><li>Создание скриптов для различных задач</li></ul><p>Это позволяет освободить время сотрудников для более важных задач и минимизировать ошибки.</p>"
        },
        software: {
            title: "Разработка ПО",
            details: "<p>Разрабатываем индивидуальное программное обеспечение, полностью соответствующее вашим требованиям:</p><ul><li>Десктопные приложения</li><li>Мобильные приложения</li><li>Специализированное ПО для конкретных отраслей</li></ul><p>Гарантируем высокое качество кода, надежность и безопасность.</p>"
        },
        prototyping: {
            title: "Разработка прототипов",
            details: "<p>Быстро создаем интерактивные прототипы для проверки идей и концепций:</p><ul><li>Прототипы веб-сайтов и приложений</li><li>Прототипы пользовательских интерфейсов</li><li>Тестирование пользовательского опыта</li></ul><p>Прототипирование позволяет сэкономить время и ресурсы на ранних этапах разработки.</p>"
        },
        scripts: {
            title: "Скрипты и боты",
            details: "<p>Разрабатываем скрипты и ботов для автоматизации задач, парсинга данных, взаимодействия с API и других целей:</p><ul><li>Парсеры данных</li><li>Telegram-боты</li><li>Скрипты для автоматизации рутинных операций</li><li>Интеграционные скрипты</li></ul><p>Помогаем автоматизировать повторяющиеся действия и собирать необходимую информацию.</p>"
        }, // Добавлена запятая
        tech_support: {
            title: "Техподдержка бизнеса",
            details: "<p>Обеспечиваем стабильную работу вашей IT-инфраструктуры:</p><ul><li>Удаленная и выездная поддержка</li><li>Обслуживание компьютеров и серверов</li><li>Настройка сетей и ПО</li><li>Консультации и обучение персонала</li></ul><p>Ваш надежный IT-партнер.</p>"
        },
        security: {
            title: "Безопасность и защита",
            details: "<p>Защитите свой дом или бизнес с помощью современных систем безопасности:</p><ul><li>Установка камер видеонаблюдения (IP, аналоговые)</li><li>Монтаж охранной и пожарной сигнализации</li><li>Системы контроля доступа</li><li>Интеграция с мобильными приложениями</li></ul><p>Круглосуточная защита вашего имущества.</p>"
        },
        smart_home: {
            title: "Умные дома",
            details: "<p>Создайте дом будущего с нашими решениями:</p><ul><li>Управление освещением, климатом, шторами</li><li>Голосовое управление (Алиса, Google Assistant, Alexa)</li><li>Системы мультирум (аудио/видео)</li><li>Автоматизация сценариев (уход из дома, пробуждение)</li></ul><p>Комфорт, безопасность и энергоэффективность в одном решении.</p>"
        }
    },
     en: {
        ai: {
            title: "AI for Business",
            details: "<p>We offer comprehensive solutions for integrating artificial intelligence into your business. This includes:</p><ul><li>Data analysis and forecasting</li><li>Decision-making automation</li><li>Chatbots and virtual assistants</li><li>Process optimization using machine learning</li></ul><p>Our solutions will help increase efficiency, reduce costs, and unlock new opportunities for growth.</p>"
        },
        webdev: {
            title: "Website Development",
            details: "<p>We create modern, fast, and secure websites of any complexity:</p><ul><li>Corporate websites</li><li>Online stores</li><li>Landing pages</li><li>Web applications</li></ul><p>We pay special attention to design, user experience, and SEO optimization.</p>"
        },
        automation: {
            title: "Automation",
            details: "<p>We automate routine and repetitive tasks in your business:</p><ul><li>Document workflow automation</li><li>Marketing automation</li><li>Sales automation</li><li>Creating scripts for various tasks</li></ul><p>This frees up employee time for more important tasks and minimizes errors.</p>"
        },
        software: {
            title: "Software Development",
            details: "<p>We develop custom software that fully meets your requirements:</p><ul><li>Desktop applications</li><li>Mobile applications</li><li>Specialized software for specific industries</li></ul><p>We guarantee high code quality, reliability, and security.</p>"
        },
        prototyping: {
            title: "Prototyping",
            details: "<p>We quickly create interactive prototypes to test ideas and concepts:</p><ul><li>Website and application prototypes</li><li>User interface prototypes</li><li>User experience testing</li></ul><p>Prototyping saves time and resources in the early stages of development.</p>"
        },
        scripts: {
            title: "Scripts and Bots",
            details: "<p>We develop scripts and bots for task automation, data parsing, API interaction, and other purposes:</p><ul><li>Data parsers</li><li>Telegram bots</li><li>Scripts for automating routine operations</li><li>Integration scripts</li></ul><p>We help automate repetitive actions and collect necessary information.</p>"
        }, // Добавлена запятая
        tech_support: {
            title: "Business Tech Support",
            details: "<p>Ensuring the stable operation of your IT infrastructure:</p><ul><li>Remote and on-site support</li><li>Computer and server maintenance</li><li>Network and software setup</li><li>Consultations and staff training</li></ul><p>Your reliable IT partner.</p>"
        },
        security: {
            title: "Security and Protection",
            details: "<p>Protect your home or business with modern security systems:</p><ul><li>Installation of video surveillance cameras (IP, analog)</li><li>Installation of security and fire alarms</li><li>Access control systems</li><li>Integration with mobile applications</li></ul><p>24/7 protection of your property.</p>"
        },
        smart_home: {
            title: "Smart Homes",
            details: "<p>Create the home of the future with our solutions:</p><ul><li>Control of lighting, climate, curtains</li><li>Voice control (Alice, Google Assistant, Alexa)</li><li>Multi-room systems (audio/video)</li><li>Scenario automation (leaving home, waking up)</li></ul><p>Comfort, security, and energy efficiency in one solution.</p>"
        }
    },
     he: {
        ai: {
            title: "בינה מלאכותית לעסקים",
            details: "<p>אנו מציעים פתרונות מקיפים לשילוב בינה מלאכותית בעסק שלך. זה כולל:</p><ul><li>ניתוח נתונים וחיזוי</li><li>אוטומציה של קבלת החלטות</li><li>צ'אטבוטים ועוזרים וירטואליים</li><li>אופטימיזציה של תהליכים באמצעות למידת מכונה</li></ul><p>הפתרונות שלנו יעזרו להגביר יעילות, להפחית עלויות ולפתוח הזדמנויות חדשות לצמיחה.</p>"
        },
        webdev: {
            title: "פיתוח אתרים",
            details: "<p>אנו יוצרים אתרים מודרניים, מהירים ומאובטחים בכל רמת מורכבות:</p><ul><li>אתרי תדמית</li><li>חנויות מקוונות</li><li>דפי נחיתה</li><li>יישומי רשת</li></ul><p>אנו מקדישים תשומת לב מיוחדת לעיצוב, חווית משתמש ואופטימיזציית SEO.</p>"
        },
        automation: {
            title: "אוטומציה",
            details: "<p>אנו מבצעים אוטומציה של משימות שגרתיות וחוזרות בעסק שלך:</p><ul><li>אוטומציה של זרימת מסמכים</li><li>אוטומציה של שיווק</li><li>אוטומציה של מכירות</li><li>יצירת סקריפטים למשימות שונות</li></ul><p>זה מאפשר לפנות זמן לעובדים למשימות חשובות יותר ולמזער שגיאות.</p>"
        },
        software: {
            title: "פיתוח תוכנה",
            details: "<p>אנו מפתחים תוכנה אישית, התואמת לחלוטין את הדרישות שלך:</p><ul><li>יישומי דסקטופ</li><li>יישומי מובייל</li><li>תוכנה מיוחדת לתעשיות ספציפיות</li></ul><p>אנו מבטיחים איכות קוד גבוהה, אמינות ואבטחה.</p>"
        },
        prototyping: {
            title: "פיתוח אבות טיפוס",
            details: "<p>אנו יוצרים במהירות אבות טיפוס אינטראקטיביים לבדיקת רעיונות וקונספטים:</p><ul><li>אבות טיפוס של אתרים ויישומים</li><li>אבות טיפוס של ממשקי משתמש</li><li>בדיקת חווית משתמש</li></ul><p>פיתוח אבות טיפוס מאפשר לחסוך זמן ומשאבים בשלבים המוקדמים של הפיתוח.</p>"
        },
        scripts: {
            title: "סקריפטים ובוטים",
            details: "<p>אנו מפתחים סקריפטים ובוטים לאוטומציה של משימות, ניתוח נתונים, אינטראקציה עם API ומטרות אחרות:</p><ul><li>מנתחי נתונים</li><li>בוטים לטלגרם</li><li>סקריפטים לאוטומציה של פעולות שגרתיות</li><li>סקריפטים אינטגרציה</li></ul><p>אנו עוזרים לבצע אוטומציה של פעולות חוזרות ולאסוף את המידע הדרוש.</p>"
        }, // Добавлена запятая
        tech_support: {
            title: "תמיכה טכנית לעסקים",
            details: "<p>אנו מבטיחים את הפעולה היציבה של תשתית ה-IT שלך:</p><ul><li>תמיכה מרחוק ובאתר</li><li>תחזוקת מחשבים ושרתים</li><li>הגדרת רשתות ותוכנה</li><li>ייעוץ והדרכת צוות</li></ul><p>שותף ה-IT האמין שלך.</p>"
        },
        security: {
            title: "אבטחה והגנה",
            details: "<p>הגן על הבית או העסק שלך באמצעות מערכות אבטחה מודרניות:</p><ul><li>התקנת מצלמות מעקב וידאו (IP, אנלוגי)</li><li>התקנת אזעקות אבטחה ואש</li><li>מערכות בקרת כניסה</li><li>אינטגרציה עם אפליקציות מובייל</li></ul><p>הגנה 24/7 על הרכוש שלך.</p>"
        },
        smart_home: {
            title: "בתים חכמים",
            details: "<p>צור את בית העתיד עם הפתרונות שלנו:</p><ul><li>שליטה בתאורה, אקלים, וילונות</li><li>שליטה קולית (אליסה, Google Assistant, Alexa)</li><li>מערכות מולטי-רום (אודיו/וידאו)</li><li>אוטומציה של תרחישים (יציאה מהבית, התעוררות)</li></ul><p>נוחות, בטיחות ויעילות אנרגטית בפתרון אחד.</p>"
        }
    }
};


// Функция для открытия модального окна
function openModal(serviceKey) {
    const currentLanguage = document.documentElement.lang || 'ru';
    const details = serviceDetails[currentLanguage][serviceKey];

    if (details) {
        modalTitle.textContent = details.title;
        modalDetails.innerHTML = details.details; // Используем innerHTML для вставки HTML
        serviceModal.style.display = 'block'; // Показываем модальное окно
        document.body.style.overflow = 'hidden'; // Запрещаем прокрутку фона
    }
}

// Функция для закрытия модального окна
function closeModal() {
    serviceModal.style.display = 'none'; // Скрываем модальное окно
    document.body.style.overflow = ''; // Восстанавливаем прокрутку фона
}

// Обработчики событий для карточек услуг
openModalBtns.forEach(card => { // Изменено имя переменной с btn на card
    card.addEventListener('click', () => {
        const serviceKey = card.getAttribute('data-service'); // Получаем ключ услуги из data-service атрибута карточки
        openModal(serviceKey);
    });
});
// === Обработчики событий для карточек курсов ===
const courseItems = document.querySelectorAll('#courses .course-item');

if (courseItems) {
    courseItems.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank'); // Открываем ссылку в новой вкладке
            }
        });
    });
}
// === Обработчики событий для карточек проектов ===
const projectItems = document.querySelectorAll('#projects .project-item');

if (projectItems) {
    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank'); // Открываем ссылку в новой вкладке
            }
        });
    });
}

// Обработчик события для кнопки закрытия модального окна
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Закрытие модального окна при клике вне его содержимого
window.addEventListener('click', (event) => {
    if (event.target === serviceModal) {
        closeModal();
    }
});


// При загрузке страницы инициализируем фон
document.addEventListener('DOMContentLoaded', () => {
    // Принудительно устанавливаем темную тему
    document.body.classList.add('dark-theme');

    // Проверяем сохраненный язык или используем язык браузера по умолчанию
    const savedLanguage = localStorage.getItem('language') || navigator.language.split('-')[0] || 'ru';
    // Устанавливаем выбранный язык в select
    // Populate the language select dropdown dynamically
    // Устанавливаем выбранный язык в select
    if (languageSelect) {
        languageSelect.value = savedLanguage;
    }
    // Применяем переводы
    applyTranslations(savedLanguage);


    // Инициализация интерактивного фона
    createInteractiveBackground();
    // Инициализация ленивой загрузки
    initLazyLoading();
    // Инициализация микро-взаимодействий
    initMicroInteractions();
    // Инициализация анимации при скролле
    initScrollAnimations();

    // === Инициализация Swiper для каталога проектов ===
    function initProjectSwiper() {
        // Проверяем, существует ли Swiper (загружен ли скрипт)
        if (typeof Swiper === 'undefined') {
            console.error('Swiper library is not loaded.');
            return;
        }

        const projectSwiperContainer = document.querySelector('.project-swiper');
        if (!projectSwiperContainer) {
            // Контейнер может отсутствовать, если секция проектов пуста или удалена
            // console.warn('Project Swiper container not found.');
            return; // Выходим, если контейнер не найден
        }

        projectSwiperInstance = new Swiper(projectSwiperContainer, {
            // Основные параметры
            direction: 'horizontal', // Направление прокрутки
            loop: true, // Бесконечная прокрутка (хорошо для карусели)
            grabCursor: true, // Курсор в виде руки при перетаскивании
            centeredSlides: true, // Активный слайд всегда по центру
            slidesPerView: 1, // Начинаем с 1 слайда для mobile-first
            spaceBetween: 15, // Небольшое расстояние между слайдами на мобильных

            // Эффект Coverflow для "технологичности"
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 30, // Угол поворота соседних слайдов
                stretch: 0, // Растяжение слайда (0 = нет)
                depth: 100, // Глубина эффекта (расстояние по Z)
                modifier: 1, // Множитель эффекта
                slideShadows: false, // Отключаем тени слайдов для чистоты
            },

            // Пагинация (точки внизу)
            pagination: {
                el: '.project-pagination',
                clickable: true, // Делаем пагинацию кликабельной
            },

            // Навигация (стрелки влево/вправо)
            navigation: {
                nextEl: '.project-button-next',
                prevEl: '.project-button-prev',
            },

            // Адаптивность: количество слайдов в зависимости от ширины экрана
            breakpoints: {
                // Когда ширина экрана >= 768px (средние экраны)
                768: {
                    slidesPerView: 2, // Показываем 2 слайда
                    spaceBetween: 20,
                    centeredSlides: false // Отключаем центрирование для более 1 слайда
                },
                // Когда ширина экрана >= 1024px (большие экраны)
                1024: {
                    slidesPerView: 3, // Показываем 3 слайда
                    spaceBetween: 30,
                    centeredSlides: false // Отключаем центрирование для более 1 слайда
                }
            },

            // Доступность (a11y) - важно для WCAG
            a11y: {
                enabled: true,
                prevSlideMessage: getTranslation('swiper.prevSlideMessage'), // Используем функцию перевода
                nextSlideMessage: getTranslation('swiper.nextSlideMessage'), // Используем функцию перевода
                paginationBulletMessage: getTranslation('swiper.paginationBulletMessage'), // Используем функцию перевода
            },
        });
    }
    initProjectSwiper(); // Вызываем функцию инициализации Swiper

});


// === Ленивая загрузка изображений ===
function initLazyLoading() {
    // Находим все изображения с атрибутом data-src
    const lazyImages = document.querySelectorAll("img[data-src]");

    // Проверяем поддержку IntersectionObserver
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                // Если элемент стал видимым
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    // Загружаем изображение, меняя data-src на src
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.removeAttribute('data-src'); // Удаляем data-src
                    // Прекращаем наблюдение за этим элементом
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        // Начинаем наблюдение за каждым изображением
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback для старых браузеров без IntersectionObserver
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute('data-src');
        });
    }
}


// === Микро-взаимодействия ===
function initMicroInteractions() {
    // Добавляем эффекты при наведении на элементы услуг и портфолио
    document.querySelectorAll('.service-item, .portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Добавление класса для анимации в CSS
            item.classList.add('hovered');
        });
        item.addEventListener('mouseleave', () => {
            // Удаление класса для анимации в CSS
            item.classList.remove('hovered');
        });
    });
}

// === Анимация появления секций при скролле ===
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section'); // Находим все секции

    // Проверяем поддержку IntersectionObserver
    if ("IntersectionObserver" in window) {
        let sectionObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                // Если секция стала видимой
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Добавляем класс для анимации
                    observer.unobserve(entry.target); // Прекращаем наблюдение
                }
            });
        }, {
            threshold: 0.1 // Процент видимости элемента для срабатывания (10%)
        });

        // Начинаем наблюдение за каждой секцией
        sections.forEach(function(section) {
            sectionObserver.observe(section);
        });
    } else {
        // Fallback: если IntersectionObserver не поддерживается, просто показываем все секции
        sections.forEach(function(section) {
            section.classList.add('visible');
        });
    }
}


// Все TODO, которые можно реализовать на фронтенде, выполнены.
// TODO: Укажите реальный URL вашего серверного скрипта для обработки формы обратной связи.
// TODO: Добавить переводы для сообщений об ошибках/успехе формы обратной связи.
// === Dropdown Menu Functionality ===
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const parentItem = this.closest('.nav-item');
            const dropdownMenu = parentItem.querySelector('.dropdown-menu');

            // Close all other dropdowns
            document.querySelectorAll('.nav-item.active').forEach(item => {
                if (item !== parentItem) {
                    item.classList.remove('active');
                    item.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle the current dropdown
            parentItem.classList.toggle('active');
            const isExpanded = parentItem.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-item.dropdown')) {
            document.querySelectorAll('.nav-item.active').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
            });
        }
    });
});