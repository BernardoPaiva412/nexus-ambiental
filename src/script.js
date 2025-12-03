// src/script.js

const btnOcean = document.querySelector("#btnOcean")
const waveIcon = document.querySelector("#waveIcon")
const btnLand = document.querySelector("#btnLand")
const sproutIcon = document.querySelector("#sproutIcon")
const btnAir = document.querySelector("#btnAir")
const windIcon = document.querySelector("#windIcon")
const dividers = document.querySelectorAll(".elementsDivider")
const sectionPeso = document.querySelector("#peso")
const pollution = document.querySelector("#pollution")
const colorLines = document.querySelectorAll(".colorLine")
const colorTexts = document.querySelectorAll(".colorText")
const pollutionText1 = document.querySelector(".pollution-explanation")
const pollutionText2 = document.querySelector(".pollution-consequence")
const consequenceGraphic = document.querySelector(".consequence-graphic")
const consequenceImage = document.querySelector(".consequence-image")

// Definição das classes das imagens para facilitar a troca
const bgWaterClass = "bg-[url('src/assets/dirty-bgs/polluted-water.jpg')]"
const bgLandClass = "bg-[url('src/assets/dirty-bgs/polluted-land.jpg')]"
const bgAirClass = "bg-[url('src/assets/dirty-bgs/polluted-air.jpg')]"

btnOcean.addEventListener('click', () => {
    //water shadow hex #0700e0
    btnOcean.classList.replace("mb-4", "mt-6")
    btnOcean.classList.replace("bg-[#67749D]", "bg-[#141CFF]")
    btnOcean.classList.replace("shadow-[0px_8px_rgba(66,75,103,1)]", "shadow-[0px_8px_rgba(6_0_184)]")
    waveIcon.setAttribute("stroke", "#0600b8")
    btnLand.classList.replace("mt-6", "mb-4")
    btnLand.classList.replace("bg-[#00F968]", "bg-[#6D9770]")
    btnLand.classList.replace("shadow-[0px_8px_rgba(20_202_102)]", "shadow-[0px_8px_rgba(74,107,77,1)]")
    sproutIcon.setAttribute("fill", "#4a6b4d")
    btnAir.classList.replace("mt-6", "mb-4")
    btnAir.classList.replace("bg-[#fedb4f]", "bg-[#CFC874]")
    btnAir.classList.replace("shadow-[0px_8px_rgba(224_147_4)]", "shadow-[0px_8px_rgba(206_162_79)]")
    windIcon.setAttribute("fill", "#cea24f")
    pollution.textContent = "POLUIÇÃO: ÁGUA"
    pollutionText1.textContent = "A poluição da água é definida como qualquer alteração nas suas características físicas, químicas ou biológicas que comprometa a sua qualidade e potabilidade. Este é um dos impactos ambientais mais críticos, resultando principalmente da ação humana."
    pollutionText2.textContent = "As consequências da poluição da água são severas e afetam diretamente a saúde humana e os ecossistemas: •Saúde Humana: Proliferação de doenças de veiculação hídrica, como hepatite, cólera e leptospirose, além da perda de acesso à água potável. •Meio Ambiente: Diminuição da biodiversidade aquática, contaminação de lençóis freáticos e outros mananciais, e acentuação do processo de eutrofização dos corpos hídricos, que leva à morte de ecossistemas aquáticos."
    consequenceGraphic.src = "src/assets/graphics/graphic1.jpg" //muda o gráfico
    consequenceImage.src = "src/assets/consequences/pelican.jpg" //muda a imagem
    
    //texto azul: #141cff
    //acentos azuis: #0700e0

    // VERIFICA SE ESTAVA NA TERRA (GREEN)
    if (sectionPeso.classList.contains(bgLandClass) === true) {
        sectionPeso.classList.replace(bgLandClass, bgWaterClass) // Troca imagem
        
        colorLines.forEach(line => {
            line.classList.replace("border-[#14ca66]", "border-[#0700e0]")
        })
        colorTexts.forEach(text => {
            text.classList.replace("text-[#00F968]", "text-[#141CFF]")
        })
        dividers.forEach(divider => {
            divider.classList.replace("border-[#00F968]", "border-[#141CFF]")
        })
    }
    
    // VERIFICA SE ESTAVA NO AR (SKY)
    if (sectionPeso.classList.contains(bgAirClass) === true) {
        sectionPeso.classList.replace(bgAirClass, bgWaterClass) // Troca imagem

        colorLines.forEach(line => {
            line.classList.replace("border-[#E0AE04]", "border-[#0700e0]")
        })
        colorTexts.forEach(text => {
            text.classList.replace("text-[#fedb4f]", "text-[#141CFF]")
        })
        dividers.forEach(divider => {
            divider.classList.replace("border-[#fedb4f]", "border-[#141CFF]")
        })
    }
})

