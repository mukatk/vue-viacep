# vue-viacep
Plugin em Vue para consulta no Web Service da Via Cep

# Utilizando o plugin
* Instale o pacote do plugin

```
npm i vue-viacep -S
```

* No seu arquivo main, faça a importação do plugin.

```
import ViaCep from 'vue-viacep'
Vue.use(ViaCep);
```
* Invoque a função para busca do CEP desejado
```
this.$viaCep.buscarCep('95860000').then((obj) => {
  console.log(obj)
});
```
