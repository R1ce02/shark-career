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
            talent1: 'We need',
            talentHighlighted: 'your talent',
            
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
            location: "Our Locations",
            apply: "Apply For Your Future",
            students: "For Students",
            interns: "For Interns"
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
            environment: "We are all committed to excellence and have positive values.",
            students: "You want to gain experience in the field of IT alongside your studies? We are prepared to give you a part-time job and are ready to train you. Our team will keep your studies in mind and train you accordingly. If you are studying computer science apply above.",
            interns: "Need a summer internship? You will be able to earn a great amount of practical experience with us. We will do our part in teaching and training you to the best of our capability. If you are a student of a school of higher technical education (HTL) and have the thirst to become better apply now above."
        },
        references: {
            heading: "Our Projects",
            subheading: "Check Out Some of Our Previous Projects",
            porrtunity_heading: "Project: PORRtunity+",
            porrtunity_subheading: "A Project With Porr AG",
            porrtunity_text: "The main goal of this project was to migrate and redesign a legacy system, which is an existing database, to optimise its speed and ease of use.",
            brr_heading: "Project: IVV Migration to Java/Linux",
            brr_subheading: "A Project With Bundesrechenzentrum GmbH",
            brr_text: "The main goal of this project was to redesign and renew an older website's frontend and backend. Java was used to create the backend. The frontend was renewed to access the new backend and the design was modernised.",
            heading_2: "References",
            subheading_2: "Selected Customer Reference"
        },
        solutions: {
            heading: "Our Solutions",
            listItem1: {
                heading: "IT Migration and Re-Platforming",
                card1_heading: "Moderate and scaleable migration risk and costs",
                card1_1: "1:1 migration, fully automated without any manual reworking",
                card1_2: "Proven project experience ranges from re-platforming to code conversion",
                card1_3: "Multiple generation cycles per day are provided",
                card1_4: "No interruption of daily business",
                card1_5: "Minimal Code Freeze Periods (all time record: 1 day!)",
                card1_6: "Automatic test generation tools are embedded: capture/replay , regression testing, performance benchmarking",
                card2_heading: "Solution completeness with the best of breed automated conversion",
                card2_1: "Transformation of 3 and 4 GL source languages (CSP/VAGEN, Smalltalk, Cobol, PL/I, BMS/CICS), Assembler, RPG into Java, C#, C/C++",
                card2_2: "Mainframe environments (z/OS, VSE, BS2000) to Linux, AIX, HP-UUX",
                card2_3: "Middleware substition (CICS, IMS, CTG, LU6.2, UTM) by SHARK Migration Architecture, Jboss, Websphere, SAP NetWeaver",
                card2_4: "Data Migration (Oracle, DB2, VSAM, SESAM, Leasy , DL1) to Oracle, DB2, SAP HANA, PostgreSQL, MySQL",
                card3_heading: "Contributed to skill evolution and employee development program",
                card3_1: "Low Learning curve by providing the original source code as a comment in front of the correspondent migrated code line",
                card3_2: "Graduates with a state of the art IT-education are able to maintain the new system without special training",
                card3_3: "No re-training for end users necessary! The look and feel of the applications stay the same with the enhancement of an intuitive graphic user interface",
                card4_heading: "Optimal Target Environment provides IT consolidation and simplification",
                card4_1: "A flexible Java / C# Framework is embedded within the SHARK Migration Architecture and integrates with the individual OO Architecture of the customer",
                card4_2: "Simpler, lower cost integration leveragging modern middleware and SOA",
                card4_3: "The complete integration into the underlying data base is self-evident"
            },
            listItem2: { 
                heading: "Testmanagement",
                card1_heading: "Unit-Tests",
                card1_1: "During the Unit Test all generated source code parts are completely (C1-Test) technically tested.",
                card2_heading: "Regressionstests (Capture/Replay)",
                card2_1: "All user interactions within the production environmant are recorded during a defined period (capture) and reproduced on the new target platform (replay). During the evaluation phase it is verified whether errors occure, that means states of the GUI, database and output formats are queried.",
                card3_heading: "Integration Tests",
                card3_1: "Integration tests are compareable to the quality assurance phase of a project. This includes all testing activities on the complete system, including the connected interfaces. The tests are performed in a controlled test environment (controlled release handover, defined database situations).",
                card4_heading: "Performancetests using Flooder",
                card4_1: "The performance targets which have been defined during the analysis phase are reviewed and simulated with any number of users.",

            },
            listItem3: { 
                heading: "EBM Suite",
                card1_heading: "Analysis Tool Set",
                card1_1: "Business process analysis, organisation analysis, data modelling and design for individual applications or for efficient implementation of any standard ERP system (e.g.: Oracle E-Business Suite)",
                card2_heading: "Configurator Tool Set",
                card2_1: "Tool for the definition and calculation of complex bills of materials – capable of full integration into your internal solutions (individual or standard ERP systems).",
                card3_heading: "Reporting Tool Set",
                card3_1: "Thanks to the individual design option and the integration of documents of any kind (project plans, logs, Word, Excel, etc.), the flexible Report Writer offers custom-made “up to date” documentation for all project participants, managers, departments, analysts and IT architects.",

            },
            listItem4: { 
                heading: "EAI (Enterprise Application Integration)",
                card1_heading: "Reporting Tool Set",
                card1_1: "Our EAI-project for the Generali Group is an successful example for a seamless integration of different heterogeneous IT generations (NT, AIX, IBM S/390, OMVS).",
                card1_2: "The solution was based on multi tier architecture using distributed objects and included the following features:",
                card1_li1: "Integration of the existing legacy systems",
                card1_li2: "Secure communication (7/24 availability) by caching temporarily non available backend system (e.g. mainframe, UNIX)",
                card1_li3: "Mapping to convert different formats",
                card1_li4: "Interfaces to different applications",
                card1_li5: "Naming and security protocols",
                card1_li6: "Transaction processing, logging, backtracking and recovery",
                card1_li7: "XML-specified reusable metadata repository",
                card1_3: "An interface layer (resource pool) provided the database connection. Different database systems have been serviced e.g. DB2, Oracle, SQL-Server, Adabas ",
                card1_4: "There is communication across servers, which also allows full surveillance of remote servers and centralised software deployment. All available system builds are stored on the software server. The maintenance of the central system builds in the repository also follows XML-standard."
            },

        }
    },
    de: {
        message: {
            home: "STARTSEITE",
            ref: "REFERENZEN",
            solutions: "LÖSUNGEN",
            talent1: 'Wir brauchen',
            talentHighlighted: 'Dein Talent',
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
            location: "Unsere Standorte",
            apply: "Bewerben für deine Zukunft",
            students: "StudententInnen",
            interns: "PraktikantInnen"
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
            environment: "Wir sind alle zu Spitzenleistungen verpflichtet und haben positive Werte.",
            students: "Sie wollen neben Ihrem Studium Erfahrungen im IT-Bereich sammeln? Wir bieten Ihnen einen Nebenjob und sind bereit, Sie auszubilden. Unser Team wird Ihr Studium im Auge behalten und Sie entsprechend ausbilden. Wenn Sie Informatik studieren, bewerben Sie sich oben.",
            interns: "Sie brauchen ein Sommerpraktikum? Bei uns können Sie eine Menge praktischer Erfahrungen sammeln. Wir werden unseren Teil dazu beitragen, Sie nach besten Kräften zu unterrichten und auszubilden. Wenn Sie Schüler/in einer Höheren Technischen Lehranstalt (HTL) sind und den Drang haben, besser zu werden, bewerben Sie sich jetzt oben."
        },
        references: {
            heading: "Unsere Projekte",
            subheading: "Sehen Sie sich einige unserer früheren Projekte an",
            porrtunity_heading: "Projekt: PORRtunity+",
            porrtunity_subheading: "Ein Projekt mit der Porr AG",
            porrtunity_text: "Das Hauptziel dieses Projekts war die Migration und Neugestaltung eines Altsystems, um dessen Geschwindigkeit und Benutzerfreundlichkeit zu optimieren.",
            brr_heading: "Projekt: IVV Migration to Java/Linux",
            brr_subheading: "Ein Projekt mit der Bundesrechenzentrum GmbH",
            brr_text: "Das Hauptziel dieses Projekts war die Neugestaltung und Erneuerung des Frontends und Backends einer älteren Website. Für die Erstellung des Backends wurde Java verwendet. Das Frontend wurde erneuert, um auf das neue Backend zugreifen zu können, und das Design wurde modernisiert.",
            heading_2: "Referenzen",
            subheading_2: "Ausgewählte Kundenreferenz"
        },
        solutions: {
            heading: "Unsere Lösungen",
            listItem1: {
                heading: "IT Migration and Re-Platforming",
                card1_heading: "Moderate und transparente Migrationskosten und Risken",
                card1_1: "1:1 Migration, vollautomatisch ohne manuelle Zwischenschritte oder Nachbearbeitung",
                card1_2: "Die Generierungsläufe können beliebig oft wiederholt werden!",
                card1_3: "Die vorbereitende Analyse ist eine reine Daten- und Codeanalyse und deshalb weitaus kürzer als bei Neuentwicklungen.",
                card1_4: "Die Wartung der Altsysteme ist während der gesamten Projektlaufzeit störungsfrei möglich?",
                card1_5: 'geringe Code Freeze Perioden ("all time record" 1 Tag!)',
                card1_6: "Integration automatischer Testtools für Capture/Replay, Regressionstests, Performance Benchmarking etc.",
                card2_heading: "SHARK bietet ausgereifte Migrationslösungen für Ihre Legacy Systeme",
                card2_1: "3 und 4 GL Sprachen (CSP/VAGEN, Smalltalk, Cobol, PL/I, BMS/CICS), Assembler, RPG nach Java, C#, C/C++",
                card2_2: "Mainframe Umgebungen (z/OS, VSE, BS2000) nach Linux, AIX, HP-UUX",
                card2_3: "Middleware Ablöse (CICS, IMS, CTG, LU6.2, UTM) durch SAP NetWeaver, Jboss, Websphere, SHARK Migration Architecture",
                card2_4: "Datenmigration (Oracle, DB2, VSAM, SESAM, Leasy, DL1) nach Oracle, DB2, SAP HANA, PostgreSQL",
                card3_heading: "Mitarbeiterfreundliche und kostenschonende Personalentwicklung",
                card3_1: "Erfreulich kurze Lernkurve für die Stammbelegschaft",
                card3_2: "Neue MitarbeiterInnen mit aktuellem IT-Ausbildungsstand können die Zielarchitektur ohne zusätzlichen Ausbildungsaufwand einfach betreuen und warten.",
                card3_3: "Die Umstellungen verlaufen für die EndanwenderInnen völlig unbemerkt, ohne Störung oder Unterbrechung des laufenden Produktionsbetriebs.",
                card4_heading: "Eine ausgereifte Zielarchitektur unterstützt die IT-Konsolidierung",
                card4_1: "Ein flexibles Java bzw. C# Framework ist in die SHARK Migrationsarchitektur eingebettet und wird an die individuelle OO Architektur der Kunden angebunden",
                card4_2: "Einfachere, kostengünstigere Integration in moderene Middleware und SOA",
                card4_3: "Vollständige Integration und Übernahme der zugrunde liegenden Datenbanken"
            },
            listItem2: { 
                heading: "Testmanagement",
                card1_heading: "Unit-Tests",
                card1_1: "Im Unit Test werden alle generierten Quellcodeteile komplett (C1-Test) technisch durchgetestet.",
                card2_heading: "Regressionstests (Capture/Replay)",
                card2_1: "Alle Anwenderinteraktionen im Produktionsbetrieb werden während eines definierten Zeitraums aufgezeichnet (capture) und auf der neuen Zielplattform abgespielt (replay). Bei der Auswertung wird verifiziert, ob Fehler auftreten d.h. Zustände der GUI, Datenbankinhalte und Ausgabeformate werden abgefragt. ",
                card3_heading: "Integrationstests",
                card3_1: "Integrationstests werden auch mit der Qualitätssicherungsphase eines Projekts gleichgestellt. Dazu zählen alle Testaktivitäten am kompletten System inklusive der angebundenen Schnittstellen im Verbund. Die Tests werden in einer kontrollierten Testumgebung durchgeführt (kontrollierte Release-Übergabe, definierte Datenbanksituationen). ",
                card4_heading: "Performancetests mittels „Flooder“",
                card4_1: "Die im Rahmen der Analyse festgelegten Performance-Zielwerte werden überprüft und mit einer beliebigen Anzahl von Benutzern simuliert.",

            },
            listItem3: { 
                heading: "EBM Suite",
                card1_heading: "Analysis Tool Set",
                card1_1: "Geschäftsprozessanalyse, Organisationsanalyse, Datenmodellierung und Design für individuelle Anwendungen oder zur effizienten Einführung eines beliebigen Standard-ERP-Systems (z.B.: Oracle E-Business Suite) ",
                card2_heading: "Configurator Tool Set",
                card2_1: "Werkzeug zur Definition und Kalkulation von komplexen Stücklisten - voll integrierbar in Ihre hauseigenen Lösungen (Individual- oder Standard-ERP-Systeme). ",
                card3_heading: "Reporting Tool Set",
                card3_1: "der flexible Report Writer bietet durch die individuelle Gestaltungsmöglichkeit und die Integration von Dokumenten aller Art (Projektpläne, Protokolle, Word, Excel etc.) eine maßgeschneiderte „up to date“ Dokumentation für alle Projektmitglieder, Manager, Fachbereich, Analytiker und IT-Architekten.",

            },
            listItem4: { 
                heading: "EAI (Enterprise Application Integration)",
                card1_heading: "Reporting Tool Set",
                card1_1: "Unser EAI-Projekt für die Generali Gruppe ist ein gelungenes Beispiel für eine nahtlose Integration verschiedener heterogener IT-Generationen (NT, AIX, IBM S/390, OMVS).",
                card1_2: "Die Lösung basierte auf einer mehrstufigen Architektur mit verteilten Objekten und umfasste die folgenden Funktionen:",
                card1_li1: "Integration der bestehenden Altsysteme",
                card1_li2: "Sichere Kommunikation (7/24 Verfügbarkeit) durch Zwischenspeicherung vorübergehend nicht verfügbarer Backend-Systeme (z.B. Mainframe, UNIX)",
                card1_li3: "Mapping zur Konvertierung verschiedener Formate",
                card1_li4: "Schnittstellen zu verschiedenen Anwendungen",
                card1_li5: "Namensgebung und Sicherheitsprotokolle",
                card1_li6: "Transaktionsverarbeitung, Protokollierung, Backtracking und Wiederherstellung",
                card1_li7: "XML-spezifizierter Speicher für wiederverwendbare Metadaten",
                card1_3: "Eine Schnittstellenschicht (Ressourcenpool) stellt die Datenbankverbindung bereit. Es wurden verschiedene Datenbanksysteme bedient, z.B. DB2, Oracle, SQL-Server, Adabas  ",
                card1_4: "Es gibt eine serverübergreifende Kommunikation, die auch eine vollständige Überwachung von Remote-Servern und eine zentralisierte Softwareverteilung ermöglicht. Alle verfügbaren System-Builds werden auf dem Software-Server gespeichert. Die Pflege der zentralen System-Builds im Repository folgt ebenfalls dem XML-Standard."
            },

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
