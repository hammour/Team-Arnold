
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
// // // sample data
 // console.log(topQuotesSample);

function getQuotesFromApi(url){

        const QuotesModel = Backbone.Model.extend({
        defaults: {
            src: 'https://www.drphillipscenter.org/resources/images/default.jpg',
            caption: 'No Image Available'
        },
        urlRoot: url,
        idAttribute: '_id'
    });

    const allQuotesCollection = Backbone.Collection.extend({
        model: QuotesModel,
        url: url

    });

    var newArray=[];

    const myTopQuotes = new allQuotesCollection();


      myTopQuotes.fetch({success:function (){
        console.log(myTopQuotes);

        myTopQuotes.each(function (quote) {
            
          
            const template = `
                <article class= "quote col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="row">
                            <div class="col-sm-2">
                                <img src="${quote.get('quote_image')}" alt="">
                            </div>
                            <div class="col-sm-8">
                                <p>${quote.get('quote_body')}</p>
                            </div>
                            <div class="col-sm-2">
                                <span class="votes">${quote.get('best_votes_count')} votes</span>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <span class="view">View</span>
                        </div>
                    </div>
                </article>
             `;

            $('main').append(template);
        })
      }});
}




getQuotesFromApi('https://hidden-beach-47358.herokuapp.com/api/quotes');


$('.searchSubmit').on('click',()=>{searchData($('.searchInput').val() )});

function searchData(text){
    $('main').text('');
    let url='https://hidden-beach-47358.herokuapp.com/api/quotes?search='+text;
    getQuotesFromApi(url);

};







// var quoteView = Backbone.View.extend({
// 	tagName: 'article',
// 	className: 'quote col-sm-12 col-md-6 col-lg-4',
// 	// events: {
// 	// 	// 'submit .view': 'quoteCanv'
// 	// },
// 	initialize: function(quoteObject) {
//         this.quoteObject = quoteObject;
//         this.render();
		 
// 	},
// 	render: function() {
// 		const template = `
        
//             <div class="card">
//                 <div class="row">
//                     <div class="col-sm-2">
//                         <img src="${this.quoteObject.quote_image}" alt="">
//                     </div>
//                     <div class="col-sm-8">
//                         <p>${this.quoteObject.quote_body}</p>
//                     </div>
//                     <div class="col-sm-2">
//                         <span class="votes">${this.quoteObject.best_votes_count} votes</span>
//                     </div>
//                 </div>
//                 <div class="col-sm-12">
//                     <span class="view">View</span>
//                 </div>
//             </div>
//          `;

// 		this.$el.html(template);
// 	},
// 	quoteCanv: function(e) {
// 		e.preventDefault();
		
// 	}
// });

// topQuotesSample.forEach((element)=>{
//     var quote = new quoteView(element);
//     $('main').append(quote.$el);
// });





//console.log(topQuotesSample[0]);












