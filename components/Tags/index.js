import cn from "./styles.module.scss";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const Tags = ({ type, tags }) => {
    const router = useRouter();
    const isTagPath = router.route.includes('tag');
    const tag_id = router.query.tag_id;

    return (
        <div className={cn.container}>
            <div className={cn.container__tags}>
                <ul>
                    {tags.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={`/${type}/tag/${item.slug}`}>
                                    <button className={tag_id !== item.slug && isTagPath  ? cn.tags_disable : ''}>{item.name}</button>
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