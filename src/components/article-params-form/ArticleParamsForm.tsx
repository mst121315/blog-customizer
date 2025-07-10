// ───────── ArticleParamsForm.tsx
import { useState, useRef, useCallback } from 'react';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import { OptionType, defaultArticleState } from 'src/constants/articleProps';

import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { FontFamilySelect } from './elements/FontFamilySelect';
import { FontSizeGroup } from './elements/FontSizeGroup';
import { FontColorSelect } from './elements/FontColorSelect';
import { BackgroundColorSelect } from './elements/BackgroundColor';
import { ContentWidthArrSelect } from './elements/ContentWidthSelect';
import { Separator } from 'src/ui/separator/Separator';
import { Text } from 'src/ui/text/Text';

import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);
	useOutsideClickClose({
		isOpen: isMenuOpen,
		rootRef,
		onChange: setIsMenuOpen,
		onClose: () => setIsMenuOpen(false),
	});
	const handleToggle = useCallback(() => setIsMenuOpen((p) => !p), []);

	const [fontSizeValue, setFontSizeValue] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const [fontValue, setFontValue] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [fontColorValue, setFontColorValue] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [contentWidthValue, setContentWidthValue] = useState<OptionType>(
		defaultArticleState.contentWidth
	);
	const [backgroundColorValue, setbackgroundColorValue] = useState<OptionType>(
		defaultArticleState.backgroundColor
	);

	const fontRef = useRef<OptionType | null>(null);
	const sizeRef = useRef<OptionType | null>(null);
	const colorRef = useRef<OptionType | null>(null);
	const backgroundRef = useRef<OptionType | null>(null);
	const widthRef = useRef<OptionType | null>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const font = fontRef.current?.value ?? null;
		const size = sizeRef.current?.value ?? null;
		const color = colorRef.current?.value ?? null;
		const background = backgroundRef.current?.value ?? null;
		const width = widthRef.current?.value ?? null;

		const main = document.querySelector('main');
		if (main) {
			if (font) {
				main.style.setProperty('--font-family', font);
			}
			if (size) {
				main.style.setProperty('--font-size', size);
			}
			if (color) {
				main.style.setProperty('--font-color', color);
			}
			if (background) {
				main.style.setProperty('--bg-color', background);
			}
			if (width) {
				main.style.setProperty('--container-width', width);
			}
		}
	};

	const handleReset = () => {
		setFontValue(defaultArticleState.fontFamilyOption);
		fontRef.current = defaultArticleState.fontFamilyOption;

		setFontSizeValue(defaultArticleState.fontSizeOption);
		sizeRef.current = defaultArticleState.fontSizeOption;

		setFontColorValue(defaultArticleState.fontColor);
		colorRef.current = defaultArticleState.fontColor;

		setbackgroundColorValue(defaultArticleState.backgroundColor);
		backgroundRef.current = defaultArticleState.backgroundColor;

		setContentWidthValue(defaultArticleState.contentWidth);
		widthRef.current = defaultArticleState.contentWidth;

		const main = document.querySelector('main');
		if (main) {
			main.style.setProperty(
				'--font-family',
				defaultArticleState.fontFamilyOption.value
			),
				main.style.setProperty(
					'--font-size',
					defaultArticleState.fontSizeOption.value
				),
				main.style.setProperty(
					'--font-color',
					defaultArticleState.fontColor.value
				),
				main.style.setProperty(
					'--bg-color',
					defaultArticleState.backgroundColor.value
				),
				main.style.setProperty(
					'--container-width',
					defaultArticleState.contentWidth.value
				);
		}
	};

	return (
		<>
			<ArrowButton isOpen={isMenuOpen} onClick={handleToggle} />
			<aside
				ref={rootRef}
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.selectsContainer}>
						<div>
							<Text as='h2' size={31} weight={800} uppercase>
								Задайте параметры
							</Text>
						</div>
						<div>
							<FontFamilySelect
								value={fontValue}
								onChange={(opt) => {
									setFontValue(opt);
									fontRef.current = opt;
								}}
							/>
						</div>
						<div>
							<FontSizeGroup
								value={fontSizeValue}
								onChange={(opt) => {
									setFontSizeValue(opt);
									sizeRef.current = opt;
								}}
							/>
						</div>
						<div>
							<FontColorSelect
								value={fontColorValue}
								onChange={(opt) => {
									setFontColorValue(opt);
									colorRef.current = opt;
								}}
							/>
						</div>
						<div>
							<Separator />
						</div>
						<div>
							<BackgroundColorSelect
								value={backgroundColorValue}
								onChange={(opt) => {
									setbackgroundColorValue(opt);
									backgroundRef.current = opt;
								}}
							/>
						</div>
						<div>
							<ContentWidthArrSelect
								value={contentWidthValue}
								onChange={(opt) => {
									setContentWidthValue(opt);
									widthRef.current = opt;
								}}
							/>
						</div>
					</div>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='button'
							type='clear'
							onClick={handleReset}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
