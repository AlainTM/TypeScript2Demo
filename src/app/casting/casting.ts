class Calculator2 {
    private inputNumber1: HTMLInputElement;
    private inputNumber2: HTMLInputElement;
    private Sumbuttom: HTMLButtonElement;
    private result: HTMLSpanElement;

    constructor(){
        this.inputNumber1 = <HTMLInputElement> document.getElementById('num1');
        this.inputNumber2 = <HTMLInputElement> document.getElementById('num2');
        this.Sumbuttom = <HTMLButtonElement> document.getElementById('sum');
        this.result = <HTMLSpanElement> document.getElementById('result');
        this.wireEvents();
    }

    wireEvents(){
        this.Sumbuttom.addEventListener('click', event => {
        let num1 = Number (this.inputNumber1.value);
        let num2 = Number (this.inputNumber2.value);
        this.result.innerHTML = this.suma(num1,num2).toString();
        });
    }

    suma(num1: number, num2: number): number{
        return num1+num2;
    }
}

window.onload = function(){
    new Calculator2();
}