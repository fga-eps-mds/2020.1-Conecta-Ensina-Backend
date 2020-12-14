
![conectalogo](.github/img/conecta-logo.png)

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

[![Build Status](https://travis-ci.com/fga-eps-mds/2020.1-Conecta-Ensina-Backend.svg?branch=master)](https://travis-ci.com/fga-eps-mds/2020.1-Conecta-Ensina-Backend)

[![codecov](https://codecov.io/gh/fga-eps-mds/2020.1-Conecta-Ensina-Backend/branch/master/graph/badge.svg?token=XI7IB0NUIO)](https://codecov.io/gh/fga-eps-mds/2020.1-Conecta-Ensina-Backend)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Backend&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Backend) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Backend&metric=bugs)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Backend) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Backend&metric=code_smells)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Backend) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Backend&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Backend) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Backend&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Backend) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Backend&metric=security_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Backend) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Backend&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Backend)


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
