var c = 0;

const alternarRotacao = () => {

    let cubo = document.querySelector("#cubo");

    if (c%2 == 0) {

        cubo.classList.add("cuboOff");
        cubo.classList.remove("cubo");
        c++;
        
    } else {
        
        cubo.classList.add("cubo");
        cubo.classList.remove("cuboOff");
        c++;
    }

}