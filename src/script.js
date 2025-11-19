const btnOcean = document.querySelector("#btnOcean")
const waveIcon = document.querySelector("#waveIcon")
const btnLand = document.querySelector("#btnLand")
const sproutIcon = document.querySelector("#sproutIcon")
const btnAir = document.querySelector("#btnAir")
const windIcon = document.querySelector("#windIcon")
const divider = document.querySelector(".elementsDivider")
const sectionPeso = document.querySelector("#peso")
const pollution = document.querySelector("#pollution")
const titleLine = document.querySelector("#titleLine")
const textRegex = /[t][e][x][t][\-][\[][\#].{6}[\]]/g
const bgRegex = /[b][g][\-][\[][\#].{6}[\]]/g
const borderRegex = /[b][o][r][d][e][r][\-][\[][\#].{6}[\]]/g

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
    btnAir.classList.replace("bg-[#FEDB4F]", "bg-[#CFC874]")
    btnAir.classList.replace("shadow-[0px_8px_rgba(224_147_4)]", "shadow-[0px_8px_rgba(206_162_79)]")
    windIcon.setAttribute("fill", "#cea24f")
    divider.classList = "border-4 border-[#141CFF]"
    sectionPeso.className.replace(bgRegex, "bg-[#333345]")
    pollution.textContent = "POLUIÇÃO: ÁGUA"
    pollution.className.replace(textRegex, "text-[#141CFF]")
    titleLine.className.replace(borderRegex, "border-[#0700e0]")
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
    btnAir.classList.replace("bg-[#FEDB4F]", "bg-[#CFC874]")
    btnAir.classList.replace("shadow-[0px_8px_rgba(224_147_4)]", "shadow-[0px_8px_rgba(206_162_79)]")
    windIcon.setAttribute("fill", "#cea24f")
    divider.classList = "border-4 border-[#00F968]"
    sectionPeso.classList.replace(bgRegex, "bg-[#00F968]")
    pollution.textContent = "POLUIÇÃO: TERRA"
})

btnAir.addEventListener('click', () => {
    //air shadow hex #E09304
    btnAir.classList.replace("mb-4", "mt-6")
    btnAir.classList.replace("bg-[#CFC874]", "bg-[#FEDB4F]")
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
    divider.classList = "border-4 border-[#FEDB4F]"
    sectionPeso.className.replace(bgRegex, "bg-[#454533]")
    pollution.textContent = "POLUIÇÃO: AR"
    pollution.className.replace(textRegex, "text-[#FEDB4F]")
    titleLine.className.replace(borderRegex, "border-[#E09304]")
})