// src/script.js

// --- START: CRISIS SECTION LOGIC ---

// Detect document language to load the correct content
const isEnglish = document.documentElement.lang.toLowerCase() === 'en-us';

// Store all text content in an object for easy management
const crisisContent = {
    water: {
        title: isEnglish ? "WATER POLLUTION" : "POLUIÇÃO: ÁGUA",
        explanation: isEnglish 
            ? "Water pollution is any change in its physical, chemical, or biological properties that impairs its quality and makes it unsafe. It's one of the most critical environmental impacts, primarily caused by human activity." 
            : "A poluição da água é definida como qualquer alteração nas suas características físicas, químicas ou biológicas que comprometa a sua qualidade e potabilidade. Este é um dos impactos ambientais mais críticos, resultando principalmente da ação humana.",
        consequence: isEnglish 
            ? "The consequences of water pollution are severe, affecting human health and ecosystems: • Human Health: Proliferation of waterborne diseases like hepatitis and cholera, and loss of access to safe drinking water. • Environment: Decline in aquatic biodiversity, groundwater contamination, and eutrophication, which leads to the collapse of aquatic ecosystems." 
            : "As consequências da poluição da água são severas e afetam diretamente a saúde humana e os ecossistemas: •Saúde Humana: Proliferação de doenças de veiculação hídrica, como hepatite, cólera e leptospirose, além da perda de acesso à água potável. •Meio Ambiente: Diminuição da biodiversidade aquática, contaminação de lençóis freáticos e outros mananciais, e acentuação do processo de eutrofização dos corpos hídricos, que leva à morte de ecossistemas aquáticos."
    },
    land: {
        title: isEnglish ? "LAND POLLUTION" : "POLUIÇÃO: TERRA",
        explanation: isEnglish 
            ? "Land pollution is any alteration in its nature caused by contact with chemicals and waste, which deteriorates the soil and can render it infertile." 
            : "A poluição do solo é qualquer alteração em sua natureza e em suas propriedades físicas, químicas ou biológicas, causada pelo contato com produtos químicos e resíduos, que o deterioram e podem torná-lo infértil.",
        consequence: isEnglish 
            ? "It contaminates the food chain, leading to health issues; causes soil fertility loss and biodiversity reduction. It harms agriculture, hinders construction projects, and devalues land." 
            : "Causa a contaminação da cadeia alimentar, podendo levar a disfunções hepáticas, renais, problemas no sistema nervoso e até mesmo câncer; provoca a perda de fertilidade do solo, a contaminação de lençóis freáticos e a redução da biodiversidade; Prejudica a agricultura, inviabiliza projetos de construção e desvaloriza terrenos, além de poder danificar infraestruturas."
    },
    air: {
        title: isEnglish ? "AIR POLLUTION" : "POLUIÇÃO: AR",
        explanation: isEnglish 
            ? "Also known as atmospheric pollution, it's the alteration of the atmosphere's natural properties by emitting substances like gases and particulate matter. This global concern has significant impacts on public health and the environment." 
            : "A poluição do ar, também conhecida como poluição atmosférica, é caracterizada pela alteração das propriedades naturais da atmosfera devido à emissão de substâncias como gases, materiais particulados e agentes biológicos. Este fenômeno é uma preocupação global, com impactos significativos na saúde pública e no meio ambiente.",
        consequence: isEnglish 
            ? "Air pollution consequences are wide-ranging: Human Health: Causes respiratory problems (asthma, bronchitis) and irritations. Environment: Leads to acid rain, damages soil and vegetation. Global Climate: Contributes to global warming by intensifying the greenhouse effect." 
            : "As consequências da poluição do ar são abrangentes e afetam a saúde humana, o meio ambiente e o clima global: Saúde Humana: Causa problemas respiratórios (asma, bronquite), irritações nos olhos, nariz e garganta, e agrava doenças preexistentes. Meio Ambiente: Provoca chuva ácida, que danifica solos, vegetação e corpos d'água. Intensifica o fenômeno da inversão térmica e afeta a biodiversidade. Clima Global: Contribui para o aquecimento global, intensificando o efeito estufa e acelerando as mudanças climáticas."
    }
};

// Select all elements once
const btnOcean = document.querySelector("#btnOcean");
const waveIcon = document.querySelector("#waveIcon");
const btnLand = document.querySelector("#btnLand");
const sproutIcon = document.querySelector("#sproutIcon");
const btnAir = document.querySelector("#btnAir");
const windIcon = document.querySelector("#windIcon");
const dividers = document.querySelectorAll(".elementsDivider");
const sectionPeso = document.querySelector("#peso");
const pollution = document.querySelector("#pollution");
const colorLines = document.querySelectorAll(".colorLine");
const colorTexts = document.querySelectorAll(".colorText");
const pollutionText1 = document.querySelector(".pollution-explanation");
const pollutionText2 = document.querySelector(".pollution-consequence");
const consequenceGraphic = document.querySelector(".consequence-graphic");
const consequenceImage = document.querySelector(".consequence-image");

