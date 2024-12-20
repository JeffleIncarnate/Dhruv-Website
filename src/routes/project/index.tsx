import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project/')({
  component: () => <div>Hello /project/!</div>
})