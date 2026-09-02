Este é o repositório do website da BIT. O projeto utiliza apenas **HTML/CSS/JS** e algumas bibliotecas JS externas.

## ❖ Estrutura e informações importantes

- `data/business.json`: Esse arquivo é usado para armazenar o número de telefone atual da BIT.
  - Ao atualizar o número de telefone nesse arquivo, o valor é atualizado automaticamente em vários locais do site, evitando a necessidade de alterar o número manualmente em cada página.
  - **Importante:** Sempre que o número de telefone da BIT mudar, atualize o valor nesse arquivo.

---

## ❖ Processo Seletivo

As informações referentes ao processo seletivo estão em: `pages/processo-seletivo.html`.

A página possui duas versões do conteúdo no mesmo arquivo HTML: uma para quando o processo seletivo está encerrado e outra para quando está aberto.

### Quando o processo seletivo estiver aberto:
1. Comente a parte do código que diz respeito a **"inscrições encerradas"**.
2. Descomente a parte do código que diz respeito a **"inscrições abertas"**.

### Quando o processo seletivo estiver encerrado:
1. Comente a parte do código que diz respeito a **"inscrições abertas"**.
2. Descomente a parte do código que diz respeito a **"inscrições encerradas"**.

> **Nota:** Dessa forma, basta alternar os comentários no arquivo `processo-seletivo.html` conforme o status atual do processo seletivo.
