/* ==========================================================================
   ROMANTIC BIRTHDAY WEBSITE ENGINE (SONALI ❤️)
   ========================================================================== */

// Target Birthday Unlock Date: 29 July 12:00 AM
const TARGET_MONTH = 6; // July is 6 (0-indexed in JS Dates: Jan=0, Feb=1... Jul=6)
const TARGET_DAY = 29;
const TARGET_HOUR = 0;
const TARGET_MINUTE = 0;
const TARGET_SECOND = 0;

// Passcode for the Secret Letter
const SECRET_PASSCODE = 'shagor';

// ==========================================================================
// TRANSLATION DICTIONARY (English & Bengali)
// ==========================================================================
const TRANSLATIONS = {
    en: {
        countdownTitle: "A Special Surprise Is Waiting For You ❤️",
        countdownSubtitle: "Every second brings us closer to your special day.",
        labelDays: "Days",
        labelHours: "Hours",
        labelMinutes: "Minutes",
        labelSeconds: "Seconds",
        birthdayDateTag: '<i class="fa-regular fa-calendar-heart"></i> Birthday Date: <span>29 July, 12:00 AM</span>',
        countdownFooter: "Come back on 29 July at 12:00 AM to unlock your surprise.",
        tapInstruction: "Click the gift to open your surprise... ✨",
        typewriterTitle: "🎉 Happy Birthday My Princess ❤️",
        typewriterSubtitle: "To My Beautiful Sonali",
        trackName: "Romantic Birthday Theme",
        artistName: "For Sonali ❤️",

        // Site Content
        heroGreeting: "Happy Birthday",
        heroName: "Sonali ❤️",
        heroTagline: "To the girl who holds the key to my heart, the reason for my smiles, and my forever princess. Today, we celebrate your magical existence.",
        scrollIndicator: "Scroll to begin our story",

        loveLetterTitle: "My <span>Love Letter</span>",
        loveLetterPaper: `<h3>My Dearest Sonali,</h3>
                        <p>From the moment you stepped into my life, you colored my world with hues of joy I never knew existed. Your presence is a warm embrace, your smile is my ultimate inspiration, and your kindness is a gentle light that guides me.</p>
                        <p>On this incredibly special day, your birthday, I want to thank you for simply being you. You make every ordinary moment feel extraordinary, and you deserve a lifetime of smiles, peace, and beautiful dreams.</p>
                        <p>I promise to cherish you, stand by you, and write endless pages of our love story together. May this year be as spectacular, radiant, and lovely as you are.</p>
                        <p class="signature">Forever Yours,<br>Shagor ❤️</p>`,

        galleryTitle: "Moments of <span>Beauty</span>",
        galleryPhotos: [
            { url: 'assets/images/IMG_20220214_171330.jpg', caption: "Valentine's Day memories that I cherish forever... 💖" },
            { url: 'assets/images/IMG_20231030_160905.jpg', caption: 'Hand in hand, writing our beautiful story... 🤝✨' },
            { url: 'assets/images/IMG-20260508-WA0051.jpg', caption: 'Your lovely smile that lights up my entire world... 😊❤️' },
            { url: 'assets/images/IMG-20260611-WA0007.jpg', caption: 'The sweet, quiet moments we share together... 🌸' },
            { url: 'assets/images/IMG-20260611-WA0009.jpg', caption: 'Under the starry sky, my heart belongs to you... 🌌' },
            { url: 'assets/images/IMG-20260611-WA0012.jpg', caption: 'Every laugh shared with you is a memory I keep... 💕' },
            { url: 'assets/images/IMG-20260611-WA0025.jpg', caption: 'Together is my favorite place to be... 🏡❤️' },
            { url: 'assets/images/Messenger_creation_1B8745B1-75EF-4B20-9D19-CBFD3F98BA0B.jpeg', caption: 'Cozy nights and endless conversations... ☕' },
            { url: 'assets/images/Messenger_creation_1FF8252E-A7D0-4AA6-9484-6606E7E11751.jpeg', caption: 'To the one who makes my heart skip a beat... 💓' },
            { url: 'assets/images/received_435197221355993.jpeg', caption: 'Our love, growing warmer with every single day... 🌹' }
        ],

        timelineTitle: "Our Love <span>Timeline</span>",
        memories: [
            { date: 'First Connection', title: 'The Spark That Changed Everything', desc: 'A simple conversation that sparked an electric connection, starting our journey together.' },
            { date: 'Our First Date', title: 'Butterflies & Endless Laughter', desc: 'Staring into your beautiful eyes, time stood completely still, and I knew you were the one.' },
            { date: 'Unforgettable Journeys', title: 'Hand in Hand, Side by Side', desc: 'Exploring new paths, sharing secrets, and building a vault of memories that only we hold.' },
            { date: 'The Present & Beyond', title: 'Forever Growing Together', desc: 'Celebrating your birthday today, and looking forward to an eternity of loving you.' }
        ],

        reasonsTitle: "Reasons I <span>Love You</span>",
        reasons: [
            { icon: 'fa-heart-pulse', title: 'Your Kind Heart', desc: 'The gentle, selfless way you care for everyone around you, bringing light into their lives.' },
            { icon: 'fa-wand-magic-sparkles', title: 'Your Magic Smile', desc: 'One smile from you instantly dispels my worries and brightens up my entire universe.' },
            { icon: 'fa-handshake-angle', title: 'Your Endless Support', desc: 'How you believe in me even when I doubt myself, standing as my pillar of strength.' },
            { icon: 'fa-music', title: 'Your Laughter', desc: 'The sweetest, most musical sound that brings pure happiness to my soul.' },
            { icon: 'fa-shield-halved', title: 'Your Strength', desc: 'The elegant courage and grace with which you handle life\'s challenges, inspiring me daily.' },
            { icon: 'fa-infinity', title: 'Just Being You', desc: 'You are my best friend, my soulmate, and my greatest adventure. I love you exactly as you are.' }
        ],

        quotes: [
            { text: '“In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.”', author: 'Maya Angelou' },
            { text: '“If I had a flower for every time I thought of you... I could walk through my garden forever.”', author: 'Alfred Tennyson' },
            { text: '“I look at you and see the rest of my life in your eyes.”', author: 'Unknown' },
            { text: '“You are my today and all of my tomorrows.”', author: 'Leo Christopher' }
        ],

        wishJarTitle: "Interactive <span>Wish Jar</span>",
        jarHint: "Tap the glowing wishes inside the jar to reveal warm messages...",
        jarWishes: [
            'May your eyes always shine with happiness and your beautiful smile never fade. Happy Birthday, Sonali! 🌸',
            'I wish for us to share a lifetime of stargazing, cozy coffees, and endless warmth. ❤️',
            'May this year bring you all the success, peacefulness, and joy your sweet heart deserves! 🌟',
            'I wish to be by your side for every single birthday, reminding you of how deeply you are loved. 💍',
            'May all your dreams paint themselves into reality this year, my beautiful princess! 👑'
        ],
        wishJarClickedHint: "Tap on the glowing wishes inside the jar to reveal hidden wishes!",
        wishDisplayTitle: "A Wish For You",

        heartAnimTitle: "Send <span>Hearts</span>",
        heartCountPrefix: "You've sent ",
        heartCountSuffix: " hearts to Sonali!",
        heartSubtext: "Tap the heart to explode sparkles of love.",

        secretLetterTitle: "Top Secret Surprise Letter",
        secretLetterDesc: "Enter the secret passcode (boyfriend's name in lowercase) to unlock a personal surprise message.",
        secretLetterPlaceholder: "Enter password...",
        secretLetterBtn: "Unlock",
        secretLetterRevealedTitle: "A Secret Just For You...",
        secretLetterRevealedBody: `Sonali,
        
        You are my absolute favorite person in the entire universe. Every day with you is a blessing, and I couldn't be more thankful to walk this life with you.
        
        This website is a small token of my love, designed to show you that no matter the time, date, or distance, my heart will always count down the seconds to make you happy.
        
        Thank you for loving me. Thank you for your warmth.
        
        Happy Birthday, My Princess. I love you to the moon and back, forever and ever.
        
        Forever Yours,
        Shagor ❤️`,

        endingTitle: "Forever Yours ❤️",
        endingText: "No matter how many years go by, or how much the stars rotate in the sky, my love for you remains unchanging.",
        endingReplayBtn: "Replay Magical Opening",
        endingFooter: "Designed with endless love for Sonali ❤️ | 29 July"
    },
    bn: {
        countdownTitle: "তোমার জন্য একটি বিশেষ চমক অপেক্ষা করছে ❤️",
        countdownSubtitle: "প্রতিটি মুহূর্ত আমাদের তোমার বিশেষ দিনের আরও কাছে নিয়ে আসছে।",
        labelDays: "দিন",
        labelHours: "ঘণ্টা",
        labelMinutes: "মিনিট",
        labelSeconds: "সেকেন্ড",
        birthdayDateTag: '<i class="fa-regular fa-calendar-heart"></i> জন্মদিন: <span>২৯ জুলাই, রাত ১২:০০ মিনিট</span>',
        countdownFooter: "তোমার সারপ্রাইজটি আনলক করতে ২৯ জুলাই রাত ১২:০০ মিনিটে ফিরে আসো।",
        tapInstruction: "সারপ্রাইজটি দেখতে উপহারের বাক্সে ক্লিক করো... ✨",
        typewriterTitle: "🎉 শুভ জন্মদিন আমার রাজকুমারী ❤️",
        typewriterSubtitle: "আমার মিষ্টি সোনালীর জন্য",
        trackName: "রোমান্টিক বার্থডে থিম",
        artistName: "সোনালীর জন্য ❤️",

        // Site Content
        heroGreeting: "শুভ জন্মদিন",
        heroName: "সোনালী ❤️",
        heroTagline: "যে আমার হৃদয়ের চাবিকাঠি ধরে রেখেছে, আমার হাসির কারণ, এবং আমার চিরকালের রাজকুমারী। আজ আমরা তোমার জাদুকরী অস্তিত্ব উদযাপন করছি।",
        scrollIndicator: "আমাদের গল্প দেখতে স্ক্রল করো",

        loveLetterTitle: "আমার <span>প্রেমপত্র</span>",
        loveLetterPaper: `<h3>আমার প্রিয় সোনালী,</h3>
                        <p>যেদিন তুমি আমার জীবনে এসেছিলে, সেদিন আমার পৃথিবীকে আনন্দের এমন রঙে রাঙিয়ে দিয়েছিলে যা আমি আগে কখনো জানতাম না। তোমার উপস্থিতি একটি উষ্ণ আলিঙ্গন, তোমার হাসি আমার শেষ অনুপ্রেরণা, এবং তোমার দয়া একটি মৃদু আলো যা আমাকে পথ দেখায়।</p>
                        <p>এই অবিশ্বাস্য বিশেষ দিনে, তোমার জন্মদিনে, আমি তোমাকে ধন্যবাদ জানাতে চাই শুধু তুমি হওয়ার জন্য। তুমি প্রতিটা সাধারণ মুহূর্তকে অসাধারণ করে তোলো, এবং তুমি আজীবন হাসি, শান্তি আর সুন্দর স্বপ্নের যোগ্য।</p>
                        <p>আমি তোমাকে লালন করার, তোমার পাশে থাকার এবং আমাদের ভালোবাসার গল্পের অন্তহীন পাতা লেখার প্রতিশ্রুতি দিচ্ছি। এই বছরটি যেন তোমার মতোই চমৎকার, উজ্জ্বল এবং সুন্দর হোক।</p>
                        <p class="signature">চিরকাল তোমারই,<br>সাগর ❤️</p>`,

        galleryTitle: "সৌন্দর্যের <span>মুহূর্তগুলো</span>",
        galleryPhotos: [
            { url: 'assets/images/IMG_20220214_171330.jpg', caption: 'ভ্যালেন্টাইনস ডে-র স্মৃতি যা আমি চিরকাল আগলে রাখবো... 💖' },
            { url: 'assets/images/IMG_20231030_160905.jpg', caption: 'হাতে হাত রেখে, আমাদের সুন্দর গল্প লেখা... 🤝✨' },
            { url: 'assets/images/IMG-20260508-WA0051.jpg', caption: 'তোমার মিষ্টি হাসি যা আমার পুরো পৃথিবীকে আলোকিত করে... 😊❤️' },
            { url: 'assets/images/IMG-20260611-WA0007.jpg', caption: 'আমাদের কাটানো মিষ্টি ও শান্ত মুহূর্তগুলো... 🌸' },
            { url: 'assets/images/IMG-20260611-WA0009.jpg', caption: 'তারাময় আকাশের নিচে, আমার হৃদয় শুধুই তোমার... 🌌' },
            { url: 'assets/images/IMG-20260611-WA0012.jpg', caption: 'তোমার সাথে ভাগ করে নেওয়া প্রতিটি হাসি আমার অমূল্য স্মৃতি... 💕' },
            { url: 'assets/images/IMG-20260611-WA0025.jpg', caption: 'তোমার পাশে থাকাই আমার সবচেয়ে প্রিয় জায়গা... 🏡❤️' },
            { url: 'assets/images/Messenger_creation_1B8745B1-75EF-4B20-9D19-CBFD3F98BA0B.jpeg', caption: 'উষ্ণ রাত আর আমাদের অন্তহীন গল্পগুজব... ☕' },
            { url: 'assets/images/Messenger_creation_1FF8252E-A7D0-4AA6-9484-6606E7E11751.jpeg', caption: 'যে আমার হৃদস্পন্দন বাড়িয়ে দেয় তার জন্য... 💓' },
            { url: 'assets/images/received_435197221355993.jpeg', caption: 'আমাদের ভালোবাসা, প্রতিদিন আরও বেশি গভীর হচ্ছে... 🌹' }
        ],

        timelineTitle: "আমাদের ভালোবাসার <span>টাইমলাইন</span>",
        memories: [
            { date: 'প্রথম পরিচয়', title: 'যে স্পার্ক সবকিছু বদলে দিয়েছিল', desc: 'একটি সাধারণ কথোপকথন যা আমাদের মধ্যে একটি তীব্র আকর্ষণ তৈরি করেছিল, আমাদের একসাথে পথ চলা শুরু হয়েছিল।' },
            { date: 'আমাদের প্রথম ডেট', title: 'হৃদস্পন্দন আর অন্তহীন হাসি', desc: 'তোমার সুন্দর চোখের দিকে তাকিয়ে সময় সম্পূর্ণ থমকে গিয়েছিল, এবং আমি জানতাম তুমিই সেই বিশেষ মানুষ।' },
            { date: 'অবিশ্বাস্য ভ্রমণ', title: 'হাতে হাত রেখে, পাশাপাশি', desc: 'নতুন পথ অন্বেষণ করা, গোপন কথা ভাগ করে নেওয়া, এবং স্মৃতির একটি ভাণ্ডার গড়ে তোলা যা কেবল আমাদের।' },
            { date: 'বর্তমান ও ভবিষ্যৎ', title: 'চিরকাল একসাথে বেড়ে ওঠা', desc: 'আজ তোমার জন্মদিন উদযাপন করছি, এবং তোমাকে চিরকাল ভালোবাসার জন্য অধীর আগ্রহে অপেক্ষা করছি।' }
        ],

        reasonsTitle: "তোমাকে ভালোবাসার <span>কারণগুলো</span>",
        reasons: [
            { icon: 'fa-heart-pulse', title: 'তোমার সদয় হৃদয়', desc: 'তোমার চারপাশের সবার যত্ন নেওয়ার সেই কোমল, নিঃস্বার্থ উপায়, যা তাদের জীবনে আলো নিয়ে আসে।' },
            { icon: 'fa-wand-magic-sparkles', title: 'তোমার জাদুকরী হাসি', desc: 'তোমার একটা হাসি নিমেষেই আমার সব দুশ্চিন্তা দূর করে দেয় এবং আমার পুরো মহাবিশ্বকে উজ্জ্বল করে তোলে।' },
            { icon: 'fa-handshake-angle', title: 'তোমার অন্তহীন সমর্থন', desc: 'আমি যখন নিজের ওপর সন্দেহ করি তখন তুমি যেভাবে আমার ওপর বিশ্বাস রাখো, আমার শক্তির স্তম্ভ হয়ে দাঁড়াও।' },
            { icon: 'fa-music', title: 'তোমার হাসি', desc: 'সবচেয়ে মিষ্টি, সবচেয়ে সুরেলা শব্দ যা আমার আত্মায় বিশুদ্ধ সুখ নিয়ে আসে।' },
            { icon: 'fa-shield-halved', title: 'তোমার শক্তি', desc: 'যে মার্জিত সাহসিকতা এবং অনুগ্রহের সাথে তুমি জীবনের চ্যালেঞ্জগুলো মোকাবেলা করো, তা আমাকে প্রতিদিন অনুপ্রাণিত করে।' },
            { icon: 'fa-infinity', title: 'শুধু তুমি হওয়ার জন্য', desc: 'তুমি আমার সেরা বন্ধু, আমার জীবনসঙ্গী এবং আমার সবচেয়ে বড় অ্যাডভেঞ্চার। তুমি যেমন আছ, আমি ঠিক তেমনই তোমাকে ভালোবাসি।' }
        ],

        quotes: [
            { text: '“সারা বিশ্বে আমার জন্য তোমার মতো কোনো হৃদয় নেই। সারা বিশ্বে তোমার জন্য আমার মতো কোনো ভালোবাসা নেই।”', author: 'মায়া অ্যাঞ্জেলো' },
            { text: '“আমি যতবার তোমার কথা ভাবি ততবার যদি একটি করে ফুল পেতাম... তবে আমি চিরকাল আমার বাগানে হাঁটতে পারতাম।”', author: 'আলফ্রেড টেনিসন' },
            { text: '“আমি তোমার দিকে তাকাই এবং তোমার চোখের মধ্যে আমার বাকি জীবন দেখতে পাই।”', author: 'অজানা' },
            { text: '“তুমি আমার আজকের দিন এবং আমার সব আগামী দিন।”', author: 'লিও ক্রিস্টোফার' }
        ],

        wishJarTitle: "ইন্টারেক্টিভ <span>ইচ্ছার জার</span>",
        jarHint: "জারের ভিতরের জ্বলজ্বলে ইচ্ছাগুলোতে ট্যাপ করে ভালোবাসার বার্তাগুলো উন্মোচন করো...",
        jarWishes: [
            'তোমার চোখ যেন সবসময় সুখে উজ্জ্বল থাকে এবং তোমার সুন্দর হাসি যেন কখনো মলিন না হয়। শুভ জন্মদিন, সোনালী! 🌸',
            'আমি কামনা করি আমরা আজীবন একসাথে তারা গোনা, কফি খাওয়া এবং অন্তহীন উষ্ণতা ভাগ করে নিই। ❤️',
            'এই বছরটি তোমার মিষ্টি হৃদয়ের যোগ্য সব সাফল্য, শান্তি এবং আনন্দ বয়ে আনুক! 🌟',
            'আমি তোমার প্রতিটা জন্মদিনে তোমার পাশে থাকতে চাই, তোমাকে মনে করিয়ে দিতে চাই যে তোমাকে কতটা গভীরভাবে ভালোবাসা হয়। 💍',
            'এই বছর তোমার সব স্বপ্ন যেন বাস্তবে রূপ নেয়, আমার সুন্দর রাজকুমারী! 👑'
        ],
        wishJarClickedHint: "লুকানো ইচ্ছাগুলো দেখতে জারের ভিতরে জ্বলজ্বলে সোনালী বিন্দুগুলোতে ট্যাপ করো!",
        wishDisplayTitle: "তোমার জন্য একটি ইচ্ছা",

        heartAnimTitle: "ভালোবাসা <span>পাঠাও</span>",
        heartCountPrefix: "তুমি সোনালীকে ",
        heartCountSuffix: " টি হৃদয় পাঠিয়েছ!",
        heartSubtext: "ভালোবাসার কণা ছড়াতে হৃদয়ে ট্যাপ করো।",

        secretLetterTitle: "অত্যন্ত গোপন সারপ্রাইজ চিঠি",
        secretLetterDesc: "গোপন বার্তাটি আনলক করতে পাসকোডটি প্রবেশ করাও (ছোট হাতের অক্ষরে তোমার প্রেমিকের নাম)।",
        secretLetterPlaceholder: "পাসওয়ার্ড দাও...",
        secretLetterBtn: "আনলক করো",
        secretLetterRevealedTitle: "শুধু তোমার জন্য একটি গোপন কথা...",
        secretLetterRevealedBody: `সোনালী,
        
        তুমি এই পুরো মহাবিশ্বে আমার সবচেয়ে প্রিয় মানুষ। তোমার সাথে কাটানো প্রতিটি দিন একটি আশীর্বাদ, এবং এই জীবনপথে তোমার সাথে হাঁটতে পারার জন্য আমি কৃতজ্ঞতার শেষ নেই।
        
        এই ওয়েবসাইটটি আমার ভালোবাসার একটি ছোট উপহার, যা তোমাকে দেখানোর জন্য ডিজাইন করা হয়েছে যে সময়, তারিখ বা দূরত্ব যাই হোক না কেন, আমার হৃদয় সবসময় তোমাকে সুখী করার সেকেন্ডগুলো গণনা করবে।
        
        আমাকে ভালোবাসার জন্য ধন্যবাদ। তোমার উষ্ণতার জন্য ধন্যবাদ।
        
        শুভ জন্মদিন, আমার রাজকুমারী। আমি তোমাকে চাঁদের সমান এবং তার চেয়েও বেশি ভালোবাসি, চিরকাল এবং সর্বদা।
        
        তোমারই,
        সাগর ❤️`,

        endingTitle: "চিরকাল তোমারই ❤️",
        endingText: "যত বছরই কেটে যাক না কেন, বা আকাশে নক্ষত্ররা যেভাবে ঘুরুক না কেন, তোমার প্রতি আমার ভালোবাসা অপরিবর্তিত থাকবে।",
        endingReplayBtn: "জাদুকরী ওপেনিং পুনরায় দেখো",
        endingFooter: "সোনালীর জন্য অন্তহীন ভালোবাসা দিয়ে তৈরি ❤️ | ২৯ জুলাই"
    }
};

