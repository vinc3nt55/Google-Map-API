
function initMap() {
	// Map options
	const options = {
		zoom: 8,
		center: {lat: 8.482,lng: 124.647} 
	}
	// New map
	const map = new google.maps.Map(document.querySelector('#map'), options);
	// Listen for click on map
	google.maps.event.addListener(map, 'click', () => {
		// Add marker
		addMarker({coords: event.latlng})
	});
	// Array of makers
	const markers = [ {
					coords: {lat: 8.3999984, lng: 124.2833322}, 
				  iconImg: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
				   content: '<h1>Manticao</h1>'},
				   {
				   	coords: {lat: 8.25, lng: 124.4}, content: '<h1>Iligan City</h1>'
				   } ];
	// Loop through markers
	markers.forEach(a => addMarker(a));
		function addMarker(props) {
		// Marker
		const marker = new google.maps.Marker({
			position: props.coords,
			map: map
		});
		// Check for custom icon
		if (props.iconImg) {
			// Set icon image
			marker.setIcon(props.iconImg);
		}
		// Check content
		if (props.content) {
			const infoWindow = new google.maps.InfoWindow({
				content: props.content
			});
			marker.addListener('click', () => {
				infoWindow.open(map, marker);
			});
		}		
	}
}