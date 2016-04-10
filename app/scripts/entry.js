
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
// // // sample data
 // console.log(topQuotesSample);

let numberOfPages=0;
let currentPage=1;
let currentUrl='https://hidden-beach-47358.herokuapp.com/api/quotes?page=1';
let defaultUrl='https://hidden-beach-47358.herokuapp.com/api/quotes?page=1';

function getQuotesFromApi(url,pageNumber){

        const QuotesModel = Backbone.Model.extend({
        defaults: {
            
        },
        urlRoot: url,
        idAttribute: '_id'
    });

    const allQuotesCollection = Backbone.Collection.extend({
        model: QuotesModel,
        url: url

    });



    const myTopQuotes = new allQuotesCollection();


      myTopQuotes.fetch({success:function (){
        console.log(myTopQuotes);
        console.log(myTopQuotes.length);
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




getQuotesFromApi(currentUrl);


$('.searchSubmit').on('click',()=>{searchData($('.searchInput').val() )});



function searchData(text){
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
    for (var i = 0; i < specialChars.length; i++) {
        text = text.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    };
    text = text.replace(' ','%20')
    console.log(text);

    $('main').text('');
    let url=currentUrl+'&search='+text;
    getQuotesFromApi(url);
    currentUrl=url;

};



function sortByNew(){
    console.log('sortByNew');
    $('main').text('');
    let url= currentUrl+'&sort=newest';
    getQuotesFromApi(url); 
    currentUrl=url;
};

function sortByOld(){
    console.log('sortByOld');
    $('main').text('');
    let url=currentUrl+'&sort=oldest';
    getQuotesFromApi(url);
    currentUrl=url;
};
function sortByBest(){
    console.log('sortByBest');
    $('main').text('');
    let url=currentUrl+'&sort=best';
    getQuotesFromApi(url);
    currentUrl=url;
};
function filterByCat(cat){
    console.log('filterByCat');
    $('main').text('');
    let url=currentUrl+'&category='+cat;
    getQuotesFromApi(url);
    currentUrl=url;
};
function nextPage(){
    console.log('nextPage');
    $('main').text('');


};

function prevPage(){
    console.log('prevPage');
    $('main').text('');

};

//$('.next').on('click',function(){nextPage()});

//console.log(jQuery.get('https//hidden-beach-47358.herokuapp.com/api/quotes/total_pages'));

// $.get( "https//hidden-beach-47358.herokuapp.com/api/quotes/total_pages", ( data )=> {
//   console.log(data);
// }, "json" );



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












