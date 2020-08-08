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
        body['name'] = `201503611_${Math.round(Math.random()*1000)}`;
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
    if (!window.localStorage.getItem('access_token')) {
        alert('No se ha realizado ninguna autenticación');
        return false;
    }

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
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`
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

oauth2 = () => {
    return new Promise(async(resolve, reject) => {
            const body = {
                "grant_type": "client_credentials",
                "client_id": "sa",
                "client_secret": "fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745",
            };
            const url = `https://api.softwareavanzado.world/index.php?option=token&api=oauth2`;
            const proxy_url = 'https://cors-anywhere.herokuapp.com/' + url;
            const init = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                method: 'POST',
                body: JSON.stringify(body)
            };

            let result = await fetch(proxy_url, init);

            if (result.ok) {
                result = await result.json();
                window.localStorage.setItem('access_token', result.access_token);
                alert('Sesión iniciada');
                displaybtns();
                resolve(result);
            } else {
                alert('Error al autenticar al usuario');
                reject(false);
            }
        })
        .then(m => {
            return m;
        })
        .catch(m => {
            return m;
        });
}

logout = () => {
    if (window.localStorage.getItem('access_token')) {
        window.localStorage.clear();
        alert('Sesión finalizada');
        displaybtns();
    }
}