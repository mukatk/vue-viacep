const ViaCep = {
    install: function (Vue) {
        Vue.prototype.$viaCep = {
            buscarCep: function (cep) {
                return fetch(`https://viacep.com.br/ws/${cep}/json/`, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                .then((response) => response.json())
            }
        }
    }
}

module.exports = ViaCep;