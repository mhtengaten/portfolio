import emoji from "react-easy-emoji";

export const greetings = {
	name: "Marcos Tengaten",
	title: "Hi all, I'm Marcos",
	description:
		"I am Full Stack developer passioned about creating responsive, high-performance, modern and user-friendly applications for iOS & Android using React Native. I have been working with web apps for 8+ years and mobile apps for 4+ years. Therefore, I have very high quality standards and always strive to provide the best user experience.",
	resumeLink:
		"https://drive.google.com/file/d/1IRD_u3DrIa2jEoHsh2Dh8XWJxCIFjtA1/view?usp=sharing",
	descBullets: [
		"● React Native, React, React Hooks, React Navigation, Redux",
		"● Javascript, HTML, CSS, PHP, Typescript, Python",
		"● Node.js",
		"● Firebase, SQLite, MsSQL",
		"● Bitbucket, GitHub, Jira, Trello",
		"● APIs: Rest APIs, droid/iOS APIs, Expo, Google APIs, Stripe API, GraphQL",
		"● UI mobile automation: Detox, Appium, Jest",
		"● Agile: Scrum, Kanban",
	],
};

export const openSource = {
	githubUserName: "mhtengaten",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/mhtengaten",
	instagram: "https://www.instagram.com/mhtengaten",
	twitter: "https://twitter.com/mhtengaten",
	github: "https://github.com/mhtengaten",
	linkedin: "https://www.linkedin.com/in/marcos-tengaten-63480323b/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Mobile applications using Swift, Java, Flutter and React Native"
				),
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "Swift",
					fontAwesomeClassname: "logos:swift",
				},
				{
					skillName: "Kotlin",
					fontAwesomeClassname: "logos:kotlin",
				},
				{
					skillName: "Java",
					fontAwesomeClassname: "logos:java",
				},
				{
					skillName: "Flutter",
					fontAwesomeClassname: "logos:flutter",
				},
				{
					skillName: "React Native",
					fontAwesomeClassname: "logos:react",
				},
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				),
				emoji(
					"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Mobile Application Development",
		progressPercentage: "100",
	},
	{
		Stack: "Frontend Development", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Blockchain",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Centro Universitario Facex",
		subHeader: "Bachelor's degree in Computer Science",
		duration: "February 2009 - February 2014",
		desc: "Participated in the research of Computer Science and published 3 papers.",
		descBullets: [
			"Data Structures and Algorithms",
			"Database Management Systems",
			"Operating Systems",
			"Machine Learning",
			"Computer Vision",
		],
	},
];

export const experience = [
	{
		role: "Senior Software Developer",
		company: "Self-Employed",
		companylogo: "/img/icons/common/1523569923198.jpeg",
		date: "Mar 2022 - Present",
		desc: "I am Full Stack developer passioned about creating responsive, high-performance, modern and user-friendly applications for iOS & Android using React Native. I have been working with web apps for 8+ years and mobile apps for 4+ years. Therefore, I have very high quality standards and always strive to provide the best user experience.",
		descBullets: [
		],
	},
	{
		role: "Senior Software Developer",
		company: "BEON Tech Studio",
		companylogo: "/img/icons/common/1596574427038.jpeg",
		date: "Mar 2018 - Feb 2022 (4 years)",
		desc: "We unite publishers, advertisers and agencies in a single media marketplace to access premium demand, easy-to-use tools, and personalized service. Whether you want to maximize the revenue of your ad inventory or the return on your advertising investment.",
		descBullets: [
			"Analyzed and designed UI/UX for web and mobile applications using Figma.",
			"Established design guidelines and styles for web and mobile applications using Figma.",
			"Participated in setting up Jira user stories and tasks for agile development.",
			"Joined daily scrum meetings.",
			"Implemented features using React, React Native, hooks, Typescript, Redux and Redux Saga.",
			"Used Redux for global app state management and Redux Saga with Axios for asynchronous calls to a .NET web server.",
			"Followed best React practices for scalability and clean code such as reusable components.",
			"Built over 30+ common components such as buttons, input fields, bottom sheets, modals, etc.",
			"Performed code reviews and approved PRs on GitHub.",
			"Published mobile application to the App Store and Google Play store for pre-order.",
		],
	},
	{
		role: "Frontend Developer",
		company: "GX2 Tecnologia",
		companylogo: "/img/icons/common/1625597522772.jpeg",
		date: "Jul 2016 - Mar 2018 (1 year 9 months)",
		desc: "My primary Responsibilities includes translation of the UI/UX design wire-frames to actual code that will produce visual elements of the application.",
		descBullets: [
			"Designed and developed UI screens using CSS3, Flex and Bootstrap to produce fluid, scalable, responsive designs; ensured that all designs were aligned with W3C standards and deployed to various global CMS sites",
			"Collaborated with designers to construct conceptual wireframes and mockups using Invision and Sketch",
			"Optimized load time for high-traffic pages by consolidating CSS compiled SASS with SCSS using LESS/SASS, Gulp, Grunt",
			"Performed complete application life cycle functions from conception to final release; including design and analysis, documentation, implementation. QA testing and de-bugging using Firebug.",
		],
	},
	{
		role: "Web Developer",
		company: "Jef Equipamentos De Informatica",
		companylogo: "/img/icons/common/company-2402307-2006242.png",
		date: "Jul 2014 - Jun 2016 (2 years)",
		desc: "",
		descBullets: [
			"Design mockups and develop HTML/CSS templates that responsive and cross browser.",
			"Creates websites and web pages using HTML5, Javascript, CSS, PHP, XML, MySQL, and WordPress Plug-ins",
			"Integrates data from various back-end services and databases",
			"Email design and coding for responsive desktop and mobile optimized email designs",
			"Creating new themes and improving current themes",
			"Gathers and refines specifications and requirements based on technical needs",
		]
	},
];

