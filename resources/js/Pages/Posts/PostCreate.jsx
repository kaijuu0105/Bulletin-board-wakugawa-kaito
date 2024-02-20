import React, { useEffect } from 'react'
import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import TextInput from '@/Components/TextInput';
import TextareaInput from '@/Components/TextareaInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SubCategoriesSelect from '@/Components/SubCategoriesSelect';
import { useForm } from '@inertiajs/react';


export default function Index({ auth,subCategories }) {
    const { data, setData, post, processing, reset } = useForm({
        subCategoryId: '',
        title: '',
        post: ''
    });

    const postCreateSubit = (e) => {
        e.preventDefault();

        post(route('post.input'));
        reset()
    };

    return (
        <>
            <Head title="新規投稿" />
            <Header user={auth.user}/>
            <header className="">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">新規投稿画面</div>
            </header>
            <form onSubmit={postCreateSubit}>
                <SubCategoriesSelect 
                    id="subCategoryId"
                    name="subCategoryId"
                    value={data.subCategoryId}
                    onChange={(e) => setData('subCategoryId', e.target.value)}
                    subCategories={subCategories}
                /> 
                <div>
                    <TextInput
                        type="text" 
                        name='title' 
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        placeholder="タイトルを入力して下さい"
                    />  
                </div>
                <div>
                    <TextareaInput type="text" 
                        name='post' 
                        value={data.post}
                        onChange={(e) => setData('post', e.target.value)}
                        placeholder="投稿内容を入力して下さい" 
                    />
                </div>
                <PrimaryButton className="ms-4" disabled={processing}>
                    投稿
                </PrimaryButton>
            </form>
        </>
    );
}