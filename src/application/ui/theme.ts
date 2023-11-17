import { css } from "styled-components";

export const theme = css`
--vip-background-color: #eef;
--vip-foreground-color: #000;

--vip-primary-background-color: #ccf;

--vip-navigation-background: #aae;
--vip-navigation-active-overlay: rgba(0,0,0,0.1);
--vip-navigation-hover-overlay: rgba(0,0,0,0.2);

--vip-header-shadow-color: #000;
--vip-header-direction: column;
--vip-header-justify: start;
--vip-header-align: center;



@media (prefers-color-scheme: dark) {
	--vip-background-color: #335;
	--vip-foreground-color: #fff;

	--vip-primary-background-color: #557;

	--vip-navigation-hover-overlay: rgba(0,0,0,0.2);

	--vip-navigation-background: #559;
	--vip-navigation-hover-overlay: rgba(255,255,255,0.2);
	--vip-navigation-active-overlay: rgba(255,255,255,0.1);


}

@media (min-width: 768px){
	--vip-header-direction: row;
	--vip-header-justify: space-between;
	--vip-header-align: center;
}
`

export const cVar = (name: string, defaultValue: string): string => `var(--vip-${name}, ${defaultValue})`;