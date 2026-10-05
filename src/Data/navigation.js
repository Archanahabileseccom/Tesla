// src/data/navigation.js

const navigation = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "About",
    path: "/about",
    children: [
      {
        label: "Our Approach",
        path: "/about#approach",
      },
      {
        label: "Industries",
        path: "/about#industries",
      },
      {
        label: "Our Values",
        path: "/about#values",
      },
    ],
  },

  {
    label: "Intellectual Property",
    path: "/intellectual-property",
    children: [
      {
        label: "Patents",
        path: "/intellectual-property#patents",
      },
      {
        label: "Trademarks",
        path: "/intellectual-property#trademarks",
      },
      {
        label: "Designs",
        path: "/intellectual-property#designs",
      },
      {
        label: "Copyright",
        path: "/intellectual-property#copyright",
      },
      {
        label: "Geographical Indications",
        path: "/intellectual-property#geographical",
      },
      {
        label: "Domain Names",
        path: "/intellectual-property#domains",
      },
    ],
  },

  {
    label: "Global IP",
    path: "/global-ip",
    children: [
      {
        label: "Global IP Strategy",
        path: "/global-ip#strategy",
      },
      {
        label: "International Patents",
        path: "/global-ip#patents",
      },
      {
        label: "International Trademarks",
        path: "/global-ip#trademarks",
      },
      {
        label: "Cross-Border Protection",
        path: "/global-ip#cross-border",
      },
    ],
  },

  {
    label: "Litigation",
    path: "/litigation",
    children: [
      {
        label: "IP Litigation",
        path: "/litigation#ip",
      },
      {
        label: "Patent Disputes",
        path: "/litigation#patent",
      },
      {
        label: "Trademark Disputes",
        path: "/litigation#trademark",
      },
      {
        label: "Commercial Disputes",
        path: "/litigation#disputes",
      },
    ],
  },

  {
    label: "Corporate",
    path: "/corporate",
    children: [
      {
        label: "Corporate Advisory",
        path: "/corporate#advisory",
      },
      {
        label: "Governance",
        path: "/corporate#governance",
      },
      {
        label: "Compliance",
        path: "/corporate#compliance",
      },
      {
        label: "Risk Management",
        path: "/corporate#risk",
      },
      {
        label: "Corporate Structure",
        path: "/corporate#structure",
      },
    ],
  },

  {
    label: "Transactions",
    path: "/transactions",
    children: [
      {
        label: "Mergers & Acquisitions",
        path: "/transactions#ma",
      },
      {
        label: "Licensing",
        path: "/transactions#licensing",
      },
      {
        label: "Technology Transactions",
        path: "/transactions#technology",
      },
      {
        label: "Strategic Partnerships",
        path: "/transactions#partnerships",
      },
    ],
  },

  {
    label: "Insights",
    path: "/insights",
    children: [
      {
        label: "Articles",
        path: "/insights#articles",
      },
      {
        label: "News",
        path: "/insights#news",
      },
      {
        label: "Publications",
        path: "/insights#publications",
      },
      {
        label: "Case Studies",
        path: "/insights#case-studies",
      },
      {
        label: "Events",
        path: "/insights#events",
      },
    ],
  },

  {
    label: "Careers",
    path: "/careers",
  },

  {
    label: "Contact",
    path: "/contact",
  },
];

export default navigation;