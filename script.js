

function pedir() {
    var valor = prompt("Digite um valor de 1 a 4!");

//converter (number)
    switch (Number(valor)) {
        case 1:
            alert("Voce escolheu 1: cafe")
            break;
            case 2:
            alert("Voce escolheu 2: Leite")
            break;
            case 3:
            alert("Voce escolheu 3: Chocolate")
            break;
            case 4:
                alert("Voce escolheu 4: cenoura")
        default:
            break;
    }


}

