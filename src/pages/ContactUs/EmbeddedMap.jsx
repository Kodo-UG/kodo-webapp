import React from "react";

const EmbeddedMap = () => {
	return (
		<div
			dangerouslySetInnerHTML={{
				__html: `<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="500px" id="gmap_canvas" src="https://maps.google.com/maps?q=Oppegårdsstråket 5 A, lgh 1804, 191 60 Sollentuna&t=&z=16&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co"></a><br><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><a href="https://embedgooglemap.2yu.co/"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div>`,
			}}
		/>
	);
};

export default EmbeddedMap;
