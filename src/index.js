module.exports = function toReadable (number) {
    const writtennumbers = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
        6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
        11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
        16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
        30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'hundred',
    }

    const numberstring = number.toString().split('').reverse();
    let result = '';

if (numberstring[2]) {
    result += writtennumbers[Number(numberstring[2])] + ' ' + writtennumbers[100]
}

if (numberstring[1]) {
    const n = Number(numberstring[1]) * 10;
    if (n > 19) {
        if (numberstring[2]) result += ' ' 
        result += writtennumbers[n]
        if (numberstring[0]) {
            if (numberstring[0] != 0) {
                if (numberstring[1]) result += ' ' 
                result += writtennumbers[Number(numberstring[0])]
            }
        }
    } else if (n > 0) {
        if (numberstring[2]) result += ' ' 
        result += writtennumbers[n + Number(numberstring[0])]
    } else if (numberstring[0] && numberstring[0] > 0) {
        if (numberstring[1]) result += ' '
        result += writtennumbers[Number(numberstring[0])]
    }
} else if (numberstring[0]) {
    if (numberstring[1]) result += ' '
    result += writtennumbers[Number(numberstring[0])]
}

    return result
}
