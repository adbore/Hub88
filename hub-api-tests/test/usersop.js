import supertest from 'supertest';
import { expect } from 'chai';

const request = supertest('https://gorest.co.in/public-api/');
const TOKEN = 'adbf505ecb40cbf9857af1291bfcc12ffb8f6da555d152086530fdadb9f217b1';

describe('User', () => {
    let userid;

    describe('POST', () => {
        it('/users', () => {
            const data = {
                email: `kulikuli.garri${Math.floor(Math.random() * 9999)}@gmail.com`,
                name: 'KuliKuli Garri',
                gender: 'female',
                status: 'active',
            };
        
             return request
               .post('users')
               .set("Authorization", `Bearer ${TOKEN}`)
               .send(data)
               .then(res =>{
                    //console.log(res.body);
                    expect(res.body.data).to.deep.include(data);
                    userid = res.body.data.id;
            });
        }); 
    });

    describe('GET', () => {
        it('/users', () => {
            return request
            .get(`users?access-token=${TOKEN}`)
            .then((res) =>{
              expect(res.body.data).to.not.be.empty;
          }); 
      });
  
      it('/users/:id', () => {
        return request
          .get(`users/${userid}?access-token=${TOKEN}`)
          .then((res) =>{
            expect(res.body.data.id).to.eq(userid);
      });
    });

      it(' /users/ with parameters', () => {
          return request.get(`users?access-token=${TOKEN}&page=1&gender=female&status=active`)
          .then((res) =>{
            expect(res.body.data).to.not.be.empty;
            res.body.data.forEach(data => {
             expect(data.gender).to.eq('female');
             expect(data.status).to.eq('active');
             //expect(data.page).to.eq('1');
        });
      });
    });
  });

describe('PUT', () => {
    it('/users/: id', () => {
        const data = {
          status: 'inactive',
          name: `Gbogbo Aiye${Math.floor(Math.random() * 9999)}`
        }
        return request
         .put(`users/${userid}`)
         .set("Authorization", `Bearer ${TOKEN}`)
         .send(data)
         .then(res =>{
         //console.log(res.body);
         expect(res.body.data).to.deep.include(data);
     });
   });
});

describe('DELETE ', () => {
    it('/Users/: id', () => {
        return request
          .delete(`users/${userid}`)
          .set("Authorization", `Bearer ${TOKEN}`)
          .then(res =>{
           expect(res.body.data).to.eq(null);
        });
     });
  });
});

