// custom leaflet / mapbox call

    var mapboxAccessToken = 'pk.eyJ1Ijoib21nY3JlYXRpdmUiLCJhIjoiY2t2MXR1aWlkNnB3dzJvdDlvd3hoeHVubyJ9.Lf2kX5YXQ1IB23ZOXvY9VQ';
    var mymap = L.map('map').setView([-36.5, 145.5], 5);
	// starting position [lng, lat]

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'omgcreative/ckv1v7w9o2s0v14s08mj2o91o',
        // mapbox://styles/omgcreative/ckv1v7w9o2s0v14s08mj2o91o
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

	// L.marker([-36.5, 145.5]).addTo(mymap)
	// 	.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

	// L.circle([-36.5, 145.5], 500, {
	// 	color: 'red',
	// 	fillColor: '#f03',
	// 	fillOpacity: 0.5
	// }).addTo(mymap).bindPopup("I am a circle.");

	// L.polygon([
	// 	// [51.509, -0.08],
	// 	// [51.503, -0.06],
	// 	// [51.51, -0.047]
	// ]).addTo(mymap).bindPopup("I am a polygon.");


	// control that shows state info on hover
	var info = L.control();

	info.onAdd = function (mymap) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<h4>Broadcast Area</h4>' +  (props ?
			'<b>' + props.name + '</b><br />' + props.households.toLocaleString("en-US") + ' Households</b><br />' + props.population.toLocaleString("en-US") + ' Viewers'
			: 'Hover over a region');
	};

	info.addTo(mymap);


	// get color depending on population  value
	function getColor(p) {
		return  p > 7000000 ? '#370617' :
                p > 5000000 ? '#6a040f' :
                p > 3000000 ? '#9d0208' :
                p > 1000000 ? '#d00000' :
				p > 500000  ? '#dc2f02' :
				p > 400000  ? '#e85d04' :
				p > 300000  ? '#f48c06' :
				p > 200000  ? '#FD8D3C' :
				p > 100000   ? '#faa307' :
				p > 50000   ? '#ffba08' :
							'#ffc01e';
    // 370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08-ffc01e
	}


	function style(feature) {
		return {
			weight: 2,
			opacity: 0.2,
			color: '#d00000',
			dashArray: '0',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.population)
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '',
			fillOpacity: 0.2
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}

	var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		mymap.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
        layer.bindPopup("You clicked "+feature.properties.name+ " region");
	}

	geojson = L.geoJson(broadcastData, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(mymap);

    mymap.attributionControl.addAttribution('Broadcast data &copy; <a href="http://prime7.com.au/">Prime7</a>');


	// var popup = L.popup();

	// function onMapClick(e) {
	// 	popup
	// 		.setLatLng(e.latlng)
	// 		.setContent("You clicked the map at " + e.latlng.toString())
	// 		.openOn(mymap);
	// }

	mymap.on('click', onMapClick);
