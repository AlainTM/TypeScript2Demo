interface Date {
    format(): string;
}

Date.prototype.format = function (): string {
    let dat = new Date(this.valueOf());
    return dat.toLocaleDateString();
}

window.onload = function() {
var currentDay = new Date();
console.log(currentDay.format());
}