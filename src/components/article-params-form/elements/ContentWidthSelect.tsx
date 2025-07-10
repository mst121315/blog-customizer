
import { Select } from 'src/ui/select';
import { contentWidthArr, OptionType } from 'src/constants/articleProps';

export interface contentWidthArrProps {
    value: OptionType;
	  onChange: (value: OptionType) => void;
}

export function ContentWidthArrSelect({ value, onChange }: contentWidthArrProps) {
  
  return (
  <Select
  title="Ширина контента"
  options={contentWidthArr}
  selected={value}
  onChange={onChange}
  placeholder="Выберите ширину"
        />
  );
}
