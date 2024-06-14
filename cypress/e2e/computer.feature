Feature: Computer features
  Scenario: Verify success add computer
    When I submit data new computer
    Then I should success add computer

  Scenario: Verify success search computer
    When I search data computer "Atlas Computer"
    Then I should success search computer

  Scenario: Verify success update computer
    When I update data computer "Atlas Computer"
    Then I should success update computer

  Scenario: Verify success delete computer
    When I delete data computer "Atlas Computer"
    Then I should success delete computer 