import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@filliperomero/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/filliperomero.png',
    alt: 'Fillipe Romero',
  },
  argTypes: {
    src: {
      description: 'Source URL that the avatar will be loaded',
      control: { type: 'text' },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
