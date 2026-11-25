
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
        address: "Ис
const locations = [
    { name: "Хадамоти танзим дар соҳаи нақлиёт", category: "khadamat", region: "Душанбе", address: "Шаҳри Душанбе", lat: 38.5598, lng: 68.7870 },
    { name: "Раёсати марказӣ", category: "raesat", region: "Душанбе", address: "Шаҳри Душанбе", lat: 38.5598, lng: 68.7870 },
    { name: "Шуъбаи шаҳри Хуҷанд", category: "shuba", region: "Суғд", address: "Шаҳри Хуҷанд", lat: 40.2833, lng: 69.6333 },
    { name: "Шуъбаи шаҳри Бохтар", category: "shuba", region: "Хатлон", address: "Шаҳри Бохтар", lat: 37.8364, lng: 68.7803 },
    { name: "Шуъбаи шаҳри Ваҳдат", category: "shuba", region: "НТМ", address: "Шаҳри Ваҳдат", lat: 38.5500, lng: 69.0190 },
    { name: "Нуқтаи сарҳадии Панҷи Поён", category: "sarhad", region: "Хатлон", address: "Панҷи Поён", lat: 37.18, lng: 68.57 },
    { name: "Гузаргохи Сархади Фотеҳобод", category: "barkashoni", region: "Суғд", address: "Фотеҳобод", lat: 40.22, lng: 69.72 },
    { name: "Гузаргохи Сархади Истиқлол", category: "barkashoni", region: "Суғд", address: "Истиқлол", lat: 40.07, lng: 69.37 },
    { name: "Гузаргохи Сархади Патар", category: "barkashoni", region: "Суғд", address: "Патар", lat: 40.25, lng: 70.03 },
    { name: "Гузаргохи Сархади Маданият", category: "barkashoni", region: "Суғд", address: "Маданият", lat: 40.27, lng: 70.03 },
    { name: "Гузаргохи Сархади Спитамен", category: "barkashoni", region: "Суғд", address: "Ноҳияи Спитамен", lat: 40.01, lng: 69.66 },
    { name: "Гузаргохи Сархади ЁВА (Гала майдон)", category: "barkashoni", region: "Суғд", address: "Ёва, Гала майдон", lat: 40.30, lng: 69.63 },
    { name: "Гузаргохи Сархади Шабода", category: "barkashoni", region: "Суғд", address: "Шабода", lat: 40.23, lng: 69.55 },
    { name: "Гузаргохи Сархади Айни Панҷакент", category: "barkashoni", region: "Суғд", address: "Самти Айни – Панҷакент", lat: 39.45, lng: 68.34 },
    { name: "Гузаргохи Сархади Қизил-қалъа", category: "barkashoni", region: "Хатлон", address: "Қизил-қалъа", lat: 37.47, lng: 68.55 },
    { name: "Гузаргохи Сархади дидбонгоҳи Ҷалолиддини Балхӣ", category: "barkashoni", region: "Хатлон", address: "Ноҳияи Ҷалолиддини Балхӣ", lat: 37.95, lng: 68.10 },
    { name: "Гузаргохи Сархади Панҷи поён", category: "barkashoni", region: "Хатлон", address: "Панҷи Поён", lat: 37.18, lng: 68.57 },
    { name: "Гузаргохи Сархади РБ-04, 164 км минтақаи Кӯлоб", category: "barkashoni", region: "Хатлон", address: "Минтақаи Кӯлоб", lat: 37.85, lng: 69.78 },
    { name: "Гузаргохи Сархади Тевалай", category: "barkashoni", region: "Хатлон", address: "Тевалай", lat: 38.00, lng: 69.20 },
    { name: "Гузаргохи Сархади Норак", category: "barkashoni", region: "Хатлон", address: "Шаҳри Норак", lat: 38.39, lng: 69.32 },
    { name: "Гузаргохи Сархади ш. Ваҳдат", category: "barkashoni", region: "НТМ", address: "Шаҳри Ваҳдат", lat: 38.55, lng: 69.019 },
    { name: "Гузаргохи Сархади Файзобод", category: "barkashoni", region: "НТМ", address: "Ноҳияи Файзобод", lat: 38.55, lng: 69.32 }
];

const categoryNames = {
    khadamat: "Хадамоти марказӣ",
    raesat: "Раёсатҳо",
    shuba: "Шуъбаҳо",
    sarhad: "Сарҳадҳо",
    barkashoni: "Гузаргохи Сархади"
};

