var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forage = function() {
	return 'I am too old, let me play cards instead';
};
RetiredForagerBee.prototype.gamble = function(treasure) {
	treasureChest.push(treasure);
};