var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var should = require('chai').should(); //if you don't execute it then you will just function back
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe('AuthController', function(){
    beforeEach(function settingUpRoles(){
        console.log('running before each');
        authController.setRoles(['user']);
    });
    // beforeEach('this function is running intentionally', function erroringFunction(){
    //     throw({error: 'error'})
    // });
    describe('isAuthorized', function(){ //can use describe.only to run only this or describe.skip to skip if it's causing a build error
        it('Should return false if not authorized', function() {
            authController.setRoles(['user']);
            var isAuth = authController.isAuthorized('admin');
            expect(isAuth).to.be.false;
        })
        it('Should return true if not authorized', function() {
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorized('admin');
            isAuth.should.be.true;
        })
        it('should not allow a get if not authorized'); //can just drop these in here to remind yourself to go back and do
        it('should allow get if authorized'); //can just drop these in here to remind yourself to go back and do
    })
    describe('isAuthorizedAsync', function(){
     
        it('Should return false if not authorized', function(done) {
            authController.setRoles(['user']);
            authController.isAuthorizedAsync('admin', 
            function(isAuth){
                assert.equal(false, isAuth);
                done();
            });
        })
    })
    describe('isAuthorizedPromise', function(){
        
           it('Should return false if not authorized', function() {
              return authController.isAuthorizedPromise('admin').should.eventually.be.false;
           })
       })
});