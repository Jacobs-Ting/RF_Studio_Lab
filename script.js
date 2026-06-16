// Define the folder structure and simulations
const studios = [
    {
        id: 'rf_studio',
        title: 'RF System Research Studio',
        shortTitle: 'RF System Research Studio',
        description: 'Advanced communication physical layer (PHY) simulation platforms.',
        themeClass: 'card-5G_NR',
        simulations: [
            { id: 'nr5g_menu', title: '5G NR Simulation', description: 'Access 5G NR physical layer, coding, and RF conformance simulation platforms.', defaultUrl: '#' },
            { id: 'GNSS', title: 'GNSS', description: 'Simulates Global Navigation Satellite System (GNSS) signal acquisition, Doppler shift, and positioning algorithms.', defaultUrl: 'https://gnsssimulation-jnhfeccymaqxgjgact2daf.streamlit.app' },
            { id: 'WiFi', title: 'WiFi', description: 'Analyzes WiFi OFDM/QAM constellation diagrams and simulates Multipath Fading.', defaultUrl: 'https://jacobs-ting.github.io/WiFi-PHY-Simulation_HTML/' },
            { id: 'RFID', title: 'RFID', description: 'Simulates RFID self-jamming mitigation and echo cancellation algorithms.', defaultUrl: 'https://rfidsimulation-vr944rmwfifivhdbbrfhuf.streamlit.app' },
            { id: 'bluetooth_menu', title: 'Bluetooth Simulation', description: 'Access Bluetooth physical layer (PHY), Channel Sounding, and TWS radiation pattern simulation platforms.', defaultUrl: '#' },
            { id: 'UWB', title: 'UWB', description: 'Ultra-Wideband physical layer simulation algorithms.', defaultUrl: 'https://uwbsimulation-bnyt7bscfhzesxtxkzvgag.streamlit.app/' },
            { id: 'LPWAN', title: 'Low power WAN', description: 'LoRa WAN, NB-IOT, SigFox, Wi-SUN, 802.11ah.', defaultUrl: 'https://jacobs-ting.github.io/LPWAN_Table/' },
            { id: 'defense_tech_menu', title: 'Defense Technology', description: 'Non-Terrestrial Network (NTN) and Unmanned Aerial Vehicle (UAV) simulations.', defaultUrl: '#' }
        ]
    },
    {
        id: 'nr5g_studio',
        title: '5G NR Research Studio',
        shortTitle: '5G NR Research Studio',
        description: '5G NR physical layer, coding, and RF conformance simulations.',
        themeClass: 'card-5G_NR',
        isSubStudio: true,
        simulations: [
            { id: 'NR_TS38211', title: 'TS 38.211 Simulation', description: 'Visualizes 5G NR physical layer channel mapping, modulation, and Resource Block (RB) structures.', defaultUrl: 'https://jacobs-ting.github.io/5GNR_Web/' },
            { id: 'NR_TS38212', title: 'TS 38.212 Simulation', description: 'Simulates 5G NR multiplexing and channel coding, including LDPC and Polar codes.', defaultUrl: 'https://jacobs-ting.github.io/TS-38.212-Simulation/' },
            { id: 'NR_TS38213', title: 'TS 38.213 (PRACH) Simulation', description: 'Simulates 5G NR physical layer procedures for control, including PRACH preamble generation and detection.', defaultUrl: 'https://jacobs-ting.github.io/TS-38.213-PRACH/' },
            { id: 'NR_TS38101_1', title: 'TS 38.101-1 Simulation', description: 'Simulates 3GPP TS 38.101-1 User Equipment (UE) FR1 radio transmission and reception conformance requirements.', defaultUrl: 'https://jacobs-ting.github.io/5G-NR-Conformance-Test/' }
        ]
    },
    {
        id: 'bluetooth_studio',
        title: 'Bluetooth Research Studio',
        shortTitle: 'Bluetooth Research Studio',
        description: 'Bluetooth physical layer (PHY) and Channel Sounding simulations.',
        themeClass: 'card-Bluetooth',
        isSubStudio: true,
        simulations: [
            { id: 'Bluetooth_PHY', title: 'Bluetooth PHY Simulation', description: 'Simulates Bluetooth physical layer modulation, frequency offset, and packet transmission performance.', defaultUrl: 'https://bluetooth-phy-simulation-alfbuzptsqjnastbuxjucf.streamlit.app/' },
            { id: 'Bluetooth_CS', title: 'Channel Sounding Simulation', description: 'Simulates Bluetooth Channel Sounding (CS) phase-based ranging and distance measurement algorithms.', defaultUrl: 'https://jacobs-ting.github.io/BT_Channel-sounding/' },
            { id: 'Bluetooth_TWS', title: 'Bluetooth TWS Radiation Pattern Simulation', description: 'Simulates Bluetooth TWS antenna radiation patterns, 3D head shadowing effects, and signal coupling/attenuation.', defaultUrl: 'https://jacobs-ting.github.io/TWS_ANT_Pattern/' }
        ]
    },
    {
        id: 'defense_tech_studio',
        title: 'Defense Technology Research Studio',
        shortTitle: 'Defense Technology Research Studio',
        description: 'Non-Terrestrial Network (NTN) and Unmanned Aerial Vehicle (UAV) simulations.',
        themeClass: 'card-DefenseTech',
        isSubStudio: true,
        simulations: [
            { id: 'defense_ntn', title: 'NTN (Non-Terrestrial Network)', description: 'Simulates Non-Terrestrial Network satellite-based communication links and coverage analysis.', defaultUrl: 'https://jacobs-ting.github.io/NTN-Simulation/' },
            { id: 'defense_uav', title: 'UAV (Unmanned Aerial Vehicle)', description: 'Simulates UAV communication links, trajectory planning, and air-to-ground channel modeling.', defaultUrl: 'https://jacobs-ting.github.io/Drone_Simulation/' }
        ]
    },
    {
        id: 'mmwave_studio',
        title: 'mmWave Research Studio',
        shortTitle: 'mmWave Research Studio',
        description: 'mmWave Phased Array antennas and Beamforming simulations.',
        themeClass: 'card-mmWave',
        simulations: [
            { id: 'mmwave_mod', title: 'mmWave Link', description: 'mmWave specific modulation analysis.', defaultUrl: 'https://mmwave-simulation-rpdmnfu328sks6wjgmcaq4.streamlit.app' },
            { id: 'mmwave_sidelobe', title: 'mmWave Sidelobe Improve', description: 'Sidelobe improvement and suppression techniques.', defaultUrl: 'https://mmwave-side-lobe-calibration-yvgl6dyq4moun2hqhkwwt7.streamlit.app' },
            { id: 'mmwave_phase', title: 'mmWave Phase shifter Calibration', description: 'Phase shifter calibration algorithms.', defaultUrl: 'https://mmwave-phase-shifter-xacf2hpzygwnchnfeq3rgb.streamlit.app' },
            { id: 'mmwave_ts38101', title: 'TS 38.101-2 simulation', description: 'Simulates 3GPP TS 38.101-2 User Equipment (UE) FR2 radio transmission and reception requirements.', defaultUrl: 'https://jacobs-ting.github.io/38.101-2-Simulation/' }
        ]
    },
    {
        id: 'pisi_studio',
        title: 'PI/SI Research Studio',
        shortTitle: 'PI/SI Research Studio',
        description: 'Power Integrity and Signal Integrity simulations.',
        themeClass: 'card-GNSS',
        simulations: [
            { id: 'si_sim', title: 'SI Simulation', description: 'Signal Integrity (SI) analysis and visualization.', defaultUrl: 'https://signalintegrationsimulation-tool-otcmwvh5hdwhr2n2dbvoox.streamlit.app' },
            { id: 'pi_sim', title: 'PI Simulation', description: 'Power Integrity (PI) analysis and visualization.', defaultUrl: 'https://pdn-simulation-xv6ckuvqlrezcepkjjyes4.streamlit.app' },
            { id: 'impedance_control', title: 'Impedance Control', description: 'Impedance control analysis and visualization.', defaultUrl: 'https://impedance-calculation-kejk5wu4g7vbeo9ks2nsiy.streamlit.app' }
        ]
    },
    {
        id: '6g_studio',
        title: '6G Technology Concept Research Studio',
        shortTitle: '6G Technology Concept Research Studio',
        description: '6G Technology Concept Research and Simulations.',
        themeClass: 'card-6G',
        simulations: [
            { id: '6g_ai_ran', title: 'Next Generation AI RAN Simulation', description: 'AI RAN simulation and analysis.', defaultUrl: 'https://ai-ran-web-jtjskvxcpt7knxwkk5deqn.streamlit.app' },
            { id: '6g_noma', title: 'Next Generation NOMA Technology Simulation', description: 'NOMA Technology concepts and visualization.', defaultUrl: 'https://example.com/noma' }
        ]
    },
    {
        id: 'ai_rf_studio',
        title: 'AI-Assisted RF Design Studio',
        shortTitle: 'AI-Assisted RF Design Studio',
        description: 'AI-optimized RF system design, filter synthesis, and impedance matching tools.',
        themeClass: 'card-WiFi',
        simulations: [
            { id: 'rf_link_budget', title: 'AI-Assisted RF Link Budget Analyzer', description: 'Integrates multi-physics and system-level signal parameters to rapidly evaluate TX and RX link budget characteristics. Features an AI-driven capability to automatically extract critical parameters directly from component datasheets.', defaultUrl: 'https://link-budget-analysis-wjp3cxm87dm7ftqfvdqebg.streamlit.app/' },
            { id: 'filter_design', title: 'AI-Assisted Filter Design', description: 'Allows users to define custom parameters while an AI engine automatically selects optimal components to synthesize the filter. Uniquely incorporates real-world parasitic effects into the simulation to ensure accuracy.', defaultUrl: 'https://ai-filter-simulation-47kq2tjn6k6kx7nvsqu5hf.streamlit.app/' },
            { id: 'impedance_matching', title: 'AI-Assisted RF Impedance Matching', description: 'The impedance matching network is automatically synthesized using an AI-optimized algorithm, and parasitic effects are incorporated to make the simulation results closer to actual SMT components.', defaultUrl: 'https://ai-smith-n3ykcaxsikrmwxfeqepcid.streamlit.app/' }
        ]
    }
];

