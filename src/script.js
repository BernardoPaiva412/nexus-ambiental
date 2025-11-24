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
    //texto azul: #141cff
    //acentos azuis: #0700e0
    if (sectionPeso.classList.contains("bg-[#2D4A35]") === true) {
        //if green
        sectionPeso.classList.replace("bg-[#2D4A35]", "bg-[#333345]")
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
    if (sectionPeso.classList.contains("bg-[#454533]") === true) {
        //if yellow
        sectionPeso.classList.replace("bg-[#454533]", "bg-[#333345]")
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
    //texto verde: #00f968
    //acentos verdes: #14ca66
    if (sectionPeso.classList.contains("bg-[#333345]") === true) {
        //if blue
        sectionPeso.classList.replace("bg-[#333345]", "bg-[#2D4A35]")
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
    if (sectionPeso.classList.contains("bg-[#454533]") === true) {
        //if yellow
        sectionPeso.classList.replace("bg-[#454533]", "bg-[#2D4A35]")
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
    //texto amarelo: #fedb4f
    //acentos amarelos: #E09304
    if (sectionPeso.classList.contains("bg-[#333345]") === true) {
        //if blue
        sectionPeso.classList.replace("bg-[#333345]", "bg-[#454533]")
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
    if (sectionPeso.classList.contains("bg-[#2D4A35]") === true) {
        //if green
        sectionPeso.classList.replace("bg-[#2D4A35]", "bg-[#454533]")
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