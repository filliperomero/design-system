import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@filliperomero/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testing element Box</span>
      </>
    ),
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
