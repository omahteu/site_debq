$(document).on("submit", "#contact", function (e) {
    e.preventDefault()
    let form = $(this).serializeArray()

    let nomeCodificado = encodeURI(form[0].value)
    let mensagemCodificada = encodeURIComponent(form[1].value)

    let url = `https://wa.me/5585999831355?text=${mensagemCodificada} - ${nomeCodificado}`

    location.href = url
})
