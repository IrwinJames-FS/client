import { css } from "styled-components";

export const theme = css`
--vip-abs: #000;
--vip-bg-1: #ddf;
--vip-bg-2: #cce;
--vip-bg-3: #bbd;
--vip-bg-4: #aac;
--vip-bg-5: #99b;


--vip-primary-1: rgba(128,200,255);
--vip-primary-2: rgba(118, 190, 245);
--vip-primary-3: rgba(108, 180, 235);

--vip-dangerous-1: rgba(255, 100, 100);
--vip-fg: #000;


--vip-head-dir: column;
--vip-head-justify: start;
--vip-head-align: center;

@media (prefers-color-scheme: dark) {
	--vip-bg-1: #335;
	--vip-bg-2: #446;
	--vip-bg-3: #557;
	--vip-bg-4: #668;
	--vip-bg-5: #779;

	--vip-fg: #fff;

	--vip-primary-1: rgba(0, 100, 220);
	--vip-primary-2: rgba(10, 110, 230);
	--vip-primary-3: rgba(20, 120, 240);

	--vip-dangerous-1: rgba(200, 50, 50);
	--vip-dangerous-2: rgba(220, 70, 70);
}

@media (min-width: 768px){
	--vip-head-dir: row;
	--vip-head-justify: space-between;
	--vip-head-align: center;
}
`

export const cVar = (name: string, defaultValue?: string): string => `var(--vip-${name}, ${defaultValue})`;