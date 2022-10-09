import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@filliperomero/react'

export default {
  args: {
    children: 'Enviar',
  },
  title: 'Form/Button',
  component: Button,
} as Meta

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}
