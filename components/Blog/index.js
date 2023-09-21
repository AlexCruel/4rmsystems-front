import cn from "./styles.module.scss";
import BlogNews from "@/components/Blog/BlogNews";
import BlogBlog from "@/components/Blog/BlogBlog";
import Link from "next/link";
import {getCookie} from "cookies-next";

const BlogComponent = ({ blogState, blogStateHandler, blogsComponent, newsComponent }) => {
    const lang = getCookie('lang');

    return (
        <div className={cn.container}>
            <div className={cn.container__header}>
                <div className={cn.container__header_menu}>
                    <div className={blogState === 'news' ? cn.main_text : cn.regular_text}
                         onClick={() => blogStateHandler('news')}
                         suppressHydrationWarning>
                        {lang === "ENG" ? "News" : "Новости"}
                    </div>
                    <div className={blogState !== 'news' ? cn.main_text : cn.regular_text}
                         onClick={() => blogStateHandler('blog')}
                         suppressHydrationWarning>
                        {lang === "ENG" ? "Articles" : "Блог"}
                    </div>
                </div>
                <div className={cn.container__btn_up}>
                    {
                        blogState === 'news'
                            ? <Link href="/news" ><button suppressHydrationWarning>{lang === "ENG" ? "All news" : "Все новости"}</button></Link>
                            : <Link href="/blog" ><button suppressHydrationWarning>{lang === "ENG" ? "All articles" : "Все статьи"}</button></Link>
                    }
                </div>
            </div>
            <div className={cn.container__slider}>
                {
                    blogState === 'news' ? <BlogNews newsComponent={newsComponent} /> : <BlogBlog blogsComponent={blogsComponent} />
                }
            </div>
            <div className={cn.container__btn_down}>
                {
                    blogState === 'news'
                        ? <Link href="/news" ><button suppressHydrationWarning>{lang === "ENG" ? "All news" : "Все новости"}</button></Link>
                        : <Link href="/blog" ><button suppressHydrationWarning>{lang === "ENG" ? "All articles" : "Все статьи"}</button></Link>
                }
            </div>
        </div>
    );
}

export default BlogComponent;