const menuIcon = document.querySelector('.menu-icon-container');
const menu = document.querySelector('.nav-items');
menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('active');
	menu.classList.toggle('open');
});

const allNavItems = document.querySelectorAll('.nav-item');
allNavItems.forEach((navItem) =>
	navItem.addEventListener('click', () => {
		menuIcon.classList.remove('active');
		menu.classList.remove('open');
	})
);

const cookiesFilesAcceptBtn = document.querySelector('#cookies-btn');
cookiesFilesAcceptBtn.addEventListener('click', () => {
	document.querySelector('.cookies-info-container').classList.remove('show');
});

const docBtn = document.querySelector('#btn-documents');
docBtn.addEventListener('click', () => {
	window.open('https://drive.google.com/');
});

const netRecrutBtn = document.querySelector('#btn-form');
const htmlDoc = document.querySelector('html');
const recruitmentCont = document.querySelector('.recruitment-form-container');
netRecrutBtn.addEventListener('click', () => {
	recruitmentCont.classList.add('show');
	htmlDoc.classList.add('freeze');
});

const closeRecruitmentIcon = document.querySelector('.close-icon-container');
closeRecruitmentIcon.addEventListener('click', () => {
	recruitmentCont.classList.remove('show');
	htmlDoc.classList.remove('freeze');
});

