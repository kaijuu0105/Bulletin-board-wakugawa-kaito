import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';
export default function Header({ user }) {
    return (
        <div className="bg-gray-100">
                        <nav className="bg-white border-b border-gray-100">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between h-16">
                                    <div className="flex">
                                        <div className="shrink-0 flex items-center">
                                            <span className="inline-flex rounded-md"> {user.username}さん</span>
                                        </div>
                                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                            <NavLink href={route('top')} active={route().current('top')} >
                                                投稿一覧
                                            </NavLink>
                                        </div>
                                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                            <NavLink href={route('post.create')} active={route().current('post.create')}>
                                                新規投稿
                                            </NavLink>
                                        </div> 
                                    </div>
                                    <div className="hidden sm:flex sm:items-center sm:ms-6">
                                        <div className="ms-3 relative">
                                            <Link href={route('logout')} method="post" as='button'>ログアウト</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div> 
    );
}