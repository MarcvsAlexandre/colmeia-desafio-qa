// playwright/tests/loginPopup.spec.js
const { test } = require('@playwright/test');
const MainPage = require('../page/mainPage');

test.describe('1. Teste de Pop-ups', () => {
  test('1.1. Teste de Pop-up de Login', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.visit();

    // Clicar no botão "Login"
    await mainPage.clickLoginButton();

    // Verificar se o pop-up de login está visível
    await mainPage.assertLoginPopupVisible();

    // Fechar o pop-up de login
    await mainPage.closeLoginPopup();

    // Confirmar que o pop-up de login não está mais visível
    await mainPage.assertLoginPopupNotVisible();
  });



  test('1.2. Teste de Pop-up do Formulário de Contato', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.visit();

    // Clicar no botão "Formulário"
    await mainPage.clickFormButton();

    // Verificar se o pop-up do formulário de contato está visível
    await mainPage.assertFormPopupVisible();

    // Fechar o pop-up do formulário de contato
    await mainPage.closeFormPopup();

    // Confirmar que o pop-up do formulário de contato não está mais visível
    await mainPage.assertFormPopupNotVisible();
  });

  test('1.3. Teste de Pop-up de Mais Informações', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.visit();

    // Clicar no botão "Mais Info"
    await mainPage.clickInfoButton();

    // Verificar se o pop-up de mais informações está visível
    await mainPage.assertInfoPopupVisible();

    // Fechar o pop-up de mais informações
    await mainPage.closeInfoPopup();

    // Confirmar que o pop-up de mais informações não está mais visível
    await mainPage.assertInfoPopupNotVisible();
  });
});

test.describe('2. Teste de Tooltips', () => {
  test('2.1. Exibição de Tooltips', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.visit();

    // Passar o mouse sobre o botão "Login" e verificar o tooltip
    await mainPage.hoverLoginButton();
    await mainPage.assertLoginTooltipVisible();

    // Passar o mouse sobre o botão "Formulário" e verificar o tooltip
    await mainPage.hoverFormButton();
    await mainPage.assertFormTooltipVisible();

    // Passar o mouse sobre o botão "Mais Info" e verificar o tooltip
    await mainPage.hoverInfoButton();
    await mainPage.assertInfoTooltipVisible();
  });

  test.describe('3. Validação de Campos do Formulário', () => {
  test('3.1. Deve aceitar e exibir o e-mail inserido corretamente', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.visit();
    await mainPage.clickLoginButton();

    // Inserir e-mail válido
    const validEmail = 'teste@exemplo.com';
    await mainPage.fillEmailField(validEmail);

    // Verificar se o e-mail é exibido corretamente no campo
    await mainPage.assertEmailFieldValue(validEmail);
  });

 
    test('3.2. Deve exibir mensagem de erro para e-mail inválido', async ({ page }) => {
      const mainPage = new MainPage(page);

      await mainPage.visit();
      await mainPage.clickLoginButton();

      // Inserir e-mail inválido
      const invalidEmail = 'teste@exemplo';
      await mainPage.fillLoginEmailField(invalidEmail);

      // Verificar se a mensagem de erro é exibida
      const expectedError = 'Por favor, insira um endereço de email válido. Os formatos aceitos são: exemplo@gmail.com, exemplo@gmail.com.br, ou exemplo@colmeia.cx.';
      await mainPage.assertLoginEmailErrorVisible(expectedError);
    });
  });

});

test('3.3. Deve aceitar e exibir o número de telefone inserido corretamente', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.visit();
  await mainPage.clickFormButton();

  // Inserir número de telefone
  const phoneNumber = '123456789';
  await mainPage.fillPhoneField(phoneNumber);

  // Verificar se o número de telefone é exibido corretamente no campo
  await mainPage.assertPhoneFieldValue(phoneNumber);
});

test('3.4. Deve exibir mensagem de erro para número de telefone com caracteres não numéricos', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.visit();
  await mainPage.clickFormButton();

  // Preencher campos obrigatórios antes de inserir números de telefone inválidos
  await mainPage.fillNameField('Nome Teste');
  await mainPage.fillContactEmailField('teste@exemplo.com');

  // Inserir número de telefone inválido (caracteres não numéricos)
  const invalidPhoneNumber = 'abcdefghi';
  const expectedError = 'Por favor, insira um número de telefone válido. Formatos aceitos: +1234567890, 1234567890 (internacional e nacional).';
  await mainPage.fillPhoneField(invalidPhoneNumber);
  await mainPage.assertPhoneErrorVisible(expectedError);
});

test.describe('Validação do Campo de Mensagem no Formulário de Contato', () => {
  test('Deve aceitar e exibir a mensagem inserida corretamente', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.visit();
    await mainPage.clickFormButton();

    // Preencher campos obrigatórios antes de inserir a mensagem
    await mainPage.fillNameField('Nome Teste');
    await mainPage.fillContactEmailField('teste@exemplo.com');
    await mainPage.fillPhoneField('123456789');

    // Inserir mensagem válida (menos de 400 caracteres)
    const validMessage = 'Esta é uma mensagem de teste válida com menos de 400 caracteres.';
    await mainPage.fillMessageField(validMessage);

    // Verificar se a mensagem é exibida corretamente no campo
    await mainPage.assertMessageFieldValue(validMessage);
  });

  test('3.5 Deve exibir mensagem de erro para mensagem muito longa', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.visit();
    await mainPage.clickFormButton();

    // Preencher campos obrigatórios antes de inserir a mensagem
    await mainPage.fillNameField('Nome Teste');
    await mainPage.fillContactEmailField('teste@exemplo.com');
    await mainPage.fillPhoneField('123456789');

    // Inserir mensagem inválida (mais de 400 caracteres)
    const invalidMessage = 'a'.repeat(401);
    await mainPage.fillMessageField(invalidMessage);

    // Verificar se a mensagem de erro é exibida
    const expectedError = 'Mensagem não pode exceder 400 caracteres';
    await mainPage.assertMessageErrorVisible(expectedError);
  });
});

