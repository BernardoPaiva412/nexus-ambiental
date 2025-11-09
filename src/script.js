const btnOcean = document.querySelector("#btnOcean")
const btnLand = document.querySelector("#btnLand")
const btnAir = document.querySelector("#btnAir")
const divider = document.querySelector("#elementsDivider")
const sectionPeso = document.querySelector("#peso")
const pollution = document.querySelector("#pollution")
const pollutionLine = document.querySelector("#pollutionLine")

btnOcean.addEventListener('click', () => {
    divider.classList = "border-4 border-[#141CFF]"
    //water button shadow hex: #0700e0
    btnOcean.classList.replace("bg-[#67749D]", "bg-[#141CFF]")
    btnOcean.classList.replace("shadow-[0px_8px_rgba(66,75,103,1)]", "shadow-[0px_8px_rgba(7_0_224)]")
    sectionPeso.classList.replace("bg-[#454533]", "bg-[#333345]")
    pollution.textContent = "POLUIÇÃO: ÁGUA"
    pollution.classList.replace("text-[#FEDB4F]", "text-[#141CFF]")
    pollutionLine.classList.replace("border-[#E09304]", "border-[#0700e0]")
})