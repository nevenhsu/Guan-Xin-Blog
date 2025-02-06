import { Center, Title } from '@mantine/core'
import SanityImage from '@/components/sanity/Image'
import { useScreenQueryValue } from '@/sanity/hooks/useScreenQuery'
import type { PageData } from '@/sanity/types/page'

type MySlideProps = {
  data: Omit<PageData, 'content'>
}

export function MySlide({ data }: MySlideProps) {
  const { mainImage } = data
  const imageAsset = useScreenQueryValue(mainImage, 'asset')

  return (
    <Center h="100%">
      <SanityImage image={imageAsset} />
      <Title
        px={60}
        style={{
          zIndex: 1,
          color: 'var(--mantine-color-white)',
          textShadow: '2px 2px 1px rgba(0, 0, 0, 0.50)',
          textAlign: 'center',
        }}
      >
        {data.pageData.title}
      </Title>
    </Center>
  )
}