btnLand.addEventListener('click', () => {
    btnLand.classList.replace("mb-4", "mt-6")
    btnLand.classList.replace("bg-[#6D9770]", "bg-[#00F968]")
    btnLand.classList.replace("shadow-[0px_8px_rgba(74,107,77,1)]", "shadow-[0px_8px_rgba(20_202_102)]")
    sproutIcon.setAttribute("fill", "#14ca66")
    btnOcean.classList.replace("mt-6", "mb-4")
    btnOcean.classList.replace("bg-[#141CFF]", "bg-[#67749D]")
    btnOcean.classList.replace("shadow-[0px_8px_rgba(6_0_184)]", "shadow-[0px_8px_rgba(66,75,103,1)]")
    waveIcon.setAttribute("stroke", "#424b67")
    btnAir.classList.replace("mt-6", "mb-4")
    btnAir.classList.replace("bg-[#fedb4f]", "bg-[#CFC874]")
    btnAir.classList.replace("shadow-[0px_8px_rgba(224_147_4)]", "shadow-[0px_8px_rgba(206_162_79)]")
    windIcon.setAttribute("fill", "#cea24f")
    pollution.textContent = "POLUIÇÃO: TERRA"
    pollutionText1.textContent = "A poluição do solo é qualquer alteração em sua natureza e em suas propriedades físicas, químicas ou biológicas, causada pelo contato com produtos químicos e resíduos, que o deterioram e podem torná-lo infértil."
    pollutionText2.textContent = "Causa a contaminação da cadeia alimentar, podendo levar a disfunções hepáticas, renais, problemas no sistema nervoso e até mesmo câncer; provoca a perda de fertilidade do solo, a contaminação de lençóis freáticos e a redução da biodiversidade; Prejudica a agricultura, inviabiliza projetos de construção e desvaloriza terrenos, além de poder danificar infraestruturas."
    consequenceGraphic.src = "src/assets/graphics/graphic2.png" //muda o gráfico
    consequenceImage.src = "src/assets/consequences/poverty.jpg" //muda a imagem
    
    //texto verde: #00f968
    //acentos verdes: #14ca66

    // VERIFICA SE ESTAVA NA ÁGUA (OCEAN)
    if (sectionPeso.classList.contains(bgWaterClass) === true || (!sectionPeso.classList.contains(bgLandClass) && !sectionPeso.classList.contains(bgAirClass))) {
        // O "ou" extra garante que funcione caso seja o carregamento inicial onde a classe exata pode não estar mapeada no JS ainda
        sectionPeso.classList.replace(bgWaterClass, bgLandClass) // Troca imagem
        
        colorLines.forEach(line => {
            line.classList.replace("border-[#0700e0]", "border-[#14ca66]")
        })
        colorTexts.forEach(text => {
            text.classList.replace("text-[#141CFF]", "text-[#00F968]")
        })
        dividers.forEach(divider => {
            divider.classList.replace("border-[#141CFF]", "border-[#00F968]")
        })
    }
    
    // VERIFICA SE ESTAVA NO AR (SKY)
    if (sectionPeso.classList.contains(bgAirClass) === true) {
        sectionPeso.classList.replace(bgAirClass, bgLandClass) // Troca imagem

        colorLines.forEach(line => {
            line.classList.replace("border-[#E0AE04]", "border-[#14ca66]")
        })
        colorTexts.forEach(text => {
            text.classList.replace("text-[#fedb4f]", "text-[#00F968]")
        })
        dividers.forEach(divider => {
            divider.classList.replace("border-[#fedb4f]", "border-[#00F968]")
        })
    }
})

