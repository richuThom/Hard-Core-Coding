import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Food App icon.jpeg";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//restaurant card
const ReastaurantCard = (props) => {
  const { resObj } = props;
  const { name, cuisine, rating, image } = resObj?.info;
  console.log(resObj);
  return (
    <div className="restaurant-card">
      <div className="card">
        <img className="restaurant" src={image.url}></img>
        <h3>{name}</h3>
        <h4>{cuisine[0].name}</h4>
        <h4>{rating.rating_text}</h4>
        <h4>{resObj.order.deliveryTime}</h4>
      </div>
    </div>
  );
};
//json
const apiObjList = [
  {
    type: "restaurant",
    info: {
      resId: 19183334,
      name: "Pizza 47",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/19183334/77bbe9a390f2355fc2e99d0c73e625ca_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/19183334/77bbe9a390f2355fc2e99d0c73e625ca_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "9,234",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "124",
            reviewTextSmall: "124 Reviews",
            subtext: "124 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "9,110",
            reviewTextSmall: "9,110 Reviews",
            subtext: "9,110 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Beta Plaza, Greater Noida",
        address:
          "Shop F-26, First Floor, Beta Plaza, Sector Beta-1, GautamBudh Nagar Beta 1, Greater Noida",
        localityUrl: "ncr/restaurants/in/beta-plaza",
      },
      timing: {
        text: "Closes in 1 hour 47 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/pizza/",
          name: "Pizza",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "37 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/pizza-47-1-beta-1-greater-noida/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/ncr/pizza-47-1-beta-1-greater-noida/order",
      clickActionDeeplink: "",
    },
    distance: "2.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"052d912d-8083-49fa-96bb-24371c48a5cb","location_type":"delivery_cell","location_id":"4110871847577321472","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19183334","element_type":"listing","rank":1}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "Flat 10% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20566044,
      name: "Gold Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/20566044/b6e73d8e8bb96b063ec05128c0552593_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/20566044/b6e73d8e8bb96b063ec05128c0552593_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "654",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "654",
            reviewTextSmall: "654 Reviews",
            subtext: "654 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Phi 4, Greater Noida",
        address: "Shop 2, Kasna Nehar, Phi 4, Greater Noida",
        localityUrl: "ncr/phi-4-restaurants",
      },
      timing: {
        text: "Closes in 47 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/shake/",
          name: "Shake",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "35 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/gold-restaurant-phi-4-greater-noida/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/ncr/gold-restaurant-phi-4-greater-noida/order",
      clickActionDeeplink: "",
    },
    distance: "2.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"052d912d-8083-49fa-96bb-24371c48a5cb","location_type":"delivery_cell","location_id":"4110871847577321472","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20566044","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19682940,
      name: "Alpha Cake Bakery",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/19682940/1e280e85e3e39ffcc60af30d5bb95eed_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/19682940/1e280e85e3e39ffcc60af30d5bb95eed_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.4",
        rating_text: "3.4",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "910",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.4",
            reviewCount: "910",
            reviewTextSmall: "910 Reviews",
            subtext: "910 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Alpha 1, Greater Noida",
        address: "D-114, Near Alpha Plaza, Alpha 1, Greater Noida",
        localityUrl: "ncr/alpha-1-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/bakery/",
          name: "Bakery",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/alpha-cake-bakery-alpha-1-greater-noida/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/ncr/alpha-cake-bakery-alpha-1-greater-noida/order",
      clickActionDeeplink: "",
    },
    distance: "1.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"052d912d-8083-49fa-96bb-24371c48a5cb","location_type":"delivery_cell","location_id":"4110871847577321472","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19682940","element_type":"listing","rank":3}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20409335,
      name: "Hungry Fox Cafe & Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/20409335/ef598a758e4461b4164ae327078a4095_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/20409335/ef598a758e4461b4164ae327078a4095_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.4",
        rating_text: "3.4",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "1,326",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.4",
            reviewCount: "1,326",
            reviewTextSmall: "1,326 Reviews",
            subtext: "1,326 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9250 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Phi 4, Greater Noida",
        address:
          "Shop 1, Kasna, Main Road, Opposite Union Bank, Phi 4, Greater Noida",
        localityUrl: "ncr/phi-4-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/rolls/",
          name: "Rolls",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "33 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/hungry-fox-cafe-restaurant-phi-4-greater-noida/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/ncr/hungry-fox-cafe-restaurant-phi-4-greater-noida/order",
      clickActionDeeplink: "",
    },
    distance: "3.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"052d912d-8083-49fa-96bb-24371c48a5cb","location_type":"delivery_cell","location_id":"4110871847577321472","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20409335","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9100 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20367785,
      name: "Cake Sports",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/20367785/8d880981302bd6da7945a0a0b38f4972_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/20367785/8d880981302bd6da7945a0a0b38f4972_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.5",
        rating_text: "3.5",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "387",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.5",
            reviewCount: "387",
            reviewTextSmall: "387 Reviews",
            subtext: "387 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Alpha 1, Greater Noida",
        address: "D114, Alpha 1, Greater Noida",
        localityUrl: "ncr/alpha-1-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/bakery/",
          name: "Bakery",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "26 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/cake-sports-alpha-1-greater-noida/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/ncr/cake-sports-alpha-1-greater-noida/order",
      clickActionDeeplink: "",
    },
    distance: "1.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"052d912d-8083-49fa-96bb-24371c48a5cb","location_type":"delivery_cell","location_id":"4110871847577321472","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20367785","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "Free Black Forest Pastry",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20396295,
      name: "Keventers Ice Cream",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/19640740/373f60610f8eed31c925d583e3427f5e_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/19640740/373f60610f8eed31c925d583e3427f5e_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "423",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "423",
            reviewTextSmall: "423 Reviews",
            subtext: "423 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9200 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Alpha 2, Greater Noida",
        address:
          "Shop 49, Plot LS - 1, First Floor, K.B. Complex, Alpha 2, Greater Noida",
        localityUrl: "ncr/alpha-2-restaurants",
      },
      timing: {
        text: "Closes in 47 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/ice-cream/",
          name: "Ice Cream",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "14 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/keventers-ice-cream-alpha-2-greater-noida/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/ncr/keventers-ice-cream-alpha-2-greater-noida/order",
      clickActionDeeplink: "",
    },
    distance: "1.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"052d912d-8083-49fa-96bb-24371c48a5cb","location_type":"delivery_cell","location_id":"4110871847577321472","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20396295","element_type":"listing","rank":6}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9125 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18128857,
      name: "Desi Galli",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/18128857/38becd50e5b6213a0b7a828b6dbbd190_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/18128857/38becd50e5b6213a0b7a828b6dbbd190_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "8,091",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.6",
            reviewCount: "170",
            reviewTextSmall: "170 Reviews",
            subtext: "170 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "7,921",
            reviewTextSmall: "7,921 Reviews",
            subtext: "7,921 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9350 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Beta Plaza, Greater Noida",
        address: "S 31, Second Floor, Beta Plaza, Beta 1, Greater Noida",
        localityUrl: "ncr/restaurants/in/beta-plaza",
      },
      timing: {
        text: "Opens at 10am",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/rolls/",
          name: "Rolls",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/hyderabadi/",
          name: "Hyderabadi",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "28 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/desi-galli-beta-1-greater-noida/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/ncr/desi-galli-beta-1-greater-noida/order",
      clickActionDeeplink: "",
    },
    distance: "2.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"052d912d-8083-49fa-96bb-24371c48a5cb","location_type":"delivery_cell","location_id":"4110871847577321472","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18128857","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "10% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18787684,
      name: "Smokehouse Burger",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/18787684/5d4a0421b1d04013cd4670ad4a58cd9f_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/18787684/5d4a0421b1d04013cd4670ad4a58cd9f_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "35.4K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "275",
            reviewTextSmall: "275 Reviews",
            subtext: "275 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "35.2K",
            reviewTextSmall: "35.2K Reviews",
            subtext: "35.2K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Knowledge Park, Greater Noida",
        address:
          "39 A, Patel Lok Sansthan, Near Kaushalya Girls Hostel, Knowledge Park, Greater Noida",
        localityUrl: "ncr/knowledge-park-restaurants",
      },
      timing: {
        text: "Opens at 9am",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "31 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/smokehouse-burger-knowledge-park-greater-noida/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/ncr/smokehouse-burger-knowledge-park-greater-noida/order",
      clickActionDeeplink: "",
    },
    distance: "2.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"052d912d-8083-49fa-96bb-24371c48a5cb","location_type":"delivery_cell","location_id":"4110871847577321472","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18787684","element_type":"listing","rank":8}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19298400,
      name: "Hashtag Foods",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/19298400/a4c9cac2395b24dc9b27b459066738df_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/19298400/a4c9cac2395b24dc9b27b459066738df_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "7,791",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.4",
            reviewCount: "38",
            reviewTextSmall: "38 Reviews",
            subtext: "38 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.4",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "7,753",
            reviewTextSmall: "7,753 Reviews",
            subtext: "7,753 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9450 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Alpha 2, Greater Noida",
        address:
          "Shop 4, Lower Ground Floor, Satyam Complex 2, Alpha 2, Greater Noida",
        localityUrl: "ncr/alpha-2-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/momos/",
          name: "Momos",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "27 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/hashtag-foods-alpha-2-greater-noida/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/ncr/hashtag-foods-alpha-2-greater-noida/order",
      clickActionDeeplink: "",
    },
    distance: "1.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"052d912d-8083-49fa-96bb-24371c48a5cb","location_type":"delivery_cell","location_id":"4110871847577321472","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19298400","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20360922,
      name: "Singh Kitchen",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/20360922/db9ad9d897e0d9673e98582ff666f197_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/20360922/db9ad9d897e0d9673e98582ff666f197_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,248",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "2,248",
            reviewTextSmall: "2,248 Reviews",
            subtext: "2,248 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9250 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Phi 4, Greater Noida",
        address: "Shop 01, Kasna, Phi 4, Greater Noida",
        localityUrl: "ncr/phi-4-restaurants",
      },
      timing: {
        text: "Closes in 47 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "36 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/singh-kitchen-phi-4-greater-noida/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/ncr/singh-kitchen-phi-4-greater-noida/order",
      clickActionDeeplink: "",
    },
    distance: "2.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"052d912d-8083-49fa-96bb-24371c48a5cb","location_type":"delivery_cell","location_id":"4110871847577321472","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20360922","element_type":"listing","rank":10}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20052921,
      name: "Big Rolls",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/20052921/a5202435fd06ee7d89117fa8c3bde060_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/20052921/a5202435fd06ee7d89117fa8c3bde060_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,258",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "1,258",
            reviewTextSmall: "1,258 Reviews",
            subtext: "1,258 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Knowledge Park, Greater Noida",
        address:
          "Plot 39A, Near Knowledge Park 2, Knowledge Park, Greater Noida",
        localityUrl: "ncr/knowledge-park-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/rolls/",
          name: "Rolls",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "27 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/big-rolls-knowledge-park-greater-noida/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/ncr/big-rolls-knowledge-park-greater-noida/order",
      clickActionDeeplink: "",
    },
    distance: "2.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"052d912d-8083-49fa-96bb-24371c48a5cb","location_type":"delivery_cell","location_id":"4110871847577321472","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20052921","element_type":"listing","rank":11}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20514933,
      name: "Samosa Time - Your Everyday Snacks Choice",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/20514933/d24596c643ea7d9424ae51a9880401e6_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/20514933/d24596c643ea7d9424ae51a9880401e6_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "567",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "567",
            reviewTextSmall: "567 Reviews",
            subtext: "567 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9250 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Alpha 2, Greater Noida",
        address:
          "SF 37, Plot LS-1 Ground Floor, KB Complex, Alpha 2, Greater Noida",
        localityUrl: "ncr/alpha-2-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/tea/",
          name: "Tea",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "28 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/ncr/samosa-time-your-everyday-snacks-choice-alpha-2-greater-noida/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/ncr/samosa-time-your-everyday-snacks-choice-alpha-2-greater-noida/order",
      clickActionDeeplink: "",
    },
    distance: "1.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"052d912d-8083-49fa-96bb-24371c48a5cb","location_type":"delivery_cell","location_id":"4110871847577321472","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20514933","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "30% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
];
//body
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          name="search"
          style={{
            width: "561px",
            height: "50px",
            border: "none",
            boxShadow: "0 1px 6px 0 ",
            borderRadius: "50px",
          }}
        ></input>

        <button type="submit" style={{ width: "80px", height: "50px" }}>
          Submit
        </button>
      </div>

      <div className="restaurant-container">
        {apiObjList.map((apiList) => (
          <ReastaurantCard key={apiList.info.resId} resObj={apiList} />
        ))}
      </div>
    </div>
  );
};
const AppContainer = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);
