var assert = require('assert');
var authController = require('../../controllers/auth.controller');

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
            assert.equal(false, authController.isAuthorized('admin'));
        })
        it('Should return true if not authorized', function() {
            authController.setRoles(['user', 'admin']);
            assert.equal(true, authController.isAuthorized('admin'));
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
});