import React, { useState, ChangeEvent } from 'react';

// Define types for country and phone number details
interface CountryCode {
  code: string;
  name: string;
  dialCode: string;
  validLength: number; // Added valid length for the national number
}

export interface PhoneNumberDetails {
  fullNumber: string;
  countryCode: string;
  dialCode: string;
  nationalNumber: string;
}

// Predefined list of countries with their dial codes and valid lengths
const COUNTRY_CODES: CountryCode[] = [
  { code: 'US', name: 'United States', dialCode: '+1', validLength: 10 },
  { code: 'CA', name: 'Canada', dialCode: '+1', validLength: 10 },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', validLength: 10 },
  { code: 'AU', name: 'Australia', dialCode: '+61', validLength: 9 },
  { code: 'IN', name: 'India', dialCode: '+91', validLength: 10 },
  { code: 'DE', name: 'Germany', dialCode: '+49', validLength: 11 },
  { code: 'FR', name: 'France', dialCode: '+33', validLength: 9 },
  { code: 'JP', name: 'Japan', dialCode: '+81', validLength: 10 },
  { code: 'CN', name: 'China', dialCode: '+86', validLength: 11 },
  { code: 'BR', name: 'Brazil', dialCode: '+55', validLength: 11 }
];

interface CountryCodeInputProps {
  onPhoneNumberChange?: (details: PhoneNumberDetails) => void;
  className?: string;
  maxLength?: number;
  disabled?: boolean;
}

const CountryCodeInput: React.FC<CountryCodeInputProps> = ({ 
  onPhoneNumberChange, 
  className = "typedtxt",
  maxLength = 10,
  disabled = false  
}) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(COUNTRY_CODES[0]);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const country = COUNTRY_CODES.find(c => c.code === selectedCode);
    
    if (country) {
      setSelectedCountry(country);
      setPhoneNumber('');  // Clear the phone number when the country is changed
      setError('');  // Reset error message
    }
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Only allow numeric input
    const newPhoneNumber = e.target.value.replace(/\D/g, ''); // Remove any non-digit characters
    
    setPhoneNumber(newPhoneNumber);

    // Validate phone number length for the selected country
    const isValidLength = newPhoneNumber.length === selectedCountry.validLength;

    if (isValidLength) {
      setError('');  // Clear the error if the phone number is valid
    } else {
      setError(`Phone number should be ${selectedCountry.validLength} digits for ${selectedCountry.name}.`);
    }

    // Optional callback with phone details if valid
    if (onPhoneNumberChange && isValidLength) {
      const phoneDetails: PhoneNumberDetails = {
        fullNumber: `${selectedCountry.dialCode}${newPhoneNumber}`,
        countryCode: selectedCountry.code,
        dialCode: selectedCountry.dialCode,
        nationalNumber: newPhoneNumber
      };

      onPhoneNumberChange(phoneDetails);
    }
  };

  return (
    <div className="contact-grid">
      <div className="flex items-center">
        <select 
          value={selectedCountry.code} 
          onChange={handleCountryChange}
          className="mr-2 p-2 border rounded text-sm flex-grow"
          disabled={disabled}
        >
          {COUNTRY_CODES.map((country) => (
            <option key={country.code} value={country.code}>
              {country.dialCode} ({country.code})
            </option>
          ))}
        </select>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          maxLength={maxLength}
          className={`${className} flex-grow`}
          name="phone"
          autoComplete="off"
          placeholder="Enter Contact"
          disabled={disabled}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default CountryCodeInput;
