O  que o projeto precisa fazer ?
 Clientes
			- Listar os clientes
			- Pegar informações de um cliente
			- Pegar informações de um determinado tipo de pessoa
			- Inserir um cliente
			- Atualizar um cliente
			- Deletar um cliente

Propostas
			- Listar as propostas
			- Pegar informações de uma proposta
			- Pegar informações de um cliente na proposta
			- Inserir uma proposta
			- Atualizar uma proposta
			- Deletar uma proposta

Produtos e Serviços
			- Listar os produtos/serviços
			- Pegar informações de um produto/serviço
			- Pegar informações de um determinado tipo de produto/serviço
			- Pegar informações de uma determinada forma de comercialização
			- Inserir um produto/serviço
			- Atualizar um produto/serviço
			- Deletar um produto/serviço  

 Itens da Proposta 
			- Listar os itens da proposta
			- Pegar informações dos itens da proposta
			- Pegar informações de itens para um determinado produto/serviço
			- Inserir item na proposta
			- Atualizar um item da proposta
			- Deletar um item da proposta                              



Qual a estrutura de dados?
/clients
ID
NOME
TIPOPESSOA
CPF_CNPJ
ENDEREÇO
BAIRRO
CIDADE
ESTADO
PAIS
NUMERO
COMPLEMENTO

/proposals
id
codigo
assunto
data
dataValidade
idCliente

/productsandservice
id
descricao
descritivo
valorVenda			
tipos				
formaComercializacao


/proposalsitem
id
propostaid
produtoid
quantidade
valorUnitario
desconto
valorTotal

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
(GET) /productsandservices - Listas todos os produtos e serviços.
(GET) /productsandservices/:id - Lista os produtos e serviços.
(POST) /productsandservices - Cadastra um produtos e serviços.
(PUT) /productsandservices/:id  - Edita um produtos e serviços pelo numero do id. 
(DELETE) /productsandservices/:id - Deleta produtos e serviços pelo numero de id.



Resource /proposalsitem
(GET) /proposalsitem - Listas todos os itens Propostas.
(GET) /proposalsitem/:id - Lista o item da proposta pelo id.
(POST) /proposalsitem - Cadastra um novo item da proposta no banco.
(PUT) /proposalsitem/:id  - Edita um item da  proposta pelo numero do id. 
(DELETE) /proposalsitem/:id - Deleta um item proposta pelo numero de id.