// Memory-based fallback in case localStorage is blocked
const memoryStorage = {};
const safeStorage = {
    getItem: (key) => {
        try {
            return window.localStorage.getItem(key);
        } catch (e) {
            console.warn('localStorage.getItem access failed, using memory fallback:', e);
            return memoryStorage[key] || null;
        }
    },
    setItem: (key, value) => {
        try {
            window.localStorage.setItem(key, value);
        } catch (e) {
            console.warn('localStorage.setItem access failed, using memory fallback:', e);
            memoryStorage[key] = String(value);
        }
    },
    removeItem: (key) => {
        try {
            window.localStorage.removeItem(key);
        } catch (e) {
            console.warn('localStorage.removeItem access failed, using memory fallback:', e);
            delete memoryStorage[key];
        }
    }
};

// Helper to flatten simulations to handle URLs easily
const getAllSimulations = () => {
    let all = [];
    studios.forEach(studio => {
        all = all.concat(studio.simulations);
    });
    return all;
};

// Load URLs from local storage or use defaults
const loadUrls = () => {
    const defaults = {};
    getAllSimulations().forEach(sim => defaults[sim.id] = sim.defaultUrl);

    // We use a new key 'simulationUrls_v2' to avoid loading stale defaults 
    // from an older version where all URLs were saved.
    try {
        const saved = safeStorage.getItem('simulationUrls_v2');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && typeof parsed === 'object') {
                return { ...defaults, ...parsed };
            }
        }
    } catch (e) {
        console.error('Failed to parse saved simulation URLs:', e);
    }
    return defaults;
};

