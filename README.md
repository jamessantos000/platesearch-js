
# PLATE SEARCH - BR

A API de Busca de Dados de Carro por Placa oferece uma solução versátil e eficiente para obter informações detalhadas sobre veículos a partir de suas placas. Projetada para ser utilizada tanto no frontend quanto no backend, a API proporciona acesso simplificado a dados cruciais de carros, tornando-a ideal para uma variedade de aplicações.


## Instalação

Instale platesearch-reactjs com yarn

```bash
  yarn add platesearch-reactjs
```
## Demonstração

```
const { apiPlate } = require("platesearch-reactjs");

async function obterDadosDaPlaca(placa) {
  try {
    const resultado = await apiPlate(placa);
    return resultado;
  } catch (erro) {
    console.error("Erro ao obter dados da placa:", erro);
    throw erro;
  }
}

async function exemploUsoDireto() {
  try {
    const dados = await obterDadosDaPlaca("sua placa aqui");
    console.log(dados);
    // Faça o que for necessário com os dados aqui
  } catch (erro) {
    console.error("Erro ao usar dados diretamente:", erro);
    // Faça o tratamento de erro necessário aqui
  }
}

exemploUsoDireto()
```
## Retorno

Formato: Objeto JSON

    {
        "Marca": "",
        "Modelo": "",
        "Ano": "",
        "Ano Modelo": "",
        "Cor": "",
        "Cilindrada": "",
        "Potencia": "",
        "Combustível": "",
        "Chassi": "",
        "UF": "",
        "Municipio": "",
        "Importado": "",
        "Peso Bruto total": "",
        "Cap. Max. Tração": "",
        "Tipo Veiculo": "",
        "Especie Veiculo": "",
        "Passageiros": "",
        "Segmento": ""
    }

## Licença

[MIT](https://choosealicense.com/licenses/mit/)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](http://linkedin.com/in/jamesstos/)

