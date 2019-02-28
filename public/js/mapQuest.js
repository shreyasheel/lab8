function initMap() {
	// add your code here

	L.mapquest.key = 'bMGZQ3CjRiPP0sMBMUbPbAjFgTCOX0eX'

	var map = L.mapquest.map('map', {
		center: [32.878973, -117.235925],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.878973, -117.235925]).addTo(map);
}