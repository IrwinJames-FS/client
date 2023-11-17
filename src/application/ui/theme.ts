import { css } from "styled-components";

export const theme = css`
--vip-background-color: #eef;
--vip-foreground-color: #000;

--vip-primary-background-color: #ccf;

--vip-header-direction: column;
--vip-header-justify: start;
--vip-header-align: center;

@media (prefers-color-scheme: dark) {
	--vip-background-color: #335;
	--vip-foreground-color: #fff;

	--vip-primary-background-color: #557;
}

@media (min-width: 768px){
	--vip-header-direction: row;
	--vip-header-justify: space-between;
	--vip-header-align: center;
}
`

export const cVar = (name: string): string => `--vip-${name}`;