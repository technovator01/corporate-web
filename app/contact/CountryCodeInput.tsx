import React, { useState, ChangeEvent } from 'react';

// Define types for country and phone number details
interface CountryCode {
  code: string;
  name: string;
  dialCode: string;
}

export interface PhoneNumberDetails {
  fullNumber: string;
  countryCode: string;
  dialCode: string;
  nationalNumber: string;
}

// Predefined list of countries with their dial codes
const COUNTRY_CODES: CountryCode[] = [
  { code: 'US', name: 'United States', dialCode: '+1' },
  { code: 'CA', name: 'Canada', dialCode: '+1' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44' },
  { code: 'AU', name: 'Australia', dialCode: '+61' },
  { code: 'IN', name: 'India', dialCode: '+91' },
  { code: 'DE', name: 'Germany', dialCode: '+49' },
  { code: 'FR', name: 'France', dialCode: '+33' },
  { code: 'JP', name: 'Japan', dialCode: '+81' },
  { code: 'CN', name: 'China', dialCode: '+86' },
  { code: 'BR', name: 'Brazil', dialCode: '+55' }
];

// Define props interface
interface CountryCodeInputProps {
  onPhoneNumberChange?: (details: PhoneNumberDetails) => void;
  className?: string;
  maxLength?: number;
}

const CountryCodeInput: React.FC<CountryCodeInputProps> = ({ 
  onPhoneNumberChange, 
  className = "typedtxt",
  maxLength = 18 
}) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(COUNTRY_CODES[0]);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const country = COUNTRY_CODES.find(c => c.code === selectedCode);
    
    if (country) {
      setSelectedCountry(country);
    }
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);

    // Optional callback with phone details
    if (onPhoneNumberChange) {
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
    <div className="contact-grid phone-input-container flex items-center">
      <div className="flex items-center">
        <select 
          value={selectedCountry.code} 
          onChange={handleCountryChange}
          className="mr-2 p-2 border rounded text-sm"
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
        />
      </div>
      <label htmlFor="contact_phonemuber" className="sr-only">
        Contact number
      </label>
    </div>
  );
};

export default CountryCodeInput;