// Language State
let currentLang = localStorage.getItem('birthdayLang') || 'en';

// Audio State
let audioContext = null;
let isAudioSynthPlaying = false;
let currentSynthNote = 0;
let audioTimeout = null;
let musicUnlocked = false;

// Audio Fallback Synthesizer (Programmatic Web Audio API)
function getAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

// Programmatic Magical Chime Sound
function playMagicalChimeSynth() {
    try {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') ctx.resume();

        const now = ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98]; // C5, E5, G5, C6, E6, G6 (Arpeggio)

        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.1);

            gainNode.gain.setValueAtTime(0, now + idx * 0.1);
            gainNode.gain.linearRampToValueAtTime(0.2, now + idx * 0.1 + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.1 + 0.6);

            osc.connect(gainNode);
            gainNode.connect(ctx.destination);

            osc.start(now + idx * 0.1);
            osc.stop(now + idx * 0.1 + 0.7);
        });
    } catch (e) {
        console.warn('Web Audio Chime failed:', e);
    }
}

// Programmatic Lullaby / Happy Birthday Synth Loop
const HAPPY_BIRTHDAY_MELODY = [
    { note: 261.63, dur: 0.4 }, { note: 261.63, dur: 0.2 }, { note: 293.66, dur: 0.6 }, { note: 261.63, dur: 0.6 }, { note: 349.23, dur: 0.6 }, { note: 329.63, dur: 1.2 },
    { note: 261.63, dur: 0.4 }, { note: 261.63, dur: 0.2 }, { note: 293.66, dur: 0.6 }, { note: 261.63, dur: 0.6 }, { note: 392.00, dur: 0.6 }, { note: 349.23, dur: 1.2 },
    { note: 261.63, dur: 0.4 }, { note: 261.63, dur: 0.2 }, { note: 523.25, dur: 0.6 }, { note: 440.00, dur: 0.6 }, { note: 349.23, dur: 0.6 }, { note: 329.63, dur: 0.6 }, { note: 293.66, dur: 0.8 },
    { note: 466.16, dur: 0.4 }, { note: 466.16, dur: 0.2 }, { note: 440.00, dur: 0.6 }, { note: 349.23, dur: 0.6 }, { note: 392.00, dur: 0.6 }, { note: 349.23, dur: 1.2 }
];

