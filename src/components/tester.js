let numbers = Math.floor(Math.random() * 4000) + 1000;
let dur = Math.floor(Math.random() * 2);

const lineMove = new TimelineMax({
	repeat: -1,
	repeatRefresh: true,
	duration: 1,
});

// 	// this ensure it doesnt automatically start.
lineMove
	//autoalpha just displays and shows anything hidden
	.to('.transgrow', {
		transform: 'scaleX(0)',
		transformOrigin: 'left',
		duration: 0.5,
	})
	.to(
		'.transgrow',
		{
			transform: 'scaleX(1)',
			transformOrigin: 'left',
			duration: 0.5,
		},
		'nameoflabel',
	)
	.to(
		'.transgrow',
		{
			transform: 'scaleX(1)',
			transformOrigin: 'right',
			duration: 0.5,
		},
		'nameoflabel+=0.25',
	)
	.to('.transgrow', {
		transform: 'scaleX(0)',
		transformOrigin: 'right',
		duration: 0.5,
	});
