import React, { useEffect } from 'react';
import gsap, { TweenMax, ScrollToPlugin } from 'gsap/all';
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
	gsap.registerPlugin(ScrollToPlugin);

	useEffect(() => {
		const grey = document.querySelectorAll('.greybox');
		// eslint-disable-next-line
		if (isMobile) {
			TweenMax.set('.serviceBoxInner', { y: 0, opacity: 1 });
			for (let i of grey) {
				i.style.opacity = 0.5;
			}
		} else if (isBrowser) {
			TweenMax.set('.serviceBoxInner', { y: 100, opacity: 0 });

			for (let i of grey) {
				i.style.opacity = 0;
			}
		}
		window.addEventListener('resize', function () {
			if (isMobile) {
				TweenMax.set('.serviceBoxInner', { y: 0, opacity: 1 });
				for (let i of grey) {
					i.style.opacity = 0.5;
				}
			} else if (isBrowser) {
				TweenMax.set('.serviceBoxInner', { y: 100, opacity: 0 });
				for (let i of grey) {
					i.style.opacity = 0;
				}
			}
		});

		const serviceBox = document.querySelectorAll('.serviceBox');
		const title1 = document.querySelectorAll('.title1');
		if (isBrowser) {
			for (let i of title1) {
				i.addEventListener('mouseenter', e => {
					TweenMax.to(e.target.parentNode.children[1].children[0], {
						y: 0,
						opacity: 1,
						ease: 'Power2.easeOut',
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0.5,
						duration: 0.03,
					});
				});
			}

			for (let i of title1) {
				i.addEventListener('mouseleave', e => {
					TweenMax.to(e.target.parentNode.children[1].children[0], {
						y: 0,
						opacity: 1,
						ease: 'Power2.easeOut',
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0.5,
						duration: 0.03,
					});
				});
			}

			for (let i of serviceBox) {
				i.addEventListener('mouseenter', e => {
					TweenMax.to(e.target.children[0], {
						y: 0,
						opacity: 1,
						ease: 'Power2.easeOut',
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0.5,
						duration: 0.03,
					});
				});
			}

			for (let i of serviceBox) {
				i.addEventListener('mouseleave', e => {
					TweenMax.to(e.target.children[0], {
						y: 100,
						opacity: 0,
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0,
						duration: 0.03,
					});
				});
			}
		} else {
			for (let i of title1) {
				i.removeEventListener('mouseenter', e => {
					TweenMax.to(e.target.parentNode.children[1].children[0], {
						y: 0,
						opacity: 1,
						ease: 'Power2.easeOut',
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0.5,
						duration: 0.03,
					});
				});
			}

			for (let i of title1) {
				i.removeEventListener('mouseleave', e => {
					TweenMax.to(e.target.parentNode.children[1].children[0], {
						y: 0,
						opacity: 1,
						ease: 'Power2.easeOut',
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0.5,
						duration: 0.03,
					});
				});
			}

			for (let i of serviceBox) {
				i.removeEventListener('mouseenter', e => {
					TweenMax.to(e.target.children[0], {
						y: 0,
						opacity: 1,
						ease: 'Power2.easeOut',
						dutation: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0.5,
						duration: 0.03,
					});
				});
			}

			for (let i of serviceBox) {
				i.removeEventListener('mouseleave', e => {
					TweenMax.to(e.target.children[0], {
						y: 100,
						opacity: 0,
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0,
						duration: 0.03,
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

	const sampler = () => {
		TweenMax.to(window, {
			scrollTo: '#samples',
		});
	};

	const stop = e => {
		e.stopPropagation();
	};

	return (
		<div className='samples'>
			<div className='mainSectionSamples'>
				<div className='wrapper title centering2'>
					<div className='iconwrapper'>
						<div alt='link' className='link goner' />
						<div className='middletest shifter'>
							<h3
								className='samplestitle'
								id='samples'
								onClick={sampler}>
								Sample Apps.
							</h3>
						</div>
						<span className='underline'></span>
					</div>
				</div>
				<div className='bodySample'>
					<div className='table'>
						<div
							className='tablewidth'
							onMouseEnter={e => {
								stop(e);
							}}
							onMouseLeave={e => {
								stop(e);
							}}>
							<a
								rel='noopener noreferrer'
								href='https://boring-murdock-102b51.netlify.app'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>React Blog Site</h2>
											<p>
												Simple site that uses Oauth to
												login to google. Create, delete,
												edit blogs!
											</p>
										</div>
										<div className='divtags'>
											<p>
												Tags: #React #Redux #REST
												#CSS-Modules
											</p>
										</div>
									</div>
									<div className='picture contain'>
										<img src={blogger} alt='blogger' />
									</div>
									<div className='title1'>React</div>
								</div>
							</a>
							<a
								rel='noopener noreferrer'
								href='https://vigorous-leakey-1df838.netlify.app'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>Responsive Design</h2>
											<p>
												This barebone's site showcases
												responsive design, using css and
												media queries!
											</p>
										</div>
										<div className='divtags'>
											<p>Tags: #CSS #Responsive #HTML</p>
										</div>
									</div>
									<div className='picture contain'>
										<img src={gotham} alt='gotham' />
									</div>
									<div className='title1'>CSS</div>
								</div>
							</a>
							<a
								rel='noopener noreferrer'
								href='https://danjhkim.com/Projects/clocker/'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>API Clock</h2>
											<p>
												Written in Vanilla JS, an API
												clock that fetches 3 different
												times from all over the world.
											</p>
										</div>
										<div className='divtags'>
											<p>
												Tags: #CSS #JavaScript #Axios
												#REST
											</p>
										</div>
									</div>

									<div className='picture contain'>
										<img src={clock} alt='clockApp' />
									</div>
									<div className='title1'>Javascript</div>
								</div>
							</a>

							<a
								rel='noopener noreferrer'
								href='https://dreamy-bardeen-9c2d60.netlify.app'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>API Weather</h2>
											<p>
												Weather App that uses the
												AccuWeather API endpoint to
												establish current weather
												patterns for specfic cities.
											</p>
										</div>
										<div className='divtags'>
											<p>Tags: #React #Axios #REST</p>
										</div>
									</div>
									<div className='picture contain'>
										<img src={weather} alt='weatherApp' />
									</div>
									<div className='title1'>REST API</div>
								</div>
							</a>
							<a
								rel='noopener noreferrer'
								href='https://competent-swanson-954803.netlify.app'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>React Widgets</h2>
											<p>
												Four simple React widgets, that
												can be used as components for
												different apps!
											</p>
										</div>
										<div className='divtags'>
											<p>
												Tags: #React #JavaScript #Axios
												#REST
											</p>
										</div>
									</div>
									<div className='picture cover'>
										<img src={tools} alt='tools' />
									</div>
									<div className='title1'>Widget</div>
								</div>
							</a>

							<a
								rel='noopener noreferrer'
								href='https://nervous-archimedes-3e32a4.netlify.app'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>Calculator</h2>
											<p>
												This calculator was created
												using React and Context API.
											</p>
										</div>
										<div className='divtags'>
											<p>
												Tags: #React #JavaScript
												#Context-API
											</p>
										</div>
									</div>
									<div className='picture contain'>
										<img src={calc} alt='calc' />
									</div>
									<div className='title1'>Calc</div>
								</div>
							</a>

							<a
								rel='noopener noreferrer'
								href='https://affectionate-lamport-76560b.netlify.app'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>Metronome</h2>
											<p>
												This metronome App was created
												using React Hooks and Context
												API.
											</p>
										</div>
										<div className='divtags'>
											<p>
												Tags: #React #JavaScript
												#Context-API
											</p>
										</div>
									</div>
									<div className='picture contain'>
										<img src={metro} alt='metro' />
									</div>
									<div className='title1'>Metronome</div>
								</div>
							</a>

							<a
								rel='noopener noreferrer'
								href='https://boring-fermat-3d1a0e.netlify.app/'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>Game!</h2>
											<p>
												Vanilla JS game that manipulates
												positonal properties with
												setInterval!
											</p>
										</div>
										<div className='divtags'>
											<p>Tags: #JavaScript</p>
										</div>
									</div>
									<div className='picture contain'>
										<img src={game} alt='game' />
									</div>
									<div className='title1'>JS Game</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Samples;
