Date.prototype.addDaysToCurrentDay = function (days) {
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};
window.onload = function () {
    var currentDay = new Date();
    console.log(currentDay);
    console.log(currentDay.addDaysToCurrentDay(5));
};
