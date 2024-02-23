/**
 * This helper file used to perform action on Shop By Category UI and on All Filters dialog box UI
 */

const { Tableutils } = require("./tableUtils");

class ShopByCategoryPageHelper{
    /** Click on Cell Phones & Smartphones link*/
    static async clickCellPhonesAndSmartphones(){
        await click($('//*[@id="s0-17-12_2-0-1[0]-0-0"]/ul/li[3]/a'));
        await screenshot(undefined, {message: `Navigate to Cell Phones & Smartphones`})
    }
    /** Click on Add Filters link */
    static async clickAllFilter(){
        await scrollTo($('//*[@id="s0-28_2-9-0-1[0]-0-0"]/section/ul[1]/li[9]/button'));
        await click($('//*[@id="s0-28_2-9-0-1[0]-0-0"]/section/ul[1]/li[9]/button'));
        await screenshot(undefined, {message: `Clicked All Filters`})
    }
    /** Click on Condition and add three filters */
    static async clickCondition(){ 
        await click($('/html[1]/body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[22]/span[1]'));
        await checkBox('New').check();
        await checkBox('Open box').check();
        await checkBox('Certified - Refurbished').check();
        await screenshot(undefined, {message: `Clicked on Condition & Added three filters`});
    }
    /** Click on Price and add filters */
    static async clickPrice(){ 
        await click($('/html[1]/body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[23]/span[1]'));
        await write(10, into($('/html[1]/body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/fieldset[1]/ul[1]/li[1]/div[2]/div[1]/div[1]/div[1]/input[1]')));
        await write(100, into($('/html[1]/body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/fieldset[1]/ul[1]/li[1]/div[2]/div[1]/div[2]/div[1]/input[1]')));
        await screenshot(undefined, {message: `Clicked on Price and Added filters`});
    }
    /** Click on  Item location and select filters */
    static async clickItemLocation(){ 
        await click($('/html[1]/body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[25]/span[1]'));
        await radioButton(toLeftOf('US Only')).select();
        await screenshot(undefined, {message: `Clicked on Item Location & Added filters`});
    }
    /** Click on  Apply button */
    static async clickApply(){ 
        await click(button({class: 'x-overlay-footer__apply-btn btn btn--primary'}));
        await screenshot(undefined, {message: `Clicked Apply`});
    }
    /** Get data to verify filters added */
    static async verifyFiltersDetailsData(){ 
        return Tableutils.removeEmptyRows(await Tableutils.convertTableToArray($(`/html[1]/body[1]/div[3]/div[4]`)));
    }
}
module.exports.ShopByCategoryPageHelper = ShopByCategoryPageHelper;