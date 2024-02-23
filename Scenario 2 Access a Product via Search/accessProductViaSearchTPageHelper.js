/**
 * This helper file used for Search the product and clink on link
 */
const { Tableutils } = require("./tableUtils");

class AccessProductViaSearch{
    /** Search the product*/
    /**
     * @param {string} searchProduct
     */
    static async searchTheProduct(searchProduct){
        await write(searchProduct, textBox({class: 'gh-tb ui-autocomplete-input'}));
    }
    /** Click on search link*/
    static async clickSearch(){
        await click(button({class: 'btn btn-prim gh-spr'}));
        await screenshot(undefined, {message: `Product search`});
    }
    /** Change the Search category to Computers/Tablets & Networking*/
    static async clickComputersTabletsNetworking(){
        await click($('/html[1]/body[1]/div[4]/div[3]/ul[1]/li[1]/ul[1]/li[1]/div[2]/ul[1]/li[1]/ul[1]/li[1]/a[1]/span[1]'));
        await screenshot(undefined, {message: `Product search`});
    }
    /** Get data to verify filters */
    static async verifyFiltersDetailsData(){ 
        return Tableutils.removeEmptyRows(await Tableutils.convertTableToArray($(`/html[1]/body[1]/div[4]/div[4]/div[2]/div[1]/div[2]/ul[1]/li[2]`)));
    }
}
module.exports.AccessProductViaSearch = AccessProductViaSearch;