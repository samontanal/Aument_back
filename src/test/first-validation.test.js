import {expect} from 'chai'
import {got} from 'got'

describe('Status code should be 200', function() {

    it('status code should be 200', async function() {
        var statusCode = await got.get('http://localhost:3000/posts')
                                  .then(response => response.statusCode);

        expect(statusCode).to.equal(200)
    })
  })


  describe('titles must contains hola mundo', function() {

    it('contains hola mund', async function() {

      var expectedTitles = ['Hola mundo CSS','Hola mundo JS', 'Hola mundo JAVA'];
      var actualBody = await got.get('http://localhost:3000/posts')
                                  .then(response => response.body);

                                  actualBody = JSON.parse(actualBody);

      var actualTitles = [];
      for(var i=0; i< expectedTitles.length; i++){
        actualTitles.push(actualBody[i]['title'])
        console.log(actualBody[i]['title'])
      }
      
      expect(actualTitles).to.deep.equal(expectedTitles)

    })
  })


  describe('Tags must contains language name', function() {

    it('tags to contain language name', async function() {

      var expectedTitles = ['CSS','JAVASCRIPT', 'JAVA'];
      var actualBody = await got.get('http://localhost:3000/posts')
                                  .then(response => response.body);

                                  actualBody = JSON.parse(actualBody);

      var actualTitles = [];
      for(var i=0; i< expectedTitles.length; i++){
        actualTitles.push(actualBody[i]['tag'])
        console.log(actualBody[i]['tag'])
      }
      
      expect(actualTitles).to.deep.equal(expectedTitles)

    })
  })

  describe('Endpoint path does not exists', function() {

    it('status code should be 404', async function() {
      var statusCode = await got.get('http://localhost:3000/post')
                                .then(response => response.statusCode);

      expect(statusCode).to.equal(400)
  })
  })