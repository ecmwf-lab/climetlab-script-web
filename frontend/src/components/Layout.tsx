import tw from 'twin.macro'
import 'styled-components/macro'

export const Layout = tw.section`flex flex-col w-full h-full p-4 bg-blue-100 md:(p-6) lg:(p-8)`
export const Container = tw.div`flex flex-col w-full h-full bg-gray-100 rounded-lg`
export const ContainerHeader = tw.div`flex flex-col space-y-4 p-4 md:(flex-row justify-between items-center overflow-x-auto space-y-0 space-x-12 p-6) lg:(p-8) bg-gray-200`
export const ContainerBody = tw.div`flex flex-col w-full overflow-x-auto space-y-4 p-4 md:(p-6) lg:p-8 bg-gray-100`
export const InputColumn = tw.div`flex flex-row flex-1 items-center justify-between w-full md:(flex-col space-y-4) lg:(space-y-8)`
