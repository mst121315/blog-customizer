
import { Select } from 'src/ui/select';
import { fontFamilyOptions, OptionType } from 'src/constants/articleProps';

export interface FontSelectProps {
	value: OptionType;
	onChange: (value: OptionType) => void;
}

export function FontFamilySelect({ value, onChange }: FontSelectProps) {
 
  return (
    <Select
    title="Шрифт"
    options={fontFamilyOptions}
    selected={value}
    onChange={onChange}
    placeholder="Выберите шрифт"
      />
  );
}
