## Introdução para GCES
Este documento tem como objetivo resumir as etapas de DevOps utilizdas no projeto, para que os professores da disciplina de GCES possam entender como foi feito.

## Etapas

### Build
#### Controle de Versão
Para o controle de versão do código é utilizado o Gitub e é onde define-se o conteudo utilizado nos ambientes de Homologação e Produção.

#### Docker
Docker é uma ferramenta que permite empacotar (container) a aplicação em de forma padronizada, para assim funcionar em qualquer lugar. Um Container é a forma de empacotar sua aplicação e suas dependências (bibliotecas) de forma padronizada. 

#### Qualidade de Código
A qualidade e saúde do código é analisada através da ferramenta SonarCloud, que analisa aspectos como complexidade, tamanho de métodos, bugs, code smells, código duplicado, vulnerabilidade, entre outros.

### Continuos Integration
#### Build e Testes
A ferramenta utilizada para a execução dessa etapa é o Travis CI. Nessa parte o código é testado e construído para integrar as alterações realizadas pela equipe. 
Após o build uma imagem Docker é enviada para o Docker Hub. Depois, é aberto um PR para a branch pertinente de acordo com o ambiente (Homologação ou Produção) em que pretende-se fazer o deploy e, logo após. é feito a analise manual do PR.

### Deploy

#### Digital Ocean + Rancher (API)
Após construida a imagem da API essa ser enviada para o Docker Hub, alguns comandos de upgrade de serviço do Rancher são executados no Travis CI e a imagem docker, já dísponivel no Docker Hub,
é atualizada nos hosts da Digital Ocean.

## Ilustração

[![Devops](.github/img/deploy.png)](.github/img/deploy.png)