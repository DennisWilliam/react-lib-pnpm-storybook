import { DisabledProps } from './utilsTypes'

export function verifyDisbled(isDisabled: boolean | undefined): DisabledProps {
	if (!isDisabled) {
		return {
			style: {},
			isDisabled: false,
		}
	}
	return {
		style: { backgroundColor: '#fffd', border: '#fffa', color: '#fffa', cursor: 'not-allowed' },
		isDisabled: true,
	}
}

export function verifyDisbled2() {}
