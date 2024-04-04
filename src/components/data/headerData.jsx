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
        link: "",
        eventKey: "1",
        menuType: "submenu",
        subMenu: [
            {
                subtitle: "Services",
                subLinks: [
                    {
                        id: 1,
                        subLinkName: "search engine optimization",
                        path: "/searchEngine"
                    },
                    {
                        id: 2,
                        subLinkName: "social media optimization",
                        path: "/socialMedia"
                    },
                    {
                        id: 3,
                        subLinkName: "google ads management",
                        path: "/googleAds"
                    },
                    {
                        id: 4,
                        subLinkName: "content marketing",
                        path: "/contentMarket"
                    }
                ]
            },
            {
                subtitle: "Repair Online Reputation",
                subLinks: [
                    {
                        id: 5,
                        subLinkName: "Corporate",
                        path: "/repairCorporate"
                    },
                    {
                        id: 6,
                        subLinkName: "Personal",
                        path: "/repairPersonal"
                    },
                ]
            },
            {
                subtitle: "E-commerce Store Management",
                subLinks: [
                    {
                        id: 7,
                        subLinkName: "Amazon Store Management",
                        path: "/amazonStore"
                    },
                    {
                        id: 8,
                        subLinkName: "Ebay Store Management",
                        path: "/ebayStore"
                    },
                    {
                        id: 9,
                        subLinkName: "Shopify Store Management",
                        path: "/shopifyStore"
                    },
                    {
                        id: 10,
                        subLinkName: "Custom E-Commerce Store Management",
                        path: "/customECom"
                    },
                ]
            },
            {
                subtitle: "Online Reputation Marketing",
                subLinks: [
                    {
                        id: 11,
                        subLinkName: "Corporate",
                        path: "/onlineCorporate"
                    },
                    {
                        id: 12,
                        subLinkName: "Personal",
                        path: "/onlinePersonal"
                    },
                ]

            },
            {
                subtitle: "Website Development",
                subLinks: [
                    {
                        id: 13,
                        subLinkName: "WordPress Development",
                        path: "/wordpressDev"
                    },
                    {
                        id: 14,
                        subLinkName: "Shopify Development",
                        path: "/shopifyDev"
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