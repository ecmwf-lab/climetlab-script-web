import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
    // < Object styles
    body: {
        WebkitTapHighlightColor: theme`colors.purple.500`,
        ...tw`antialiased`,
    },
})

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <CustomStyles />
    </>
)

export default GlobalStyles
