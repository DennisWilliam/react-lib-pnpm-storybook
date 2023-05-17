import React, { ButtonHTMLAttributes } from 'react'
import { BaseInput } from '../../base/base'

export type BaseButtonProps = {
	type: ButtonHTMLAttributes<HTMLButtonElement>['type']
	children?: React.ReactNode
	onClick: () => void
} & BaseInput

export type BtnStyleTypes = 'fill' | 'transparent' | 'onlyBorder'

export type VariantTypes = 'regular' | 'regular-rounded' | 'small' | 'small-rounded'

export type DropdownVariantTypes = 'regular' | 'small'

export type RegularButtonProps = {
	variant: VariantTypes
	styleType: BtnStyleTypes
} & BaseButtonProps

export type CircleButtonProps = {
	diameter: number | string
	styleType: BtnStyleTypes
} & BaseButtonProps

export type DropdownButtonProps = {
	variant: DropdownVariantTypes
	styleType: BtnStyleTypes
} & BaseButtonProps
