import { RowID, RowElement } from "./interface.ts"

/*export interface insertRow {
    (row: RowElement): number;
}

export interface deleteRows {
    (rowId: RowID): void;
}

export interface updateRows {
    (rowId: RowID, row: RowElement): RowID;
}*/
export declare function insertRow(row: RowElement): number;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;
