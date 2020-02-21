import React from 'react';

const SVG = ({
	style = {},
	fill = '#000',
	width = '38px',
	height = '17.5px',
	className = '',
	viewBox = '0 0 329 153',
}) => (
	<svg
		version='1.0'
		xmlns='http://www.w3.org/2000/svg'
		style={style}
		// width='200.000000pt'
		width={width}
		// height='190.000000pt'
		height={height}
		// viewBox='0 0 200.000000 190.000000'
		viewBox={viewBox}
		className={`svg-icon ${className || ''}`}
		preserveAspectRatio='xMidYMid meet'>
		<metadata>
			Created by potrace 1.15, written by Peter Selinger 2001-2017
		</metadata>
		<g
			transform='translate(0.000000,153.000000) scale(0.100000,-0.100000)'
			fill={fill}
			stroke='none'>
			<path
				d='M635 1519 c-151 -19 -300 -75 -368 -138 -59 -54 -57 -35 -57 -601 0
-575 -3 -549 65 -608 213 -187 867 -187 1080 0 68 59 65 33 65 608 0 574 3
549 -63 607 -125 110 -439 167 -722 132z m454 -129 c103 -25 197 -74 217 -111
13 -26 12 -30 -11 -57 -49 -58 -189 -105 -369 -123 -235 -23 -518 36 -591 123
-23 27 -24 31 -11 57 27 51 159 106 314 131 97 15 355 4 451 -20z m-693 -334
c34 -14 108 -35 165 -46 91 -19 127 -21 289 -17 200 5 292 22 405 72 32 14 59
25 61 25 12 0 2 -155 -11 -180 -19 -37 -133 -94 -235 -117 -96 -22 -405 -25
-495 -4 -99 22 -195 62 -231 96 -34 32 -34 33 -34 120 0 66 3 86 13 82 6 -3
40 -17 73 -31z m33 -338 c98 -33 192 -49 331 -55 190 -8 363 18 489 73 29 13
57 24 62 24 5 0 9 -37 9 -82 0 -81 0 -81 -38 -117 -25 -24 -63 -45 -117 -63
-119 -41 -195 -52 -355 -51 -227 0 -411 48 -475 124 -22 27 -25 39 -25 115 l0
85 32 -17 c17 -9 56 -25 87 -36z m-57 -303 c185 -85 529 -103 764 -40 52 13
112 34 133 45 22 11 43 20 46 20 9 0 5 -127 -5 -154 -20 -55 -165 -115 -328
-137 -124 -16 -342 -7 -443 20 -93 24 -160 55 -199 91 -28 26 -30 33 -30 104
0 42 2 76 4 76 2 0 28 -11 58 -25z'
			/>
			<path
				d='M2340 1067 c-91 -26 -173 -103 -206 -194 -22 -64 -18 -180 10 -238
29 -61 86 -119 149 -151 l47 -24 0 66 c0 64 -2 69 -39 109 -72 79 -74 173 -4
255 104 121 261 78 304 -83 18 -66 -14 -167 -63 -201 -34 -24 -47 -19 -50 20
l-3 37 -50 1 -50 1 0 -145 0 -145 58 -3 57 -3 0 39 c0 37 2 39 53 60 129 54
204 203 177 354 -7 34 -20 78 -30 97 -25 50 -84 106 -137 131 -57 26 -162 35
-223 17z'
			/>
			<path
				d='M1779 1061 c-98 -31 -123 -106 -69 -211 11 -21 64 -80 120 -131 139
-128 135 -141 -37 -140 l-103 1 0 -61 0 -61 123 4 c94 2 131 7 160 22 55 27
82 70 82 132 0 67 -32 114 -132 194 -87 70 -113 96 -113 115 0 22 50 35 138
35 l87 0 0 53 0 52 -115 2 c-63 1 -127 -2 -141 -6z'
			/>
			<path
				d='M2800 811 c0 -252 1 -259 23 -292 33 -49 60 -59 165 -59 l92 0 0 65
0 65 -49 0 c-38 0 -56 6 -78 24 l-28 24 -3 216 -3 216 -60 0 -59 0 0 -259z'
			/>
		</g>
	</svg>
);

export default SVG;
