export default function(){
  this.transition(
    this.hasClass('spinner'),

    // this.toValue(true),
    this.use('toLeft', {duration: 30000}),
    this.reverse('toRight', {duration: 30000})
  );

  this.transition(
    this.toRoute('layout/propositions'),
    this.use('crossFade')
  );
  this.transition(
    this.toRoute('layout/photos'),
    this.use('crossFade')
  );
  this.transition(
    this.toRoute('layout/team'),
    this.use('crossFade')
  );
  this.transition(
    this.toRoute('layout/map'),
    this.use('crossFade')
  );
  this.transition(
    this.toRoute('handovers'),
    this.use('crossFade')
  );
  this.transition(
    this.toRoute('handovers.new'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  this.transition(
    this.toRoute('handover.edit'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
