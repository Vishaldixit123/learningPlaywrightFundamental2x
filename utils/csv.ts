import fs from 'fs'
import { parse } from 'csv-parse/sync'

/**
 * Read a CSV file and return an array of objects keyed by the header row.
 * Numeric-looking values are kept as strings.
 */
export function readCSV(filePath: string): Record<string, string>[] {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    }) as Record<string, string>[]
}
