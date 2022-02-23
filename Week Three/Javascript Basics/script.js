let a = 5;
console.log(a);

a = "Bob";
console.log(a);

a = false; 
console.log(a);

a = [3, "oe", true, "ffs", 25]
console.log(a);

a.push('Fred');
console.log(a);

a.pop();
console.log(a);

a.unshift('Diannee');
console.log(a)

a.shift();
console.log(a)

console.log(a[3])

let fish = [1, 2, 'red', 'blue'];
a.push(fish);
console.log(a)

console.log(a[5][2]);


let bob = {
    name: 'Bobby',
    age: 12,
    species: 'Human',
    hobbies: [
        'crying',
        'being annoying',
        'vibing'
    ]
};

console.log(bob)


for(let i = 0; i < 5; i++) {
    console.log(i)
}

function hello(name) {
    console.log("Hello " + name)
}

hello('George')


let goodbye = function(name) {
    console.log('Goodbye ' + name);
}

goodbye('Abe')


let howdy = (name) => {
    return(`Howdy ${name}`);
}

console.log(howdy('Abby'))