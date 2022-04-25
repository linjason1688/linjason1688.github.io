function $g(value) {
    //判斷是否為id selector
    if (value.includes('#') && !value.includes(' ')) {
        //回傳Element
        return document.querySelector(value);
    }
    //回傳NodeList集合
    var nodelist = document.querySelectorAll(value);
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

function genUL(liArray) { 
    let ul = document.createElement("ul");

    //迭代: 跑陣列的迴圈
    liArray.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
    });

    return ul;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}

function $c(element, text) {
    let el = document.createElement(element);

    if (text !== null && text !== undefined && text.length > 0) {
        el.innerText = text;
    }

    return el;
}

export { $g, genUL, getRandom, $c };