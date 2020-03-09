import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
	--dark-color: #121212;
	--light-color: rgba(255, 255, 255, 0.87);
	/* --light-color: whitesmoke; */
	/* --hover-color: rgba(255, 255, 255, 0.6); */
	--hover-color: #606060;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	max-width: 100%;
}

html {
	font-size: 62.5%;
}

body {
	line-height: 1.2;
	font-family: 'Roboto', sans-serif;
	font-size: 1.5rem;

	color: var(--dark-color);
}

h1 {
	font-size: 2.5rem;
	text-transform: uppercase;
	font-weight: 700;
}

h2 {
	font-size: 2rem;
	margin-bottom: 0.5rem;
	text-transform: uppercase;
}

p {
	max-width: 90ch;
}

/* a {
	font-size: 1.5rem;
	color: var(--dark-color);
	text-decoration: none;
	letter-spacing: 0.05rem;
	transition: text-shadow 0.2s;
}

a:hover,
.active {
	text-shadow: 0 0 0.7px var(--dark-color), 0 0 0.7px var(--dark-color);
} */

form {
	display: flex;
	flex-direction: column;

	margin-top: 1rem;
}

input,
textarea {
	margin-bottom: 1rem;
	padding: 1rem;

	border: 1px solid silver;
	border-radius: 0.3rem;

	font-family: inherit;
	outline: none;
}

textarea {
	resize: none;
}

input:focus,
textarea:focus {
	border: 1px solid #5e9ed6;
}

button {
	width: 13rem;
	padding: 1rem;
	margin-top: 0.5rem;

	border: none;
	border-radius: 0.3rem;

	background-color: var(--dark-color);
	color: var(--light-color);
	transition: background-color 0.2s;

	font-family: inherit;
	text-transform: uppercase;

	cursor: pointer;
}

button:hover {
	background-color: var(--hover-color);
}

div,
input,
textarea,
button,
select,
a {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar {
	width: 0.2rem;
	height: 0.2rem;
}
::-webkit-scrollbar-thumb {
	background: silver;
}

.anchor {
	display: block;
	height: 4.6rem;
	margin-top: -4.6rem;
	visibility: hidden;
}

/* Dark Mode */

.dark-mode,
.dark-mode .nav-bar,
.dark-mode .footer-wrapper {
	background-color: var(--dark-color);
	color: var(--light-color);
}

.dark-mode a,
.dark-mode .tech-icon,
.dark-mode .svg-icon,
.dark-mode .icon {
	color: var(--light-color);
}

.dark-mode .nav-bar-links a {
	color: var(--light-color);
}
/* 
.dark-mode .svg-icon {
	color: var(--light-color);
} */

.dark-mode .svg-icon:hover {
	color: var(--hover-color);
}

.dark-mode .icon:hover {
	color: var(--hover-color);
}

.dark-mode a:hover,
.dark-mode .active,
.dark-mode .nav-bar-links a:hover,
.dark-mode .nav-bar-links .active {
	text-shadow: 0 0 1px var(--light-color), 0 0 1px var(--light-color);
}

.dark-mode .project-link a:hover,
.dark-mode .link-icon:hover {
	text-shadow: none;
	color: var(--hover-color);
}

.dark-mode button {
	border: 1px solid var(--light-color);
}

`;

export default GlobalStyle;
