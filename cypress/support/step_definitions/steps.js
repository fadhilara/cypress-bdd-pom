import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import ComputerPage from '../../e2e/pages/computerPage/ComputerPage'

const computerPage = new ComputerPage()

beforeEach(() => {
  cy.visit('https://computer-database.gatling.io/computers/', { timeout: 10000 });
});

When('I submit data new computer', () => {
    cy.add_computer("Computer New", "2018-01-01", "2025-01-01")
})

Then('I should success add computer', () => {
    computerPage.verifySuccessCreate()
})

When('I search data computer {string}', (value) => {
  computerPage.clickOnSearchField(value)
  computerPage.clickOnSearchButton()
})

Then('I should success search computer', () => {
  computerPage.verifySuccessSearch()
}) 

When('I update data computer {string}', (value) => {
  computerPage.clickOnSearchField(value)
  computerPage.clickOnSearchButton()
  computerPage.clickOnComputerLink()
  cy.fixture("computer").then(computer => {
    const computer_name_update= computer.computer_name_update
  cy.get('#name').type(computer_name_update);
  computerPage.clickOnSaveButton()
  })
  
})

Then('I should success update computer', () => {
  computerPage.verifySuccessUpdate()
})

When('I delete data computer {string}', (value) => {
  computerPage.clickOnSearchField(value)
  computerPage.clickOnSearchButton()
  computerPage.clickOnComputerLink()
  computerPage.clickOnDeleteButton()
})

Then('I should success delete computer', () => {
  computerPage.verifySuccessDelete()
})
