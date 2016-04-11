
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
// // // sample data
 // console.log(topQuotesSample);

let contentOfPage=1;
let currentPage=1;
let currentUrl='https://hidden-beach-47358.herokuapp.com/api/quotes?page=1';
let defaultUrl='https://hidden-beach-47358.herokuapp.com/api/quotes?page=1';

function getQuotesFromApi(url){

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
        contentOfPage=myTopQuotes.length;
        
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


sortByNew();

//getQuotesFromApi(currentUrl);


$('.searchSubmit').on('click',()=>{searchData($('.searchInput').val() )});
$('.next').on('click',()=>{nextPage()});
$('.previous').on('click',()=>{prevPage()});



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
    console.log('content is '+contentOfPage);
    if (contentOfPage<1){
        currentUrl=defaultUrl;
        currentPage=0
        contentOfPage=2;
    }
    $('main').text('');
    currentPage++
    currentUrl=currentUrl+'&page='+currentPage;
    getQuotesFromApi(currentUrl);
    console.log(currentPage);


};

function prevPage(){
    console.log('content is '+contentOfPage);
    if (contentOfPage<1){
        currentUrl=defaultUrl;
        contentOfPage=2;
        currentPage=2;
    }
    if(currentPage<2){currentPage=2}
    $('main').text('');
    currentPage=currentPage-1;
    currentUrl=currentUrl+'&page='+currentPage;
    getQuotesFromApi(currentUrl);
    console.log(currentPage);

};













