import type { Meta, StoryObj } from '@storybook/react'
import Button from '@ui/components/src/buttons/base'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Example/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	args: {
		id: 'btn',
		type: 'button',
		label: 'Button',
		width: '50px',
		height: '20px',
		disabled: true,
	},
}
