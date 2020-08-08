// Crear contacto
createContact = async() => {
    let body = $('#createform').serialize();
    body = `<?xml version="1.0" encoding="UTF-8"?>
        <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">
            <soap:Body>
                <adm:create>
                    <name>${body.split('=')[1]}</name>
                </adm:create>
            </soap:Body>
        </soap:Envelope>`;

    let result = await doRequest('POST', body, '');
    if (result) {
        alert('Contactos creados');
    } else {
        alert('Error al crear los contactos');
    }
}

// Crear 10 contactos
create10Contacts = async() => {
    let result = true;
    let body = '';

    // Creando usuario de 1 en 1
    for (let i = 0; i < 10; i++) {
        body = `<?xml version="1.0" encoding="UTF-8"?>
        <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">
            <soap:Body>
                <adm:create>
                    <name>201503611_SOAP_${Math.round(Math.random()*1000)}</name>
                </adm:create>
            </soap:Body>
        </soap:Envelope>`;
        // Obtenemos el resultado de la petición para saber si fue exitosa
        result = result && await doRequest('POST', body, '');
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
    const xmlbody = `<?xml version="1.0" encoding="UTF-8"?>
        <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">
            <soap:Body>
                <adm:readList>
                    <filterSearch>201503611</filterSearch>
                    <limit>0</limit>           
                </adm:readList>
            </soap:Body>
        </soap:Envelope>`;
    const contacts = await doRequest('POST', xmlbody, '');
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
                    api: 'soap',
                    'list[limit]': 0
                };

                const headers = {
                    'Content-Type': ' application/xml',
                    'Authorization': `Basic c2E6dXNhYw==`
                };

                const url = `https://api.softwareavanzado.world/index.php?${new URLSearchParams(params).toString()}${extraparams}`;
                const proxy_url = 'https://cors-anywhere.herokuapp.com/';

                let result = await $.ajax({
                    type: method,
                    url: proxy_url + url,
                    headers,
                    data: body
                });
                resolve(JSON.parse(xml2json(result, "")));
            } catch (error) {
                reject(false);
            }
        })
        .then(m => { return m; })
        .catch(m => { return m });
}