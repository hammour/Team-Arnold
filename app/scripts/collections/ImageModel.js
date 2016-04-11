import Backbone from 'backbone';

const ImageModel = Backbone.Model.extend({
    defaults: {
        
    },
    urlRoot: 'https://hidden-beach-47358.herokuapp.com/api/quotes',
    idAttribute: '_id'
});

export default ImageModel;

// default
// urlRoot
// idAttribute