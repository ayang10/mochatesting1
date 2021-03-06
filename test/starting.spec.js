var assert = require('assert');
var should = require('chai').should();

describe('Basic Mocha Test', function(){
    it('should deal with objects', function(){
        var obj = {name: 'Jon', gender: 'male'};
        var objB = {name: 'Jon', gender: 'male'};

        // obj.should.have.property('name').equal('Jon');
        obj.should.deep.equal(objB); //this will pass it  if it's two of the same array or the same in all aspect

    });
    it('should allow testing nulls', function() {
        var isAmNull = null;
        should.not.exist(isAmNull);
    })
});