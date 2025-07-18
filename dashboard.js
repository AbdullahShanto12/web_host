
  // Feature data array - same as your PHP $features
  const features = [
    ["Basic Location Search", "fa-map-marker-alt", "primary", "Discover safety scores instantly for any location in Dhaka using real-time AI analysis. The system evaluates crime statistics, foot traffic, and environmental factors to give you an accurate safety score for any area. Simply enter a location, and get a snapshot of its safety levels."],
    ["Map Exploration", "fa-map", "success", "Visually explore crime zones, lighting, CCTV coverage, and safe paths on an interactive map. Users can toggle between different layers of data to identify high-risk areas and safer routes. The map is regularly updated to reflect real-time changes in safety conditions."],
    ["Visual Safety Ratings", "fa-chart-pie", "danger", "Dive into colorful charts and analytics comparing safety scores across neighborhoods. These visual tools give users easy access to key metrics like crime rates, lighting conditions, and police presence, allowing you to make informed decisions about your safety."],
    ["Check Before Going Out", "fa-shield-alt", "warning", "Let AI scan your route and suggest safety levels before you step outside. The system checks real-time data on crime trends, traffic, and environmental factors, helping you decide if your planned route is safe or if you should consider alternatives."],
    ["Identify Safer Routes", "fa-route", "info", "Avoid unsafe areas with intelligent alternate path suggestions based on live data. The app uses historical data and real-time reports to suggest safer routes that avoid high-risk zones, helping you navigate through the city more securely."],
    ["Understanding Safety Factors", "fa-search-location", "secondary", "Learn what influences safety scores—lighting, crowd density, recent incidents, and more. This feature helps you understand how various environmental and social factors impact the safety of a given area. You can make better decisions by knowing what makes a place safe or risky."],
    ["Using the Map Legend", "fa-info-circle", "dark", "Quickly understand symbols and color codes to decode the safety map effectively. The map legend provides a guide to help you interpret safety data, making it easier to read the map and assess the risks in various areas at a glance."],
    ["Notifications & Alerts", "fa-bell", "pink", "Stay updated with timely alerts about risky zones and changing conditions near you. The app sends notifications when there are significant changes in the safety of areas you're nearby or routes you're planning to take. You'll always be informed when something important happens in your surroundings."],
    ["Emergency Calls", "fa-phone-alt", "indigo", "Tap to quickly reach emergency services or share your location with trusted contacts. This feature gives you instant access to emergency phone numbers and allows you to send your live location to friends, family, or emergency responders if needed. Always stay connected when help is just a tap away."]
  ];

  // Safety tips array - same as your PHP $tips
  const safetyTips = [
    ["fa-moon text-danger", "Avoid poorly lit or isolated routes after dark — safety begins with visibility."],
    ["fa-user-friends text-primary", "Inform a friend or family member about your travel route and ETA."],
    ["fa-shield-alt text-warning", "Use the <strong>\"Check Before Going Out\"</strong> feature to analyze your path."],
    ["fa-video text-info", "Prefer routes with CCTV coverage and steady pedestrian movement."],
    ["fa-location-arrow text-secondary", "Enable real-time location sharing with your trusted contacts."],
    ["fa-battery-full text-success", "Keep your phone charged — carry a power bank just in case!"],
    ["fa-phone text-pink", "Set up emergency contacts for one-tap calling when it counts."],
    ["fa-bell text-warning", "Pay attention to safety alerts and push notifications from the app."],
    ["fa-exclamation-triangle text-danger", "If your gut says “no,” trust it — reroute instantly for your peace of mind."],
    ["fa-headphones-alt text-secondary", "Avoid using headphones in both ears when you're in a new or quiet area."],
    ["fa-history text-info", "Use the SafeWay route history to reflect on and avoid risky paths."]
  ];

  function renderFeatures() {
    const container = document.getElementById('feature-boxes-container');
    container.innerHTML = '';

    features.forEach(([title, icon, color, desc]) => {
      const div = document.createElement('div');
      div.className = 'col';

      div.innerHTML = `
        <div class="feature-box p-4 bg-light rounded border-start border-4 border-${color} shadow-sm h-100 transition hover-shadow">
          <h5 class="fw-bold">
            <i class="fas ${icon} text-${color} me-2"></i> ${title}
          </h5>
          <p class="text-muted small mb-0">${desc}</p>
        </div>
      `;

      container.appendChild(div);
    });
  }

  function renderSafetyTips() {
    const list = document.getElementById('safety-tips-list');
    list.innerHTML = '';

    safetyTips.forEach(([icon, text]) => {
      const li = document.createElement('li');
      li.className = 'd-flex align-items-start';

      li.innerHTML = `
        <i class="fas ${icon} me-3 mt-1 fs-5"></i>
        <span class="small">${text}</span>
      `;

      list.appendChild(li);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderFeatures();
    renderSafetyTips();
  });

  // Dummy Data - Replace with real stats if available
  const chartData = {
    crimeByArea: {
      labels: ["Gulshan", "Banani", "Mirpur", "Dhanmondi", "Uttara"],
      data: [45, 38, 60, 27, 52]
    },
    areaSafety: {
      labels: ["High", "Moderate", "Low"],
      data: [40, 35, 25]
    },
    safetyToolUsage: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [22, 28, 35, 31, 26, 40, 18]
    },
    featureRadar: {
      labels: ["Map Explore", "Check Safety", "Route Finder", "Emergency", "Feedback"],
      data: [70, 55, 45, 30, 20]
    },
    crimeTypeTrend: {
      labels: ["Robbery", "Harassment", "Theft", "Assault"],
      data: [
        [12, 15, 14, 20, 19, 18, 17],  // Robbery
        [8, 10, 12, 13, 14, 12, 11],   // Harassment
        [20, 22, 25, 23, 24, 22, 21],  // Theft
        [5, 6, 7, 5, 4, 5, 6]          // Assault
      ]
    },
    responseBar: {
      labels: ["Gulshan", "Banani", "Mirpur", "Uttara"],
      data: [8, 12, 20, 15] // in minutes
    },
    notifEngage: {
      labels: ["Opened", "Ignored", "Clicked"],
      data: [150, 50, 100]
    },
    feedbackBubble: {
      datasets: [{
        label: "Feedback vs Traffic",
        data: [
          {x: 10, y: 40, r: 10},
          {x: 20, y: 20, r: 15},
          {x: 30, y: 50, r: 8},
          {x: 40, y: 35, r: 12}
        ],
        backgroundColor: "rgba(75, 192, 192, 0.4)"
      }]
    }
  };

  // Chart Render Functions
  new Chart(document.getElementById("crimeChart"), {
    type: "bar",
    data: {
      labels: chartData.crimeByArea.labels,
      datasets: [{
        label: "Incidents",
        data: chartData.crimeByArea.data,
        backgroundColor: "#f87171"
      }]
    }
  });

  new Chart(document.getElementById("areaSafetyPie"), {
    type: "pie",
    data: {
      labels: chartData.areaSafety.labels,
      datasets: [{
        data: chartData.areaSafety.data,
        backgroundColor: ["#10b981", "#facc15", "#ef4444"]
      }]
    }
  });

  new Chart(document.getElementById("routeCheckLine"), {
    type: "line",
    data: {
      labels: chartData.safetyToolUsage.labels,
      datasets: [{
        label: "Safety Check Usage",
        data: chartData.safetyToolUsage.data,
        fill: false,
        borderColor: "#3b82f6",
        tension: 0.4
      }]
    }
  });

  new Chart(document.getElementById("featureRadar"), {
    type: "radar",
    data: {
      labels: chartData.featureRadar.labels,
      datasets: [{
        label: "Usage Level",
        data: chartData.featureRadar.data,
        backgroundColor: "rgba(96,165,250,0.2)",
        borderColor: "#3b82f6"
      }]
    }
  });

  new Chart(document.getElementById("crimeTypeTrend"), {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: chartData.crimeTypeTrend.labels.map((label, idx) => ({
        label,
        data: chartData.crimeTypeTrend.data[idx],
        fill: false,
        borderColor: `hsl(${idx * 90}, 70%, 50%)`,
        tension: 0.4
      }))
    }
  });

  new Chart(document.getElementById("responseBar"), {
    type: "bar",
    data: {
      labels: chartData.responseBar.labels,
      datasets: [{
        label: "Avg. Response Time (min)",
        data: chartData.responseBar.data,
        backgroundColor: "#6366f1"
      }]
    }
  });

  new Chart(document.getElementById("notifEngage"), {
    type: "doughnut",
    data: {
      labels: chartData.notifEngage.labels,
      datasets: [{
        data: chartData.notifEngage.data,
        backgroundColor: ["#10b981", "#9ca3af", "#3b82f6"]
      }]
    }
  });

  new Chart(document.getElementById("bubbleFeedback"), {
    type: "bubble",
    data: {
      datasets: chartData.feedbackBubble.datasets
    },
    options: {
      scales: {
        x: { title: { display: true, text: "Foot Traffic" } },
        y: { title: { display: true, text: "Feedback Score" } }
      }
    }
  });
