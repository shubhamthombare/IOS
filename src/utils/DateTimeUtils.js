import dayjs from 'dayjs'

var customParseFormat = require('dayjs/plugin/customParseFormat')

dayjs.extend(customParseFormat)


function displayDate(datetime){
    return dayjs(datetime).format('D MMM YYYY');   
}

function displayDateInMMMYY(datetime){
    return dayjs(datetime).format('MMM YY');   
}


export {displayDate,displayDateInMMMYY};