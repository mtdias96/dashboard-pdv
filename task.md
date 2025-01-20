## MVP

1. Cadastro de Usuário e Adega - **CHECK**

2. Gestão de Produtos (CRUD produtos e categorias) - **CHECK**

3. Controle de Pedidos

   1. Criação de pedidos via aplicativo:
      - O operador adiciona produtos ao pedido.
      - Visualização do total do pedido em tempo real.
      - Registro do método de pagamento (ex.: dinheiro ou cartão).
   2. Listagem dos pedidos realizados:
      - Detalhes como data, valor total e status (concluído/pendente).

4. Dashboard Web
   1. Acompanhamento de vendas em tempo real.
   2. Controle de estoque com alerta de baixa quantidade.
   3. Geração de relatórios financeiros básicos (diário e mensal) em PDF.
   4. Exibição de vendas totais: Incluir métrica de vendas totais no dashboard.
   5. Exibição de histórico de compras: Criar uma seção para visualizar o histórico de compras realizadas.

---

## Dashboard - Home

1. Resumo de Vendas

   1. Faturamento Total: Valor total de vendas do dia, semana ou mês.
   2. Número de Pedidos: Quantidade de pedidos realizados no dia.
   3. Ticket Médio: Valor médio por pedido.
   4. Pedidos Pendentes: Quantidade de pedidos ainda não concluídos.

2. Produtos em Destaque

   1. Mais Vendidos: Lista dos produtos mais vendidos do dia ou mês.
   2. Estoque Crítico: Produtos com baixa quantidade em estoque (ex.: menos de 5 unidades).
   3. Exibição de estoque atual de produtos: Incluir a quantidade de estoque disponível para cada produto no dashboard.

3. Indicadores de Performance

   1. Horários de Pico: Gráfico indicando os horários com maior volume de vendas.
   2. Desempenho por Categoria: Quais categorias de produtos estão vendendo melhor (ex.: vinhos, cervejas, destilados).
   3. Métricas de vendas: Exibir o total de vendas realizadas, de forma gráfica ou tabular.

4. Alerta de estoque baixo:

- Exibir um alerta visual (ex.: cor vermelha ou ícone) quando o estoque de um produto estiver baixo.

---

## Dashboard - Produtos

1. Adicionar mensagem de erro quando produto já existir.
2. Colocar loading para criação.
3. Colocar loading para GET dos produtos.
4. Corrigir a lógica de editar produtos, para que o usuário não possa editar a quantidade dos produtos diretamente na quantidade de produtos, e sim em um input auxiliar que irá pegar a informação da quantidade que o usuário quer adicionar ou remover do estoque do produto.
5. Botão para atualizar estoque: Incluir um botão de "Atualizar Estoque" ao lado da quantidade de produtos para facilitar o processo de alteração de quantidade.

---

## Dashboard - Categoria

1. Deletar categoria.
2. Editar categoria.
3. Adicionar filtro de pesquisa de categoria.

---

## Layout

1. Arrumar efeito seco na transição de produtos.
2. Adicionar indicadores de status de estoque: Exibir ícones ou cores para indicar o status de estoque (ex.: verde para estoque normal, vermelho para estoque baixo).

---

## Bugs - Web

1. Quando o usuário edita o produto, os campos atualizam, mas a imagem antiga continua.
2. Quando deleta todos os produtos, o primeiro ainda aparece no frontend, mas no backend já está deletado.
3. Erros ao atualizar estoque: Corrigir problemas ao tentar adicionar ou remover estoque, garantindo que as alterações sejam refletidas corretamente na interface.

--

## Mobile - Produtos/Categorias

0. Layout inicial
1. Listar todos os produtos:
   - Exibir todos os produtos disponíveis no sistema.
   - Mostrar informações como nome, preço e disponibilidade de estoque.
2. Listar produtos por categorias:
   - Criar filtros para listar produtos por categorias específicas.
   - Exibir informações de categoria na interface (ex.: vinhos, cervejas, destilados).
3. Exibição de quantidade em estoque:
   - Mostrar a quantidade disponível de cada produto no aplicativo.
4. Filtrar produtos por nome ou preço:
   - Adicionar funcionalidades de busca para que o usuário possa filtrar os produtos de acordo com o nome ou intervalo de preço.
5. Adicionar produtos ao pedido:
   - Permitir que o usuário adicione produtos ao pedido diretamente da lista de produtos.

---

## Mobile - Pedido

1. Layout de pedidos:
   - Exibir os produtos adicionados ao pedido de forma clara, com a possibilidade de editar a quantidade.
   - Mostrar o total do pedido, incluindo impostos e descontos, se aplicável.
2. Atualização de quantidade no pedido:
   - Permitir que o usuário altere a quantidade de cada produto no pedido.
3. Método de pagamento:
   - Registrar o método de pagamento (ex.: dinheiro ou cartão).
4. Finalizar pedido:
   - Incluir um botão para finalizar o pedido e enviar para o backend.
5. Visualização do histórico de pedidos:
   - Criar uma seção para visualizar os pedidos anteriores realizados pelo usuário.
6. Alertas de status de pedidos:
   - Exibir status do pedido (ex.: "Concluído", "Pendente") e permitir que o usuário acompanhe o progresso do pedido.
7. Total do pedido em tempo real:
   - Atualizar dinamicamente o total do pedido à medida que os produtos são adicionados ou removidos.

---
