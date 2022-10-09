import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$green500',
  borderRadius: '$md',
  height: '$4',
})

export function App() {
  return <Button>I&apos;m A button</Button>
}
