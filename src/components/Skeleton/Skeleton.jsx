import React from 'react';
import ContentLoader, { Rect, Circle, Path } from 'react-content-loader/native';

export default function MyLoader({ index }) {
	return (
		<ContentLoader
			key={index}
			speed={2}
			width={250}
			height={250}
			viewBox='0 0 250 250'
			backgroundColor='#6b6b6b'
			foregroundColor='#ecebeb'
		>
			<rect x='5' y='4' rx='0' ry='0' width='238' height='31' />
			<rect x='9' y='90' rx='0' ry='0' width='234' height='12' />
			<rect x='9' y='115' rx='0' ry='0' width='232' height='12' />
			<rect x='7' y='147' rx='0' ry='0' width='60' height='55' />
			<rect x='38' y='155' rx='0' ry='0' width='6' height='4' />
			<rect x='164' y='215' rx='0' ry='0' width='0' height='1' />
			<rect x='82' y='154' rx='0' ry='0' width='148' height='14' />
			<rect x='90' y='167' rx='0' ry='0' width='1' height='1' />
			<rect x='81' y='178' rx='0' ry='0' width='80' height='13' />
			<rect x='6' y='65' rx='0' ry='0' width='234' height='12' />
		</ContentLoader>
	);
}