btnAir.addEventListener('click', () => {
    btnAir.classList.replace("mb-4", "mt-6")
    btnAir.classList.replace("bg-[#CFC874]", "bg-[#fedb4f]")
    btnAir.classList.replace("shadow-[0px_8px_rgba(206_162_79)]", "shadow-[0px_8px_rgba(224_147_4)]")
    windIcon.setAttribute("fill", "#e0ae04")
    btnLand.classList.replace("mt-6", "mb-4")
    btnLand.classList.replace("bg-[#00F968]", "bg-[#6D9770]")
    btnLand.classList.replace("shadow-[0px_8px_rgba(20_202_102)]", "shadow-[0px_8px_rgba(74,107,77,1)]")
    sproutIcon.setAttribute("fill", "#4a6b4d")
    btnOcean.classList.replace("mt-6", "mb-4")
    btnOcean.classList.replace("bg-[#141CFF]", "bg-[#67749D]")
    btnOcean.classList.replace("shadow-[0px_8px_rgba(6_0_184)]", "shadow-[0px_8px_rgba(66,75,103,1)]")
    waveIcon.setAttribute("stroke", "#424b67")
    pollution.textContent = "POLUIÇÃO: AR"
    pollutionText1.textContent = "A poluição do ar, também conhecida como poluição atmosférica, é caracterizada pela alteração das propriedades naturais da atmosfera devido à emissão de substâncias como gases, materiais particulados e agentes biológicos. Este fenômeno é uma preocupação global, com impactos significativos na saúde pública e no meio ambiente."
    pollutionText2.textContent = "As consequências da poluição do ar são abrangentes e afetam a saúde humana, o meio ambiente e o clima global: Saúde Humana: Causa problemas respiratórios (asma, bronquite), irritações nos olhos, nariz e garganta, e agrava doenças preexistentes. Meio Ambiente: Provoca chuva ácida, que danifica solos, vegetação e corpos d'água. Intensifica o fenômeno da inversão térmica e afeta a biodiversidade. Clima Global: Contribui para o aquecimento global, intensificando o efeito estufa e acelerando as mudanças climáticas."
    consequenceGraphic.src = "src/assets/graphics/graphic3.png" //muda o gráfico
    consequenceImage.src = "src/assets/consequences/global-warming.jpg" //muda a imagem
    
    //texto amarelo: #fedb4f
    //acentos amarelos: #E09304

    // VERIFICA SE ESTAVA NA ÁGUA (OCEAN)
    if (sectionPeso.classList.contains(bgWaterClass) === true || (!sectionPeso.classList.contains(bgLandClass) && !sectionPeso.classList.contains(bgAirClass))) {
        sectionPeso.classList.replace(bgWaterClass, bgAirClass) // Troca imagem
        
        colorLines.forEach(line => {
            line.classList.replace("border-[#0700e0]", "border-[#E0AE04]")
        });
        colorTexts.forEach(text => {
            text.classList.replace("text-[#141CFF]", "text-[#fedb4f]")
        })
        dividers.forEach(divider => {
            divider.classList.replace("border-[#141CFF]", "border-[#fedb4f]")
        })
    }

    // VERIFICA SE ESTAVA NA TERRA (GREEN)
    if (sectionPeso.classList.contains(bgLandClass) === true) {
        sectionPeso.classList.replace(bgLandClass, bgAirClass) // Troca imagem

        colorLines.forEach(line => {
            line.classList.replace("border-[#14ca66]", "border-[#E0AE04]")
        });
        colorTexts.forEach(text => {
            text.classList.replace("text-[#00F968]", "text-[#fedb4f]")
        })
        dividers.forEach(divider => {
            divider.classList.replace("border-[#00F968]", "border-[#fedb4f]")
        })
    }
})

// Lógica do Parallax Suave (Adicione ao final do arquivo)
window.addEventListener("scroll", function () {
    // Velocidade do fundo em relação ao scroll.
    // 0.0 = fundo fixo (igual bg-fixed)
    // 0.5 = move metade da velocidade (efeito de profundidade)
    // 1.0 = move junto com a página (normal)
    const speed = 0.5; 
    
    // Pega a posição atual do scroll
    const scrollPosition = window.scrollY;
    
    // Calcula o deslocamento baseando-se em quando a seção começa
    // Isso evita que a imagem comece "cortada"
    const sectionOffset = sectionPeso.offsetTop;
    
    // O cálculo mágico: move o background positivamente (para baixo) enquanto a tela sobe
    const yPos = (scrollPosition - sectionOffset) * speed;
    
    // Aplica a posição no CSS inline (mantendo o centro horizontal)
    sectionPeso.style.backgroundPosition = `center ${yPos}px`;
});