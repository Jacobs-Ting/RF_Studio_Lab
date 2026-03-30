// Define the folder structure and simulations
const studios = [
    {
        id: 'rf_studio',
        title: 'RF System Research Studio',
        shortTitle: 'RF System Research Studio',
        description: 'Advanced communication physical layer (PHY) simulation platforms.',
        themeClass: 'card-5G_NR',
        simulations: [
            { id: '5G_NR', title: '5G NR', description: 'Visualizes 5G NR physical layer resource allocation and Resource Block (RB) mapping mechanisms.', defaultUrl: 'https://5g-nr-phy-resource-simulation-ffbjp7jxsfr5nldwzazayk.streamlit.app' },
            { id: 'GNSS', title: 'GNSS', description: 'Simulates Global Navigation Satellite System (GNSS) signal acquisition, Doppler shift, and positioning algorithms.', defaultUrl: 'https://gnsssimulation-jnhfeccymaqxgjgact2daf.streamlit.app' },
            { id: 'WiFi', title: 'WiFi', description: 'Analyzes WiFi OFDM/QAM constellation diagrams and simulates Multipath Fading.', defaultUrl: 'https://jacobs-ting.github.io/WiFi-PHY-Simulation_HTML/' },
            { id: 'RFID', title: 'RFID', description: 'Simulates RFID self-jamming mitigation and echo cancellation algorithms.', defaultUrl: 'https://rfidsimulation-vr944rmwfifivhdbbrfhuf.streamlit.app' },
            { id: 'Bluetooth', title: 'Bluetooth', description: 'Simulates Bluetooth physical layer modulation, frequency offset, and packet transmission performance.', defaultUrl: 'https://bluetooth-phy-simulation-mbz7pibmpmdd2hmnjnkzmc.streamlit.app' },
            { id: 'UWB', title: 'UWB', description: 'Ultra-Wideband physical layer simulation algorithms.', defaultUrl: 'https://uwbsimulation-qfcr6baya9fmwrhmyb4shm.streamlit.app' }
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
            { id: 'mmwave_phase', title: 'mmWave Phase shifter Calibration', description: 'Phase shifter calibration algorithms.', defaultUrl: 'https://example.com/phase' }
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
            { id: '6g_ai_ran', title: 'Next Generation AI RAN Simulation', description: 'AI RAN simulation and analysis.', defaultUrl: 'https://example.com/ai-ran' },
            { id: '6g_noma', title: 'Next Generation NOMA Technology Simulation', description: 'NOMA Technology concepts and visualization.', defaultUrl: 'https://example.com/noma' }
        ]
    }
];

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
    const saved = localStorage.getItem('simulationUrls_v2');
    if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaults, ...parsed };
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

    studios.forEach(studio => {
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
        const url = currentUrls[sim.id];
        const card = document.createElement('a');
        card.href = url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        // Give sub-cards the parent folder's theme class for consistency, or pick uniquely.
        // We will default to parent theme class.
        card.className = `card ${studio.themeClass}`;

        card.innerHTML = `
            <h3>${sim.title}</h3>
            ${sim.description ? `<p>${sim.description}</p>` : ''}
        `;

        cardsContainer.appendChild(card);
    });
};

// Render form inputs inside Modal
const renderForm = () => {
    form.innerHTML = '';

    // Create sections for each studio to make the form easier to read
    studios.forEach(studio => {
        const header = document.createElement('h3');
        header.textContent = studio.shortTitle;
        header.style.color = '#fff';
        header.style.marginTop = '1rem';
        header.style.marginBottom = '0.5rem';
        header.style.fontSize = '1rem';
        form.appendChild(header);

        studio.simulations.forEach(sim => {
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

backBtn.addEventListener('click', () => {
    renderFolders();
});

saveUrlsBtn.addEventListener('click', () => {
    const inputs = form.querySelectorAll('input');
    let hasError = false;
    const overrides = {};

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.reportValidity();
            hasError = true;
        } else {
            currentUrls[input.name] = input.value;

            // Only save if it differs from the default URL
            const sim = getAllSimulations().find(s => s.id === input.name);
            if (sim && input.value !== sim.defaultUrl) {
                overrides[input.name] = input.value;
            }
        }
    });

    if (!hasError) {
        // Save only explicit overrides so code updates to defaultUrl take effect automatically
        localStorage.setItem('simulationUrls_v2', JSON.stringify(overrides));
        // Re-render current view to catch updates
        if (currentStudioId) {
            renderStudio(currentStudioId);
        } else {
            renderFolders();
        }
        modal.classList.remove('active');
    }
});

// Initial Render
renderFolders();
