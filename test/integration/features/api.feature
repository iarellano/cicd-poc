@api
Feature: API proxy health
  As API administrator
  I want to monitor proxy and idempotent backend services
  So I can alert when services are offline

  @api
  Scenario: Verify the resource /familes is responding using an access token from Ping
    Given I have a valid access token
    When I GET /ip
    Then response code should be 200
    And response header Content-Type should be application/json
    And response body path $.ip should be ^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(,\s*\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})*$
    And response body path $.uuid should be ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$