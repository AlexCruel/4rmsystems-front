import lightGallery from "lightgallery";
import 'lightgallery/css/lightgallery.css';
import lgPager from 'lightgallery/plugins/pager';
import lgComment from 'lightgallery/plugins/comment';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgShare from 'lightgallery/plugins/share';
import 'lightgallery/css/lg-pager.css';
import 'lightgallery/css/lg-comments.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-share.css';

/**
 * Template for usage
 *
 * <div id="lightgallery">
 *     <a data-linkedin-title="title for share link" data-vk-title="title for share link" data-sub-html="title under image" href="link photo">
 *         <img src="link photo">
 *     </a>
 * </div>
 *
 */

export const createLightGallery = () => {
    const elements = document.getElementsByClassName('lightgallery');

    for (let item of elements) {
        lightGallery(item, {
            speed: 500,
            download: false,
            pinterest: false,
            twitter: false,
            autoplayPluginStrings: { toggleAutoplay: 'Toggle Autoplay', },
            plugins: [lgPager, lgComment, lgAutoplay, lgShare],
            extraProps: ['twitterTitle', 'linkedinTitle', 'vkTitle'],
            additionalShareOptions: [
                {
                    selector: '.lg-share-twitter',
                    dropdownHTML: '<li class="lg-share-item-twitter"><a class="lg-share-twitter" target="_blank"><svg class="lg-svg" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><style>svg{fill:#4da9e7}</style><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg><span class="lg-dropdown-text">Twitter</span></a></li>',

                    generateLink: (galleryItem) => {
                        const url = encodeURIComponent(window.location.href);

                        const title = galleryItem.twitterTitle;
                        const twitterShareLink = `//twitter.com/intent/tweet?text=${title}&url=${url}`;
                        return twitterShareLink;
                    },
                },
                {
                    // Selector for the anchor tag inside share list item
                    selector: '.lg-share-linkedin',

                    // HTML to be appended to the share dropdown menu
                    dropdownHTML: '<li class="lg-share-item-linkedin"><a class="lg-share-linkedin" target="_blank"><svg class="lg-svg" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><style>svg{fill:#2d63bc}</style><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg><span class="lg-dropdown-text">LinkedIn</span></a></li>',

                    // Construct url
                    generateLink: (galleryItem) => {
                        const url = encodeURIComponent(window.location.href);

                        // The prop data-linkedin-title is converted to linkedinTitle and added to the gallery item
                        const title = galleryItem.linkedinTitle;
                        const linkedinShareLink = `//linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
                        return linkedinShareLink;
                    },
                },
                {
                    selector: '.lg-share-vk',
                    dropdownHTML: '<li class="lg-share-item-vk"><a class="lg-share-vk" target="_blank"><svg class="lg-svg" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><style>svg{fill:#3174f7}</style><path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"/></svg><span class="lg-dropdown-text">VK</span></a></li>',

                    generateLink: (galleryItem) => {
                        const url = encodeURIComponent(window.location.href);

                        const title = galleryItem.vkTitle;
                        const vkShareLink = `//vk.com/share.php?url=${url}&title=${title}`;
                        return vkShareLink;
                    },
                },
            ],
        });
    }
}