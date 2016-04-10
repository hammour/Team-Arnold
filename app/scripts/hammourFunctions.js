// ////////////
// const TodoListView = Backbone.View.extend({
// 	tagName: 'section',
// 	events: {
// 		'submit .add-todo': 'addTodo'
// 	},
// 	initialize: function() {
// 		this.render();
// 	},
// 	render: function() {
// 		const template = `
// 		<form class="add-todo">
// 			<input type="text" class="todo-text">
// 			<button type="submit">Add Todo</button>
// 		</form>
// 		<ul class="todo-list1"></ul>`;
// 		this.$el.html(template);
// 	},
// 	addTodo: function(e) {
// 		e.preventDefault();
// 		let thingToDo = this.$('.todo-text').val();
// 		let item = new TodoItemView(thingToDo);
// 		this.$('.todo-list1').append(item.$el);
// 	}
// });





// // view using backbone

// const TodoItemView = Backbone.View.extend({
// 	tagName: 'li',
// 	events: {
// 		'click': 'toggleCompletion'
// 	},
// 	className: 'incomplete',
// 	initialize: function(thingToDo) {
// 		this.item = thingToDo;
// 		this.render();
// 	},
// 	render: function() {
// 		this.$el.html(this.item);
// 	},
// 	toggleCompletion: function() {
// 		console.log('test');
// 		this.$el.toggleClass('incomplete complete');
// 	}
// });




// // eTarget....

// $('.clickable').on('click', function(e) {
//   console.log(e.target);
//   var htmlStoredData = ($(e.target).data());
//   console.log(peopleData[htmlStoredData.name])
//   var imgUrl = $(e.target).attr('src')
// })

// var peopleData = {
//   Jess: {
//     age: 32,
//     height: '5\'8"'
//   }
// }


// // Reduce.....

// var products = [
// 	{
// 		id: '13947627834',
// 		name: 'aaa',
// 		price: 100
// 	},
// 	{
// 		id: '94873589',
// 		name: 'bbb',
// 		price: 4
// 	},
// 	{
// 		id: '34875934',
// 		name: 'ccc',
// 		price: 12
// 	},
// 	{
// 		id: '102983984375',
// 		name: 'ddd',
// 		price: 15
// 	}
// ];

// // var result = products.reduce(function(prevousValue, currentValue, index, array) {
// // 	prevousValue[currentValue.id] = currentValue;
// // 	return prevousValue;
// // }, {})

// // console.log(result['13947627834']);

// var totalCost = products.reduce(function(previousValue, currentValue, index, array) {
// 	return previousValue + currentValue.price;
// }, 0);






// // console.log(Backbone);

// const ImageView = Backbone.View.extend({
// 	tagName: 'article',
// 	className: 'image-wrapper',
// 	events: {
// 		'click .delete': 'onDeleteClick'
// 	},
// 	initialize: function(label, src) {
// 		this.label = label;
// 		this.src = src;
// 		this.render();
// 		// console.log(this.$('.delete'));
// 		// this.$('.delete').click(this.onDeleteClick.bind(this));
// 		// this.$('.delete').click(() => {
// 		// 	console.log(this);
// 		// });
// 	},
// 	render: function() {
// 		// console.log(this);
// 		// Create template
// 		const template = `
// 			<div class="image">
// 				<button class="delete">Delete</button>
// 				<img src="${this.src}">
// 				<p>${this.label}</p>
// 			</div>`;
// 		// Put it inside of the view element
// 		this.$el.append(template);
// 		console.log(this.el);
// 	},
// 	onDeleteClick: function() {
// 		this.$el.hide();
// 		this.$el.remove();
// 		console.log(this);
// 		console.log('the delete button was clicked');
// 	}
// });

// const imageInfo = [
// 	{
// 		label: 'Angry Bird Baloon',
// 		src: 'http://static3.businessinsider.com/image/52517a7feab8ea975f3a7ba2/stunning-photos-of-hot-air-balloons-at-the-albuquerque-balloon-fiesta.jpg'
// 	},
// 	{
// 		label: 'Air Baloon Ride',
// 		src: 'http://d2847ql9t214mi.cloudfront.net/wp-content/uploads/2015/03/Best-Destinations-in-India-for-Hot-Air-Balloon-Ride.jpg'
// 	},
// 	{
// 		label: 'Hot Air Baloon Real Image',
// 		src: 'http://www.emilysentourage.org/wp-content/uploads/hot-air-balloon-real-image.jpg'
// 	}
// ];

// imageInfo.forEach((val, index, array) => {
// 	// console.log(val);
// 	let newImageView = new ImageView(val.label, val.src);
// 	$('#image-list').append(newImageView.$el);
// });

// // let angryBirdImage = new ImageView(
// // 	'Angry Bird Baloon',
// // 	'http://static3.businessinsider.com/image/52517a7feab8ea975f3a7ba2/stunning-photos-of-hot-air-balloons-at-the-albuquerque-balloon-fiesta.jpg'
// // );
// // // console.log(angryBirdImage);
// // angryBirdImage.render();
// // let airRide = new ImageView(
// // 	'Air Baloon Ride',
// // 	'http://d2847ql9t214mi.cloudfront.net/wp-content/uploads/2015/03/Best-Destinations-in-India-for-Hot-Air-Balloon-Ride.jpg'
// // );
// // airRide.render();
// // let hotAir = new ImageView(
// // 	'Hot Air Baloon Real Image',
// // 	'http://www.emilysentourage.org/wp-content/uploads/hot-air-balloon-real-image.jpg'
// // );
// // hotAir.render();
// // // console.log(angryBirdImage);

// // $('#image-list').append(angryBirdImage.$el);
// // $('#image-list').append(airRide.$el);
// // $('#image-list').append(hotAir.$el);



// /* jQuery Example */


// // const imageTemplate1 = `
// // <div class="image">
// // 	<button class="delete1">Delete</button>
// // 	<img src="http://static3.businessinsider.com/image/52517a7feab8ea975f3a7ba2/stunning-photos-of-hot-air-balloons-at-the-albuquerque-balloon-fiesta.jpg">
// // 	<p>This is my image caption</p>
// // </div>
// // `;

// // const imageTemplate2 = `
// // <div class="image">
// // 	<button class="delete1">Delete</button>
// // 	<img src="http://d2847ql9t214mi.cloudfront.net/wp-content/uploads/2015/03/Best-Destinations-in-India-for-Hot-Air-Balloon-Ride.jpg">
// // 	<p>This is my image caption</p>
// // </div>
// // `;

// // const imageTemplate3 = `
// // <div class="image">
// // 	<button class="delete1">Delete</button>
// // 	<img src="http://www.emilysentourage.org/wp-content/uploads/hot-air-balloon-real-image.jpg">
// // 	<p>This is my image caption</p>
// // </div>
// // `;


// // $('#image-list').append(imageTemplate1);
// // $('#image-list').append(imageTemplate2);
// // $('#image-list').append(imageTemplate3);

// // $('.delete1').click((e) => {
// // 	console.log('delete image 1');
// // })