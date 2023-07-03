import React, { useState } from 'react'

import { Button, Card, Flex, TextInput, Title } from '@tremor/react'
export const KeywordSearch = () => {
  const [keyword, setKeyword] = useState<string>('')
  const [directory, setDirectory] = useState<string>('')

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <Card>
        <Title>Keyword Search</Title>
        <Flex className="gap-4 mt-6">
          <TextInput placeholder="Enter keyword" onChange={(e) => setKeyword(e.target.value)} />
          <TextInput
            placeholder="Enter directory path"
            onChange={(e) => setDirectory(e.target.value)}
          />
        </Flex>
        <Button size="xs" variant="secondary" className="mt-4" onClick={handleClick}>
          Search
        </Button>
      </Card>
    </div>
  )
}
