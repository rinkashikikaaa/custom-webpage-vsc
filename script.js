// Language translations
const translations = {
    en: {
        welcome: 'Welcome',
        whatDo: 'What do you want to see?',
        business: 'Business',
        user: 'User',
        aboutMe: 'About Me',
        portfolio: 'Portfolio',
        socials: 'Socials',
        merch: 'Merch',
        projects: 'Projects',
        selectLanguage: 'Select your language',
        language: 'Language'
    },
    ja: {
        welcome: 'ようこそ',
        whatDo: '何を見たいですか？',
        business: 'ビジネス',
        user: 'ユーザー',
        aboutMe: '私について',
        portfolio: 'ポートフォリオ',
        socials: 'ソーシャル',
        merch: 'グッズ',
        projects: 'プロジェクト',
        selectLanguage: 'あなたの言語を選択してください',
        language: '言語'
    },
    de: {
        welcome: 'Willkommen',
        whatDo: 'Was möchtest du sehen?',
        business: 'Geschäft',
        user: 'Benutzer',
        aboutMe: 'Über Mich',
        portfolio: 'Portfolio',
        socials: 'Soziale Medien',
        merch: 'Merchandise',
        projects: 'Projekte',
        selectLanguage: 'Wählen Sie Ihre Sprache',
        language: 'Sprache'
    },
    es: {
        welcome: 'Bienvenido',
        whatDo: '¿Qué quieres ver?',
        business: 'Negocios',
        user: 'Usuario',
        aboutMe: 'Sobre Mí',
        portfolio: 'Portafolio',
        socials: 'Redes Sociales',
        merch: 'Mercancía',
        projects: 'Proyectos',
        selectLanguage: 'Selecciona tu idioma',
        language: 'Idioma'
    }
};

let currentLanguage = 'en';
let selectedLanguage = 'en';

// DOM elements
const languageLabel = document.querySelector('.language-label');
const languagePanel = document.getElementById('languagePanel');
const overlay = document.getElementById('overlay');
const confirmButton = document.getElementById('confirmButton');
const languageOptions = document.querySelectorAll('.language-option');
const businessSubmenu = document.getElementById('business-submenu');
const userSubmenu = document.getElementById('user-submenu');
const navButtons = document.querySelectorAll('.nav-button');

// Initialize
initialize();

function initialize() {
    updatePageText(currentLanguage);
    setDefaultLanguageOption();
    setupEventListeners();
}

function setupEventListeners() {
    // Language section click
    document.querySelector('.language-section').addEventListener('click', openLanguagePanel);

    // Overlay click
    overlay.addEventListener('click', closeLanguagePanel);

    // Language options click
    languageOptions.forEach(option => {
        option.addEventListener('click', selectLanguageOption);
    });

    // Confirm button click
    confirmButton.addEventListener('click', confirmLanguage);

    // Nav buttons click
    navButtons.forEach(button => {
        button.addEventListener('click', handleNavButtonClick);
    });
}

function openLanguagePanel() {
    languagePanel.classList.add('active');
    overlay.classList.add('active');
}

function closeLanguagePanel() {
    languagePanel.classList.remove('active');
    overlay.classList.remove('active');
}

function selectLanguageOption(e) {
    // Remove previous selection
    languageOptions.forEach(option => option.classList.remove('selected'));

    // Add selection to clicked option
    e.target.classList.add('selected');
    selectedLanguage = e.target.dataset.lang;

    // Enable confirm button
    confirmButton.classList.add('active');
}

function confirmLanguage() {
    if (selectedLanguage !== currentLanguage) {
        currentLanguage = selectedLanguage;
        updatePageText(currentLanguage);
    }
    closeLanguagePanel();
}

function updatePageText(lang) {
    const t = translations[lang];

    // Update main title
    document.querySelector('.main-title').textContent = t.welcome;

    // Update subtitle
    document.querySelector('.subtitle').textContent = t.whatDo;

    // Update language label
    languageLabel.textContent = t.language;

    // Update language panel title
    document.querySelector('.language-panel-title').textContent = t.selectLanguage;

    // Update nav buttons
    const businessBtn = navButtons[0];
    const userBtn = navButtons[1];
    businessBtn.textContent = t.business;
    userBtn.textContent = t.user;

    // Update submenus
    const businessSubButtons = businessSubmenu.querySelectorAll('.sub-button');
    businessSubButtons[0].textContent = t.aboutMe;
    businessSubButtons[1].textContent = t.portfolio;

    const userSubButtons = userSubmenu.querySelectorAll('.sub-button');
    userSubButtons[0].textContent = t.aboutMe;
    userSubButtons[1].textContent = t.socials;
    userSubButtons[2].textContent = t.merch;
    userSubButtons[3].textContent = t.projects;
}

function setDefaultLanguageOption() {
    languageOptions.forEach(option => {
        if (option.dataset.lang === 'en') {
            option.classList.add('selected');
            selectedLanguage = 'en';
        }
    });
}

function handleNavButtonClick(e) {
    const section = e.target.dataset.section;

    // Hide all submenus
    businessSubmenu.classList.remove('active');
    userSubmenu.classList.remove('active');

    // Show selected submenu
    if (section === 'business') {
        businessSubmenu.classList.add('active');
    } else if (section === 'user') {
        userSubmenu.classList.add('active');
    }
}
