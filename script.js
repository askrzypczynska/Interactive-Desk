let zoom = Number((window.innerWidth / window.screen.width).toFixed(3));

const changeSize = () => {
	zoom = Number((window.innerWidth / window.screen.width).toFixed(3));
	document.firstElementChild.style.zoom = zoom;
}

changeSize()

window.addEventListener('resize', changeSize);
