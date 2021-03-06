import { Box, Flex } from '@chakra-ui/core'
import Container from '../components/Container'
import Cards from '../components/Cards'

function Products1() {
  return (
    <>
      <Container cName='add-to-cart'>
        <Box m='auto'>
          <Flex
            flexDirection={{
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'column',
              xl: 'row',
            }}
          >
            <Cards />
            <Cards />
          </Flex>
          <Flex
            m='auto'
            flexDirection={{
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'column',
              xl: 'row',
            }}
          >
            <Cards />
            <Cards />
          </Flex>
        </Box>
      </Container>
      <Box mt='auto' id='reviews'></Box>
    </>
  )
}

export default Products1
