import { algorithms, devnotes, ocs } from "../assets";

export const navLinks = [
	{
		id: "hero",
		title: "Home",
	},
	{
		id: "portfolio",
		title: "Portfolio",
	},
	// {
	// 	id: "experience",
	// 	title: "Experience",
	// },
	{
		id: "contact",
		title: "Contact",
	},
];

const experiences = [
	{
		title: "Full Stack Web Developer",
		company_name: "Fresher",
		date: "2024 - Present",
		details: [
			"Built a subscriber base of over <span style='color: white;'>500,000 subscribers</span> by creating video content to help programmers.",
			"Crafted visually appealling programming videos that have garnered over <span style='color: white;'>30,000,000 views</span>.",
			"Produced high-quality educational and entertaining videos for clients including <span style='color: white;'>Intel, JetBrains, and MicroCenter</span>.",
		],
	},
	{
		title: "Full Stack Web Development in Java(Learning)",
		company_name: "A.I.I.I.T.S. Kharghar",
		date: "2024 - Present",
		details: [
			"Built custom enterprise applications for a <span style='color: white;'>Fortune 500 company</span> as a full-stack software engineer.",
			"Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
			"<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
		],
	},
	{
		title: "BSc - IT Graduate",
		company_name: "JSM College, Alibag",
		date: "2021 - 2024",
		details: [
			"Developed and delivered custom interdisciplinary coding portfolio for clients including <span style='color: white;'>Nvidia, Hostinger, and Amazon</span>.",
			"<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
			"<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
		],
	},
];

const portfolio = [
	{
		name: "Hotel/Cottage Website",
		description:
			"This is my First Project. I Love this project very much. While making this project i understand how difficult is to create a project.",
		image: ocs,
	},
	{
		name: "ChatAi",
		description:
			"ChatAI is an AI like chatGPT which helps in our daily life from getting near perfect information",
		image: devnotes,
	},
	{
		name: "Typing Game",
		description:
			"This game is like a Test We take in Typing exam. If wrong it Tells us that letter is wrong, which helps us increasing our speed",
		image: algorithms,
	},
];

export { experiences, portfolio };
