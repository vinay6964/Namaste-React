import React from "react";
import ReactDOM from "react-dom/client";

/**
 * App
 *  Header
 *    logo
 *    nav links
 *  Body
 *    Search Bar
 *    Rest Cards
 *  Footer
 *   Copyright
 *   Links
 */

const Cards = ({resName,cuisine,rating,ETA}) => {
  return (
    <div className="rest-cards">
      <img
        alt="card"
        className="rest-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e0vvulfbahjxjz6k4uwi"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h5>
        {rating}, <span>{ETA}</span>
      </h5>
    </div>
  );
};

const Body = () => {


 let resObj =  {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    "header": {
        "title": "What's on your mind?",
        "headerStyling": {
            "padding": {
                "left": 16,
                "top": 16,
                "bottom": 4
            }
        }
    },
    "layout": {
        "rows": 1,
        "columns": 10,
        "horizontalScrollEnabled": true,
        "itemSpacing": 24,
        "widgetPadding": {},
        "containerStyle": {
            "containerPadding": {
                "left": 8,
                "top": 8,
                "right": 12,
                "bottom": 4
            }
        },
        "scrollBar": {},
        "widgetTheme": {
            "defaultMode": {
                "backgroundColour": "#FFFFFF",
                "theme": "THEME_TYPE_LIGHT"
            },
            "darkMode": {
                "theme": "THEME_TYPE_DARK"
            }
        }
    },
    "imageGridCards": {
        "info": [
            {
                "id": "750591",
                "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                    "text": "Biryani",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurants curated for biryani",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                "frequencyCapping": {}
            },
            {
                "id": "750579",
                "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                    "text": "Pizzas",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurants curated for pizza",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
                "frequencyCapping": {}
            },
            {
                "id": "750589",
                "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                    "text": "Burgers",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurants curated for burger",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                "frequencyCapping": {}
            },
            {
                "id": "750581",
                "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
                    "text": "North Indian",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurants curated for north indian",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
                "frequencyCapping": {}
            },
            {
                "id": "750587",
                "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                    "text": "Chinese",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurant curated for chinese",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
                "frequencyCapping": {}
            },
            {
                "id": "750206",
                "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
                    "text": "Pasta",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurant curated for pasta",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
                "frequencyCapping": {}
            },
            {
                "id": "750131",
                "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                    "text": "Dosa",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurants curated for dosa",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                "frequencyCapping": {}
            },
            {
                "id": "749868",
                "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                    "text": "Cakes",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurant curated for cake",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                "frequencyCapping": {}
            },
            {
                "id": "750596",
                "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
                    "text": "Ice Cream",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurants curated for icecream",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83640&tags=layout_CCS_IceCreams",
                "frequencyCapping": {}
            },
            {
                "id": "750585",
                "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
                    "text": "South Indian",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurants curated for south indian",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian&search_context=southindian",
                "frequencyCapping": {}
            },
            {
                "id": "750222",
                "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
                    "text": "Rolls",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurants curated for roll",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
                "frequencyCapping": {}
            },
            {
                "id": "749772",
                "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                    "text": "Noodles",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurant curated for noodles",
                    "altTextCta": "open"
                },
                "entityId": "80463",
                "frequencyCapping": {}
            },
            {
                "id": "750635",
                "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/80451?collection_id=80451&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
                    "text": "Kebabs",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurant curated for kebabs",
                    "altTextCta": "open"
                },
                "entityId": "80451",
                "frequencyCapping": {}
            },
            {
                "id": "750248",
                "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
                    "text": "Shawarma",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurant curated for shawarma",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
                "frequencyCapping": {}
            },
            {
                "id": "750216",
                "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
                    "text": "Pav Bhaji",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurant curated for pav bhaji",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
                "frequencyCapping": {}
            },
            {
                "id": "749768",
                "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
                    "text": "Momos",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurant curated for momos",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",
                "frequencyCapping": {}
            },
            {
                "id": "750643",
                "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                    "text": "Idli",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurants curated for idly",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
                "frequencyCapping": {}
            },
            {
                "id": "750225",
                "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                    "text": "Salad",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurant curated for salad",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                "frequencyCapping": {}
            },
            {
                "id": "750571",
                "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
                    "text": "Pure Veg",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurants curated for veg",
                    "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
                "frequencyCapping": {}
            },
            {
                "id": "750201",
                "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                "action": {
                    "link": "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                    "text": "Paratha",
                    "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                    "altText": "restaurants curated for paratha",
                    "altTextCta": "open"
                },
                "entityId": "80475",
                "frequencyCapping": {}
            }
        ],
        "style": {
            "width": {
                "type": "TYPE_RELATIVE",
                "value": 0.2941,
                "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
            },
            "height": {
                "type": "TYPE_RELATIVE",
                "value": 1.2444,
                "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
            }
        }
    },
    "id": "whats_on_your_mind",
    "gridElements": {
        "infoWithStyle": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
            "info": [
                {
                    "id": "750591",
                    "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                        "text": "Biryani",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurants curated for biryani",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                    "frequencyCapping": {}
                },
                {
                    "id": "750579",
                    "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                        "text": "Pizzas",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurants curated for pizza",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
                    "frequencyCapping": {}
                },
                {
                    "id": "750589",
                    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                        "text": "Burgers",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurants curated for burger",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                    "frequencyCapping": {}
                },
                {
                    "id": "750581",
                    "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
                        "text": "North Indian",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurants curated for north indian",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
                    "frequencyCapping": {}
                },
                {
                    "id": "750587",
                    "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                        "text": "Chinese",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurant curated for chinese",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
                    "frequencyCapping": {}
                },
                {
                    "id": "750206",
                    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
                        "text": "Pasta",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurant curated for pasta",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
                    "frequencyCapping": {}
                },
                {
                    "id": "750131",
                    "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                        "text": "Dosa",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurants curated for dosa",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                    "frequencyCapping": {}
                },
                {
                    "id": "749868",
                    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                        "text": "Cakes",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurant curated for cake",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                    "frequencyCapping": {}
                },
                {
                    "id": "750596",
                    "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
                        "text": "Ice Cream",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurants curated for icecream",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83640&tags=layout_CCS_IceCreams",
                    "frequencyCapping": {}
                },
                {
                    "id": "750585",
                    "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
                        "text": "South Indian",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurants curated for south indian",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian&search_context=southindian",
                    "frequencyCapping": {}
                },
                {
                    "id": "750222",
                    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
                        "text": "Rolls",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurants curated for roll",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
                    "frequencyCapping": {}
                },
                {
                    "id": "749772",
                    "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                        "text": "Noodles",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurant curated for noodles",
                        "altTextCta": "open"
                    },
                    "entityId": "80463",
                    "frequencyCapping": {}
                },
                {
                    "id": "750635",
                    "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/80451?collection_id=80451&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
                        "text": "Kebabs",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurant curated for kebabs",
                        "altTextCta": "open"
                    },
                    "entityId": "80451",
                    "frequencyCapping": {}
                },
                {
                    "id": "750248",
                    "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
                        "text": "Shawarma",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurant curated for shawarma",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
                    "frequencyCapping": {}
                },
                {
                    "id": "750216",
                    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
                        "text": "Pav Bhaji",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurant curated for pav bhaji",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
                    "frequencyCapping": {}
                },
                {
                    "id": "749768",
                    "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
                        "text": "Momos",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurant curated for momos",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",
                    "frequencyCapping": {}
                },
                {
                    "id": "750643",
                    "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                        "text": "Idli",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurants curated for idly",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
                    "frequencyCapping": {}
                },
                {
                    "id": "750225",
                    "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                        "text": "Salad",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurant curated for salad",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                    "frequencyCapping": {}
                },
                {
                    "id": "750571",
                    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
                        "text": "Pure Veg",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurants curated for veg",
                        "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
                    "frequencyCapping": {}
                },
                {
                    "id": "750201",
                    "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                    "action": {
                        "link": "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                        "text": "Paratha",
                        "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                        "altText": "restaurants curated for paratha",
                        "altTextCta": "open"
                    },
                    "entityId": "80475",
                    "frequencyCapping": {}
                }
            ],
            "style": {
                "width": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.2941,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                },
                "height": {
                    "type": "TYPE_RELATIVE",
                    "value": 1.2444,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                }
            }
        }
    }
}

// temp branch commit

  return (
    <div className="body">
      <div className="search-box">
        <textarea placeholder="Seach Restaurant"></textarea>
      </div>
      <div className="rest-containers">
        <Cards
          resName="Meghana Foods"
          cuisine="North India, South India"
          rating="4"
          ETA="40mins"
        />
        <Cards
          resName="Dominno's"
          cuisine="Burger, Pizza"
          rating="4.2"
          ETA="20mins"
        />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo-img"
        alt="Logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwL3QaZX69x2XhNC5vM-8TwYsitoWnpxv9VA&s"
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("🚀 ~ root:", root);
root.render(<AppLayout />);
