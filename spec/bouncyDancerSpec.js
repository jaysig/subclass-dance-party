describe("BouncyDancer", function() {
  var timeBetweenSteps = 5;
  var bouncyDancer;
  var clock;

  beforeEach(function(){
    clock = sinon.useFakeTimers();
    bouncyDancer = new BouncyDancer(30,40, timeBetweenSteps);
  });

  it('should have a jQuery $node object',function(){
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a bouncyDancer class', function() {
  	expect(bouncyDancer.$node.hasClass('bouncyDancer')).to.be.true;
  });

});
