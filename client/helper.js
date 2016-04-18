Template.registerHelper('formatDate', function(date) {
	var date = new Date(date);

    var day = date.getDate().toString();
    var month = (date.getMonth() + 1).toString();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();

    if (day.length === 1) {
        day = '0' + day;
    }

    if (month.length === 1) {
        month = '0' + month;
    }

    if (minute < 10){
        minute= '0' + minute;
    }

    if (hour < 10){
        hour= '0' + hour;
    }

    return day + '/' + month + '/' + year + ' à ' + hour + ':' + minute;
});