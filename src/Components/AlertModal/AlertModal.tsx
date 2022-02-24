import { ReactNode } from 'react'

interface ResultModalTypes {
  children: ReactNode
}

export const AlertModal = ({ children }: ResultModalTypes) => {
  return <div>{children}</div>
}

// the alert modal should take in , a message, an optional one, but the other component tyeps ensure that we dont mix and match, thus cuasing errors.
