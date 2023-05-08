// // Write your solution here!
let cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return;
}

function appendCat(name){
    let copyCats = [];
    for (let i = 0; i<cats.length; i++){
        let copyName = cats[i];
        copyCats.push(copyName);
    }
    copyCats.push(name);
    return copyCats;
}

function prependCat(name){
    let copyCats = [];
    for (let i = 0; i<cats.length; i++){
        let copyName = cats[i];
        copyCats.push(copyName);
    }
    copyCats.unshift(name);
    return copyCats;
}

function removeLastCat(){
    let copyCats = [];
    for (let i = 0; i<cats.length; i++){
        let copyName = cats[i];
        copyCats.push(copyName);
    }
    copyCats.pop();
    return copyCats;
}

function removeFirstCat(){
    let copyCats = [];
    for (let i = 0; i<cats.length; i++){
        let copyName = cats[i];
        copyCats.push(copyName);
    }
    copyCats.shift();
    return copyCats;
}
