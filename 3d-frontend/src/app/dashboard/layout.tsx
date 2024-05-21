import React from 'react'
import Sidebar from '../components/Sidebar'
import styles from './Layout.module.scss';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles['container']}>
      <div className={styles['sidebar']}>
        <Sidebar />
      </div>
      <div className={styles['body']}>
        {children}
      </div>
    </div>
  )
}

export default layout