// Background class definitions
const bgWaterClass = "bg-[url('src/assets/dirty-bgs/polluted-water.jpg')]";
const bgLandClass = "bg-[url('src/assets/dirty-bgs/polluted-land.jpg')]";
const bgAirClass = "bg-[url('src/assets/dirty-bgs/polluted-air.jpg')]";

// Function to update content
function updateCrisisContent(type) {
    const content = crisisContent[type];
    pollution.textContent = content.title;
    pollutionText1.textContent = content.explanation;
    pollutionText2.textContent = content.consequence;
}

btnOcean.addEventListener('click', () => {
    // Button style changes (no change needed here)
    btnOcean.classList.replace("mb-4", "mt-6");
    btnOcean.classList.replace("bg-[#67749D]", "bg-[#141CFF]");
    btnOcean.classList.replace("shadow-[0px_8px_rgba(66,75,103,1)]", "shadow-[0px_8px_rgba(6,0,184)]");
    waveIcon.setAttribute("stroke", "#0600b8");
    
    btnLand.classList.replace("mt-6", "mb-4");
    btnLand.classList.replace("bg-[#00F968]", "bg-[#6D9770]");
    btnLand.classList.replace("shadow-[0px_8px_rgba(20,202,102)]", "shadow-[0px_8px_rgba(74,107,77,1)]");
    sproutIcon.setAttribute("fill", "#4a6b4d");
    
    btnAir.classList.replace("mt-6", "mb-4");
    btnAir.classList.replace("bg-[#fedb4f]", "bg-[#CFC874]");
    btnAir.classList.replace("shadow-[0px_8px_rgba(224,147,4)]", "shadow-[0px_8px_rgba(206,162,79)]");
    windIcon.setAttribute("fill", "#cea24f");
    
    // Update text content for Water
    updateCrisisContent('water');
    consequenceGraphic.src = "src/assets/graphics/graphic1.jpg";
    consequenceImage.src = "src/assets/consequences/pelican.jpg";

    // Style updates (no change needed here)
    if (sectionPeso.classList.contains(bgLandClass)) {
        sectionPeso.classList.replace(bgLandClass, bgWaterClass);
        colorLines.forEach(line => line.classList.replace("border-[#14ca66]", "border-[#0700e0]"));
        colorTexts.forEach(text => text.classList.replace("text-[#00F968]", "text-[#141CFF]"));
        dividers.forEach(divider => divider.classList.replace("border-[#00F968]", "border-[#141CFF]"));
    }
    if (sectionPeso.classList.contains(bgAirClass)) {
        sectionPeso.classList.replace(bgAirClass, bgWaterClass);
        colorLines.forEach(line => line.classList.replace("border-[#E0AE04]", "border-[#0700e0]"));
        colorTexts.forEach(text => text.classList.replace("text-[#fedb4f]", "text-[#141CFF]"));
        dividers.forEach(divider => divider.classList.replace("border-[#fedb4f]", "border-[#141CFF]"));
    }
});

btnLand.addEventListener('click', () => {
    // Button style changes
    btnLand.classList.replace("mb-4", "mt-6");
    btnLand.classList.replace("bg-[#6D9770]", "bg-[#00F968]");
    btnLand.classList.replace("shadow-[0px_8px_rgba(74,107,77,1)]", "shadow-[0px_8px_rgba(20,202,102)]");
    sproutIcon.setAttribute("fill", "#14ca66");
    
    btnOcean.classList.replace("mt-6", "mb-4");
    btnOcean.classList.replace("bg-[#141CFF]", "bg-[#67749D]");
    btnOcean.classList.replace("shadow-[0px_8px_rgba(6,0,184)]", "shadow-[0px_8px_rgba(66,75,103,1)]");
    waveIcon.setAttribute("stroke", "#424b67");
    
    btnAir.classList.replace("mt-6", "mb-4");
    btnAir.classList.replace("bg-[#fedb4f]", "bg-[#CFC874]");
    btnAir.classList.replace("shadow-[0px_8px_rgba(224,147,4)]", "shadow-[0px_8px_rgba(206,162,79)]");
    windIcon.setAttribute("fill", "#cea24f");
    
    // Update text content for Land
    updateCrisisContent('land');
    consequenceGraphic.src = "src/assets/graphics/graphic2.png";
    consequenceImage.src = "src/assets/consequences/poverty.jpg";

    // Style updates
    if (sectionPeso.classList.contains(bgWaterClass) || (!sectionPeso.classList.contains(bgLandClass) && !sectionPeso.classList.contains(bgAirClass))) {
        sectionPeso.classList.replace(bgWaterClass, bgLandClass);
        colorLines.forEach(line => line.classList.replace("border-[#0700e0]", "border-[#14ca66]"));
        colorTexts.forEach(text => text.classList.replace("text-[#141CFF]", "text-[#00F968]"));
        dividers.forEach(divider => divider.classList.replace("border-[#141CFF]", "border-[#00F968]"));
    }
    if (sectionPeso.classList.contains(bgAirClass)) {
        sectionPeso.classList.replace(bgAirClass, bgLandClass);
        colorLines.forEach(line => line.classList.replace("border-[#E0AE04]", "border-[#14ca66]"));
        colorTexts.forEach(text => text.classList.replace("text-[#fedb4f]", "text-[#00F968]"));
        dividers.forEach(divider => divider.classList.replace("border-[#fedb4f]", "border-[#00F968]"));
    }
});

