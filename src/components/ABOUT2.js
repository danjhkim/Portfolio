import React from 'react';
import gsap, {
	TweenMax,
	ScrollTrigger,
	TextPlugin,
	TimelineMax,
} from 'gsap/all';

import lottie from 'lottie-web';

import statsjson from '../images/stats.json';
import blocking from '../images/blocking.json';

import childSmile from '../images/child.json';
import computerpic from '../images/computer.json';
import studyPic from '../images/studying.json';

import '../styles/About.css';

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
		TweenMax.to('.title h3', 0.5, { x: -200, opacity: 0 });
		TweenMax.to('.textBox span:first-of-type ', 0, { x: 200, opacity: 0 });
		TweenMax.to('.textBox span:nth-of-type(2) ', 0, {
			x: -300,
			opacity: 0,
		});
		TweenMax.to('.textBox span:nth-of-type(3) ', 0, { x: 200, opacity: 0 });
		TweenMax.to('.textBox span:nth-of-type(4) ', 0, {
			x: -200,
			opacity: 0,
		});
		TweenMax.to('.textBoxLower p', 0, { x: 200, opacity: 0 });
		TweenMax.to('.title3 h3', 0, { y: 200, opacity: 0 });

		TweenMax.to('.showKid', 0, { y: 200, opacity: 0 });
		TweenMax.to('.hiatusP', 0, { y: 200, opacity: 0 });

		TweenMax.to('.javascripter', 0, { y: -800, opacity: 0 });
		TweenMax.to('.reacter', 0, { y: -800, opacity: 0 });
		TweenMax.to('.afterEffecter', 0, { y: -800, opacity: 0 });
		TweenMax.to('.Figmater', 0, { y: -800, opacity: 0 });
		TweenMax.to('.thirdPara p', 0, { opacity: 0 });

		TweenMax.to('.secondPara2', {
			webkitFilter: 'blur(' + 20 + 'px)',
			opacity: 0,
		});

		TweenMax.to('.thirdPara2ndp', {
			opacity: 0,
		});

		TweenMax.to('.iamCurrently', {
			webkitFilter: 'blur(' + 20 + 'px)',
			opacity: 0,
			duration: 1,
		});

		TweenMax.to('.titleStat', {
			webkitFilter: 'blur(' + 20 + 'px)',
		});

		TweenMax.to('.computer', {
			opacity: 0,
			x: 200,
		});

		TweenMax.to('.title5 h3', 0, { opacity: 0, x: -200 });
		TweenMax.to('.study', 0, { opacity: 0, x: 200 });
		TweenMax.to('.fourthPara p', 0, { opacity: 0, x: -200 });

		TweenMax.to('.rightSide', 0, { x: '240%', y: '20%', opacity: 0 });

		gsap.registerPlugin(ScrollTrigger);
		gsap.registerPlugin(TextPlugin);

		ScrollTrigger.create({
			trigger: '.title5 h3',
			start: 'top 60%',
			onEnter: () => this.hobbies(),
		});

		ScrollTrigger.create({
			trigger: '.startTriggering',
			start: 'top 75%',
			toggleActions: 'play none none none',
			onEnter: () => this.programs(),
		});

		ScrollTrigger.create({
			trigger: '.title',
			start: 'top 80%',
			toggleActions: 'play none none none',
			onEnter: () => this.moveAround(),
		});

		ScrollTrigger.create({
			trigger: '.title3 h3',
			start: 'top 40%',
			onEnter: () => this.moveAround3(),
		});

		ScrollTrigger.create({
			trigger: '.title3 h3',
			start: 'top 60%',
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

		gsap.to('.title4 h3', {
			scrollTrigger: {
				trigger: '.title4 h3',
				toggleActions: 'play none none none',
				start: 'top 60%',
			},
			text: 'Moving foward.',
			duration: 0.5,
		});

		ScrollTrigger.create({
			trigger: '.thirdPara p',
			start: 'top 50%',
			onEnter: () => this.opacityShowText(),
		});

		ScrollTrigger.create({
			trigger: '.secondPara',
			start: 'top 60%',
			onEnter: () => stats.play(),
		});

		ScrollTrigger.create({
			trigger: '.secondPara2',
			start: 'top 90%',
			onEnter: () => this.unBlurSkill(),
		});

		ScrollTrigger.create({
			trigger: '.title2 h3',
			start: 'top 40%',
			onEnter: () => child.play(),
		});

		gsap.to('.titleStat', {
			y: '500%',
			ease: 'none',
			scrollTrigger: {
				trigger: '.hiatusP',
				start: 'top 15%',
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

		const tlmenu = new TimelineMax();

		tlmenu
			.to('.rightSide', 1, { x: '180%', opacity: 1, delay: 1 })
			.to('.rightSide', 0.2, { rotate: 5 })
			.to('.rightSide', 0.2, { rotate: -5 })
			.to('.rightSide', 0.2, { rotate: 5 })
			.to('.rightSide', 0.2, { rotate: -5 })
			.to('.rightSide', 0.2, { rotate: 0 })
			.to('.rightSide', 0.2, { rotate: -5 })
			.to('.rightSide', 0.2, { rotate: 0 })
			.to('.rightSide', 0.2, { rotate: -5 })
			.to('.rightSide', 0.2, { rotate: 0 })
			.to('.rightSide', 0.2, { x: '240%', opacity: 0 });

		ScrollTrigger.create({
			animation: tlmenu,
			trigger: '.title',
			start: 'top 50%',
		});
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
		TweenMax.to('.title5 h3', { opacity: 1, x: 0, duration: 0.3 });
		TweenMax.to('.study', { opacity: 1, x: 0, duration: 0.3, delay: 0.2 });
		TweenMax.to('.fourthPara p', {
			opacity: 1,
			x: 0,
			duration: 0.3,
			delay: 0.2,
		});
	};

	opacityShowText = () => {
		TweenMax.to('.thirdPara p', {
			opacity: 1,
			duration: 2,
		});

		TweenMax.to('.thirdPara2ndp', {
			opacity: 1,
			duration: 2,
		});

		TweenMax.to('.computer', {
			opacity: 1,
			duration: 0.5,
			x: 0,
		});
	};

	programs = () => {
		TweenMax.to('.javascripter', { y: 0, duration: 0.3, opacity: 1 });
		TweenMax.to('.reacter', {
			y: 0,
			duration: 0.3,
			opacity: 1,
			delay: 0.3,
		});
		TweenMax.to('.afterEffecter', {
			y: 0,
			duration: 0.3,
			opacity: 1,
			delay: 0.6,
		});
		TweenMax.to('.Figmater', {
			y: 0,
			duration: 0.3,
			opacity: 1,
			delay: 0.9,
		});
	};

	unBlurSkill = () => {
		TweenMax.to('.titleStat', {
			webkitFilter: 'blur(' + 0 + 'px)',
		});
	};

	unBlurHistoryandShowLowerPara = () => {
		TweenMax.to('.secondPara2', 2, {
			webkitFilter: 'blur(' + 0 + 'px)',
			opacity: 1,
		});
	};

	moveAround3 = () => {
		TweenMax.to('.hiatusP', {
			y: 0,
			opacity: 1,
			ease: 'Back.easeOut',
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

		TweenMax.to('.title h3', 1.5, {
			x: 0,
			delay: 0.3,
			opacity: 1,
			ease: 'Power2.easeOut',
		});

		TweenMax.to('.textBox span:first-of-type', 1.5, {
			x: 0,
			delay: 0.3,
			opacity: 1,
			ease: 'Power2.easeOut',
		});

		TweenMax.to('.textBox span:nth-of-type(2)', 1.5, {
			x: 0,
			delay: 0.3,
			opacity: 1,
			ease: 'Power2.easeOut',
		});

		TweenMax.to('.textBox span:nth-of-type(3)', 1.5, {
			x: 0,
			delay: 0.3,
			opacity: 1,
			ease: 'Power2.easeOut',
		});

		TweenMax.to('.textBox span:nth-of-type(4)', 1.5, {
			x: 0,
			delay: 0.3,
			opacity: 1,
			ease: 'Power2.easeOut',
		});

		TweenMax.to('.textBoxLower p', 2, {
			x: 0,
			delay: 0.3,
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
							<div className='rightSide'>
								<div className='rightSideFace'></div>
							</div>
							<div className='sec1'>
								<div className='wrapper'>
									<div className='title'>
										<h3>BIO</h3>
									</div>
									<div className='middle'>
										<div className='leftSide'>
											<div className='textBox'>
												<p>
													<span>
														Hi, I'm Daniel, an
														aspiring Web Developer.
													</span>
													<br />
													<span>
														Always wanting to learn,
														and aquire new skills,
													</span>
													<br />
													<span>
														I enjoy spending my time
														on fixing little details
														and
													</span>
													<span>
														optimizing apps, that I
														have created!
													</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='wrapper'>
							<div className='lowersection'>
								<div className='bottom'>
									<div className='statement'>
										<div className='title3'>
											<h3>History.</h3>
										</div>

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
										<div className='titleStat'>
											<h3>Skillset.</h3>
										</div>
										<br />
										<br />
										<br />
										<br />
										<div className='secondPara'>
											<div className='testblock'></div>
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
												,
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
														color: 'navy',
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
										<div className='title4'>
											<h3> </h3>
											<hr className='transgrow hr2' />
										</div>
										<div className='thirdPara'>
											<div
												className='computer '
												ref={this.computerRef}></div>
											<p>
												Capable of producing modest web
												applications, I still consider
												myself a new student to the
												world of programming. I realize
												that being a developer is an
												everlasting pursuit of knowledge
												and utilization of knowledge. I
												believe the next step for me is,
												pursuing an entry level position
												within the industry.
											</p>
										</div>
										<p className='thirdPara2ndp'>
											Seeking to secure a full-time
											position in your office to further
											develop my work experience. I am
											confident in my abilities and also
											am an adept student.
										</p>
										<div className='lastSection'>
											<div className='title5'>
												<h3>Hobbies.</h3>
												<hr className='transgrow hr2' />
											</div>
											<div className='fourthPara'>
												<div
													className='study '
													ref={this.studyRef}></div>
												<p>
													When I’m not writing and
													nitpicking at code, I'll
													most likely be working
													out,hanging out with my dog
													- I like turtles, reading
													fantasy novels (when's the
													next KingKiller Chronicle
													book coming out?!), or
													watching Twitch! I'll
													occasionally game, and have
													started gardening. Go
													lettuce!
												</p>
											</div>
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
