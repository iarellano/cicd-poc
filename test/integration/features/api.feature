@api
Feature: API proxy health
  As API administrator
  I want to monitor proxy and idempotent backend services
  So I can alert when services are offline

  @get-familes
  Scenario: Verify the resource /familes is responding using an access token from Ping
    Given I have a valid access token from Ping
    When I GET /families
    Then response code should be 200
    And response header Content-Type should be application/json
    And response body path $ should be of type array

  @get-ranges
  Scenario: Verify the resource /ranges is responding using an access token from Ping
    Given I have a valid access token from Ping
    And I set query parameters to
      | parameter | value |
      | fid       |     2 |
    When I GET /ranges
    Then response code should be 200
    And response header Content-Type should be application/json
    And response body path $ should be of type array

  @get-range-sort
  Scenario: Verify the resource /ranges_sort is responding using an access token from Ping
    Given I have a valid access token from Ping
    And I set query parameters to
      | parameter | value |
      | rid       |     1 |
      | mid       | 33587 |
    When I GET /range_sort
    Then response code should be 200
    And response header Content-Type should be application/json
    And response body path $ should be of type array

  @get-manufacturers
  Scenario: Verify the resource /manufacturers is responding using an access token from Ping
    Given I have a valid access token from Ping
    And I set query parameters to
      | parameter | value |
      | rid       |     1 |
      | rigds     |     1 |
      | sids      |     2 |
      | tids      |     1 |
    When I GET /manufacturers
    Then response code should be 200
    And response header Content-Type should be application/json
    And response body path $ should be of type array

  @get-machines
  Scenario: Verify the resource /machines is responding using an access token from Ping
    Given I have a valid access token from Ping
    And I set query parameters to
      | parameter | value |
      | rid       |     1 |
      | rigds     |     1 |
      | tids      |     1 |
      | sids      |     2 |
      | manids    |     5 |
      | uom       |     1 |
      | mid       | 33587 |
      | limit     |     1 |
    When I GET /machines
    Then response code should be 200
    And response header Content-Type should be application/json
    And response body path $ should be of type array

  @get-machinedata
  Scenario: Verify the resource /machinedata is responding using an access token from Ping
    Given I have a valid access token from Ping
    And I set query parameters to
      | parameter | value |
      | mids      | 33587 |
    When I GET /machinedata
    Then response code should be 200
    And response header Content-Type should be application/json
    And response body path $ should be of type array

  @get-search
  Scenario: Verify the resource /search is responding using an access token from Ping
    Given I have a valid access token from Ping
    And I set query parameters to
      | parameter | value |
      | s         |  416f |
      | manid     |     5 |
      | tids      |     4 |
    When I GET /search
    Then response code should be 200
    And response header Content-Type should be application/json
    And response body path $ should be of type array