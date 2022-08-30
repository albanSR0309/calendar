Feature: Create a new appointment
  In order to have events in the platform
  As a loged user
  I want to create a new appointment

  Scenario: A valid unexisting appointment
    Given I send a PUT request to "/appointments/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "userId": "7f2aa12d-a624-4cdc-a875-8e444dc920dc",
      "workspaceId": "7f2aa12d-a624-4cdc-a875-8e444dc920dc",
      "name": "Best event ever",
      "description": "Startups meeting",
      "startAt": "2022-08-05T09:33:22.352Z",
      "endAt": "2022-08-05T09:33:22.352Z"
    }
    """
    Then the response status code should be 201
    And the response should be empty
