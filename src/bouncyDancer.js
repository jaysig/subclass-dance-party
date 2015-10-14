var BouncyDancer = function(top,left,timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  $(this.$node).addClass('bouncyDancer');
};
BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;
BouncyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  // retrieve the initial left CSS value
  var start = parseInt(this.$node.css('top'));
  var newPos = start + 20;
  // move right by 20px
  this.$node.css('top', newPos);

};

BouncyDancer.prototype.setPosition = function(top,left) {
  var styleSettings = {
    top: 50,
    left: left
  };

  this.$node.css(styleSettings);
}
