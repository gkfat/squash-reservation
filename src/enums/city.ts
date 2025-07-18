// @ts-expect-error err
export enum City {
    Taipei = 'Taipei',
    NewTaipei = 'NewTaipei',
    Taoyuan = 'Taoyuan',
    Hsinchu = 'Hsinchu',
    Taichuang = 'Taichuang',
    Kaohsiung = 'Kaohsiung',
}

export const CityLangMapping = {
    [City.Taipei]: '台北市 | Taipei City',
    [City.NewTaipei]: '新北市 | New Taipei City',
    [City.Taoyuan]: '桃園市 | Taoyuan City',
    [City.Hsinchu]: '新竹市 | Hsinchu City',
    [City.Taichuang]: '台中市 | Taichung City',
    [City.Kaohsiung]: '高雄市 | Kaoshiung City',
};