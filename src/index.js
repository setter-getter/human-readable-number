module.exports = function toReadable (number) {
    let arr1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let arr2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    let arr3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return 'zero';
    }
    if (number < 11) {
        return arr1[number - 1]
    }
    if (number > 10 && number < 20) {
        return arr2[number - 11]
    }
    if (String(number).length === 2 && (number - (Math.floor(number / 10) * 10)) === 0) {
        return arr3[Math.floor(number / 10) - 2]
    }
    if (String(number).length === 2 && number > 20) {
        let res = '';
        res = arr3[(Math.floor(number / 10)) - 2] + ' ' + arr1[(number % 10) - 1]
        return res
    }
    if (String(number).length === 3) {
        let res = '';
        let n = number - Math.floor(number / 100) * 100;
        if (n === 0) {
            res = arr1[Math.floor(number / 100) - 1] + ' hundred'
        }
        else if (n < 11) {
            res = arr1[Math.floor(number / 100) - 1] + ' hundred' + ' ' + arr1[n - 1]
        }
        else if (n > 10 && n < 20) {
            res = arr1[Math.floor(number / 100) - 1] + ' hundred' + ' ' + arr2[(Math.floor(n)) - 11]
        }
        else if (n >= 20 && (number - (Math.floor(number / 100) * 100)) % 10 === 0) {
            res = arr1[Math.floor(number / 100) - 1] + ' hundred' + ' ' + arr3[(Math.floor(n / 10)) - 2]
        }
        else {
            res = arr1[Math.floor(number / 100) - 1] + ' hundred' + ' ' + arr3[(Math.floor(n / 10)) - 2] + ' ' + arr1[(n % 10) - 1]
        }
        return res
    }
}
