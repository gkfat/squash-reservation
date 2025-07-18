import type { Court } from '../types/court';
import { City } from '../enums/city';

export const COURTS: Record<City, Court[]> = {
    [City.Taipei]: [
        {
            title: '台大綜合體育館 | NTU Sports Center',
            address: '國立臺灣大學綜合體育館',
            link: 'https://rent.pe.ntu.edu.tw/venues/?K=11',
            phone: '(02) 3366-5959',
        },
        {
            title: '內湖運動中心 | Neihu Sports Center',
            address: '台北市內湖區洲子街12號',
            link: 'https://scr.cyc.org.tw/tp12.aspx',
            phone: '(02) 2653-2279',
        },
        {
            title: '北投運動中心 | Beitou Sports Center',
            address: '台北市北投區石牌路一段39巷100號',
            phone: '(02) 2820-2880',
        },
        {
            title: '南港運動中心 | Nangang Sports Center',
            address: '台北市南港區玉成街69號',
            phone: '(02) 2653-2279',
        },
        {
            title: '信義運動中心 | Xinyi Sports Center',
            address: '台北市信義區松勤街100號',
            phone: '(02) 8786-1911',
            link: 'https://xs.teamxports.com/xs03.aspx',
        },
        {
            title: '台北壁球中心 | Taipei Squash Center',
            address: '台北市松山區民生東路五段171號海華大廈 B2',
            phone: '(02) 2768-0871',
        },
        {
            title: '大安運動中心 | Taipei Daan Sports Center',
            address: '台北市大安區辛亥路三段55號',
            phone: '(02) 2377-0300',
            link: 'https://www.cjcf.com.tw/CG02.aspx?fbclid=IwAR1DklN9Em-c50IkK2hMAzXLf8JKzlVkcv8sJ855J7YaUhnYdrpTDWSyZ2I',
        },
        {
            title: '台北美僑俱樂部 | American Club Taipei',
            address: '台北市中山區北安路47號',
            phone: '(02) 2885-8260',
            link: 'https://www.americanclub.org.tw/fitness/squash/',
        },
        {
            title: '捷運北投會館 | Beitou Resort',
            address: '台北市北投區大業路527巷88號',
            phone: '(02) 2893-0105',
        },
    ],
    [City.NewTaipei]: [
        {
            title: '三重國民運動中心 | Sanchong Sports Center',
            address: '新北市三重區集美街55號',
            phone: '(02) 8972-0079',
            link: 'https://fe.xuanen.com.tw/fe01.aspx',
        },
        {
            title: '永和國民運動中心 | Yonghe Sports Center',
            address: '新北市永和區永利路250號',
            phone: '(02) 2231-8989',
            link: 'https://scr.cyc.org.tw/tp10.aspx',
        },
        {
            title: '中和國民運動中心 | Zhonghe Sports Center',
            address: '新北市中和區錦和路350之2號',
            phone: '(02) 2242-9222',
        },
        {
            title: '土城國民運動中心 | Tucheng Sports Center',
            address: '新北市土城區金城路2段247之1號',
            phone: '(02) 2261-5999',
            link: 'https://fe.xuanen.com.tw/fe03.aspx',
        },
        {
            title: '汐止國民運動中心 | Xizhi Sports Center',
            address: '新北市汐止區汐科路321號',
            phone: '(02) 8691-5691',
            link: 'https://scr.cyc.org.tw/tp09.aspx',
        },
        {
            title: '板橋國民運動中心 | Banqiao Sports Center',
            address: '新北市板橋區智樂路6號',
            phone: '(02) 2258-8886',
            link: 'https://www.cjcf.com.tw/CG01.aspx',
        },
        {
            title: '淡水國民運動中心 | Tamsui Sports Center',
            address: '新北市淡水區中山北路2段381巷2號',
            phone: '(02) 2626-1891',
            link: 'https://bts.xuanen.com.tw/ts01.aspx',
        },
        {
            title: '蘆洲國民運動中心 | Luzhou Sports Center',
            address: '新北市蘆洲區長樂路235-1號',
            phone: '(02) 2281-0538',
        },
        {
            title: '樹林國民運動中心 | Shulin Sports Center',
            address: '新北市樹林區中正路188-6號',
            phone: '(02) 2681-9966',
            link: 'https://bnt.xuanen.com.tw/nt01.aspx?module=ind&files=ind',
        },
        {
            title: '三峽國民運動中心 | Sanxia Sports Center',
            address: '新北市三峽區文化路210巷12號',
            phone: '(02) 2674-9088',
            link: 'https://sx.teamxports.com/venue-booking/generally',
        },
        {
            title: '林口國民運動中心 | Linkou Sports Center',
            address: '新北市林口區文化二路2段299號',
            phone: '(02) 2602-9092',
            link: 'https://scr.cyc.org.tw/tp17.aspx',
        },
        {
            title: '泰山國民運動中心 | Taishin Sports Center',
            address: '新北市泰山區全興路167號',
            phone: '(02) 2297-8860',
            link: 'https://www.ymca.com.tw/xwt88.aspx?module=ind&files=ind',
        },
    ],
    [City.Taoyuan]: [
        {
            title: '蘆竹國民運動中心 | Luzhu Sports Center',
            address: '桃園市蘆竹區仁愛路一段49號',
            phone: '(03) 263-9066',
        },
    ],
    [City.Hsinchu]: [
        {
            title: '竹北國民運動中心 | Zhubei Sports Center',
            address: '新竹縣竹北市莊敬南路18號',
            phone: '(03) 550-0222',
            link: 'https://fe.xuanen.com.tw/fe02.aspx',
        },
    ],
    [City.Taichuang]: [
        {
            title: '長春國民暨兒童運動中心 | Changchun Sports Center',
            address: '臺中市南區合作街46號',
            phone: '(04) 2222-0661',
            link: 'https://wd.xuanen.com.tw/wd08.aspx',
        },
        {
            title: '大里國民暨兒童運動中心 | Dali Sports Center',
            address: '台中市大里區國光路一段258號',
            phone: '(04) 2482-3900',
            link: 'https://bwd.xuanen.com.tw/wd14.aspx',
        },
        {
            title: '逢甲大學體育館 | FCU Sports Center',
            address: '臺中市西屯區文華路100號',
            phone: '(04) 2451-7250 #5985',
            link: 'https://sportscenter.fcu.edu.tw/rent',
        },
    ],
    [City.Kaohsiung]: [
        {
            title: '健身工廠 | Fitness Factory',
            address: '高雄市左營區博愛三路102號',
            phone: '(07) 345-3838',
        },
        {
            title: '高雄大學體育館 | NUK Sports Center',
            address: '高雄市楠梓區高雄大學路700號',
            phone: '(07) 591-9576',
            link: 'https://stu.nuk.edu.tw/al/login.asp',
        },
        {
            title: '漢來飯店俱樂部 | Grand Hilai Hotel',
            address: '高雄市前金區成功一路266號11樓',
            phone: '(07) 216-1766',
        },
        {
            title: '中正技擊館 | Martial Arts Stadium',
            address: '高雄市苓雅區中正一路96號',
            phone: '(07) 751-9325',
        },
    ],
};