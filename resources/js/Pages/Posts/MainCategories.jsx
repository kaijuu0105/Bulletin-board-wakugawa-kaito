import React, { useEffect } from 'react'
import { Head } from '@inertiajs/react';
import Header from '../../Components/Header';
import TextInput from '@/Components/TextInput';
import Select from '@/Components/Select';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm } from '@inertiajs/react';

export default function MainCategories ({ auth, mainCategories }) {
    // const mainCategoryInput = useRef();
    console.log(mainCategories);

    const { data, setData, post, processing, reset } = useForm({
        mainCategory: '',
        mainCategoryId: '',
        subCategory: ''
    });

    // useEffect(() => {
    //     return () => {
    //         reset('mainCategory');
    //     };
    // }, []);

    const mainCategoryCreateSubit = (e) => {
        e.preventDefault();

        post(route('main.category.create'));
        reset()
    };

    const subCategoryCreateSubit = (e) => {
        e.preventDefault();

        post(route('sub.category.create'));
        reset()
    };
    

  return (
    <>
        <Head title="カテゴリー" />
        <Header user={auth.user}/>
        <div>
            <div>
                <div className='createMainCategories'>
                    <h4>新規メインカテゴリー</h4>
                    <form onSubmit={mainCategoryCreateSubit}>
                        <TextInput
                            id="mainCategory"
                            type="text"
                            name="mainCategory"
                            value={data.mainCategory}
                            onChange={(e) => setData('mainCategory', e.target.value)}
                            className="mt-1 block w-3/4"
                            placeholder="カテゴリーを追加"
                        />
                        <PrimaryButton className="ms-4" disabled={processing}>
                        追加
                        </PrimaryButton>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <h4>サブカテゴリー</h4>
                    <form onSubmit={subCategoryCreateSubit}>
                        <Select 
                            id="mainCategoryId"
                            name="mainCategoryId"
                            value={data.mainCategoryId}
                            onChange={(e) => setData('mainCategoryId', e.target.value)}
                            mainCategories={mainCategories}
                        >    
                        </Select>
                        {/* <select name="mainCategoriesId">
                            <option value="none">----</option>
                            {mainCategories.map(mainCategory => (
                                <option 
                                    value={mainCategory.id} key={mainCategory.id} onChange={(e) => setData('mainCategoryId', e.target.value)}>
                                    {mainCategory.main_category}
                                </option>
                            ))};
                        </select>*/}
                        <TextInput
                            type="text" 
                            name='subCategory' 
                            value={data.subCategory}
                            onChange={(e) => setData('subCategory', e.target.value)}
                            placeholder="サブカテゴリーを追加"
                         />                    
                        <button>追加</button>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <h4>カテゴリー一覧</h4>
                    <ul>
                        <p>Laravel</p>
                        <li>クラッド</li>
                        <button>削除</button>
                        <li>データベース</li>
                        <button>削除</button>
                    </ul>
                    <ul>
                        <p>React</p>
                        <button>削除</button>
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
}

                