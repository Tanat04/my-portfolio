import {
	react,
	backend,
	nextjs,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	au,
	next,
	php,
	psql,
	hospital,
	tutorPlus,
	gradeTracker,
	suppliers,
	tbhlabs,
	mahavertex,
	sunmi,
	gpos,
	framer,
	sunmiWeb,
	brainwave,
	MahaVertexWeb,
} from "../assets";

export const myGithub = "https://github.com/tanat04";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: react,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "next",
		icon: next,
	},
	{
		name: "php",
		icon: php,
	},
	{
		name: "psql",
		icon: psql,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
];

const experiences = [
	{
		title: "Full stack Developer (Student)",
		company_name: "Assumption University",
		icon: au,
		iconBg: "#383E56",
		date: "Jan 2023 - Jun 2023",
		points: [
			"Developing a full-stack CRUD operation project.",
			"Using ReactJS for frontend development, Next.js for server-side rendering and routing, MongoDB for database management.",
			"Collaborating with a team to achieve project goals.",
		],
	},
	{
		title: "Student Developer",
		company_name: "TBHLabs",
		icon: tbhlabs,
		iconBg: "#E6DEDD",
		date: "Nov 2023 - Apr 2024",
		points: [
			"Developed a full-stack chatbot using WIT.ai, trained on a database of 500+ smartphones with over 15 entities each.",
			"Built an admin dashboard with Firebase authentication for seamless CRUD operations and data management.",
			"Implemented five distinct bot intents, leveraging Glitch for communication, achieving 95% accuracy in intent recognition.",
		],
	},
	{
		title: "Freelance Developer",
		company_name: "MahaVertex",
		icon: mahavertex,
		iconBg: "#383E56",
		date: "May 2024 - Oct 2024",
		points: [
			"Developed a company website with a search algorithm using NLP and regex for nested filters, enhancing search accuracy.",
			"Integrated Google Maps API to display nearby accommodations and BTS stations, improving user navigation.",
			"Focused on backend data gathering and integration using Sanity, while also contributing to the frontend and ensuring full mobile responsiveness, including Calendly for appointment scheduling.",
		],
	},
	{
		title: "Software Engineer",
		company_name: "Sunmi TH",
		icon: sunmi,
		iconBg: "#E6DEDD",
		date: "Oct 2023 - Present",
		points: [
			"Develop and maintain the company's website, primarily focusing on front-end development, SEO, and localization to enhance user experience.",
			"Build an internal system to streamline workflows and automate manual processes, working alongside two other developers on NestJS backend and frontend.",
			"Optimize internal tools and systems to improve collaboration and efficiency across departments.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "GPOS",
		description:
			"Developed a company project website with two language, strictly adhering to the provided design. Focused on SEO optimization, performance improvements, and ensuring a fast, responsive user experience. Also responsible for maintaining and updating website information.",
		tags: [
			{
				name: "NextJS",
				color: "blue-text-gradient",
			},
			{
				name: "SEO",
				color: "green-text-gradient",
			},
			{
				name: "Localization",
				color: "pink-text-gradient",
			},
		],
		image: gpos,
		source_code_link: "",
		demo_link: "https://gpos.co.th/th",
	},
	{
		name: "Framer",
		description:
			"Worked on a frontend-focused project to enhance my UI skills using Framer and explore modern design principles. Focused on creating responsive, user-friendly interfaces while improving my proficiency with the latest frontend technologies.",
		tags: [
			{
				name: "NextJS",
				color: "blue-text-gradient",
			},
			{
				name: "Framer",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind CSS",
				color: "pink-text-gradient",
			},
		],
		image: framer,
		source_code_link: "",
		demo_link: "https://framer-motion-olive.vercel.app/",
	},
	{
		name: "MahaVertex",
		description:
			"Developed a company website which includes a search algorithm and Google Maps API integration, primarily focusing on backend data gathering and integration using Sanity. Also contributed to the frontend and ensured full mobile responsiveness.",
		tags: [
			{
				name: "NextJS",
				color: "blue-text-gradient",
			},
			{
				name: "Google Maps API",
				color: "green-text-gradient",
			},
			{
				name: "Sanity",
				color: "pink-text-gradient",
			},
		],
		image: MahaVertexWeb,
		source_code_link: "",
		demo_link: "https://mv-realty.vercel.app/",
	},
	{
		name: "Brainwave",
		description:
			"Worked on a frontend-focused project to enhance my UI skills and explore modern design principles. Focused on creating responsive, user-friendly interfaces while improving my proficiency with the latest frontend technologies.",
		tags: [
			{
				name: "NextJS",
				color: "blue-text-gradient",
			},
			{
				name: "Responsive Design",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind CSS",
				color: "pink-text-gradient",
			},
		],
		image: brainwave,
		source_code_link: "",
		demo_link: "https://brainwave-sigma-two.vercel.app/",
	},
	{
		name: "Sunmi TH",
		description:
			"Develop and maintain the company's website, primarily focusing on front-end development, SEO, and localization to enhance user experience.",
		tags: [
			{
				name: "NextJS",
				color: "blue-text-gradient",
			},
			{
				name: "TypeScript",
				color: "green-text-gradient",
			},
			{
				name: "Sanity",
				color: "pink-text-gradient",
			},
		],
		image: sunmiWeb,
		source_code_link: "",
		demo_link: "https://sunmith.com/en",
	},
];

export { services, technologies, experiences, testimonials, projects };
