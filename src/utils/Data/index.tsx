import icons from "../Constants/icons";
import images from "../Constants/images";
import { theme } from "../Themes";

export const TabData = [
  { icon: icons.all_tab, title: "All", id: 1 },
  { icon: icons.redeemed, title: "Redeemed", id: 2 },
  { icon: icons.locked, title: "Locked", id: 3 },
];

export const calendarData = [
  {
    title: "Mon 02, 2025",
    data: [
      {
        id: "1",
        title: "Soccer Training",
        des: "Ball Control Drills",
        start_time: "(5:00 PM)",
        end_time: "(6:00 PM)",
        total_rewards: 15,
        status: "completed",
        main_color: "#8264B8",
        status_color: "#069345",
      },
      {
        id: "2",
        title: "Study",
        des: "Revise Chemistry Notes",
        start_time: "(5:00 PM)",
        end_time: "(6:00 PM)",
        total_rewards: 15,
        status: "Pending",
        main_color: "#6EBFE4",
        status_color: "#F4821E",
      },
      {
        id: "3",
        title: "Yoga",
        des: "Yoga Stretch",
        start_time: "(5:00 PM)",
        end_time: "(6:00 PM)",
        total_rewards: 15,
        status: "Pending",
        main_color: "#6E74E4",
        status_color: "#F4821E",
      },
    ],
  },
];

export const taskData = [
  {
    title: "All",
    data: [
      {
        id: "1",
        title: "Soccer Training",
        des: "Ball Control Drills",
        start_time: "(5:00 PM)",
        end_time: "(6:00 PM)",
        total_rewards: 15,
        status: "completed",
        main_color: "#8264B8",
        status_color: "#069345",
      },
      {
        id: "2",
        title: "Study",
        des: "Revise Chemistry Notes",
        start_time: "(5:00 PM)",
        end_time: "(6:00 PM)",
        total_rewards: 15,
        status: "completed",
        main_color: "#6EBFE4",
        status_color: "#F4821E",
        isMarkDone:true,
        markDone:false

      },
      {
        id: "3",
        title: "Yoga",
        des: "Yoga Stretch",
        start_time: "(5:00 PM)",
        end_time: "(6:00 PM)",
        total_rewards: 15,
        status: "Pending",
        main_color: "#6E74E4",
        status_color: "#F4821E",
      },
    ],
  },
];

export const rewardData = [
  {
    icon: icons.volleyball,
    name: "Gametime Gift Card",
    id: 1,
    active: true,
    type: "Student",
    coupon: "Coupon",
    value: "$20",
    isEnable: false,
    task_completed: 24,
    backgroundColor: theme.colors.card_yellow,
  },
  {
    icon: icons.book_alt,
    name: "Water Bottle",
    id: 1,
    active: true,
    coupon: "Coupon",
    value: "$20",
    assign_students: 53,
    isEnable: false,

    backgroundColor: theme.colors.dark_pink,
  },
  {
    icon: images.redem,
    name: "Bonus Points",
    id: 1,
    active: false,
    value: "$20",
    type: "Parent",
    coupon: "Coupon",
    isEnable: true,
    linked_child: "Mia Lopez",
    backgroundColor: theme.colors.Card_white_dull,
  },
];


export const AssignTaskData =  [
  {
    id: "1",
    title: "Soccer Training",
    des: "Ball Control Drills",
    start_time: "(5:00 PM)",
    end_time: "(6:00 PM)",
    total_rewards: 15,
    status: "Verified",
    main_color: "#8264B8",
    isVerified:true,

    status_color: "#069345",
  },
  {
    id: "2",
    title: "Study",
    des: "Revise Chemistry Notes",
    start_time: "(5:00 PM)",
    end_time: "(6:00 PM)",
    total_rewards: 15,
    status: "Pending",
    main_color: "#6EBFE4",
    status_color: "#F4821E",
    isMarkDone:true,
    isVerified:false,
    markDone:false

  },
  {
    id: "3",
    title: "Yoga",
    des: "Yoga Stretch",
    start_time: "(5:00 PM)",
    end_time: "(6:00 PM)",
    total_rewards: 15,
    status: "Pending",
    main_color: "#6E74E4",
    status_color: "#F4821E",
    isVerified:false,

  },
]

export const taskCategoryData = [
  { icon: icons.dumbbell_fitness, title: "Training", isSelected: false,id:1 },
  { icon: icons.book_study, title: "Study", isSelected: false,id:2  },
  { icon: icons.wellness, title: "Wellness", isSelected: false,id:3 },
];


export const ShowOnData = [
  { icon: icons.home_fill, title: "Home", isSelected: false,id:1 },
  { icon: icons.filled_reward, title: "Rewards", isSelected: false,id:2  },
  { icon: icons.task_fill, title: "Progress", isSelected: false,id:3 },
];

