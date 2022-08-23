import React, { HTMLProps } from "react";

export const H1 = ({ children, ...rest }: HTMLProps<HTMLHeadingElement>) => {
	return <h1 {...rest}>{children}</h1>;
};
