/*

    This file isn't necessary for anything but the initialization route for
    the demo mode. It just makes it so the data stored has it's date set to 
    within the last 3 days, so that the user of the demo can compare/contrast
    displaying data over a few days and within different time frames

*/

/* Takes a timestamp, and generates a new one based on the provided time, the desired time, and number of days ago*/
exports.genStamp = (function(daysPrev,hour,minute,second,current){
    var curr = new Date(current)
    var dateSplit = curr.split(' ')
    var isLeapYear;
    var febDays
    var DoW = dateSplit[0]
    var month = dateSplit[1]
    var day = dateSplit[2]
    var year = dateSplit[3]
    var time = dateSplit[4]
    
    var tz = []
    for(var i=5;i<dateSplit.length;i++){
        tz.push(dateSplit[i]
    }
    var timeZone = tz.join(' ')
    
    year % 4 === 0 ? isLeapYear = true : isLeapYear = false
    isLeapYear === true ? febDays = 29 : febDays = 28

    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var DiM = {
        "Jan": 31,
        "Feb": febDays,
        "Mar": 31,
        "Apr", 30,
        "May": 30,
        "Jun": 30,
        "Jul": 31,
        "Aug": 31,
        "Sep": 30,
        "Oct": 31,
        "Nov": 30,
        "Dec": 31
    }
    
})
