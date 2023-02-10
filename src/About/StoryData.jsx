import React from 'react';

import { 
    TbBuildingFortress,
} from 'react-icons/tb';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { GiGreekTemple , GiSydneyOperaHouse, GiPisaTower, GiJapaneseBridge } from 'react-icons/gi';
const iconStyle = (Icon) => <Icon size="3rem" color="#fff" />;

const StoryData = [
	{
		name: 'Tech Driven (2006)',
		description: 'The Journey began with 3 team members offering IT development services.',
		icon: iconStyle(GiGreekTemple),
		imgClass: 'one',
	},
	{
		name: 'Ecommerce Focus (2011)',
		description: 'We shifted our key strength towards advancing our expertise in B2C, B2B and Marketplace.',
		icon: iconStyle(GiSydneyOperaHouse),
		imgClass: 'two',
	},
	{
		name: 'Consulting Approach (2017)',
		description: 'Our business oriented approach bundled with strong platform capabilities was crucial to serve global clients.',
		icon: iconStyle(TbBuildingSkyscraper),
		imgClass: 'three',
	},
	{
		name: 'Global Scale (2019)',
		description: 'Offices in 8 cities worldwide backed by a delivery arm of 550+ specialists to reinforce our global presence.',
		icon: iconStyle(GiPisaTower),
		imgClass: 'four',
	},
	{
		name: 'Localization (2020)',
		description: 'We accelerate localization process to deliver indigenous services despite the pandemic tension along with the birth of powerful products.',
		icon: iconStyle(GiJapaneseBridge),
		imgClass: 'five',
	},
	{
		name: 'G-Local Expansion (2021)',
		description:
			'Empowered by a remarkable headcount boost at 850+ by Feb 2021, Our strategy focuses on expanding localization worldwide and fortifies platform collaboration.',
		icon: iconStyle(TbBuildingFortress),
		imgClass: 'six',
	},
];

export default StoryData