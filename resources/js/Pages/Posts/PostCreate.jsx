import React from 'react'
import { Head } from '@inertiajs/react';
import Header from '../../Components/Header';

export default function Index({ auth }) {
    return (
        <>
            <Head title="sinn" />
            <Header user={auth.user}/>
        </>
    );
}