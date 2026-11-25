
const locations = [

    {
        name: "Хадамоти танзим дар соҳаи нақлиёт",
        category: "khadamat",
        region: "Душанбе",
        address: "Шаҳри Душанбе",
        lat: 38.5598,
        lng: 68.7870
    },

    {
        name: "Раёсати марказӣ",
        category: "raesat",
        region: "Душанбе",
        address: "Шаҳри Душанбе",
        lat: 38.5598,
        lng: 68.7870
    },

    {
        name: "Шуъбаи шаҳри Хуҷанд",
        category: "shuba",
        region: "Суғд",
        address: "Шаҳри Хуҷанд",
        lat: 40.2833,
        lng: 69.6333
    },

    {
        name: "Шуъбаи шаҳри Бохтар",
        category: "shuba",
        region: "Хатлон",
        address: "Шаҳри Бохтар",
        lat: 37.8364,
        lng: 68.7803
    },

    {
        name: "Шуъбаи шаҳри Ваҳдат",
        category: "shuba",
        region: "НТМ",
        address: "Шаҳри Ваҳдат",
        lat: 38.5500,
        lng: 69.0190
    },

    {
        name: "Нуқтаи сарҳадии Панҷи Поён",
        category: "sarhad",
        region: "Хатлон",
        address: "Панҷи Поён",
        lat: 37.18,
        lng: 68.57
    },

    {
        name: "Нуқтаи баркаши Фотеҳобод",
        category: "barkashoni",
        region: "Суғд",
        address: "Фотеҳобод",
        lat: 40.22,
        lng: 69.72
    },

    {
        name: "Нуқтаи баркаши Истиқлол",
        category: "barkashoni",
        region: "Суғд",
        address: "Истиқлол",
        lat: 40.07,
        lng: 69.37
    },

    {
        name: "Нуқтаи баркаши Патар",
        category: "barkashoni",
        region: "Суғд",
        address: "Патар",
        lat: 40.25,
        lng: 70.03
    },

    {
        name: "Нуқтаи баркаши Маданият",
        category: "barkashoni",
        region: "Суғд",
        address: "Маданият",
        lat: 40.27,
        lng: 70.03
    },

    {
        name: "Нуқтаи баркаши Спитамен",
        category: "barkashoni",
        region: "Суғд",
        address: "Ноҳияи Спитамен",
        lat: 40.01,
        lng: 69.66
    },

    {
        name: "Нуқтаи баркаши ЁВА (Гала майдон)",
        category: "barkashoni",
        region: "Суғд",
        address: "Ёва, Гала майдон",
        lat: 40.30,
        lng: 69.63
    },

    {
        name: "Нуқтаи баркаши Шабода",
        category: "barkashoni",
        region: "Суғд",
        address: "Шабода",
        lat: 40.23,
        lng: 69.55
    },

    {
        name: "Нуқтаи баркаши Айни Панҷакент",
        category: "barkashoni",
        region: "Суғд",
        address: "Самти Айни – Панҷакент",
        lat: 39.45,
        lng: 68.34
    },

    {
        name: "Нуқтаи баркаши Қизил-қалъа",
        category: "barkashoni",
        region: "Хатлон",
        address: "Қизил-қалъа",
        lat: 37.47,
        lng: 68.55
    },

    {
        name: "Нуқтаи баркаши дидбонгоҳи Ҷалолиддини Балхӣ",
        category: "barkashoni",
        region: "Хатлон",
        address: "Ноҳияи Ҷалолиддини Балхӣ",
        lat: 37.95,
        lng: 68.10
    },

    {
        name: "Нуқтаи баркаши Панҷи поён",
        category: "barkashoni",
        region: "Хатлон",
        address: "Панҷи Поён",
        lat: 37.18,
        lng: 68.57
    },

    {
        name: "Нуқтаи баркаши РБ-04, 164 км минтақаи Кӯлоб",
        category: "barkashoni",
        region: "Хатлон",
        address: "Минтақаи Кӯлоб",
        lat: 37.85,
        lng: 69.78
    },
const locations = [
    {
        name: "Хадамоти танзим дар соҳаи нақлиёт",
        category: "khadamat",
        region: "Душанбе",
        address: "Шаҳри Душанбе",
        lat: 38.5598,
        lng: 68.7870
    },
    {
        name: "Раёсати марказӣ",
        category: "raesat",
        region: "Душанбе",
        address: "Шаҳри Душанбе",
        lat: 38.5598,
        lng: 68.7870
    },
    {
        name: "Шуъбаи шаҳри Хуҷанд",
        category: "shuba",
        region: "Суғд",
        address: "Шаҳри Хуҷанд",
        lat: 40.2833,
        lng: 69.6333
    },
    {
        name: "Шуъбаи шаҳри Бохтар",
        category: "shuba",
        region: "Хатлон",
        address: "Шаҳри Бохтар",
        lat: 37.8364,
        lng: 68.7803
    },
    {
        name: "Шуъбаи шаҳри Ваҳдат",
        category: "shuba",
        region: "НТМ",
        address: "Шаҳри Ваҳдат",
        lat: 38.5500,
        lng: 69.0190
    },
    {
        name: "Нуқтаи сарҳадии Панҷи Поён",
        category: "sarhad",
        region: "Хатлон",
        address: "Панҷи Поён",
        lat: 37.18,
        lng: 68.57
    },
    {
        name: "Нуқтаи баркаши Фотеҳобод",
        category: "barkashoni",
        region: "Суғд",
        address: "Фотеҳобод",
        lat: 40.22,
        lng: 69.72
    },
    {
        name: "Нуқтаи баркаши Истиқлол",
        category: "barkashoni",
        region: "Суғд",
        address: "Истиқлол",
        lat: 40.07,
        lng: 69.37
    },
    {
        name: "Нуқтаи баркаши Патар",
        category: "barkashoni",
        region: "Суғд",
        address: "Патар",
        lat: 40.25,
        lng: 70.03
    },
    {
        name: "Нуқтаи баркаши Маданият",
        category: "barkashoni",
        region: "Суғд",
        address: "Маданият",
        lat: 40.27,
        lng: 70.03
    },
    {
        name: "Нуқтаи баркаши Спитамен",
        category: "barkashoni",
        region: "Суғд",
        address: "Ноҳияи Спитамен",
        lat: 40.01,
        lng: 69.66
    },
    {
        name: "Нуқтаи баркаши ЁВА (Гала майдон)",
        category: "barkashoni",
        region: "Суғд",
        address: "Ёва, Гала майдон",
        lat: 40.30,
        lng: 69.63
    },
    {
        name: "Нуқтаи баркаши Шабода",
        category: "barkashoni",
        region: "Суғд",
        address: "Шабода",
        lat: 40.23,
        lng: 69.55
    },
    {
        name: "Нуқтаи баркаши Айни Панҷакент",
        category: "barkashoni",
        region: "Суғд",
        address: "Самти Айни – Панҷакент",
        lat: 39.45,
        lng: 68.34
    },
    {
        name: "Нуқтаи баркаши Қизил-қалъа",
        category: "barkashoni",
        region: "Хатлон",
        address: "Қизил-қалъа",
        lat: 37.47,
        lng: 68.55
    },
    {
        name: "Нуқтаи баркаши дидбонгоҳи Ҷалолиддини Балхӣ",
        category: "barkashoni",
        region: "Хатлон",
        address: "Ноҳияи Ҷалолиддини Балхӣ",
        lat: 37.95,
        lng: 68.10
    },
    {
        name: "Нуқтаи баркаши Панҷи поён",
        category: "barkashoni",
        region: "Хатлон",
        address: "Панҷи Поён",
        lat: 37.18,
        lng: 68.57
    },
    {
        name: "Нуқтаи баркаши РБ-04, 164 км минтақаи Кӯлоб",
        category: "barkashoni",
        region: "Хатлон",
        address: "Минтақаи Кӯлоб",
        lat: 37.85,
        lng: 69.78
    },
    {
        name: "Нуқтаи баркаши Тевалай",
        category: "barkashoni",
        region: "Хатлон",
        address: "Тевалай",
        lat: 38.00,
        lng: 69.20
    },
    {
        name: "Нуқтаи баркаши Норак",
        category: "barkashoni",
        region: "Хатлон",
        address: "Шаҳри Норак",
        lat: 38.39,
        lng: 69.32
    },
    {
        name: "Нуқтаи баркаши ш. Ваҳдат",
        category: "barkashoni",
        region: "НТМ",
        address: "Шаҳри Ваҳдат",
        lat: 38.55,
        lng: 69.019
    },
    {
        name: "Нуқтаи баркаши Файзобод",
        category: "barkashoni",
        region: "НТМ",
        address: "Ноҳияи Файзобод",
        lat: 38.55,
        lng: 69.32
    }
];

const map = L.map("map").setView([38.8, 70.5], 7);

L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const markerByItem = new Map();

function categoryName(category) {
    const names = {
        khadamat: "Хадамоти марказӣ",
        raesat: "Раёсатҳо",
        shuba: "Шуъбаҳо",
        sarhad: "Сарҳадҳо",
        barkashoni: "Боркашонӣ"
    };

    return names[category] || "Сохтор";
}

function updateStatistics() {
    document.getElementById("totalCount").textContent =
        locations.length;

    document.getElementById("khadamatCount").textContent =
        locations.filter(x => x.category === "khadamat").length;

    document.getElementById("raesatCount").textContent =
        locations.filter(x => x.category === "raesat").length;

    document.getElementById("shubaCount").textContent =
        locations.filter(x => x.category === "shuba").length;

    document.getElementById("cargoCount").textContent =
        locations.filter(x => x.category === "barkashoni").length;
}

function showMarkers(data) {
    markerLayer.clearLayers();
    markerByItem.clear();

    data.forEach(item => {
        const marker = L.marker([item.lat, item.lng]);

        marker.bindPopup(`
            <div class="popup-text">
                <h3 class="popup-title">${item.name}</h3>
                <p><b>Категория:</b> ${categoryName(item.category)}</p>
                <p><b>Минтақа:</b> ${item.region}</p>
                <p><b>Суроға:</b> ${item.address}</p>
            </div>
        `);

        marker.addTo(markerLayer);
        markerByItem.set(item, marker);
    });
}

function renderPlaces() {
    const category = document.getElementById("category").value;
    const region = document.getElementById("region").value;
    const search = document.getElementById("search").value
        .trim()
        .toLowerCase();

    const container = document.getElementById("places");
    container.innerHTML = "";

    const filtered = locations.filter(item => {
        const matchCategory =
            category === "all" || item.category === category;

        const matchRegion =
            region === "all" || item.region === region;

        const matchSearch =
            item.name.toLowerCase().includes(search) ||
            item.address.toLowerCase().includes(search) ||
            item.region.toLowerCase().includes(search);

        return matchCategory && matchRegion && matchSearch;
    });

    document.getElementById("resultCount").textContent =
        filtered.length;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty">
                Объект ёфт нашуд.
            </div>
        `;

        showMarkers([]);
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "place";

        const title = document.createElement("h4");
        title.textContent = "📍 " + item.name;

        const address = document.createElement("p");
        address.textContent = "Суроға: " + item.address;

        const regionText = document.createElement("p");
        regionText.textContent = "Минтақа: " + item.region;

        const badge = document.createElement("span");
        badge.className = "category-label";
        badge.textContent = categoryName(item.category);

        card.append(title, address, regionText, badge);

        card.addEventListener("click", () => {
            document.querySelectorAll(".place").forEach(el => {
                el.classList.remove("active");
            });

            card.classList.add("active");

            const marker = markerByItem.get(item);

            map.flyTo(
                [item.lat, item.lng],
                13,
                { duration: 1.3 }
            );

            if (marker) {
                marker.openPopup();
            }
        });

        container.appendChild(card);
    });

    showMarkers(filtered);
}

document.getElementById("category")
    .addEventListener("change", renderPlaces);

document.getElementById("region")
    .addEventListener("change", renderPlaces);

document.getElementById("search")
    .addEventListener("input", renderPlaces);

document.getElementById("resetFilters")
    .addEventListener("click", () => {
        document.getElementById("category").value = "all";
        document.getElementById("region").value = "all";
        document.getElementById("search").value = "";

        renderPlaces();
    });

updateStatistics();
renderPlaces();

setTimeout(() => {
    map.invalidateSize();
}, 300);

