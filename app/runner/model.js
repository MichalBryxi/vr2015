import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  bio: DS.attr('string'),
  twitter: DS.attr('string'),
  facebook: DS.attr('string'),
  mail: DS.attr('string'),
  avatar: DS.attr('string'),

  handover: DS.hasMany('handover', { async: true }),

  fullName: function () {
    return this.get('first_name') + ' ' + this.get('last_name');
  }.property('first_name', 'last_name'),

  initials: function () {
    return (this.get('first_name').charAt(0) + this.get('last_name').charAt(0)).toUpperCase();
  }.property('first_name', 'last_name')
});
