var player = videojs('videoPlayer',{
	controls: true,
	loop: true,
	fluid: true,
	aspectRatio: '4:3',
	playbackRates: [0.25, 0.5, 1, 1.5, 2,],
	plugins: {
		hotkeys: {
           enableModifiersForNumbers: false,
           }
	}

});
