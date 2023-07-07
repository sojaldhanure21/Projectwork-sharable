
var fullMonth = ""

export const FormatDateService = input => {
  var datePart = input.match(/\d+/g),
    year = datePart[0], // get only two digits
    month = datePart[1],
    day = datePart[2];
    getMonth(month)
  return day + ' ' + fullMonth + ' ' + year;
};

function getMonth(month) {
    if(month === '01'){
        fullMonth = "JAN"
    }else if(month === '02'){
        fullMonth = "FEB"
    }else if(month === '03'){
        fullMonth = "MAR"
    }else if(month === '04'){
        fullMonth = "APR"
    }else if(month === '05'){
        fullMonth = "MAY"
    }else if(month === '06'){
        fullMonth = "JUN"
    }else if(month === '07'){
        fullMonth = "JUL"
    }else if(month === '08'){
        fullMonth = "AUG"
    }else if(month === '09'){
        fullMonth = "SEP"
    }else if(month === '10'){
        fullMonth = "OCT"
    }else if(month === '11'){
        fullMonth = "NOV"
    }else if(month === '12'){
        fullMonth = "DEC"
    }else{
        fullMonth = month
    }
}
