import {useRouter} from "next/router";
import Link from "next/link";
import cn from "./styles.module.scss";
import {getCookie} from "cookies-next";

const Breadcrumbs = ({ pre_title, title }) => {
    const router = useRouter();
    const lang = getCookie('lang');
    let titleCrumb = lang === "ENG" ? "Main" : "Главная"

    function generateBreadcrumbs() {

        if (title === "404") {
            // Add in a default "Home" crumb for the top-level
            return [{ href: "/", title: titleCrumb }, {href: "/", title}];
        } else {
            // Remove any query parameters, as those aren't included in breadcrumbs
            const asPathWithoutQuery = router.asPath.split("?")[0];

            // Break down the path between "/"s, removing empty entities
            // Ex:"/my/nested/path" --> ["my", "nested", "path"]
            const asPathNestedRoutes = asPathWithoutQuery.split("/")
                .filter(v => v.length > 0 && v !== "page" && v !== "tag" && Number.isInteger(Number(v)) !== true);

            // Iterate over the list of nested route parts and build
            // a "crumb" object for each one.
            const crumblist = asPathNestedRoutes.map((subpath, idx) => {
                // We can get the partial nested route for the crumb
                // by joining together the path parts up to this point.
                const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");

                // The title will just be the route string for now
                if (idx === 0 && asPathNestedRoutes.length >= 2) {
                    return { href, pre_title }
                } else {
                    return { href, title };
                }
            })

            // Add in a default "Home" crumb for the top-level
            return [{ href: "/", title: titleCrumb }, ...crumblist];
        }
    }

    // Call the function to generate the breadcrumbs list
    const breadcrumbs = generateBreadcrumbs();

    return (
        <ol className={cn.container} itemScope itemType="https://schema.org/BreadcrumbList">
            {breadcrumbs.map((crumb, idx) => (
                <Crumb {...crumb} key={idx} first={idx === 0} last={idx === breadcrumbs.length - 1} />
            ))}
        </ol>
    );
}

function Crumb({ title, pre_title, href, first = false, last= false }) {
    if (last) {
        return (
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                &nbsp;/&nbsp;
                <span itemProp="name" suppressHydrationWarning>{title}</span>
            </li>
        );
    }

    if (first) {
        return (
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href={href} itemProp="item"><span itemProp="name" suppressHydrationWarning>{title}</span></Link>
            </li>
        );
    }

    return (
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            &nbsp;/&nbsp;
            <Link href={href} itemProp="item"><span itemProp="name">{pre_title}</span></Link>
        </li>
    );
}

export default Breadcrumbs;