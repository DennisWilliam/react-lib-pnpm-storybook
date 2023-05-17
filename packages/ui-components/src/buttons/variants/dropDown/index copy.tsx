import React from 'react'
import BaseButton from '../../base'
import { DropdownButtonProps } from '../../base/buttonTypes'

const ButtonDropDown: React.FC<DropdownButtonProps> = (buttonProps) => (
	<BaseButton {...buttonProps} />
)

export default ButtonDropDown
