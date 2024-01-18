const menus = [
    {
        "label": "Home",
        "to": "/home",
        "children": []
    },
    {
        "label": "Products",
        "to": "/products",
        "children": [
            {
                "label": "Electronics",
                "to": "/products/electronics",
                "children": [
                    {
                        "label": "Computers",
                        "to": "/products/electronics/computers",
                        "children": []
                    },
                    {
                        "label": "Mobile Phones",
                        "to": "/products/electronics/mobile-phones",
                        "children": []
                    }
                ]
            },
            {
                "label": "Clothing",
                "to": "/products/clothing",
                "children": [
                    {
                        "label": "Men",
                        "to": "/products/clothing/men",
                        "children": []
                    },
                    {
                        "label": "Women",
                        "to": "/products/clothing/women",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "label": "About",
        "to": "/about",
        "children": []
    }
]

export default menus;