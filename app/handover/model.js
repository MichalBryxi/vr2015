import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('string'),
  image: DS.attr('string'),
  duration: DS.attr('number'),
  teamRank: DS.attr('number'),
  teamLost: DS.attr('number'),
  teamTime: DS.attr('number'),
  order: DS.attr('number'),
  length: DS.attr('number'),
  difficulty: DS.attr('number'),

  runner: DS.belongsTo('runner', { async: true })
});
