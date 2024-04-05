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
        ServiceClass:"active_service",
        eventKey: "1",
        menuType: "submenu",
        subMenu: [
            {
                subtitle: "Services",
                subLinks: [
                    {
                        id: 1,
                        key:true,
                        subLinkName: "search engine optimization",
                        path: "service/search-engine-optimization"
                    },
                    {
                        id: 2,
                        key:true,
                        subLinkName: "social media optimization",
                        path: "service/social-media-optimization"
                    },
                    {
                        id: 3,
                        key:true,
                        subLinkName: "google ads management",
                        path: "service/google-ads-management"
                    },
                    {
                        id: 4,
                        key:true,
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
                        key:true,
                        subLinkName: "Corporate",
                        path: "service/repair-online-reputation-corporate"
                    },
                    {
                        id: 6,
                        key:true,
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
                        key:true,
                        subLinkName: "Amazon Store Management",
                        path: "service/amazon-store-management"
                    },
                    {
                        id: 8,
                        key:true,
                        subLinkName: "Ebay Store Management",
                        path: "service/ebay-store-management"
                    },
                    {
                        id: 9,
                        key:true,
                        subLinkName: "Shopify Store Management",
                        path: "service/shopify-store-management"
                    },
                    {
                        id: 10,
                        key:true,
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
                        key:true,
                        subLinkName: "Corporate",
                        path: "service/online-reputation-marketing-corporate"
                    },
                    {
                        id: 12,
                        key:true,
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
                        key:true,
                        subLinkName: "WordPress Development",
                        path: "service/wordpress-development"
                    },
                    {
                        id: 14,
                        key:true,
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
        title: "Contact",
        link: "contact",
        customClass: "headerBtn"
    }
]