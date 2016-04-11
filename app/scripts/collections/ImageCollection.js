import Backbone from 'backbone';
import ImageModel from './ImageModel';

const ImageCollection = Backbone.Collection.extend({
    model: ImageModel,
    url: 'https://hidden-beach-47358.herokuapp.com/api/quotes'
});

export default ImageCollection;