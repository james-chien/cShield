import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks'
import { checking } from './slice'

export default function Updater() {
  const dispatch = useAppDispatch()
  const networkStatus = useAppSelector((state) => state.network.status)

  useEffect(() => {
    dispatch(checking())
  }, [dispatch])

  return null
}
