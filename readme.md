# Testes automatizados utilizando Playwright


npm ou yarn para instalar as dependências do projeto:

```npm install```

Configure o Playwright

```npx playwright install```

Para rodar os testes, utilize o seguinte comando:

```npx playwright test```


```/
├── page/
│   └──  mainPage.js
├── tests/
│   └──  HomePage.spec.js
├── node_modules/
├── .gitignore
├── package.json
├── playwright.config.js
├── README.md
```

## Detalhe do desafio:

Teste 3 – Framework

Este teste tem por objetivo a avaliação do seu conhecimento em testes automatizados. Você pode utilizar seu framework de preferência. Dê preferencia para a linguagem JavaScript, porém, caso se sinta mais confortável com outra linguagem para realizar o teste, você poderá utilizá-la.

IMPORTANTE: Favor nos informe o framework utilizado e nos envie o código que você criou para a resolução deste teste.

# Instruções para Testes de QA
Visite a url (https://colmeia-cx.github.io/colmeia-qa-teste/)
## **1. Teste de Pop-ups**

### **1.1. Teste de Pop-up de Login**

**Objetivo:** Verificar se o pop-up de login abre e fecha corretamente.

**Passos:**
1. Na página principal, clique no botão "Login".
2. Verifique se o pop-up de login (`#loginPopup`) está visível.
3. Feche o pop-up clicando no botão de fechar (`#loginPopup .close`).
4. Confirme que o pop-up de login não está mais visível.

**Resultado Esperado:**
- O pop-up de login deve aparecer quando o botão "Login" for clicado.
- O pop-up deve desaparecer quando o botão de fechar for clicado.

### **1.2. Teste de Pop-up do Formulário de Contato**

**Objetivo:** Verificar se o pop-up do formulário de contato abre e fecha corretamente.

**Passos:**
1. Na página principal, clique no botão "Formulário".
2. Verifique se o pop-up do formulário de contato (`#formPopup`) está visível.
3. Feche o pop-up clicando no botão de fechar (`#formPopup .close`).
4. Confirme que o pop-up do formulário de contato não está mais visível.

**Resultado Esperado:**
- O pop-up do formulário de contato deve aparecer quando o botão "Formulário" for clicado.
- O pop-up deve desaparecer quando o botão de fechar for clicado.

### **1.3. Teste de Pop-up de Mais Informações**

**Objetivo:** Verificar se o pop-up de mais informações abre e fecha corretamente.

**Passos:**
1. Na página principal, clique no botão "Mais Info".
2. Verifique se o pop-up de mais informações (`#infoPopup`) está visível.
3. Feche o pop-up clicando no botão de fechar (`#infoPopup .close`).
4. Confirme que o pop-up de mais informações não está mais visível.

**Resultado Esperado:**
- O pop-up de mais informações deve aparecer quando o botão "Mais Info" for clicado.
- O pop-up deve desaparecer quando o botão de fechar for clicado.

## **2. Teste de Tooltips**

### **2.1. Exibição de Tooltips**

**Objetivo:** Verificar se os tooltips aparecem ao passar o mouse sobre os botões.

**Passos:**
1. Passe o mouse sobre o botão "Login".
2. Verifique se o tooltip contendo "Abrir formulário de login" está visível.
3. Passe o mouse sobre o botão "Formulário".
4. Verifique se o tooltip contendo "Abrir formulário de contato" está visível.
5. Passe o mouse sobre o botão "Mais Info".
6. Verifique se o tooltip contendo "Abrir mais informações" está visível.

**Resultado Esperado:**
- Cada botão deve exibir o tooltip correspondente quando o mouse é passado sobre ele.

## **3. Validação de Campos do Formulário**

### **3.1. Validação do Campo de E-mail no Formulário de Login**

**Objetivo:** Verificar a validação do campo de e-mail no formulário de login.

**Passos:**
1. Na página principal, clique no botão "Login".
2. No campo de e-mail (`#loginEmail`), insira o e-mail "teste@exemplo.com".
3. Verifique se o e-mail é exibido corretamente no campo.

**Resultado Esperado:**
- O campo de e-mail deve aceitar e exibir o e-mail inserido corretamente.

### **3.2. Erro para E-mail Inválido**

**Objetivo:** Verificar a exibição de erro para e-mail inválido no formulário de login.

**Passos:**
1. Na página principal, clique no botão "Login".
2. No campo de e-mail (`#loginEmail`), insira o e-mail "teste@exemplo".
3. Verifique se a mensagem de erro "Por favor, insira um endereço de email válido" é exibida.

**Resultado Esperado:**
- Uma mensagem de erro deve ser exibida para o e-mail inválido.

### **3.3. Validação do Campo de Telefone no Formulário de Contato**

**Objetivo:** Verificar a validação do campo de telefone no formulário de contato.

**Passos:**
1. Na página principal, clique no botão "Formulário".
2. No campo de telefone (`#phone`), insira o número "123456789".
3. Verifique se o número é exibido corretamente no campo.

**Resultado Esperado:**
- O campo de telefone deve aceitar e exibir o número inserido corretamente.

### **3.4. Erro para Telefone Inválido**

**Objetivo:** Verificar a exibição de erro para números de telefone inválidos no formulário de contato.

**Passos:**
1. Na página principal, clique no botão "Formulário".
2. Teste o campo de telefone (`#phone`) com os seguintes valores e verifique as mensagens de erro:
   - Insira "123" e verifique se a mensagem "Número de telefone deve ter exatamente 9 dígitos" é exibida.
   - Insira "1234567890" e verifique se a mensagem "Número de telefone deve ter exatamente 9 dígitos" é exibida.
   - Insira "abcdefghi" e verifique se a mensagem "Número de telefone deve conter apenas números" é exibida.

**Resultado Esperado:**
- Mensagens de erro apropriadas devem ser exibidas para números de telefone inválidos.

### **3.5. Validação do Campo de Mensagem no Formulário de Contato**

**Objetivo:** Verificar a validação do campo de mensagem (`#message`) no formulário de contato.

**Passos:**
1. Na página principal, clique no botão "Formulário".
2. No campo de mensagem, insira uma mensagem com menos de 400 caracteres e verifique se a mensagem é exibida corretamente.
3. No campo de mensagem, insira uma mensagem com mais de 400 caracteres e verifique se a mensagem de erro "Mensagem não pode exceder 400 caracteres" é exibida.

**Resultado Esperado:**
- O campo de mensagem deve aceitar até 400 caracteres e exibir a mensagem de erro apropriada para mensagens que excedem esse limite.




