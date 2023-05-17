import { CSSProperties } from 'react'

export type DisabledProps = {
	isDisabled: boolean
	style: Pick<CSSProperties, 'backgroundColor' | 'color' | 'border' | 'cursor'>
}
