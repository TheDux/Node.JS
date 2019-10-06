"use strict";

var request = require("supertest"),
    expect  = require("chai").expect;

var postAnimal =            
    {
       // "id":0,
        "category": {
            "id":0,
            "name": "peixes"
        },
        "name": "",
        "photoUrls": [
            "string"
        ],
        "tags": [ 
            {
                "id": 0,
                "name": "tubarao-leitoa"
            }
        ],
        "status": "available"
       }
    
var putAnimal =            
       {
          // "id":0,
           "category": {
               "id":0,
               "name": "peixes"
           },
           "name": "",
           "photoUrls": [
               "string"
           ],
           "tags": [ 
               {
                   "id": 0,
                   "name": "tubarao"
               }
           ],
           "status": "available"
          }
const request_timeout = 10000;

const URL = process.env.NODE_ENV;
const PATH_ENDPOINT = '/v2/pet/2'; // integridade referencial, apagar posicao do endpoint quando nao for get

// describe("Testes de Contrato", function() {
//     it("GET no Swagger IO", function(done){
//         this.timeout(request_timeout);
//         request(URL)
//         .get(PATH_LOGIN)
//         //.expect("Content-Type", /json/)
//         .end(function(err, res) {
//             expect(res.status).to.be.eql(200);
//             console.log(res.status);
//             done(err);
//         });
//     });
// });
// describe("Testes de Contrato", function() {
//     it("POST no Swagger IO", function(done){
//         this.timeout(request_timeout);
//         request(URL)
//         .post(PATH_ENDPOINT)
//         .send(postAnimal)
//         .expect("Content-Type", /json/)
//         .end(function(err, res) {
//             expect(res.status).to.be.eql(200);
//             console.log(res.status);
//             console.log("");
//             console.log(res.body);
//             done(err);
//         });
//     });
// });
// describe("Testes de Contrato", function() {
//     it("PUT no Swagger IO", function(done){
//         this.timeout(request_timeout);
//         request(URL)
//         .put(PATH_ENDPOINT)
//         .send(putAnimal)
//         .expect("Content-Type", /json/)
//         .end(function(err, res) {
//             expect(res.status).to.be.eql(200);
//             console.log(res.status);
//             console.log("");
//             console.log(res.body);
//             done(err);
//         });
//     });
// });
// describe("Uma calculadora trabalhando com dois números (A e B)", function() {
//     context("cuja operação é soma", function() {
//         it("deveria somar a quantidade do numero A e numero B", function() {
//         });
//     });
//     context("cuja operação é subtração ", function() {
//         it("deveria subtrair a quantidade do numero A e numero B", function() {
//         });
//     });
// });

// describe("Informação de usuário", function() {
//     context("cuja credenciais são válidas", function() {
//         it("deveria retornar status 200", function() {
//         });
//     });
//     context("cuja credenciais são inválidas", function() {
//         context("por causa de email não cadastrado", function() {
//             it("deveria retornar status erro equivalente a email não cadastrado", function() {
//             });
//         });
//         context("por causa de senha incorreta", function() {
//             it("deveria retornar status equivalente a senha incorreta", function() {
//             });
//         });
//     });
// });

describe("Testes de Contrato", function() {
    it("GET no Swagger IO", function(done){
        this.timeout(request_timeout);
        request(URL)
        .get(PATH_ENDPOINT)
        //.send(putAnimal)
        //.expect("Content-Type", /json/)
        .end(function(err, res) {
            expect(res.status).to.be.eql(200);
            console.log(res.status);
            console.log(res.body);
            done(err);
        });
    });
});