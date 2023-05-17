import { CSSProperties, InputHTMLAttributes } from 'react'

export type BaseStyle = {} & Pick<
	CSSProperties,
	'backgroundColor' | 'color' | 'width' | 'height' | 'minWidth' | 'fontSize'
>

export type BaseInput = {
	id: string
	label: string
	disabled: InputHTMLAttributes<InputHTMLAttributes>['disabled']
} & BaseStyle

export type BaseComponent = {
	id: string | undefined
} & BaseStyle
