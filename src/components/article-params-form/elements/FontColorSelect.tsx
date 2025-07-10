
import { fontColors, OptionType } from 'src/constants/articleProps';
import { Select } from 'src/ui/select';

export interface FontColorSelectProps {
	value: OptionType;
	onChange: (value: OptionType) => void;
}

export function FontColorSelect({ value, onChange }: FontColorSelectProps) {

  return (
    <Select
    title="Цвет шрифта"
    options={fontColors}
    selected={value}
    onChange={onChange}
    placeholder="Выберите цвет шрифта"
        />
    );
}