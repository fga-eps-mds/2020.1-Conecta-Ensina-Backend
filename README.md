
![conectalogo](.github/img/conecta-logo.png)

[![Maintainability](https://api.codeclimate.com/v1/badges/67cbc9d136bf5fe45984/maintainability)](https://codeclimate.com/github/fga-eps-mds/2020.1-Conecta-Ensina-Backend/maintainability)

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

[![Build Status](https://travis-ci.com/fga-eps-mds/2020.1-Conecta-Ensina-Backend.svg?branch=master)](https://travis-ci.com/fga-eps-mds/2020.1-Conecta-Ensina-Backend)

[![codecov](https://codecov.io/gh/fga-eps-mds/2020.1-Conecta-Ensina-Backend/branch/master/graph/badge.svg?token=XI7IB0NUIO)](https://codecov.io/gh/fga-eps-mds/2020.1-Conecta-Ensina-Backend)

O Conecta Ensina ultiliza a plataforma [Docker](https://www.docker.com/what-docker) para a configuração de ambiente, afim de evitar problemas de compatibilidade de sistema. Os passos abaixo podem ser seguidos para executar a aplicação usando a plataforma:


## Pré Requisitos do Sistema
 1. Instalação do [Docker](https://docs.docker.com/engine/installation/)
 2. Instalação do [Docker Compose](https://docs.docker.com/compose/install/)
 3. Clone o repositório usando o comando:
 ```
 git clone https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Backend.git
 ```
 4. Crie uma conexao local do docker na sua máquina para que o docker do front e backend possam se comunicar:
 ```
 docker network create network-api
 ```
 5. Crie e inicie os containers dos serviços:

 ```
 docker-compose build
 docker-compose up
 ```

 6. Ao terminar de usar os serviços, user o seguinte comando para para-los:
 ```
 docker-compose down
 ``` 
 
 7. Acesse a aplicação na porta 3333 do seu `browser`: [http://localhost3333]()
