$(document).ready(() => {
    $("#numberBinary").keypress((e) => {
        const char = String.fromCharCode(e.keyCode)
        const pattern = '[0-1]'
        if (char.match(pattern)) {
            $("#numberBinary").keyup(() => {
                const number = $("#numberBinary").val()
                const base = 2

                convertNumberToOctal(number, base)
                convertNumberToDecimal(number, base)
                convertNumberToHexadecimal(number, base)
            })
        } else {
            e.preventDefault()
        }
    })
    $("#numberOctal").keypress((e) => {
        const char = String.fromCharCode(e.keyCode)
        const pattern = '[0-7]'
        if (char.match(pattern)) {
            $("#numberOctal").keyup(() => {
                const number = $("#numberOctal").val()
                const base = 8
                convertNumberToBinary(number, base)
                convertNumberToDecimal(number, base)
                convertNumberToHexadecimal(number, base)
            })
        } else {
            e.preventDefault()
        }
    })
    $("#numberDecimal").keypress((e) => {
        const char = String.fromCharCode(e.keyCode)
        const pattern = '[0-9]'
        if (char.match(pattern)) {
            $("#numberDecimal").keyup(() => {
                const number = $("#numberDecimal").val()
                const base = 10
                convertNumberToBinary(number, base)
                convertNumberToOctal(number, base)
                convertNumberToHexadecimal(number, base)
            })
        } else {
            e.preventDefault()
        }
    })
    $("#numberHexadecimal").keypress((e) => {
        const char = String.fromCharCode(e.keyCode)
        const pattern = '[0-9 a-f A-F]'
        if (char.match(pattern)) {
            $("#numberHexadecimal").keyup(() => {
                const number = $("#numberHexadecimal").val()
                const base = 16
                convertNumberToBinary(number, base)
                convertNumberToOctal(number, base)
                convertNumberToDecimal(number, base)
            })
        } else {
            e.preventDefault()
        }
    })
    
    $("#btnCopyBinary").click(() => {
        var copyText = document.getElementById("numberBinary");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    })
    $("#btnCopyOctal").click(() => {
        var copyText = document.getElementById("numberOctal");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    })
    $("#btnCopyDecimal").click(() => {
        var copyText = document.getElementById("numberDecimal");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    })
    $("#btnCopyHexadecimal").click(() => {
        var copyText = document.getElementById("numberHexadecimal");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    })
    $("#btnLinkedin").click(() =>{
        const url = 'https://www.linkedin.com/in/eduardo-barbosa-bernardes-91047b201/'
        const routeToLink = window.open(url, '_blank')
        routeToLink.focus()
    })
    $("#btnGitHub").click(() =>{
        const url = 'https://github.com/EduardoBarbosa-TI'
        const routeToLink = window.open(url, '_blank')
        routeToLink.focus()
    })
})
function convertNumberToBinary(number, base) {
    let numberBinary = parseInt(number, base).toString(2)
    if (numberBinary == "NaN") {
        $("#numberBinary").val(null)
    } else {
        $("#numberBinary").val(numberBinary)
    }
}
function convertNumberToOctal(number, base) {
    let numberOctal = parseInt(number, base).toString(8)
    if (numberOctal == "NaN") {
        $("#numberOctal").val(null)
    } else {
        $("#numberOctal").val(numberOctal)
    }
}
function convertNumberToDecimal(number, base) {
    let numberDecimal = parseInt(number, base).toString(10)
    if (numberDecimal == "NaN") {
        $("#numberDecimal").val(null)
    } else {
        $("#numberDecimal").val(numberDecimal)
    }
}
function convertNumberToHexadecimal(number, base) {
    let numberHexadecimal = parseInt(number, base).toString(16)
    if (numberHexadecimal == "NaN") {
        $("#numberHexadecimal").val(null)
    } else {
        $("#numberHexadecimal").val(numberHexadecimal)
    }

}