function playNextBgmNote() {
    if (!isAudioSynthPlaying) return;

    try {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') ctx.resume();

        const item = HAPPY_BIRTHDAY_MELODY[currentSynthNote];
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'triangle'; // Soft flute/music box sound
        osc.frequency.setValueAtTime(item.note, ctx.currentTime);

        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + item.dur * 0.9);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + item.dur);

        currentSynthNote = (currentSynthNote + 1) % HAPPY_BIRTHDAY_MELODY.length;
        audioTimeout = setTimeout(playNextBgmNote, item.dur * 1000 + 50);
    } catch (e) {
        console.warn('BGM Synth note failed:', e);
    }
}

function startBgmSynth() {
    isAudioSynthPlaying = true;
    currentSynthNote = 0;
    playNextBgmNote();
}

function stopBgmSynth() {
    isAudioSynthPlaying = false;
    if (audioTimeout) clearTimeout(audioTimeout);
}

// Global Audio Playback Wrapper
function playUnlockSound() {
    const sound = document.getElementById('audio-unlock-sound');
    sound.volume = 0.8;
    const playPromise = sound.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Audio file autoplay blocked/failed. Using fallback Web Audio synth.");
            playMagicalChimeSynth();
        });
    }
}

function startBgmMusic() {
    musicUnlocked = true;
    const bgm = document.getElementById('audio-bgm');
    bgm.loop = false;
    bgm.volume = 0.5;

    const playPromise = bgm.play();
    document.getElementById('global-music-player').classList.remove('hidden');
    document.getElementById('global-music-player').classList.add('playing');

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("BGM file playback failed. Initializing synthesizer fallback.");
            startBgmSynth();
        });
    }
}

