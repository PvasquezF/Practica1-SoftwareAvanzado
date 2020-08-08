async function toggleContainers(container) {
    document.getElementById('showcontacts').style.display = container ? 'block' : 'none';
    document.getElementById('createcontacts').style.display = !container ? 'block' : 'none';
    if (container) {
        const contacts = await getContacts();
        if (contacts) {
            appendToPage(contacts);
        }
    }
}

function appendToPage(contacts) {
    const items = contacts._embedded.item;
    const node = document.getElementById('lista');
    node.innerHTML = '';
    items.map(m => {
        node.innerHTML += `<li>${m.name}</li>`
    });
}

function displaybtns() {
    if (window.localStorage.getItem('access_token')) {
        document.getElementById('btn_iniciar').setAttribute('style', 'display:none !important; cursor: pointer;');
        document.getElementById('btn_salir').setAttribute('style', 'display:block !important; cursor: pointer;');
    } else {
        document.getElementById('btn_salir').setAttribute('style', 'display:none !important; cursor: pointer;');
        document.getElementById('btn_iniciar').setAttribute('style', 'display:block !important; cursor: pointer;');
    }
}