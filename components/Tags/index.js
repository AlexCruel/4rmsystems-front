import cn from "./styles.module.scss";
import Link from "next/link";

const Tags = ({ tags }) => {
    return (
        <div className={cn.container}>
            <div className={cn.container__tags}>
                {/*<button>Сортировать</button>*/}
                <ul>
                    {tags.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={`/projects/tag/${item.slug}`}>
                                    <button>{item.name}</button>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Tags;