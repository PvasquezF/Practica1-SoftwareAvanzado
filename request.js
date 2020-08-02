// Crear contacto
createContact = () => {
    const body = $('#createform :input').filter(function(index, element) {
        return $(element).val() != '';
    }).serialize();
    doRequest('POST', body)
}

doRequest = (method, body) => {
    const params = {
        'webserviceClient': 'administrator',
        'webserviceVersion': '1.0.0',
        'option': 'contact',
        'api': 'hal',
    };

    const url = 'https://api.softwareavanzado.world/index.php?' + new URLSearchParams(params).toString();

    fetch(url, {
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method,
        body
    }).then(_ => {
        alert('Usuario creado!');
    }).catch(_ => {
        alert('Hubo un error al crear el usuario');
    });
}