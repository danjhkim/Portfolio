const grower = document.querySelectorAll('.transgrow');

let numbers = Math.floor(Math.random() * 4000) + 1000;
let dur = Math.floor(Math.random() * 4);
gsap.to('.transgrow', {
	transform: 'scaleX(0)',
	transformOrigin: 'left',
});

var lineMove = new TimelineMax();

grower.map((element, index) => {
	var lineMove = new TimelineMax({
		delay: 1.25,
		repeat: -1,
		duration: 1,
	});
	lineMove
		//autoalpha just displays and shows anything hidden
		.to(element, {
			transform: 'scaleX(0)',
			transformOrigin: 'left',
		})
		.to(element, {
			transform: 'scaleX(1)',
			transformOrigin: 'left',
		})
		.to(element, {
			transform: 'scaleX(1)',
			transformOrigin: 'right',
		})
		.to(element, {
			transform: 'scaleX(0)',
			transformOrigin: 'right',
		});
});

// 	// this ensure it doesnt automatically start.

<div class='serviceBox'>
	<div class='serviceBoxInner'>
		<h2>Respnsive Design</h2>
		<p>This barebone's site showcases responsive design, using css.</p>
	</div>
</div>;