function toggleBgmPlayState() {
    const bgm = document.getElementById('audio-bgm');
    const playerHud = document.getElementById('global-music-player');
    const playBtn = document.getElementById('player-play-btn');

    if (isAudioSynthPlaying) {
        stopBgmSynth();
        playerHud.classList.remove('playing');
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else if (!bgm.paused) {
        bgm.pause();
        playerHud.classList.remove('playing');
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        const playPromise = bgm.play();
        playerHud.classList.add('playing');
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                startBgmSynth();
            });
        }
    }
}

// ==========================================================================
// DYNAMIC WEB SITE GENERATION (Multilingual Support)
// ==========================================================================
function getBirthdayHtml() {
    const t = TRANSLATIONS[currentLang];

    // Generate Polaroid Gallery Cards
    let galleryHtml = '';
    t.galleryPhotos.forEach((photo, idx) => {
        const rotation = (idx % 3 === 0) ? '-3deg' : (idx % 3 === 1) ? '3deg' : '-1.5deg';
        galleryHtml += `
            <div class="polaroid" style="--rotation: ${rotation}" onclick="openLightbox('${photo.url}', \`${photo.caption.replace(/'/g, "\\'")}\`)" data-aos="zoom-in" data-aos-delay="${idx * 150}">
                <img src="${photo.url}" alt="Sonali Memory">
                <div class="polaroid-caption">${photo.caption}</div>
            </div>
        `;
    });

    // Generate Timeline Items
    let timelineHtml = '';
    t.memories.forEach((m, idx) => {
        const dir = (idx % 2 === 0) ? 'timeline-left' : 'timeline-right';
        const aosType = (idx % 2 === 0) ? 'fade-right' : 'fade-left';
        timelineHtml += `
            <div class="timeline-item ${dir}">
                <div class="timeline-content glassmorphic" data-aos="${aosType}">
                    <span class="timeline-date">${m.date}</span>
                    <h3>${m.title}</h3>
                    <p>${m.desc}</p>
                </div>
            </div>
        `;
    });

    // Generate Reasons Cards
    let reasonsHtml = '';
    t.reasons.forEach((r, idx) => {
        reasonsHtml += `
            <div class="flip-card" data-aos="flip-up" data-aos-delay="${idx * 100}">
                <div class="flip-card-inner">
                    <div class="flip-card-front glassmorphic">
                        <i class="fa-solid ${r.icon}"></i>
                        <h3>${r.title}</h3>
                    </div>
                    <div class="flip-card-back">
                        <p>${r.desc}</p>
                    </div>
                </div>
            </div>
        `;
    });

    // Generate Quote slides
    let quotesHtml = '';
    t.quotes.forEach((q, idx) => {
        const active = (idx === 0) ? 'active' : '';
        quotesHtml += `
            <div class="quote-slide ${active}" id="quote-slide-${idx}">
                <i class="fa-solid fa-quote-left quote-icon"></i>
                <p class="quote-text">${q.text}</p>
                <p class="quote-author">- ${q.author}</p>
            </div>
        `;
    });

    let dotsHtml = '';
    t.quotes.forEach((_, idx) => {
        const active = (idx === 0) ? 'active' : '';
        dotsHtml += `<span class="dot ${active}" onclick="setQuoteSlide(${idx})"></span>`;
    });

    return `
        <!-- 1. HERO SECTION -->
        <section id="hero" class="hero-wrapper">
            <div class="hero-greeting" data-aos="fade-down" data-aos-duration="1500">${t.heroGreeting}</div>
            <div class="hero-name" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">${t.heroName}</div>
            <p class="hero-tagline" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">${t.heroTagline}</p>
            <div class="scroll-indicator" onclick="scrollToSection('love-letter')">
                <span>${t.scrollIndicator}</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
        </section>

        <!-- 2. LOVE LETTER SECTION -->
        <section id="love-letter" class="birthday-section">
            <h2 class="section-title">${t.loveLetterTitle}</h2>
            <div class="envelope-container" data-aos="zoom-in" data-aos-duration="1200">
                <div class="envelope-wrapper" id="envelope-letter" onclick="toggleEnvelope()">
                    <div class="envelope-flap"></div>
                    <div class="envelope-pocket"></div>
                    <div class="envelope-seal" id="envelope-seal">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <div class="letter-paper">
                        ${t.loveLetterPaper}
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. PHOTO GALLERY -->
        <section id="photo-gallery" class="birthday-section">
            <h2 class="section-title">${t.galleryTitle}</h2>
            <div class="gallery-grid">
                ${galleryHtml}
            </div>
        </section>

        <!-- 4. TIMELINE OF MEMORIES -->
        <section id="timeline" class="birthday-section">
            <h2 class="section-title">${t.timelineTitle}</h2>
            <div class="timeline-container">
                ${timelineHtml}
            </div>
        </section>

        <!-- 5. REASONS I LOVE YOU -->
        <section id="reasons" class="birthday-section">
            <h2 class="section-title">${t.reasonsTitle}</h2>
            <div class="reasons-container">
                ${reasonsHtml}
            </div>
        </section>

        <!-- 6. ROMANTIC QUOTES -->
        <section id="quotes" class="birthday-section">
            <div class="quotes-carousel glassmorphic" data-aos="fade-up">
                ${quotesHtml}
                <div class="carousel-dots">
                    ${dotsHtml}
                </div>
            </div>
        </section>

        <!-- 7. WISH JAR -->
        <section id="wish-jar" class="birthday-section">
            <h2 class="section-title">${t.wishJarTitle}</h2>
            <p class="jar-hint" data-aos="fade-up">${t.jarHint}</p>
            <div class="wish-jar-wrapper" data-aos="zoom-in">
                <div class="jar-svg-container" onclick="jarClicked(event)">
                    <svg class="jar-svg" viewBox="0 0 100 150">
                        <path d="M 30,10 L 70,10 L 70,22 C 70,22 88,25 88,50 L 88,125 C 88,142 75,145 50,145 C 25,145 12,142 12,125 L 12,50 C 12,25 30,22 30,22 Z" />
                        <path d="M 28,5 L 72,5 L 72,10 L 28,10 Z" style="fill: var(--accent-gold); stroke: var(--accent-gold); stroke-width: 1;" />
                    </svg>
                    <div class="floating-note" style="top: 15%; left: 35%; animation-delay: 0.1s;" onclick="revealWish(0, event)"></div>
                    <div class="floating-note" style="top: 30%; left: 55%; animation-delay: 2.2s;" onclick="revealWish(1, event)"></div>
                    <div class="floating-note" style="top: 45%; left: 25%; animation-delay: 1.5s;" onclick="revealWish(2, event)"></div>
                    <div class="floating-note" style="top: 60%; left: 65%; animation-delay: 0.7s;" onclick="revealWish(3, event)"></div>
                    <div class="floating-note" style="top: 70%; left: 40%; animation-delay: 3.5s;" onclick="revealWish(4, event)"></div>
                </div>
                
                <div class="wish-reveal-card glassmorphic hidden" id="wish-display">
                    <h4 id="wish-display-title">${t.wishDisplayTitle}</h4>
                    <p id="wish-text"></p>
                </div>
            </div>
        </section>

        <!-- 8. PULSING HEART ANIMATION -->
        <section id="heart-anim" class="birthday-section">
            <h2 class="section-title">${t.heartAnimTitle}</h2>
            <div class="heart-anim-wrapper">
                <div class="pulsing-3d-heart" onclick="beatingHeartClicked(event)">💖</div>
                <div class="heart-click-counter" id="heart-counter-container">${t.heartCountPrefix}<span id="heart-count-val">${heartClickCount}</span>${t.heartCountSuffix}</div>
                <div class="heart-subtext">${t.heartSubtext}</div>
            </div>
        </section>

        <!-- 9. SURPRISE SECRET LETTER -->
        <section id="surprise-letter" class="birthday-section">
            <div class="secret-lock-container glassmorphic" data-aos="zoom-in">
                <div id="secret-lock-ui">
                    <div class="lock-shield"><i class="fa-solid fa-lock"></i></div>
                    <h3>${t.secretLetterTitle}</h3>
                    <p>${t.secretLetterDesc}</p>
                    <div class="lock-input-group">
                        <input type="password" id="secret-passcode-field" class="secret-pass-input" placeholder="${t.secretLetterPlaceholder}">
                        <button class="secret-unlock-btn" onclick="validateSecretPass()">${t.secretLetterBtn}</button>
                    </div>
                </div>
                <div id="secret-letter-revealed" class="hidden">
                    <div class="revealed-letter-box">
                        <h4>${t.secretLetterRevealedTitle}</h4>
                        <p style="white-space: pre-line;">${t.secretLetterRevealedBody}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 10. ENDING SECTION -->
        <section class="birthday-section ending-wrapper">
            <h1 class="ending-title" data-aos="zoom-out">${t.endingTitle}</h1>
            <p class="ending-text" data-aos="fade-up">${t.endingText}</p>
            <button class="replay-button" onclick="replaySurprise()">${t.endingReplayBtn}</button>
            <div class="footer-note">${t.endingFooter}</div>
        </section>

        <!-- PHOTO LIGHTBOX -->
        <div id="photo-lightbox" onclick="closeLightbox()">
            <div class="lightbox-content" onclick="event.stopPropagation()">
                <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
                <img class="lightbox-img" id="lightbox-img" src="" alt="Zoomed memory">
                <div class="lightbox-caption" id="lightbox-caption"></div>
            </div>
        </div>
    `;
}

