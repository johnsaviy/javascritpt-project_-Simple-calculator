let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

innerText = 0;

buttons.map( button => {
    button.addEventListener('click', (a) => {
        switch(a.target.innerText){
            case 'CE':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'DEL':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += a.target.innerText;
        }
    });
});