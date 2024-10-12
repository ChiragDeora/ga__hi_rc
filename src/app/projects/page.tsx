import React from 'react'

import { Container } from '~/components/container'
import Work from '~/components/Work'

export default async function ProjectsPage() {
  const workData = await Work()

  return <Container>{workData}</Container>
}
