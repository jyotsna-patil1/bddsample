# @author	Jyotsna p

Feature: Search deatils for iPhones having a maximum price of INR 40,000

  Scenario Outline: User should be able to see iPhones deatils-Device Details, Price, Ratings having a maximum price of INR 40,000

    Given I am on the <flipkartHome> page
    And I wait for some time
    When I click on element <popUPcloseButton>
    And I click on element <mobileCategory>
    And I click on element <iphoneOption>
    And I wait for some time
    And I select <minPrice> at <FromPriceRange>
    And I select <maxPrice> at <ToPriceRange>
    And I wait for some time
    Then I print iphone deatils having price upto 40000 rs
    And I click on element <nextPage>
    And I wait for some time
    Then I print iphone deatils having price upto 40000 rs
    And I click on element <nextPage>
    And I wait for some time
    Then I print iphone deatils having price upto 40000 rs
    And I click on element <nextPage>
    And I wait for some time
    Then I print iphone deatils having price upto 40000 rs
    And I click on element <nextPage>
    And I wait for some time
    Then I print iphone deatils having price upto 40000 rs

    Examples:
      | flipkartHome              | popUPcloseButton                   | mobileCategory        | iphoneOption          | minPrice | FromPriceRange                                    | maxPrice | ToPriceRange                                      | nextPage              |
      | https://www.flipkart.com/ | //button[@class="_2KpZ6l _2doB4z"] | //img[@alt="Mobiles"] | //div[@title="APPLE"] | Min      | //div[@class="_1YAKP4"]//select[@class="_2YxCDZ"] | 50000    | //div[@class="_3uDYxP"]//select[@class="_2YxCDZ"] | //a[@class="_1LKTO3"] |