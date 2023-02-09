const toggleMenuElement = document.getElementById('toggle__menu');
const menuElement = document.getElementById('menu');
const nosotrasMenuElement = document.getElementById('nosotras-menu');
const productosMenuElement = document.getElementById('productos-menu')
const clientesMenuElement = document.getElementById('clientes-menu')
const contactoMenuElement = document.getElementById('contacto-menu')

toggleMenuElement.addEventListener('click', ()=>{
menuElement.classList.toggle('menu--show');
});

nosotrasMenuElement.addEventListener('click', ()=>{
menuElement.classList.toggle('menu--show');
});

productosMenuElement.addEventListener('click', ()=>{
menuElement.classList.toggle('menu--show');
});

clientesMenuElement.addEventListener('click', ()=>{
menuElement.classList.toggle('menu--show');
});

contactoMenuElement.addEventListener('click', ()=>{
menuElement.classList.toggle('menu--show');
});