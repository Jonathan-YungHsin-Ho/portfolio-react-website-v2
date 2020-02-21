import React from 'react';

const SVG = ({
	style = {},
	fill = '#000',
	width = '17.5px',
	height = '17.5px',
	className = '',
	viewBox = '0 0 200 200',
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
			transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
			fill={fill}
			stroke='none'>
			<path
				fill={fill}
				d='M845 1895 c-14 -13 -25 -30 -25 -36 0 -7 14 -51 31 -97 28 -74 30
-90 20 -121 -10 -33 -8 -38 21 -68 17 -18 30 -34 27 -36 -2 -2 -29 -12 -59
-21 -30 -10 -79 -31 -107 -47 l-53 -29 0 48 c0 45 -3 50 -37 73 -28 18 -45 41
-68 94 -41 95 -41 95 -84 95 -64 0 -66 -13 -21 -140 22 -62 38 -115 36 -118
-3 -2 -54 13 -114 34 -128 45 -144 43 -140 -18 l3 -43 87 -42 c65 -31 91 -49
103 -72 13 -25 22 -31 49 -31 63 0 66 -6 36 -63 -16 -29 -36 -78 -45 -110
l-17 -59 -33 32 c-30 29 -35 31 -82 24 -42 -5 -61 -1 -124 25 -40 17 -77 31
-82 31 -4 0 -19 -12 -32 -26 -44 -48 -36 -60 85 -116 61 -28 110 -54 110 -58
0 -4 -50 -30 -110 -59 -122 -57 -132 -71 -80 -115 l30 -25 63 24 c34 13 74 28
89 34 18 7 38 7 63 0 35 -10 40 -8 71 22 25 24 35 29 38 18 3 -8 14 -41 25
-73 12 -33 32 -77 46 -98 l25 -38 -42 0 c-51 0 -60 -5 -81 -46 -13 -25 -33
-38 -97 -65 -45 -18 -85 -40 -90 -49 -11 -21 0 -81 16 -87 8 -3 66 13 129 36
63 22 115 37 115 33 0 -4 -16 -55 -37 -113 -20 -58 -34 -113 -30 -122 8 -20
55 -33 76 -20 9 5 34 46 56 91 28 58 50 89 72 103 29 19 33 26 33 65 0 24 4
44 9 44 6 0 26 -10 46 -21 19 -12 67 -31 105 -43 l70 -22 -31 -30 c-29 -27
-30 -32 -24 -81 5 -44 2 -63 -26 -129 -35 -83 -34 -92 14 -128 36 -26 45 -17
102 109 27 58 51 105 54 105 3 0 26 -44 50 -98 52 -113 58 -122 80 -122 22 0
61 41 61 63 0 8 -13 51 -30 94 -16 42 -28 84 -26 93 3 8 7 25 11 37 4 15 -3
31 -25 57 l-31 35 43 11 c23 7 70 26 103 43 33 18 63 33 68 35 4 2 7 -17 7
-42 0 -42 3 -48 39 -70 32 -20 45 -39 73 -108 l35 -83 40 -3 c69 -5 72 10 25
145 -23 65 -40 118 -38 120 1 2 53 -16 115 -38 62 -22 119 -38 127 -35 9 4 14
21 14 51 l0 45 -87 41 c-64 29 -94 49 -108 72 -17 27 -28 33 -63 35 -23 2 -42
5 -42 8 0 3 11 26 24 52 13 26 32 74 41 105 9 31 19 57 23 57 3 0 20 -14 38
-31 30 -29 34 -30 70 -19 35 10 46 8 113 -19 41 -17 84 -31 96 -31 25 0 67 54
58 75 -2 7 -53 36 -114 64 -60 28 -109 53 -109 56 0 3 50 29 110 57 122 56
133 73 84 119 l-25 23 -77 -29 c-51 -19 -96 -29 -133 -30 -38 0 -63 -5 -75
-17 -35 -31 -44 -25 -68 42 -12 36 -32 81 -44 100 -12 19 -22 38 -22 43 0 4
21 7 48 7 44 0 48 3 67 36 16 29 35 42 105 73 75 32 85 40 88 64 2 16 -4 39
-12 52 l-16 24 -115 -41 c-64 -22 -118 -39 -120 -36 -3 2 14 55 36 117 46 127
44 141 -22 141 l-39 0 -42 -90 c-31 -69 -48 -94 -74 -109 -31 -18 -34 -25 -34
-66 0 -26 -3 -45 -7 -43 -5 2 -37 18 -73 36 -36 18 -82 35 -102 38 -21 4 -38
9 -38 11 0 3 14 21 31 40 17 20 28 42 25 50 -19 47 -17 67 14 142 17 44 30 87
28 97 -4 24 -53 58 -72 51 -9 -4 -38 -54 -65 -112 -28 -58 -53 -105 -58 -105
-4 0 -28 44 -52 98 -25 53 -49 103 -54 110 -14 19 -35 15 -62 -13z m113 -561
l-3 -56 -48 -20 -48 -21 -37 36 c-33 33 -35 38 -21 52 16 17 125 64 147 65 9
0 12 -15 10 -56z m233 21 c27 -14 49 -29 49 -33 0 -4 -17 -24 -37 -44 l-38
-35 -52 23 -53 24 0 51 0 52 41 -7 c22 -4 63 -18 90 -31z m173 -167 c14 -29
29 -68 32 -85 l7 -33 -54 0 -54 0 -24 51 -23 51 33 34 c18 19 38 34 45 34 7 0
24 -24 38 -52z m-614 7 l33 -34 -18 -56 -19 -55 -54 0 -55 0 7 41 c7 43 51
139 64 139 5 0 23 -16 42 -35z m361 -91 c42 -40 54 -92 33 -143 -29 -74 -97
-104 -169 -77 -143 55 -95 266 58 253 36 -3 56 -12 78 -33z m288 -185 c-5 -22
-21 -63 -35 -91 l-26 -51 -41 41 -41 41 17 36 c9 20 17 42 17 50 0 12 14 15
59 15 l59 0 -9 -41z m-629 -25 l23 -56 -37 -36 -37 -37 -19 25 c-21 27 -60
121 -60 145 0 11 13 15 53 15 l53 0 24 -56z m454 -153 l38 -39 -38 -24 c-44
-28 -98 -48 -125 -48 -16 0 -19 8 -19 53 l0 52 48 22 c26 11 49 22 52 22 3 1
23 -17 44 -38z m-289 6 c40 -15 40 -16 43 -72 l3 -57 -33 7 c-49 10 -148 56
-148 68 0 20 64 78 80 73 8 -2 33 -11 55 -19z'
			/>
		</g>
	</svg>
);

export default SVG;
