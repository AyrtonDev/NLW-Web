import * as SelectR from '@radix-ui/react-select'
import {ReactNode} from 'react'

type SelectProps = {
  label: string
  placeholder: string
  children: ReactNode
  change: any
  value: string
  titleValue?: string
}

export function Select({
  label,
  value,
  titleValue,
  change,
  placeholder,
  children,
}: SelectProps) {
  return <></>
}
