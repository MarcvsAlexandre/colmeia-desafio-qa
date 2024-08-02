const { expect } = require('@playwright/test');

class MainPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('button.button[onclick="openPopup(\'login\')"]');
    this.loginPopup = page.locator('#loginPopup');
    this.loginCloseButton = page.locator('#loginPopup .close');
    this.loginTooltip = page.locator('button.button[onclick="openPopup(\'login\')"] .tooltip');

    this.formButton = page.locator('button.button[onclick="openPopup(\'form\')"]');
    this.formPopup = page.locator('#formPopup');
    this.formCloseButton = page.locator('#formPopup .close');
    this.formTooltip = page.locator('button.button[onclick="openPopup(\'form\')"] .tooltip');
    this.nameField = page.locator('#name');
    this.emailField = page.locator('#loginEmail');
    this.emailFieldForms = page.locator ('#email');
    this.phoneField = page.locator('#phone');
    this.phoneError = page.locator('#phoneError');
    this.messageField = page.locator('#message');
    this.messageError = page.locator('#messageError');

    this.infoButton = page.locator('button.button[onclick="openPopup(\'info\')"]');
    this.infoPopup = page.locator('#infoPopup');
    this.infoCloseButton = page.locator('#infoPopup .close');
    this.infoTooltip = page.locator('button.button[onclick="openPopup(\'info\')"] .tooltip');

    this.loginEmailField = page.locator('#loginEmail');
    this.loginEmailError = page.locator('#loginPopup #emailError');
  }

  async visit() {
    await this.page.goto('/colmeia-qa-teste/');
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async closeLoginPopup() {
    await this.loginCloseButton.click();
  }

  async assertLoginPopupVisible() {
    await expect(this.loginPopup).toBeVisible();
  }

  async assertLoginPopupNotVisible() {
    await expect(this.loginPopup).not.toBeVisible();
  }

  async clickFormButton() {
    await this.formButton.click();
  }

  async closeFormPopup() {
    await this.formCloseButton.click();
  }

  async assertFormPopupVisible() {
    await expect(this.formPopup).toBeVisible();
  }

  async assertFormPopupNotVisible() {
    await expect(this.formPopup).not.toBeVisible();
  }

  async clickInfoButton() {
    await this.infoButton.click();
  }

  async closeInfoPopup() {
    await this.infoCloseButton.click();
  }

  async assertInfoPopupVisible() {
    await expect(this.infoPopup).toBeVisible();
  }

  async assertInfoPopupNotVisible() {
    await expect(this.infoPopup).not.toBeVisible();
  }

  async hoverLoginButton() {
    await this.loginButton.hover();
  }

  async assertLoginTooltipVisible() {
    await expect(this.loginTooltip).toBeVisible();
    await expect(this.loginTooltip).toHaveText('Abrir formulário de login');
  }

  async hoverFormButton() {
    await this.formButton.hover();
  }

  async assertFormTooltipVisible() {
    await expect(this.formTooltip).toBeVisible();
    await expect(this.formTooltip).toHaveText('Abrir formulário de contato');
  }

  async hoverInfoButton() {
    await this.infoButton.hover();
  }

  async assertInfoTooltipVisible() {
    await expect(this.infoTooltip).toBeVisible();
    await expect(this.infoTooltip).toHaveText('Abrir mais informações');
  }

  async fillLoginEmailField(email) {
    await this.loginEmailField.fill(email);
  }

  async assertLoginEmailFieldValue(expectedValue) {
    await expect(this.loginEmailField).toHaveValue(expectedValue);
  }

  async assertLoginEmailErrorVisible(expectedError) {
    await expect(this.loginEmailError).toBeVisible();
    await expect(this.loginEmailError).toHaveText(expectedError);
  }

  async fillNameField(name) {
    await this.nameField.fill(name);
  }

  async fillContactEmailField(email) {
    await this.emailFieldForms.fill(email);
  }

  async fillPhoneField(phone) {
    await this.phoneField.fill(phone);
  }

  async assertPhoneFieldValue(expectedValue) {
    await expect(this.phoneField).toHaveValue(expectedValue);
  }

  async assertPhoneErrorVisible(expectedError) {
    await expect(this.phoneError).toBeVisible();
    await expect(this.phoneError).toHaveText(expectedError);
  }

  async fillMessageField(message) {
    await this.messageField.fill(message);
  }

  async assertMessageFieldValue(expectedValue) {
    await expect(this.messageField).toHaveValue(expectedValue);
  }

  async assertMessageErrorVisible(expectedError) {
    await this.page.waitForSelector('#messageError', { state: 'visible' });
    await expect(this.messageError).toBeVisible();
    await expect(this.messageError).toHaveText(expectedError);
  }

  async fillContactForm(name, email, phone, message) {
    await this.fillNameField(name);
    await this.fillContactEmailField(email);
    await this.fillPhoneField(phone);
    await this.fillMessageField(message);
  }

  async fillEmailField(email) {
    await this.emailField.fill(email);
  }

  async assertEmailFieldValue(expectedValue) {
    await expect(this.emailField).toHaveValue(expectedValue);
  }

  async assertEmailErrorVisible(expectedError) {
    await this.page.waitForSelector('#loginPopup #emailError', { state: 'visible' });
    await expect(this.emailError).toBeVisible();
    await expect(this.emailError).toHaveText(expectedError);
  }
}

module.exports = MainPage;
