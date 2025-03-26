# Adegatech Dashboard

O **Adegatech Dashboard** é uma plataforma escalável e automatizada voltada para a gestão de adegas. Com ela, donos de estabelecimentos podem controlar vendas, estoque, pedidos e relatórios de maneira eficiente e centralizada. O objetivo é facilitar a operação diária e oferecer insights sobre o desempenho do negócio.

## Funcionalidades/Futuras funcionalidades

- **Gestão de Produtos e Estoque**: Adicione, edite ou remova itens do estoque diretamente pelo dashboard.
- **Controle de Vendas**: Registre cada venda associada a um funcionário e acompanhe o desempenho individual.
- **Relatórios Automatizados**: Geração de relatórios financeiros (receita, despesas) com exportação para formatos como PDF.
- **Indicadores em Tempo Real**: Acompanhe métricas como faturamento diário, produtos mais vendidos e horários de pico.
- **Histórico de Operações**: Registro detalhado de transações, incluindo data, valor e status.
- **Pagamentos via QR Code/NFC**: Integração para facilitar o pagamento diretamente pelo aplicativo.
- **Alertas em Tempo Real**: Notificações sobre pedidos atrasados, estoque baixo ou metas diárias atingidas.

## Tecnologias Utilizadas

### Frontend
- **React** com **Shadcn** para a interface do dashboard.
- **Hook Forms** e **Zod** para validação e gerenciamento de formulários.
- **Talwind** para customização de estilos.

### Backend
- **Node.js** com **NestJs** para criação da API.
- **Prisma** para consultas ao banco de dados **PostgreSQL**.
- **Docker** para containerização.

### DevOps
- **GitHub Actions** configurado para:
  - Lint nos commits (commitlint).
  - Validação do nome das branches (lint-branch).
  - Execução de testes e jobs (lint-job).

### Infraestrutura
- Em andamento.

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/adegatech-dashboard.git