// State
let currentUrls = loadUrls();
let currentStudioId = null; // null means Main Menu


// DOM Elements
const cardsContainer = document.getElementById('cards-container');
const modal = document.getElementById('url-modal');
const form = document.getElementById('url-form');
const settingsBtn = document.getElementById('settings-btn');
const closeModalBtn = document.getElementById('close-modal');
const saveUrlsBtn = document.getElementById('save-urls');
const resetUrlsBtn = document.getElementById('reset-urls');

const disclaimerBtn = document.getElementById('disclaimer-btn');
const disclaimerModal = document.getElementById('disclaimer-modal');
const closeDisclaimerModalBtn = document.getElementById('close-disclaimer-modal');
const agreeDisclaimerBtn = document.getElementById('agree-disclaimer-btn');
const declineDisclaimerBtn = document.getElementById('decline-disclaimer-btn');
const disclaimerActions = document.getElementById('disclaimer-actions');
let pendingUrl = null;

const showDisclaimer = (forceConsent = false) => {
    if (forceConsent) {
        closeDisclaimerModalBtn.style.display = 'none';
        disclaimerActions.style.display = 'flex';
    } else {
        closeDisclaimerModalBtn.style.display = 'block';
        if (safeStorage.getItem('disclaimer_accepted') === 'true') {
            disclaimerActions.style.display = 'none';
        } else {
            disclaimerActions.style.display = 'flex';
        }
    }
    disclaimerModal.classList.add('active');
};

