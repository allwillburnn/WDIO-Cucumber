Feature: Main tests Onliner features
    As a not logged in user
    I want to use main functionality of the site

    # Background: Open browser and visit main page
    #     Given I'm on the main page

    Scenario: Adding single product to cart without login
        Given I visit catalog page
        When I open first product category
        And I open first aside product category
        And I open first product subcategory
        And I open first product page
        And I add this product to cart from first shop
        Then I can see valid cart counter appeared

    Scenario: Check chat with manager
        Given I visit tasks page
        When I check chat for visibility
        Then I can see chat with manager

    Scenario: Post task without login
        Given I visit tasks page
        When I create task
        Then I will be redirected to login page

    Scenario: Convert currency to USD
        Given I visit kurs page
        When I enter the amount of interest to me in the input field
        Then I see correct converted ammount in USD

    Scenario: Check default currency values in converter
        Given I visit kurs page
        When I check default currency values from & to
        Then Default values from is USD & BYN