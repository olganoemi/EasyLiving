
 Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "hSXdsFKtxME9a5iViEniOCkAXxdcV0GlcLSUiGsj");


	$('#upload_widget_opener').cloudinary_upload_widget(
			{ cloud_name: 'easyliving', upload_preset: 'n4ejdzb7', 
			 cropping: 'server', 'folder': 'user_photos' },

			function(error, result) { console.log(error, result) });


	$(document).on('cloudinarywidgetsuccess', function(e, data) {

		console.log("Global", e, data); 
		console.log(data);
		picture_url = data[0].url
		console.log(picture_url);
		
	});


	var Image = Backbone.Model.extend({
		url: "https://www.parse.com/apps/easyliving/collections#class/RoomImages",
		initialize: function(){
		

		},defaults: {
			image_url: null,
			url: null
		},
		_parse_class_name: "RoomImages"
	});

	var ImageCollection= Backbone.Collection.extend({
			model: Image,
			_parse_class_name: "RoomImages",
			url: "https://www.parse.com/apps/easyliving/collections#class/RoomImages"
	});



	var imageCollection = new ImageCollection();

	var image = new Image();

			image.set({
				url: 'https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg'
			})
			image.save(null, {
				success: function(resp){
				},error: function(err){
					console.log("error", err);
				}
			});













