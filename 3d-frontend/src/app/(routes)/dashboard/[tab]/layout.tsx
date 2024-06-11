import React from 'react'
import styles from './Layout.module.scss';
import Sidebar from '@/app/_components/Sidebar';

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
