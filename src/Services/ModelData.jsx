import Project from '../assets/images/Services/project-icon.svg';
import Service from '../assets/images/Services/services-icon.svg';
import Team from '../assets/images/Services/team-icon.svg';
import NewsLetter from '../assets/images/newsletter-icon.svg';
import Help from '../assets/images/help-icon.svg';
  
export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: '+ Fixed Budget + On Time Deliverables + Custom Build Scope',
	},
	headline: "Project Based",
	description: 'Transform your business into digital based company with fixed budget and on-time deliverables with our expertise in end-to-end services based on your needs.',
	buttonLabel: 'Case Study',

    linkTo: '/',
	imgStart: 'start',
	img: Project,
	start: 'true',
};

export const heroTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: '+ Flexible Scope + Dedicated Team + Continuos Development',
	},
	headline: 'Extended Team',
	description: 'Flexible and adapt are one of the key things for business to grow. Our 800+ specialists are ready to be part of your extended team and help you to manage all of your digital transformation projects with flexibility.',
	buttonLabel: 'Case Study',

	linkTo: '/',
	imgStart: 'start',
	img: Team,
	start: 'true',
};

export const heroThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: '+ Dedicated Support + On Time',
	},
	headline: 'Managed Service',
	description:
		'Every digital transformation project need to be maintained regularly. Worry-less, as our dedicated expertise will support you on daily basis and provide a solution on time.',
	buttonLabel: 'Case Study',

	linkTo: '/',
	imgStart: 'start',
	img: Service,
	start: 'true',
};
 
export const heroFour = {
	reverse: false,
	inverse: true,
	topLine: {
		text: 'More Info',
	},
	headline: 'NewsLetter',
	description:
		'What can we help to digitalize your business?',
	buttonLabel: 'Contact Us',

	linkTo: '/',
	imgStart: 'start',
	img: NewsLetter,
	start: 'true',
};
 
export const heroSix = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Tools',
	},
	headline: 'Back To Home Page?',
	description:
		'Please kindly press the logo to redirect back to Home page.',
	buttonLabel: 'Understood',

	linkTo: '/',
	imgStart: 'start',
	img: Help,
	start: 'true',
};
