let items = document.querySelectorAll('.items')

items.forEach(link => link.addEventListener('click', itemActive));

function itemActive(){
    items. forEach(link => link.classList.remove('active'));
    this.classList.add('active');
}