export const headerData = [
    {
        id:1,
        title: "home",
        link: "/",
        metaTitle:'WTechy: Digital Marketing Agency | Website Development, SEO',
        metaDescription:'We maximize your business potential',
    },
    {
        id:2,
        title: "About Us",
        link: "/about-agency",
        metaTitle:'about df ',
        metaDescription:'We maximize your business potential'
    },
    {
        id:3,
        title: "Services",
        link: "/service",
        ServiceClass:"active_service",
        menuType: "submenu",
        metaTitle:'service df xxxxxxxxxxxxxxxx',
        metaDescription:'We maximize your business potential',
        subMenu: [
            {
                subtitle: "Seo Services",
                subLinks: [
                    {
                        id: 1,
                        title: "search engine optimization",
                        link: "service/search-engine-optimization"
                    },
                    {
                        id: 2,
                        title: "social media optimization",
                        link: "service/social-media-optimization"
                    },
                    {
                        id: 3,
                        title: "google ads management",
                        link: "service/google-ads-management"
                    },
                    {
                        id: 4,
                        title: "content marketing",
                        link: "service/content-marketing"
                    }
                ]
            },

            {
                subtitle: "E-commerce Store Management",
                subLinks: [
                    {
                        id: 7,
                        title: "Amazon Store Management",
                        link: "service/amazon-store-management"
                    },
                    {
                        id: 8,
                        title: "Ebay Store Management",
                        link: "service/ebay-store-management"
                    },
                    {
                        id: 9,
                        title: "Shopify Store Management",
                        link: "service/shopify-store-management"
                    },
                    {
                        id: 10,
                        title: "Custom E-Commerce Store Management",
                        link: "service/custom-e-commerce-store-management-2"
                    },
                ]
            },
            {
                subtitle: "Repair Online Reputation",
                subLinks: [
                    {
                        id: 5,
                        title: "Corporate",
                        link: "service/repair-online-reputation-corporate"
                    },
                    {
                        id: 6,
                        title: "Personal",
                        link: "service/repair-online-reputation-personal"
                    },
                ]
            },
            {
                subtitle: "Online Reputation Marketing",
                subLinks: [
                    {
                        id: 11,
                        key:true,
                        title: "Corporate",
                        link: "service/online-reputation-marketing-corporate"
                    },
                    {
                        id: 12,
                        key:true,
                        title: "Personal",
                        link: "service/online-reputation-marketing-personal"
                    },
                ]

            },
            {
                subtitle: "Website Development",
                subLinks: [
                    {
                        id: 13,
                        key:true,
                        title: "WordPress Development",
                        link: "service/wordpress-development"
                    },
                    {
                        id: 14,
                        key:true,
                        title: "Shopify Development",
                        link: "service/shopify-development"
                    },
                ]

            },

        ]
    },
    {
        id:4,
        title: "Insights",
        link: "insights",
    },
    {
        id:5,
        title: "Portfolio",
        link: "portfolio",
        eventKey: "2",

    },
    {
        id:6,
        title: "Top Work Marketplaces",
        link: "top-work-marketplaces",
    },
    {
        id:7,
        title: "Careers",
        link: "careers",
    },
    {
        title: "Contact",
        link: "contact",
        customClass: "headerBtn"
    }
]