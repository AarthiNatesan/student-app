import DS from 'ember-data';

export default DS.Model.extend({
    registration: DS.attr(),
    first: DS.attr(),
    last: DS.attr(),
    phone: DS.attr(),
    year: DS.attr(),
    city: DS.attr()
});