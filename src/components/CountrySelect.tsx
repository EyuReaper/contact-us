import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const countries = [
  { code: "GB", prefix: "+44", flag: "🇬🇧" },
  { code: "US", prefix: "+1", flag: "🇺🇸" },
  { code: "FR", prefix: "+33", flag: "🇫🇷" },
  { code: "DE", prefix: "+49", flag: "🇩🇪" },
  { code: "IT", prefix: "+39", flag: "🇮🇹" },
  { code: "ES", prefix: "+34", flag: "🇪🇸" },
];

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CountrySelect = ({ value, onChange }: CountrySelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[110px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.code} value={country.prefix}>
            <span className="flex items-center gap-2">
              <span>{country.flag}</span>
              <span>{country.prefix}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CountrySelect;