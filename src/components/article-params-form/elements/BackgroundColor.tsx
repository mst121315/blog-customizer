
import { Select } from 'src/ui/select';
import { backgroundColors, OptionType } from 'src/constants/articleProps';

export interface BackgroundColorsSelectProps {
    value: OptionType;
    onChange: (value: OptionType) => void;
}

export function BackgroundColorSelect({ value, onChange }: BackgroundColorsSelectProps) {
  
  return (
  <Select
  title="Цвет фона"
  options={backgroundColors}
  selected={value}
  onChange={onChange}
  placeholder="Выберите цвет фона"
        />
  );
}