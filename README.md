# Description

Hi, and welcome to the team! As you know, we provide tools for searching for doctors and hospitals (i.e. "providers"). A new feature has been requested by the client. Here is the business story:

As a consumer, I want to see a list of providers each contained by a card. These providers can be pinned to a "saved list" to be easily referenced. The unselected provider data defined in the list component should be used in place of an API.

Acceptance Criteria:

- Unselected providers can be clicked and sent to a selected list.
- Selected providers can be removed by clicking an X on the provider's card.
- When providers are removed from the selected list, they should go back to the unselected list.
- The state of both lists should be retained when the app is reloaded.
- Unit tests should be added to cover new functionality.

# Installation

- `npm install`
- `ng serve`
- Load the app at http://localhost:4200 

# Testing

To test your work, run:

- `ng test`

# Finishing up

- Please fork the repo and push your completed code to a public github repository.