const backBtn = document.getElementById('back-btn');
const pageTitle = document.getElementById('page-title');
const pageSubtitle = document.getElementById('page-subtitle');
const pageDesc = document.getElementById('page-desc');

// Render Folder View
const renderFolders = () => {
    currentStudioId = null;
    cardsContainer.className = 'folder-container'; // Set to folder layout
    cardsContainer.innerHTML = '';

    pageTitle.textContent = 'Research Studios';
    pageSubtitle.textContent = 'Select a research studio to view advanced simulation platforms.';
    pageDesc.textContent = 'Click on the studio folders below to explore independent interactive simulation web pages.';
    backBtn.style.display = 'none';

    studios.filter(s => !s.isSubStudio).forEach(studio => {
        const card = document.createElement('div');
        // We reuse the card style, but it's a folder now
        card.className = `card ${studio.themeClass}`;
        card.style.textAlign = 'center';
        card.style.justifyContent = 'center';
        card.style.minHeight = '180px';

        card.innerHTML = `
            <h3 style="font-size: 1.4rem; text-decoration: none; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; margin: 0;">
                ${studio.shortTitle}
            </h3>
        `;

        card.addEventListener('click', () => {
            renderStudio(studio.id);
        });

        cardsContainer.appendChild(card);
    });
};

// Helper to get simulation specific theme class or fallback to studio theme class
const getSimThemeClass = (sim, studio) => {
    const mapping = {
        'nr5g_menu': 'card-5G_NR',
        'GNSS': 'card-GNSS',
        'WiFi': 'card-WiFi',
        'RFID': 'card-RFID',
        'bluetooth_menu': 'card-Bluetooth',
        'LPWAN': 'card-LPWAN',
        'defense_tech_menu': 'card-DefenseTech',
    };
    return mapping[sim.id] || studio.themeClass;
};

// Render specific Studio
const renderStudio = (studioId) => {
    currentStudioId = studioId;
    cardsContainer.className = 'grid-container'; // Restore grid layout
    cardsContainer.innerHTML = '';

    const studio = studios.find(s => s.id === studioId);
    if (!studio) return;

    pageTitle.textContent = studio.title;
    pageSubtitle.textContent = studio.description;
    pageDesc.textContent = 'Click the links below to access the specific simulation pages:';
    backBtn.style.display = 'block';

    studio.simulations.forEach(sim => {
        const isMenu = (sim.id === 'bluetooth_menu' || sim.id === 'nr5g_menu' || sim.id === 'defense_tech_menu');
        const isStatic = sim.isStatic === true;
        const card = document.createElement(isMenu || isStatic ? 'div' : 'a');
        const url = currentUrls[sim.id];

        if (!isMenu && !isStatic) {
            card.href = url;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
        }
        card.className = `card ${getSimThemeClass(sim, studio)}`;
        if (sim.span === 'full') {
            card.classList.add('card-full');
        }

        card.innerHTML = `
            <h3>${sim.title}</h3>
            ${sim.description ? `<p>${sim.description}</p>` : ''}
        `;

        card.addEventListener('click', (e) => {
            if (sim.id === 'bluetooth_menu') {
                e.preventDefault();
                renderStudio('bluetooth_studio');
            } else if (sim.id === 'nr5g_menu') {
                e.preventDefault();
                renderStudio('nr5g_studio');
            } else if (sim.id === 'defense_tech_menu') {
                e.preventDefault();
                renderStudio('defense_tech_studio');
            } else if (!isStatic && safeStorage.getItem('disclaimer_accepted') !== 'true') {
                if (!isMenu) {
                    e.preventDefault();
                    pendingUrl = url;
                    showDisclaimer(true);
                }
            }
        });

        cardsContainer.appendChild(card);
    });
};

