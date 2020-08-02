function toggleContainers(container) {
    document.getElementById('showcontacts').style.display = container ? 'block' : 'none';
    document.getElementById('createcontacts').style.display = !container ? 'block' : 'none';
}