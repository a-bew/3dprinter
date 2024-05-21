import React from 'react'
import CreateTableForm from './_component/CreateTableForm';

const page = () => {
    const key = 'create-table';

    switch (key) {
        case 'create-table':
            return (
                <div style={{ height: '80%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CreateTableForm />
                </div>
            );
        default:
            return (
                <div></div>
            )
    }
}

export default page