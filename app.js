// ==========================================================================
// E-PILPRES 2029 PORTAL ENGINE (app.js)
// Neo-brutalist styling, 8-bit sound synth, local voting, and theme rotation.
// ==========================================================================

// 1. CANDIDATES DATA STORE
const candidatesData = {
    anies: {
        name: "Ambah",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfOtop0LM_x4Ab-VP-hwyvLg-VN8CT__jnednEZzhTg&s=10", // Masukkan link URL gambar di sini (misal: "https://url-gambar.com/anies.jpg")
        coalition: "Koalisi Perubahan (PGR)",
        slogan: "Kata-kata adalah senjata perubahan, bukan sekadar penataan.",
        stats: {
            "Retorika": 98,
            "Kebijakan": 85,
            "Populisme": 75,
            "Gimik": 60,
            "Eksekusi": 78
        },
        timeline: [
            { year: "2007", desc: "Menjadi Rektor Universitas Paramadina termuda di Indonesia pada usia 38 tahun." },
            { year: "2013", desc: "Ikut serta dalam Konvensi Calon Presiden Partai Demokrat." },
            { year: "2014", desc: "Menjabat Menteri Pendidikan dan Kebudayaan RI di Kabinet Kerja." },
            { year: "2017", desc: "Terpilih sebagai Gubernur DKI Jakarta ke-17 setelah pilkada yang dinamis." },
            { year: "2022", desc: "Dipanggil KPK 19 kali. Tetap tidak bersalah." },
            { year: "2024", desc: "Maju sebagai Calon Presiden RI Nomor Urut 1 dengan gagasan perubahan." },
            { year: "2029", desc: "Mengusung narasi oposisi intelektual bermutu tinggi untuk Pilpres 2029." }
        ],
        jargon: [
            "Mari kita tengok rekam jejak, bukan sekadar janji-janji kosong tanpa konsep dasar.",
            "Keadilan sosial bukanlah barang pajangan, melainkan kesetaraan dalam setiap tarikan napas kebijakan.",
            "Tenun kebangsaan yang terkoyak harus dirajut kembali dengan benang-benang dialog intelektual.",
            "Merangkai kata bukan sekadar retorika, melainkan manifestasi gagasan yang terstruktur matang.",
            "Kita ingin menghadirkan kesetaraan peluang, dari ujung Sabang hingga lubuk hati terdalam."
        ]
    },
    ganjar: {
        name: "Vergil?",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfci0ZEAYfcx4KrO6YhiDIgoY_Ppd0huVQQACgKl07-g&s=10", // Masukkan link URL gambar di sini
        coalition: "Koalisi Maraton Politis (PDI Perjuangan)",
        slogan: "Gaspol tanpa henti, maraton politik demi rakyat jelata!",
        stats: {
            "Retorika": 82,
            "Kebijakan": 80,
            "Populisme": 90,
            "Gimik": 85,
            "Eksekusi": 83
        },
        timeline: [
            { year: "2004", desc: "Terpilih sebagai Anggota DPR RI dari Fraksi PDI Perjuangan." },
            { year: "2013", desc: "Memenangkan Pilgub Jawa Tengah, menjabat Gubernur Periode Pertama." },
            { year: "2018", desc: "Terpilih kembali sebagai Gubernur Jawa Tengah untuk Periode Kedua." },
            { year: "2024", desc: "Maju sebagai Calon Presiden RI Nomor Urut 3 dengan stamina maraton politik." },
            { year: "2029", desc: "Mengonsolidasikan kekuatan nasional populis dengan jargon 'Gaspol Tabrak Prof!'" }
        ],
        jargon: [
            "Gaspol terus! Jangan biarkan birokrasi memperlambat langkah kesejahteraan rakyat.",
            "Tuanku ya Rakyat, jabatan cuma mandat! Kita harus selalu siap turun ke lapangan.",
            "Tabrak terus segala bentuk penyimpangan, tidak ada gigi mundur dalam kamus kita!",
            "Menjaga stamina itu penting, baik dalam lari maraton pagi hari maupun maraton politik nasional.",
            "Wong saya suka kok."
        ]
    },
    gibran: {
        name: "Fufufafa?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Gibran_Rakabuming_Raka%2C_Candidate_for_Vice_President_of_Indonesia_2024.jpg/960px-Gibran_Rakabuming_Raka%2C_Candidate_for_Vice_President_of_Indonesia_2024.jpg", // Masukkan link URL gambar di sini
        coalition: "Koalisi Indonesia Maju & Era Digital Terpadu (Gajah PSI)",
        slogan: "Hilirisasi digital, makan siang bergizi, dan susu gratis untuk semua.",
        stats: {
            "Retorika": 65,
            "Kebijakan": 78,
            "Populisme": 88,
            "Gimik": 98,
            "Eksekusi": 70
        },
        timeline: [
            { year: "2010", desc: "Merintis usaha kuliner Chilli Pari dan martabak Markobar di Surakarta." },
            { year: "2020", desc: "Terpilih sebagai Wali Kota Surakarta (Solo) dengan persentase suara mutlak." },
            { year: "2024", desc: "Terpilih sebagai Wakil Presiden RI termuda sepanjang sejarah mendampingi Prabowo Subianto." },
            { year: "2026", desc: "Dihadapi tantangan jejak digital kontroversial akun kaskus 'fufufafa'." },
            { year: "2029", desc: "Mencalonkan diri sebagai Presiden 2029 dengan fokus hilirisasi AI dan susu gratis." }
        ],
        jargon: [
            "Hilirisasi semuanya! Hilirisasi digital, hilirisasi pertanian, hilirisasi susu gratis.",
            "Santuy saja. Jangan terlalu tegang menghadapi kontestasi politik yang riang gembira ini.",
            "Yang penting susu gratisnya diminum dulu biar otaknya encer dan fokus hilirisasi.",
            "Saya hanya anak muda biasa yang mencoba berbakti. Silakan netizen berkomentar apa saja.",
            "Internet cepat, hilirisasi AI, dan makan siang bergizi adalah kunci emas menuju Indonesia 2045."
        ]
    },
    dedi: {
        name: "Bapak Aing",
        image: "https://www.lead.co.id/wp-content/uploads/2025/04/IMG-20250406-WA0050.jpg", // Masukkan link URL gambar di sini
        coalition: "Koalisi Indonesia Raya & Dewan Adat Pasundan",
        slogan: "Kembali ke alam, kearifan lokal Jawa Barat untuk keadilan nasional.",
        stats: {
            "Retorika": 88,
            "Kebijakan": 82,
            "Populisme": 94,
            "Gimik": 75,
            "Eksekusi": 85
        },
        timeline: [
            { year: "2003", desc: "Menjabat sebagai Wakil Bupati Kabupaten Purwakarta." },
            { year: "2008", desc: "Terpilih menjadi Bupati Purwakarta ke-8, menerapkan ikonik adat Sunda." },
            { year: "2013", desc: "Terpilih kembali untuk periode kedua Bupati Purwakarta." },
            { year: "2019", desc: "Menjadi Anggota DPR RI dengan unggahan YouTube pedesaan yang sangat populer." },
            { year: "2024", desc: "Terpilih sebagai Gubernur Jawa Barat dengan perolehan suara luar biasa." },
            { year: "2029", desc: "Maju ke pentas nasional dengan mengandalkan gagasan kedaulatan desa berbudaya." }
        ],
        jargon: [
            "Hirup kudu mangpaat pikeun batur! Pemimpin harus menyatu dengan lumpur sawah rakyat.",
            "Kembali ke jati diri bangsa, jangan lupakan kearifan lokal leluhur yang menjaga keharmonisan alam.",
            "Iket sunda ini bukan sekadar penutup kepala, tapi simbol ikatan hati dengan penderitaan rakyat kecil.",
            "Sawah subur, rakyat makmur! Politik itu sederhana: beri pupuk yang cukup, bantu petani di desa.",
            "Menangis bersama rakyat di gubuk reyot lebih terhormat dibanding tertawa di podium ber-AC."
        ]
    }
};

