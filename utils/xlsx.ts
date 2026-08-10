import * as XLSX from 'xlsx'

/**
 * Read an Excel file and return the rows of the given sheet as objects
 * keyed by the header row. Defaults to the first sheet.
 */
export function readXLSX(filePath: string, sheetName?: string): Record<string, string>[] {
    const workbook = XLSX.readFile(filePath)
    const sheet = sheetName ? workbook.Sheets[sheetName] : workbook.Sheets[workbook.SheetNames[0]]
    if (!sheet) {
        throw new Error(`Sheet "${sheetName ?? workbook.SheetNames[0]}" not found in ${filePath}`)
    }
    return XLSX.utils.sheet_to_json(sheet) as Record<string, string>[]
}
