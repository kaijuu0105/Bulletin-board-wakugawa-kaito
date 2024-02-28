import { Link } from '@inertiajs/react';
export default function Top({ posts }) {
    console.log(posts);
    return (
            <div className="min-h-screen bg-gray-100">
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">掲示板投稿一覧</div>
                </header>
                {posts.map(post =>(
                    <div className="post_area border w-75 m-auto p-3" key={post.id}>
                        <p className="post-userName"><span>名前{post.user_id}</span>さん</p>
                        <p className="post-create-t">{post.updated_at}</p>
                        <p className="post-title">タイトル{post.title}</p>
                        <p className="post-subCategory">カテゴリー{post.post_sub_category_id}</p>
                        <div className="post_bottom_area d-flex">
                            <div className="d-flex post_status">
                                <div className="mr-5">
                                    <i className="fa fa-comment"></i><span className="comment-count comment_counts">３</span>
                                </div>
                                <div>
                                    <p className="m-0"><i className="fas fa-heart un_like_btn" post_id="aaa"></i><span className="like_counts">５</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div>
                    <Link href={route('categories')}>カテゴリーを追加</Link>
                </div>
                <div>
                    <form method='post'>
                        <input type="text" />
                        <button>検索</button>
                    </form>
                </div>
                <button>いいねした投稿</button>
                <button>自分の投稿</button>
            </div>
    
    );
}
