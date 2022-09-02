import tw from 'twin.macro'
import 'styled-components/macro'

export const Button = tw.button`transition duration-300 px-2 py-1 rounded-lg text-base text-gray-100 md:(px-4 py-2 text-lg) xl:(px-6 py-3 text-xl)`
export const SubmitButton = tw(Button)`bg-blue-700 hover:bg-blue-900`
export const DeleteButton = tw(Button)`bg-red-700 hover:bg-red-900`
