/**
 * This helper file used for Navigate to Search by category > Electronics > Cell Phones & accessories
 */

class NavigatePageHelper{
    /** Click on Shop by Category link*/
    static async clickShopByCategory(){
        await click(button({id: 'gh-shop-a'}));
        await screenshot(undefined, {message: `Navigate to Search by category`})
    }
    /** Click on Cell Phones & Accessories link*/
    static async clickCellPhonesAccessories(){
        await click(link('Cell Phones & accessories'));
    }
}
module.exports.NavigatePageHelper = NavigatePageHelper;