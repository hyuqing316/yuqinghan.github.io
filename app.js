// vue instance
var APP = {
	el: "#app",
	data: {
		// svg for menu icons
		svgData: [
			{
				id: 'home',
				ref: "#home",
				value: 'Home',
				href: "./index.html",
				viewBox: '0 0 495.398 495.398',
				paths: [
					"M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z",
					"M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"
				]
			},
			{
				id: 'person',
				ref: "#person",
				value: 'Portfolio',
				href: "./portfolio.html",
				viewBox: '-326.8 274.8 63.7 64.5',
				paths: [
					"M-282.1 306.7l-2.5-1.1 1.8-2.1c2.6-3.1 4.1-6.9 4.1-10.9v-1.2c0-9.2-7.5-16.8-16.8-16.8h-1.2c-9.2 0-16.8 7.6-16.8 16.8v1.2c0 4.2 1.6 8.3 4.6 11.5l1.9 2-2.5 1.2c-10.7 5.1-17.6 16.1-17.6 27.9 0 2.2 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1c0-12.5 10.2-22.8 22.8-22.8.2 0 .4 0 .6-.1l.3-.1.3.1c.3 0 .5.1.6.1 12.5 0 22.8 10.2 22.8 22.8 0 2.2 1.8 4.1 4.1 4.1 2.2 0 4.1-1.8 4.1-4.1.1-12.5-7.3-23.6-18.8-28.5zm-4.7-14.4v.4c0 4.7-3.9 8.6-8.6 8.7h-.8c-4.8 0-8.6-3.9-8.6-8.7v-1.2c0-2.3.9-4.5 2.5-6.1 1.6-1.6 3.8-2.5 6.1-2.5h1.2c4.8 0 8.6 3.9 8.6 8.7v.6l-.4.1z"
				]
			},
			{
				id: 'resume',
				ref: "#resume",
				value: 'Resumé',
				href: "./resume.html",
				viewBox: '0 0 100 100',
				paths: [
					"M83.333,10H16.667C13.001,10,10,13.001,10,16.667v66.667C10,86.999,13.001,90,16.667,90h66.667C86.999,90,90,86.999,90,83.333V16.667C90,13.001,86.999,10,83.333,10z M26.667,36.667c0-5.521,4.479-10,10-10c5.521,0,10,4.479,10,10H40c0-1.842-1.493-3.333-3.333-3.333s-3.333,1.491-3.333,3.333v13.33c0,1.839,1.492,3.333,3.333,3.333S40,51.836,40,49.997h6.667c0,5.524-4.479,10-10,10c-5.521,0-10-4.477-10-10V36.667z M73.333,73.333H26.667v-6.666h46.667V73.333zM65,60h-6.667L50,26.667h6.872l4.795,19.18l4.795-19.18h6.871L65,60z"
				]
			},
			{
				id: 'game',
				ref: "#game",
				value: 'Interest',
				href: "./interest.html",
				viewBox: '0 0 360 270',
				paths: [
					'm155.28 155.51c-2.573-9.212-9.944-16.461-19.301-18.981v18.981h19.3z',
					'm353.93 120.47c-8.85-46.19-29.57-121.94-82.05-120.45-33.922 0.966-26.277 35.779-83.655 30.111-0.809 1.224-13.834 1.224-14.643 0-57.376 5.668-49.734-29.145-83.655-30.111-52.48-1.494-73.198 74.26-82.047 120.45-11.283 58.903-18.08 171.4 48.263 145.8 7.434-2.867 91.267-54.054 101.35-54.054h46.818c10.086 0 93.924 51.17 101.35 54.054 63.87 24.79 59.55-86.9 48.27-145.8zm-298.3-24.09c0-14.299 11.767-25.892 26.282-25.892 14.517 0 26.283 11.593 26.283 25.892s-11.766 25.892-26.283 25.892c-14.518 0-26.285-11.59-26.285-25.89zm101.17 72.44l-0.308 1.175c-2.662 9.815-10.533 17.528-20.517 20.096l-1.784 0.421c-1.771 0.337-3.596 0.528-5.465 0.528-1.871 0-3.694-0.191-5.465-0.528l-1.985-0.471c-9.89-2.62-17.673-10.299-20.315-20.046l-0.509-2.19c-0.308-1.659-0.493-3.36-0.493-5.105 0-1.746 0.185-3.447 0.493-5.106l0.48-2.079c2.614-9.801 10.416-17.525 20.344-20.156l1.414-0.359c1.948-0.411 3.964-0.64 6.036-0.64 2.071 0 4.087 0.229 6.036 0.64l1.213 0.308c10.023 2.578 17.914 10.341 20.545 20.207l0.279 1.066c0.442 1.973 0.694 4.015 0.694 6.119 0 2.1-0.25 4.15-0.69 6.12zm120.17-93.674c5.706 0 10.331 4.557 10.331 10.177 0 5.622-4.625 10.178-10.331 10.178-5.704 0-10.33-4.556-10.33-10.178 0-5.62 4.62-10.177 10.33-10.177zm-43.49 111.57c-14.496 0-26.246-11.578-26.246-25.858 0-14.281 11.75-25.86 26.246-25.86 14.5 0 26.251 11.579 26.251 25.86 0 14.28-11.75 25.86-26.25 25.86zm22.83-70.86c-5.706 0-10.331-4.557-10.331-10.179 0-5.621 4.625-10.177 10.331-10.177 5.705 0 10.33 4.556 10.33 10.177 0 5.62-4.63 10.18-10.33 10.18zm20.66 20.35c-5.704 0-10.33-4.557-10.33-10.177s4.626-10.177 10.33-10.177c5.706 0 10.331 4.557 10.331 10.177s-4.63 10.18-10.33 10.18zm20.66-20.35c-5.704 0-10.329-4.556-10.329-10.177s4.625-10.178 10.329-10.178c5.706 0 10.333 4.557 10.333 10.178s-4.63 10.18-10.33 10.18z',
					'm135.98 188.87c9.32-2.511 16.671-9.713 19.272-18.871h-19.272v18.87z',
					'm102.21 170c2.582 9.093 9.845 16.262 19.07 18.82v-18.82h-19.07z',
					'm121.28 136.58c-9.262 2.569-16.546 9.784-19.1 18.929h19.1v-18.93z'
				]
			},
			{
				id: 'fun',
				ref: "#fun",
				value: 'Fun Facts',
				href: "./fun.html",
				viewBox: '0 0 512 512',
				paths: [
					'M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333z',
					'M341.333,213.333c23.573,0,42.667-19.093,42.667-42.667C384,147.093,364.907,128,341.333,128c-23.573,0-42.667,19.093-42.667,42.667C298.667,194.24,317.76,213.333,341.333,213.333z',
					'M170.667,213.333c23.573,0,42.667-19.093,42.667-42.667c0-23.573-19.093-42.667-42.667-42.667C147.093,128,128,147.093,128,170.667C128,194.24,147.093,213.333,170.667,213.333z',
					'M384,256c-11.782,0-21.333,9.551-21.333,21.333C362.667,333.434,312.101,384,256,384s-106.667-50.566-106.667-106.667c0-11.782-9.551-21.333-21.333-21.333c-11.782,0-21.333,9.551-21.333,21.333c0,79.665,69.669,149.333,149.333,149.333s149.333-69.669,149.333-149.333C405.333,265.551,395.782,256,384,256z'
				]
			},
			{
				id: 'paper-airplane',
				ref: "#paper-airplane",
				value: 'Contact',
				href: "./contact.html",
				viewBox: '-313 288.4 36.1 37.3',
				paths: [
					"M-312.1 309l8.8 4.6 1.8 10.7c.1.7.7 1.2 1.3 1.3h.3c.6 0 1.1-.3 1.4-.7l4.6-7.5 9.7 4.8c.2.1.5.2.7.2s.5-.1.7-.2c.5-.2.8-.7.9-1.2l4.8-30c.2-.9-.3-1.9-1.2-2.3-.7-.4-1.6-.4-2.2 0l-31.9 17.4c-.5.3-.8.8-.8 1.5.2.6.5 1.2 1.1 1.4zm27.4 9.3l-7.4-3.6 10.8-17.4-3.4 21zm-11.2-3.9l-3.1 5-1.1-6.3 12.9-12.8-8.7 14.1zm7.8-17.7l-14.1 13.8-5.8-3 19.9-10.8z"	
				]
			}
		],
		// home page data attributes
		home: {
			nextSection: {
				name: 'Portfolio',
				href: './portfolio.html'
			}
		},
		// portfolip page data attributes
		intro: {
			imgSrc: './imgs/intro.jpg',
			title: 'My Story ...',
			texts: [
				"HEY!",
				"IT'S",
				"YUQING",
				"HAN."
			],
			slogan: "IF YOU DON'T KNOW ME, PLEASE COME EXPLORE MY LIFE JOURNEY.",
			student: [
				'I am a ',
				'BU graduate student',
				' studying Computer Information System.',
				'I feel very grateful that I can get the opportunity of studying with a bunch of intelligent people in such a beautiful city.',
				'After the graduation, I would like to pursue the career in ',
				'Software Development Engineer',
				'because I love coding and building interesting features and products!'
			],
			studentHref: 'https://en.wikipedia.org/wiki/Software_development',
			cats: {
				names: ['Hialeah', 'Dorami'],
				texts: [
					'are my best friends. Having their company is the blessing in my life!',
					'What they like to do is being cute, enjoying their favorite food and treats and playing hide and seek with each other.',
					'Taking good care of them can be tricky and tough as they can be very picky sometimes.',
					'You know what people keep saying - you never know what cats think!'
				]
			},
			snowboard: [
				'When each winter comes, my friends know where to find me ...',
				'Yeah, in the snow mountain!',
				'I love taking challenges in terms of stepping on difficult slopes and learning more advanced tricks and skills.',
				'I love getting close to nature. Snowboarding under the sunset and watching the mountain covered in snow with peaks glistening in the sun is super amazing!',
				'I love how I leave all of my worries behind and just enjoy the high speed and the sound of the wind when snowboarding down the mountain.',
				'If you have not tried snowboarding or skiing, it\'s definitely worth the try!'
			],
			nextSection: {
				name: 'My Resumé',
				href: './resume.html'
			}
		},
		endSection: {
			title: 'NEXT UP'
		},
		// resume page data attributes
		resume: {
			header: 'MY RESUMÉ',
			name: 'YUQING HAN',
			svg: [
				{
					id: 'phone',
					ref: "#phone",
					value: '(123)456-7890',
					viewBox: '0 0 473.806 473.806',
					paths: [
						"M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1C420.456,377.706,420.456,388.206,410.256,398.806z",
						"M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11S248.656,111.506,256.056,112.706z",
						"M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"
					]
				},
				{
					id: 'email',
					ref: "#email",
					value: 'hyuqing@bu.edu',
					viewBox: '0 0 512 512',
					paths: [
						"M67,148.7c11,5.8,163.8,89.1,169.5,92.1c5.7,3,11.5,4.4,20.5,4.4c9,0,14.8-1.4,20.5-4.4c5.7-3,158.5-86.3,169.5-92.1   c4.1-2.1,11-5.9,12.5-10.2c2.6-7.6-0.2-10.5-11.3-10.5H257H65.8c-11.1,0-13.9,3-11.3,10.5C56,142.9,62.9,146.6,67,148.7z",
						"M455.7,153.2c-8.2,4.2-81.8,56.6-130.5,88.1l82.2,92.5c2,2,2.9,4.4,1.8,5.6c-1.2,1.1-3.8,0.5-5.9-1.4l-98.6-83.2   c-14.9,9.6-25.4,16.2-27.2,17.2c-7.7,3.9-13.1,4.4-20.5,4.4c-7.4,0-12.8-0.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2l-98.6,83.2   c-2,2-4.7,2.6-5.9,1.4c-1.2-1.1-0.3-3.6,1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1c-8.8-4.5-9.3,0.8-9.3,4.9   c0,4.1,0,205,0,205c0,9.3,13.7,20.9,23.5,20.9H257h185.5c9.8,0,21.5-11.7,21.5-20.9c0,0,0-201,0-205   C464,153.9,464.6,148.7,455.7,153.2z"
					]
				},
				{
					id: 'address',
					ref: "#address",
					value: 'Boston, MA',
					viewBox: '0 0 122.88 118.2',
					paths: [
						"M79.05,83.9A69.76,69.76,0,0,1,63.73,96.58a2.15,2.15,0,0,1-2.46.08A86.38,86.38,0,0,1,40,77.64C32.18,67.9,27.29,57.1,25.62,46.7c-1.7-10.55-.11-20.7,5.14-28.95A35.78,35.78,0,0,1,38.69,9C46.1,3.06,54.55-.06,63,0A34.23,34.23,0,0,1,86,9.41a34.35,34.35,0,0,1,6.15,7.49c5.64,9.3,6.86,21.16,4.38,33.18a73,73,0,0,1-17.52,33.8v0ZM25.32,75.19a3.59,3.59,0,1,1,0,7.17H18.58L9.71,111H112.92l-9.63-28.67H97.72a3.59,3.59,0,1,1,0-7.17h10.7l14.46,43H0l13.32-43ZM61.38,16.94,40.09,37.14l5,2.64L61.24,23.56,77.63,39.78l5-2.64L61.38,16.94ZM46.89,42.66h0L61.4,28.15,75.87,42.66h0V56.9H65.3v-10H57.37v10H46.89V42.66Z"
					]
				}
			],
			education: {
				title: 'Education',
				schools: [
					{
						name: 'Boston University',
						time: '05.2024',
						major: 'M.S. in Computer Information System, Metropolitan College'
					},
					{
						name: 'California Polytechnic State University, Pomona',
						time: '05.2021',
						major: 'B.S. in Computer Science, College of Science'
					}
				]
			},
			skills: {
				title: 'Skills',
				areas: [
					{
						name: 'Progamming Languages',
						items: [
							"Java, ",
							"JavaScript, ",
							"HTML, ",
							"CSS, ",
							"C, ",
							"Python, ",
							"LaTeX, ",
							"Assembly Language"
						],
					},
					{
						name: 'Frameworks/Tools',
						items: [
							"Kotlin, ",
							"Dajango, ",
							"Node.js, ",
							"Git, ",
							"React"
						],
					},
					{
						name: 'Datbase',
						items: [
							"MySQL, ",
							"Firebase"
						]
					}
				]
			},
			work: {
				title: 'Work Experience',
				experiences: [
					{
						name: 'Eldon Group, Remote',
						position: 'Data Analyst Intern',
						time: '02.2022 – 03.2022',
						responsibilities: [
							'Completed big data projects and generated useful conclusions and actionable recommendations for the financial analyst teams',
							'Gathered all required data fields from external sources by developing data pipelines in Python. Preprocessed the raw data into a suitable format and split them into training and testing sets',
							'Performed time-series forecasting on the stock prices using the ARIMA model and conducted model validation to prove that the model successfully fitted with data and reached MSE close to zero'
						]
					},
					{
						name: 'Trustlook Inc, San Jose',
						position: 'Software Engineer Intern',
						time: '07.2020 - 09.2020',
						responsibilities: [
							'Built a digital wallet app in Android-based framework, using the main language Java and Kotlin',
							'The data models are mapped by the use cases internally from the actual API models to simpler models that will be exposed to the client apps; Built backend service based on top of Fineract',
							'Implemented the UI layers in the app modules while the data and domain layers are implemented in the core module'
						]
					},
					{
						name: 'HDFH(Hande Technology), Shenzhen',
						position: 'Software Engineer Intern',
						time: '12.2018 - 02.2019',
						responsibilities: [
							'Built the tax transcript website for businesses that supports search with multiple filters like corporation name, identification number, and time period',
							'Designed the MySQL database table with schema and attributes, backfilled the tax data and successfully migrated the data from RDS to MySQL',
							'Utilized JavaScript to build the web page and implemented the search logic by taking user input, looking up database and then returning the search results',
							'Built the dashboard to visualize the service health including website volume, search functionality availability, search time and fault rates'
						]
					}
				]
			},
			research: {
				title: 'Research Projects',
				experiences: [
					{
						name: 'Game Search Web',
						languages: 'Python, Django, CSS',
						responsibilities: [
							'Utilized Python and Django to build a web service for listing all legitimates sources and platforms that sell the computer game searched by the user',
							'Conducted web crawling on assorted game platforms to collect the information of popular computer games',
							'Built the MySQL database to store the data fetched from web crawling',
							'Implemented the logic to lookup MySQL database, display the search result and support result sorting by price, relevance, or platform popularity'
						]
					},
					{
						name: 'Confidante App',
						languages: 'Java, Kotlin',
						responsibilities: [
							'Built a social networking application utilizing Java and Kotlin, which could support a variety of social activities like adding friends, uploading profiles, direct messaging, posting, and replying',
							'Developed the home page, profile page, contacts page, chat page, and discover page with posts from friends using Android-base d framework',
							'Designed the schema and attributes of Firebase table to store the user data',
							'Implemented algorithm helping users find people sharing the same interests by analyzing users’ profiles and posts'
						]
					},
					{
						name: 'Geo Quiz',
						languages: 'Java, Kotlin',
						responsibilities: [
							'Implemented an Android app that uses textviews, buttons, toasts, and menus to present a question about geography to the user. The user answers the question by pressing a “True” or “False” button and a toast appears',
							'Built app on Java, XML and Android API',
							'Tested over 30 happy cases and negative cases for different quiz scenarios',
							'Created home screen and profile screen UI by XML and Kotlin'
						]
					}
				]
			},
			nextSection: {
				name: 'Interest',
				href: './interest.html'
			}
		},
		// interest page data attributes
		interest: {
			header: 'MY INTERETS!',
			svg: [
				{
					id: "leftQuote",
					ref: "#leftQuote",
					viewBox: "0 0 123.961 123.961",
					paths: [
						"M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z",
						"M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"
					]
				},
				{
					id: "rightQuote",
					ref: "#rightQuote",
					viewBox: "0 0 32 32",
					paths: [
						"M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z",
						"M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"
					]
				}
			],
			lol: {
				title: '01. LEAGUE OF LEGENDS',
				href: 'https://www.leagueoflegends.com/en-us/',
				imgSrc: './imgs/lol.png',
				tableAttributes: [
					'Icon',
					'Name',
					'Title',
					'Tags'
				],
				json: {}, // placeholder that will be populated
				btnName: 'Runbook of All LOL Champions',
				universe: {
					intro1: 'Well known as one of the most popular ',
					moba: 'MOBA games',
					mobaHref: 'https://leagueoflegends.fandom.com/wiki/User_blog:Xeroshifter/Noob_to_Pro:_What_is_A_MOBA',
					intro2: 'League of Legends has built an incredible universe with over 13 regions and more than 140 champions. Each region can be observed with the intriguing history that will never cease. Each champion comes with a well told story, which vividly depicts his or her personalities and life journeys.'
				},
				regionsName: 'REGIONS',
				regionsHref: 'https://universe.leagueoflegends.com/en_US/regions/',
				regionsCredits: 'universe.leagueoflegends.com',
				champsName: 'CHAMPIONS',
				champsHref: 'https://universe.leagueoflegends.com/en_US/champions/',
				champsCredits: 'Riot public "Data Dragon" database',
				champsCreditsHref: 'https://developer.riotgames.com/docs/lol#data-dragon_champions',
				regions: [
					{
						name: 'BANDLE CITY',
						imgSrc: './imgs/bandle_city.gif'
					},
					{
						name: 'BILGEWATER',
						imgSrc: './imgs/bilgewater.gif'
					},
					{
						name: 'DEMACIA',
						imgSrc: './imgs/demacia.gif'
					},
					{
						name: 'IONIA',
						imgSrc: './imgs/ionia.gif'
					},
					{
						name: 'IXTAL',
						imgSrc: './imgs/ixtal.gif'
					},
					{
						name: 'NOXUS',
						imgSrc: './imgs/noxus.gif'
					},
					{
						name: 'PILTOVER',
						imgSrc: './imgs/piltover.gif'
					},
					{
						name: 'SHADOW ISLES',
						imgSrc: './imgs/shadow_isles.gif'
					},
					{
						name: 'SHURIMA',
						imgSrc: './imgs/shurima.gif'
					},
					{
						name: 'TARGON',
						imgSrc: './imgs/targon.gif'
					},
					{
						name: 'THE FRELJORD',
						imgSrc: './imgs/freljord.gif'
					},
					{
						name: 'THE VOID',
						imgSrc: './imgs/void.gif'
					},
					{
						name: 'ZAUN',
						imgSrc: './imgs/zaun.gif'
					},
				],
				arcane: {
					name: 'ARCANE',
					href: 'https://arcane.com/en-us/',
					trailer: 'Netflix TV show trailer',
					fightScenes: 'Fight scenes in Arcane',
					trailerIframeSrc: 'https://www.youtube.com/embed/fXmAurh012s',
					fightScenesIframeSrc: 'https://www.youtube.com/embed/vnYoxXYZN5g',
					intro: [
						'Different from many video games movies and TV shows suffering from the curse of failing to even reproduce the games, Arcane is an extraodinary production that is definitely worth binge watching.',
						'Not only does it indredibly flesh out the iconic champions with vivid facial expression and movements, but also it illustrates an appealing story regarding the violent clash between two sisters and two regions.',
					],
					intro2: [
						'The fight scenes are so epic in terms of the astounding 3D animation visual effect, excellent fighting movement design and the reality-tearing magic reproduced from the champions skills in the games',
						'Exciting fight scenesa aside, you could easily feel the same emotional bonding as well as the boiling tension just as you are being inside of this incredible yet complicated new world.'
					]
				}
			},
			nextSection: {
				name: 'Fun Facts',
				href: './fun.html'
			}
		},
		// fun facts page data attributes
		fun: {
			titles: [ 'A LITTLE BIT', 'FUN FACTS ...' ],
			maps: {
				title: 'MY VISITED STATES',
				blueInfo: ' represents the states that I\'ve been to.',
				yellowInfo: ' represents the states that I\'m yet to visit.',
				invite: 'Can you explore this map and see how many states that you have been to?',
				json: {} // placeholder
			},
			nextSection: {
				name: 'Contact Me',
				href: './contact.html'
			}
		},
		// contact page data attributes
		contact: {
			bannerHeader: 'CONTACT ME',
			items: [
				{
					label: 'Name*',
					name: 'name',
					placeholder: 'Yuqing Han',
					required: 'required'
				},
				{
					label: 'Email*',
					name: 'email',
					placeholder: 'hyuqing@bu.edu',
					required: 'required'
				},
				{
					label: 'Phone',
					name: 'phone',
					placeholder: '(123) 456-7890',
					required: ''
				},
				{
					label: 'Address',
					name: 'address',
					placeholder: 'Cloud9 St, Boston, MA',
					required: ''
				},
				{
					label: 'Message',
					name: 'message',
					placeholder: 'Please leave your thoughts here...',
					required: 'required'	
				}
			],
			otherContact: 'OTHERS',
			svg: [
				{
					href: 'https://github.com/hyuqing316',
					id: 'github',
					ref: '#github',
					viewBox: '0 0 24 24',
					paths: [
						'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
					]
				},
				{
					id: 'pinterest',
					ref: '#pinterest',
					href: 'https://www.pinterest.com/hyuqing0174/',
					viewBox: '-232.1 369.1 41.9 54.2',
					paths: [
						'M-209.8 369.1c-14.8 0-22.2 10.6-22.2 19.4 0 5.4 2 10.1 6.4 11.9.7.3 1.4 0 1.6-.8.1-.5.5-1.9.6-2.5.2-.8.1-1.1-.4-1.7-1.3-1.5-2.1-3.4-2.1-6.1 0-7.9 5.9-14.9 15.3-14.9 8.4 0 12.9 5.1 12.9 11.9 0 9-4 16.5-9.9 16.5-3.3 0-5.7-2.7-4.9-6 .9-3.9 2.7-8.2 2.7-11 0-2.5-1.4-4.7-4.2-4.7-3.3 0-6 3.4-6 8.1 0 2.9 1 4.9 1 4.9l-4 17c-1.2 5-.2 11.2-.1 11.8 0 .4.5.5.7.2.3-.4 4.3-5.3 5.6-10.2.4-1.4 2.2-8.6 2.2-8.6 1.1 2.1 4.2 3.9 7.6 3.9 10 0 16.8-9.1 16.8-21.3.1-9.2-7.8-17.8-19.6-17.8z'
					]
				},
				{	
					id: 'gmail',
					ref: '#gmail',
					href: 'mailto:henry824686040@gmail.com',
					viewBox: '-211.1 354.7 82.6 84.9',
					paths: [
						'M-167.5 403.2l-4-3.1c-1.2-1-2.9-2.3-2.9-4.8 0-2.4 1.7-4 3.1-5.4 4.6-3.7 9.3-7.5 9.3-15.7 0-8.4-5.3-12.9-7.8-15h6.8l7.2-4.5h-21.8c-6 0-14.6 1.4-20.9 6.6-4.8 4.1-7.1 9.8-7.1 14.8 0 8.6 6.6 17.4 18.3 17.4 1.1 0 2.3-.1 3.5-.2-.5 1.3-1.1 2.4-1.1 4.3 0 3.4 1.8 5.5 3.3 7.5-5 .3-14.3.9-21.1 5.1-6.5 3.9-8.5 9.5-8.5 13.5 0 8.2 7.7 15.8 23.8 15.8 19 0 29.1-10.5 29.1-20.9.1-7.5-4.4-11.3-9.2-15.4zm-14.5-12.7c-9.5 0-13.8-12.3-13.8-19.7 0-2.9.5-5.9 2.4-8.2 1.8-2.2 4.9-3.7 7.7-3.7 9.2 0 13.9 12.4 13.9 20.4 0 2-.2 5.5-2.8 8.1-1.7 1.7-4.6 3.1-7.4 3.1zm.1 44.5c-11.8 0-19.5-5.7-19.5-13.5 0-7.9 7.1-10.5 9.5-11.4 4.6-1.6 10.6-1.8 11.6-1.8 1.1 0 1.7 0 2.5.1 8.4 6 12.1 9 12.1 14.6.1 6.9-5.6 12-16.2 12zm42.3-44.7v-11.1h-5.5v11.1h-11v5.5h11V407h5.5v-11.2h11.1v-5.5'
					]
				}
			],
			formHeader: 'TELL ME WHAT YOU THINK',
			formBtn: 'SUBMIT',
			nextSection: {
				name: 'Go Back to Home',
				href: './index.html'
			}
		}
	},
	created: async function () {
		this.showTime();
		await this.fetchChampionsJson();
		await this.fetchMapsJson();
		this.expandTable();
		this.displayMapHoverBox();
	},
	methods: {
		/**
		* Display the digital clock with time counting per second
		*/
		showTime: function() {
			// map for converting month from digits to letters
			var monthMap = new Map();
			monthMap.set(1, 'Jan');
			monthMap.set(2, 'Feb');
			monthMap.set(3, 'Mar');
			monthMap.set(4, 'Apr');
			monthMap.set(5, 'May');
			monthMap.set(6, 'Jun');
			monthMap.set(7, 'Jul');
			monthMap.set(8, 'Aug');
			monthMap.set(9, 'Sep');
			monthMap.set(10, 'Oct');
			monthMap.set(11, 'Nov');
			monthMap.set(12, 'Dec');

			// get current time
			var date = new Date();
			var month = date.getMonth() + 1; // 1 - 12
			var day = date.getDate(); // 1 - 31
			var h = date.getHours(); // 0 - 23

			var m = date.getMinutes(); // 0 - 59
			var s = date.getSeconds(); // 0 - 59
			var session = "AM";
			
			// use AM / PM 
			if (h == 0) {
			    h = 12;
			} else if (h >= 12) {
				h = h > 12 ? h - 12 : h;
			    session = "PM";
			}
			
			// format the numbers
			h = (h < 10) ? "0" + h : h;
			m = (m < 10) ? "0" + m : m;
			s = (s < 10) ? "0" + s : s;
			
			// display the time dynamically
			var time = `${monthMap.get(month)} ${day}\r\n${h}:${m}:${s}\r\n${session}`;
			document.getElementById("digitalClock").innerText = time;
			document.getElementById("digitalClock").textContent = time;
			
			// make clock count time
			setTimeout(this.showTime, 1000);
		},
		/**
		* Fetch json file located at the file path provided by the user
		*/
		fetchJson: async function(filePath) {
			const payload = {
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},
				method: "GET"
			};
			
			// try making fetch call to get the json content
			console.log(`[INFO] Fetching the json file at '${filePath}'...`);
			let errorMessage = undefined;
			let statusCode = 500; // default to internal server error
			const response = await fetch(filePath, payload)
			 .catch((error) => { // error is caught while fetching json content (e.g. network error, failed to fetch)
			   errorMessage = String(error);
			 });

			// process errors 
			// 1) network errors - not able to make fetch call
			// 2) bad request errors - fetch call succeeds but not receive content 
			if (!response || (!response.ok && !response.status != 200)) {
			 // success fetch call but error exists (e.g. bad request)
			 if (!errorMessage) {
			   errorMessage = response?.statusText ?? "Unknown Error";
			   statusCode = response?.status; 
			 }
			 // display error in the popped up window
			 console.error(`[ERROR] [StatusCode = ${statusCode}] Unexpected error is caught while fetching the json content. `, errorMessage);
			 return;
			}
			
			const responseBody = await response.json();
			console.log("[INFO] Successfully fetched the json content!", responseBody);
			return responseBody;
		},
		/**
		* Fetch json file with data related to the lol champions
		*/
		fetchChampionsJson: async function() {
			const filePath = './utils/champions.json';
			const responseBody = await this.fetchJson(filePath);
			if (!responseBody) {
				return;
			} 

			const data = responseBody.data;
			const championsWithBrokenLinks = [
				"Akshan", "Bel'Veth", "Gwen", "K'Sante", "Nilah", "Rell", "Renata Glasc", "Vex", "Viego", "Zeri"
			];

			// only filter the data to be displayed in the table
			const parsedData = Object.values(data).map(champion => {
				return {
					name: champion.name,
					tags: champion.tags.join(", "),
					title: champion.title,
					// some links are broken in the Riot's data dragon datasets
					// use locally stored images instead
					image: championsWithBrokenLinks.includes(champion.name) ? 
						`./imgs/${champion.name}.png` : 
						`http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/${champion.image.full}`
				}
			});

			// pass the parsed data to vue 
			this.interest.lol.json = parsedData;
			console.log("Successfully parsed the data for champions: ", parsedData);
			return parsedData;
		},
		/**
		* Fetch json file related to the data of us states
		*/
		fetchMapsJson: async function() {
			var filePath = './utils/maps.json';
			const responseBody = await this.fetchJson(filePath);
			if (!responseBody) {
				return;
			} 
			
			const data = responseBody.states;
			const visitedStates = [
				"CA", "NV", "MA", "WA", "HI", "ID", "WY", "UT", "NC", "MT", "NY"
			];

			// only filter the data to be displayed in the table
			const parsedData = data.map(state => {
				return {
					...state,
					colors: visitedStates.includes(state.id) ? [137, 207, 240] : [253, 218, 13]
				};
			});

			// pass the parsed data to vue 
			this.fun.maps.json = parsedData;
			console.log("Successfully parsed the data for the US maps: ", parsedData);
			return parsedData;
		},
		/**
		* Make the container expandable / collapsible whenever user interacts with the button
		*/
		expandTable: function() {
			// find the DOM elements with the class for expansion and collapse
			var elements = document.getElementsByClassName("collapsibleBtn");
			// iterate over the elements
			for (let i = 0; i < elements.length; i ++) {
				// monitor button events and expand or collapse the element's sliblings
				elements[i].addEventListener("click", function() {
					this.classList.toggle("active");
					var content = this.nextElementSibling;
					// reduce the max height to collapse the element
					if (content.style.maxHeight){
						content.style.maxHeight = null;
					// increse the max height to expand the element
					} else {
						content.style.maxHeight = content.scrollHeight + "px";
					} 
				});
			}
		},
		/**
		* Display the responsive info box to show the name of the state that user mouses hover onto
		*/
		displayMapHoverBox: function() {
			var hoverBox = document.getElementById('map-hover-box');

			// monitor the user mouse events
			document.addEventListener('mouseover', function (e) {
				// whenever user hovers onto the corresponding svg path
				// display the corresponding state name
				if (e.target.tagName == 'path') {
					var content = e.target.dataset.name;
					hoverBox.innerHTML = content;
					hoverBox.style.opacity = "100%";
				// otherwise do not display anything
				} else {
					hoverBox.style.opacity = "0%";
				}
			});

			window.onmousemove = function (e) {
				var x = e.clientX;
				var y = e.clientY;
				hoverBox.style.top = (y + 20) + 'px';
				hoverBox.style.left = (x) + 'px';
			};
		}
	}
};
