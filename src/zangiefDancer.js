var ZangiefDancer = function(top,left,timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  $(this.$node).addClass('zangiefDancer');
};
ZangiefDancer.prototype = Object.create(Dancer.prototype);
ZangiefDancer.prototype.constructor = ZangiefDancer;
ZangiefDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