// 2. RETRO SOUND SYNTHESIZER ENGINE (Web Audio API)
class RetroSoundEngine {
    constructor() {
        this.ctx = null;
        this.enabled = false;
    }

    init() {
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            this.enabled = true;
            console.log("RetroSoundEngine initialized successfully.");
        } catch (e) {
            console.warn("Web Audio API is not supported in this browser.", e);
        }
    }

    disable() {
        this.enabled = false;
    }

    playTone(freqStart, freqEnd, type, duration, volume = 0.05) {
        if (!this.enabled || !this.ctx) return;

        // Resume context if suspended (common browser behavior)
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        try {
            const osc = this.ctx.createOscillator();
            const gainNode = this.ctx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freqStart, this.ctx.currentTime);

            if (freqEnd && freqStart !== freqEnd) {
                osc.frequency.exponentialRampToValueAtTime(freqEnd, this.ctx.currentTime + duration);
            }

            gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

            osc.connect(gainNode);
            gainNode.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {
            console.error("Failed to synthesize tone:", e);
        }
    }

    playHover() {
        this.playTone(800, 1200, 'sine', 0.04, 0.015);
    }

    playClick() {
        this.playTone(400, 800, 'triangle', 0.08, 0.04);
    }

    playSuccess() {
        if (!this.enabled || !this.ctx) return;
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        try {
            const now = this.ctx.currentTime;

            const playNote = (freq, time, dur) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'square';
                osc.frequency.setValueAtTime(freq, time);
                gain.gain.setValueAtTime(0.03, time);
                gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(time);
                osc.stop(time + dur);
            };

            // Retro 8-bit double-note coin sound
            playNote(523.25, now, 0.08); // C5
            playNote(659.25, now + 0.08, 0.16); // E5
        } catch (e) {
            console.error(e);
        }
    }

    playReset() {
        this.playTone(300, 70, 'sawtooth', 0.25, 0.04);
    }

    playDrawerOpen() {
        this.playTone(180, 520, 'triangle', 0.15, 0.05);
    }

    playDrawerClose() {
        this.playTone(520, 180, 'triangle', 0.15, 0.05);
    }

    playJargon() {
        this.playTone(1100, 220, 'sawtooth', 0.22, 0.04);
    }
}

