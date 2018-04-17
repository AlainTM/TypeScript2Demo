Date.prototype.format = function () {
    let dat = new Date(this.valueOf());
    return dat.toLocaleDateString();
};
window.onload = function () {
    var currentDay = new Date();
    console.log(currentDay.format());
};
