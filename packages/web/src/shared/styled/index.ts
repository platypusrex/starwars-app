import * as styledComponents from "styled-components";

interface ThemeInterface {
	primary: string;
}

export const theme: ThemeInterface = {
	primary: '#e9e9e9'
};

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;