const sfx = new RetroSoundEngine();

// 3. CONFETTI BLAST ENGINE
const activeParticles = [];
function animateParticles() {
    const container = document.getElementById('confetti-container');
    let index = activeParticles.length;

    while (index--) {
        const p = activeParticles[index];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vrot;
        p.lifetime--;

        p.el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.rotation}deg)`;

        if (p.lifetime <= 0 || p.y > window.innerHeight) {
            if (p.el.parentNode) {
                container.removeChild(p.el);
            }
            activeParticles.splice(index, 1);
        }
    }

    if (activeParticles.length > 0) {
        requestAnimationFrame(animateParticles);
    }
}

function spawnConfetti(originX, originY) {
    const container = document.getElementById('confetti-container');
    if (!container) return;

    const colors = [
        'var(--primary-yellow)',
        'var(--primary-cyan)',
        'var(--primary-magenta)',
        'var(--primary-orange)',
        'var(--primary-purple)'
    ];

    const startLoop = activeParticles.length === 0;

    for (let i = 0; i < 40; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-square';
        el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        el.style.left = '0px';
        el.style.top = '0px';
        container.appendChild(el);

        // Random velocity vectors
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 10 + 6;

        const p = {
            el: el,
            x: originX,
            y: originY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 5, // initial upward force
            gravity: 0.4,
            rotation: Math.random() * 360,
            vrot: (Math.random() - 0.5) * 18,
            lifetime: Math.random() * 50 + 50
        };
        activeParticles.push(p);
    }

    if (startLoop) {
        requestAnimationFrame(animateParticles);
    }
}

// 4. THEME SWITCHER SYSTEM
const themes = [
    {
        name: "Default",
        vars: {
            "--bg-main": "#FFFDF4",
            "--border-color": "#000000",
            "--primary-yellow": "#FFEE58",
            "--primary-cyan": "#00E5FF",
            "--primary-magenta": "#FF2E93",
            "--primary-orange": "#FF6D00",
            "--primary-purple": "#D500F9"
        }
    },
    {
        name: "Mint",
        vars: {
            "--bg-main": "#E8F8F5",
            "--border-color": "#113A33",
            "--primary-yellow": "#A3E4D7",
            "--primary-cyan": "#48C9B0",
            "--primary-magenta": "#E74C3C",
            "--primary-orange": "#F39C12",
            "--primary-purple": "#9B59B6"
        }
    },
    {
        name: "Pink",
        vars: {
            "--bg-main": "#FDF2F8",
            "--border-color": "#3B0724",
            "--primary-yellow": "#FBCFE8",
            "--primary-cyan": "#F472B6",
            "--primary-magenta": "#EC4899",
            "--primary-orange": "#FB923C",
            "--primary-purple": "#C084FC"
        }
    },
    {
        name: "Indigo",
        vars: {
            "--bg-main": "#EEF2FF",
            "--border-color": "#1E1B4B",
            "--primary-yellow": "#C7D2FE",
            "--primary-cyan": "#818CF8",
            "--primary-magenta": "#4F46E5",
            "--primary-orange": "#F59E0B",
            "--primary-purple": "#8B5CF6"
        }
    }
];

let currentThemeIndex = 0;

function rotateTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const selectedTheme = themes[currentThemeIndex];

    // Apply variables to document root
    for (const [key, value] of Object.entries(selectedTheme.vars)) {
        document.documentElement.style.setProperty(key, value);
    }

    // Update Theme button text
    const btnText = document.querySelector('#theme-btn .btn-text');
    if (btnText) {
        btnText.textContent = `⚡ THEME: ${selectedTheme.name.toUpperCase()}`;
    }

    // Save to localStorage
    localStorage.setItem('epilpres2029_theme', currentThemeIndex);
}

function loadSavedTheme() {
    const savedIndex = localStorage.getItem('epilpres2029_theme');
    if (savedIndex !== null) {
        currentThemeIndex = parseInt(savedIndex, 10);
        if (!isNaN(currentThemeIndex) && currentThemeIndex >= 0 && currentThemeIndex < themes.length) {
            const selectedTheme = themes[currentThemeIndex];
            for (const [key, value] of Object.entries(selectedTheme.vars)) {
                document.documentElement.style.setProperty(key, value);
            }
            const btnText = document.querySelector('#theme-btn .btn-text');
            if (btnText) {
                btnText.textContent = `⚡ THEME: ${selectedTheme.name.toUpperCase()}`;
            }
        }
    }
}

// 5. RADAR SVG CHART BUILDER
function renderRadarChart(candidateKey) {
    const svg = document.getElementById('radar-chart');
    if (!svg) return;

    svg.innerHTML = ''; // Clear SVG contents

    const candidate = candidatesData[candidateKey];
    if (!candidate) return;

    const axes = ['Retorika', 'Kebijakan', 'Populisme', 'Gimik', 'Eksekusi'];
    const center = 125;
    const maxRadius = 80;

    // Helpers
    function getPolygonPointsString(radius) {
        const points = [];
        for (let i = 0; i < 5; i++) {
            const angle = -Math.PI / 2 + (i * 2 * Math.PI / 5);
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);
            points.push(`${x},${y}`);
        }
        return points.join(' ');
    }

    // A. Draw concentric pentagons representing reference grid levels (25%, 50%, 75%, 100%)
    for (let level = 25; level <= 100; level += 25) {
        const rad = (level / 100) * maxRadius;
        const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        poly.setAttribute('points', getPolygonPointsString(rad));
        poly.setAttribute('class', level === 100 ? 'radar-level-polygon last' : 'radar-level-polygon');
        poly.setAttribute('fill', 'none');
        poly.setAttribute('stroke', level === 100 ? '#444' : '#CCC');
        poly.setAttribute('stroke-width', level === 100 ? '1.5' : '1');
        if (level < 100) {
            poly.setAttribute('stroke-dasharray', '4, 4');
        }
        svg.appendChild(poly);
    }

    // B. Draw axis lines radiating from the center and place text labels
    for (let i = 0; i < 5; i++) {
        const angle = -Math.PI / 2 + (i * 2 * Math.PI / 5);
        const edgeX = center + maxRadius * Math.cos(angle);
        const edgeY = center + maxRadius * Math.sin(angle);

        // Line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', center);
        line.setAttribute('y1', center);
        line.setAttribute('x2', edgeX);
        line.setAttribute('y2', edgeY);
        line.setAttribute('class', 'radar-axis-line');
        line.setAttribute('stroke', '#DDD');
        line.setAttribute('stroke-width', '1.5');
        svg.appendChild(line);

        // Text Labels
        const labelX = center + (maxRadius + 18) * Math.cos(angle);
        const labelY = center + (maxRadius + 18) * Math.sin(angle);
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', labelX);
        text.setAttribute('y', labelY);
        text.setAttribute('class', 'radar-label');

        // Text alignment offsets depending on position
        let anchor = 'middle';
        if (Math.cos(angle) > 0.1) anchor = 'start';
        else if (Math.cos(angle) < -0.1) anchor = 'end';
        text.setAttribute('text-anchor', anchor);

        // Vertical shift adjustment
        if (i === 0) {
            text.setAttribute('dy', '-5');
        } else if (i === 2 || i === 3) {
            text.setAttribute('dy', '12');
        } else {
            text.setAttribute('dy', '4');
        }

        text.textContent = axes[i].toUpperCase();
        svg.appendChild(text);
    }

    // C. Draw candidate data polygon
    const dataPoints = [];
    for (let i = 0; i < 5; i++) {
        const axisName = axes[i];
        const val = candidate.stats[axisName] || 50;
        const rad = (val / 100) * maxRadius;
        const angle = -Math.PI / 2 + (i * 2 * Math.PI / 5);
        const x = center + rad * Math.cos(angle);
        const y = center + rad * Math.sin(angle);
        dataPoints.push(`${x},${y}`);
    }

    const dataPoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    dataPoly.setAttribute('points', dataPoints.join(' '));
    dataPoly.setAttribute('class', 'radar-data-polygon');

    const candColor = `var(--${candidateKey}-color)`;
    dataPoly.setAttribute('stroke', candColor);
    dataPoly.setAttribute('fill', candColor);
    dataPoly.setAttribute('fill-opacity', '0.35');
    dataPoly.setAttribute('stroke-width', '3');

    svg.appendChild(dataPoly);

    // D. Render tabular statistics list (legend box)
    const legendContainer = document.getElementById('radar-legend');
    if (legendContainer) {
        legendContainer.innerHTML = '';
        axes.forEach(axis => {
            const val = candidate.stats[axis];
            const item = document.createElement('div');
            item.className = 'legend-item';
            item.style.borderColor = candColor;
            item.innerHTML = `<span>${axis.toUpperCase()}</span><span class="legend-val">${val}</span>`;
            legendContainer.appendChild(item);
        });
    }
}

// 6. DRAWER (PROFILE EXPANSION PANEL) MANAGEMENT
function openDrawer(candidateKey) {
    const drawer = document.getElementById('profile-drawer');
    const title = document.getElementById('drawer-title');
    const specCoalition = document.getElementById('spec-coalition');
    const specSlogan = document.getElementById('spec-slogan');
    const timelineContainer = document.getElementById('candidate-timeline');
    const avatarContainer = document.getElementById('drawer-avatar-container');
    const jargonOutput = document.getElementById('jargon-output');
    const jargonBtn = document.getElementById('generate-jargon-btn');

    const candidate = candidatesData[candidateKey];
    if (!candidate || !drawer) return;

    // Fill textual details
    if (title) title.textContent = candidate.name;
    if (specCoalition) specCoalition.textContent = candidate.coalition;
    if (specSlogan) specSlogan.textContent = `"${candidate.slogan}"`;

    // Copy/Clone portrait placeholder from corresponding card
    if (avatarContainer) {
        const cardPortrait = document.querySelector(`.candidate-card.${candidateKey}-card .candidate-portrait-placeholder`);
        if (cardPortrait) {
            const clone = cardPortrait.cloneNode(true);
            avatarContainer.innerHTML = '';
            avatarContainer.appendChild(clone);
        } else {
            avatarContainer.innerHTML = '';
        }
    }

    // Render timeline
    if (timelineContainer) {
        timelineContainer.innerHTML = '';
        candidate.timeline.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = `timeline-item ${index === candidate.timeline.length - 1 ? 'active' : ''}`;
            itemDiv.innerHTML = `
                <span class="timeline-year">${item.year}</span>
                <div class="timeline-desc">${item.desc}</div>
            `;
            timelineContainer.appendChild(itemDiv);
        });
    }

    // Initialize jargon generator trigger button attribute
    if (jargonBtn) {
        jargonBtn.setAttribute('data-candidate', candidateKey);
    }

    // Place initial default jargon in output box
    if (jargonOutput) {
        jargonOutput.innerHTML = `"${candidate.jargon[0]}"`;
    }

    // Render SVG Radar Chart
    renderRadarChart(candidateKey);

    // Show Drawer modal
    drawer.classList.add('active');
    sfx.playDrawerOpen();
}

function closeDrawer() {
    const drawer = document.getElementById('profile-drawer');
    if (drawer && drawer.classList.contains('active')) {
        drawer.classList.remove('active');
        sfx.playDrawerClose();
    }
}



// 8. INTERACTIVE EVENT HANDLERS INIT
document.addEventListener('DOMContentLoaded', () => {

    // Load existing theme preference if any
    loadSavedTheme();

    // Bind candidate images from data store to HTML
    Object.keys(candidatesData).forEach(key => {
        const candidate = candidatesData[key];
        const cardImg = document.querySelector(`.candidate-card.${key}-card .candidate-portrait`);
        if (cardImg && candidate.image) {
            cardImg.src = candidate.image;
            cardImg.alt = candidate.name;
        }
    });

    // Consent Modal Action buttons
    const consentModal = document.getElementById('audio-consent-modal');
    const consentYes = document.getElementById('btn-consent-yes');
    const consentNo = document.getElementById('btn-consent-no');
    const soundBtnText = document.querySelector('#sound-btn .btn-text');

    if (consentYes) {
        consentYes.addEventListener('click', () => {
            sfx.init();
            if (consentModal) consentModal.classList.add('hidden');
            if (soundBtnText) soundBtnText.textContent = "🔊 AUDIO: ON";
            // Play introductory success chime
            sfx.playSuccess();
        });
    }

    if (consentNo) {
        consentNo.addEventListener('click', () => {
            sfx.disable();
            if (consentModal) consentModal.classList.add('hidden');
            if (soundBtnText) soundBtnText.textContent = "🔇 AUDIO: OFF";
        });
    }

    // Audio control toggler in header
    const soundToggleBtn = document.getElementById('sound-btn');
    if (soundToggleBtn) {
        soundToggleBtn.addEventListener('click', () => {
            if (sfx.enabled) {
                sfx.disable();
                if (soundBtnText) soundBtnText.textContent = "🔇 AUDIO: OFF";
            } else {
                sfx.init();
                if (soundBtnText) soundBtnText.textContent = "🔊 AUDIO: ON";
                sfx.playClick();
            }
        });
    }

    // Dynamic Theme Toggler in header
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            rotateTheme();
            sfx.playClick();
        });
    }

    // Scroll to Anchors helper
    document.querySelectorAll('.scroll-to').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
                sfx.playClick();
            }
        });
    });

    // Opening Drawers from Candidate Card "PROFIL" buttons
    document.querySelectorAll('.btn-view-profile').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const target = btn.getAttribute('data-target');
            openDrawer(target);
        });
    });

    // Closing details drawer panel
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const drawerOverlay = document.getElementById('drawer-close-overlay');

    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener('click', () => {
            closeDrawer();
        });
    }

    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', () => {
            closeDrawer();
        });
    }

    // Dynamic jargon generation button in drawer
    const jargonBtn = document.getElementById('generate-jargon-btn');
    const jargonOutput = document.getElementById('jargon-output');

    if (jargonBtn) {
        jargonBtn.addEventListener('click', () => {
            const candidateKey = jargonBtn.getAttribute('data-candidate');
            if (candidateKey && candidatesData[candidateKey]) {
                const quotes = candidatesData[candidateKey].jargon;
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

                sfx.playJargon();

                // Visual wiggle feedback
                if (jargonOutput) {
                    jargonOutput.style.transform = 'scale(0.92) rotate(-3deg)';
                    setTimeout(() => {
                        jargonOutput.innerHTML = `"${randomQuote}"`;
                        jargonOutput.style.transform = 'scale(1) rotate(-1deg)';
                    }, 100);
                }
            }
        });
    }

    // Micro-interactions hover tones for all clickable neo-brutalist buttons & cards
    const attachHoverAudio = () => {
        const interactiveElements = document.querySelectorAll(
            '.brutal-btn, .candidate-card, .comparison-table tbody tr'
        );
        interactiveElements.forEach(el => {
            // Avoid adding double listeners if dynamic
            el.removeEventListener('mouseenter', playElHover);
            el.addEventListener('mouseenter', playElHover);
        });
    };

    function playElHover() {
        sfx.playHover();
    }

    // Attach initial hover sfx listeners
    attachHoverAudio();

    // Watch for dynamic DOM changes inside Drawer and re-attach hovers
    const observer = new MutationObserver(() => {
        attachHoverAudio();
    });

    const drawerBody = document.querySelector('.drawer-body');
    if (drawerBody) {
        observer.observe(drawerBody, { childList: true, subtree: true });
    }
});
