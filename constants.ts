import { DaySchedule, LocationInfo } from './types';

// Hotels
const KYOTO_CROSS_HOTEL: LocationInfo = {
  name: "京都十字飯店 (Cross Hotel Kyoto)",
  url: "https://maps.app.goo.gl/cRKNVAaxXRZX7uC39",
  addressQuery: "Cross Hotel Kyoto"
};

const NAMBA_FAIRFIELD: LocationInfo = {
  name: "難波萬楓酒店 (Fairfield by Marriott Osaka Namba)",
  url: "https://maps.app.goo.gl/jSVmzzo8pS53PTuF7",
  addressQuery: "Fairfield by Marriott Osaka Namba"
};

const HOME_TW: LocationInfo = {
  name: "溫暖的家 (桃園)",
  url: "",
  addressQuery: "Taoyuan International Airport"
};

export const SCHEDULE_DATA: DaySchedule[] = [
  {
    date: "2/20",
    fullDate: "2026-02-20",
    dayOfWeek: "週五",
    locationTitle: "桃園 ➔ 京都",
    startHotel: HOME_TW,
    endHotel: KYOTO_CROSS_HOTEL,
    activities: [
      {
        id: "20-1",
        time: "14:55",
        type: "FLIGHT",
        title: "抵達關西機場 (KIX)",
        description: "辦理入境手續，準備前往京都",
        tips: "入境審查可能耗時 30-60 分鐘，請先填好 Visit Japan Web。"
      },
      {
        id: "20-2",
        time: "16:00",
        type: "TRANSIT",
        title: "前往京都",
        description: "搭乘 HARUKA 關空特急直達京都車站 (約 80 分鐘)。",
        transitDetail: "抵達京都車站後，建議搭乘計程車 (約 15 分鐘 / ¥1500) 直達飯店，避免拖行李轉乘地鐵。",
        location: {
            name: "關西機場站",
            url: "https://maps.app.goo.gl/somekixlink", 
            addressQuery: "Cross Hotel Kyoto" 
        }
      },
      {
        id: "20-3",
        time: "17:30",
        type: "HOTEL_CHECKIN",
        title: "飯店 Check-in",
        location: KYOTO_CROSS_HOTEL,
        transitDetail: "最近地鐵：京阪本線「三条站」6號出口 步行4分 / 地鐵東西線「京都市役所前」2號出口 步行4分"
      },
      {
        id: "20-4",
        time: "19:00",
        type: "FOOD",
        title: "酒呑にし川　柳小路店",
        description: "隱身於柳小路的日本酒與京料理。",
        transitDetail: "從飯店步行約 10 分鐘，位於四条河原町附近的柳小路。",
        tips: "已預約 19:00，請準時。",
        location: {
          name: "酒呑にし川　柳小路店",
          url: "https://maps.google.com/?q=酒呑にし川+柳小路店",
          addressQuery: "酒呑にし川　柳小路店"
        }
      }
    ]
  },
  {
    date: "2/21",
    fullDate: "2026-02-21",
    dayOfWeek: "週六",
    locationTitle: "京都漫遊",
    startHotel: KYOTO_CROSS_HOTEL,
    endHotel: KYOTO_CROSS_HOTEL,
    activities: [
      {
        id: "21-1",
        time: "12:00",
        type: "FOOD",
        title: "點邑 (Ten-yu)",
        description: "米其林天婦羅料理 (俵屋旅館經營)",
        transitDetail: "飯店步行約 5 分鐘，位於御幸町通。",
        tips: "已預約 12:00，請準時。",
        location: {
          name: "點邑 (Ten-yu)",
          url: "https://maps.app.goo.gl/9cPniy5jyqF47M8SA",
          addressQuery: "Ten-yu Kyoto"
        }
      },
      {
        id: "21-2",
        time: "14:30",
        type: "SHOPPING",
        title: "四条河原町 逛街",
        description: "高島屋、藤井大丸、BAL百貨皆在此區域。",
        transitDetail: "點邑位於御幸町通，往南步行約 5-10 分鐘即可抵達熱鬧的河原町商圈。",
        location: {
          name: "四条河原町",
          url: "https://maps.google.com/?q=Shijo+Kawaramachi",
          addressQuery: "Shijo Kawaramachi"
        }
      },
      {
        id: "21-NEW-1",
        time: "17:00",
        type: "BAR",
        title: "Bar Rocking Chair",
        description: "具備暖爐與搖椅的知名酒吧。",
        transitDetail: "路順安排：位於四条河原町南側 (佛光寺附近)，逛完街後走過來最近。",
        tips: "人氣極高，建議開門即入座。",
        location: {
          name: "Bar Rocking Chair",
          url: "https://maps.google.com/?q=Bar+Rocking+Chair+Kyoto",
          addressQuery: "Bar Rocking Chair Kyoto"
        }
      },
      {
        id: "21-3",
        time: "19:00",
        type: "BAR",
        title: "Bar K6",
        description: "京都傳奇酒吧，擁有驚人的威士忌收藏。",
        transitDetail: "移動：從 Rocking Chair 搭計程車前往二条 (約 10-15 分鐘)，體驗北區氛圍。",
        location: {
          name: "Bar K6",
          url: "https://maps.google.com/?q=Bar+K6+Kyoto",
          addressQuery: "Bar K6 Kyoto"
        }
      },
      {
        id: "21-4",
        time: "21:00",
        type: "BAR",
        title: "BAR TALISKER",
        description: "專精於 Talisker 威士忌與經典調酒。",
        transitDetail: "回程：從 K6 往南移動回三条。喝完步行 2 分鐘即達飯店。",
        location: {
          name: "BAR TALISKER",
          url: "https://maps.google.com/?q=Bar+Talisker+Kyoto",
          addressQuery: "Bar Talisker Kyoto"
        }
      }
    ]
  },
  {
    date: "2/22",
    fullDate: "2026-02-22",
    dayOfWeek: "週日",
    locationTitle: "京都散策",
    startHotel: KYOTO_CROSS_HOTEL,
    endHotel: KYOTO_CROSS_HOTEL,
    activities: [
      {
        id: "22-1",
        time: "上午",
        type: "SIGHTSEEING",
        title: "檀王法林寺 (黑貓寺)",
        description: "以黑貓御守聞名，歷史悠久的寺廟",
        transitDetail: "京阪三条站旁，從飯店步行約 3 分鐘即可抵達。",
        location: {
          name: "檀王法林寺 (Dannouji)",
          url: "https://maps.app.goo.gl/Xtdr8XReNPr3qGnd9",
          addressQuery: "Dannouji"
        }
      },
      {
        id: "22-LUNCH",
        time: "12:30",
        type: "FOOD",
        title: "建仁寺 祇園丸山",
        description: "京懷石料理名店，位於建仁寺南側。",
        transitDetail: "從檀王法林寺步行約 15-20 分鐘，或搭計程車。",
        tips: "已預約 12:30，請準時。",
        location: {
          name: "建仁寺 祇園丸山",
          url: "https://maps.google.com/?q=Kenninji+Gion+Maruyama",
          addressQuery: "Kenninji Gion Maruyama"
        }
      },
      {
        id: "22-2",
        time: "15:00",
        type: "SIGHTSEEING",
        title: "清水寺",
        description: "世界遺產，京都必訪古剎",
        transitDetail: "從祇園丸山步行前往約 15-20 分鐘 (上坡)。",
        tips: "⚠️ 17:30 停止入場 (閉門)，請注意時間。二年坂、三年坂店家約 17:00 開始打烊。",
        location: {
          name: "清水寺 (Kiyomizu-dera)",
          url: "https://maps.app.goo.gl/Jnd4R3AgngnpdeB69",
          addressQuery: "Kiyomizu-dera"
        }
      },
      {
        id: "22-3",
        time: "19:00",
        type: "FOOD",
        title: "Kyoto Sanjo Haku",
        description: "創作料理晚餐。",
        transitDetail: "位於三条通，靠近木屋町通交界處。從清水寺搭車返回飯店稍作休息後步行前往。",
        tips: "已預約 19:00，請準時。",
        location: {
          name: "Kyoto Sanjo Haku",
          url: "https://maps.app.goo.gl/B3nBne2dPk5SLLXf9",
          addressQuery: "Kyoto Sanjo Haku"
        }
      }
    ]
  },
  {
    date: "2/23",
    fullDate: "2026-02-23",
    dayOfWeek: "週一",
    locationTitle: "京都 ➔ 大阪",
    startHotel: KYOTO_CROSS_HOTEL,
    endHotel: NAMBA_FAIRFIELD,
    activities: [
      {
        id: "23-1",
        time: "11:00",
        type: "HOTEL_CHECKOUT",
        title: "Check-out & 移動",
        description: "前往大阪難波。建議走「京阪+御堂筋」路線。",
        transitDetail: "路線：從「三条站」搭京阪特急 ➔ 「淀屋橋站」轉乘御堂筋線 ➔ 「難波站」。",
        location: {
            name: "京阪三条站",
            url: "https://maps.app.goo.gl/dummy",
            addressQuery: "Fairfield by Marriott Osaka Namba" // Target for directions
        }
      },
      {
        id: "23-2",
        time: "15:00",
        type: "HOTEL_CHECKIN",
        title: "大阪難波萬楓酒店 Check-in",
        transitDetail: "最近出口：難波站 5號出口 步行約 5-8 分鐘。雖然離南海難波站近，但從地鐵難波站走過來需注意地下迷宮指標。",
        location: NAMBA_FAIRFIELD
      },
      {
        id: "23-3",
        time: "18:00",
        type: "FOOD",
        title: "法善寺 三平",
        description: "位於法善寺橫丁內的大阪燒名店。",
        transitDetail: "從飯店步行約 10 分鐘。穿過法善寺參拜不動明王後即可看到。",
        tips: "已預約 18:00，請準時。",
        location: {
          name: "法善寺 三平 (Hozenji Sanpei)",
          url: "https://maps.app.goo.gl/WDVSzhojiqWmCDfk9",
          addressQuery: "Hozenji Sanpei"
        }
      },
      {
        id: "23-4",
        time: "20:00",
        type: "BAR",
        title: "Bar Nayuta",
        description: "沒有酒單的 Speakeasy 風格酒吧",
        transitDetail: "位於三角公園附近的建築內 5樓，入口隱密。",
        tips: "入口較難找，認明建築物名稱與樓層。",
        location: {
          name: "Bar Nayuta",
          url: "https://maps.app.goo.gl/53aHraAP7tVP4HLN6",
          addressQuery: "Bar Nayuta"
        }
      },
      {
        id: "23-5",
        time: "22:00",
        type: "BAR",
        title: "Bar Whiskey",
        description: "經典威士忌酒吧",
        location: {
          name: "Bar Whiskey",
          url: "https://maps.app.goo.gl/ZiuLc2XzgEbs7sC47",
          addressQuery: "Bar Whiskey Osaka"
        }
      }
    ]
  },
  {
    date: "2/24",
    fullDate: "2026-02-24",
    dayOfWeek: "週二",
    locationTitle: "大阪美食巡禮",
    startHotel: NAMBA_FAIRFIELD,
    endHotel: NAMBA_FAIRFIELD,
    activities: [
      {
        id: "24-1",
        time: "08:00",
        type: "FOOD",
        title: "大阪木津卸売市場",
        route: "A",
        tag: "路線 A (早起組)",
        description: "體驗在地人廚房，推薦海鮮丼或鰻魚飯。",
        transitDetail: "御堂筋線「大國町站」1號出口 步行3分鐘。也可從難波飯店步行約 15 分鐘。",
        tips: "⚠️ 市場多數店家中午前打烊，請務必早起。",
        location: {
          name: "大阪木津卸売市場",
          url: "https://maps.app.goo.gl/FBGjfoufTNx1bXB56",
          addressQuery: "Osaka Kizu Wholesale Market"
        }
      },
      {
        id: "24-1-B",
        time: "11:00",
        type: "SHOPPING",
        title: "梅田商圈 (百貨/電器)",
        route: "B",
        tag: "路線 B (逛街組)",
        description: "阪急百貨、LUCUA、Grand Front Osaka 或 Yodobashi Camera。",
        transitDetail: "搭乘御堂筋線：難波 ➔ 梅田 (約 8 分鐘)。建議從 5 號出口方向出站往地面。",
        location: {
          name: "梅田 (Umeda)",
          url: "https://maps.google.com/?q=Umeda+Station",
          addressQuery: "Osaka Station"
        }
      },
      {
        id: "24-2",
        time: "18:00",
        type: "FOOD",
        title: "北新地 はらみ",
        tag: "晚餐會合",
        description: "北新地的高級燒肉。兩組人馬在此會合。",
        transitDetail: "路線 A: 從飯店搭地鐵前往西梅田/北新地。 路線 B: 從梅田步行約 10 分鐘可達北新地。",
        tips: "已預約 18:00，請準時。此區域為高級夜生活區，著裝建議輕便整潔。",
        location: {
          name: "北新地 はらみ (Kitashinchi Harami)",
          url: "https://maps.app.goo.gl/rBanFb19RVkA2kck9",
          addressQuery: "Kitashinchi Harami"
        }
      },
      {
        id: "24-3",
        time: "20:00",
        type: "BAR",
        title: "Bar S'ead",
        description: "質感酒吧",
        location: {
          name: "Bar S'ead",
          url: "https://maps.app.goo.gl/z2N3BDNXjMDW7GU5A",
          addressQuery: "Bar S'ead"
        }
      }
    ]
  },
  {
    date: "2/25",
    fullDate: "2026-02-25",
    dayOfWeek: "週三",
    locationTitle: "大阪清酒之旅",
    startHotel: NAMBA_FAIRFIELD,
    endHotel: NAMBA_FAIRFIELD,
    activities: [
      {
        id: "25-0",
        time: "11:00",
        type: "SHOPPING",
        title: "梅田商圈 (補逛/採買)",
        description: "把握最後完整的白天時光，前往梅田進行採買。",
        transitDetail: "御堂筋線：難波 ➔ 梅田 (約 8 分鐘)。",
        location: {
          name: "梅田 (Umeda)",
          url: "https://maps.google.com/?q=Umeda+Station",
          addressQuery: "Osaka Station"
        }
      },
      {
        id: "25-0-2",
        time: "18:00",
        type: "FOOD",
        title: "五條家 (ごじょうや)",
        description: "創作串炸料理 (Kushi-katsu)，晚餐。",
        transitDetail: "位於東心齋橋，從梅田搭地鐵回心齋橋站步行前往。",
        tips: "已預約 18:00，請準時。",
        location: {
          name: "五條家 (Gojoya)",
          url: "https://maps.google.com/?q=Gojoya+Osaka+Higashishinsaibashi",
          addressQuery: "Gojoya Osaka Higashishinsaibashi"
        }
      },
      {
        id: "25-1",
        time: "20:00",
        type: "BAR",
        title: "柴長清酒 本店",
        transitDetail: "日本橋站附近，步行前往。",
        location: {
          name: "柴長清酒 本店",
          url: "https://maps.app.goo.gl/ydisdJYWTcqWKxUj8",
          addressQuery: "柴長清酒 本店"
        }
      },
      {
        id: "25-2",
        time: "22:00",
        type: "BAR",
        title: "Sake Ichiro",
        transitDetail: "東心齋橋區域，步行前往。",
        location: {
          name: "Sake Ichiro",
          url: "https://maps.app.goo.gl/7ucWZx24an4ziDLC7",
          addressQuery: "Sake Ichiro"
        }
      }
    ]
  },
  {
    date: "2/26",
    fullDate: "2026-02-26",
    dayOfWeek: "週四",
    locationTitle: "大阪 ➔ 桃園",
    startHotel: NAMBA_FAIRFIELD,
    endHotel: HOME_TW,
    activities: [
      {
        id: "26-1",
        time: "11:00",
        type: "HOTEL_CHECKOUT",
        title: "Check-out",
        location: NAMBA_FAIRFIELD
      },
      {
        id: "26-2",
        time: "13:00",
        type: "TRANSIT",
        title: "前往關西機場",
        description: "搭乘南海電鐵特急 Rapi:t (全車指定席) 前往機場。",
        transitDetail: "從飯店前往「南海難波站」3樓改札口。請事先購票或使用電子票。",
        tips: "⚠️ 建議搭乘 13:00 或 13:30 的班次，務必保留 2.5 小時以上到達機場。",
        location: {
            name: "南海難波站",
            url: "https://maps.app.goo.gl/dummy",
            addressQuery: "Kansai International Airport"
        }
      },
      {
        id: "26-3",
        time: "16:15",
        type: "FLIGHT",
        title: "飛機起飛",
        description: "平安歸國",
        location: {
            name: "關西國際機場 (KIX)",
            url: "https://www.kansai-airport.or.jp/tw/",
            addressQuery: ""
        }
      }
    ]
  }
];