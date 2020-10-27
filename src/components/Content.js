import { Divider, Flex } from '@chakra-ui/core'
import Home from '../pages/home'
import About from '../pages/about'
import Products from '../pages/products'
import Products1 from '../pages/products1'
import Reviews from '../pages/reviews'

function Content() {
  return (
    <>
      <Flex flexDirection='column'>
        <Home />
        <Divider
          borderColor='gray.900'
          w='70%'
          m='auto'
          boxShadow='1px 1px 5px 0px black'
        />
        <About />
        <Divider
          borderColor='gray.900'
          w='70%'
          m='auto'
          boxShadow='1px 1px 5px 0px black'
        />
        <Products />

        <Products1 />
        <Divider
          borderColor='gray.900'
          w='70%'
          m='auto'
          boxShadow='1px 1px 5px 0px black'
          mt='50px !important'
        />
        <Reviews />
      </Flex>
    </>
  )
}

export default Content
