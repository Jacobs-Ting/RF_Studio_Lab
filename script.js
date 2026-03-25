const simulations = [
    {
        id: '5G_NR',
        title: '🌐 5G NR Resource Mapping',
        description: 'Visualizes 5G NR physical layer resource allocation and Resource Block (RB) mapping mechanisms.',
        defaultUrl: 'https://5g-nr-phy-resource-simulation-ffbjp7jxsfr5nldwzazayk.streamlit.app'
    },
    {
        id: 'mmWave',
        title: '📡 mmWave Simulation',
        description: 'Simulates mmWave Phased Array antennas and Beamforming algorithms.',
        defaultUrl: 'https://mmwave-simulation-rpdmnfu328sks6wjgmcaq4.streamlit.app'
    },
    {
        id: 'Bluetooth',
        title: '📶 Bluetooth PHY Simulation',
        description: 'Simulates Bluetooth physical layer modulation, frequency offset, and packet transmission performance.',
        defaultUrl: 'https://bluetooth-phy-simulation-mbz7pibmpmdd2hmnjnkzmc.streamlit.app'
    },
    {
        id: 'WiFi',
        title: '📶 WiFi PHY Simulation',
        description: 'Analyzes WiFi OFDM/QAM constellation diagrams and simulates Multipath Fading.',
        defaultUrl: 'https://jacobs-ting.github.io/WiFi-PHY-Simulation_HTML/'
    },
    {
        id: 'GNSS',
        title: '🛰️ GNSS Simulation',
        description: 'Simulates Global Navigation Satellite System (GNSS) signal acquisition, Doppler shift, and positioning algorithms.',
        defaultUrl: 'https://gnsssimulation-jnhfeccymaqxgjgact2daf.streamlit.app'
    },
    {
        id: 'RFID',
        title: '🏷️ RFID-Echo Cancellation Simulator',
        description: 'Simulates RFID self-jamming mitigation and echo cancellation algorithms.',
        defaultUrl: 'https://rfidsimulation-vr944rmwfifivhdbbrfhuf.streamlit.app'
    }
];

// Load URLs from local storage or use defaults
const loadUrls = () => {
    const saved = localStorage.getItem('simulationUrls');
    if (saved) {
        return JSON.parse(saved);
    }
    const defaults = {};
    simulations.forEach(sim => defaults[sim.id] = sim.defaultUrl);
    return defaults;
};

// State
let currentUrls = loadUrls();

// DOM Elements
const cardsContainer = document.getElementById('cards-container');
const modal = document.getElementById('url-modal');
const form = document.getElementById('url-form');
const settingsBtn = document.getElementById('settings-btn');
const closeModalBtn = document.getElementById('close-modal');
const saveUrlsBtn = document.getElementById('save-urls');

// Render Cards
const renderCards = () => {
    cardsContainer.innerHTML = '';
    simulations.forEach(sim => {
        const url = currentUrls[sim.id];
        const card = document.createElement('a');
        card.href = url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = `card card-${sim.id}`;

        card.innerHTML = `
            <h3>${sim.title}</h3>
            <p>${sim.description}</p>
        `;

        cardsContainer.appendChild(card);
    });
};

// Render form inputs inside Modal
const renderForm = () => {
    form.innerHTML = '';
    simulations.forEach(sim => {
        const value = currentUrls[sim.id];

        const group = document.createElement('div');
        group.className = 'input-group';

        group.innerHTML = `
            <label for="input-${sim.id}">${sim.title}</label>
            <input type="url" id="input-${sim.id}" name="${sim.id}" value="${value}" placeholder="https://..." required>
        `;

        form.appendChild(group);
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

saveUrlsBtn.addEventListener('click', () => {
    const inputs = form.querySelectorAll('input');
    let hasError = false;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.reportValidity();
            hasError = true;
        } else {
            currentUrls[input.name] = input.value;
        }
    });

    if (!hasError) {
        localStorage.setItem('simulationUrls', JSON.stringify(currentUrls));
        renderCards();
        modal.classList.remove('active');
    }
});

// Initial Render
renderCards();
