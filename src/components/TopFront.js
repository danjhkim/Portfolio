import React, { useEffect, useRef, useState } from 'react';
import gsap, { TweenMax, ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { CustomEase } from 'gsap/CustomEase';
import designFront from '../images/cover1.json';
import designFrontSmall from '../images/cover1small.json';
import blackboxing from '../images/fader.json';
import lottie from 'lottie-web';
import burger from '../images/burger.json';

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
		setScrollBounce(
			gsap.to(window, { duration: 1.5, scrollTo: '#home', ease: 'hop' }),
		);
		showArrowDown();
	};

	const bio = () => {
		setScrollBounce(
			gsap.to(window, { duration: 1.5, scrollTo: '#one', ease: 'hop' }),
		);
		showArrowUp();
		showArrowDown();
	};

	const samples = () => {
		setScrollBounce(
			gsap.to(window, { duration: 1.5, scrollTo: '#two', ease: 'hop' }),
		);
		showArrowUp();
		showArrowDown();
	};

	const contact = () => {
		setScrollBounce(
			gsap.to(window, {
				duration: 1.5,
				scrollTo: '#three',
				ease: 'hopBottom',
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
		TweenMax.to('.smallMenuErase', { x: -300, opacity: 0 });
		TweenMax.to('.navigation', { opacity: 0 });
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.toggleMenuBar', 2, {
			width: '200%',
			scrollTrigger: '#one',
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
		if (props.introDone === true) {
			if (checked) {
				burgerPlay.setDirection(1);
				burgerPlay.play();
				TweenMax.to('.smallMenuErase', {
					x: 0,
					opacity: 1,
					ease: 'power2.out',
				});
			} else if (!checked) {
				burgerPlay.setDirection(-1);
				burgerPlay.play();
				TweenMax.to('.smallMenuErase', {
					x: -500,
					opacity: 0,
					delay: 0.3,
					ease: 'power2.out',
				});
			}
		}
	}, [checked, burgerPlay, props.introDone]);

	const cancelScroll = () => {
		if (scrollBounce) {
			console.log('its working');
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
									WELCOME
								</li>
								<li className='hvr-grow' onClick={bio}>
									BIO
								</li>
								<li className='hvr-grow' onClick={samples}>
									SAMPLES
								</li>
								<li className='hvr-grow' onClick={contact}>
									CONTACT
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
						<nav className='naver' onClick={openScroll}>
							<ul>
								<li className='hvr-grow' onClick={home}>
									WELCOME
								</li>
								<li className='hvr-grow' onClick={bio}>
									BIO
								</li>
								<li className='hvr-grow' onClick={samples}>
									SAMPLES
								</li>
								<li className='hvr-grow' onClick={contact}>
									CONTACT
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div className='panels'>
				<div className='arrowtop bounceUp'></div>
				<section className='panel yellow' id='one'>
					<About />
				</section>
				<section className='panel black' id='two'>
					TEST
				</section>
				<section className='panel yellow' id='three'>
					three
				</section>
				<section className='panel black' id='four'>
					BYE! Vecteezy.com
				</section>
				<div className='arrow bounce'></div>
			</div>
		</main>
	);
};

export default TopFRont;
