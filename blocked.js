const params = new URLSearchParams(location.search);
const keyword = params.get('keyword') || 'unknown';
const url = params.get('url') || '';

document.getElementById('keyword').textContent = keyword;
document.getElementById('url').textContent = url;
document.getElementById('back').addEventListener('click', () => history.back());
