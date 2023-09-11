import {useRouter} from "next/router";
import Link from "next/link";

const Breadcrumbs = ({ pre_title, title }) => {
    const router = useRouter();

    function generateBreadcrumbs() {
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
        return [{ href: "/", title: "Главная" }, ...crumblist];
    }

    // Call the function to generate the breadcrumbs list
    const breadcrumbs = generateBreadcrumbs();

    return (
        <>
            {breadcrumbs.map((crumb, idx) => (
                <Crumb {...crumb} key={idx} first={idx === 0} last={idx === breadcrumbs.length - 1} />
            ))}
        </>
    );
}

function Crumb({ title, pre_title, href, first = false, last= false }) {
    if (last) {
        return <span>&nbsp;/&nbsp;{title}</span>
    }

    if (first) {
        return (
            <Link href={href}>{title}</Link>
        );
    }

    return (
        <>
            &nbsp;/&nbsp;<Link href={href}>{pre_title}</Link>
        </>
    );
}

export default Breadcrumbs;