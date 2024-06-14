/**
 * File name: index.ts
 * Student Name: Nikunj Thakor 
 * StudentID: 200555644
 * Date: 14/06/2024
 */

/**
 *
 *
 * @export
 * @param {string} inputString
 * @return {*}  {string[]}
 */
export function SanitizeArray(inputString: string): string[]
{
    let unsanitizedArray = inputString.split(",");
    // Created empty Array 
    let sanitizedArray = Array<string>();
    // trim each string
    for (const unsanitizedString of unsanitizedArray) 
    {
        sanitizedArray.push(unsanitizedString.trim());
    }
    return sanitizedArray;
}