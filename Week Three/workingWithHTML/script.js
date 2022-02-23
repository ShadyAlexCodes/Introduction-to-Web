// Let is blocked scope
// Var is localized
// Const is constant

const container = document.getElementById('container');
const my_button = document.getElementById('my_button');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

container.innerHTML = "<h1>You cannot tell me what to do!</h1>";


function testVar() {
    var a = 5;
    for (var i = 0; i < 3; i++) {
        console.log(a, i);
    }
    console.log(i);
}

testVar();


function testLet() {
    let a = 5;
    for (let i = 0; i < 3; i++) {
        console.log(a, i);
    }
    //console.log(i);
}

testLet();


let name = 'Dave';

let message = `
<h1>
    I'm sorry ${name}, I'm afriad I cannot do that.
</h1>

<div id='content'>
    <p>This is my webpage!</p>
</div>
`

container.innerHTML = message;

my_button.addEventListener('click', () => {
    container.innerHTML = '<h2>I did done been clicked!</h2>';
})


const handleClick = (event) => {
    console.log(event);
    container.innerHTML = `${event.target.id} has been clicked.`
}

btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);
btn3.addEventListener('click', handleClick);