import cn from "./styles.module.scss";
import Link from "next/link";

const Tags = ({ type, tags }) => {
    return (
        <div className={cn.container}>
            <div className={cn.container__tags}>
                {/*<button>Сортировать</button>*/}
                <ul>
                    {tags.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={`/${type}/tag/${item.slug}`}>
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