// Language Switcher Logic
function updateLanguageUI() {
    const t = TRANSLATIONS[currentLang];

    // Update countdown page titles
    const cdTitle = document.getElementById('countdown-title');
    const cdSubtitle = document.getElementById('countdown-subtitle');
    const lblDays = document.getElementById('label-days');
    const lblHours = document.getElementById('label-hours');
    const lblMinutes = document.getElementById('label-minutes');
    const lblSeconds = document.getElementById('label-seconds');
    const dateTag = document.getElementById('birthday-date-tag');
    const footerNote = document.getElementById('countdown-footer-note');
    const tapInstruct = document.getElementById('tap-instruction');

    if (cdTitle) cdTitle.innerText = t.countdownTitle;
    if (cdSubtitle) cdSubtitle.innerText = t.countdownSubtitle;
    if (lblDays) lblDays.innerText = t.labelDays;
    if (lblHours) lblHours.innerText = t.labelHours;
    if (lblMinutes) lblMinutes.innerText = t.labelMinutes;
    if (lblSeconds) lblSeconds.innerText = t.labelSeconds;
    if (dateTag) dateTag.innerHTML = t.birthdayDateTag;
    if (footerNote) footerNote.innerText = t.countdownFooter;
    if (tapInstruct) tapInstruct.innerText = t.tapInstruction;

    // Update player track details
    const trackName = document.getElementById('track-name');
    const artistName = document.getElementById('artist-name');
    if (trackName) trackName.innerText = t.trackName;
    if (artistName) artistName.innerText = t.artistName;

    // Update toggle button labels
    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) {
        if (currentLang === 'en') {
            langBtn.innerText = 'বাংলা';
        } else {
            langBtn.innerText = 'English';
        }
    }

    // Refresh dynamic site container content if unlocked
    const siteContainer = document.getElementById('birthday-website-container');
    if (siteContainer && siteContainer.classList.contains('active')) {
        siteContainer.innerHTML = getBirthdayHtml();

        // Reinitialize AOS on updated cards
        AOS.refresh();
        setQuoteSlide(quoteSlideIndex);
    }
}

