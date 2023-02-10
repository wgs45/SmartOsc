import React from 'react';

import { 
    TbSmartHome,
} from 'react-icons/tb';
import { MdChair } from 'react-icons/md';
import { GiClothes, GiMilkCarton } from 'react-icons/gi';
import { SiAsus, SiSpacex } from 'react-icons/si';
import { MdOutlinePayments, MdLocalGroceryStore } from 'react-icons/md';
import { FaBabyCarriage, FaBath, FaShopware } from 'react-icons/fa';
import { BsMusicNote } from 'react-icons/bs';
import { AiFillDatabase } from 'react-icons/ai';
import { FcElectronics } from 'react-icons/fc';
import { FiShoppingCart } from 'react-icons/fi';
import { FaCcPaypal, FaPiggyBank } from 'react-icons/fa';
import { TbRotate360, TbMilk } from 'react-icons/tb';
const iconStyle = (Icon) => <Icon size="3rem" color="#fff" />;

const ClientsData = [
	{
		name: 'Netatmo | A brand of Legrand',
		description: 'Worldwide, Multinational Company',
		icon: iconStyle(TbSmartHome),
		imgClass: 'one',
	},
	{
		name: 'Club 21',
		description: 'Worldwide, Multinational Company',
		icon: iconStyle(GiClothes),
		imgClass: 'two',
	},
	{
		name: 'Justice',
		description: 'Worldwide, Multinational Company',
		icon: iconStyle(MdChair),
		imgClass: 'three',
	},
	{
		name: 'Asus',
		description: 'Worldwide, Multinational Company',
		icon: iconStyle(SiAsus),
		imgClass: 'four',
	},
	{
		name: 'Eway',
		description: 'Worldwide, Multinational Company',
		icon: iconStyle(MdOutlinePayments),
		imgClass: 'five',
	},
	{
		name: 'Mother Care',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(FaBabyCarriage),
		imgClass: 'six',
	},
    {
		name: 'Johnson & Johnson',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(FaBath),
		imgClass: 'seven',
	},
    {
		name: 'The Store',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(MdLocalGroceryStore),
		imgClass: 'eight',
	},
    {
		name: 'Nestle',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(GiMilkCarton),
		imgClass: 'nine',
	},
    {
		name: 'SmartBox',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(BsMusicNote),
		imgClass: 'ten',
	},
    {
		name: 'Mellisa',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(AiFillDatabase),
		imgClass: 'eleven',
	},
    {
		name: 'Courts',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(FaShopware),
		imgClass: 'twelve',
	},
    {
		name: 'Ricoh',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(FcElectronics),
		imgClass: 'thirteen',
	},
    {
		name: 'Lotte',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(FiShoppingCart),
		imgClass: 'fourteen',
	},
    {
		name: 'PayPal',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(FaCcPaypal),
		imgClass: 'fifteen',
	},
    {
		name: 'Star 360',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(TbRotate360),
		imgClass: 'sixteen',
	},
    {
		name: 'Friso',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(TbMilk),
		imgClass: 'seventeen',
	},
    {
		name: 'SpaceX',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(SiSpacex),
		imgClass: 'eighteen',
	},
    {
		name: 'NAM A BANK',
		description:
			'Worldwide, Multinational Company',
		icon: iconStyle(FaPiggyBank),
		imgClass: 'nineteen',
	},
];

export default ClientsData