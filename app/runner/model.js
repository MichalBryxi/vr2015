import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  bio: DS.attr('string'),
  twitter: DS.attr('string'),
  facebook: DS.attr('string'),
  mail: DS.attr('string'),

  // hasMany: DS.attr('handover')
});