function toggleLanguage() {
    currentLang = (currentLang === 'en') ? 'bn' : 'en';
    localStorage.setItem('birthdayLang', currentLang);
    updateLanguageUI();
}

// Export toggleLanguage to global window scope so it can be called from HTML onclick
window.toggleLanguage = toggleLanguage;

// Scroll Helper
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Lightbox controller
function openLightbox(url, caption) {
    const lightbox = document.getElementById('photo-lightbox');
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');
    img.src = url;
    cap.innerText = caption;
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('photo-lightbox').classList.remove('active');
}

// Interactive Envelope letter opener
function toggleEnvelope() {
    const envelope = document.getElementById('envelope-letter');
    envelope.classList.toggle('open');
}

// Quotes slideshow carousel
let quoteSlideIndex = 0;
let quoteInterval = null;

function setQuoteSlide(idx) {
    const slides = document.getElementsByClassName('quote-slide');
    const dots = document.getElementsByClassName('dot');
    if (slides.length === 0) return;

    quoteSlideIndex = idx;
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }
    slides[quoteSlideIndex].classList.add('active');
    dots[quoteSlideIndex].classList.add('active');
}

function startQuoteRotation() {
    if (quoteInterval) clearInterval(quoteInterval);
    quoteInterval = setInterval(() => {
        const slides = document.getElementsByClassName('quote-slide');
        if (slides.length === 0) return;
        let nextIdx = (quoteSlideIndex + 1) % slides.length;
        setQuoteSlide(nextIdx);
    }, 6000);
}

// Wish Jar interactive triggers
function revealWish(idx, event) {
    event.stopPropagation();
    const wishCard = document.getElementById('wish-display');
    const wishText = document.getElementById('wish-text');
    wishText.innerText = TRANSLATIONS[currentLang].jarWishes[idx];
    wishCard.classList.remove('hidden');

    confetti({
        particleCount: 20,
        spread: 30,
        origin: { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight },
        colors: ['#ffe600', '#ff7597', '#e5c060']
    });
}

function jarClicked(event) {
    const wishCard = document.getElementById('wish-display');
    const wishText = document.getElementById('wish-text');
    wishText.innerText = TRANSLATIONS[currentLang].wishJarClickedHint;
    wishCard.classList.remove('hidden');
}

// Beating heart click count & particle spawns
let heartClickCount = 0;
function beatingHeartClicked(event) {
    heartClickCount++;
    document.getElementById('heart-count-val').innerText = heartClickCount;

    const defaults = { spread: 360, ticks: 50, gravity: 0, decay: 0.94, startVelocity: 15, colors: ['#ff4d6d', '#ff7597', '#ff85a1', '#ff0a54'] };
    confetti({
        ...defaults,
        particleCount: 30,
        scalar: 1.2,
        shapes: ['heart'],
        origin: { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight }
    });
}

// Validate secret letter passcode
function validateSecretPass() {
    const field = document.getElementById('secret-passcode-field');
    const value = field.value.trim().toLowerCase();

    if (value === SECRET_PASSCODE) {
        document.getElementById('secret-lock-ui').classList.add('hidden');
        document.getElementById('secret-letter-revealed').classList.remove('hidden');
        confetti({
            particleCount: 50,
            spread: 60,
            colors: ['#d4af37', '#ff4d6d']
        });
    } else {
        field.classList.add('error-shake');
        setTimeout(() => {
            field.classList.remove('error-shake');
        }, 500);
    }
}

