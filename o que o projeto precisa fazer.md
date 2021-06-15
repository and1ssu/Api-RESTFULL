O  que o projeto precisa fazer ?

Qual a estrutura de dados?
/clients
ID
NOME
TIPOPESSOA
INSCRIÇÃO 'CPF,CNPJ'
ENDEREÇO
BAIRRO
CIDADE
ESTADO
PAIS
NUMERO
COMPLEMENTO

Quais os endpoints?

Resource /clients
(GET) /clients - Listas todos os clientes.
(GET) /clients/:id - Lista clientes pelo id.
(POST) /clients - Cadastra um novo cliente no banco.
(PUT) /clients/:id  - Edita um clientes pelo numero do id. 
(DELETE) /clients/:id - Deleta os clientes pelo numero de id.

Resource /proposals
(GET) /proposals - Listas todos as Propostas.
(GET) /proposals/:id - Lista a proposta pelo id.
(POST) /proposals - Cadastra uma nova proposta no banco.
(PUT) /proposals/:id  - Edita uma proposta pelo numero do id. 
(DELETE) /proposals/:id - Deleta uma proposta pelo numero de id.

Resource /productsandservices

