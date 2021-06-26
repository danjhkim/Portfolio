import React, { useEffect, useRef, useState } from 'react';
import gsap, {
	TweenMax,
	ScrollToPlugin,
	ScrollTrigger,
	TimelineMax,
	DrawSVGPlugin,
	MotionPathPlugin,
	MorphSVGPlugin,
} from 'gsap/all';

import { CustomEase } from 'gsap/CustomEase';
import designFront from '../images/cover1.json';
import designFrontSmall from '../images/cover1small.json';
import blackboxing from '../images/fader.json';
import lottie from 'lottie-web';
import burger from '../images/burger.json';
import borderrimanim from '../images/outerrim.json';
import danielanim from '../images/D.json';

// icons
import homeicon from '../images/icons/home.svg';
import foldericon from '../images/icons/folder.svg';
import infoicon from '../images/icons/info.svg';
import profileicon from '../images/icons/profile.svg';

import About from '../components/About';

const TopFRont = props => {
	const DesignFrontRef = useRef();
	const DesignFrontRefSmall = useRef();
	const blackBox = useRef();
	const burgerRef = useRef();
	const borderRef = useRef();
	const borderRef2 = useRef();
	let borderRefFunc = useRef();
	const danRef = useRef();
	const [animation2, setAnimation2] = useState();
	const [animation3, setAnimation3] = useState();
	const [animationSmall, setAnimationSmall] = useState();
	const [menuPop, setMenuPop] = useState(false);
	const [running, setRunning] = useState(false);
	const [showIt, setShowIt] = useState(true);
	const [showItBig, setShowItBig] = useState(true);
	const [scrollBounce, setScrollBounce] = useState();
	const [arrowTime, setArrowTime] = useState(false);
	const [checked, setChecked] = useState(false);
	const [burgerPlay, setBurgerPlay] = useState();
	const [danBorder, setDanBorder] = useState();
	const [danBorder2, setDanBorder2] = useState();

	const [danielSymbol, setDanielSymbol] = useState();
	const [borderRan, setBorderRan] = useState(false);

	gsap.registerPlugin(ScrollToPlugin);
	gsap.registerPlugin(CustomEase);
	gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

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

	const home = () => {
		const clickMenuitem = new TimelineMax();
		setScrollBounce(
			clickMenuitem.to(window, {
				scrollTo: '#home',
			}),
			clickMenuitem.eventCallback('onComplete', function () {
				setTimeout(() => {
					setChecked(false);
				}, 200);
			}),
		);
		showArrowDown();
	};

	const bio = () => {
		const clickMenuitem = new TimelineMax();
		gsap.to('.innermenu', {
			duration: 0.5,
			x: '-105%',
			ease: 'Power2.out',
		});
		setScrollBounce(
			clickMenuitem.to(window, {
				delay: 0.5,
				scrollTo: '#one',
			}),
			clickMenuitem.eventCallback('onComplete', function () {
				setTimeout(() => {
					setChecked(false);
				}, 200);
			}),
		);
		gsap.to('.innermenu', {
			duration: 0.5,
			x: 0,
			delay: 2,
		});
		showArrowUp();
		showArrowDown();
	};

	const samples = () => {
		const clickMenuitem = new TimelineMax();
		gsap.to('.innermenu', {
			duration: 0.5,
			x: '-105%',
			ease: 'Power2.out',
		});
		setScrollBounce(
			clickMenuitem.to(window, {
				delay: 0.5,
				scrollTo: '#two',
			}),
			clickMenuitem.eventCallback('onComplete', function () {
				setTimeout(() => {
					setChecked(false);
				}, 200);
			}),
		);
		gsap.to('.innermenu', {
			duration: 0.5,
			x: 0,
			delay: 1,
		});
		showArrowUp();
		showArrowDown();
	};

	const contact = () => {
		const clickMenuitem = new TimelineMax();
		gsap.to('.innermenu', {
			duration: 0.5,
			x: '-105%',
			ease: 'Power2.out',
		});
		setScrollBounce(
			clickMenuitem.to(window, {
				delay: 0.5,
				scrollTo: '#three',
			}),
			clickMenuitem.eventCallback('onComplete', function () {
				setTimeout(() => {
					setChecked(false);
				}, 200);
			}),
		);
		gsap.to('.innermenu', {
			duration: 0.5,
			x: 0,
			delay: 1,
		});
		showArrowUp();
		showArrowDown();
	};

	const showArrowUp = () => {
		gsap.to('.arrowtop', { opacity: 1, delay: 1.5 });
		gsap.to('.arrowtop', { opacity: 0, delay: 4 });
		setArrowTime(true);
	};

	const showArrowDown = () => {
		gsap.to('.arrow', { opacity: 1, delay: 1.5 });
		gsap.to('.arrow', { opacity: 0, delay: 4 });
		setArrowTime(true);
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

		gsap.set('.pathBall', { xPercent: -50, yPercent: -50 });

		var dir;

		var action = gsap
			.timeline({
				defaults: { duration: 1, ease: 'none' },
				scrollTrigger: {
					trigger: '#path',
					scrub: 0,
					start: 'top top',
					end: 'bottom +=220%', // new
					onUpdate: self => {
						const prog = self.progress.toFixed(2);
						console.log(prog);
					}, // new: info for position
				},
			})
			.fromTo(
				'.pathLine',
				{ drawSVG: '100% 100%' },
				{ drawSVG: '0% 100%' },
				0,
			)
			.from(
				'.pathBall',
				{
					motionPath: {
						path: '.pathLine',
						align: '.pathLine',
						offsetX: 0,
						offsetY: 0,
					},
				},
				0,
			)

			// To compensate for the 'faster' vertical movement, a logic could be defined that counteracts the position of the SVG. Here is a simple experiment adapted to certain sectors (a fixed width of the SVG!).
			.to('#wrap', { y: '+=500', duration: 20 }, 0.06)
			.to('#wrap', { y: '-=500', duration: 20 }, 0.2)
			.to('#wrap', { y: '+=200', duration: 0.05 }, 0.22)
			.to('#wrap', { y: '+=300', duration: 0.05 }, 0.5)
			.to('#wrap', { y: '-=1500', duration: 0.4 }, 0.6);

		TweenMax.to('.smallMenuErase', { x: '-100%', opacity: 0 });
		TweenMax.to('.navigation', { opacity: 0 });
		gsap.registerPlugin(ScrollTrigger);

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

		const borderLottie = lottie.loadAnimation({
			container: borderRef.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: borderrimanim,
			rendererSettings: {
				preserveAspectRatio: 'none',
			},
		});

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
				preserveAspectRatio: 'none',
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

		const animation2 = lottie.loadAnimation({
			container: blackBox.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: blackboxing,
			rendererSettings: {
				preserveAspectRatio: 'none',
			},
		});

		borderLottie.addEventListener('enterFrame', () => {
			if (borderLottie.currentFrame == 33) {
				console.log('kaskdaskdak');
				// gsap.to('.borderRim', { opacity: 0, display: 'none' });
				// gsap.to('.borderRim2', { opacity: 1, display: 'block' });
			}
		});

		animation.addEventListener('complete', () => {
			setRunning(false);
			const wait = Math.floor(Math.random() * 4000) + 2000;
			setTimeout(() => {
				if (running) {
					return;
				} else {
					setRunning(true);
					animation.playSegments([159, 200], true);
				}
			}, wait);
		});

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

		setAnimation2(animation);
		setAnimation3(animation2);
		setAnimationSmall(animationSmall);
		setBurgerPlay(burgerLottie);
		setDanBorder(borderLottie);
		setDanielSymbol(danLottie);

		gsap.to('.innermenu', {
			scrollTrigger: {
				trigger: '#firsty',
				start: 'center 20%',
				toggleActions: 'play none none reverse',
				onLeaveBack: () => showOnBigScrollLeave(),
				onEnter: () => showOnBigScroll(),
			},
			delay: 0.5,
			duration: 1,
			y: '-110%',
			ease: 'back.in',
		});

		const showOnBigScrollLeave = () => {
			if (window.innerHeight < window.innerWidth) {
				gsap.to('.navigation', { opacity: 0, display: 'none' });
			}
		};

		const showOnBigScroll = () => {
			if (window.innerHeight < window.innerWidth) {
				gsap.to('.navigation', { opacity: 1, display: 'block' });
				borderLottie.playSegments([0, 34], true);
			}
		};

		if (window.innerHeight > window.innerWidth) {
			setShowIt(true);
			setShowItBig(false);
			openScroll();
		} else {
			setShowItBig(true);
			setShowIt(false);
			gsap.to('.innermenu', {
				y: '0',
			});
		}

		window.addEventListener('resize', function () {
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
					TweenMax.to('.navigation', { opacity: 0, display: 'none' });
					gsap.to('.innermenu', {
						y: '0',
					});
				}
			});
		};
		// eslint-disable-next-line
	}, []);

	const ScrollLottie = obj => {
		let anim = lottie.loadAnimation({
			container: document.querySelector(obj.target),
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: borderrimanim,
		});

		borderRefFunc = anim;

		let timeObj = { currentFrame: 0 };
		let endString =
			obj.speed === 'slow'
				? '+=6000'
				: obj.speed === 'medium'
				? '+=1000'
				: obj.speed === undefined
				? '+=1250'
				: '+=500';
		ScrollTrigger.create({
			trigger: '#firsty',
			scrub: true,
			start: 'top top',
			endTrigger: '#four',
			end: 'bottom bottom',
			onUpdate: self => {
				if (obj.duration) {
					gsap.to(timeObj, {
						duration: obj.duration,
						currentFrame: () => {
							let num = Math.floor(
								self.progress * (anim.totalFrames - 1) + 33,
							);
							if (num > 210) {
								return 210;
							} else {
								return num;
							}
						},
						onUpdate: () => {
							anim.goToAndStop(timeObj.currentFrame, true);
						},
						ease: 'expo',
					});
				} else {
					anim.goToAndStop(
						self.progress * (anim.totalFrames - 1),
						true,
					);
				}
			},
		});
	};

	useEffect(() => {
		ScrollLottie({
			target: '.borderRim2',
			duration: 10,
			speed: 'slow',
		});
	}, []);

	useEffect(() => {
		if (props.introDone === true) {
			setTimeout(() => {
				animation2.play();
			}, 2100);

			setTimeout(() => {
				setMenuPop(true);
				if (!showItBig) {
					TweenMax.to('.navigation', {
						opacity: 1,
						display: 'block',
					});
					if (!borderRan) {
						danBorder.playSegments([0, 34], true);
						setBorderRan(true);
					}
				}
				if (showItBig) {
					TweenMax.to('.navigation', { opacity: 0, display: 'none' });
					TweenMax.to('.navMenu', {
						opacity: 1,
						delay: 2,
						duration: 4,
					});
				}
			}, 4000);

			setTimeout(() => {
				animation3.play();
				animationSmall.play();
			}, 1500);
		}
	}, [
		props.introDone,
		animation2,
		animation3,
		animationSmall,
		danBorder,
		showItBig,
	]);

	useEffect(() => {
		//SCREEN MENU
		const staggermenuitems = new TimelineMax({ paused: true });
		// this ensure it doesnt automatically start.

		staggermenuitems
			.to('.stagger', { autoAlpha: 1, duration: 0 })
			.staggerFromTo(
				'.stagger li',
				0.2,
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
				<div className='wrap' id='wrap'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='stretchsvg'
						width='100%'
						height='100%'
						viewBox='min-x min-y x y'
						preserveAspectRatio='none'
						x='0px'
						y='0px'
						id='path'>
						<path
							strokeWidth='1'
							width='100%'
							height='100%'
							fill='none'
							stroke='black'
							className='pathLine'
							d='M 38.50,379.00
							C 38.50,379.00 38.50,331.00 38.50,331.00
							  38.50,331.00 77.50,292.00 77.50,292.00
							  77.50,292.00 77.50,249.00 77.50,249.00
							  77.50,249.00 38.50,221.00 38.50,221.00
							  38.50,221.00 38.50,176.00 38.50,176.00
							  38.50,176.00 0.50,143.00 0.50,143.00
							  0.50,143.00 0.50,82.00 0.50,82.00
							  0.50,82.00 38.50,50.00 38.50,50.00
							38.50,50.00 38.50,0.00 38.50,0.00 '
						/>
						<circle
							className='pathBall'
							cx='0'
							cy='0'
							r='20'
							fill='yellow'
						/>
					</svg>
				</div>
				<nav
					className={`navigation ${showItBig ? 'gone' : `small`}`}
					onClick={checkerFunc}>
					{/* <div
						className='menuToggle'
						ref={burgerRef}
						onChange={checkerFunc}></div> */}
					<div
						className='borderRim'
						ref={borderRef}
						onChange={checkerFunc}></div>
					<div
						className='borderRim2'
						ref={borderRef2}
						onChange={checkerFunc}></div>
					<div
						className='danSymbol'
						ref={danRef}
						onChange={checkerFunc}></div>
				</nav>
				<div
					className={`navMenu smallMenuErase ${
						showItBig ? 'gone' : `small`
					}`}
					onClick={e => e.stopPropagation()}>
					<nav className='naver stagger' onClick={openScroll}>
						<ul>
							<li className='hvr-grow' onClick={home}>
								<img
									src={homeicon}
									alt='home'
									className='imagebox'
								/>
								<span>WELCOME</span>
							</li>
							<li className='hvr-grow' onClick={bio}>
								<img
									src={infoicon}
									alt='biography'
									className='imagebox'
								/>
								<span>BIO</span>
							</li>
							<li className='hvr-grow' onClick={samples}>
								<img
									src={foldericon}
									alt='portofolio'
									className='imagebox'
								/>
								<span>SAMPLES</span>
							</li>
							<li className='hvr-grow' onClick={contact}>
								<img
									src={infoicon}
									alt='contact'
									className='imagebox'
								/>
								<span>CONTACT</span>
							</li>
						</ul>
					</nav>
				</div>
				<section className='panel yellow' id='firsty'>
					<div className={`menuFirst ${showItBig ? null : `gone`}`}>
						<div
							className={`blackBox ${showItBig ? null : `gone`}`}
							ref={blackBox}></div>
						<div
							className={`innermenu ${
								showItBig ? `big` : `gone`
							}`}
							ref={DesignFrontRef}>
							<div
								className={`navMenu`}
								onClick={e => e.stopPropagation()}>
								<nav className='naver ' onClick={openScroll}>
									<ul>
										<li className='hvr-grow' onClick={home}>
											<img
												src={homeicon}
												alt='Home'
												className='imagebox'
											/>
											<span>WELCOME</span>
										</li>
										<li className='hvr-grow' onClick={bio}>
											<img
												src={infoicon}
												alt='biography'
												className='imagebox'
											/>
											<span>BIO</span>
										</li>
										<li
											className='hvr-grow'
											onClick={samples}>
											<img
												src={foldericon}
												className='imagebox'
												alt='portofolio'
											/>
											<span>SAMPLES</span>
										</li>
										<li
											className='hvr-grow'
											onClick={contact}>
											<img
												src={profileicon}
												alt='contact'
												className='imagebox'
											/>
											<span>CONTACT</span>
										</li>
									</ul>
								</nav>
							</div>
							<div
								className={`boxShadow ${
									menuPop ? 'bigShadowanime' : null
								}`}></div>
						</div>
					</div>
					<div className={`smallScreen ${showItBig ? `gone` : null}`}>
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
					<div className='wrapper'>two</div>
				</section>
				<section className='panel yellow' id='three'>
					<div className='wrapper'>three</div>
				</section>
				<section className='panel black' id='four'>
					<div className='wrapper'>four</div>
				</section>
			</div>
		</main>
	);
};

export default TopFRont;
