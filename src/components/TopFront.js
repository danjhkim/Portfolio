import React, { useEffect, useRef, useState } from 'react'
import gsap, { TweenMax } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { create } from '@lottiefiles/lottie-interactivity';
import * as LottiePlayer from '@lottiefiles/lottie-player';
import designFront from "../images/cover1"
import blackboxing from "../images/fader.json"
import lottie from 'lottie-web';

const TopFRont = (props) => {
    const lottiePlayer = useRef()
    const DesignFrontRef = useRef()
    const blackBox = useRef()
    const navy = useRef()
    const [animation2, setAnimation2] = useState()
    const [animation3, setAnimation3] = useState()
    const [menuPop, setMenuPop] = useState(false)
    const [running, setRunning] = useState(false)
    const [ranOnce, setRanOnce] = useState(true)

    useEffect(() => {
        console.log(props.introDone)
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

        create({
            mode: 'scroll',
            player: '#firstLottie',
            actions: [
                {
                    visibility: [0, 1],
                    type: 'seek',
                    frames: [0, 50],
                },
            ],


        });

        const animation = lottie.loadAnimation({
            container: DesignFrontRef.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: designFront,
            // the path to the animation json
            rendererSettings: {
                preserveAspectRatio: 'none'
            }
        })

        const animation2 = lottie.loadAnimation({
            container: blackBox.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: blackboxing, // the path to the animation json
            rendererSettings: {
                preserveAspectRatio: 'none'
            },
        })

        animation.addEventListener('complete', () => {
            setRunning(false)
            const wait = Math.floor(Math.random() * 5000) + 2000
            setTimeout(() => {
                if (running) {
                    return
                } else {
                    setRunning(true)
                    animation.playSegments([138, 173], true)
                }
            }, wait);

        });

        setAnimation2(animation)
        setAnimation3(animation2)

        return () => {
            animation.removeEventListener('complete', (e) => {
                console.log(e);
            });
        }
    }, [])

    useEffect(() => {
        if (props.introDone === true) {

            setTimeout(() => {
                animation2.play()
                setRanOnce(true)
            }, 2100)

            setTimeout(() => {
                setMenuPop(true)
            }, 4000)

            setTimeout(() => {
                animation3.play()
            }, 1500)
        }
    }, [props.introDone])

    return (
        <main>
            <div className="menuFirst">
                <div className="blackBox" ref={blackBox}>
                </div>
                <div className={`innermenu`} ref={DesignFrontRef}>
                    <div className={`navMenu ${menuPop ? 'navGrow' : null}`} ref={navy}>
                        <nav>
                            <ul>
                                <li>WELCOME</li>
                                <li>BIO</li>
                                <li>SAMPLES</li>
                                <li>Contact ME</li>
                            </ul>

                        </nav>
                    </div>
                    <div className={`boxShadow ${menuPop ? 'bigShadowanime' : null}`}></div>
                </div>
            </div>

            <div className="panels">
                <section className="panel white">
                    two
                </section>
                <section className="panel purple">
                    three
                </section>
                <section className="panel green">
                    <lottie-player id="firstLottie" ref={lottiePlayer} className="growForest" style={{ height: "100vh", width: "100vw" }} src="https://assets2.lottiefiles.com/packages/lf20_fx68d81z.json"
                    ></lottie-player>
                </section>
            </div>
        </main >
    );
}

export default TopFRont;