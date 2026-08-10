import * as XLSX from 'xlsx'

type SheetRow = Record<string, string>

function getSheet(filePath: string, sheetName?: string): XLSX.WorkSheet {
    const workbook = XLSX.readFile(filePath)
    const name = sheetName ?? workbook.SheetNames[0]
    const sheet = workbook.Sheets[name]
    if (!sheet) {
        throw new Error(`Sheet "${name}" not found in ${filePath}`)
    }
    return sheet
}

/**
 * Read an Excel file and return the rows of the given sheet as objects
 * keyed by the header row. Defaults to the first sheet.
 */
export function readXLSX(filePath: string, sheetName?: string): SheetRow[] {
    return XLSX.utils.sheet_to_json(getSheet(filePath, sheetName)) as SheetRow[]
}

/**
 * Read a single row (0-based index) from a sheet as an object
 * keyed by the header row. Defaults to the first sheet.
 */
export function readXLSXRow(filePath: string, rowIndex: number, sheetName?: string): SheetRow {
    const row = readXLSX(filePath, sheetName)[rowIndex]
    if (!row) {
        throw new Error(`Row ${rowIndex} not found in ${filePath}`)
    }
    return row
}

/**
 * Read a single column by its header name from a sheet, skipping empty cells.
 * Defaults to the first sheet.
 */
export function readXLSXColumn(filePath: string, column: string, sheetName?: string): string[] {
    return readXLSX(filePath, sheetName)
        .map((row) => row[column])
        .filter((value): value is string => value !== undefined && value !== '')
}
