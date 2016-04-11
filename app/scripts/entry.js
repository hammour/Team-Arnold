
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
// // // sample data
 // console.log(topQuotesSample);
import ImageCollection from './collections/ImageCollection';

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
            $('.number').html(currentPage);
            
            myTopQuotes.each(function (quote) {
                var imageLink='';
                switch (quote.get('category')) {
                      case 'action':
                        imageLink='action.png';
                        break;
                      case 'scifi':
                        imageLink='sci-fi.png';
                        break;
                      
                      case 'comedy':
                        imageLink='comedy.png';
                        break;
                     
                    };
              
                const template = `
                    <article class= "quote col-sm-12 col-md-6 col-lg-4">
                        <div class="card">
                            <div class="row">
                                <div class="col-sm-2">
                                    <img src="${imageLink}" alt="">
                                </div>
                                <div class="col-sm-8">
                                    <p>${quote.get('quote_body')}</p>
                                </div>
                                <div class="col-sm-2">
                                    <span class="votes">${quote.get('best_votes_count')} votes</span>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <span id="vote${quote.get('id')}" class="view">Vote</span>
                            </div>
                        </div>
                    </article>
                 `;
         
                $('main').append(template);

                });
            // $('.view').on('click',(e)=>{
            //             // console.log(e.target.id);
            //             e.stopPropagation();
            //             var quoteId=(e.target.id).substring(4,(e.target.id).length);
            //             // console.log(quoteId);
            //             // var itemUrl='https://hidden-beach-47358.herokuapp.com/api/quotes/'+quoteId;
            //             // $.get( itemUrl, function( data ) {
            //             //     voteCounter=data.best_votes_count;
            //             //     });
            //             // voteCounter++;
            //             // $.put = function(url, data, callback, type){
 
            //             //     if ( $.isFunction(data) ){
            //             //     type = type || callback,
            //             //     callback = data,
            //             //     data = {}
            //             //     }

            //             //     return $.ajax({
            //             //     url: url,
            //             //     type: 'PUT',
            //             //     success: callback,
            //             //     data: data,
            //             //     contentType: type
            //             //     });
            //             // $.post(itemUrl, {best_votes_coun: voteCounter})
            //                     // }
            //             });
              }});
    }


// $.put = function(url, data, callback, type){
 
//   if ( $.isFunction(data) ){
//     type = type || callback,
//     callback = data,
//     data = {}
//   }
 
//   return $.ajax({
//     url: url,
//     type: 'PUT',
//     success: callback,
//     data: data,
//     contentType: type
//   });
// }

getQuotesFromApi(currentUrl);


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
    cat=cat.toLowerCase();

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


// here is the post part using the same image collection model
const ImageView = Backbone.View.extend({
    tagName: 'main',
    className: '',
    events: {
        'click .delete': 'onDeleteClick'
    },
    initialize: function(label, quote_body, category) {
        this.label = label;
        this.quote_body = quote_body;
        this.category = category;
        this.render();
    },
    render: function() {
        const template = `
            <div>
                <button class="delete">Delete</button>
                <p>"${this.quote_body}"</p>
                <p>"${this.label}"</p>
                <p>"${this.category}"</p>
                
            </div>`;
        this.$el.html(template);
    },
    onDeleteClick: function() {
        this.$el.hide();
        this.$el.remove();
    }
});

let polarBears = new ImageCollection();
var settings = {
    success: function() {
        polarBears.forEach((image) => {
            console.log(image.get('quote_body'));
            console.log(image.get('origin_movie'));
            console.log(image.get('category'));

            let newPolarBearView = new ImageView(
                image.get(''),
                image.get(''),
                image.get('')
            );
            $('.image-list').append(newPolarBearView.el);
        });
    }
};
polarBears.fetch(settings);


//filtering by category
$('.tabs').on('click', (e) => {
    //e.preventDefault();
    $('li').removeClass();
    $(e.target).addClass('active');
    $('.tabs').removeClass('active');
    $('ul').removeClass('active');
    if($(e.target).text()!='All'){filterByCat($(e.target).text());}
        else{getQuotesFromApi(currentUrl);}
    console.log($(e.target).text())
    });


// switching to submit quote page...

$('.menuSubmit').on('click',()=>{
    console.log('clicked Submit')
    $('body').html(submitTempBoody);
    $('form').on('submit', (e) => {
    e.preventDefault();
    let newPolarBear = {
        quote_body: $('#movieQuote').val(),
        category: $('.category').val(),
        origin_movie: $('#movieInput').val()
    };
    polarBears.create(newPolarBear);
    let newPolarBearView = new ImageView(
        newPolarBear.origin_movie,
        newPolarBear.quote_body,
        newPolarBear.category
    );
    location.reload();
    // $('body').html(mainPage);
    // getQuotesFromApi(defaultUrl);
        });
    });

//


const submitTempBoody=`

    <header class="submitHeader">
        <div class="menuToggle">Menu</div>
        <nav class="mainNav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="featured.html">Browse</a></li>
                <li><a href="generate.html">Random</a></li>
                <li><a href="submit.html">Submit</a></li>
            </ul>
        </nav>
            <div class="heroText">
            <h1>Submit Quotes</h1>
            <p class="scroll"></p>
            <p><i class="fa fa-chevron-down"></i></p>
        </div>
    </header>

        <main class="formWrapper">
            <form>
                <div class="inputMovie">
                    <h2>Movie</h2>
                    <input id="movieInput"type="text">
                </div>
                <div class="inputCategory">
                    <h2>Catergory</h2>
                    <div class="cBox">
                        <input type="checkbox" id="cBox1" value="first_checkbox" class="cBox">Action</div>
                    <div class="cBox">
                        <input type="checkbox" id="cBox2" value="second_checkbox" class="cBox">Comedy</div>
                    <div class="cBox">
                        <input type="checkbox" id="cBox3" value="third_checkbox" class="cBox">Sci-Fi</div>
                </div>
                <div class="inputQuote">
                    <h2>Quote</h2>
                    <textarea name="quote" id="movieQuote" cols="30" rows="10"></textarea>
                </div>
                <div class="submitQuote">
                    <input type="submit" class="button">
                </div>
            </form>
        </main>`;

const mainPage=`
    <header class="siteHeader">
        <div class="menuItem">
            <span class="menuToggle">Menu</span>
            <br><br>
            <nav class="mainNav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Browse</a></li>
                    <li><a href="#">Random</a></li>
                    <li><a href="#">Submit</a></li>
                </ul>
            </nav>
        </div>
        <div class="menuItem">
            <span class="menuSubmit">Submit Quote</span>
        </div>
        <section>
            <div class="searchBar">
                <input class="searchInput" type="text">
                <input class="searchSubmit" type="submit" value="Search">
            </div>
        </section>
    </header>
    <nav class="tabs">
        <ul>
            <li class="active">Action</li>
            <li>Comedy</li>
            <li>Sci-Fi</li>
        </ul>
    </nav>
    <div class="filterWrapper">
        <span class="filter">Filter <i class="fa fa-chevron-down filterToggle"></i></span>
        <ul>
            <li>Highest Voted</li>
            <li>Newest</li>
        </ul>
    </div>

    <main>

    </main>
    <div class="selectorWrapper">
        <div class="button pageSelector previous"><i class="fa fa-chevron-left"></i> Previous</div>
        <div id="nextPage" class="button pageSelector next">Next <i class="fa fa-chevron-right"></i></div>
    </div>
    <footer>
        We don't own any of these images.
    </footer>`;











