import React, { useEffect } from 'react';
import gsap, { TweenMax } from 'gsap/all';
import '../styles/Samples.css';
import clock from '../images/images/clock.jpg';
import weather from '../images/images/weather.jpg';
import gotham from '../images/images/gotham.jpg';
import tools from '../images/images/tools.jpg';
import calc from '../images/images/calc.jpg';
import metro from '../images/images/metro.jpg';
import blogger from '../images/images/blogger.jpg';
import game from '../images/images/GAME.jpg';
import { isBrowser, isMobile } from 'react-device-detect';

const Samples = () => {
	useEffect(() => {
		if (isMobile) {
			TweenMax.set('.serviceBoxInner', { y: 0, opacity: 1 });
		} else if (isBrowser) {
			TweenMax.set('.serviceBoxInner', { y: 200, opacity: 0 });
		}
		window.addEventListener('resize', function () {
			if (isMobile) {
				TweenMax.set('.serviceBoxInner', { y: 0, opacity: 1 });
			} else if (isBrowser) {
				TweenMax.set('.serviceBoxInner', { y: 200, opacity: 0 });
			}
		});

		const serviceBox = document.querySelectorAll('.serviceBox');

		for (let i of serviceBox) {
			i.addEventListener('mouseenter', e => {
				TweenMax.to(e.target.children[0], 0.3, {
					y: 0,
					opacity: 1,
					ease: 'Power2.easeOut',
				});
			});
		}

		if (isBrowser) {
			for (let i of serviceBox) {
				i.addEventListener('mouseleave', e => {
					TweenMax.to(e.target.children[0], 0.3, {
						y: 100,
						opacity: 0,
					});
				});
			}
		}
	}, []);

	useEffect(() => {
		let workLinks = document.querySelectorAll('.indent');

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
	}, []);

	return (
		<div className='samples'>
			<div className='mainSectionSamples'>
				<div className='wrapper'>
					<div className='iconwrapper indent'>
						<div alt='link' className='link' />
						<h3 className='samplestitle'>Sample Apps.</h3>
						<span className='underline'></span>
					</div>
				</div>
				<div className='bodySample'>
					<div className='table'>
						<div className='tablewidth'>
							<div className='column'>
								<div className='greybox'></div>
								<div class='serviceBox'>
									<div class='serviceBoxInner'>
										<h2>React Blog Site</h2>
										<p>
											Clean, simple blog site that uses
											Oauth to login to google. Once
											logged in, you are free to create,
											delete, edit blogs! This App uses
											Redux.
										</p>
									</div>
								</div>
								<div className='picture contain'>
									<img src={blogger} alt='blogger' />
								</div>
								<div className='title1'>React</div>
							</div>
							<div className='column'>
								<div className='greybox'></div>
								<div class='serviceBox'>
									<div class='serviceBoxInner'>
										<h2>API Clock</h2>
										<p>
											Written in Vanilla JS, an API clock
											that fetches 3 different times from
											all over the world.
										</p>
									</div>
								</div>
								<div className='picture contain'>
									<img src={clock} alt='clockApp' />
								</div>
								<div className='title1'>Javascript</div>
							</div>
							<div className='column'>
								<div className='greybox'></div>
								<div class='serviceBox'>
									<div class='serviceBoxInner'>
										<h2>API Weather</h2>
										<p>
											Weather App that uses the
											AccuWeather API endpoint to
											establish current weather patterns
											for specfic cities.
										</p>
									</div>
								</div>
								<div className='picture contain'>
									<img src={weather} alt='weatherApp' />
								</div>
								<div className='title1'>REST API</div>
							</div>
							<div className='column'>
								<div className='greybox'></div>
								<div class='serviceBox'>
									<div class='serviceBoxInner'>
										<h2>Respnsive Design</h2>
										<p>
											This barebone's site showcases
											responsive design, using css and
											media queries!
										</p>
									</div>
								</div>
								<div className='picture contain'>
									<img src={gotham} alt='gotham' />
								</div>
								<div className='title1'>CSS</div>
							</div>

							<div className='column'>
								<div className='greybox'></div>
								<div class='serviceBox'>
									<div class='serviceBoxInner'>
										<h2>React Widgets</h2>
										<p>
											Four simple React widgets, that can
											be used as components for different
											apps!
										</p>
									</div>
								</div>
								<div className='picture cover'>
									<img src={tools} alt='tools' />
								</div>
								<div className='title1'>Widget</div>
							</div>
							<div className='column'>
								<div className='greybox'></div>
								<div class='serviceBox'>
									<div class='serviceBoxInner'>
										<h2>Calculator</h2>
										<p>
											This calculator was created using
											React and Context API.
										</p>
									</div>
								</div>
								<div className='picture contain'>
									<img src={calc} alt='calc' />
								</div>
								<div className='title1'>Calc</div>
							</div>
							<div className='column'>
								<div className='greybox'></div>
								<div class='serviceBox'>
									<div class='serviceBoxInner'>
										<h2>Metronome</h2>
										<p>
											This metronome App was created using
											React Hooks and Context API.
										</p>
									</div>
								</div>
								<div className='picture contain'>
									<img src={metro} alt='metro' />
								</div>
								<div className='title1'>Metronome</div>
							</div>
							<div className='column'>
								<div className='greybox'></div>
								<div class='serviceBox'>
									<div class='serviceBoxInner'>
										<h2>Game!</h2>
										<p>
											Vanilla JS game that manipulates
											positonal properties with
											setInterval!
										</p>
									</div>
								</div>
								<div className='picture contain'>
									<img src={game} alt='game' />
								</div>
								<div className='title1'>JS Game</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Samples;
