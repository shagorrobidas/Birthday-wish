/* ==========================================================================
   ROMANTIC BIRTHDAY WEBSITE ENGINE (SONALI ❤️)
   ========================================================================== */

// Target Birthday Unlock Date: 14 July 2:00 PM
const TARGET_MONTH = 6; // July is 6 (0-indexed in JS Dates: Jan=0, Feb=1... Jul=6)
const TARGET_DAY = 14;
const TARGET_HOUR = 16;
const TARGET_MINUTE = 25;
const TARGET_SECOND = 0;

// Passcode for the Secret Letter
const SECRET_PASSCODE = 'sonali';

// DEFAULT GALLERY IMAGES (Generated for Sonali)
// Using absolute paths pointing to the high-quality assets we generated
const GALLERY_PHOTOS = [
    {
        url: 'assets/images/IMG_20220214_171330.jpg',
        caption: 'Valentine\'s Day memories that I cherish forever... 💖'
    },
    {
        url: 'assets/images/IMG_20231030_160905.jpg',
        caption: 'Hand in hand, writing our beautiful story... 🤝✨'
    },
    {
        url: 'assets/images/IMG-20260508-WA0051.jpg',
        caption: 'Your lovely smile that lights up my entire world... 😊❤️'
    },
    {
        url: 'assets/images/IMG-20260611-WA0007.jpg',
        caption: 'The sweet, quiet moments we share together... 🌸'
    },
    {
        url: 'assets/images/IMG-20260611-WA0009.jpg',
        caption: 'Under the starry sky, my heart belongs to you... 🌌'
    },
    {
        url: 'assets/images/IMG-20260611-WA0012.jpg',
        caption: 'Every laugh shared with you is a memory I keep... 💕'
    },
    {
        url: 'assets/images/IMG-20260611-WA0025.jpg',
        caption: 'Together is my favorite place to be... 🏡❤️'
    },
    {
        url: 'assets/images/Messenger_creation_1B8745B1-75EF-4B20-9D19-CBFD3F98BA0B.jpeg',
        caption: 'Cozy nights and endless conversations... ☕'
    },
    {
        url: 'assets/images/Messenger_creation_1FF8252E-A7D0-4AA6-9484-6606E7E11751.jpeg',
        caption: 'To the one who makes my heart skip a beat... 💓'
    },
    {
        url: 'assets/images/received_435197221355993.jpeg',
        caption: 'Our love, growing warmer with every single day... 🌹'
    }
];

// Memory Timeline Data
const MEMORIES = [
    {
        date: 'First Connection',
        title: 'The Spark That Changed Everything',
        desc: 'A simple conversation that sparked an electric connection, starting our journey together.'
    },
    {
        date: 'Our First Date',
        title: 'Butterflies & Endless Laughter',
        desc: 'Staring into your beautiful eyes, time stood completely still, and I knew you were the one.'
    },
    {
        date: 'Unforgettable Journeys',
        title: 'Hand in Hand, Side by Side',
        desc: 'Exploring new paths, sharing secrets, and building a vault of memories that only we hold.'
    },
    {
        date: 'The Present & Beyond',
        title: 'Forever Growing Together',
        desc: 'Celebrating your birthday today, and looking forward to an eternity of loving you.'
    }
];

// Reasons I Love You Data
const REASONS = [
    { icon: 'fa-heart-pulse', title: 'Your Kind Heart', desc: 'The gentle, selfless way you care for everyone around you, bringing light into their lives.' },
    { icon: 'fa-wand-magic-sparkles', title: 'Your Magic Smile', desc: 'One smile from you instantly dispels my worries and brightens up my entire universe.' },
    { icon: 'fa-handshake-angle', title: 'Your Endless Support', desc: 'How you believe in me even when I doubt myself, standing as my pillar of strength.' },
    { icon: 'fa-music', title: 'Your Laughter', desc: 'The sweetest, most musical sound that brings pure happiness to my soul.' },
    { icon: 'fa-shield-halved', title: 'Your Strength', desc: 'The elegant courage and grace with which you handle life\'s challenges, inspiring me daily.' },
    { icon: 'fa-infinity', title: 'Just Being You', desc: 'You are my best friend, my soulmate, and my greatest adventure. I love you exactly as you are.' }
];

// Romantic Quotes
const QUOTES = [
    { text: '“In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.”', author: 'Maya Angelou' },
    { text: '“If I had a flower for every time I thought of you... I could walk through my garden forever.”', author: 'Alfred Tennyson' },
    { text: '“I look at you and see the rest of my life in your eyes.”', author: 'Unknown' },
    { text: '“You are my today and all of my tomorrows.”', author: 'Leo Christopher' }
];

