import React from 'react';
 
import { 
	FaConnectdevelop,
} from 'react-icons/fa';
import { SiHiveBlockchain } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { MdHighQuality, MdSecurity } from 'react-icons/md';
import { FcBiotech } from 'react-icons/fc';
import { GrCloudlinux } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#fff" />;

const CoreServicesData = [
	{
		name: 'Consultacy & Development',
		description: 'We learn about your business from the inside out and the ground up. This allows us to offer you practical, evidence-backed solutions to your problems rather than playing a guessing game. Then we help you put in place and launch a End to End strategy that aligns with your long-term goals.',
		icon: iconStyle(FaConnectdevelop),
		imgClass: 'one',
	},
	{
		name: 'Creative Design',
		description: 'A beautiful digital transformation project isn’t just pleasing to the eye, today it’s vital to maximizing conversion and providing a stellar customer experience. We tap into our vast experience to ensure your site looks and acts the part.',
		icon: iconStyle(AiOutlineAntDesign),
		imgClass: 'two',
	},
	{
		name: 'FinTech',
		description: 'SmartOSC is a top implementation partner of Backbase, the world-leading digital banking platform. We provide full-service digital transformation solutions for banks and financial institutions, including digital banking, data analytics, DXP, CDP, cloud migration and RPA.',
		icon: iconStyle(FcBiotech),
		imgClass: 'three',
	},
	{
		name: 'Cloud Management Services',
		description: 'We help you to manage, integrate and implement your cloud services for cost efficiency. Our dedicated team will handle end-to-end cloud management services so you don’t have to.',
		icon: iconStyle(GrCloudlinux),
		imgClass: 'four',
	},
	{
		name: 'Quality Assurance',
		description: 'Everyone doesn’t want to have error in the digital project, especially during high traffic period. Ensure all of your project run smoothly through our expert testing services.',
		icon: iconStyle(MdHighQuality),
		imgClass: 'five',
	},
	{
		name: 'Cybersecurity',
		description:
			'Cyber attack can always happen anywhere online, but you can rest assured now as we provide protection so you can run the business with safety.',
		icon: iconStyle(MdSecurity),
		imgClass: 'six',
	},
	{
		name: 'Blockchain',
		description:
			'Be part of early adopters to improve your business trust, transparency, security, traceability by implementing one of our latest innovation, blockchain.',
		icon: iconStyle(SiHiveBlockchain),
		imgClass: 'seven',
	},
];

export default CoreServicesData