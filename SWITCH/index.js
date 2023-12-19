let distanceInly = prompt ("Digite a distância em anos luz.")

let choseOption = prompt ("Para qual unidade deseja converser?\n1. Parse(pc)\n2. Unidade Astronômica (AU) " + "\n3. Quilômetros (km)\n\n(Digite o número da opção desejada)")

let chosenUnity
let convertdDistance

switch (choseOption) {
    case "1":
        chosenUnity = "Parsec"
        convertdDistance = distanceInly * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertdDistance = distanceInly * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertdDistance = distanceInly * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertdDistance = "Conversão fora do escopo"
}

alert("Distância em anos luz " + distanceInly + "\n" + chosenUnity + ": " + convertdDistance)