export const PlacementData = [
  { icon: icons.home_fill, title: "Onboarding Screen", isSelected: false,id:1 },
  { icon: icons.filled_reward, title: "Home", isSelected: false,id:2  },
];

export const productData = [
  {
    img: images.cherries,
    name: "Fresh Cherries",
    discount: "€34",
    price: "€20",
    unit: "kg",
    quantity: "0",
  },
  {
    img: images.cabbage,
    name: "Chinese cabbage",
    discount: "€34",
    price: "€10",
    unit: "kg",
    quantity: "0",
  },
  {
    img: images.egg,
    name: "Eggs ",
    discount: "€30",
    price: "€8",
    unit: "dz",
    quantity: "0",
  },
];

export const favouritesData = [
  {
    img: images.mango,
    name: "Fresh Mango",
    discount: "€4.56",
    price: "€2.35",
    unit: "pcs",
    quantity: "0",
  },

  {
    img: images.parsley,
    name: "Fresh Parsley",
    discount: "€34",
    price: "€10",
    unit: "kg",
    quantity: "0",
  },
  {
    img: images.egg,
    name: "Eggs ",
    discount: "€30",
    price: "€8",
    unit: "dz",
    quantity: "0",
  },
  {
    img: images.apple,
    name: "Apples",
    discount: "€30",
    price: "€8",
    unit: "kg",
    quantity: "0",
  },
  {
    img: images.cabbage,
    name: "Chinese Cabbage",
    discount: "€20",
    price: "€80",
    unit: "kg",
    quantity: "0",
  },
  {
    img: images.orange,
    name: "Orange",
    discount: "€20",
    price: "€80",
    unit: "pcs",
    quantity: "0",
  },
  {
    img: images.pattao,
    name: "Potato",
    discount: "€20",
    price: "€80",
    unit: "pcs",
    quantity: "0",
  },
];

export const orderHistoryProductData = [
  {
    addons: null,
    created_at: "2025-05-09 08:37:52",
    deleted_at: "0000-00-00 00:00:00",
    description: "Test",
    discounted_price: "25",
    entity_branch_id: null,
    entity_id: "1",
    id: "39",
    image: "https://dorianfruitsandveg.droidor.com/assets/uploads/images_1.jpg",
    name: "Mango",
    price: "15",
    product_category_id: "15",
    sequence: "1",
    show_hide_status: null,
    status: "1",
    updated_at: "2025-05-09 08:37:52",
  },

  {
    addons: null,
    created_at: "2025-05-09 08:37:52",
    deleted_at: "0000-00-00 00:00:00",
    description: "Test",
    discounted_price: "25",
    entity_branch_id: null,
    entity_id: "1",
    id: "40",
    image: "https://dorianfruitsandveg.droidor.com/assets/uploads/images_1.jpg",
    name: "Mango",
    price: "15",
    product_category_id: "15",
    sequence: "1",
    show_hide_status: null,
    status: "1",
    updated_at: "2025-05-09 08:37:52",
  },
  {
    addons: null,
    created_at: "2025-05-09 08:37:52",
    deleted_at: "0000-00-00 00:00:00",
    description: "Test",
    discounted_price: "25",
    entity_branch_id: null,
    entity_id: "1",
    id: "41",
    image: "https://dorianfruitsandveg.droidor.com/assets/uploads/images_1.jpg",
    name: "Mango",
    price: "15",
    product_category_id: "15",
    sequence: "1",
    show_hide_status: null,
    status: "1",
    updated_at: "2025-05-09 08:37:52",
  },
  {
    addons: null,
    created_at: "2025-05-09 08:37:52",
    deleted_at: "0000-00-00 00:00:00",
    description: "Test",
    discounted_price: "25",
    entity_branch_id: null,
    entity_id: "1",
    id: "42",
    image: "https://dorianfruitsandveg.droidor.com/assets/uploads/images_1.jpg",
    name: "Mango",
    price: "15",
    product_category_id: "15",
    sequence: "1",
    show_hide_status: null,
    status: "1",
    updated_at: "2025-05-09 08:37:52",
  },

  {
    addons: null,
    created_at: "2025-05-09 08:37:52",
    deleted_at: "0000-00-00 00:00:00",
    description: "Test",
    discounted_price: "25",
    entity_branch_id: null,
    entity_id: "1",
    id: "43",
    image: "https://dorianfruitsandveg.droidor.com/assets/uploads/images_1.jpg",
    name: "Mango",
    price: "15",
    product_category_id: "15",
    sequence: "1",
    show_hide_status: null,
    status: "1",
    updated_at: "2025-05-09 08:37:52",
  },
];
export const cartData = [
  {
    img: images.mango,
    name: "Fresh Mango",
    discount: "€4.56",
    price: "€2.35",
    unit: "pcs",
    quantity: "3",
  },

  {
    img: images.parsley,
    name: "Fresh Parsley",
    discount: "€34",
    price: "€10",
    unit: "kg",
    quantity: "4",
  },
];
