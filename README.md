<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mafia Gestao-Registro</title>
  <style>
    /* Estilos CSS */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #2c3e50; /* Cor de fundo inspirada na Yakuza */
      color: #fff;
    }
    header {
      background-color: #34495e; /* Cor de fundo do cabeçalho */
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    .container {
      margin: 20px;
      background-color: #34495e; /* Cor de fundo dos contêineres */
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .tab {
      display: none;
    }
    button {
      background-color: #34495e; /* Cor de fundo dos botões */
      color: #fff;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 4px;
      margin: 0 10px;
      transition: background-color 0.3s;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; /* Fonte do botão */
      font-weight: bold; /* Negrito */
    }
    button:hover {
      background-color: #2c3e50; /* Cor de fundo dos botões ao passar o mouse */
    }
    button.active {
      background-color: #2c3e50; /* Cor de fundo dos botões ativos */
    }
    label {
      font-weight: bold;
    }
    input[type="text"],
    input[type="number"],
    select {
      width: calc(100% - 22px);
      padding: 10px;
      margin: 5px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    input[type="password"],
    input[type="submit"] {
      width: calc(100% - 22px);
      padding: 10px;
      margin: 5px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    input[type="submit"] {
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }
    input[type="submit"]:hover {
      background-color: #45a049;
    }
    h2 {
      color: #fff;
      margin-bottom: 10px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background-color: #2c3e50; /* Cor de fundo da tabela */
    }
    th, td {
      padding: 10px;
      border-bottom: 1px solid #fff; /* Cor da borda da tabela */
      text-align: left;
    }
    th {
      background-color: #34495e; /* Cor de fundo do cabeçalho da tabela */
      color: #fff;
    }
  </style>
</head>
<body>

<header>
  <h1 style="font-size: 36px;">Mafia Gestao-Registro</h1>
  <button onclick="openTab(event, 'registro')">Registrar Venda</button>
  <button onclick="openTab(event, 'informacoes')">Informações</button>
</header>

<!-- Aba de Registro de Vendas -->
<div id="registro" class="tab">
  <div class="container">
    <h2>Registrar Venda</h2>
    <!-- Formulário de Registro de Vendas -->
    <form id="formRegistroVendas" action="registrar_venda.php" method="post">
      <label for="vendedor">Vendedor:</label>
      <input type="text" id="vendedor" name="vendedor" required><br><br>
      <label for="mercadoria">Mercadoria:</label>
      <select id="mercadoria" name="mercadoria" required>
        <option value="Desert">Desert</option>
        <option value="AK47">AK47</option>
        <option value="Sniper">Sniper</option>
        <option value="Colete">Colete</option>
        <option value="Dinamite">Dinamite</option>
      </select><br><br>
      <label for="quantidade">Quantidade:</label>
      <input type="number" id="quantidade" name="quantidade" required><br><br>
      <label for="preco">Preço Negociado:</label>
      <input type="number" id="preco" name="preco" required><br><br>
      <button type="submit">Registrar</button>
    </form>
  </div>
</div>

<!-- Aba de Informações -->
<div id="informacoes" class="tab" style="display: none;">
  <div class="container">
    <h2>Informações</h2>
    <table>
      <tr>
        <th>Mercadoria</th>
        <th>Preço</th>
        <th>Munição</th>
      </tr>
      <tr>
        <td>Desert</td>
        <td>8,000</td>
        <td>20 balas</td>
      </tr>
      <tr>
        <td>AK47</td>
        <td>20,000</td>
        <td>100 balas</td>
      </tr>
      <tr>
        <td>Sniper</td>
        <td>50,000</td>
        <td>20 balas</td>
      </tr>
      <tr>
        <td>Colete</td>
        <td>5,000</td>
        <td>1 unidade</td>
      </tr>
      <tr>
        <td>Dinamite</td>
        <td>10,000</td>
        <td>1 unidade</td>
      </tr>
    </table>
  </div>
</div>

<script>
  // Função para abrir abas
  function openTab(event, tabName) {
    // Ocultar todas as abas
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }

    // Obter o conteúdo da aba a ser exibida e mostrá-lo
    const content = document.getElementById(tabName);
    content.style.display = "block";
  }
</script>

</body>
</html>
