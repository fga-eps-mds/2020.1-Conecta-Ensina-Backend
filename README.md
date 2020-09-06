# 2020.1-Conecta-Ensina-Backend
Backend do projeto Conecta Ensina

## Pré Requisitos do Sistema

O Conecta Ensina ultiliza a plataforma [Docker](https://www.docker.com/what-docker) para a configuração de ambiente, afim de evitar problemas de compatibilidade de sistema. Os passos abaixo podem ser seguidos para executar a aplicação usando a plataforma:

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
