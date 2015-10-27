import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import PeopleCollection from './people_collection';
import PersonTemp from './person_template';


let people = new PeopleCollection();

function renderPeople() {
  // Creawting an empty dom node
  let $ul = $('<ul></ul>');

  // Iterate each of the models
  people.each(function(person){

    // Person is an instance of PersonModel
    // Grab raw data from person model
    let data = person.toJSON();
    console.log('data', data);

    //Pass the data to our template
    let $li = PersonTemp(data)
    $ul.append($li);
  });
  $('body').html($ul);
}

people.fetch().then(renderPeople);

console.log('Hello, World');
