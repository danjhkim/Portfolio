import React from 'react';
import gsap, {
	TweenMax,
	ScrollTrigger,
	ScrollToPlugin,
	TextPlugin,
} from 'gsap/all';

import lottie from 'lottie-web';

import statsjson from '../images/stats.json';
import blocking from '../images/blocking.json';

import childSmile from '../images/child.json';
import computerpic from '../images/computer.json';
import studyPic from '../images/studying.json';

import '../styles/About2.css';

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			StatsShow: null,
			Blockingshow: null,
			childAnim: null,
			computerState: null,
			studyState: null,
		};
	}

	videoRef = React.createRef();
	blockingRef = React.createRef();
	childRef = React.createRef();
	computerRef = React.createRef();
	studyRef = React.createRef();

	componentDidMount() {
		gsap.registerPlugin(ScrollToPlugin);
		let workLinks = document.querySelectorAll('.lining');

		const enterAnimation = (link, e, index) => {
			link.tl.tweenFromTo(0, 'midway');
		};

		// Mouseleave function
		const leaveAnimation = (link, e) => {
			link.tl.play();
		};

		workLinks.forEach((link, index, value) => {
			let underline = link.querySelector('.underline');
			link.tl = gsap.timeline({ paused: true });

			link.tl.fromTo(
				underline,
				{
					width: '0%',
					left: '0%',
				},
				{
					width: '100%',
					duration: 1,
				},
			);

			link.tl.add('midway');

			link.tl.fromTo(
				underline,
				{
					width: '100%',
					left: '0%',
				},
				{
					width: '0%',
					left: '100%',
					duration: 1,
					immediateRender: false,
				},
			);
			// Mouseenter
			link.addEventListener('mouseenter', e => {
				enterAnimation(link, e, index);
			});

			// Mouseleave
			link.addEventListener('mouseleave', e => {
				leaveAnimation(link, e);
			});
		});

		const child = lottie.loadAnimation({
			container: this.childRef.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: childSmile,
			rendererSettings: {
				preserveAspectRatio: 'none',
			},
		});

		const computer = lottie.loadAnimation({
			container: this.computerRef.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: computerpic,
			rendererSettings: {
				preserveAspectRatio: 'none',
			},
		});

		const study = lottie.loadAnimation({
			container: this.studyRef.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: studyPic,
			rendererSettings: {
				preserveAspectRatio: 'none',
			},
		});

		const stats = lottie.loadAnimation({
			container: this.videoRef.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: statsjson,
			rendererSettings: {
				preserveAspectRatio: 'none ',
			},
		});

		const blockinglottie = lottie.loadAnimation({
			container: this.blockingRef.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: blocking,
			rendererSettings: {
				preserveAspectRatio: 'none',
			},
		});

		this.setState({
			StatsShow: stats,
			Blockingshow: blockinglottie,
			childAnim: child,
			computerState: computer,
			studyState: study,
		});

		child.onComplete = function () {
			child.playSegments([15, 46], true);
		};

		//positional tweens before animation

		TweenMax.to('.textBox', 0, { y: 200, opacity: 0 });
		TweenMax.to('.title3 h3', 0, { y: 200, opacity: 0 });

		TweenMax.to('.showKid', 0, { y: 200, opacity: 0 });
		TweenMax.to('.hiatusP', 0, { y: 200, opacity: 0 });

		TweenMax.to('.javascripter', 0, { y: -800, opacity: 0 });
		TweenMax.to('.reacter', 0, { y: -800, opacity: 0 });
		TweenMax.to('.afterEffecter', 0, { y: -800, opacity: 0 });
		TweenMax.to('.Figmater', 0, { y: -800, opacity: 0 });
		TweenMax.to('.thirdPara div ul', 0, { opacity: 0 });

		TweenMax.to('.secondPara2', {
			webkitFilter: 'blur(' + 20 + 'px)',
			opacity: 0,
		});

		TweenMax.to('.thirdPara2ndp div ul', {
			opacity: 0,
		});

		TweenMax.to('.newline', {
			opacity: 0,
		});

		TweenMax.to('.iamCurrently', {
			webkitFilter: 'blur(' + 20 + 'px)',
			opacity: 0,
		});

		TweenMax.to('.titleStat', {
			webkitFilter: 'blur(' + 20 + 'px)',
		});

		TweenMax.to('.computer', {
			opacity: 0,
			x: 200,
		});

		TweenMax.to('.title5 h3', 0, { opacity: 0, y: -200 });
		TweenMax.to('.study', 0, { opacity: 0, y: 200 });

		gsap.registerPlugin(ScrollTrigger);
		gsap.registerPlugin(TextPlugin);

		ScrollTrigger.create({
			trigger: '.hobbies h3',
			start: 'top 75%',
			onEnter: () => this.hobbies(),
		});

		ScrollTrigger.create({
			trigger: '.title',
			start: 'top 80%',
			toggleActions: 'play none none none',
			onEnter: () => this.moveAround(),
		});

		ScrollTrigger.create({
			trigger: '.title',
			start: 'top 30%',
			onEnter: () => this.moveAround3(),
		});

		ScrollTrigger.create({
			trigger: '.title',
			start: 'top 40%',
			onEnter: () => this.moveAround2(),
		});

		gsap.to('.title3 h3', {
			scrollTrigger: {
				trigger: '.title3 h3',
				toggleActions: 'play none none none',
				start: 'top 90%',
			},
			y: 0,
			opacity: 1,
		});

		// TweenMax.staggerTo(
		// 	'.title4 h3',
		// 	1,
		// 	{
		// 		scrollTrigger: {
		// 			trigger: '.title4 h3',
		// 			toggleActions: 'play none none none',
		// 			start: 'top 60%',
		// 		},
		// 		opacity: 1,
		// 		duration: 0.5,
		// 	},
		// 	0.1,
		// );

		gsap.to('.title4 .boo', {
			scrollTrigger: {
				trigger: '.boo',
				toggleActions: 'play none none none',
				start: 'top 60%',
			},
			text: "I'm usually focused on:",
			duration: 0.2,
			onComplete: () => {
				gsap.to('.boop', {
					opacity: 1,
					duration: 0.2,
				});
			},
		});

		gsap.to('.title4 .boo2', {
			scrollTrigger: {
				trigger: '.boo2',
				toggleActions: 'play none none none',
				start: 'top 70%',
			},
			text: 'I value:',
			duration: 0.2,
			onComplete: () => {
				gsap.to('.boop2', {
					opacity: 1,
					duration: 0.2,
				});
			},
		});

		gsap.to('.title4 .boo3', {
			scrollTrigger: {
				trigger: '.boo3',
				toggleActions: 'play none none none',
				start: 'top 70%',
			},
			text: 'Have Used:',
			duration: 0.2,
			onComplete: () => {
				gsap.to('.boop3', {
					opacity: 1,
					duration: 0.2,
				});
			},
		});

		gsap.to('.title4 .boo4', {
			scrollTrigger: {
				trigger: '.boo4',
				toggleActions: 'play none none none',
				start: 'top 75%',
			},
			text: 'Tools:',
			duration: 0.2,
			onComplete: () => {
				gsap.to('.boop4', {
					opacity: 1,
					duration: 0.2,
				});
			},
		});

		gsap.to('.title4 .boo5', {
			scrollTrigger: {
				trigger: '.boo5',
				toggleActions: 'play none none none',
				start: 'top 75%',
			},
			text: 'Hardware:',
			duration: 0.2,
			onComplete: () => {
				gsap.to('.boop5', {
					opacity: 1,
					duration: 0.2,
				});
			},
		});

		gsap.to('.title4 .boo6', {
			scrollTrigger: {
				trigger: '.boo6',
				toggleActions: 'play none none none',
				start: 'top 75%',
			},
			text: 'Hobbies:',
			duration: 0.2,
			onComplete: () => {
				gsap.to('.boop6', {
					opacity: 1,
					duration: 0.2,
				});
			},
		});

		gsap.to('.title4 .boo7', {
			scrollTrigger: {
				trigger: '.boo7',
				toggleActions: 'play none none none',
				start: 'top 80%',
			},
			text: "What I'm Seeking",
			duration: 0.2,
			onComplete: () => {
				gsap.to('.boop7', {
					opacity: 1,
					duration: 0.2,
				});
			},
		});

		// ScrollTrigger.create({
		// 	trigger: '.thirdPara p',
		// 	start: 'top 50%',
		// 	onEnter: () => this.opacityShowText(),
		// });

		ScrollTrigger.create({
			trigger: '.used h3',
			start: 'top 70%',
			onEnter: () => this.computerRun(),
		});

		ScrollTrigger.create({
			trigger: '.secondPara2',
			start: 'top 90%',
			onEnter: () => this.unBlurSkill(),
		});

		ScrollTrigger.create({
			trigger: '.title',
			start: 'top 60%',
			onEnter: () => child.play(),
		});

		ScrollTrigger.create({
			trigger: '.secondPara2',
			start: 'top 75%',
			onEnter: () => stats.play(),
		});

		gsap.to('.titleStat', {
			y: '230%',
			ease: 'none',
			duration: 0.2,
			scrollTrigger: {
				trigger: '.hiatusP',
				start: 'top 60%',
			},
			onComplete: () => this.unBlurHistoryandShowLowerPara(),
		});

		gsap.to('.iamCurrently', {
			scrollTrigger: {
				trigger: '.iamCurrently',
				toggleActions: 'play none none none',
				start: 'top 70%',
				onEnter: () =>
					TweenMax.to('.iamCurrently', {
						opacity: 1,
						webkitFilter: 'blur(' + 0 + 'px)',
						duration: 1,
					}),
			},
		});

		// const tlmenu = new TimelineMax();

		// tlmenu
		// 	.to('.rightSide', 1, { x: '180%', opacity: 1, delay: 1 })
		// 	.to('.rightSide', 0.2, { rotate: 5 })
		// 	.to('.rightSide', 0.2, { rotate: -5 })
		// 	.to('.rightSide', 0.2, { rotate: 5 })
		// 	.to('.rightSide', 0.2, { rotate: -5 })
		// 	.to('.rightSide', 0.2, { rotate: 0 })
		// 	.to('.rightSide', 0.2, { rotate: -5 })
		// 	.to('.rightSide', 0.2, { rotate: 0 })
		// 	.to('.rightSide', 0.2, { rotate: -5 })
		// 	.to('.rightSide', 0.2, { rotate: 0 })
		// 	.to('.rightSide', 0.2, { x: '240%', opacity: 0 });

		// ScrollTrigger.create({
		// 	animation: tlmenu,
		// 	trigger: '.title',
		// 	start: 'top 50%',
		// });
	}
	// animatelines = () => {
	// 	let numbers = Math.floor(Math.random() * 4000) + 1000;
	// 	let dur = Math.floor(Math.random() * 2);

	// 	lineMove = new TimelineMax({
	// 		paused: false,
	// 		repeat: 4,
	// 		repeatRefresh: true,
	// 		duration: 10,
	// 		delay: 2,
	// 	});

	// 	// 	// this ensure it doesnt automatically start.
	// 	lineMove
	// 		//autoalpha just displays and shows anything hidden
	// 		.to('.transgrow', {
	// 			transform: 'scaleX(0)',
	// 			transformOrigin: 'left',
	// 			duration: 0.5,
	// 		})
	// 		.to(
	// 			'.transgrow',
	// 			{
	// 				transform: 'scaleX(1)',
	// 				transformOrigin: 'left',
	// 				duration: 0.5,
	// 			},
	// 			'nameoflabel',
	// 		)
	// 		.to(
	// 			'.transgrow',
	// 			{
	// 				transform: 'scaleX(1)',
	// 				transformOrigin: 'right',
	// 				duration: 0.5,
	// 			},
	// 			'nameoflabel+=0.25',
	// 		)
	// 		.to('.transgrow', {
	// 			transform: 'scaleX(0)',
	// 			transformOrigin: 'right',
	// 			duration: 0.5,
	// 		});
	// };

	hobbies = () => {
		TweenMax.to('.study', { opacity: 1, y: 0, duration: 0.2, delay: 0.2 });
	};

	// opacityShowText = () => {
	// 	TweenMax.to('.thirdPara p', {
	// 		opacity: 1,
	// 		duration: 2,
	// 	});

	// 	TweenMax.to('.thirdPara2ndp', {
	// 		opacity: 1,
	// 		duration: 2,
	// 	});
	// };

	programs = () => {
		TweenMax.to('.javascripter', { y: 0, duration: 0.2, opacity: 1 });
		TweenMax.to('.reacter', {
			y: 0,
			duration: 0.2,
			opacity: 1,
			delay: 0.1,
		});
		TweenMax.to('.afterEffecter', {
			y: 0,
			duration: 0.2,
			opacity: 1,
			delay: 0.2,
		});
		TweenMax.to('.Figmater', {
			y: 0,
			duration: 0.2,
			opacity: 1,
			delay: 0.3,
		});
	};

	unBlurSkill = () => {
		TweenMax.to('.titleStat', {
			webkitFilter: 'blur(' + 0 + 'px)',
		});
	};

	computerRun = () => {
		TweenMax.to('.computer', {
			opacity: 1,
			duration: 0.2,
			x: 0,
		});
	};

	unBlurHistoryandShowLowerPara = () => {
		TweenMax.to('.secondPara2', 0.2, {
			webkitFilter: 'blur(' + 0 + 'px)',
			opacity: 1,
		});

		setTimeout(() => {
			this.programs();
		}, 300);
	};

	moveAround3 = () => {
		TweenMax.to('.hiatusP', {
			y: 0,
			opacity: 1,
			ease: 'Back.easeOut',
		});
	};

	goIntro = () => {
		TweenMax.to(window, {
			scrollTo: '#introduction',
		});
	};

	goSkill = () => {
		TweenMax.to(window, {
			scrollTo: '#skillset',
		});
	};

	moveAround2 = () => {
		TweenMax.to('.showKid', {
			y: 0,
			opacity: 1,
			ease: 'Back.easeOut',
		});
	};

	moveAround = () => {
		setTimeout(() => {
			this.state.Blockingshow.play();
		}, 1500);

		// TweenMax.to('.hr1', 1.5, { width: '70%', opacity: 1, delay: 0 });
		// TweenMax.to('.hr2', 1.5, { width: '100%', opacity: 1, delay: 0 });

		TweenMax.to('.textBox', 1.5, {
			y: 0,
			delay: 0.2,
			opacity: 1,
			ease: 'Power2.easeOut',
		});
	};

	render() {
		return (
			<div className='about'>
				<div className='hero__content'>
					<div className='bio'>
						<div className='blockingholder'>
							{/* <div
								className='blockingCreep'
								ref={this.blockingRef}></div> */}
							{/* <div className='rightSide'>
								<div className='rightSideFace'></div>
							</div> */}
							<div className='sec1'>
								<div className='wrapper'>
									<div className='title lining'>
										<div
											className='iconwrapper'
											onClick={this.goIntro}>
											<div alt='link' className='link' />
											<h3 id='introduction'>
												Introduction.
											</h3>
										</div>
										<span className='underline'></span>
									</div>

									<div className='textBox'>
										Hi, I'm Daniel, an aspiring Web
										Developer.
										<br />
										Always wanting to learn, and aquire new
										skills,
										<br />I enjoy spending my time on fixing
										little details and optimizing apps!
									</div>
								</div>
							</div>
						</div>
						<div className='wrapper'>
							<div className='lowersection'>
								<div className='bottom'>
									<div className='statement'>
										<div className='firstPara'>
											<div className='firstParaSection'>
												<div
													className='child '
													ref={this.childRef}></div>

												<p className='showKid'>
													As a kid, I’ve always been
													intrigued with technology.
													Growing up with an uncle who
													is in the industry, I was
													introduced to computers at a
													very early age. Always
													tinkering around and trying
													to build, fix, and customize
													my computer, I became
													interested in web
													development during my youth.
													Unfortunately, life had
													other plans and my web
													development took a backseat
													to ebb and flow of time.
												</p>
												<br />
												<p className='hiatusP'>
													After a long hiatus in my
													development as a programmer,
													I recently have sought to
													change the direction of my
													career, and reignited my
													passion for programming...
												</p>
											</div>
										</div>
										<div
											className='titleStat lining'
											id='skillset'
											onClick={this.goSkill}>
											<div className='iconwrapper'>
												<div
													alt='link'
													className='link linkSkillSet'
												/>
												<h3>Skillset.</h3>
											</div>
											<span className='underline'></span>
										</div>
										<div className='secondPara'>
											<div
												className='stats'
												ref={this.videoRef}></div>
											<p className='secondPara2'>
												My primary focus has been on
												frontend web development.
												Cultivating my growth with
												languages, software, and{' '}
												<span className='startTriggering'>
													libraries{' '}
												</span>
												such as{' '}
												<span
													className='javascripter'
													style={{
														color: 'yellow',
													}}>
													Javascript
												</span>
												,{' '}
												<span
													className='reacter'
													style={{
														color: 'lightskyblue',
													}}>
													{' '}
													React
												</span>
												,{' '}
												<span
													className='afterEffecter'
													style={{
														color: 'rgb(68, 68, 253)',
													}}>
													After Effects
												</span>
												, and{' '}
												<span
													className='Figmater'
													style={{
														color: 'red',
													}}>
													Figma
												</span>
												. <br />
												<br />
												<span className='iamCurrently'>
													I am currently in the
													process of continously
													augmenting my skillset, to
													further myself as a
													developer!
												</span>
											</p>
										</div>
										<div className='thirdPara'>
											<div className='title4 lining2'>
												<h3 className='boo'> </h3>
											</div>
											<div>
												<ul className='thirdPara2ndp boop'>
													<li>Efficiency</li>
													<li>New Technologies</li>
													<li>Modular Design</li>
													<li>
														Good Coding Practices
													</li>
												</ul>
											</div>
											<div className='title4 lining value'>
												<h3 className='boo2'> </h3>
											</div>
											<div>
												<ul className='thirdPara2ndp boop2'>
													<li>Reusability</li>
													<li>Consistency</li>
													<li>Automation</li>
													<li>User Experience</li>
												</ul>
											</div>
											<div className='title4 lining2 used'>
												<h3 className='boo3'> </h3>
											</div>
											<div>
												<div
													className='computer '
													ref={
														this.computerRef
													}></div>
												<ul className='thirdPara2ndp boop3'>
													<li>
														<a
															rel='noopener noreferrer'
															href='https://reactjs.org/'
															target='_blank'>
															React
														</a>
													</li>
													<li>
														<a
															rel='noopener noreferrer'
															href='https://lottiefiles.com/'
															target='_blank'>
															Lottie
														</a>
													</li>
													<li>
														<a
															rel='noopener noreferrer'
															href='https://redux.js.org/'
															target='_blank'>
															Redux
														</a>
													</li>
													<li>
														<a
															rel='noopener noreferrer'
															href='https://greensock.com/'
															target='_blank'>
															GreenSock
														</a>
													</li>
												</ul>
											</div>
											<div className='title4 lining2 tools'>
												<h3 className='boo4'> </h3>
											</div>
											<div>
												<ul className='thirdPara2ndp boop4'>
													<li>
														{' '}
														<a
															rel='noopener noreferrer'
															href='https://www.figma.com/'
															target='_blank'>
															Figma
														</a>
													</li>
													<li>
														{' '}
														<a
															rel='noopener noreferrer'
															href='https://www.adobe.com/ca/products/aftereffects.html'
															target='_blank'>
															After Effects
														</a>
													</li>
													<li>
														{' '}
														<a
															rel='noopener noreferrer'
															href='https://code.visualstudio.com/'
															target='_blank'>
															Visual Code Studio
														</a>
													</li>
												</ul>
											</div>
											<div className='title4 lining2 hardware'>
												<h3 className='boo5'> </h3>
											</div>
											<div>
												<div
													className='study '
													ref={this.studyRef}></div>
												<ul className='thirdPara2ndp boop5'>
													<li>
														Intel Core i7 10700 -
														4.6Ghz
													</li>
													<li>DDR4 PC-3200 32GB</li>
													<li>
														NVIDIA GeForce GTX 1080
														Ti
													</li>
													<li>
														Dual Monitors: BenQ
														XL2440TE {'&'} Samsung
														LS24R35
													</li>
												</ul>
											</div>
											<div className='title4 lining2 hobbies'>
												<h3 className='boo6'> </h3>
											</div>
											<div>
												<ul className='thirdPara2ndp boop6'>
													<li>Fantasy Novels</li>
													<li>Gardening</li>
													<li>
														Hanging Out With Dog
													</li>
												</ul>
											</div>
										</div>
										<div className='lastSection'>
											<div className='title4 lining conclu'>
												<h3 className='boo7'> </h3>
											</div>
											<div className='newline boop7'>
												<p>
													I still consider myself a
													new student to the world of
													programming. I realize that
													being a developer is an
													everlasting pursuit of
													knowledge and the
													utilization of knowledge. I
													believe the next step for me
													is, pursuing an entry level
													position within the
													industry.
												</p>
											</div>
											<br />
											<p className='newline boop7'>
												Seeking to secure a full-time
												position in your office to
												further develop my work
												experience. I am confident in my
												abilities and also am an adept
												student.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
