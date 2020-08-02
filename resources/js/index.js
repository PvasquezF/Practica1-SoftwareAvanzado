function toggleContainers(container) {
    console.log('aaaaaa');
    document.getElementById('showcontacts').style.display = container ? 'block' : 'none';
    document.getElementById('createcontacts').style.display = !container ? 'block' : 'none';
}