// Sweet Jar Messages
const JAR_WISHES = [
    'May your eyes always shine with happiness and your beautiful smile never fade. Happy Birthday, Sonali! 🌸',
    'I wish for us to share a lifetime of stargazing, cozy coffees, and endless warmth. ❤️',
    'May this year bring you all the success, peacefulness, and joy your sweet heart deserves! 🌟',
    'I wish to be by your side for every single birthday, reminding you of how deeply you are loved. 💍',
    'May all your dreams paint themselves into reality this year, my beautiful princess! 👑'
];

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
    bgm.loop = false; // Instruction says: Play birthday music automatically (loop disabled)
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
// DYNAMIC WEB SITE GENERATION (Ensures code is not in source DOM beforehand)
// ==========================================================================
function getBirthdayHtml() {
    // Generate Polaroid Gallery Cards
    let galleryHtml = '';
    GALLERY_PHOTOS.forEach((photo, idx) => {
        // Alternating polaroid tilts for premium look
        const rotation = (idx % 3 === 0) ? '-3deg' : (idx % 3 === 1) ? '3deg' : '-1.5deg';
        galleryHtml += `
            <div class="polaroid" style="--rotation: ${rotation}" onclick="openLightbox('${photo.url}', '${photo.caption}')" data-aos="zoom-in" data-aos-delay="${idx * 150}">
                <img src="${photo.url}" alt="Sonali Memory">
                <div class="polaroid-caption">${photo.caption}</div>
            </div>
        `;
    });

    // Generate Timeline Items
    let timelineHtml = '';
    MEMORIES.forEach((m, idx) => {
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
    REASONS.forEach((r, idx) => {
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
    QUOTES.forEach((q, idx) => {
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
    QUOTES.forEach((_, idx) => {
        const active = (idx === 0) ? 'active' : '';
        dotsHtml += `<span class="dot ${active}" onclick="setQuoteSlide(${idx})"></span>`;
    });

    return `
        <!-- 1. HERO SECTION -->
        <section id="hero" class="hero-wrapper">
            <div class="hero-greeting" data-aos="fade-down" data-aos-duration="1500">Happy Birthday</div>
            <div class="hero-name" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">Sonali ❤️</div>
            <p class="hero-tagline" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                To the girl who holds the key to my heart, the reason for my smiles, and my forever princess. Today, we celebrate your magical existence.
            </p>
            <div class="scroll-indicator" onclick="scrollToSection('love-letter')">
                <span>Scroll to begin our story</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
        </section>

        <!-- 2. LOVE LETTER SECTION -->
        <section id="love-letter" class="birthday-section">
            <h2 class="section-title">My <span>Love Letter</span></h2>
            <div class="envelope-container" data-aos="zoom-in" data-aos-duration="1200">
                <div class="envelope-wrapper" id="envelope-letter" onclick="toggleEnvelope()">
                    <div class="envelope-flap"></div>
                    <div class="envelope-pocket"></div>
                    <div class="envelope-seal" id="envelope-seal">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <div class="letter-paper">
                        <h3>My Dearest Sonali,</h3>
                        <p>From the moment you stepped into my life, you colored my world with hues of joy I never knew existed. Your presence is a warm embrace, your smile is my ultimate inspiration, and your kindness is a gentle light that guides me.</p>
                        <p>On this incredibly special day, your birthday, I want to thank you for simply being you. You make every ordinary moment feel extraordinary, and you deserve a lifetime of smiles, peace, and beautiful dreams.</p>
                        <p>I promise to cherish you, stand by you, and write endless pages of our love story together. May this year be as spectacular, radiant, and lovely as you are.</p>
                        <p class="signature">Forever Yours,<br>Shagor ❤️</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. PHOTO GALLERY -->
        <section id="photo-gallery" class="birthday-section">
            <h2 class="section-title">Moments of <span>Beauty</span></h2>
            <div class="gallery-grid">
                ${galleryHtml}
            </div>
        </section>

        <!-- 4. TIMELINE OF MEMORIES -->
        <section id="timeline" class="birthday-section">
            <h2 class="section-title">Our Love <span>Timeline</span></h2>
            <div class="timeline-container">
                ${timelineHtml}
            </div>
        </section>

        <!-- 5. REASONS I LOVE YOU -->
        <section id="reasons" class="birthday-section">
            <h2 class="section-title">Reasons I <span>Love You</span></h2>
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
            <h2 class="section-title">Interactive <span>Wish Jar</span></h2>
            <p class="jar-hint" data-aos="fade-up">Tap the glowing wishes inside the jar to reveal warm messages...</p>
            <div class="wish-jar-wrapper" data-aos="zoom-in">
                <div class="jar-svg-container" onclick="jarClicked(event)">
                    <!-- Jar Visualized via SVG Path -->
                    <svg class="jar-svg" viewBox="0 0 100 150">
                        <!-- Jar Body -->
                        <path d="M 30,10 L 70,10 L 70,22 C 70,22 88,25 88,50 L 88,125 C 88,142 75,145 50,145 C 25,145 12,142 12,125 L 12,50 C 12,25 30,22 30,22 Z" />
                        <!-- Jar Lid -->
                        <path d="M 28,5 L 72,5 L 72,10 L 28,10 Z" style="fill: var(--accent-gold); stroke: var(--accent-gold); stroke-width: 1;" />
                    </svg>
                    <!-- Floating Bubbles (Wishes) inside -->
                    <div class="floating-note" style="top: 15%; left: 35%; animation-delay: 0.1s;" onclick="revealWish(0, event)"></div>
                    <div class="floating-note" style="top: 30%; left: 55%; animation-delay: 2.2s;" onclick="revealWish(1, event)"></div>
                    <div class="floating-note" style="top: 45%; left: 25%; animation-delay: 1.5s;" onclick="revealWish(2, event)"></div>
                    <div class="floating-note" style="top: 60%; left: 65%; animation-delay: 0.7s;" onclick="revealWish(3, event)"></div>
                    <div class="floating-note" style="top: 70%; left: 40%; animation-delay: 3.5s;" onclick="revealWish(4, event)"></div>
                </div>
                
                <div class="wish-reveal-card glassmorphic hidden" id="wish-display">
                    <h4>A Wish For You</h4>
                    <p id="wish-text"></p>
                </div>
            </div>
        </section>

        <!-- 8. PULSING HEART ANIMATION -->
        <section id="heart-anim" class="birthday-section">
            <h2 class="section-title">Send <span>Hearts</span></h2>
            <div class="heart-anim-wrapper">
                <div class="pulsing-3d-heart" onclick="beatingHeartClicked(event)">💖</div>
                <div class="heart-click-counter">You've sent <span id="heart-count-val">0</span> hearts to Sonali!</div>
                <div class="heart-subtext">Tap the heart to explode sparkles of love.</div>
            </div>
        </section>

        <!-- 9. SURPRISE SECRET LETTER -->
        <section id="surprise-letter" class="birthday-section">
            <div class="secret-lock-container glassmorphic" data-aos="zoom-in">
                <div id="secret-lock-ui">
                    <div class="lock-shield"><i class="fa-solid fa-lock"></i></div>
                    <h3>Top Secret Surprise Letter</h3>
                    <p>Enter the secret passcode (girlfriend's name in lowercase) to unlock a personal surprise message.</p>
                    <div class="lock-input-group">
                        <input type="password" id="secret-passcode-field" class="secret-pass-input" placeholder="Enter password...">
                        <button class="secret-unlock-btn" onclick="validateSecretPass()">Unlock</button>
                    </div>
                </div>
                <div id="secret-letter-revealed" class="hidden">
                    <div class="revealed-letter-box">
                        <h4>A Secret Just For You...</h4>
                        <p>Sonali,
                        
                        You are my absolute favorite person in the entire universe. Every day with you is a blessing, and I couldn't be more thankful to walk this life with you.
                        
                        This website is a small token of my love, designed to show you that no matter the time, date, or distance, my heart will always count down the seconds to make you happy.
                        
                        Thank you for loving me. Thank you for your warmth.
                        
                        Happy Birthday, My Princess. I love you to the moon and back, forever and ever.
                        
                        Forever Yours,
                        Shagor ❤️</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 10. ENDING SECTION -->
        <section class="birthday-section ending-wrapper">
            <h1 class="ending-title" data-aos="zoom-out">Forever Yours ❤️</h1>
            <p class="ending-text" data-aos="fade-up">
                No matter how many years go by, or how much the stars rotate in the sky, my love for you remains unchanging.
            </p>
            <button class="replay-button" onclick="replaySurprise()">Replay Magical Opening</button>
            <div class="footer-note">Designed with endless love for Sonali ❤️ | 14 July</div>
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
    wishText.innerText = JAR_WISHES[idx];
    wishCard.classList.remove('hidden');

    // Sparkle confetti effect on the bubble click
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
    wishText.innerText = "Tap on the glowing golden dots inside the jar to reveal hidden wishes!";
    wishCard.classList.remove('hidden');
}

// Beating heart click count & particle spawns
let heartClickCount = 0;
function beatingHeartClicked(event) {
    heartClickCount++;
    document.getElementById('heart-count-val').innerText = heartClickCount;

    // Confetti hearts blast
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
        // Register heart shape with canvas-confetti
        // Standard library handles custom shape drawing if registered
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

    // Create custom starry sky particles
    const starCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const pinkColor = new THREE.Color('#ff7597');
    const goldColor = new THREE.Color('#e5c060');
    const blueColor = new THREE.Color('#9d4edd');

    for (let i = 0; i < starCount * 3; i += 3) {
        // random space position
        positions[i] = (Math.random() - 0.5) * 600;
        positions[i + 1] = (Math.random() - 0.5) * 600;
        positions[i + 2] = (Math.random() - 0.5) * 600;

        // random color weights
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

    // Custom round soft star texture using HTML canvas
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

    // Resize handler
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

    // Slow rotate starfield
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
            // Rose petal
            particle.innerHTML = '🌸';
            particle.style.fontSize = Math.random() * 18 + 12 + 'px';
            particle.style.opacity = Math.random() * 0.5 + 0.3;
        }

        container.appendChild(particle);

        // GSAP animate particle upward with sway
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
                return false; // Remove
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

    // Auto-launch loop
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
    // Check test override parameters
    const urlParams = new URLSearchParams(window.location.search);
    const testMode = urlParams.get('test');

    if (testMode === 'unlock') {
        console.log("Test unlock mode activated!");
        setupCountdown(true); // force immediate countdown screen unlock sequence setup
        return;
    }

    if (testMode === 'site') {
        console.log("Test direct site mode activated!");
        unlockAndRenderSite(true); // render immediately without countdown
        return;
    }

    const now = new Date();

    // Construct local target date: July 29 of current year
    const targetDate = new Date(now.getFullYear(), TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE, TARGET_SECOND);

    // Check if the unlock date has already passed in the local year, or if we have it in Local Storage
    const isUnlockedInStorage = localStorage.getItem('birthdayUnlocked') === 'true';

    if (now >= targetDate) {
        if (isUnlockedInStorage) {
            // Future visits after July 29: Immediately load the website. Do not show countdown again.
            unlockAndRenderSite(true);
        } else {
            // First visit on or after July 29: Skip countdown completely, open site immediately.
            unlockAndRenderSite(true);
        }
    } else {
        // Locked: Show countdown card
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
    // Test unlock option: countdown 5 seconds then unlock!
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
            // Automatic Unlock! No refresh needed
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

// UNLOCK FLOW TIMELINE (Fades screen, plays chimes, reveals box, typing text, reveals site)
function triggerUnlockSequence() {
    clearInterval(countdownInterval);

    const countdownScreen = document.getElementById('countdown-screen');
    const unlockOverlay = document.getElementById('unlock-overlay');
    const giftBoxWrapper = document.getElementById('gift-box-wrapper');

    // Step 1: Fade entire screen to black (1 second)
    gsap.to(countdownScreen, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            countdownScreen.classList.remove('active');
            unlockOverlay.classList.add('active');
            gsap.to(unlockOverlay, { opacity: 1, duration: 0.5 });

            // Step 2 & 3: Play magic chime & reveal Gift Box
            playUnlockSound();
            giftBoxWrapper.classList.remove('hidden');
            gsap.fromTo(giftBoxWrapper,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: 'back.out(1.7)' }
            );
        }
    });

    // Handle Gift Box Open Action
    const giftBox = document.getElementById('interactive-gift-box');
    giftBox.addEventListener('click', openGiftBoxAction, { once: true });
}

function openGiftBoxAction() {
    const giftBox = document.getElementById('interactive-gift-box');
    const giftBoxWrapper = document.getElementById('gift-box-wrapper');
    const greetingBanner = document.getElementById('greeting-banner');

    // Resume audio context on user interaction to bypass browser policies
    getAudioContext();

    // Gift Lid slides off & golden light shines
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

    // Play chime again
    playUnlockSound();

    setTimeout(() => {
        // Step 4 & 5: Confetti burst & Fireworks start
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });
        runFireworksEngine();

        // Step 6 & 7: Environments
        startFallingParticles();

        // Fade gift box and show greeting banners
        gsap.to(giftBoxWrapper, {
            opacity: 0,
            scale: 0.5,
            duration: 0.8,
            onComplete: () => {
                giftBoxWrapper.classList.add('hidden');
                greetingBanner.classList.remove('hidden');

                // Step 8: Play birthday music automatically
                startBgmMusic();

                // Step 9 & 10: Typewriter animation happy birthday
                typewriterSequence();
            }
        });
    }, 1000);
}

function typewriterSequence() {
    const titleEl = document.getElementById('typewriter-title');
    const subtitleEl = document.getElementById('typewriter-subtitle');

    const textTitle = '🎉 Happy Birthday My Princess ❤️';
    let charIdx = 0;

    // GSAP border blink animation
    gsap.fromTo(titleEl, { borderRightColor: 'rgba(255, 77, 109, 1)' }, { borderRightColor: 'rgba(255, 77, 109, 0)', repeat: -1, duration: 0.5, ease: 'steps(1)' });

    function typeChar() {
        if (charIdx < textTitle.length) {
            titleEl.textContent += textTitle.charAt(charIdx);
            // Dynamic width setting to simulate typewriter bounds
            titleEl.style.width = '100%';
            charIdx++;
            setTimeout(typeChar, 85);
        } else {
            // Typing complete: Fade out blinking cursor
            titleEl.style.borderRight = 'none';

            // Step 10: Fade in Subtitle
            subtitleEl.innerText = 'To My Beautiful Sonali';
            subtitleEl.classList.add('visible');

            // Step 11: Transition to full site after 3.5s
            setTimeout(() => {
                revealBirthdayWebsite();
            }, 3500);
        }
    }

    setTimeout(typeChar, 500);
}

function revealBirthdayWebsite() {
    const unlockOverlay = document.getElementById('unlock-overlay');

    // Fade out overlay and stop canvas fireworks to free up resources
    gsap.to(unlockOverlay, {
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
            unlockOverlay.classList.remove('active');
            stopFireworksEngine();
            unlockAndRenderSite(false); // render with transition
        }
    });
}

function unlockAndRenderSite(isImmediate) {
    // Save to LocalStorage
    localStorage.setItem('birthdayUnlocked', 'true');

    const siteContainer = document.getElementById('birthday-website-container');
    const countdownScreen = document.getElementById('countdown-screen');

    // Inject HTML
    siteContainer.innerHTML = getBirthdayHtml();

    // If we bypassed the unlock overlay (immediate load), start particles and music helper
    if (isImmediate) {
        startFallingParticles();

        // Music requires click gesture, play visual player so they can activate it
        document.getElementById('global-music-player').classList.remove('hidden');

        // Listen for first click on window to auto-start BGM
        const startMusicOnGesture = () => {
            startBgmMusic();
            window.removeEventListener('click', startMusicOnGesture);
            window.removeEventListener('touchstart', startMusicOnGesture);
        };
        window.addEventListener('click', startMusicOnGesture);
        window.addEventListener('touchstart', startMusicOnGesture);
    }

    // Switch screen view
    countdownScreen.classList.remove('active');
    siteContainer.classList.add('active');

    // GSAP reveal timeline for sections
    if (!isImmediate) {
        gsap.from('#hero .hero-greeting', { opacity: 0, y: -50, duration: 1, delay: 0.2 });
        gsap.from('#hero .hero-name', { opacity: 0, y: 50, duration: 1.2, delay: 0.4 });
        gsap.from('#hero .hero-tagline', { opacity: 0, scale: 0.9, duration: 1, delay: 0.8 });
    }

    // Initialize AOS scroll triggers
    AOS.init({
        duration: 1000,
        once: false,
        offset: 120,
        easing: 'ease-out-back'
    });

    // Start Quotes Autoplay
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

// Update progress bar of the player
document.getElementById('audio-bgm').addEventListener('timeupdate', (e) => {
    const bgm = e.target;
    const progress = document.getElementById('player-progress');
    if (bgm.duration) {
        const percentage = (bgm.currentTime / bgm.duration) * 100;
        progress.style.width = percentage + '%';
    }
});

// Click progress bar to seek
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

// Expand player on click (for mobile convenience)
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
    setupConfettiHearts();
    initThreeStarfield();
    checkBirthdayLock();

    // Initialize AOS for static elements on page load (e.g. the countdown screen)
    AOS.init({
        duration: 1000,
        once: false,
        offset: 120,
        easing: 'ease-out-back'
    });
});
