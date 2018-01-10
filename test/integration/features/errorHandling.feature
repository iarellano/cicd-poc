@intg
Feature: Error handling
	As an API consumer
	I want consistent and meaningful error responses
	So that I can handle the errors correctly

    @foo
    Scenario: GET /foo request not found
        Given I have a valid access token
        When I GET /foo
        Then response code should be 404