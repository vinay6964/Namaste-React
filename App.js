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

const Cards = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
  return (
    <div className="rest-cards">
      <img
        alt="card"
        className="rest-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.slice(0, 3).join(",")}</h4>
      <h5>{avgRating} ⭐</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

const Body = () => {
  let restaurantsList = [
    {
      info: {
        id: "23818",
        name: "Domino's Pizza",
        cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
        locality: "Bull Temple Road",
        areaName: "Basavanagudi",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.4,
        parentId: "2456",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 02:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "5K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-bull-temple-road-basavanagudi-bangalore-23818",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "770772",
        name: "Olio - The Wood Fired Pizzeria",
        cloudinaryImageId: "4b44c7921b1b6073a4ffa58b38f8def1",
        locality: "Ali Askar Road",
        areaName: "Cunningham Road",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
        avgRating: 4.3,
        parentId: "11633",
        avgRatingString: "4.3",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 4.2,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 05:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-ali-askar-road-cunningham-road-bangalore-770772",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "240178",
        name: "Leon's - Burgers & Wings (Leon Grill)",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_240178.jpg",
        locality: "Indiranagar",
        areaName: "JP Nagar",
        costForTwo: "₹300 for two",
        cuisines: [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental",
        ],
        avgRating: 4.4,
        parentId: "371281",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 7.8,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "7.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 04:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "1K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-indiranagar-jp-nagar-bangalore-240178",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "621462",
        name: "Nando's",
        cloudinaryImageId: "3b6787b39dbda785f5a0604a4d7672bc",
        locality: "Forum Rex Mall",
        areaName: "Brigade Road",
        costForTwo: "₹350 for two",
        cuisines: ["Portuguese", "Burgers", "Fast Food"],
        avgRating: 4.4,
        parentId: "144001",
        avgRatingString: "4.4",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 03:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "100+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/nandos-forum-rex-mall-brigade-road-bangalore-621462",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "5934",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        parentId: "166",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 5.6,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "5.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 06:55:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "1K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "506324",
        name: "Louis Burger",
        cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
        locality: "6Th Block, Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹600 for two",
        cuisines: ["Burgers", "American", "Fast Food"],
        avgRating: 4.3,
        parentId: "22485",
        avgRatingString: "4.3",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 5.6,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "5.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 04:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹149",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/louis-burger-6th-block-koramangala-bangalore-506324",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "43836",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fe11ced6-89a3-4080-8610-3c743a3bb3f0_43836.jpg",
        locality: "MG Road",
        areaName: "Ashok Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.4,
        parentId: "630",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 18,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 02:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "347868",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_347868.JPG",
        locality: "Cunnigham road",
        areaName: "Vasanth Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.2,
        parentId: "547",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 4.2,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "4.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹178",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kfc-cunnigham-road-vasanth-nagar-bangalore-347868",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "211192",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "lczhp9lptdzbqn09nfns",
        locality: "2nd Stage",
        areaName: "BTM Layout",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.3,
        parentId: "4961",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 7.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "7.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹159",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "1K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-2nd-stage-btm-layout-bangalore-211192",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "10578",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/4656e6d3-da7f-4eec-bf34-500990358ff5_10578.jpg",
        locality: "4th Block",
        areaName: "Jayanagar",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.2,
        parentId: "721",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹189",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "500+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-4th-block-jayanagar-bangalore-10578",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "29627",
        name: "BIB - Breakfast in the Box",
        cloudinaryImageId: "nbcpg5xk6ekrrngmkd0b",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹350 for two",
        cuisines: [
          "North Indian",
          "Street Food",
          "Chinese",
          "South Indian",
          "Continental",
          "Beverages",
        ],
        avgRating: 4.4,
        parentId: "45396",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 7.6,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "7.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 13:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "UPTO ₹40",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/bib-breakfast-in-the-box-koramangala-bangalore-29627",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "711748",
        name: "Salad Days",
        cloudinaryImageId: "cfa1123ebf17413dc7d0a80c7361fab3",
        locality: "Sarvagna Nagar",
        areaName: "Indiranagar",
        costForTwo: "₹500 for two",
        cuisines: ["Salads", "Healthy Food", "Beverages"],
        avgRating: 4.6,
        parentId: "796",
        avgRatingString: "4.6",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 7.1,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "7.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹269",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/salad-days-sarvagna-nagar-indiranagar-bangalore-711748",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "568703",
        name: "Baking Bad - Pizza Delivery",
        cloudinaryImageId: "75052e31499c23c43505cf1a601a2640",
        locality: "Indiranagar",
        areaName: "Indiranagar",
        costForTwo: "₹650 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
          "Fast Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        parentId: "521053",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 6.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "6.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 04:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "5K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/baking-bad-pizza-delivery-indiranagar-bangalore-568703",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "578378",
        name: "Burgerama",
        cloudinaryImageId: "1d52387b37dbec1712d0142aec3421a6",
        locality: "2nd  Stage",
        areaName: "Indiranagar",
        costForTwo: "₹600 for two",
        cuisines: ["Fast Food", "American", "Beverages"],
        avgRating: 4.2,
        parentId: "8993",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 6.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "6.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 04:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/burgerama-2nd-stage-indiranagar-bangalore-578378",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "672074",
        name: "Subway",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/2/e3a898d5-686e-47ad-b781-40c724128986_672074.jpg",
        locality: "Ashok Nagar",
        areaName: "Sobha Mall",
        costForTwo: "₹350 for two",
        cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 4.2,
        parentId: "2",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 03:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Sandwiches.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/subway-ashok-nagar-sobha-mall-bangalore-672074",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "352822",
        name: "Wow! China",
        cloudinaryImageId: "95982cfa57cb3b7e504f2015c375fd55",
        locality: "Bannerghatta Road",
        areaName: "Vega City Mall",
        costForTwo: "₹300 for two",
        cuisines: [
          "Tibetan",
          "Chinese",
          "Asian",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4,
        parentId: "226836",
        avgRatingString: "4.0",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 7.4,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "7.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/wow-china-bannerghatta-road-vega-city-mall-bangalore-352822",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "74444",
        name: "Samosa Party",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/3de49675-5a5a-470e-a30b-0eef986793d0_74444.jpg",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹100 for two",
        cuisines: [
          "Fast Food",
          "Snacks",
          "Beverages",
          "Chaat",
          "North Indian",
          "Street Food",
          "Sweets",
          "Desserts",
          "Punjabi",
          "Bakery",
        ],
        avgRating: 4.4,
        parentId: "6364",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 5.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "5.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-22 00:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.8",
            ratingCount: "100+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "770774",
        name: "Crusto's - Gourmet Cheese Burst Pizza",
        cloudinaryImageId: "c77fe42b7997c566f491e84b540701ca",
        locality: "Ali Askar Road",
        areaName: "Cunningham Road",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
        avgRating: 4.4,
        parentId: "268955",
        avgRatingString: "4.4",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 4.2,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 05:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/crustos-gourmet-cheese-burst-pizza-ali-askar-road-cunningham-road-bangalore-770774",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "826446",
        name: "Pastas By Pizza Hut",
        cloudinaryImageId: "67d17abfeb3a5da6103b9424f6dbe973",
        locality: "4th Block",
        areaName: "Jayanagar",
        costForTwo: "₹400 for two",
        cuisines: ["Pastas"],
        avgRating: 3.9,
        parentId: "306806",
        avgRatingString: "3.9",
        totalRatingsString: "9",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹149",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-4th-block-jayanagar-bangalore-826446",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "341895",
        name: "Burger Seigneur",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/20/2e01532b-e100-46fd-a7f5-8d430dd714b4_341895.jpg",
        locality: "Indiranagar",
        areaName: "Indiranagar",
        costForTwo: "₹1300 for two",
        cuisines: ["American", "Continental", "Burgers", "Beverages"],
        avgRating: 4.4,
        parentId: "12095",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 8.1,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "8.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-16 02:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "1K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-seigneur-indiranagar-bangalore-341895",
        type: "WEBLINK",
      },
    },
  ];

  return (
    <div className="body">
      <div className="search-box">
        <textarea placeholder="Seach Restaurant"></textarea>
      </div>
      <div className="rest-containers">
        {restaurantsList.map((item) => (
          <Cards key={item.info.id} resData={item} />
        ))}
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
