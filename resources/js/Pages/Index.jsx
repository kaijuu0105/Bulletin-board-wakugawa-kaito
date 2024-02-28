import Top from '@/Layouts/Top';
import Header from '../Components/Header';
import { Head } from '@inertiajs/react';

export default function Index({ auth, posts }) {
    // console.log(posts);
    return (
        <>
            <Head title="掲示板課題" />
            <Header user={auth.user}/>
            <Top user={auth.user} posts={posts} />
        </>
    );
}
