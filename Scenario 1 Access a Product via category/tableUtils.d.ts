/**
 * Utitlties to interact with html tables
 */
export class Tableutils {
    /**
     * Convert a html table to a multi-dimensional array
     * @param {string | import('taiko').Selector | import('taiko').Element) table
     * @returns (Promise<any[][]>}

     */
static convertTableToArray(table: string | import('taiko').Selector | import('taiko').Element): Promise<any[][]>;
/**
 * Remove empty rows from a multi-dimensional array
 * @param {any[][]} tableArray
 */
static removeEmptyRows(tableArray: any[][]): any[][];
}