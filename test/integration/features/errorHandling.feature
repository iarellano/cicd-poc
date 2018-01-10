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
        And response header Content-Type should be application/json
        And response body path $.description should be No resource for GET `basepath`/foo
        
    @foobar
    Scenario: GET /foo/bar request not found
        Given I have a valid access token
        When I GET /foo/bar
        Then response code should be 404
        And response header Content-Type should be application/json
        And response body path $.description should be No resource for GET `basepath`/foo/bar

    @foobar
    Scenario: GET /foo/bar request not found
        Given I have a valid access token
        When I GET /foo/bar
        Then I should get a 404 error with description "No resource for GET `basepath`/foo/bar" and code "404.001"
        
