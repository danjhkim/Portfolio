import React, { useEffect, useRef, useState } from 'react';
import gsap, {
	TweenMax,
	ScrollToPlugin,
	ScrollTrigger,
	TimelineMax,
	MorphSVGPlugin,
	DrawSVGPlugin,
} from 'gsap/all';

import { CustomEase } from 'gsap/CustomEase';
import designFront from '../images/coverchange.json';
import designFrontSmall from '../images/cover1small.json';
import lottie from 'lottie-web';
import burger from '../images/burger.json';
import borderrimanim from '../images/outerrim.json';
import danielanim from '../images/D.json';

// icons
import homeicon from '../images/icons/home.svg';
import foldericon from '../images/icons/folder.svg';
import infoicon from '../images/icons/info.svg';
import profile from '../images/icons/profile.svg';

import About from '../components/About';

import Samples from '../components/Samples';
import Comment from '../components/Comment';

const TopFRont = props => {
	const DesignFrontRef = useRef();
	const DesignFrontRefSmall = useRef();
	const burgerRef = useRef();
	const borderRef2 = useRef();
	const danRef = useRef();
	const [animation2, setAnimation2] = useState();
	const [animationSmall, setAnimationSmall] = useState();
	const [menuPop, setMenuPop] = useState(false);
	const [running, setRunning] = useState(false);
	const [showIt, setShowIt] = useState(true);
	const [showItBig, setShowItBig] = useState(true);
	const [showItSmall, setShowItSmall] = useState(true);
	const [scrollBounce, setScrollBounce] = useState();
	const [arrowTime, setArrowTime] = useState(false);
	const [checked, setChecked] = useState(false);
	const [burgerPlay, setBurgerPlay] = useState();
	const [danBorder2, setDanBorder2] = useState();

	const [danielSymbol, setDanielSymbol] = useState();

	gsap.registerPlugin(ScrollToPlugin);
	gsap.registerPlugin(CustomEase);
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(MorphSVGPlugin);
	gsap.registerPlugin(DrawSVGPlugin);

	CustomEase.create(
		'hop',
		'M0,0 C0,0 0.114,0.56 0.15,1 0.164,1.151 0.294,1.22 0.376,1.214 0.5,1.204 0.6,1.024 0.618,1 0.66,0.922 0.82,0.948 0.84,0.948 0.911,0.948 1,1 1,1 ',
	);
	CustomEase.create(
		'hopBottom',
		'M0,0 C0,0 0.29,0.918 0.3,0.928 0.338,1.006 0.352,1.044 0.4,1.044 0.428,1.044 0.552,0.942 0.694,0.924 0.844,0.903 1,1 1,1',
	);

	const openScroll = () => {
		document.body.style.overflowY = 'scroll';
	};

	const entering = e => {
		console.log(e);
		gsap.to(e.target, {});
	};

	const leaving = e => {
		console.log(e);
		gsap.to(e.target, {});
	};

	const home = () => {
		const clickMenuitem = new TimelineMax();
		setScrollBounce(
			clickMenuitem.to(window, {
				scrollTo: '#home',
			}),
			setChecked(false),
		);
		showArrowDown();
	};

	const bio = () => {
		const clickMenuitem = new TimelineMax();

		setScrollBounce(
			clickMenuitem.to(window, {
				scrollTo: '#one',
			}),
			setChecked(false),
			gsap.to('.menuFirst', { opacity: 1 }),
			gsap.to('.menuFirst', { webkitFilter: 'blur(0px)' }),
		);

		showArrowUp();
		showArrowDown();
	};

	const samples = () => {
		const clickMenuitem = new TimelineMax();

		setScrollBounce(
			clickMenuitem.to(window, {
				delay: 0.5,
				scrollTo: '#two',
			}),
			setChecked(false),
			gsap.to('.menuFirst', { opacity: 1 }),
			gsap.to('.menuFirst', { webkitFilter: 'blur(0px)' }),
		);

		showArrowUp();
		showArrowDown();
	};

	const contact = () => {
		const clickMenuitem = new TimelineMax();

		setScrollBounce(
			clickMenuitem.to(window, {
				delay: 0,
				scrollTo: '#three',
			}),
			gsap.to('.menuFirst', { opacity: 1 }),
			gsap.to('.menuFirst', { webkitFilter: 'blur(0px)' }),
			setChecked(false),
		);
		showArrowUp();
	};

	const showArrowUp = () => {
		gsap.to('.arrowtop', { opacity: 1, delay: 1 });
		gsap.to('.arrowtop', { opacity: 0, delay: 4 });
		setArrowTime(true);
	};

	const showArrowDown = () => {
		gsap.to('.arrow', { opacity: 1, delay: 1 });
		gsap.to('.arrow', { opacity: 0, delay: 4 });
		setArrowTime(true);
	};

	useEffect(() => {
		let workLinks = document.querySelectorAll('.boxedIn');

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

		gsap.to('.innermenu', {
			width: '100%',
		});

		gsap.to('.infoblock', {
			width: '0%',
		});

		TweenMax.to('.smallMenuErase', { x: '-100%', opacity: 0 });
		TweenMax.to('.navigation', { opacity: 0 });

		const danLottie = lottie.loadAnimation({
			container: danRef.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: danielanim,
			rendererSettings: {
				preserveAspectRatio: 'none',
			},
		});

		// const borderLottie = lottie.loadAnimation({
		// 	container: borderRef.current,
		// 	renderer: 'svg',
		// 	loop: false,
		// 	autoplay: false,
		// 	animationData: borderrimanim,
		// 	rendererSettings: {
		// 		preserveAspectRatio: 'none',
		// 	},
		// });

		const burgerLottie = lottie.loadAnimation({
			container: burgerRef.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: burger,
			rendererSettings: {
				preserveAspectRatio: 'none',
			},
		});

		const animation = lottie.loadAnimation({
			container: DesignFrontRef.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: designFront,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet',
			},
		});

		const animationSmall = lottie.loadAnimation({
			container: DesignFrontRefSmall.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: designFrontSmall,
			rendererSettings: {
				preserveAspectRatio: 'none',
			},
		});

		// animation.addEventListener('complete', () => {
		// 	setRunning(false);
		// 	const wait = Math.floor(Math.random() * 4000) + 2000;
		// 	setTimeout(() => {
		// 		if (running) {
		// 			return;
		// 		} else {
		// 			setRunning(true);
		// 			animation.playSegments([151, 201], true);
		// 		}
		// 	}, wait);
		// });

		animationSmall.addEventListener('complete', () => {
			setRunning(false);
			const wait = Math.floor(Math.random() * 4000) + 2000;
			setTimeout(() => {
				if (running) {
					return;
				} else {
					setRunning(true);
					animationSmall.playSegments([138, 173], true);
				}
			}, wait);
		});

		const scrollBord = lottie.loadAnimation({
			container: borderRef2.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: borderrimanim,
			rendererSettings: {
				preserveAspectRatio: 'none',
			},
		});

		scrollBord.addEventListener('enterFrame', () => {
			if (scrollBord.currentFrame > 33) {
				scrollBord.pause();
			}
		});

		//important for menu
		const ScrollLottie = obj => {
			let timeObj = { currentFrame: 34 };
			ScrollTrigger.create({
				trigger: '#firsty',
				scrub: true,
				start: 'top top',
				endTrigger: '#three',
				end: 'bottom bottom',
				onUpdate: self => {
					if (obj.duration) {
						gsap.to(timeObj, {
							duration: obj.duration,
							currentFrame: () => {
								let num = Math.floor(
									self.progress *
										(scrollBord.totalFrames - 1) +
										34,
								);
								if (num > 210) {
									return 210;
								} else {
									return num;
								}
							},
							onUpdate: () => {
								scrollBord.goToAndStop(
									timeObj.currentFrame,
									true,
								);
							},
							ease: 'expo',
						});
					} else {
						scrollBord.goToAndStop(
							self.progress * (scrollBord.totalFrames - 1),
							true,
						);
					}
				},
			});
		};

		ScrollLottie({
			target: '.borderRim2',
			duration: 4,
			speed: '+=6000',
		});

		setAnimation2(animation);
		setAnimationSmall(animationSmall);
		setBurgerPlay(burgerLottie);
		setDanielSymbol(danLottie);
		setDanBorder2(scrollBord);

		const showOnBigScrollLeave = () => {
			if (window.innerHeight < window.innerWidth) {
				gsap.to('.navigation', { opacity: 1, display: 'block' });
			}
		};

		const showOnBigScroll = () => {
			if (window.innerHeight < window.innerWidth) {
				gsap.to('.navigation', { opacity: 1, display: 'block' });
			}
			scrollBord.play();
		};

		gsap.to('.innermenu', {
			scrollTrigger: {
				trigger: '#firsty',
				start: 'center 20%',
				// toggleActions: 'play none none reverse',
				onLeaveBack: () => showOnBigScrollLeave(),
				onEnter: () => showOnBigScroll(),
			},
			// duration: 1,
			// y: '-110%',
			// ease: 'power4',
		});

		if (window.innerHeight > window.innerWidth) {
			setShowItBig(true);
			setShowItSmall(false);

			setShowIt(true);
			openScroll();
			TweenMax.to('.innermenu', {
				backgroundSize: '210%',
			});
		} else if (window.innerWidth > window.innerHeight) {
			setShowItBig(true);
			setShowItSmall(false);
			setShowIt(false);
			gsap.to('.innermenu', {
				y: '0',
			});
			TweenMax.to('.innermenu', {
				backgroundSize: '160%',
			});
		}

		window.addEventListener('resize', function () {
			if (window.innerHeight > window.innerWidth) {
				setShowItBig(true);
				setShowItSmall(false);

				setShowIt(true);
				openScroll();
				TweenMax.to('.innermenu', {
					backgroundSize: '210%',
				});
				TweenMax.to('.navigation', {
					opacity: 1,
					display: 'block',
				});
			} else if (window.innerWidth > window.innerHeight) {
				setShowItBig(true);
				setShowItSmall(false);
				setShowIt(false);
				gsap.to('.innermenu', {
					y: '0',
				});
				TweenMax.to('.innermenu', {
					backgroundSize: '160%',
				});
			}
		});

		// eslint-disable-next-line

		return () => {
			animation.removeEventListener('complete', () => {
				setRunning(false);
				const wait = Math.floor(Math.random() * 4000) + 2000;
				setTimeout(() => {
					if (running) {
						return;
					} else {
						setRunning(true);
						animation.playSegments([138, 173], true);
					}
				}, wait);
			});

			animationSmall.removeEventListener('complete', () => {
				setRunning(false);
				const wait = Math.floor(Math.random() * 4000) + 2000;
				setTimeout(() => {
					if (running) {
						return;
					} else {
						setRunning(true);
						animationSmall.playSegments([138, 173], true);
					}
				}, wait);
			});

			window.removeEventListener('resize', function () {
				if (window.innerHeight > window.innerWidth) {
					openScroll();
					setShowIt(true);
					setShowItBig(false);
					TweenMax.to('.navigation', {
						opacity: 1,
						display: 'block',
					});
				} else if (window.innerWidth > window.innerHeight) {
					setShowItBig(true);
					setShowIt(false);
					gsap.to('.innermenu', {
						y: '0',
					});
				}
			});
		};
		// eslint-disable-next-line
	}, []);

	// useEffect(() => {
	// 	ScrollTrigger.create({
	// 		trigger: '#firsty',
	// 		start: 'top top',
	// 		pin: true,
	// 		pinSpacing: false,
	// 	});
	// }, []);

	useEffect(() => {
		if (props.introDone === true) {
			setTimeout(() => {
				animation2.play();
			}, 2100);

			setTimeout(() => {
				setMenuPop(true);

				TweenMax.to('.navigation', {
					opacity: 1,
					display: 'block',
				});
				TweenMax.to('.navigation', {
					opacity: 1,
					display: 'block',
				});

				danBorder2.play();

				gsap.to('.innermenu', {
					delay: 3,
					clearProps: 'all',
				});

				gsap.to('.infoblock', {
					delay: 3,
					clearProps: 'all',
				});

				gsap.to('.infoblock', {
					delay: 4,
					opacity: 1,
					duration: 0.3,
				});

				TweenMax.to('body', {
					overflowY: 'auto',
					delay: 4,
				});
			}, 4000);

			setTimeout(() => {
				gsap.to('.blackBox', {
					opacity: 0,

					duration: 4,
				});
				gsap.to('.blackBox', {
					display: 'none',
					delay: 4,
				});
				animationSmall.play();
			}, 1500);
		}
	}, [props.introDone, animation2, animationSmall, danBorder2, showItBig]);

	useEffect(() => {
		//SCREEN MENU
		const staggermenuitems = new TimelineMax({ paused: true });
		// this ensure it doesnt automatically start.

		staggermenuitems
			.to('.stagger', { autoAlpha: 1, duration: 0 })
			.staggerFromTo(
				'.stagger li',
				0.5,
				{ y: 200, opacity: 0 },
				{ y: 0, opacity: 1, ease: 'back.in' },
				0.1,
			);
		//after showing it staggers the items on the menu

		// if (props.introDone === true) {
		// 	if (checked) {
		// 		burgerPlay.setDirection(1);
		// 		burgerPlay.play();
		// 		TweenMax.to('.smallMenuErase', {
		// 			x: 0,
		// 			opacity: 1,
		// 			ease: 'power2.out',
		// 		});
		// 		staggermenuitems.play(0);
		// 	} else if (!checked) {
		// 		burgerPlay.setDirection(-1);
		// 		burgerPlay.play();
		// 		TweenMax.to('.smallMenuErase', {
		// 			x: '-100%',
		// 			opacity: 0,
		// 			ease: 'power2.out',
		// 		});
		// 	}
		// }

		if (props.introDone === true) {
			danielSymbol.setSpeed(15);
			if (checked) {
				danielSymbol.setDirection(1);
				danielSymbol.play();
				TweenMax.to('.smallMenuErase', {
					x: 0,
					opacity: 1,
					ease: 'power2.out',
				});
				staggermenuitems.play(0);
			} else if (!checked) {
				danielSymbol.setDirection(-1);
				danielSymbol.play();
				TweenMax.to('.smallMenuErase', {
					x: '-100%',
					opacity: 0,
					ease: 'power2.out',
				});
			}
		}
	}, [checked, burgerPlay, props.introDone, menuPop, danielSymbol]);

	const cancelScroll = () => {
		if (scrollBounce) {
			scrollBounce.kill();
			setScrollBounce(null);
		}
		if (arrowTime) {
			gsap.to('.arrow', { opacity: 0 });
			gsap.to('.arrowtop', { opacity: 0 });
			setArrowTime(false);
		}
	};

	const checkerFunc = () => {
		setChecked(!checked);
	};

	return (
		<main className='main' id='home' onWheel={cancelScroll}>
			<div className='arrowtop bounceUp'></div>
			<div className='arrow bounce'></div>
			<div className='panels'>
				<div className='navBar'>
					<nav
						className={`navigation ${showItBig ? 'null' : `small`}`}
						onClick={checkerFunc}>
						{/* <div
						className='menuToggle'
						ref={burgerRef}
						onChange={checkerFunc}></div> */}

						<div
							className='borderRim2'
							ref={borderRef2}
							onChange={checkerFunc}></div>
						<div
							className='danSymbol'
							ref={danRef}
							onChange={checkerFunc}></div>
					</nav>
				</div>

				<div
					className={`navMenu smallMenuErase`}
					onClick={e => e.stopPropagation()}>
					<nav className='naver stagger' onClick={openScroll}>
						<ul>
							<li className='hvr-grow' onClick={home}>
								<div
									className='boxedIn'
									onMouseEnter={e => entering(e)}
									onMouseLeave={e => leaving(e)}>
									<img
										src={homeicon}
										alt='home'
										className='imagebox'
									/>
									<span>WELCOME</span>
									<div className='line1'>
										<span className='underline'></span>
									</div>
								</div>
							</li>
							<li className='hvr-grow' onClick={bio}>
								<div
									className='boxedIn'
									onMouseEnter={e => entering(e)}
									onMouseLeave={e => leaving(e)}>
									<img
										src={profile}
										alt='biography'
										className='imagebox'
									/>
									<span>BIO</span>
									<div className='line2'>
										<span className='underline'></span>
									</div>
								</div>
							</li>
							<li className='hvr-grow' onClick={samples}>
								<div
									className='boxedIn'
									onMouseEnter={e => entering(e)}
									onMouseLeave={e => leaving(e)}>
									<img
										src={foldericon}
										alt='portofolio'
										className='imagebox'
									/>
									<span>SAMPLES</span>
									<div className='line3'>
										<span className='underline'></span>
									</div>
								</div>
							</li>
							<li className='hvr-grow' onClick={contact}>
								<div
									className='boxedIn'
									onMouseEnter={e => entering(e)}
									onMouseLeave={e => leaving(e)}>
									<img
										src={infoicon}
										alt='contact'
										className='imagebox'
									/>
									<span>CONTACT</span>
									<div className='line4'>
										<span className='underline'></span>
									</div>
								</div>
							</li>
						</ul>
					</nav>
				</div>
				<section className='panel yellow' id='firsty'>
					<div className='blackBox'></div>

					<div className={`menuFirst ${showItBig ? null : `gone`}`}>
						<div
							className={`surround ${
								showItBig ? `null` : `gone`
							}`}>
							<div
								className={`innermenu ${
									showItBig ? `big` : `gone`
								}`}
								ref={DesignFrontRef}>
								{/* <div
									className={`boxShadow ${
										menuPop ? 'bigShadowanime' : null
									}`}></div> */}
							</div>
							<div className='infoblock'>
								<span>Daniel</span>
								<span>J.H. KIM</span>
								<span>Portfoilio 2021</span>
								<span>
									Toronto . aspiring technologist . cannoli
									fan . MMA fan{' '}
								</span>
								<span>
									<center>
										"Personal development is the belief that
										you are worth the effort, time and
										energy needed to develop yourself"{' '}
										<br />{' '}
									</center>
								</span>
								<span className='author'>-Denis Waitley</span>
							</div>
						</div>
					</div>
					<div
						className={`smallScreen ${
							showItSmall ? null : `gone`
						}`}>
						<div
							className={`innermenu ${showIt ? `small` : `gone`}`}
							ref={DesignFrontRefSmall}></div>
						<div className='blackblankfill'></div>
					</div>
				</section>
				<section className='panel yellow' id='one'>
					<About showIt={showIt} />
				</section>
				<section className='panel yellow' id='two'>
					<Samples />
				</section>
				<section className='panel yellow' id='three'>
					<Comment />
				</section>
			</div>
		</main>
	);
};

export default TopFRont;
