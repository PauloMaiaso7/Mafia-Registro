// Funções para abrir abas
function openTab(event, tabName) {
  // Ocultar todas as abas
  const tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Mostrar a aba selecionada
  const content = document.getElementById(tabName);
  content.style.display = "block";
}

// Funções para gerenciar registros de vendas
// Outras funções e lógica do JavaScript...
