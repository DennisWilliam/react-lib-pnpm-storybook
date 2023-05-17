import React from 'react'
import { verifyDisbled } from '../../functions/utils'
import { BaseButtonProps } from './buttonTypes'

const BaseButton: React.FC<BaseButtonProps> = ({
	type = 'button',
	children,
	height,
	onClick,
	minWidth,
	disabled,
	fontSize,
}) => {
	const { style } = verifyDisbled(disabled)
	return (
		<button
			type={type}
			onClick={disabled ? undefined : onClick}
			style={{
				height,
				minWidth,
				fontSize,
				...style,
			}}
			aria-disabled={disabled}
		>
			{children}
		</button>
	)
}

export default BaseButton
