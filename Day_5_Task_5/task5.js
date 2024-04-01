const xhrValue = new XMLHttpRequest();

xhrValue.open("GET", "./task5.json", true);

xhrValue.onload = function () {
    let jsonResume = JSON.parse(xhrValue.responseText);
    console.log(jsonResume);
    let educationData = jsonResume.education

    // for loop
    // repeats the block of code a specific number of times based on a conditional expression
    console.log("------------- For Loop -------------");
    for (let i = 0; i < educationData.length; i++) {
        const { institution, batchendYear } = educationData[i];
        console.log(`Instution Name - ${institution}, Passout Year - ${batchendYear}`)
    }

    // for of
    // its used to iterate over iterable objects such as arrays, strings, maps, sets...
    // its provides similar syntax compared traditional for loops
    console.log("------------- For Of -------------");
    for (let data of jsonResume.skills) {
        console.log(data)
        // for (let innerArray of data.keywords) {
        //     console.log(`Skill Known - ${innerArray}`)
        // }
    }

    function countSkill() {
        for (let data of arguments) {
            console.log(data);
        }
        return;
    };
    for (let data of jsonResume.skills) {
        countSkill(data.keywords.length)
    };

    for (let data of jsonResume.basics.profiles) {
        const finalValue = `Name - ${data.username}, Social - ${data.network}`;
        let element = document.createElement('p')
        element.innerText = finalValue;
        document.body.appendChild(element);
    };

    // String iterate
    console.log("----- For of using Strings -----------");
    for (let data of jsonResume.basics.name) {
        console.log(data);
    }

    // for in
    // used to iterate over the properties of objects
    // objects
    console.log("----- For in using objects -----------");

    for (let data in jsonResume.basics) {
        console.log(`${data} : ${jsonResume.basics[data]}`)
    }
    // arrays
    console.log("----- For in using arrays -----------");

    for (let data of jsonResume.skills) {
        for (let innerdata in data.keywords) {
            // console.log(data);
            console.log(`${innerdata} : ${data.keywords[innerdata]}`)
        }
    }


    // forEach
    // provides the callback functions
    console.log("------------- For Each -------------");
    jsonResume.personalDetails.languages.forEach(element => {
        console.log(element)
    })

    for (let data of jsonResume.projects)
        data.responsibilities.forEach((element, index) => {
            console.log(`${index} - ${element}`);
            let elem = document.createElement('ul');
            elem.createElement = 'li';
            elem.innerText = index + "-" + element;
            document.body.appendChild(elem);
        })


};
xhrValue.send();