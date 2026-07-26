// Namespace for handling citizen document verification
namespace CitizenDocuments {

    // Private constant
    const voterIdDigits = 12;

    // Function to verify Voter ID
    export function checkVoterID(idNumber: string): boolean {
        return /^[0-9]+$/.test(idNumber) && idNumber.length === voterIdDigits;
    }

    // Function to verify Driving License Number
    export function checkLicense(license: string): boolean {
        const licensePattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        return licensePattern.test(license.toUpperCase());
    }

    // Nested namespace for tax calculation
    export namespace Billing {

        const gstRate = 0.18;

        export function findGST(price: number): number {
            return price * gstRate;
        }
    }
}

// ---------------- Main Program ----------------

const voterNumber = "123456789012";
const licenseNumber = "ABCDE1234F";

console.log("Voter ID Valid :", CitizenDocuments.checkVoterID(voterNumber));
console.log("License Valid  :", CitizenDocuments.checkLicense(licenseNumber));

const amount = 2500;
const gstValue = CitizenDocuments.Billing.findGST(amount);

console.log(`GST for ₹${amount} = ₹${gstValue}`);

// Private member cannot be accessed
// console.log(CitizenDocuments.voterIdDigits);