import Backbone from 'backbone';
import PersonModel from './person_model';

const APP_ID = 'VusB9MQMRyKf6JjxBcEOAIDGz8881fnoUYkgIwCY';
const API_KEY = 'xj3QqWSrOk1ZJ2uaFT70uBFgqmXE9RndT7Y0olsX';

let sync = Backbone.sync;
Backbone.sync = (method, model, options) => {
    options || (options = {});
    options.headers = {
      'X-Parse-Application-Id': APP_ID,
      'X-Parse-REST-API-Key': API_KEY
    };
    return sync(method,model,options);
};

let PeopleCollection = Backbone.Collection.extend({

    url: 'https://api.parse.com/1/classes/people',

    model: PersonModel,

    parse: function(data) {
      return data.results;
    }

});

export default PeopleCollection
