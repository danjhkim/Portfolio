import React, { useEffect, useRef, useState } from 'react';
import gsap, {
	TweenMax,
	ScrollToPlugin,
	ScrollTrigger,
	TimelineMax,
} from 'gsap/all';
import { CustomEase } from 'gsap/CustomEase';
import designFront from '../images/cover1.json';
import designFrontSmall from '../images/cover1small.json';
import blackboxing from '../images/fader.json';
import lottie from 'lottie-web';
import burger from '../images/burger.json';

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

	gsap.registerPlugin(ScrollToPlugin);
	gsap.registerPlugin(CustomEase);
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
				if (showIt) {
					setChecked(false);
				}
			}),
		);
		showArrowDown();
	};

	const bio = () => {
		const clickMenuitem = new TimelineMax();
		setScrollBounce(
			clickMenuitem
				.to('.innermenu', {
					duration: 0.5,
					x: '-100%',
					ease: 'Power2.out',
				})
				.to(window, { scrollTo: '#one' })
				.to('.innermenu', {
					duration: 0,
					x: 0,
				}),
			clickMenuitem.eventCallback('onComplete', function () {
				if (showIt) {
					setChecked(false);
				}
			}),
		);
		showArrowUp();
		showArrowDown();
	};

	const samples = () => {
		const clickMenuitem = new TimelineMax();
		setScrollBounce(
			clickMenuitem
				.to('.innermenu', {
					duration: 0.5,
					x: '-100%',
					ease: 'Power2.out',
				})
				.to(window, { scrollTo: '#two' })
				.to('.innermenu', {
					duration: 0,
					x: 0,
				}),
			clickMenuitem.eventCallback('onComplete', function () {
				if (showIt) {
					setChecked(false);
				}
			}),
		);
		showArrowUp();
		showArrowDown();
	};

	const contact = () => {
		const clickMenuitem = new TimelineMax();
		setScrollBounce(
			clickMenuitem
				.to('.innermenu', {
					duration: 0.5,
					x: '-100%',
					ease: 'Power2.out',
				})
				.to(window, { duration: 0, scrollTo: '#three' })
				.to('.innermenu', {
					duration: 0,
					x: 0,
				}),
			clickMenuitem.eventCallback('onComplete', function () {
				if (showIt) {
					setChecked(false);
				}
			}),
		);
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
		if (window.innerHeight > window.innerWidth) {
			setShowIt(true);
			setShowItBig(false);
			openScroll();
		} else {
			setShowItBig(true);
			setShowIt(false);
		}

		window.addEventListener('resize', function () {
			openScroll();
			if (window.innerHeight > window.innerWidth) {
				setShowIt(true);
				setShowItBig(false);
			} else {
				setShowItBig(true);
				setShowIt(false);
			}

			// if (window.innerWidth <= 768) {
			//     setShowIt(true)
			//     setShowItBig(false)
			// } else {
			//     setShowItBig(true)
			//     setShowIt(false)
			// }
		});

		return () => {
			window.removeEventListener('resize', function () {
				openScroll();
				if (window.innerHeight > window.innerWidth) {
					setShowIt(true);
					setShowItBig(false);
				} else {
					setShowItBig(true);
					setShowIt(false);
				}
			});
		};
	}, []);

	useEffect(() => {
		TweenMax.to('.smallMenuErase', { x: '-100%', opacity: 0 });
		TweenMax.to('.navigation', { opacity: 0 });
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.toggleMenuBar', {
			width: '200%',
			scrollTrigger: '#one',
			duration: 2,
		});

		// gsap.utils.toArray(".panel").forEach((panel, i) => {
		//     ScrollTrigger.create({
		//         trigger: panel,
		//         start: "top top",
		//         pin: true,
		//         pinSpacing: false,
		//     });
		// });

		// ScrollTrigger.create({
		//     snap: 1 / (4 - 1), // snap whole page to the closest section!
		//     duration: .5
		// });

		// create({
		//     mode: 'scroll',
		//     player: '#firstLottie',
		//     actions: [
		//         {
		//             visibility: [0, 1],
		//             type: 'seek',
		//             frames: [0, 50],
		//         },
		//     ],
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

		animation.addEventListener('complete', () => {
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
		};
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (props.introDone === true) {
			setTimeout(() => {
				animation2.play();
			}, 2100);

			setTimeout(() => {
				setMenuPop(true);
				TweenMax.to('.navigation', { opacity: 1 });
			}, 4000);

			setTimeout(() => {
				animation3.play();
				animationSmall.play();
			}, 1500);
		}
	}, [props.introDone, animation2, animation3, animationSmall]);

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
				{ y: 0, opacity: 1, ease: 'Power2.easeOut' },
				0.1,
			);
		//after showing it staggers the items on the menu

		if (props.introDone === true) {
			if (checked) {
				burgerPlay.setDirection(1);
				burgerPlay.play();
				TweenMax.to('.smallMenuErase', {
					x: 0,
					opacity: 1,
					ease: 'power2.out',
				});
				staggermenuitems.play(0);
			} else if (!checked) {
				burgerPlay.setDirection(-1);
				burgerPlay.play();
				TweenMax.to('.smallMenuErase', {
					x: '-100%',
					opacity: 0,
					ease: 'power2.out',
				});
			}
		}
	}, [checked, burgerPlay, props.introDone]);

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
			<div className={`menuFirst ${showItBig ? null : `gone`}`}>
				<div
					className={`blackBox ${showItBig ? null : `gone`}`}
					ref={blackBox}></div>
				<div
					className={`innermenu ${showItBig ? `big` : `gone`}`}
					ref={DesignFrontRef}>
					<div
						className={`navMenu ${menuPop ? 'navGrow' : null}`}
						onClick={e => e.stopPropagation()}>
						<nav className='naver' onClick={openScroll}>
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
								<li className='hvr-grow' onClick={samples}>
									<img
										src={foldericon}
										className='imagebox'
										alt='portofolio'
									/>
									<span>SAMPLES</span>
								</li>
								<li className='hvr-grow' onClick={contact}>
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
					ref={DesignFrontRefSmall}>
					<nav className='navigation' onClick={checkerFunc}>
						<div
							className='menuToggle'
							ref={burgerRef}
							onChange={checkerFunc}></div>
					</nav>
					<div
						className={`navMenu smallMenuErase`}
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
				</div>
				<div className='blackblankfill'></div>
			</div>
			<div className='panels'>
				<div className='arrowtop bounceUp'></div>
				<section className='panel yellow' id='one'>
					<About showIt={showIt} />
				</section>
				<section className='panel black' id='two'>
					<div className='wrapper'>two</div>
				</section>
				<section className='panel yellow' id='three'>
					<div className='wrapper'>three</div>
				</section>
				<section className='panel black' id='four'>
					<div className='wrapper'>four</div>
				</section>
				<div className='arrow bounce'></div>
			</div>
		</main>
	);
};

export default TopFRont;