export const projects = [
	{
		companylogo: "https://play-lh.googleusercontent.com/pDpUsgkzJ9q3ker0R_iC_2lgJEz15kb-_AuQ_rp7atpG45pDiRfHO77CYNRS6sgjguyb=w240-h480-rw",
		name: "Guidants Android",
		desc: "Guidants gives you real-time financial market data, analyses, and access to a community of pro traders",
		link: "https://play.google.com/store/apps/details?id=de.boersego.gmt.android",
	},
	{
		companylogo: "https://play-lh.googleusercontent.com/n1WJ7quTSLTqTMt5Y5MYvPMxTvESb-W1TGXpGvNXRTFc1_wntqaixOblaI04scF2FjLu=w240-h480-rw",
		name: "MietBOX",
		desc: "MietBOX ist die erste Software zur Steuerung aller operativen Prozesse in der Baustellen- und Verkehrssicherung. Die Funktionsvielfalt unserer Software vereinfacht selbst komplexe Arbeitsschritte.",
		link: "https://play.google.com/store/apps/details?id=com.verkherbox&hl=en&gl=US/",
	},
	{
		companylogo: "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/89/b0/c8/89b0c89e-253e-6089-928c-0dbc71ec30c8/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
		name: "Goodify",
		desc: "Ever felt like you want to make a difference? Ever needed a helping hand?",
		link: "https://apps.apple.com/us/app/goodify/id1382210600/",
	},
	{
		companylogo: "https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/a6/76/5d/a6765df3-6128-cd04-a24b-c8d9238e41c3/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp",
		name: "My Gartner Mobile",
		desc: "Stay current with timely analysis and advice across technology and business from the world’s leading research and advisory company — on any iOS device.",
		link: "https://apps.apple.com/us/app/my-gartner-mobile/id1202220943/",
	},
	{
		companylogo: "/img/icons/common/chownow.svg",
		name: "ChowNow Discover",
		desc: "ChowNow Discover is a platform that lets customers discover new local restaurants and provides business owners with tools to convert first time orders into lifelong diners.",
		link: "https://eat.chownow.com/",
	},
	{
		companylogo: "/img/icons/common/Tripsomnia.svg",
		name: "Tripsomnia",
		desc: "Tripsomnia is a web platform that allows to book and sell local tours and tourist attractions all over the world",
		link: "https://www.tripsomnia.com/",
	},
	{
		companylogo: "/img/icons/common/web-link.png",
		name: "FestBlast",
		desc: "FestBlast is an all-in-one platform that lets you easily find the best music fests, organize your trip and personalize your festival experience.",
		// github: "https://github.com/mhtengaten",
		link: "https://festblast.com",
	},
	{
		companylogo: "/img/icons/common/web-link.png",
		name: "Reservise",
		desc: "A mobile application, which allows for online reservation of courts and managing your reservations.",
		// github: "https://github.com/mhtengaten",
		link: "http://reservise.com/",
	},
	{
		companylogo: "/img/icons/common/web-link.png",
		name: "Developer-Portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/mhtengaten/portfolio",
		link: "https://mhtengaten.netlify.app/",
	},
	{
		companylogo: "/img/icons/common/web-link.png",
		name: "The DEVEREUX Collective",
		desc: "I was approached by Start Mesh to create a brand identity, including a logo, business card design and website",
		link: "https://www.thedevereuxcollective.co/",
	},
];

export const feedbacks = [
	{
		name: "Michael M.",
		feedback:
			"Marcos was a pleasure to work with. He communicated well, took feedback, and incorporated and delivered as promised. I will work with Marcos again.",
	},
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
];
