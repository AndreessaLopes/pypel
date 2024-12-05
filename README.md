
# Pypel: Sistema de Gestão para Papelarias

Pypel é uma plataforma inovadora desenvolvida para facilitar a gestão de papelarias, garantindo eficiência e organização no controle de estoques, vendas e cadastro de produtos. Utilizando a robustez do **Django** e a flexibilidade do **Python**, o Pypel oferece uma experiência otimizada para pequenos e médios negócios do ramo de papelaria.

## Funcionalidades Principais
- **Gerenciamento de Estoque**: Controle completo sobre a entrada e saída de produtos.
- **Cadastro de Produtos e Clientes**: Interface simples para registrar e gerenciar itens e clientes.
- **Relatórios de Vendas**: Visualize e exporte relatórios detalhados para acompanhar o desempenho do negócio.
- **Gestão de Usuários**: Controle de acesso por níveis de permissão (admin, operadores, etc.).

## Tecnologias Utilizadas
- **Backend**: Django (Python)
- **Banco de Dados**: SQLite (ou PostgreSQL)
- **Frontend**: HTML, CSS, JavaScript

## Como Executar o Projeto
1. Clone este repositório:
   ```bash
   git clone git@github.com:AndreessaLopes/pypel.git
   ```
2. Entre no diretório do projeto:
   ```bash
   cd pypel
   ```
3. Crie um ambiente virtual e ative:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/MacOS
   venv\Scripts\activate   # Windows
   ```
4. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
5. Execute as migrações do banco de dados:
   ```bash
   python manage.py migrate
   ```
6. Inicie o servidor:
   ```bash
   python manage.py runserver
   ```

Acesse o site localmente em `http://127.0.0.1:8000/`.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---
Desenvolvido com ❤️ por Andressa Lopes.
