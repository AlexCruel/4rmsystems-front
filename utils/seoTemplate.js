import {getSeoTemplateData} from "@/utils/functions";

let seo = {
    seo_title: null,
    seo_description: null,
    seo_h1: null,
    seo_key: null
};

export const createSeoTemplate = async (item, type, lang) => {
    if (!item.seo_title || !item.seo_description) {
        const { seoTemplate } = await getSeoTemplateData(lang);

        const seo_h1 = item.seo_h1 + ' ';
        const seo_description = item.seo_h1 + '. ';
        seo.seo_h1 = item.seo_h1;
        seo.seo_key = item.seo_key;

        switch (type) {
            case 'news':
                seo.seo_title = seo_h1 + seoTemplate.seo_title_news;
                seo.seo_description = seo_description + seoTemplate.seo_description_news;
                break;
            case 'blog':
                seo.seo_title = seo_h1 + seoTemplate.seo_title_blog;
                seo.seo_description = seo_description + seoTemplate.seo_description_blog;
                break;
            case 'projects':
                seo.seo_title = seo_h1 + seoTemplate.seo_title_projects;
                seo.seo_description = seo_description + seoTemplate.seo_description_projects;
                break;
        }
    } else {
        seo.seo_title = item.seo_title;
        seo.seo_description = item.seo_description;
        seo.seo_h1 = item.seo_h1;
        seo.seo_key = item.seo_key;
    }

    return seo;
}

export const createTagSeoTemplate = async (item, type, lang) => {
    switch (type) {
        case 'tags_news':
            seo.seo_h1 = item.seo_h1_news;
            seo.seo_key = item.seo_key_news;

            if (!item.seo_title_news || !item.seo_description_news) {
                const { seoTemplate } = await getSeoTemplateData(lang);

                seo.seo_title = item.seo_h1_news + ' ' + seoTemplate.seo_title_tags;
                seo.seo_description = item.seo_h1_news + '. ' + seoTemplate.seo_description_tags;

            } else {
                seo.seo_title = item.seo_title_news;
                seo.seo_description = item.seo_description_news;
            }
            break;

        case 'tags_blog':
            seo.seo_h1 = item.seo_h1_blog;
            seo.seo_key = item.seo_key_blog;

            if (!item.seo_title_blog || !item.seo_description_blog) {
                const { seoTemplate } = await getSeoTemplateData(lang);

                seo.seo_title = item.seo_h1_blog + ' ' + seoTemplate.seo_title_tags;
                seo.seo_description = item.seo_h1_blog + '. ' + seoTemplate.seo_description_tags;

            } else {
                seo.seo_title = item.seo_title_blog;
                seo.seo_description = item.seo_description_blog;
            }
            break;
    }

    return seo;
}