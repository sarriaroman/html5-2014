var header = document.getElementById('titulo')
var footer = document.getElementById('footer');
var windowHeight = window.innerHeight;
var headerHeight = header.offsetHeight; 
var footerHeight = footer.offsetHeight;

var content = document.getElementById('content');
var contentHeight = windowHeight - headerHeight - footerHeight; 
content.style.height = contentHeight + 'px';
