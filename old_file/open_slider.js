var portfolioContainers = portfolioContainers || [];
portfolioContainers.push({
    instanceId: "portfolio-1",
    instanceAlias: "work",
    baseQuery: {
        post_type: "portfolio",
        post_status: "publish",
        posts_per_page: "20",
        paged: 0,
        meta_query: [{ key: "_thumbnail_id", compare: "EXISTS" }],
    },
    vcAttributes: [],
    postId: 3283,
    count: 42,
    countByTerms: {
        animals: 2,
        architecture: 11,
        "black-and-white": 12,
        city: 7,
        forest: 2,
        lakes: 4,
        macro: 6,
        nature: 12,
        people: 6,
        video: 3,
        winter: 8,
    },
    lightboxData: {
        options: {
            galleryId: "portfolio-1",
            mode: "lg-fade",
            singleNavMode: false,
            speed: 600,
            hideBarsDelay: 3000,
            hash: false,
            loop: true,
            kaliumHash: true,
            download: true,
            counter: true,
            enableDrag: true,
            pager: false,
            fullScreen: true,
            thumbnail: true,
            animateThumb: true,
            pullCaptionUp: true,
            showThumbByDefault: false,
            thumbMargin: 0,
            thumbContHeight: 100,
            thumbWidth: 100,
            currentPagerPosition: "middle",
            autoplay: true,
            autoplayControls: true,
            fourceAutoplay: false,
            progressBar: true,
            pause: 8000,
            zoom: true,
            scale: 1,
            startClass: "lg-start-fade lg-default-skin",
            share: true,
            rotate: false,
            rotateLeft: true,
            rotateRight: true,
            flipHorizontal: false,
            flipVertical: false,
        },
        entries: [
            {
                terms: ["city", "people"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1437623889155-075d40e2e59f.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1437623889155-075d40e2e59f.jpg 4000w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1437623889155-075d40e2e59f-300x200.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1437623889155-075d40e2e59f-768x512.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1437623889155-075d40e2e59f-1024x683.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1437623889155-075d40e2e59f-1612x1075.jpg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1437623889155-075d40e2e59f-1116x744.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1437623889155-075d40e2e59f-806x537.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1437623889155-075d40e2e59f-558x372.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1437623889155-075d40e2e59f-655x437.jpg 655w",
                sizes: "(max-width: 4000px) 100vw, 4000px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1437623889155-075d40e2e59f-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1437623889155-075d40e2e59f.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Subway Stop<\/h4>\n\t\t\t\n\t\t\t<p><a href="http:\/\/test.com">Still<\/a> life photography of subway system.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3789,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/subway-stop\/",
                slug: "subway-stop",
                index: 0,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/subway-stop\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/subway-stop\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/subway-stop\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/subway-stop\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/subway-stop\/",
                hash: "subway-stop",
            },
            {
                terms: ["architecture"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446654865015-ea77e09c9859.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446654865015-ea77e09c9859.jpeg 956w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446654865015-ea77e09c9859-195x300.jpeg 195w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446654865015-ea77e09c9859-768x1183.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446654865015-ea77e09c9859-665x1024.jpeg 665w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446654865015-ea77e09c9859-806x1241.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446654865015-ea77e09c9859-558x859.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446654865015-ea77e09c9859-655x1009.jpeg 655w",
                sizes: "(max-width: 956px) 100vw, 956px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446654865015-ea77e09c9859-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446654865015-ea77e09c9859.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Abstract Building<\/h4>\n\t\t\t\n\t\t\t<p>Complex and abstract buildings in Rotterdam<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3824,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/abstract-building\/",
                slug: "abstract-building",
                index: 1,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/abstract-building\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/abstract-building\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/abstract-building\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/abstract-building\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/abstract-building\/",
                hash: "abstract-building",
            },
            {
                terms: ["architecture", "city", "video"],
                poster:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446133132410-19df4d6610a1.jpeg",
                href: "https:\/\/vimeo.com\/119189638?autoplay=1",
                src: "https:\/\/vimeo.com\/119189638?autoplay=1",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446133132410-19df4d6610a1-150x150.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Big Cities<\/h4>\n\t\t\t\n\t\t\t<p>Video embedded from Vimeo<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3820,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/big-cities\/",
                slug: "big-cities",
                index: 2,
                subIndex: 0,
                pinterestShareUrl:
                    "https:\/\/vimeo.com\/119189638?autoplay=1",
                googleplusShareUrl:
                    "https:\/\/vimeo.com\/119189638?autoplay=1",
                twitterShareUrl:
                    "https:\/\/vimeo.com\/119189638?autoplay=1",
                facebookShareUrl:
                    "https:\/\/vimeo.com\/119189638?autoplay=1",
                hash: "big-cities",
            },
            {
                terms: ["winter"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446805527736-3d1bc6feda51.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446805527736-3d1bc6feda51.jpeg 1300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446805527736-3d1bc6feda51-200x300.jpeg 200w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446805527736-3d1bc6feda51-768x1154.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446805527736-3d1bc6feda51-682x1024.jpeg 682w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446805527736-3d1bc6feda51-1116x1677.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446805527736-3d1bc6feda51-806x1211.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446805527736-3d1bc6feda51-558x838.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446805527736-3d1bc6feda51-655x984.jpeg 655w",
                sizes: "(max-width: 1300px) 100vw, 1300px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446805527736-3d1bc6feda51-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446805527736-3d1bc6feda51.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Morning<\/h4>\n\t\t\t\n\t\t\t<p>Frozen trees<\/p>\n<p>Taken with my iPhone 7<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3872,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/morning\/",
                slug: "morning",
                index: 3,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/morning\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/morning\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/morning\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/morning\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/morning\/",
                hash: "morning",
            },
            {
                terms: ["animals", "black-and-white"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446018944197-6dcd4ccf2711.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446018944197-6dcd4ccf2711.jpg 1470w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446018944197-6dcd4ccf2711-300x200.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446018944197-6dcd4ccf2711-768x512.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446018944197-6dcd4ccf2711-1024x683.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446018944197-6dcd4ccf2711-1116x744.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446018944197-6dcd4ccf2711-806x537.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446018944197-6dcd4ccf2711-558x372.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446018944197-6dcd4ccf2711-655x437.jpg 655w",
                sizes: "(max-width: 1470px) 100vw, 1470px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446018944197-6dcd4ccf2711-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446018944197-6dcd4ccf2711.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Depressed<\/h4>\n\t\t\t\n\t\t\t<p>Old dog and his last days.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3815,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/depressed\/",
                slug: "depressed",
                index: 4,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/depressed\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/depressed\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/depressed\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/depressed\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/depressed\/",
                hash: "depressed",
            },
            {
                terms: ["lakes", "nature", "people"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1415226556993-1404e0c6e727.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1415226556993-1404e0c6e727.jpeg 1168w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1415226556993-1404e0c6e727-237x300.jpeg 237w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1415226556993-1404e0c6e727-768x971.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1415226556993-1404e0c6e727-810x1024.jpeg 810w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1415226556993-1404e0c6e727-1116x1410.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1415226556993-1404e0c6e727-806x1019.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1415226556993-1404e0c6e727-558x705.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1415226556993-1404e0c6e727-655x828.jpeg 655w",
                sizes: "(max-width: 1168px) 100vw, 1168px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1415226556993-1404e0c6e727-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1415226556993-1404e0c6e727.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Photo Gallery<\/h4>\n\t\t\t\n\t\t\t<p>Photo 1<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3823,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                slug: "image-gallery",
                index: 5,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                hash: "image-gallery",
            },
            {
                terms: ["lakes", "nature", "people"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77.jpeg 2600w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-1024x683.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-1612x1075.jpeg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-1116x744.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-806x538.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-655x437.jpeg 655w",
                sizes: "(max-width: 2600px) 100vw, 2600px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Photo Gallery<\/h4>\n\t\t\t\n\t\t\t<p>Photo 2<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3823,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                slug: "image-gallery",
                index: 6,
                subIndex: 1,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                hash: "image-gallery\/1",
            },
            {
                terms: ["lakes", "nature", "people"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8.jpg 2447w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-150x150.jpg 150w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-300x300.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-768x767.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-1024x1024.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-468x468.jpg 468w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-1612x1611.jpg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-1116x1115.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-806x805.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-558x558.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-655x654.jpg 655w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-21x21.jpg 21w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-35x35.jpg 35w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-30x30.jpg 30w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-17x17.jpg 17w",
                sizes: "(max-width: 2447px) 100vw, 2447px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Photo Gallery<\/h4>\n\t\t\t\n\t\t\t<p>Photo 3<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3823,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                slug: "image-gallery",
                index: 7,
                subIndex: 2,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                hash: "image-gallery\/2",
            },
            {
                terms: ["lakes", "nature", "people"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84.jpeg 3264w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-300x225.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-768x576.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-1024x768.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-1612x1209.jpeg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-1116x837.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-806x605.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-558x419.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-655x491.jpeg 655w",
                sizes: "(max-width: 3264px) 100vw, 3264px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Photo Gallery<\/h4>\n\t\t\t\n\t\t\t<p>Photo 4<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3823,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                slug: "image-gallery",
                index: 8,
                subIndex: 3,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                hash: "image-gallery\/3",
            },
            {
                terms: ["lakes", "nature", "people"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b.jpeg 4775w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-300x144.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-768x369.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-1024x493.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-1612x775.jpeg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-1116x537.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-806x388.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-558x268.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-655x315.jpeg 655w",
                sizes: "(max-width: 4775px) 100vw, 4775px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Photo Gallery<\/h4>\n\t\t\t\n\t\t\t<p>Photo 5<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3823,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                slug: "image-gallery",
                index: 9,
                subIndex: 4,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/image-gallery\/",
                hash: "image-gallery\/4",
            },
            {
                terms: ["forest", "nature"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1434873740857-1bc5653afda8.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1434873740857-1bc5653afda8.jpg 986w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1434873740857-1bc5653afda8-201x300.jpg 201w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1434873740857-1bc5653afda8-768x1148.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1434873740857-1bc5653afda8-685x1024.jpg 685w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1434873740857-1bc5653afda8-806x1205.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1434873740857-1bc5653afda8-558x834.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1434873740857-1bc5653afda8-655x979.jpg 655w",
                sizes: "(max-width: 986px) 100vw, 986px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1434873740857-1bc5653afda8-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1434873740857-1bc5653afda8.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Custom Image<\/h4>\n\t\t\t\n\t\t\t<p>Mysterious Pine tree Landscape<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3825,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/custom-image\/",
                slug: "custom-image",
                index: 10,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/custom-image\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/custom-image\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/custom-image\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/custom-image\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/custom-image\/",
                hash: "custom-image",
            },
            {
                terms: ["nature", "winter"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444526288091-13feffd062e3.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444526288091-13feffd062e3.jpeg 1472w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444526288091-13feffd062e3-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444526288091-13feffd062e3-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444526288091-13feffd062e3-1024x683.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444526288091-13feffd062e3-1116x745.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444526288091-13feffd062e3-806x538.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444526288091-13feffd062e3-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444526288091-13feffd062e3-655x437.jpeg 655w",
                sizes: "(max-width: 1472px) 100vw, 1472px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444526288091-13feffd062e3-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444526288091-13feffd062e3.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Road to nowhere<\/h4>\n\t\t\t\n\t\t\t<p>Northern Alaska<\/p>\n<p><a href="https:\/\/1.envato.market\/KYm9a">Description area also supports links<\/a><\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3844,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/road-to-nowhere\/",
                slug: "road-to-nowhere",
                index: 11,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/road-to-nowhere\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/road-to-nowhere\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/road-to-nowhere\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/road-to-nowhere\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/road-to-nowhere\/",
                hash: "road-to-nowhere",
            },
            {
                terms: ["city", "people", "video"],
                poster:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446160657592-4782fb76fb99.jpeg",
                href: "https:\/\/www.youtube.com\/watch?v=slKeKRqXdmw",
                src: "https:\/\/www.youtube.com\/watch?v=slKeKRqXdmw",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446160657592-4782fb76fb99-150x150.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Freedom<\/h4>\n\t\t\t\n\t\t\t<p>YouTube hosted Video<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3870,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/freedom\/",
                slug: "freedom",
                index: 12,
                subIndex: 0,
                pinterestShareUrl:
                    "https:\/\/www.youtube.com\/watch?v=slKeKRqXdmw",
                googleplusShareUrl:
                    "https:\/\/www.youtube.com\/watch?v=slKeKRqXdmw",
                twitterShareUrl:
                    "https:\/\/www.youtube.com\/watch?v=slKeKRqXdmw",
                facebookShareUrl:
                    "https:\/\/www.youtube.com\/watch?v=slKeKRqXdmw",
                hash: "freedom",
            },
            {
                terms: ["forest", "nature"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445187118261-1593a5af9bdf.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445187118261-1593a5af9bdf.jpeg 1440w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445187118261-1593a5af9bdf-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445187118261-1593a5af9bdf-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445187118261-1593a5af9bdf-1024x683.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445187118261-1593a5af9bdf-1116x744.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445187118261-1593a5af9bdf-806x537.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445187118261-1593a5af9bdf-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445187118261-1593a5af9bdf-655x437.jpeg 655w",
                sizes: "(max-width: 1440px) 100vw, 1440px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445187118261-1593a5af9bdf-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445187118261-1593a5af9bdf.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Forest<\/h4>\n\t\t\t\n\t\t\t<p>Wild highland forest<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3832,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/forest\/",
                slug: "forest",
                index: 13,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/forest\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/forest\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/forest\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/forest\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/forest\/",
                hash: "forest",
            },
            {
                terms: ["lakes", "nature"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b.jpeg 4775w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-300x144.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-768x369.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-1024x493.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-1612x775.jpeg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-1116x537.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-806x388.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-558x268.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-655x315.jpeg 655w",
                sizes: "(max-width: 4775px) 100vw, 4775px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445820444241-15838377587b.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Morning Beach<\/h4>\n\t\t\t\n\t\t\t<p>Californian Lifestyle<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3888,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/morning-beach\/",
                slug: "morning-beach",
                index: 14,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/morning-beach\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/morning-beach\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/morning-beach\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/morning-beach\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/morning-beach\/",
                hash: "morning-beach",
            },
            {
                terms: [],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1440347306022-52a6c51b8dc1.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1440347306022-52a6c51b8dc1.jpeg 1452w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1440347306022-52a6c51b8dc1-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1440347306022-52a6c51b8dc1-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1440347306022-52a6c51b8dc1-1024x683.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1440347306022-52a6c51b8dc1-1116x744.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1440347306022-52a6c51b8dc1-806x537.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1440347306022-52a6c51b8dc1-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1440347306022-52a6c51b8dc1-655x437.jpeg 655w",
                sizes: "(max-width: 1452px) 100vw, 1452px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1440347306022-52a6c51b8dc1-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1440347306022-52a6c51b8dc1.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Above the clouds<\/h4>\n\t\t\t\n\t\t\t<p>Mountains above the clouds.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3869,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/above-the-clouds\/",
                slug: "above-the-clouds",
                index: 15,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/above-the-clouds\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/above-the-clouds\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/above-the-clouds\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/above-the-clouds\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/above-the-clouds\/",
                hash: "above-the-clouds",
            },
            {
                terms: ["black-and-white"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo.jpg 5000w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-300x200.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-768x512.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1024x683.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1612x1075.jpg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1116x744.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-806x537.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-558x372.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-655x437.jpg 655w",
                sizes: "(max-width: 5000px) 100vw, 5000px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Full Moon<\/h4>\n\t\t\t\n\t\t\t<p>Under the moonlight<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3868,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/full-moon\/",
                slug: "full-moon",
                index: 16,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/full-moon\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/full-moon\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/full-moon\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/full-moon\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/full-moon\/",
                hash: "full-moon",
            },
            {
                terms: ["architecture", "city"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1442406964439-e46ab8eff7c4.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1442406964439-e46ab8eff7c4.jpg 1476w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1442406964439-e46ab8eff7c4-300x200.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1442406964439-e46ab8eff7c4-768x512.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1442406964439-e46ab8eff7c4-1024x683.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1442406964439-e46ab8eff7c4-1116x744.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1442406964439-e46ab8eff7c4-806x537.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1442406964439-e46ab8eff7c4-558x372.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1442406964439-e46ab8eff7c4-655x437.jpg 655w",
                sizes: "(max-width: 1476px) 100vw, 1476px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1442406964439-e46ab8eff7c4-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1442406964439-e46ab8eff7c4.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Architectural<\/h4>\n\t\t\t\n\t\t\t<p>Abstract forms in Architecture<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3864,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/architectural\/",
                slug: "architectural",
                index: 17,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/architectural\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/architectural\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/architectural\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/architectural\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/architectural\/",
                hash: "architectural",
            },
            {
                terms: ["architecture"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446057468532-87b7525217d6.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446057468532-87b7525217d6.jpeg 1440w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446057468532-87b7525217d6-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446057468532-87b7525217d6-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446057468532-87b7525217d6-1024x683.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446057468532-87b7525217d6-1116x744.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446057468532-87b7525217d6-806x537.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446057468532-87b7525217d6-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446057468532-87b7525217d6-655x437.jpeg 655w",
                sizes: "(max-width: 1440px) 100vw, 1440px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446057468532-87b7525217d6-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446057468532-87b7525217d6.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Uninhabited<\/h4>\n\t\t\t\n\t\t\t<p>Apartment in Paris<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3856,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/uninhabited\/",
                slug: "uninhabited",
                index: 18,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/uninhabited\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/uninhabited\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/uninhabited\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/uninhabited\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/uninhabited\/",
                hash: "uninhabited",
            },
            {
                terms: ["lakes", "nature", "winter"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84.jpeg 3264w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-300x225.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-768x576.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-1024x768.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-1612x1209.jpeg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-1116x837.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-806x605.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-558x419.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-655x491.jpeg 655w",
                sizes: "(max-width: 3264px) 100vw, 3264px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446470160026-8529a28f0f84.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Cold Waters<\/h4>\n\t\t\t\n\t\t\t<p>European Alps<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3859,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/cold-waters\/",
                slug: "cold-waters",
                index: 19,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/cold-waters\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/cold-waters\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/cold-waters\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/cold-waters\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/cold-waters\/",
                hash: "cold-waters",
            },
            {
                terms: ["people", "video"],
                poster:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/berlin.png",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/berlin-150x150.png",
                html: "#video-75fe76df4272d9a8bff9432f30450630",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>One Day in Berlin. Motion Timelapse.<\/h4>\n\t\t\t\n\t\t\t\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3921,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/berlin-in-motion\/",
                slug: "berlin-in-motion",
                index: 20,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/berlin-in-motion\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/berlin-in-motion\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/berlin-in-motion\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/berlin-in-motion\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/berlin-in-motion\/",
                hash: "berlin-in-motion",
            },
            {
                terms: ["architecture"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photocarousel.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photocarousel.jpeg 5001w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photocarousel-300x169.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photocarousel-768x432.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photocarousel-1024x576.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photocarousel-1612x907.jpeg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photocarousel-1116x628.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photocarousel-806x453.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photocarousel-558x314.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photocarousel-655x368.jpeg 655w",
                sizes: "(max-width: 5001px) 100vw, 5001px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photocarousel-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photocarousel.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Carousel<\/h4>\n\t\t\t\n\t\t\t<p>London Eye<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3858,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/carousel\/",
                slug: "carousel",
                index: 21,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/carousel\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/carousel\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/carousel\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/carousel\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/carousel\/",
                hash: "carousel",
            },
            {
                terms: ["black-and-white", "city"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446771326090-d910bfaf00f6.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446771326090-d910bfaf00f6.jpeg 1497w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446771326090-d910bfaf00f6-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446771326090-d910bfaf00f6-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446771326090-d910bfaf00f6-1024x683.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446771326090-d910bfaf00f6-1116x744.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446771326090-d910bfaf00f6-806x537.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446771326090-d910bfaf00f6-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446771326090-d910bfaf00f6-655x437.jpeg 655w",
                sizes: "(max-width: 1497px) 100vw, 1497px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446771326090-d910bfaf00f6-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446771326090-d910bfaf00f6.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Structures<\/h4>\n\t\t\t\n\t\t\t<p>Projects of the future.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3848,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/structures\/",
                slug: "structures",
                index: 22,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/structures\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/structures\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/structures\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/structures\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/structures\/",
                hash: "structures",
            },
            {
                terms: ["black-and-white", "winter"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/829d24cf.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/829d24cf.jpeg 1441w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/829d24cf-300x199.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/829d24cf-768x510.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/829d24cf-1024x680.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/829d24cf-1116x741.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/829d24cf-806x535.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/829d24cf-558x371.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/829d24cf-655x435.jpeg 655w",
                sizes: "(max-width: 1441px) 100vw, 1441px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/829d24cf-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/829d24cf.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Train<\/h4>\n\t\t\t\n\t\t\t<p>Empty Trains of Eastern Europe<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3878,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/train\/",
                slug: "train",
                index: 23,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/train\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/train\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/train\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/train\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/train\/",
                hash: "train",
            },
            {
                terms: ["macro"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446822775955-c34f483b410b.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446822775955-c34f483b410b.jpeg 1460w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446822775955-c34f483b410b-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446822775955-c34f483b410b-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446822775955-c34f483b410b-1024x682.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446822775955-c34f483b410b-1116x744.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446822775955-c34f483b410b-806x537.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446822775955-c34f483b410b-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446822775955-c34f483b410b-655x437.jpeg 655w",
                sizes: "(max-width: 1460px) 100vw, 1460px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446822775955-c34f483b410b-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446822775955-c34f483b410b.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Champagne<\/h4>\n\t\t\t\n\t\t\t<p>Santorini, Greece<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3849,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/champagne\/",
                slug: "champagne",
                index: 24,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/champagne\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/champagne\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/champagne\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/champagne\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/champagne\/",
                hash: "champagne",
            },
            {
                terms: ["black-and-white", "nature"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/C3eOS3DFQgGkcuEXMulZ_IMG_2033.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/C3eOS3DFQgGkcuEXMulZ_IMG_2033.jpg 4272w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/C3eOS3DFQgGkcuEXMulZ_IMG_2033-300x200.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/C3eOS3DFQgGkcuEXMulZ_IMG_2033-768x512.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/C3eOS3DFQgGkcuEXMulZ_IMG_2033-1024x683.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/C3eOS3DFQgGkcuEXMulZ_IMG_2033-1612x1075.jpg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/C3eOS3DFQgGkcuEXMulZ_IMG_2033-1116x744.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/C3eOS3DFQgGkcuEXMulZ_IMG_2033-806x537.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/C3eOS3DFQgGkcuEXMulZ_IMG_2033-558x372.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/C3eOS3DFQgGkcuEXMulZ_IMG_2033-655x437.jpg 655w",
                sizes: "(max-width: 4272px) 100vw, 4272px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/C3eOS3DFQgGkcuEXMulZ_IMG_2033-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/C3eOS3DFQgGkcuEXMulZ_IMG_2033.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Fields of Gold<\/h4>\n\t\t\t\n\t\t\t<p>Inspired from the song of Sting<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3846,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/fields-of-gold\/",
                slug: "fields-of-gold",
                index: 25,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/fields-of-gold\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/fields-of-gold\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/fields-of-gold\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/fields-of-gold\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/fields-of-gold\/",
                hash: "fields-of-gold",
            },
            {
                terms: ["architecture"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444237044742-4737669bba2c.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444237044742-4737669bba2c.jpeg 4032w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444237044742-4737669bba2c-300x225.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444237044742-4737669bba2c-768x576.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444237044742-4737669bba2c-1024x768.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444237044742-4737669bba2c-1612x1209.jpeg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444237044742-4737669bba2c-1116x837.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444237044742-4737669bba2c-806x605.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444237044742-4737669bba2c-558x419.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444237044742-4737669bba2c-655x491.jpeg 655w",
                sizes: "(max-width: 4032px) 100vw, 4032px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444237044742-4737669bba2c-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1444237044742-4737669bba2c.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Lighthouse<\/h4>\n\t\t\t\n\t\t\t<p>The famous lighthouse.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3850,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/lighthouse\/",
                slug: "lighthouse",
                index: 26,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/lighthouse\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/lighthouse\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/lighthouse\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/lighthouse\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/lighthouse\/",
                hash: "lighthouse",
            },
            {
                terms: ["black-and-white", "winter"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-2.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-2.jpg 3872w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-2-300x201.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-2-768x514.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-2-1024x685.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-2-1612x1079.jpg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-2-1116x747.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-2-806x540.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-2-558x374.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-2-655x438.jpg 655w",
                sizes: "(max-width: 3872px) 100vw, 3872px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-2-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-2.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>T\u00e9l\u00e9ph\u00e9rique<\/h4>\n\t\t\t\n\t\t\t<p>Aerial Tramway System<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3835,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/telepherique\/",
                slug: "telepherique",
                index: 27,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/telepherique\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/telepherique\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/telepherique\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/telepherique\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/telepherique\/",
                hash: "telepherique",
            },
            {
                terms: ["nature", "winter"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1414541944151-2f3ec1cfd87d.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1414541944151-2f3ec1cfd87d.jpeg 1458w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1414541944151-2f3ec1cfd87d-300x199.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1414541944151-2f3ec1cfd87d-768x510.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1414541944151-2f3ec1cfd87d-1024x680.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1414541944151-2f3ec1cfd87d-1116x741.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1414541944151-2f3ec1cfd87d-806x535.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1414541944151-2f3ec1cfd87d-558x370.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1414541944151-2f3ec1cfd87d-655x435.jpeg 655w",
                sizes: "(max-width: 1458px) 100vw, 1458px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1414541944151-2f3ec1cfd87d-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1414541944151-2f3ec1cfd87d.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Winter Frost<\/h4>\n\t\t\t\n\t\t\t<p>Loads of snow<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3886,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/winter-frost\/",
                slug: "winter-frost",
                index: 28,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/winter-frost\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/winter-frost\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/winter-frost\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/winter-frost\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/winter-frost\/",
                hash: "winter-frost",
            },
            {
                terms: ["city"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1.jpg 1429w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1-300x183.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1-768x469.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1-1024x625.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1-1116x681.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1-806x492.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1-558x341.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1-655x400.jpg 655w",
                sizes: "(max-width: 1429px) 100vw, 1429px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-1.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Moonlight in Berlin<\/h4>\n\t\t\t\n\t\t\t<p>The german capital under the moonlight.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3834,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/moonlight-in-berlin\/",
                slug: "moonlight-in-berlin",
                index: 29,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/moonlight-in-berlin\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/moonlight-in-berlin\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/moonlight-in-berlin\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/moonlight-in-berlin\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/moonlight-in-berlin\/",
                hash: "moonlight-in-berlin",
            },
            {
                terms: ["architecture", "lakes"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8.jpg 2447w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-150x150.jpg 150w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-300x300.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-768x767.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-1024x1024.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-468x468.jpg 468w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-1612x1611.jpg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-1116x1115.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-806x805.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-558x558.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-655x654.jpg 655w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-21x21.jpg 21w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-35x35.jpg 35w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-30x30.jpg 30w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-17x17.jpg 17w",
                sizes: "(max-width: 2447px) 100vw, 2447px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447159840826-a8be01f52eb8.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Arches of a Bridge<\/h4>\n\t\t\t\n\t\t\t<p>Limitless arches of the bridge<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3857,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/arches-of-a-bridge\/",
                slug: "arches-of-a-bridge",
                index: 30,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/arches-of-a-bridge\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/arches-of-a-bridge\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/arches-of-a-bridge\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/arches-of-a-bridge\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/arches-of-a-bridge\/",
                hash: "arches-of-a-bridge",
            },
            {
                terms: ["black-and-white", "nature"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1439761414027-4f4ebeeda3a3.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1439761414027-4f4ebeeda3a3.jpeg 1440w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1439761414027-4f4ebeeda3a3-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1439761414027-4f4ebeeda3a3-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1439761414027-4f4ebeeda3a3-1024x683.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1439761414027-4f4ebeeda3a3-1116x744.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1439761414027-4f4ebeeda3a3-806x537.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1439761414027-4f4ebeeda3a3-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1439761414027-4f4ebeeda3a3-655x437.jpeg 655w",
                sizes: "(max-width: 1440px) 100vw, 1440px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1439761414027-4f4ebeeda3a3-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1439761414027-4f4ebeeda3a3.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Waterfall<\/h4>\n\t\t\t\n\t\t\t<p>Victorian waterfalls in Vancouver.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3833,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/waterfall\/",
                slug: "waterfall",
                index: 31,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/waterfall\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/waterfall\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/waterfall\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/waterfall\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/waterfall\/",
                hash: "waterfall",
            },
            {
                terms: ["macro"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448724133127-81fbec83d1ae.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448724133127-81fbec83d1ae.jpeg 1444w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448724133127-81fbec83d1ae-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448724133127-81fbec83d1ae-768x513.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448724133127-81fbec83d1ae-1024x684.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448724133127-81fbec83d1ae-1116x745.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448724133127-81fbec83d1ae-806x538.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448724133127-81fbec83d1ae-558x373.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448724133127-81fbec83d1ae-655x437.jpeg 655w",
                sizes: "(max-width: 1444px) 100vw, 1444px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448724133127-81fbec83d1ae-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448724133127-81fbec83d1ae.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Frosted Pine<\/h4>\n\t\t\t\n\t\t\t<p>Sunshines over Pine Tree<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3860,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/frosted-pine\/",
                slug: "frosted-pine",
                index: 32,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/frosted-pine\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/frosted-pine\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/frosted-pine\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/frosted-pine\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/frosted-pine\/",
                hash: "frosted-pine",
            },
            {
                terms: ["architecture", "black-and-white", "city"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445699269025-bcc2c8f3faee.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445699269025-bcc2c8f3faee.jpeg 5472w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445699269025-bcc2c8f3faee-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445699269025-bcc2c8f3faee-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445699269025-bcc2c8f3faee-1024x683.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445699269025-bcc2c8f3faee-1612x1075.jpeg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445699269025-bcc2c8f3faee-1116x744.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445699269025-bcc2c8f3faee-806x537.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445699269025-bcc2c8f3faee-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445699269025-bcc2c8f3faee-655x437.jpeg 655w",
                sizes: "(max-width: 5472px) 100vw, 5472px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445699269025-bcc2c8f3faee-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1445699269025-bcc2c8f3faee.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>NYC<\/h4>\n\t\t\t\n\t\t\t<p>The capital of skyscrapers<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3842,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/nyc\/",
                slug: "nyc",
                index: 33,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/nyc\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/nyc\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/nyc\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/nyc\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/nyc\/",
                hash: "nyc",
            },
            {
                terms: ["macro"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/potato.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/potato.jpg 1915w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/potato-188x300.jpg 188w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/potato-768x1229.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/potato-640x1024.jpg 640w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/potato-1612x2579.jpg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/potato-1116x1786.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/potato-806x1290.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/potato-558x893.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/potato-655x1048.jpg 655w",
                sizes: "(max-width: 1915px) 100vw, 1915px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/potato-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/potato.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Fork<\/h4>\n\t\t\t\n\t\t\t<p>Food caught by fork<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3836,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/fork\/",
                slug: "fork",
                index: 34,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/fork\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/fork\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/fork\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/fork\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/fork\/",
                hash: "fork",
            },
            {
                terms: ["macro", "winter"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448908828366-ae00562d5fde.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448908828366-ae00562d5fde.jpeg 1452w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448908828366-ae00562d5fde-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448908828366-ae00562d5fde-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448908828366-ae00562d5fde-1024x683.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448908828366-ae00562d5fde-1116x744.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448908828366-ae00562d5fde-806x537.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448908828366-ae00562d5fde-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448908828366-ae00562d5fde-655x437.jpeg 655w",
                sizes: "(max-width: 1452px) 100vw, 1452px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448908828366-ae00562d5fde-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1448908828366-ae00562d5fde.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Frozen<\/h4>\n\t\t\t\n\t\t\t<p>First days of Winter and Frost<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3826,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/frozen\/",
                slug: "frozen",
                index: 35,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/frozen\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/frozen\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/frozen\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/frozen\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/frozen\/",
                hash: "frozen",
            },
            {
                terms: ["architecture"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/IAG5tj7gThy5rOupZ5FK_IMG_3906.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/IAG5tj7gThy5rOupZ5FK_IMG_3906.jpg 1477w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/IAG5tj7gThy5rOupZ5FK_IMG_3906-300x200.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/IAG5tj7gThy5rOupZ5FK_IMG_3906-768x512.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/IAG5tj7gThy5rOupZ5FK_IMG_3906-1024x683.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/IAG5tj7gThy5rOupZ5FK_IMG_3906-1116x744.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/IAG5tj7gThy5rOupZ5FK_IMG_3906-806x538.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/IAG5tj7gThy5rOupZ5FK_IMG_3906-558x372.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/IAG5tj7gThy5rOupZ5FK_IMG_3906-655x437.jpg 655w",
                sizes: "(max-width: 1477px) 100vw, 1477px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/IAG5tj7gThy5rOupZ5FK_IMG_3906-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/IAG5tj7gThy5rOupZ5FK_IMG_3906.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Concrete<\/h4>\n\t\t\t\n\t\t\t<p>Architecture made by concrete<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3822,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/concrete\/",
                slug: "concrete",
                index: 36,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/concrete\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/concrete\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/concrete\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/concrete\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/concrete\/",
                hash: "concrete",
            },
            {
                terms: ["nature", "winter"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447877085163-3cce903855cd.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447877085163-3cce903855cd.jpeg 1920w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447877085163-3cce903855cd-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447877085163-3cce903855cd-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447877085163-3cce903855cd-1024x683.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447877085163-3cce903855cd-1612x1075.jpeg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447877085163-3cce903855cd-1116x744.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447877085163-3cce903855cd-806x537.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447877085163-3cce903855cd-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447877085163-3cce903855cd-655x437.jpeg 655w",
                sizes: "(max-width: 1920px) 100vw, 1920px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447877085163-3cce903855cd-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1447877085163-3cce903855cd.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Coziness<\/h4>\n\t\t\t\n\t\t\t<p>Aurora Lights in Norway.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3847,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/coziness\/",
                slug: "coziness",
                index: 37,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/coziness\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/coziness\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/coziness\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/coziness\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/coziness\/",
                hash: "coziness",
            },
            {
                terms: ["architecture", "black-and-white"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-3.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-3.jpg 1469w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-3-300x200.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-3-768x511.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-3-1024x682.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-3-1116x743.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-3-806x537.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-3-558x371.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-3-655x436.jpg 655w",
                sizes: "(max-width: 1469px) 100vw, 1469px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-3-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-3.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Minimalism<\/h4>\n\t\t\t\n\t\t\t<p>Clean 20th Century Building<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3814,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/minimalism\/",
                slug: "minimalism",
                index: 38,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/minimalism\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/minimalism\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/minimalism\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/minimalism\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/minimalism\/",
                hash: "minimalism",
            },
            {
                terms: [],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77.jpeg 2600w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-1024x683.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-1612x1075.jpeg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-1116x744.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-806x538.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-655x437.jpeg 655w",
                sizes: "(max-width: 2600px) 100vw, 2600px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446426156356-92b664d86b77.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Flat Island<\/h4>\n\t\t\t\n\t\t\t<p>In the shores of Dalmatia<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3813,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/flat-island\/",
                slug: "flat-island",
                index: 39,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/flat-island\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/flat-island\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/flat-island\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/flat-island\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/flat-island\/",
                hash: "flat-island",
            },
            {
                terms: ["black-and-white", "people"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/hKViPxgDRGuiGns6wv5S_IMG_5317.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/hKViPxgDRGuiGns6wv5S_IMG_5317.jpeg 2304w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/hKViPxgDRGuiGns6wv5S_IMG_5317-300x200.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/hKViPxgDRGuiGns6wv5S_IMG_5317-768x512.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/hKViPxgDRGuiGns6wv5S_IMG_5317-1024x683.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/hKViPxgDRGuiGns6wv5S_IMG_5317-1612x1075.jpeg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/hKViPxgDRGuiGns6wv5S_IMG_5317-1116x744.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/hKViPxgDRGuiGns6wv5S_IMG_5317-806x537.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/hKViPxgDRGuiGns6wv5S_IMG_5317-558x372.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/hKViPxgDRGuiGns6wv5S_IMG_5317-655x437.jpeg 655w",
                sizes: "(max-width: 2304px) 100vw, 2304px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/hKViPxgDRGuiGns6wv5S_IMG_5317-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/hKViPxgDRGuiGns6wv5S_IMG_5317.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Shades of Guitar<\/h4>\n\t\t\t\n\t\t\t<p>Silhouette of a Guitarist.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3812,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/shades-of-guitar\/",
                slug: "shades-of-guitar",
                index: 40,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/shades-of-guitar\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/shades-of-guitar\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/shades-of-guitar\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/shades-of-guitar\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/shades-of-guitar\/",
                hash: "shades-of-guitar",
            },
            {
                terms: ["architecture", "nature"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446144525544-808f420174ec.jpeg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446144525544-808f420174ec.jpeg 2000w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446144525544-808f420174ec-300x255.jpeg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446144525544-808f420174ec-768x654.jpeg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446144525544-808f420174ec-1024x871.jpeg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446144525544-808f420174ec-1612x1372.jpeg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446144525544-808f420174ec-1116x950.jpeg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446144525544-808f420174ec-806x686.jpeg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446144525544-808f420174ec-558x475.jpeg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446144525544-808f420174ec-655x557.jpeg 655w",
                sizes: "(max-width: 2000px) 100vw, 2000px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446144525544-808f420174ec-150x150.jpeg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/photo-1446144525544-808f420174ec.jpeg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Middle of Nowhere<\/h4>\n\t\t\t\n\t\t\t<p>A lonely house in Kentucky.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3810,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/middle-of-nowhere\/",
                slug: "middle-of-nowhere",
                index: 41,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/middle-of-nowhere\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/middle-of-nowhere\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/middle-of-nowhere\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/middle-of-nowhere\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/middle-of-nowhere\/",
                hash: "middle-of-nowhere",
            },
            {
                terms: ["macro"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/grapes.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/grapes.jpg 965w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/grapes-201x300.jpg 201w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/grapes-768x1148.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/grapes-685x1024.jpg 685w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/grapes-806x1204.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/grapes-558x834.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/grapes-655x979.jpg 655w",
                sizes: "(max-width: 965px) 100vw, 965px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/grapes-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/grapes.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Grapes<\/h4>\n\t\t\t\n\t\t\t<p>White grapes cultivated for wine.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3797,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/grapes\/",
                slug: "grapes",
                index: 42,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/grapes\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/grapes\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/grapes\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/grapes\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/grapes\/",
                hash: "grapes",
            },
            {
                terms: ["macro", "people"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-4.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-4.jpg 1444w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-4-300x200.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-4-768x513.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-4-1024x684.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-4-1116x745.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-4-806x538.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-4-558x373.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-4-655x437.jpg 655w",
                sizes: "(max-width: 1444px) 100vw, 1444px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-4-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/pexels-photo-4.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Refugee Kid<\/h4>\n\t\t\t\n\t\t\t<p>Little kid standing in the camp.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3808,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/refugee-kid\/",
                slug: "refugee-kid",
                index: 43,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/refugee-kid\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/refugee-kid\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/refugee-kid\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/refugee-kid\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/refugee-kid\/",
                hash: "refugee-kid",
            },
            {
                terms: ["animals", "black-and-white"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/animal-eyes-animals-black.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/animal-eyes-animals-black.jpg 1477w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/animal-eyes-animals-black-300x200.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/animal-eyes-animals-black-768x512.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/animal-eyes-animals-black-1024x683.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/animal-eyes-animals-black-1116x744.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/animal-eyes-animals-black-806x538.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/animal-eyes-animals-black-558x372.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/animal-eyes-animals-black-655x437.jpg 655w",
                sizes: "(max-width: 1477px) 100vw, 1477px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/animal-eyes-animals-black-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/12\/animal-eyes-animals-black.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Black Kitten<\/h4>\n\t\t\t\n\t\t\t<p>Kitten standing in the sunshine.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3806,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/black-kitten\/",
                slug: "black-kitten",
                index: 44,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/black-kitten\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/black-kitten\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/black-kitten\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/black-kitten\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/black-kitten\/",
                hash: "black-kitten",
            },
            {
                terms: ["black-and-white", "nature"],
                src: "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/07\/photo-1414432667065-fbbcad756703.jpg",
                srcset:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/07\/photo-1414432667065-fbbcad756703.jpg 3264w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/07\/photo-1414432667065-fbbcad756703-300x225.jpg 300w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/07\/photo-1414432667065-fbbcad756703-768x576.jpg 768w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/07\/photo-1414432667065-fbbcad756703-1024x768.jpg 1024w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/07\/photo-1414432667065-fbbcad756703-1612x1209.jpg 1612w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/07\/photo-1414432667065-fbbcad756703-1116x837.jpg 1116w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/07\/photo-1414432667065-fbbcad756703-806x605.jpg 806w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/07\/photo-1414432667065-fbbcad756703-558x419.jpg 558w, https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/07\/photo-1414432667065-fbbcad756703-655x491.jpg 655w",
                sizes: "(max-width: 3264px) 100vw, 3264px",
                thumb:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/07\/photo-1414432667065-fbbcad756703-150x150.jpg",
                downloadUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/wp-content\/uploads\/2015\/07\/photo-1414432667065-fbbcad756703.jpg",
                subHtml:
                    '        <div class="kalium-portfolio-lightbox-item-caption">\n\n\t\t\t\n\t\t\t                <h4>Desert Fog<\/h4>\n\t\t\t\n\t\t\t<p>Fog over the Sahara Desert.<\/p>\n\n\t\t\t\n        <\/div>\n\t\t',
                portfolioItemId: 3723,
                permalink:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/test\/",
                slug: "test",
                index: 45,
                subIndex: 0,
                href: "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/test\/",
                pinterestShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/test\/",
                googleplusShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/test\/",
                twitterShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/test\/",
                facebookShareUrl:
                    "https:\/\/demo.kaliumtheme.com\/photography\/portfolio\/test\/",
                hash: "test",
            },
        ],
    },
    filterPushState: false,
});