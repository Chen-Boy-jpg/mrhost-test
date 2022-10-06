import WestDoorHotel from "../assets/台北西門町意舍酒店.jpg";
import CadaHotel from "../assets/台北凱達大飯店.jpg";
import CityHotel from "../assets/城市商旅-南東館.jpg";
import HotSpringHotel from "../assets/鳳凰閣溫泉旅店.jpg";
import DailyHotel from "../assets/德立莊昆明館.jpeg";

export interface Data {
  imageSrc: string;
  title: string;
  description: string;
  score: number;
  area: string;
  price: number;
  isParking: boolean;
  isPetting: boolean;
}

export const HotelData: Data[] = [
  {
    imageSrc: WestDoorHotel,
    title: "台北西門町意舍",
    description:
      "台北西門町意舍酒店距離捷運西門站步行 7分鐘，設有餐廳、洗衣服務和全館免費 WiFi，提供現代化的環保住宿。台北西門町意舍酒店位於西門町商圈的中心地帶，交通便利，距離西門紅樓步行 7 分鐘；距離華西街觀光夜市 7分鐘車程；距離桃園國際機場約 45 分鐘車程。所有客房均裝潢典雅且空間寬敞，設有空調、平面有線電視、休息區、私人衛浴、吹風機、高級盥洗用品和室內拖鞋，提供舒適的住宿體驗。",
    score: 4,
    area: "台北市",
    price: 3600,
    isParking: true,
    isPetting: true,
  },

  {
    imageSrc: CadaHotel,
    title: "台北凱撒大飯店",
    description:
      "台北凱撒大飯店位於中心商業區，坐落在台北車站正對面，與台北捷運、台灣高鐵、桃園機場捷運和台北轉運站相連通。館內提供房內 WiFi，客房設有空調、大理石私人衛浴和平面電視。飯店最近的機場是台北松山機場，距離 15 分鐘車程。飯店距離桃園國際機場 40 分鐘車程。",
    score: 4,
    area: "台北市",
    price: 1300,
    isParking: false,
    isPetting: false,
  },

  {
    imageSrc: CityHotel,
    title: "城市商旅-南東館",
    description:
      "城市商旅－南東館位於台北市，附設餐廳。館內提供免費 WiFi。每間客房均配備電視和空調，並設有休息區。房內還提供冰箱。私人衛浴設有淋浴設施，並備有吹風機。城市商旅－南東館設有 24 小時接待櫃台。館內其他設施包括行李寄存服務。飯店距離桃園國際機場約 34 公里。",
    score: 3.8,
    area: "台北市",
    price: 1500,
    isParking: true,
    isPetting: false,
  },

  {
    imageSrc: HotSpringHotel,
    title: "鳳凰閣溫泉旅店",
    description:
      "鳳凰閣温泉飯店坐落在北投，著名的溫泉區之一，並提供溫泉設施和住宿。此外，也提供免費停車場和免費的 WiFi。鳳凰閣溫泉大酒店從台北火車站有 30 分鐘的車程，或 1 小時的捷運車程。從捷運新北投站抵達飯店需要步行 15 分鐘。附近的其他地標如北投溫泉區、北投圖書館和北投溫泉博物館均不到 10 分鐘的步行路程即可到達。所有的客房設有空調，且以榻榻米和硬木地板營造出日式氛圍。另外還設有衣櫃和平面有線電視。私人浴室配有淋浴和浴缸設施、免費盥洗用品和吹風機。24小時服務的前台可提供影印/傳真和行李寄存服務。在飯店大廳，歡迎住客免費使用咖啡機。",
    score: 4,
    area: "台北市",
    price: 2600,
    isParking: false,
    isPetting: true,
  },

  {
    imageSrc: DailyHotel,
    title: "PAPA WHALE昆明館",
    description:
      "德立莊酒店位於台北，毗鄰捷運西門站，提供舒適的住宿環境。所有客房均提供免費 WiFi。德立莊酒店緊鄰有各式各樣餐飲和娛樂選項的西門町購物商圈，距離台北車站為 1 站捷運車程，距離台北松山機場為 7 站捷運車程，距離二二八和平紀念公園和總統府步行皆為 7 分鐘。每間客房均設有空調、50 吋平面電視、小冰箱和電熱水壺，並提供礦泉水。私人衛浴內配有淋浴設施。24 小時櫃台親切的工作人員可協助客人免費寄存行李，也可提供在地旅遊資訊。",
    score: 4.1,
    area: "台北市",
    price: 1040,
    isParking: false,
    isPetting: false,
  },
];