// Replay entire surprise sequence
function replaySurprise() {
    localStorage.removeItem('birthdayUnlocked');
    location.reload();
}

// Custom heart canvas shape helper for confetti library
const setupConfettiHearts = () => {
    if (typeof confetti === 'function') {
        // Registered shape hook
    }
};

// ==========================================================================
// BACKGROUND SYSTEMS (Three.js Cosmic Stars, Floating hearts, Canvas Fireworks)
// ==========================================================================

// 1. Three.js Starfield Canvas Background
let scene, camera, renderer, starPoints;
function initThreeStarfield() {
    const canvas = document.getElementById('starfield-canvas');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 250;

    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const starCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const pinkColor = new THREE.Color('#ff7597');
    const goldColor = new THREE.Color('#e5c060');
    const blueColor = new THREE.Color('#9d4edd');

    for (let i = 0; i < starCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 600;
        positions[i + 1] = (Math.random() - 0.5) * 600;
        positions[i + 2] = (Math.random() - 0.5) * 600;

        let randColor = Math.random();
        let starColor;
        if (randColor < 0.4) starColor = pinkColor;
        else if (randColor < 0.7) starColor = blueColor;
        else starColor = goldColor;

        colors[i] = starColor.r;
        colors[i + 1] = starColor.g;
        colors[i + 2] = starColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starTexture = new THREE.Texture(createCircleTexture());
    starTexture.needsUpdate = true;

    const material = new THREE.PointsMaterial({
        size: 2.5,
        map: starTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    starPoints = new THREE.Points(geometry, material);
    scene.add(starPoints);

    window.addEventListener('resize', onWindowResize, false);
    animateStarfield();
}

function createCircleTexture() {
    const matCanvas = document.createElement('canvas');
    matCanvas.width = 16;
    matCanvas.height = 16;
    const matContext = matCanvas.getContext('2d');
    const gradient = matContext.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    matContext.fillStyle = gradient;
    matContext.fillRect(0, 0, 16, 16);
    return matCanvas;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animateStarfield() {
    requestAnimationFrame(animateStarfield);
    if (starPoints) {
        starPoints.rotation.y += 0.0006;
        starPoints.rotation.x += 0.0003;
    }
    renderer.render(scene, camera);
}

// 2. Continuous Particle generator (Hearts & Rose Petals)
let petalInterval = null;
function startFallingParticles() {
    if (petalInterval) clearInterval(petalInterval);
    const container = document.getElementById('particles-container');

    petalInterval = setInterval(() => {
        const particle = document.createElement('div');
        const isHeart = Math.random() > 0.4;

        particle.style.position = 'absolute';
        particle.style.bottom = '-50px';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.zIndex = '3';
        particle.style.pointerEvents = 'none';

        if (isHeart) {
            particle.innerHTML = '❤️';
            particle.style.fontSize = Math.random() * 15 + 10 + 'px';
            particle.style.opacity = Math.random() * 0.4 + 0.3;
        } else {
            particle.innerHTML = '🌸';
            particle.style.fontSize = Math.random() * 18 + 12 + 'px';
            particle.style.opacity = Math.random() * 0.5 + 0.3;
        }

        container.appendChild(particle);

        gsap.to(particle, {
            y: -(window.innerHeight + 100),
            x: '+=' + ((Math.random() - 0.5) * 150),
            rotation: Math.random() * 360,
            duration: Math.random() * 6 + 5,
            ease: 'power1.out',
            onComplete: () => {
                particle.remove();
            }
        });
    }, 450);
}

// 3. Fireworks Engine on Canvas
let fireworksAnimId = null;
function runFireworksEngine() {
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];
    const particles = [];

    class Firework {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.tx = Math.random() * canvas.width;
            this.ty = Math.random() * (canvas.height * 0.5);
            this.dx = this.tx - this.x;
            this.dy = this.ty - this.y;
            this.dist = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
            this.speed = 4;
            this.angle = Math.atan2(this.dy, this.dx);
            this.velX = Math.cos(this.angle) * this.speed;
            this.velY = Math.sin(this.angle) * this.speed;
            this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        }

        update() {
            this.x += this.velX;
            this.y += this.velY;

            let curDx = this.tx - this.x;
            let curDy = this.ty - this.y;
            let curDist = Math.sqrt(curDx * curDx + curDy * curDy);

            if (curDist < 10) {
                this.explode();
                return false;
            }
            return true;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        explode() {
            const count = 40;
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(this.tx, this.ty, this.color));
            }
        }
    }

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.angle = Math.random() * Math.PI * 2;
            this.speed = Math.random() * 4 + 1;
            this.friction = 0.95;
            this.gravity = 0.07;
            this.alpha = 1;
            this.decay = Math.random() * 0.02 + 0.01;
            this.velX = Math.cos(this.angle) * this.speed;
            this.velY = Math.sin(this.angle) * this.speed;
        }

        update() {
            this.velX *= this.friction;
            this.velY *= this.friction;
            this.velY += this.gravity;
            this.x += this.velX;
            this.y += this.velY;
            this.alpha -= this.decay;
            return this.alpha > 0;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }
    }

    let lastLaunch = 0;
    function loop(timestamp) {
        fireworksAnimId = requestAnimationFrame(loop);

        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (timestamp - lastLaunch > 800) {
            fireworks.push(new Firework());
            lastLaunch = timestamp;
        }

        for (let i = fireworks.length - 1; i >= 0; i--) {
            if (!fireworks[i].update()) {
                fireworks.splice(i, 1);
            } else {
                fireworks[i].draw();
            }
        }

        for (let i = particles.length - 1; i >= 0; i--) {
            if (!particles[i].update()) {
                particles.splice(i, 1);
            } else {
                particles[i].draw();
            }
        }
    }

    requestAnimationFrame(loop);
}

function stopFireworksEngine() {
    if (fireworksAnimId) cancelAnimationFrame(fireworksAnimId);
}

// ==========================================================================
// COUNTDOWN & UNLOCK TIMELINE LOGIC
// ==========================================================================
let countdownInterval = null;

function checkBirthdayLock() {
    const urlParams = new URLSearchParams(window.location.search);
    const testMode = urlParams.get('test');

    if (testMode === 'unlock') {
        setupCountdown(true);
        return;
    }

    if (testMode === 'site') {
        unlockAndRenderSite(true);
        return;
    }

    const now = new Date();
    const targetDate = new Date(now.getFullYear(), TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE, TARGET_SECOND);
    const isUnlockedInStorage = localStorage.getItem('birthdayUnlocked') === 'true';

    if (now >= targetDate) {
        unlockAndRenderSite(true);
    } else {
        setupCountdown(false);
    }
}

