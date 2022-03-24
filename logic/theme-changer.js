//* dark mode

let currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
	document.documentElement.setAttribute('data-theme', 'light');
	document.querySelectorAll('.theme-changer-icon').forEach(function (item) {
		item.src = '/assets/svg/moon.svg';
	});
} else {
	document.documentElement.setAttribute('data-theme', 'dark');
	document.querySelectorAll('.theme-changer-icon').forEach(function (item) {
		item.src = '/assets/svg/sun.svg';
	});
}
const switchTheme = () => {
	currentTheme = localStorage.getItem('theme');
	if (currentTheme === 'light') {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		document.querySelectorAll('.theme-changer-icon').forEach(function (item) {
			item.src = '/assets/svg/sun.svg';
		});
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
		document.querySelectorAll('.theme-changer-icon').forEach(function (item) {
			item.src = '/assets/svg/moon.svg';
		});
	}
};

document.querySelectorAll('.theme-changer').forEach((e) => e.addEventListener('click', switchTheme));
