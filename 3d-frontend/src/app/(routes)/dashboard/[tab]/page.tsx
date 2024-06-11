'use client'
import React, { useEffect, useState } from 'react'
import CreateTableForm from './_component/CreateTableForm';
import { useRouter } from 'next/router';
import { usePathname, useSearchParams } from 'next/navigation';
import Overview from './_component/overview';

const page = () => {
    const key = 'create-table';
    const searchParams = useSearchParams()


    const pathname = usePathname()

    switch (pathname.split('/').pop()) {
        case 'overview':
            return (
                <div style={{ height: '80%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Overview open={false} />
                </div>
            )
        case 'create-table':
            return (
                <div style={{ height: '80%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CreateTableForm />
                </div>
            );
        default:
            return (
                <div>Here we are</div>
            )
    }
}

export default page