// Setup Countdown clock
function setupCountdown(isTestUnlock) {
    const daysVal = document.getElementById('days');
    const hoursVal = document.getElementById('hours');
    const minutesVal = document.getElementById('minutes');
    const secondsVal = document.getElementById('seconds');

    const now = new Date();
    let targetTime;
    if (isTestUnlock) {
        targetTime = new Date().getTime() + 5000;
    } else {
        targetTime = new Date(now.getFullYear(), TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE, TARGET_SECOND).getTime();
    }

    const updateTimer = () => {
        const rightNow = new Date().getTime();
        const difference = targetTime - rightNow;

        if (difference <= 0) {
            clearInterval(countdownInterval);
            triggerUnlockSequence();
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        daysVal.innerText = String(days).padStart(2, '0');
        hoursVal.innerText = String(hours).padStart(2, '0');
        minutesVal.innerText = String(minutes).padStart(2, '0');
        secondsVal.innerText = String(seconds).padStart(2, '0');
    };

    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
}

// UNLOCK FLOW TIMELINE
function triggerUnlockSequence() {
    clearInterval(countdownInterval);

    const countdownScreen = document.getElementById('countdown-screen');
    const unlockOverlay = document.getElementById('unlock-overlay');
    const giftBoxWrapper = document.getElementById('gift-box-wrapper');

    gsap.to(countdownScreen, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            countdownScreen.classList.remove('active');
            unlockOverlay.classList.add('active');
            gsap.to(unlockOverlay, { opacity: 1, duration: 0.5 });

            playUnlockSound();
            giftBoxWrapper.classList.remove('hidden');
            gsap.fromTo(giftBoxWrapper,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: 'back.out(1.7)' }
            );
        }
    });

    const giftBox = document.getElementById('interactive-gift-box');
    giftBox.addEventListener('click', openGiftBoxAction, { once: true });
}

function openGiftBoxAction() {
    const giftBox = document.getElementById('interactive-gift-box');
    const giftBoxWrapper = document.getElementById('gift-box-wrapper');
    const greetingBanner = document.getElementById('greeting-banner');

    getAudioContext();

    gsap.to('#interactive-gift-box .gift-lid', {
        y: -100,
        x: 40,
        rotation: 45,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out'
    });

    gsap.to('#interactive-gift-box .gift-inner-glow', {
        opacity: 1,
        duration: 0.8
    });

    playUnlockSound();

    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });
        runFireworksEngine();
        startFallingParticles();

        gsap.to(giftBoxWrapper, {
            opacity: 0,
            scale: 0.5,
            duration: 0.8,
            onComplete: () => {
                giftBoxWrapper.classList.add('hidden');
                greetingBanner.classList.remove('hidden');

                startBgmMusic();
                typewriterSequence();
            }
        });
    }, 1000);
}

function typewriterSequence() {
    const titleEl = document.getElementById('typewriter-title');
    const subtitleEl = document.getElementById('typewriter-subtitle');

    const textTitle = TRANSLATIONS[currentLang].typewriterTitle;
    let charIdx = 0;

    gsap.fromTo(titleEl, { borderRightColor: 'rgba(255, 77, 109, 1)' }, { borderRightColor: 'rgba(255, 77, 109, 0)', repeat: -1, duration: 0.5, ease: 'steps(1)' });

    function typeChar() {
        if (charIdx < textTitle.length) {
            titleEl.textContent += textTitle.charAt(charIdx);
            titleEl.style.width = '100%';
            charIdx++;
            setTimeout(typeChar, 85);
        } else {
            titleEl.style.borderRight = 'none';

            subtitleEl.innerText = TRANSLATIONS[currentLang].typewriterSubtitle;
            subtitleEl.classList.add('visible');

            setTimeout(() => {
                revealBirthdayWebsite();
            }, 3500);
        }
    }

    setTimeout(typeChar, 500);
}

function revealBirthdayWebsite() {
    const unlockOverlay = document.getElementById('unlock-overlay');

    gsap.to(unlockOverlay, {
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
            unlockOverlay.classList.remove('active');
            stopFireworksEngine();
            unlockAndRenderSite(false);
        }
    });
}

function unlockAndRenderSite(isImmediate) {
    localStorage.setItem('birthdayUnlocked', 'true');

    const siteContainer = document.getElementById('birthday-website-container');
    const countdownScreen = document.getElementById('countdown-screen');

    siteContainer.innerHTML = getBirthdayHtml();

    if (isImmediate) {
        startFallingParticles();
        document.getElementById('global-music-player').classList.remove('hidden');

        const startMusicOnGesture = () => {
            startBgmMusic();
            window.removeEventListener('click', startMusicOnGesture);
            window.removeEventListener('touchstart', startMusicOnGesture);
        };
        window.addEventListener('click', startMusicOnGesture);
        window.addEventListener('touchstart', startMusicOnGesture);
    }

    countdownScreen.classList.remove('active');
    siteContainer.classList.add('active');

    if (!isImmediate) {
        gsap.from('#hero .hero-greeting', { opacity: 0, y: -50, duration: 1, delay: 0.2 });
        gsap.from('#hero .hero-name', { opacity: 0, y: 50, duration: 1.2, delay: 0.4 });
        gsap.from('#hero .hero-tagline', { opacity: 0, scale: 0.9, duration: 1, delay: 0.8 });
    }

    AOS.init({
        duration: 1000,
        once: false,
        offset: 120,
        easing: 'ease-out-back'
    });

    startQuoteRotation();
}

// Music Player HUD actions
document.getElementById('player-play-btn').addEventListener('click', toggleBgmPlayState);
document.getElementById('player-mute-btn').addEventListener('click', () => {
    const bgm = document.getElementById('audio-bgm');
    const muteIcon = document.querySelector('#player-mute-btn i');

    if (bgm.muted) {
        bgm.muted = false;
        muteIcon.className = 'fa-solid fa-volume-high';
    } else {
        bgm.muted = true;
        muteIcon.className = 'fa-solid fa-volume-xmark';
    }
});

document.getElementById('audio-bgm').addEventListener('timeupdate', (e) => {
    const bgm = e.target;
    const progress = document.getElementById('player-progress');
    if (bgm.duration) {
        const percentage = (bgm.currentTime / bgm.duration) * 100;
        progress.style.width = percentage + '%';
    }
});

document.querySelector('.progress-bar-container').addEventListener('click', (e) => {
    const bgm = document.getElementById('audio-bgm');
    if (bgm.duration) {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = clickX / width;
        bgm.currentTime = percentage * bgm.duration;
    }
});

document.getElementById('global-music-player').addEventListener('click', (e) => {
    e.currentTarget.classList.add('expanded');
    e.stopPropagation();
});

document.addEventListener('click', () => {
    document.getElementById('global-music-player').classList.remove('expanded');
});

// ==========================================================================
// START INITIALIZATION
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
    updateLanguageUI();
    setupConfettiHearts();
    initThreeStarfield();
    checkBirthdayLock();

    AOS.init({
        duration: 1000,
        once: false,
        offset: 120,
        easing: 'ease-out-back'
    });
});
