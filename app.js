// Crear contacto
createContact = async() => {
    const body = $('#createform').serialize();
    const result = await doRequest('POST', body, '');
    if (result) {
        alert('Contactos creados');
    } else {
        alert('Error al crear los contactos');
    }
}

// Crear 10 contactos
create10Contacts = async() => {
    let result = true;
    let body = {};

    // Creando usuario de 1 en 1
    for (let i = 0; i < 10; i++) {
        body['name'] = `201503611_${Math.random()*1000}`;
        // Obtenemos el resultado de la petición para saber si fue exitosa
        result = result && await doRequest('POST', JSON.stringify(body), '');
    }

    if (result) {
        alert('Contactos creados');
    } else {
        alert('Error al crear los contactos');
    }
}

// Obtener usuarios
getContacts = async() => {
    // Obtenemos los usuarios y utilizamos el filtro para obtener coincidencias con el carnet
    const contacts = await doRequest('GET', null, '&filter[search]=201503611');
    if (contacts) {
        return contacts;
    } else {
        alert('Error al obtener los contactos');
    }
}

// Petición para crear/obtener usuarios
doRequest = (method, body, extraparams) => {
    return new Promise(async(resolve, reject) => {
            try {
                const params = {
                    webserviceClient: 'administrator',
                    webserviceVersion: '1.0.0',
                    option: 'contact',
                    api: 'hal',
                    'list[limit]': 0
                };

                const url = `https://api.softwareavanzado.world/index.php?${new URLSearchParams(params).toString()}${extraparams}`;
                const proxy_url = 'https://cors-anywhere.herokuapp.com/';
                const init = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method
                };
                if (body) init['body'] = body;

                let result = await fetch(proxy_url + url, init);

                if (result.ok) {
                    result = await result.json();
                    resolve(result);
                } else {
                    reject(false);
                }
            } catch (error) {
                reject(false);
            }
        })
        .then(m => { return m; })
        .catch(m => { return m });
}