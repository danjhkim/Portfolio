import React, { useRef, useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import gsap, { TweenMax } from 'gsap';

import TopFront from './TopFront';
import history from '../history';

import lottie from 'lottie-web';
import ScrollTrigger from 'gsap/ScrollTrigger';
import front from '../images/forward.json';

const App = () => {
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};

	const lottieRef = useRef();
	const [introDone, setIntroDone] = useState(false);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		ScrollTrigger.create({
			trigger: '.animation',
			start: '+=1',
			onEnter: () => cancelIt(),
		});

		const animation = lottie.loadAnimation({
			container: lottieRef.current, // the dom element that will contain the animation
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: front, // the path to the animation json
		});

		animation.playSegments([0, 88], true);

		setTimeout(() => {
			animation.playSegments([88, 178], true);
		}, 4500);

		setTimeout(() => {
			animation.destroy();
			lottieRef.current.style.display = 'none';
			setIntroDone(true);
		}, 8100);

		return () => {
			animation.destroy();
		};
	}, []);

	const cancelIt = () => {
		TweenMax.to('.animation', 1, { webkitFilter: 'blur(' + 20 + 'px)' });
		TweenMax.to('.animation', 2, { y: '-100%', ease: 'Power2.easeOut' });
		setIntroDone(true);
	};

	return (
		<>
			<div className='tester'>
				<div
					className='animation'
					ref={lottieRef}
					onClick={cancelIt}
					onWheel={cancelIt}></div>
			</div>
			<Router history={history}>
				<div className='App'>
					<TopFront introDone={introDone} />
				</div>
			</Router>
		</>
	);
};

export default App;