document.addEventListener("DOMContentLoaded", function () {
    const mapElement = document.getElementById("map");

    if (!mapElement || typeof L === "undefined") {
        return;
    }

    const elements = {
        total: document.getElementById("totalCount"),
        khadamat: document.getElementById("khadamatCount"),
        raesat: document.getElementById("raesatCount"),
        shuba: document.getElementById("shubaCount"),
        cargo: document.getElementById("cargoCount"),
        category: document.getElementById("category"),
        region: document.getElementById("region"),
        search: document.getElementById("search"),
        reset: document.getElementById("resetFilters"),
        places: document.getElementById("places"),
        resultCount: document.getElementById("resultCount")
    };

    const map = L.map("map", {
        zoomControl: true,
        attributionControl: true
    }).setView([38.8, 70.5], 7);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.attributionControl.setPrefix(false);

    const markerLayer = L.layerGroup().addTo(map);
    const markerByItem = new Map();

    function updateStatistics() {
        if (elements.total) {
            elements.total.textContent = locations.length;
        }

        if (elements.khadamat) {
            elements.khadamat.textContent =
                locations.filter(item => item.category === "khadamat").length;
        }

        if (elements.raesat) {
            elements.raesat.textContent =
                locations.filter(item => item.category === "raesat").length;
        }

        if (elements.shuba) {
            elements.shuba.textContent =
                locations.filter(item => item.category === "shuba").length;
        }

        if (elements.cargo) {
            elements.cargo.textContent =
                locations.filter(item => item.category === "barkashoni").length;
        }
    }

    function showMarkers(data) {
        markerLayer.clearLayers();
        markerByItem.clear();

        data.forEach(item => {
            const marker = L.marker([item.lat, item.lng]);

            const popup = document.createElement("div");
            popup.className = "popup-text";

            const title = document.createElement("h3");
            title.className = "popup-title";
            title.textContent = item.name;

            const category = document.createElement("p");
            category.textContent =
                "Категория: " + (categoryNames[item.category] || "Сохтор");

            const region = document.createElement("p");
            region.textContent = "Минтақа: " + item.region;

            const address = document.createElement("p");
            address.textContent = "Суроға: " + item.address;

            popup.append(title, category, region, address);

            marker.bindPopup(popup);
            marker.addTo(markerLayer);

            markerByItem.set(item, marker);
        });
    }

    function renderPlaces() {
        if (!elements.places) {
            return;
        }

        const selectedCategory = elements.category
            ? elements.category.value
            : "all";

        const selectedRegion = elements.region
            ? elements.region.value
            : "all";

        const searchText = elements.search
            ? elements.search.value.trim().toLowerCase()
            : "";

        const filtered = locations.filter(item => {
            const matchesCategory =
                selectedCategory === "all" ||
                item.category === selectedCategory;

            const matchesRegion =
                selectedRegion === "all" ||
                item.region === selectedRegion;

            const searchableText =
                `${item.name} ${item.address} ${item.region}`.toLowerCase();

            const matchesSearch = searchableText.includes(searchText);

            return matchesCategory && matchesRegion && matchesSearch;
        });

        elements.places.innerHTML = "";

        if (elements.resultCount) {
            elements.resultCount.textContent = filtered.length;
        }

        if (filtered.length === 0) {
            const empty = document.createElement("div");
            empty.className = "empty";
            empty.textContent = "Объект ёфт нашуд.";

            elements.places.appendChild(empty);
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

            const region = document.createElement("p");
            region.textContent = "Минтақа: " + item.region;

            const badge = document.createElement("span");
            badge.className = "category-label";
            badge.textContent =
                categoryNames[item.category] || "Сохтор";

            card.append(title, address, region, badge);

            card.addEventListener("click", function () {
                document.querySelectorAll(".place.active").forEach(element => {
                    element.classList.remove("active");
                });

                card.classList.add("active");

                const marker = markerByItem.get(item);

                map.flyTo([item.lat, item.lng], 13, {
                    duration: 1.3
                });

                if (marker) {
                    marker.openPopup();
                }
            });

            elements.places.appendChild(card);
        });

        showMarkers(filtered);
    }

    if (elements.category) {
        elements.category.addEventListener("change", renderPlaces);
    }

    if (elements.region) {
        elements.region.addEventListener("change", renderPlaces);
    }

    if (elements.search) {
        elements.search.addEventListener("input", renderPlaces);
    }

    if (elements.reset) {
        elements.reset.addEventListener("click", function () {
            if (elements.category) {
                elements.category.value = "all";
            }

            if (elements.region) {
                elements.region.value = "all";
            }

            if (elements.search) {
                elements.search.value = "";
            }

            renderPlaces();
        });
    }

    updateStatistics();
    renderPlaces();

    setTimeout(function () {
        map.invalidateSize();
    }, 300);
});


