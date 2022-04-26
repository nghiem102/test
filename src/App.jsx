import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFile } from './slice/FileStore'

const App = () => {
  const file = useSelector(data => data.file.value)
  console.log(file);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFile())
  },[])
  return (
    <div>App</div>
  )
}

export default App