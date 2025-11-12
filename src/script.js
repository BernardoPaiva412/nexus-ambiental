const btnOcean = document.querySelector("#btnOcean")
const btnLand = document.querySelector("#btnLand")
const btnAir = document.querySelector("#btnAir")
const divider = document.querySelector("#elementsDivider")
const sectionPeso = document.querySelector("#peso")
const pollution = document.querySelector("#pollution")
const pollutionLine = document.querySelector("#pollutionLine")
const textRegex = /(text)[-]\[[#].{6}\]/
const bgRegex = /(bg)[-]\[[#].{6}\]/
const borderRegex = /(border)[-]\[[#](.{6})\]/

btnOcean.addEventListener('click', () => {
    btnOcean.classList.replace("mb-4", "mt-6")
    btnLand.classList.replace("mt-6", "mb-4")
    btnAir.classList.replace("mt-6", "mb-4")
    divider.classList = "border-4 border-[#141CFF]"
    //water button shadow hex: #0700e0
    btnOcean.classList.replace("bg-[#67749D]", "bg-[#141CFF]")
    btnOcean.classList.replace("shadow-[0px_8px_rgba(66,75,103,1)]", "shadow-[0px_8px_rgba(7_0_224)]")
    sectionPeso.classList.replace(bgRegex, "bg-[#333345]")
    pollution.textContent = "POLUIÇÃO: ÁGUA"
    pollution.classList.replace(textRegex, "text-[#141CFF]")
    pollutionLine.classList.replace(borderRegex, "border-[#0700e0]")
})

btnLand.addEventListener('click', () => {
    btnLand.classList.replace("mb-4", "mt-6")
    btnOcean.classList.replace("mt-6", "mb-4")
    btnAir.classList.replace("mt-6", "mb-4")
    btnOcean.classList.replace("bg-[#141CFF]", "bg-[#67749D]")
    btnOcean.classList.replace("shadow-[0px_8px_rgba(7_0_224)]", "shadow-[0px_8px_rgba(66,75,103,1)]")
})

btnAir.addEventListener('click', () => {
    divider.classList = "border-4 border-[#FEDB4F]"
    btnAir.classList.replace("mb-4", "mt-6")
    btnOcean.classList.replace("mt-6", "mb-4")
    btnLand.classList.replace("mt-6", "mb-4")
    btnAir.classList.replace("bg-[#CFC874]", "bg-[#FEDB4F]")
    btnOcean.classList.replace("bg-[#141CFF]", "bg-[#67749D]")
    btnOcean.classList.replace("shadow-[0px_8px_rgba(7_0_224)]", "shadow-[0px_8px_rgba(66,75,103,1)]")
})