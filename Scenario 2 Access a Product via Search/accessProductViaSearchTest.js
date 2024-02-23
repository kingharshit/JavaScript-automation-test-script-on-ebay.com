const { AccessProductViaSearch } = require("./accessProductViaSearchTPageHelper");

(async () => {
  try {
      await openBrowser();
      await goto("ebay.com");
      await AccessProductViaSearch.searchTheProduct('MackBook');
      await AccessProductViaSearch.clickSearch();
      await AccessProductViaSearch.clickComputersTabletsNetworking();
      if (verifyFiltersDetails[1].length < 1) {
        throw new Error('Data is getting reflected on the UI');
      }
      console.log(TextColor.yellow('No matching records found.'));
      
  } catch (error) {
          console.error(error);
  } finally {
          closeBrowser();
  }
})();