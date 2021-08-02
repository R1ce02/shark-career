import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from "@meforma/vue-toaster";
// import { VueI18n } from 'vue-i18n';
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        message: {
            home: 'HOME',
            ref: 'REFERENCES',
            solutions: 'SOLUTIONS',
            talent1: 'We Need',
            talentHighlighted: 'Your Talent',
            
        },
        subheading: {
            mission: 'OUR MISSION',
            tools: 'OUR TOOLS'
        },
        heading: {
            mission: 'Provide Others With Supercharged IT Services',
            open: 'Open Vacancies',
            tools: "Widen The Horizon",
            flexi: "Flexible Hours",
            snacks: "Snacks and Coffee in the Kitchen",
            improvement: "Individual Improvement",
            equipment: "Optimal Equipment",
            projects: "Interesting Projects",
            environment: "Great Work Environment",
            location: "Our Locations"
        },
        text: {
            mission: `Our mission is to offer our customers a customised and specialised IT
            service. We customise our IT solutions to their needs and their
            priorities. We use new and promising tools to create and develop our
            products. Exciting challenges lie in our path and we are ready to take
            them on! Join us on our journey...`,
            tools1: `We are focused on creating great products and offering exceptional services to our customers. 
            This requires us to make changes and adapt to the newest and best.`,
            tools2: `Your unique skill set can increase our palette of services.`,
            flexi: "You have flexible working hours, which allows you to adjust your working hours.",
            snacks: "We have all sorts of healthy snacks and food in our kitchen and of course we've got coffee ;)",
            improvement: "We train and support our employees in their journey to excellence.",
            equipment: "We choose our equipment to best suit your needs when you at work.",
            projects: "We have great national and international partners for projects.",
            environment: "We are all committed to excellence and have positive values."
        }
    },
    de: {
        message: {
            home: "STARTSEITE",
            ref: "REFERENZEN",
            solutions: "LÖSUNGEN",
            talent1: 'Wir brauchen',
            talentHighlighted: 'dein Talent',
        },
        subheading: {
            mission: 'UNSERE MISSION',
            tools: 'UNSERE TOOLS'
        },
        heading: {
            mission: 'Biete Anderen erstklassige IT-Dienstleistungen',
            open: "Offene Stellen",
            tools: "Erweitere den Horizont",
            flexi: "Flexible Arbeitszeiten",
            snacks: "Snacks und Kaffee in der Küche",
            improvement: "Individuelle Verbesserung",
            equipment: "Optimale Ausstattung",
            projects: "Spannende Projekte",
            environment: "Großartiges Arbeitsumfeld",
            location: "Unsere Standorte"
        },
        text: {
            mission: `Unser Ziel ist es, unseren Kunden einen maßgeschneiderten und spezialisierten
             IT-Service zu bieten. Wir passen unsere IT-Lösungen an ihre Bedürfnisse und ihre Prioritäten an.
             Wir verwenden neue und vielversprechende Tools, um unsere Produkte zu erstellen und zu entwickeln.
             Aufregende Herausforderungen liegen auf unserem Weg und wir sind bereit, sie anzunehmen!`,
            tools1: `Wir konzentrieren uns darauf, großartige Produkte zu entwickeln und unseren Kunden außergewöhnliche Dienstleistungen anzubieten. 
            Das erfordert von uns, dass wir uns verändern und an das Neueste und Beste anpassen.`,
            tools2: `Ihre einzigartigen Fähigkeiten können unsere Dienstleistungspalette erweitern.`,
            flexi: "Sie haben flexible Arbeitszeiten, die es Ihnen ermöglichen, Ihre Arbeitszeiten anzupassen.",
            snacks: "Wir haben alle Arten von gesunden Snacks und Lebensmitteln in unserer Küche und natürlich haben wir auch Kaffee ;)",
            improvement: "Wir schulen und unterstützen unsere Mitarbeiter auf ihrem Weg zu Spitzenleistungen.",
            equipment: "Wir wählen unsere Geräte so aus, dass sie Ihren Bedürfnissen bei der Arbeit am besten entsprechen.",
            projects: "Wir haben tolle nationale und internationale Partner für Projekte.",
            environment: "Wir sind alle zu Spitzenleistungen verpflichtet und haben positive Werte."
        }

    }
}

const i18n = createI18n({
    locale: 'de', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

const vue = createApp(App)
vue
.use(Toaster)
.use(router)
.use(i18n);
// add more functionality to myV3App

// now we're ready to mount
vue.mount('#app')

// createApp(App).use(router).mount('#app')
