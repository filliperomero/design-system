import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@filliperomero/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testing element Box</Text>,
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