// Render form inputs inside Modal
const renderForm = () => {
    form.innerHTML = '';

    // Create sections for each studio to make the form easier to read
    studios.forEach(studio => {
        // Skip header if all simulations are ignored
        const configurableSims = studio.simulations.filter(sim => sim.id !== 'bluetooth_menu' && sim.id !== 'nr5g_menu' && sim.id !== 'defense_tech_menu' && !sim.isStatic);
        if (configurableSims.length === 0) return;

        const header = document.createElement('h3');
        header.textContent = studio.shortTitle;
        header.style.color = '#fff';
        header.style.marginTop = '1rem';
        header.style.marginBottom = '0.5rem';
        header.style.fontSize = '1rem';
        form.appendChild(header);

        configurableSims.forEach(sim => {
            const value = currentUrls[sim.id] || sim.defaultUrl;

            const group = document.createElement('div');
            group.className = 'input-group';

            group.innerHTML = `
                <label for="input-${sim.id}">${sim.title}</label>
                <input type="url" id="input-${sim.id}" name="${sim.id}" value="${value}" placeholder="https://..." required>
            `;

            form.appendChild(group);
        });
    });
};

// Event Listeners
settingsBtn.addEventListener('click', () => {
    renderForm();
    modal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

disclaimerBtn.addEventListener('click', () => {
    showDisclaimer(false);
});

closeDisclaimerModalBtn.addEventListener('click', () => {
    disclaimerModal.classList.remove('active');
    pendingUrl = null;
});

disclaimerModal.addEventListener('click', (e) => {
    if (e.target === disclaimerModal) {
        if (safeStorage.getItem('disclaimer_accepted') === 'true') {
            disclaimerModal.classList.remove('active');
        }
    }
});

agreeDisclaimerBtn.addEventListener('click', () => {
    safeStorage.setItem('disclaimer_accepted', 'true');
    disclaimerModal.classList.remove('active');
    if (pendingUrl) {
        window.open(pendingUrl, '_blank', 'noopener,noreferrer');
        pendingUrl = null;
    }
});

declineDisclaimerBtn.addEventListener('click', () => {
    window.location.href = 'about:blank';
});

backBtn.addEventListener('click', () => {
    if (currentStudioId === 'bluetooth_studio' || currentStudioId === 'nr5g_studio' || currentStudioId === 'defense_tech_studio') {
        renderStudio('rf_studio');
    } else {
        renderFolders();
    }
});

saveUrlsBtn.addEventListener('click', () => {
    const inputs = form.querySelectorAll('input');
    let hasError = false;
    const tempUrls = {};
    const overrides = {};

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.reportValidity();
            hasError = true;
        } else {
            tempUrls[input.name] = input.value;

            // Only save if it differs from the default URL
            const sim = getAllSimulations().find(s => s.id === input.name);
            if (sim && input.value !== sim.defaultUrl) {
                overrides[input.name] = input.value;
            }
        }
    });

    if (!hasError) {
        // Safe update: merge inputs into state only on complete validation success
        Object.assign(currentUrls, tempUrls);

        // Save only explicit overrides so code updates to defaultUrl take effect automatically
        safeStorage.setItem('simulationUrls_v2', JSON.stringify(overrides));
        // Re-render current view to catch updates
        if (currentStudioId) {
            renderStudio(currentStudioId);
        } else {
            renderFolders();
        }
        modal.classList.remove('active');
    }
});

if (resetUrlsBtn) {
    resetUrlsBtn.addEventListener('click', () => {
        safeStorage.removeItem('simulationUrls_v2');
        currentUrls = loadUrls(); // reload from defaults now that storage is empty
        if (currentStudioId) {
            renderStudio(currentStudioId);
        } else {
            renderFolders();
        }
        modal.classList.remove('active');
    });
}

// Initial Render
renderFolders();
if (safeStorage.getItem('disclaimer_accepted') !== 'true') {
    showDisclaimer(true);
}
