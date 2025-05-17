import i18next from 'https://cdn.jsdelivr.net/npm/i18next@23/dist/esm/i18next.min.js';

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    function toggleMenu() {
        const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isOpen);
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('nav-open');
        console.log('Hamburger toggled:', isOpen ? 'closed' : 'opened');
    }
    
    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    } else {
        console.error('Hamburger button not found');
    }
    
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    const languageButtons = document.querySelectorAll('.language-btn');
    languageButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = button.closest('.language-dropdown');
            const menu = dropdown.querySelector('.language-menu');
            const isMobile = window.innerWidth <= 767;
            if (isMobile) {
                menu.classList.toggle('active');
                console.log('Language menu toggled on mobile');
            }
        });
    });

    document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = button.getAttribute('data-lang');
            const dropdown = button.closest('.language-dropdown');
            console.log('Language button clicked:', lang, 'in', dropdown.parentElement.className);
            i18next.changeLanguage(lang, (err) => {
                if (err) {
                    console.error('Language change failed:', err);
                    alert('Failed to change language. Please try again.');
                } else {
                    console.log('Language changed to:', lang);
                    updateContent();
                    const menu = dropdown.querySelector('.language-menu');
                    menu.classList.remove('active');
                }
            });
        });
    });

    i18next.init({
        lng: 'en',
        debug: true,
        resources: {
            en: {
                translation: {
                    'navbar.title': 'TechHaven',
                    'navbar.home': 'Home',
                    'navbar.products': 'Products',
                    'navbar.blog': 'Blog',
                    'navbar.support': 'Support',
                    'navbar.contact': 'Contact',
                    'navbar.language': 'Language',
                    'navbar.lang_en': 'English',
                    'navbar.lang_fr': 'French',
                    'navbar.lang_sw': 'Swahili',
                    'hero.title': 'Discover the Latest in Smart Tech',
                    'hero.subtitle': 'Explore our hand-picked collection of gadgets designed for the future.',
                    'hero.cta': 'Shop Now',
                    'products.title': 'Featured Products',
                    'products.smartphones.title': 'Smartphones',
                    'products.smartphones.description': 'Cutting-edge phones with high performance, AI features, and sleek designs.',
                    'products.wearables.title': 'Wearables',
                    'products.wearables.description': 'Smartwatches and fitness trackers to keep you connected and healthy on the go.',
                    'products.accessories.title': 'Accessories',
                    'products.accessories.description': 'From wireless earbuds to power banks—tech essentials to power your day.',
                    'blog.title': 'Latest From Our Blog',
                    'blog.post1.title': 'Top change in 2025',
                    'blog.post1.description': 'An expert round-up of this year\'s best smartphones by performance and value.',
                    'blog.post2.title': 'Smartwatch Buying Guide',
                    'blog.post2.description': 'Find the perfect wearable based on battery life, features, and design.',
                    'blog.post3.title': 'Wireless Audio Trends',
                    'blog.post3.description': 'Everything you need to know about the rise of true wireless sound tech.',
                    'reviews.title': 'Customer Reviews',
                    'reviews.review1.text': '"TechHaven made upgrading my gadgets so easy. Their product guides were spot on!"',
                    'reviews.review1.author': '— Jane K., 29',
                    'reviews.review2.text': '"My smartwatch was delivered fast and works perfectly. I love their clean, modern site!"',
                    'reviews.review2.author': '— Liam P., 35',
                    'support.title': 'Support & FAQ',
                    'support.faq1.question': 'How long does delivery take?',
                    'support.faq1.answer': 'Orders are processed within 24 hours and delivered within 1.5 business days.',
                    'support.faq2.question': 'Is there a product warranty?',
                    'support.faq2.answer': 'Yes, all products come with a minimum 1-year manufacturer warranty.',
                    'support.faq3.question': 'Can I return or exchange items?',
                    'support.faq3.answer': 'We accept returns within 14 days. Exchanges are also supported based on stock availability.',
                    'contact.title': 'Get in Touch',
                    'contact.subtitle': 'We\'re Here to Help',
                    'contact.description': 'Whether you have questions, need help getting started, or want to learn more—reach out anytime.',
                    'contact.details.title': 'Contact Details',
                    'contact.details.email_label': 'Email:',
                    'contact.details.phone_label': 'Phone:',
                    'contact.details.address_label': 'Address:',
                    'contact.details.response_time': 'We typically respond within 1.5 business days.',
                    'contact.form.title': 'Send Us a Message',
                    'contact.form.email_label': 'Email',
                    'contact.form.message_label': 'Message',
                    'contact.form.submit': 'Send Message',
                    'contact.form.success': 'Message sent successfully!',
                    'contact.form.error': 'Failed to send message. Please try again.',
                    'footer.copyright': '© 2025 TechHaven. All rights reserved.'
                }
            },
            fr: {
                translation: {
                    'navbar.title': 'TechHaven',
                    'navbar.home': 'Accueil',
                    'navbar.products': 'Produits',
                    'navbar.blog': 'Blog',
                    'navbar.support': 'Support',
                    'navbar.contact': 'Contact',
                    'navbar.language': 'Langue',
                    'navbar.lang_en': 'Anglais',
                    'navbar.lang_fr': 'Français',
                    'navbar.lang_sw': 'Swahili',
                    'hero.title': 'Découvrez les dernières technologies intelligentes',
                    'hero.subtitle': 'Explorez notre collection soigneusement sélectionnée de gadgets conçus pour l\'avenir.',
                    'hero.cta': 'Acheter maintenant',
                    'products.title': 'Produits en vedette',
                    'products.smartphones.title': 'Smartphones',
                    'products.smartphones.description': 'Téléphones de pointe avec haute performance, fonctionnalités IA et designs élégants.',
                    'products.wearables.title': 'Wearables',
                    'products.wearables.description': 'Montres connectées et trackers de fitness pour rester connecté et en bonne santé en déplacement.',
                    'products.accessories.title': 'Accessoires',
                    'products.accessories.description': 'Des écouteurs sans fil aux batteries externes — les essentiels technologiques pour dynamiser votre journée.',
                    'blog.title': 'Derniers articles de notre blog',
                    'blog.post1.title': 'Top des changements en 2025',
                    'blog.post1.description': 'Un tour d’horizon des meilleurs smartphones de l’année par performance et valeur.',
                    'blog.post2.title': 'Guide d’achat de montres connectées',
                    'blog.post2.description': 'Trouvez le wearable parfait selon l’autonomie, les fonctionnalités et le design.',
                    'blog.post3.title': 'Tendances audio sans fil',
                    'blog.post3.description': 'Tout ce que vous devez savoir sur l’essor de la technologie audio sans fil véritable.',
                    'reviews.title': 'Avis des clients',
                    'reviews.review1.text': '"TechHaven a rendu la mise à niveau de mes gadgets si facile. Leurs guides de produits étaient parfaits !"',
                    'reviews.review1.author': '— Jane K., 29',
                    'reviews.review2.text': '"Ma montre connectée a été livrée rapidement et fonctionne parfaitement. J’aime leur site moderne et épuré !"',
                    'reviews.review2.author': '— Liam P., 35',
                    'support.title': 'Support & FAQ',
                    'support.faq1.question': 'Combien de temps prend la livraison ?',
                    'support.faq1.answer': 'Les commandes sont traitées dans les 24 heures et livrées dans les 1,5 jours ouvrables.',
                    'support.faq2.question': 'Y a-t-il une garantie sur les produits ?',
                    'support.faq2.answer': 'Oui, tous les produits bénéficient d’une garantie constructeur d’au moins 1 an.',
                    'support.faq3.question': 'Puis-je retourner ou échanger des articles ?',
                    'support.faq3.answer': 'Nous acceptons les retours dans les 14 jours. Les échanges sont également possibles selon la disponibilité des stocks.',
                    'contact.title': 'Contactez-nous',
                    'contact.subtitle': 'Nous sommes là pour aider',
                    'contact.description': 'Que vous ayez des questions, besoin d’aide pour démarrer ou que vous souhaitiez en savoir plus, contactez-nous à tout moment.',
                    'contact.details.title': 'Détails de contact',
                    'contact.details.email_label': 'Email :',
                    'contact.details.phone_label': 'Téléphone :',
                    'contact.details.address_label': 'Adresse :',
                    'contact.details.response_time': 'Nous répondons généralement dans les 1,5 jours ouvrables.',
                    'contact.form.title': 'Envoyez-nous un message',
                    'contact.form.email_label': 'Email',
                    'contact.form.message_label': 'Message',
                    'contact.form.submit': 'Envoyer le message',
                    'contact.form.success': 'Message envoyé avec succès !',
                    'contact.form.error': 'Échec de l’envoi du message. Veuillez réessayer.',
                    'footer.copyright': '© 2025 TechHaven. Tous droits réservés.'
                }
            },
            sw: {
                translation: {
                    'navbar.title': 'TechHaven',
                    'navbar.home': 'Nyumbani',
                    'navbar.products': 'Bidhaa',
                    'navbar.blog': 'Blogu',
                    'navbar.support': 'Msaada',
                    'navbar.contact': 'Wasiliana',
                    'navbar.language': 'Lugha',
                    'navbar.lang_en': 'Kiingereza',
                    'navbar.lang_fr': 'Kifaransa',
                    'navbar.lang_sw': 'Kiswahili',
                    'hero.title': 'Gundua Teknolojia ya Kisasa ya Akili',
                    'hero.subtitle': 'Chunguza mkusanyiko wetu uliochaguliwa kwa makini wa vifaa vilivyoundwa kwa ajili ya mustakabali.',
                    'hero.cta': 'Nunua Sasa',
                    'products.title': 'Bidhaa Zilizochaguliwa',
                    'products.smartphones.title': 'Simu za Akili',
                    'products.smartphones.description': 'Simu za hali ya juu zenye utendaji wa juu, vipengele vya AI, na miundo maridadi.',
                    'products.wearables.title': 'Vifaa vya Kuvaa',
                    'products.wearables.description': 'Saa za akili na vifuatiliaji vya siha ili kukuweka ukiwa na mawasiliano na afya popote ulipo.',
                    'products.accessories.title': 'Vifaa',
                    'products.accessories.description': 'Kutoka kwa vipokea sauti visivyo na waya hadi benki za nguvu—vifaa vya teknolojia vya muhimu kwa siku yako.',
                    'blog.title': 'Habari za Hivi Punde kutoka kwa Blogu Yetu',
                    'blog.post1.title': 'Mabadiliko ya Juu ya 2025',
                    'blog.post1.description': 'Muhtasari wa wataalamu wa simu za akili bora za mwaka huu kwa utendaji na thamani.',
                    'blog.post2.title': 'Mwongozo wa Kununua Saa za Akili',
                    'blog.post2.description': 'Pata kifaa cha kuvaa kinachofaa kulingana na maisha ya betri, vipengele, na muundo.',
                    'blog.post3.title': 'Mielekeo ya Sauti Bila Waya',
                    'blog.post3.description': 'Kila kitu unachohitaji kujua kuhusu kuongezeka kwa teknolojia ya sauti bila waya ya kweli.',
                    'reviews.title': 'Maoni ya Wateja',
                    'reviews.review1.text': '"TechHaven ilifanya kuboresha vifaa vyangu iwe rahisi sana. Miongozo yao ya bidhaa ilikuwa sahihi kabisa!"',
                    'reviews.review1.author': '— Jane K., 29',
                    'reviews.review2.text': '"Saa yangu ya akili ilifika haraka na inafanya kazi kikamilifu. Ninapenda tovuti yao ya kisasa na safi!"',
                    'reviews.review2.author': '— Liam P., 35',
                    'support.title': 'Msaada & Maswali ya Mara kwa Mara',
                    'support.faq1.question': 'Uwasilishaji huchukua muda gani?',
                    'support.faq1.answer': 'Maagizo yanashughulikiwa ndani ya saa 24 na yanawasilishwa ndani ya siku 1.5 za kazi.',
                    'support.faq2.question': 'Je, kuna dhamana ya bidhaa?',
                    'support.faq2.answer': 'Ndiyo, bidhaa zote zina dhamana ya mtengenezaji ya angalau mwaka 1.',
                    'support.faq3.question': 'Je, ninaweza kurudisha au kubadilisha bidhaa?',
                    'support.faq3.answer': 'Tunakubali kurudisha ndani ya siku 14. Kubadilisha pia kunasaidiwa kulingana na upatikanaji wa hisa.',
                    'contact.title': 'Wasiliana Nasi',
                    'contact.subtitle': 'Tuko Hapa Kukusaidia',
                    'contact.description': 'Iwe una maswali, unahitaji msaada wa kuanza, au unataka kujua zaidi—wasiliana nasi wakati wowote.',
                    'contact.details.title': 'Maelezo ya Mawasiliano',
                    'contact.details.email_label': 'Barua Pepe:',
                    'contact.details.phone_label': 'Simu:',
                    'contact.details.address_label': 'Anwani:',
                    'contact.details.response_time': 'Kwa kawaida tunajibu ndani ya siku 1.5 za kazi.',
                    'contact.form.title': 'Tutumie Ujumbe',
                    'contact.form.email_label': 'Barua Pepe',
                    'contact.form.message_label': 'Ujumbe',
                    'contact.form.submit': 'Tuma Ujumbe',
                    'contact.form.success': 'Ujumbe umetumwa kwa mafanikio!',
                    'contact.form.error': 'Imeshindwa kutuma ujumbe. Tafadhali jaribu tena.',
                    'footer.copyright': '© 2025 TechHaven. Haki Zote Zimehifadhiwa.'
                }
            }
        }
    }, (err) => {
        if (err) {
            console.error('i18next initialization failed:', err);
            alert('Failed to initialize translations. Please try refreshing the page.');
        } else {
            console.log('i18next initialized successfully');
            updateContent();
        }
    });

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            try {
                const translatedText = i18next.t(key);
                if (translatedText) {
                    element.textContent = translatedText;
                } else {
                    console.warn(`Translation missing for key: ${key}`);
                }
            } catch (error) {
                console.error(`Error translating key ${key}:`, error);
            }
        });
    }

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.querySelector('.form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted');
        
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.send('service_d8j7759', 'template_7he70p5', {
            from_email: email,
            message: message
        })
        .then(() => {
            console.log('Email sent successfully');
            formMessage.textContent = i18next.t('contact.form.success');
            formMessage.classList.remove('error');
            formMessage.classList.add('success');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Email send failed:', error);
            formMessage.textContent = i18next.t('contact.form.error');
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
        });
    });
});