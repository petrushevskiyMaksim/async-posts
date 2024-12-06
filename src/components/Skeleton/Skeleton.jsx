import React from 'react';
import ContentLoader, { Rect, Circle, Path } from 'react-content-loader/native';

const MyLoader = props => (
	<ContentLoader
		speed={2}
		width={400}
		height={300}
		viewBox='0 0 400 300'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<Rect x='5' y='4' rx='0' ry='0' width='338' height='31' />
		<Rect x='9' y='90' rx='0' ry='0' width='334' height='12' />
		<Rect x='9' y='115' rx='0' ry='0' width='332' height='12' />
		<Rect x='7' y='147' rx='0' ry='0' width='60' height='55' />
		<Rect x='38' y='155' rx='0' ry='0' width='6' height='4' />
		<Rect x='164' y='215' rx='0' ry='0' width='0' height='1' />
		<Rect x='82' y='154' rx='0' ry='0' width='148' height='14' />
		<Rect x='90' y='167' rx='0' ry='0' width='1' height='1' />
		<Rect x='81' y='178' rx='0' ry='0' width='80' height='13' />
		<Rect x='6' y='65' rx='0' ry='0' width='334' height='12' />
	</ContentLoader>
);

export default MyLoader;
