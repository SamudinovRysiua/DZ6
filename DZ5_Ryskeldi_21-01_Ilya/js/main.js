const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const euro = document.querySelector('#euro');

const handleConvert = (elem, target,target1) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open("GET","data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.addEventListener("load", () => {     
            const response = JSON.parse(request.response);
            if (elem === som) {
                target.value = (elem.value / response.usd).toFixed(2);
                target1.value = (elem.value / response.euro).toFixed(2);

            } else if (elem === usd) {
                target.value = (elem.value * response.usd).toFixed(2);
                target1.value = (elem.value * response.euro / response.usd).toFixed(2);

            }else if (elem === euro) {
                target.value = (elem.value * response.euro).toFixed(2);
                target1.value = (elem.value * response.usd / response.euro).toFixed(2);
            }
            elem.value === "" && (target.value = ""); 
            elem.value === "" && (target1.value = "")
        });
    });
};
handleConvert(som, usd, euro);
handleConvert(usd, som, euro);
handleConvert(euro, som, usd);
