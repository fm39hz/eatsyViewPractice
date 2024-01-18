export interface IDish {
  status: number;
  data: {
    id: number;
    api_url: string;
    dishid: number;
    dishname: string;
    recommendpeople: number;
    youtubevideo: '';
    image: string;
    description: string;
    saved: number;
    processingtime: number;
    share_url: string;
    carbPercentage: string;
    proteinPercentage: string;
    fatPercentage: string;
    tagList: [];
    lstStep: IDishStep[];
    lstFood: IFood[];
    lstCatalogues: [];
    nutrition: INutrition;
  };
  message: null;
}

export interface IDishStep {
  order: number;
  title: string;
  start: number;
  end: number;
}

export interface IFood {
  foodid: number;
  foodname: string;
  image: string;
  quantity: number;
  foodtypeid: number;
  unitFreeText: null;
  foodunitconvertid: number;
  foodunitid: number;
  foodunitname: null;
  convertrate: number;
  convertunitid: number;
  convertunitname: null;
  foodunitconvert: null;
  energy_kcal: number;
  protein_g: number;
  lipid_g: number;
  glucidcarbohydratecarb_g: number;
}

export interface INutrition {
  energy_kcal: number;
  protein_g: number;
  lipid_g: number;
  glucidcarbohydratecarb_g: number;
  fibercellulose_g: number;
  calcium_mg: number;
  iron_mg: number;
  magnesium_mg: number;
  mangan_mg: number;
  phosphorous_mg: number;
  potassium_mg: number;
  sodium_mg: number;
  zinc_mg: number;
  copper_mcg: number;
  selenium_mcg: number;
  vitamin_c_mg: number;
  vitamin_b1_mg: number;
  vitamin_b2_mg: number;
  vitamin_pp_mg: number;
  vitamin_b5_mg: number;
  vitamin_b6_mg: number;
  folat_mcg: number;
  vitamin_b9_mcg: number;
  vitamin_h_mcg: number;
  vitamin_b12_mcg: number;
  vitamin_a_mcg: number;
  vitamin_d_mcg: number;
  vitamin_e_mg: number;
  vitamin_k_mcg: number;
  betacarotene_mcg: number;
  alpha_caroten_mcg: number;
  lycopen_mcg: number;
  cholesterol_mg: number;
  iod_mg: number;
}