btnAir.addEventListener('click', () => {
    // Button style changes
    btnAir.classList.replace("mb-4", "mt-6");
    btnAir.classList.replace("bg-[#CFC874]", "bg-[#fedb4f]");
    btnAir.classList.replace("shadow-[0px_8px_rgba(206,162,79)]", "shadow-[0px_8px_rgba(224,147,4)]");
    windIcon.setAttribute("fill", "#e0ae04");
    
    btnLand.classList.replace("mt-6", "mb-4");
    btnLand.classList.replace("bg-[#00F968]", "bg-[#6D9770]");
    btnLand.classList.replace("shadow-[0px_8px_rgba(20,202,102)]", "shadow-[0px_8px_rgba(74,107,77,1)]");
    sproutIcon.setAttribute("fill", "#4a6b4d");
    
    btnOcean.classList.replace("mt-6", "mb-4");
    btnOcean.classList.replace("bg-[#141CFF]", "bg-[#67749D]");
    btnOcean.classList.replace("shadow-[0px_8px_rgba(6,0,184)]", "shadow-[0px_8px_rgba(66,75,103,1)]");
    waveIcon.setAttribute("stroke", "#424b67");
    
    // Update text content for Air
    updateCrisisContent('air');
    consequenceGraphic.src = "src/assets/graphics/graphic3.png";
    consequenceImage.src = "src/assets/consequences/global-warming.jpg";

    // Style updates
    if (sectionPeso.classList.contains(bgWaterClass) || (!sectionPeso.classList.contains(bgLandClass) && !sectionPeso.classList.contains(bgAirClass))) {
        sectionPeso.classList.replace(bgWaterClass, bgAirClass);
        colorLines.forEach(line => line.classList.replace("border-[#0700e0]", "border-[#E0AE04]"));
        colorTexts.forEach(text => text.classList.replace("text-[#141CFF]", "text-[#fedb4f]"));
        dividers.forEach(divider => divider.classList.replace("border-[#141CFF]", "border-[#fedb4f]"));
    }
    if (sectionPeso.classList.contains(bgLandClass)) {
        sectionPeso.classList.replace(bgLandClass, bgAirClass);
        colorLines.forEach(line => line.classList.replace("border-[#14ca66]", "border-[#E0AE04]"));
        colorTexts.forEach(text => text.classList.replace("text-[#00F968]", "text-[#fedb4f]"));
        dividers.forEach(divider => divider.classList.replace("border-[#00F968]", "border-[#fedb4f]"));
    }
});

// --- END: CRISIS SECTION LOGIC ---


// --- Parallax Logic (No language changes needed) ---
window.addEventListener("scroll", function () {
    const speed = 0.5;
    const scrollPosition = window.scrollY;
    // Check if sectionPeso exists before trying to access its properties
    if (sectionPeso) {
      const sectionOffset = sectionPeso.offsetTop;
      const yPos = (scrollPosition - sectionOffset) * speed;
      sectionPeso.style.backgroundPosition = `center ${yPos}px`;
    }
});


// --- Carousel Logic for Origins Section ---
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('#slider-track');
    const nextButton = document.querySelector('#next-button');
    const prevButton = document.querySelector('#prev-button');

    // Make sure carousel elements exist before proceeding
    if (track && nextButton && prevButton) {
        const slides = Array.from(track.children);
        let currentIndex = 0;
        
        const moveToSlide = (targetIndex) => {
            if (slides.length === 0) return; // Prevent errors if no slides
            track.style.transform = `translateX(-${100 * targetIndex}%)`;
            currentIndex = targetIndex;
        };
    
        nextButton.addEventListener('click', () => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0; // Loop to start
            }
            moveToSlide(nextIndex);
        });
    
        prevButton.addEventListener('click', () => {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                prevIndex = slides.length - 1; // Loop to end
            }
            moveToSlide(prevIndex);
        });
        
        // Adjust on window resize to prevent breaking
        window.addEventListener('resize', () => {
            moveToSlide(currentIndex);
        });
    }
});