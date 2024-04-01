const xhrValue = new XMLHttpRequest();

xhrValue.open("GET", "./task5.json", true);

xhrValue.onload = function(){
    let jsonResume = JSON.parse(xhrValue.responseText);
    console.log(jsonResume);
// jsonResume.forEach(element => {
//     console.log(element);
//});
};
xhrValue.send();