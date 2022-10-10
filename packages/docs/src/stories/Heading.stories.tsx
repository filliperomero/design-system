import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@filliperomero/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'H2 Heading',
  },
} as Meta

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, Heading will always be a `h2`, but we can change this behaviour by using the property `as`.',
      },
    },
  },
}
