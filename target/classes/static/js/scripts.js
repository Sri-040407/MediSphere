const translations = {
    en: {
        pageTitle: 'MediSphere Women & Child Hospital',
        brand: 'MediSphere',
        navAbout: 'About',
        navServices: 'Services',
        navDepartments: 'Departments',
        navTestimonials: 'Testimonials',
        navContact: 'Contact',
        navAdmin: 'Admin Login',
        heroEyebrow: 'Women & Child Care',
        heroTitle: 'Welcome to MediSphere Women & Child Hospital',
        heroText: 'Providing compassionate care for women, mothers, newborns, and children with modern healthcare facilities and experienced specialists.',
        heroPrimary: 'Book Appointment',
        heroSecondary: 'Meet Our Doctors',
        heroCardTitle: 'MediSphere',
        heroCardText: 'Warm care for mothers, newborns, and little ones.',
        aboutTitle: 'About Us',
        servicesTitle: 'Our Services',
        servicesSubtitle: 'Comprehensive Care for Women and Children',
        contactTitle: 'Contact Us',
        loginTitle: 'Admin Login',
        usernameLabel: 'Username',
        usernamePlaceholder: 'Enter username',
        passwordLabel: 'Password',
        passwordPlaceholder: 'Enter password',
        rememberMe: 'Remember Me',
        forgotPassword: 'Forgot Password?',
        loginButton: 'Login',
        languageLabel: 'Language'
    },
    hi: {
        pageTitle: 'मेडीस्फीयर वुमन एंड चाइल्ड हॉस्पिटल',
        brand: 'मेडीस्फीयर',
        navAbout: 'हमारे बारे में',
        navServices: 'सेवाएँ',
        navDepartments: 'विभाग',
        navTestimonials: 'प्रमाणपत्र',
        navContact: 'संपर्क',
        navAdmin: 'व्यवस्थापक लॉगिन',
        heroEyebrow: 'महिलाओं और बच्चों की देखभाल',
        heroTitle: 'मेडीस्फीयर वुमन एंड चाइल्ड हॉस्पिटल में आपका स्वागत है',
        heroText: 'आधुनिक स्वास्थ्य सुविधाओं और अनुभवी विशेषज्ञों के साथ महिलाओं, माताओं, नवजात शिशुओं और बच्चों के लिए दयालु देखभाल प्रदान करना।',
        heroPrimary: 'अपॉइंटमेंट बुक करें',
        heroSecondary: 'हमारे डॉक्टरों से मिलें',
        heroCardTitle: 'मेडीस्फीयर',
        heroCardText: 'माओं, नवजात शिशुओं और बच्चों के लिए गर्म देखभाल।',
        aboutTitle: 'हमारे बारे में',
        servicesTitle: 'हमारी सेवाएँ',
        servicesSubtitle: 'महिलाओं और बच्चों के लिए व्यापक देखभाल',
        contactTitle: 'संपर्क करें',
        loginTitle: 'व्यवस्थापक लॉगिन',
        usernameLabel: 'उपयोगकर्ता नाम',
        usernamePlaceholder: 'उपयोगकर्ता नाम दर्ज करें',
        passwordLabel: 'पासवर्ड',
        passwordPlaceholder: 'पासवर्ड दर्ज करें',
        rememberMe: 'याद रखें',
        forgotPassword: 'पासवर्ड भूल गए?',
        loginButton: 'लॉगिन',
        languageLabel: 'भाषा'
    },
    te: {
        pageTitle: 'మెడీస్ఫియర్ వుమన్ & చైల్డ్ హాస్పిటల్',
        brand: 'మెడీస్ఫియర్',
        navAbout: 'మా గురించి',
        navServices: 'సేవలు',
        navDepartments: 'శాఖలు',
        navTestimonials: 'సాక్ష్యాలు',
        navContact: 'సంప్రదించండి',
        navAdmin: 'ఏడ్మిన్ లాగిన్',
        heroEyebrow: 'మహిళలు మరియు పిల్లల సంరక్షణ',
        heroTitle: 'మెడీస్ఫియర్ వుమన్ & చైల్డ్ హాస్పిటల్‌కు స్వాగతం',
        heroText: 'ఆధునిక ఆరోగ్య సేవలు మరియు అనుభవజ్ఞులైన నిపుణులతో మహిళలు, తల్లులు, శిశువులు మరియు పిల్లల కోసం_COMPASSIONATE సంరక్షణ అందిస్తాం.',
        heroPrimary: 'అపాయింట్మెంట్ బుక్ చేయండి',
        heroSecondary: 'మా వైద్యులను కలవండి',
        heroCardTitle: 'మెడీస్ఫియర్',
        heroCardText: 'తల్లులకు, శిశువులకు మరియు చిన్న పిల్లలకు ఉష్ణమైన సంరక్షణ.',
        aboutTitle: 'మా గురించి',
        servicesTitle: 'మా సేవలు',
        servicesSubtitle: 'మహిళలు మరియు పిల్లల కోసం సమగ్ర సంరక్షణ',
        contactTitle: 'మమ్మల్ని సంప్రదించండి',
        loginTitle: 'ఏడ్మిన్ లాగిన్',
        usernameLabel: 'వాడుకరి పేరు',
        usernamePlaceholder: 'వాడుకరి పేరు నమోదు చేయండి',
        passwordLabel: 'పాస్‌వర్డ్',
        passwordPlaceholder: 'పాస్‌వర్డ్ నమోదు చేయండి',
        rememberMe: 'గుర్తుంచుకోండి',
        forgotPassword: 'పాస్‌వర్డ్ మర్చిపోయారా?',
        loginButton: 'లాగిన్',
        languageLabel: 'భాష'
    }
};

function applyTranslations(lang) {
    const dictionary = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.title = dictionary.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (dictionary[key]) {
            element.placeholder = dictionary[key];
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') {
                return;
            }
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const languageSwitcher = document.getElementById('languageSwitcher');
    if (languageSwitcher) {
        const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
        languageSwitcher.value = savedLanguage;
        applyTranslations(savedLanguage);
        languageSwitcher.addEventListener('change', function () {
            const selectedLanguage = this.value;
            localStorage.setItem('preferredLanguage', selectedLanguage);
            applyTranslations(selectedLanguage);
        });
    }
});
