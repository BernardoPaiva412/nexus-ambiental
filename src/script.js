// src/script.js

const btnOcean = document.querySelector("#btnOcean")
const waveIcon = document.querySelector("#waveIcon") // Note: SVG path inside might need selection if structure changed, but ID is on SVG
const btnLand = document.querySelector("#btnLand")
const sproutIcon = document.querySelector("#sproutIcon")
const btnAir = document.querySelector("#btnAir")
const windIcon = document.querySelector("#windIcon")
const dividers = document.querySelectorAll(".elementsDivider")
const sectionPeso = document.querySelector("#peso")
const pesoBg = document.querySelector("#peso-bg") // New static BG image
const pollution = document.querySelector("#pollution")
const colorLines = document.querySelectorAll(".colorLine")
const colorTexts = document.querySelectorAll(".colorText")
const pollutionText1 = document.querySelector(".pollution-explanation")
const pollutionText2 = document.querySelector(".pollution-consequence")
const consequenceGraphic = document.querySelector(".consequence-graphic")
const consequenceImage = document.querySelector(".consequence-image")

// Image Paths
const bgWaterSrc = "src/assets/polluted-water.jpg"
const bgLandSrc = "src/assets/polluted-land.jpg"
const bgAirSrc = "src/assets/polluted-air.jpg"

// Helper to update background image source
function updateBackground(src) {
    if (pesoBg) {
        pesoBg.style.opacity = '0';
        setTimeout(() => {
            pesoBg.src = src;
            pesoBg.style.opacity = '1';
        }, 300); // Wait for fade out
    }
}

btnOcean.addEventListener('click', () => {
    // Reset buttons state (simplified logic for clarity)
    resetButtons();

    // Active State for Ocean
    btnOcean.classList.add("active-btn", "scale-110", "shadow-[#1a3c5e]/50");
    btnOcean.classList.replace("bg-[#67749D]", "bg-[#1a3c5e]"); // Fallback if using old logic

    // Update Content
    pollution.innerHTML = 'POLUIÇÃO: <span class="text-[#4cceee]">ÁGUA</span>';
    pollutionText1.textContent = "A poluição da água é definida como qualquer alteração nas suas características físicas, químicas ou biológicas que comprometa a sua qualidade e potabilidade. Este é um dos impactos ambientais mais críticos, resultando principalmente da ação humana.";
    pollutionText2.textContent = "As consequências da poluição da água são severas e afetam diretamente a saúde humana e os ecossistemas: •Saúde Humana: Proliferação de doenças de veiculação hídrica, como hepatite, cólera e leptospirose, além da perda de acesso à água potável. •Meio Ambiente: Diminuição da biodiversidade aquática, contaminação de lençóis freáticos e outros mananciais, e acentuação do processo de eutrofização dos corpos hídricos, que leva à morte de ecossistemas aquáticos.";
    consequenceGraphic.src = "src/assets/graphic1.jpg";
    consequenceImage.src = "src/assets/pelican.jpg";

    // Update Colors
    updateColors("#1a3c5e", "#4cceee");

    // Update Background
    updateBackground(bgWaterSrc);
})

btnLand.addEventListener('click', () => {
    resetButtons();

    // Active State for Land
    btnLand.classList.add("active-btn", "scale-110", "shadow-[#14ca66]/50");

    // Update Content
    pollution.innerHTML = 'POLUIÇÃO: <span class="text-[#14ca66]">TERRA</span>';
    pollutionText1.textContent = "A poluição do solo é qualquer alteração em sua natureza e em suas propriedades físicas, químicas ou biológicas, causada pelo contato com produtos químicos e resíduos, que o deterioram e podem torná-lo infértil.";
    pollutionText2.textContent = "Causa a contaminação da cadeia alimentar, podendo levar a disfunções hepáticas, renais, problemas no sistema nervoso e até mesmo câncer; provoca a perda de fertilidade do solo, a contaminação de lençóis freáticos e a redução da biodiversidade; Prejudica a agricultura, inviabiliza projetos de construção e desvaloriza terrenos, além de poder danificar infraestruturas.";
    consequenceGraphic.src = "src/assets/graphic2.png";
    consequenceImage.src = "src/assets/poverty.jpg";

    // Update Colors
    updateColors("#354635", "#14ca66");

    // Update Background
    updateBackground(bgLandSrc);
})

btnAir.addEventListener('click', () => {
    resetButtons();

    // Active State for Air
    btnAir.classList.add("active-btn", "scale-110", "shadow-[#fedb4f]/50");

    // Update Content
    pollution.innerHTML = 'POLUIÇÃO: <span class="text-[#fedb4f]">AR</span>';
    pollutionText1.textContent = "A poluição do ar, também conhecida como poluição atmosférica, é caracterizada pela alteração das propriedades naturais da atmosfera devido à emissão de substâncias como gases, materiais particulados e agentes biológicos. Este fenômeno é uma preocupação global, com impactos significativos na saúde pública e no meio ambiente.";
    pollutionText2.textContent = "As consequências da poluição do ar são abrangentes e afetam a saúde humana, o meio ambiente e o clima global: Saúde Humana: Causa problemas respiratórios (asma, bronquite), irritações nos olhos, nariz e garganta, e agrava doenças preexistentes. Meio Ambiente: Provoca chuva ácida, que danifica solos, vegetação e corpos d'água. Intensifica o fenômeno da inversão térmica e afeta a biodiversidade. Clima Global: Contribui para o aquecimento global, intensificando o efeito estufa e acelerando as mudanças climáticas.";
    consequenceGraphic.src = "src/assets/graphic3.png";
    consequenceImage.src = "src/assets/global-warming.jpg";

    // Update Colors
    updateColors("#4f4e4e", "#fedb4f");

    // Update Background
    updateBackground(bgAirSrc);
})

function resetButtons() {
    // Remove active classes from all buttons
    [btnOcean, btnLand, btnAir].forEach(btn => {
        btn.classList.remove("active-btn", "scale-110");
        // Remove specific shadow classes if needed or rely on base class
        btn.className = btn.className.replace(/shadow-\[.*?\]\/50/g, "");
    });
}

function updateColors(primaryColor, accentColor) {
    // Update decorative lines
    colorLines.forEach(line => {
        line.style.backgroundColor = primaryColor;
    });

    // Update borders if any
    dividers.forEach(divider => {
        divider.style.borderColor = primaryColor;
    });
}

// Initialize
// (Optional: Set initial state if not already set in HTML)