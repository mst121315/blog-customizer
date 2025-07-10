import { RadioGroup } from 'src/ui/radio-group';
import { fontSizeOptions, OptionType } from 'src/constants/articleProps';

export interface FontSizeGroupProps {
	value: OptionType;
	onChange: (value: OptionType) => void;
}

export function FontSizeGroup({ value, onChange }: FontSizeGroupProps) {
	return (
		<RadioGroup
			name='font_size'
			title='Размер шрифта'
			options={fontSizeOptions}
			selected={value}
			onChange={onChange}
		/>
	);
}
