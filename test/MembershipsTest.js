import {assert} from 'chai';
import fetch from 'isomorphic-fetch';
import FormData from 'form-data';
import serialize from 'tm-serialize';

const serviceURL = '';

fetch('http://service-users.dev/api/v1/users/login', {

});

describe('Memberships API', function () {
  before(function (done){
    fetch('http://service-users.dev/api/v1/users/login', {
      method: 'POST',
      headers: new Headers({
        'content-type': "application/x-www-form-urlencoded"
      }),
      body: serialize({
        login: 'valentyns@devoffice.com',
        password: 'hjvfirbp'
      })
    }).then(response => {
      return response.json();
    }).then(response => {
      console.log('response', response);
      done();
    }).catch(done);
  });

  it('test', function () {
    assert.equal(true, 1);
  })
});