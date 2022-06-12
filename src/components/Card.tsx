import React, { FC, useState } from 'react';
import { setConstantValue } from 'typescript';

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary',
}

interface CardProps {
	width?: string;
	height?: string;
	variant: CardVariant;
	onClick: (num: number) => number;
	children?: React.ReactNode;
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
	const [numP, setNumP] = useState(1);
	return (
		<div
			style={{
				width,
				height,
				border:
					variant === CardVariant.outlined
						? '2px solid grey'
						: 'none',
				background:
					variant === CardVariant.primary ? 'lightblue' : 'none',
			}}
			onClick={() => setNumP(onClick(numP))}
		>
			Card {numP}
			{children}
		</div>
	);
};

export default Card;
