import cn from "./styles.module.scss";
import BlogNews from "@/components/Blog/BlogNews";
import BlogBlog from "@/components/Blog/BlogBlog";
import Link from "next/link";

const BlogComponent = ({ blogState, blogStateHandler, blogsComponent, newsComponent }) => {
    return (
        <div className={cn.container}>
            <div className={cn.container__header}>
                <div className={cn.container__header_menu}>
                    <div className={blogState === 'news' ? cn.main_text : cn.regular_text} onClick={() => blogStateHandler('news')}>Новости</div>
                    <div className={blogState !== 'news' ? cn.main_text : cn.regular_text} onClick={() => blogStateHandler('blog')}>Блог</div>
                </div>
                {
                    blogState === 'news'
                        ? <Link href="/news" ><button>Все новости</button></Link>
                        : <Link href="/blog" ><button>Все статьи</button></Link>
                }
            </div>
            <div className={cn.container__slider}>
                {
                    blogState === 'news' ? <BlogNews newsComponent={newsComponent} /> : <BlogBlog blogsComponent={blogsComponent} />
                }
            </div>
        </div>
    );
}

export default BlogComponent;