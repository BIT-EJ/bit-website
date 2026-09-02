Website da BIT

Este é o repositório do website da BIT. O projeto utiliza apenas HTML, CSS e JavaScript, além de algumas bibliotecas JavaScript externas.

📁 Estrutura e informações importantes
data/business.json

O arquivo business.json, localizado dentro da pasta data, é utilizado para armazenar o número de telefone atual da BIT.

Ao atualizar o número de telefone nesse arquivo, o valor é atualizado automaticamente em vários locais do site, evitando a necessidade de alterar o número manualmente em cada página.

Importante: sempre que o número de telefone da BIT mudar, atualize o valor nesse arquivo.

📝 Processo Seletivo

As informações referentes ao processo seletivo estão em:

pages/processo-seletivo.html


A página possui duas versões do conteúdo: uma para quando o processo seletivo está aberto e outra para quando está encerrado.

Quando o processo seletivo estiver aberto

Durante o período de inscrições:

Descomente a parte do código que exibe:

O ano do processo seletivo;
O botão "Inscrever-se";
O botão "Acessar edital".

Comente a parte do código que informa que o processo seletivo está encerrado.

Quando o processo seletivo estiver encerrado

Após o término do período de inscrições:

Comente a parte do código que exibe:

O ano do processo seletivo;
O botão "Inscrever-se";
O botão "Acessar edital".

Descomente a parte do código que informa que o processo seletivo está encerrado.

Dessa forma, basta alternar os comentários no arquivo processo-seletivo.html conforme o status atual do processo seletivo.
