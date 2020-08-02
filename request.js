// Crear contacto
createContact = () => {
    const body = $('#createform :input').filter(function(index, element) {
        return $(element).val() != '';
    });

    const params = {
        'webserviceClient': 'administrator',
        'webserviceVersion': '1.0.0',
        'option': 'contact',
        'api': 'hal',
    };

    const url = 'https://api.softwareavanzado.world/index.php?' + params;
    // POST REQUEST
    fetch(url, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        body,

    }).then(_ => {
        alert('Usuario creado!');
    }).catch(_ => {
        alert('Hubo un error al crear el usuario');
    });
}