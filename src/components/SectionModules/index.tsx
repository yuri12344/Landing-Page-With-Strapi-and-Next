import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'
import { sectionModulesProps } from 'types/api'

import content from './content'
import * as S from './styles'

const SectionModules = ({ title, modules }: sectionModulesProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {modules.map(({ title, subtitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
