import React from 'react'
import { Text, RichText, Image, types } from 'react-bricks/frontend'

interface HeroUnitProps {
  title: string
  text: string
}

const HeroUnit: types.Brick<HeroUnitProps> = ({ title, text }) => {
  return (
    <div className="py-20 px-6 text-center">
      <Text
        propName="title"
        renderBlock={({ children }) => (
          <h1 className="text-4xl font-bold mb-4">{children}</h1>
        )}
        placeholder="Type a title..."
      />
      <RichText
        propName="text"
        renderBlock={({ children }) => (
          <p className="text-lg text-gray-700">{children}</p>
        )}
        placeholder="Type a text..."
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Italic,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Link,
        ]}
      />
    </div>
  )
}

HeroUnit.schema = {
  name: 'hero-unit',
  label: 'Hero Unit',
  getDefaultProps: () => ({
    title: 'This is a Hero Unit',
    text: 'We are a hi-tech company and we develop amazing products.',
  }),
}

export default HeroUnit
