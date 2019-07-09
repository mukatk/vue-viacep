const Vue = require('vue/dist/vue')
const ViaCep = require('../index');

Vue.use(ViaCep);

describe('Teste plugin Via CEP', () => {
    const mockSuccessResponse = {
        cep: '01001-000',
        logradouro: 'Praça da Sé',
        complemento: 'lado ímpar',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        unidade: '',
        ibge: '3550308',
        gia: '1004'
      };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    window.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    test('Testando a busca de CEP', async () => {
        const vm = new Vue({
            template: '<span></span>'
        }).$mount();
    
        await vm.$viaCep.buscarCep('01001000').then((obj) => {
            const {uf, localidade} = obj;
            
            expect(uf).toBe('SP');
            expect(localidade).toBe('São Paulo');
        })
    })
})