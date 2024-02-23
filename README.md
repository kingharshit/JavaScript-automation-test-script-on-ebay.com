# JavaScript-automation-test-script-on-ebay.com
Creating a automation test script for the following 2 scenarios on ebay.com

Hi Viewer,

I've done the test script using Javascript and Taiko framework, a Node.js library for testing modern web applications.
Installation:
After you’ve installed Node.js open a terminal application (or powershell in the case of Windows) and install Taiko using npm with the command npm install -g taiko 
This installs Taiko and the latest version of the Chromium browser.

# Scenario 1: Access a Product via category after applying multiple filters
o Go to ebay.com
o Navigate to Search by category > Electronics > Cell Phones & accessories
o After the page loads, click Cell Phones & Smartphones in the left hand side navigation section.
o Now, click – All Filters (appears at the end of the filter drop downs)
o Add 3 filters - Condition, Price and Item location appearing in the pop-up and click apply.
o Verify that the filter tags are applied.
# Scenario 2: Access a Product via Search
o Go to ebay.com
o Type any search string in the search bar. For example: MacBook.
o Change the Search category. For example: Computers/Tablets & Networking and click Search.
o Verify that the page loads completely.
o Verify that the first result name matches with the search string
