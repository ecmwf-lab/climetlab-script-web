import tw from 'twin.macro'
import 'styled-components/macro'

export const InputRow = tw.div`grid w-full grid-cols-1 gap-4 md:(grid-cols-3 gap-12) lg:gap-16`
export const InputColumn = tw.div`flex flex-col space-y-4 items-center justify-between w-full md:(space-y-4) lg:(space-y-8)`
