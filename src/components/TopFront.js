import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import designFront from "../images/cover1.json"
import designFrontSmall from "../images/cover1small.json"
import blackboxing from "../images/fader.json"
import lottie from 'lottie-web';

const TopFRont = (props) => {
    const DesignFrontRef = useRef()
    const DesignFrontRefSmall = useRef()
    const blackBox = useRef()
    const [animation2, setAnimation2] = useState()
    const [animation3, setAnimation3] = useState()
    const [animationSmall, setAnimationSmall] = useState()
    const [menuPop, setMenuPop] = useState(false)
    const [running, setRunning] = useState(false)
    const [showIt, setShowIt] = useState(true)
    const [showItBig, setShowItBig] = useState(true)
    gsap.registerPlugin(ScrollToPlugin);

    const openScroll = () => {
        document.body.style.overflowY = "scroll";
    }

      const home = () => {
        gsap.to(window, { duration: 2.5, scrollTo: "#home", ease: "elastic.out(.8, .4)" });
    }

    const bio = () => {
        gsap.to(window, { duration: 2.5, scrollTo: "#one", ease: "elastic.out(.8, .4)" });
    }

    const samples = () => {
        gsap.to(window, { duration: 2.5, scrollTo: "#two", ease: "elastic.out(.8, .4)" });
    }

    const contact = () => {
        gsap.to(window, { duration: 2.5, scrollTo: "#three", ease: "elastic.out(.8, .4)" });
    }

     useEffect(() => {
        if (window.innerHeight > window.innerWidth) {
            setShowIt(true)
            setShowItBig(false)
            openScroll()
        } else {
            setShowItBig(true)
            setShowIt(false)
        }

        window.addEventListener('resize', function () {
            openScroll()
            if (window.innerHeight > window.innerWidth) {
                setShowIt(true)
                setShowItBig(false)
            } else {
                setShowItBig(true)
                setShowIt(false)
            }

            // if (window.innerWidth <= 768) {
            //     setShowIt(true)
            //     setShowItBig(false)
            // } else {
            //     setShowItBig(true)
            //     setShowIt(false)
            // }
        })


        return () => {
               window.removeEventListener('resize', function () {
                   openScroll()
                   if (window.innerHeight > window.innerWidth) {
                       setShowIt(true)
                       setShowItBig(false)
                    } else {
                        setShowItBig(true)
                        setShowIt(false)
                    }
                })
            }
        }, [])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".panel").forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                pin: true,
                pinSpacing: false,
            });
        });

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

        const animation = lottie.loadAnimation({
            container: DesignFrontRef.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: designFront,
            rendererSettings: {
                preserveAspectRatio: 'none',
            }
        })

        const animationSmall = lottie.loadAnimation({
            container: DesignFrontRefSmall.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: designFrontSmall,
            rendererSettings: {
                preserveAspectRatio: 'none',
            }
        })

        const animation2 = lottie.loadAnimation({
            container: blackBox.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: blackboxing,
            rendererSettings: {
                preserveAspectRatio: 'none',
            },
        })

        animation.addEventListener('complete', () => {
            setRunning(false)
            const wait = Math.floor(Math.random() * 4000) + 2000
            setTimeout(() => {
                if (running) {
                    return
                } else {
                    setRunning(true)
                    animation.playSegments([138, 173], true)
                }
            }, wait);

        });

        animationSmall.addEventListener('complete', () => {
            setRunning(false)
            const wait = Math.floor(Math.random() * 4000) + 2000
            setTimeout(() => {
                if (running) {
                    return
                } else {
                    setRunning(true)
                    animationSmall.playSegments([138, 173], true)
                }
            }, wait);

        });

        setAnimation2(animation)
        setAnimation3(animation2)
        setAnimationSmall(animationSmall)

        // eslint-disable-next-line

        return () => {

            animation.removeEventListener('complete', () => {
                setRunning(false)
                const wait = Math.floor(Math.random() * 4000) + 2000
                setTimeout(() => {
                    if (running) {
                        return
                    } else {
                        setRunning(true)
                        animation.playSegments([138, 173], true)
                    }
                }, wait);

            });


            animationSmall.removeEventListener('complete', () => {
                setRunning(false)
                const wait = Math.floor(Math.random() * 4000) + 2000
                setTimeout(() => {
                    if (running) {
                        return
                    } else {
                        setRunning(true)
                        animationSmall.playSegments([138, 173], true)
                    }
                }, wait);
            });

        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (props.introDone === true) {

            setTimeout(() => {
                animation2.play()
            }, 2100)

            setTimeout(() => {
                setMenuPop(true)
            }, 4000)

            setTimeout(() => {
                animation3.play()
                animationSmall.play()
            }, 1500)
        }

    }, [props.introDone, animation2, animation3, animationSmall])

    return (
        <main className="main" id="home">
            <div className={`menuFirst ${showItBig ? null : `gone`}`}>
                <div className={`blackBox ${showItBig ? null : `gone`}`} ref={blackBox}>
                </div>  
                <div className={`innermenu ${showItBig ? `big` : `gone`}`} ref={DesignFrontRef}>
                    <div className={`navMenu ${menuPop ? 'navGrow' : null}`} onClick={(e) => e.stopPropagation()}>
                        <nav className="naver" onClick={openScroll}>
                            <ul>
                                <li>WELCOME</li>
                                <li onClick={bio}>BIO</li>
                                <li onClick={samples}>SAMPLES</li>
                                <li onClick={contact}>CONTACT ME</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={`boxShadow ${menuPop ? 'bigShadowanime' : null}`}></div>
                </div>
            </div>
            <div className={`smallScreen ${showItBig ?`gone` : null}`}>
                <div className={`innermenu ${showIt ? `small` : `gone`}`} ref={DesignFrontRefSmall}>
                    <div className="container">
                        <input id="toggle" type="checkbox" />
                        <label className="toggle-container" htmlFor="toggle">
                            <span className="button-toggle"></span>
                        </label>
                        <nav className="nav">
                            <div className="nav-item" onClick={home}>Dashboard</div>
                            <div className="nav-item" onClick={bio}>History</div>
                            <div className="nav-item" onClick={samples}>Statistics</div>
                            <div className="nav-item" onClick={contact}>Settings</div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="panels">
                <section className="panel one" id="one">
                    one
                </section>
                <section className="panel purple" id="two">
                    three
                </section>
                <section className="panel green" id="three">
                    {/* <lottie-player id="firstLottie" ref={lottiePlayer} className="growForest" style={{ height: "100vh", width: "100vw" }} src="https://assets2.lottiefiles.com/packages/lf20_fx68d81z.json"
                    ></lottie-player> */}
                </section>
            </div>
        </main >
    );
}

export default TopFRont;