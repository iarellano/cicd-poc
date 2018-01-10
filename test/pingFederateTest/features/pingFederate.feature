@pingFederate
Feature: PingFederate Token test
	As API administrator
	I want to be sure I can get tokens from PingFederate
	So I know if my tests will work

    @get-access-token
    Scenario: Verify that I can get a token from /token.oauth2
        Given I have basic authentication credentials __PING_CLIENT_ID__ and __PING_CLIENT_SECRET__
        And I set form parameters to 
            | parameter  | value |
            | grant_type | client_credentials |
        And I set Content-Type header to application/x-www-form-urlencoded
		When I POST to /token.oauth2
        Then response code should be 200
        And  response body should contain access_token


    
        
