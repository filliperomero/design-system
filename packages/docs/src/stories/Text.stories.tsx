import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@filliperomero/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt officiis praesentium dolore illo quis ratione tempore! Quam possimus reiciendis atque aspernatur labore iusto qui quis provident officiis doloremque, rem vitae?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
