const { NavigatePageHelper } = require("./navigatePageHelper");
const { ShopByCategoryPageHelper } = require("./shopByCategoryPageHelper");

(async () => {
  try {
      await openBrowser();
      await goto("ebay.com");
      await NavigatePageHelper.clickShopByCategory();
      await NavigatePageHelper.clickCellPhonesAccessories();
      await ShopByCategoryPageHelper.clickCellPhonesAndSmartphones();
      await ShopByCategoryPageHelper.clickAllFilter();
      await ShopByCategoryPageHelper.clickCondition();
      await ShopByCategoryPageHelper.clickPrice();
      await ShopByCategoryPageHelper.clickItemLocation();
      await ShopByCategoryPageHelper.clickApply();
      const verifyFiltersDetails = await ShopByCategoryPageHelper.verifyFiltersDetailsData();
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