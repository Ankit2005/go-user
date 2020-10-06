import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link href='/'>
        Go User
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright