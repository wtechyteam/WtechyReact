export const headerData = [
    {
        id:1,
        title: "home",
        link: '/',
    },
    {
        id:2,
        title: "About Us",
        link: "about-agency",
        eventKey: "0",

    },
    {
        id:3,
        title: "Services",
        link: "/service",
        eventKey: "1",
        menuType: "submenu",
        subMenu: [
            {
                subtitle: "Services",
                subLinks: [
                    {
                        id: 1,
                        subLinkName: "search engine optimization",
                        path: "service/search-engine-optimization"
                    },
                    {
                        id: 2,
                        subLinkName: "social media optimization",
                        path: "service/social-media-optimization"
                    },
                    {
                        id: 3,
                        subLinkName: "google ads management",
                        path: "service/google-ads-management"
                    },
                    {
                        id: 4,
                        subLinkName: "content marketing",
                        path: "service/content-marketing"
                    }
                ]
            },
            {
                subtitle: "Repair Online Reputation",
                subLinks: [
                    {
                        id: 5,
                        subLinkName: "Corporate",
                        path: "service/repair-online-reputation-corporate"
                    },
                    {
                        id: 6,
                        subLinkName: "Personal",
                        path: "service/repair-online-reputation-personal"
                    },
                ]
            },
            {
                subtitle: "E-commerce Store Management",
                subLinks: [
                    {
                        id: 7,
                        subLinkName: "Amazon Store Management",
                        path: "service/amazon-store-management"
                    },
                    {
                        id: 8,
                        subLinkName: "Ebay Store Management",
                        path: "service/ebay-store-management"
                    },
                    {
                        id: 9,
                        subLinkName: "Shopify Store Management",
                        path: "service/shopify-store-management"
                    },
                    {
                        id: 10,
                        subLinkName: "Custom E-Commerce Store Management",
                        path: "service/custom-e-commerce-store-management-2"
                    },
                ]
            },
            {
                subtitle: "Online Reputation Marketing",
                subLinks: [
                    {
                        id: 11,
                        subLinkName: "Corporate",
                        path: "service/online-reputation-marketing-corporate"
                    },
                    {
                        id: 12,
                        subLinkName: "Personal",
                        path: "service/online-reputation-marketing-personal"
                    },
                ]

            },
            {
                subtitle: "Website Development",
                subLinks: [
                    {
                        id: 13,
                        subLinkName: "WordPress Development",
                        path: "service/wordpress-development"
                    },
                    {
                        id: 14,
                        subLinkName: "Shopify Development",
                        path: "service/shopify-development"
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
        id:8,
        title: "Contact",
        link: "contact",
        customClass: "headerBtn"
    }
]