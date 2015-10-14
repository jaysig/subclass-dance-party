describe("zangiefDancer", function() {
  var timeBetweenSteps = 5;
  var zangiefDancer;
  var clock;

  beforeEach(function(){
    clock = sinon.useFakeTimers();
    zangiefDancer = new ZangiefDancer(30,40, timeBetweenSteps);
  });

  it('should have a jQuery $node object',function(){
    expect(zangiefDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a zangiefDancer class', function() {
  	expect(zangiefDancer.$node.hasClass('zangiefDancer')).to.be.true;
  });

});
