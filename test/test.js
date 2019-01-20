const chai     = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
     
chai.use(chaiHttp);      
const expect = chai.expect;


// In this test we are going to test without params and each date string params

describe('Test the TimeStamp Micro-service API, assume API running on ../server.js on port 3000', () => {
    var date_unix, date_utc, date;
    before(function() {
        // runs before all tests in this block 
        // Input of unix must be in seocnd  
        date = new Date().toISOString().split('T')[0];
        date_unix = parseInt( new Date(date).getTime() / 1000);
        date_utc = new Date(date).toUTCString();
      });
    it('Test GET request on Path  /:date_string?(1547959678000) to return UTC and Unix timestamp',  (done) => {
       
        chai.request(server)        
        .get(`/${date_unix}`)
        .then((res) => {  
            
            try{
            
                expect(res).to.have.status(200);
                expect(res.body.unix).to.equal(date_unix * 1000);
                expect(res.body.utc).to.equal(date_utc )  
                
                done();    
            
            }catch(err){                
                done(err);
            }
        }).catch(function(err){
            done(err);                           
        });
    });

    it('Test GET request on Path  /:date_string(2014-12-12) ? to return UTC and Unix timestamp',  (done) => {
       
        chai.request(server)        
        .get(`/${date}`)
        .then((res) => {  
            
            try{
            
                expect(res).to.have.status(200);
                expect(res.body.unix).to.equal(date_unix * 1000);
                expect(res.body.utc).to.equal(date_utc )  
                
                done();    
            
            }catch(err){                
                done(err);
            }
        }).catch(function(err){
            done(err);                           
        });
    });
})
// In this test we are going to test invalid request "/"
  
describe('Test the Micro-Service TimeStamp API for Invalid request, assume API running on ../server.js', () => {

    it('should return 400 if requested parmas are not date format', (done) => {
        
        chai.request(server)        
        .get('/aaa')
        .then((res) => {  
            
            expect(res).to.have.status(400);                  
            done();    

        }).catch(function(err){
            done(err);
        })
    })
    })

