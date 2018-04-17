class Calculator2 {
    constructor() {
        this.inputNumber1 = document.getElementById('num1');
        this.inputNumber2 = document.getElementById('num2');
        this.Sumbuttom = document.getElementById('sum');
        this.result = document.getElementById('result');
        this.wireEvents();
    }
    wireEvents() {
        this.Sumbuttom.addEventListener('click', event => {
            let num1 = Number(this.inputNumber1.value);
            let num2 = Number(this.inputNumber2.value);
            this.result.innerHTML = this.suma(num1, num2).toString();
        });
    }
    suma(num1, num2) {
        return num1 + num2;
    }
}
window.onload = function () {
    new Calculator2();
};
