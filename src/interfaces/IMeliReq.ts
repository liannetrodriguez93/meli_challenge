export interface IMeliReq {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: IPaging;
  results: IResult[];
  sort: ISort;
  available_sorts: ISort[];
  filters: IFilter[];
  available_filters: IAvailableFilter[];
}

export interface IAvailableFilter {
  id: string;
  name: string;
  type: string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id: string;
  name: string;
  results: number;
}

export interface ISort {
  id: null | string;
  name: string;
}

export interface IFilter {
  id: string;
  name: string;
  type: string;
  values: FilterValue[];
}

export interface FilterValue {
  id: string;
  name: string;
  path_from_root: ISort[];
}

export interface IPaging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface IResult {
  id: string;
  title: string;
  condition: Condition;
  thumbnail_id: string;
  catalog_product_id: null | string;
  listing_type_id: ListingTypeID;
  permalink: string;
  buying_mode: BuyingMode;
  site_id: SiteID;
  category_id: CategoryID;
  domain_id: DomainID;
  thumbnail: string;
  currency_id: CurrencyID;
  order_backend: number;
  price: number;
  original_price: number | null;
  sale_price: null;
  sold_quantity: number;
  available_quantity: number;
  official_store_id: number | null;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: ResultTag[];
  variation_filters?: VariationFilter[];
  shipping: Shipping;
  stop_time: string;
  seller: Seller;
  seller_address: SellerAddress;
  address: Address;
  attributes: Attribute[];
  variations_data?: { [key: string]: VariationsDatum };
  installments: Installments;
  winner_item_id: null;
  discounts: null;
  promotions: any[];
  inventory_id: null | string;
  official_store_name?: string;
  differential_pricing?: DifferentialPricing;
  catalog_listing?: boolean;
}

export interface Address {
  state_id: StateID;
  state_name: StateName;
  city_id: null | string;
  city_name: string;
}

export enum StateID {
  ArB = 'AR-B',
  ArC = 'AR-C',
  ArW = 'AR-W',
}

export enum StateName {
  BuenosAires = 'Buenos Aires',
  CapitalFederal = 'Capital Federal',
  Corrientes = 'Corrientes',
}

export interface Attribute {
  id: ID;
  name: Name;
  value_id: null | string;
  value_name: null | string;
  attribute_group_id: AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  value_struct: Struct | null;
  values: AttributeValue[];
  source: number | null;
  value_type: ValueType;
}

export enum AttributeGroupID {
  Empty = '',
  Others = 'OTHERS',
}

export enum AttributeGroupName {
  Empty = '',
  Otros = 'Otros',
}

export enum ID {
  Brand = 'BRAND',
  DiningTableLength = 'DINING_TABLE_LENGTH',
  ItemCondition = 'ITEM_CONDITION',
  Length = 'LENGTH',
  MaxLength = 'MAX_LENGTH',
  Model = 'MODEL',
  NightStandLength = 'NIGHT_STAND_LENGTH',
  PackageLength = 'PACKAGE_LENGTH',
  PackageWeight = 'PACKAGE_WEIGHT',
  TableLength = 'TABLE_LENGTH',
  UnitsPerPackage = 'UNITS_PER_PACKAGE',
  Weight = 'WEIGHT',
  WithDoors = 'WITH_DOORS',
}

export enum Name {
  ConPuertas = 'Con puertas',
  CondiciónDelÍtem = 'Condición del ítem',
  Largo = 'Largo',
  LargoDeLaMesa = 'Largo de la mesa',
  LargoDeLaMesaDeLuz = 'Largo de la mesa de luz',
  LargoDelPaquete = 'Largo del paquete',
  LargoMáximo = 'Largo máximo',
  Marca = 'Marca',
  Modelo = 'Modelo',
  Peso = 'Peso',
  PesoDelPaquete = 'Peso del paquete',
  UnidadesPorEnvase = 'Unidades por envase',
}

export interface Struct {
  number: number;
  unit: Unit;
}

export enum Unit {
  CM = 'cm',
  G = 'g',
  Kg = 'kg',
}

export enum ValueType {
  Boolean = 'boolean',
  List = 'list',
  Number = 'number',
  NumberUnit = 'number_unit',
  String = 'string',
}

export interface AttributeValue {
  id: null | string;
  name: null | string;
  struct: Struct | null;
  source: number | null;
}

export enum BuyingMode {
  BuyItNow = 'buy_it_now',
}

export enum CategoryID {
  Mla30081 = 'MLA30081',
  Mla31040 = 'MLA31040',
  Mla370415 = 'MLA370415',
  Mla417026 = 'MLA417026',
  Mla429425 = 'MLA429425',
  Mla4764 = 'MLA4764',
  Mla7149 = 'MLA7149',
}

export enum Condition {
  New = 'new',
}

export enum CurrencyID {
  Ars = 'ARS',
}

export interface DifferentialPricing {
  id: number;
}

export enum DomainID {
  MlaDiningSets = 'MLA-DINING_SETS',
  MlaDiningTables = 'MLA-DINING_TABLES',
  MlaFurnitureLegs = 'MLA-FURNITURE_LEGS',
  MlaHomeOfficeDesks = 'MLA-HOME_OFFICE_DESKS',
  MlaKitchenCabinets = 'MLA-KITCHEN_CABINETS',
  MlaNightstands = 'MLA-NIGHTSTANDS',
  MlaSideTables = 'MLA-SIDE_TABLES',
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: CurrencyID;
}

export enum ListingTypeID {
  GoldPro = 'gold_pro',
  GoldSpecial = 'gold_special',
}

export interface Seller {
  id: number;
  nickname: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  _: boolean;
  registration_date: string;
  tags: SellerTag[];
  car_dealer_logo: string;
  permalink: string;
  seller_reputation: SellerReputation;
  eshop?: Eshop;
}

export interface Eshop {
  eshop_id: number;
  seller: number;
  nick_name: string;
  eshop_status_id: number;
  site_id: SiteID;
  eshop_experience: number;
  eshop_rubro: EshopRubro | null;
  eshop_locations: EshopLocation[];
  eshop_logo_url: string;
}

export interface EshopLocation {
  city: City;
  country: City;
  neighborhood: City;
  state: City;
}

export interface City {
  id: null | string;
}

export interface EshopRubro {
  category_id: string;
  id: string;
  name: string;
}

export enum SiteID {
  Mla = 'MLA',
}

export interface SellerReputation {
  level_id: LevelID;
  power_seller_status: PowerSellerStatus | null;
  transactions: Transactions;
  metrics: Metrics;
}

export enum LevelID {
  The4_LightGreen = '4_light_green',
  The5_Green = '5_green',
}

export interface Metrics {
  sales: Sales;
  claims: Cancellations;
  delayed_handling_time: Cancellations;
  cancellations: Cancellations;
}

export interface Cancellations {
  period: CancellationsPeriod;
  rate: number;
  value: number;
  excluded?: Excluded;
}

export interface Excluded {
  real_value: number;
  real_rate: number;
}

export enum CancellationsPeriod {
  The365Days = '365 days',
  The60Days = '60 days',
}

export interface Sales {
  period: CancellationsPeriod;
  completed: number;
}

export enum PowerSellerStatus {
  Gold = 'gold',
  Platinum = 'platinum',
  Silver = 'silver',
}

export interface Transactions {
  canceled: number;
  completed: number;
  period: TransactionsPeriod;
  ratings: Ratings;
  total: number;
}

export enum TransactionsPeriod {
  Historic = 'historic',
}

export interface Ratings {
  negative: number;
  neutral: number;
  positive: number;
}

export enum SellerTag {
  Brand = 'brand',
  CreditsActiveBorrower = 'credits_active_borrower',
  CreditsOpenMarket = 'credits_open_market',
  CreditsPriority2 = 'credits_priority_2',
  CreditsPriority3 = 'credits_priority_3',
  CreditsPriority4 = 'credits_priority_4',
  CreditsProfile = 'credits_profile',
  Eshop = 'eshop',
  LargeSeller = 'large_seller',
  MediumSeller = 'medium_seller',
  MediumSellerAdvanced = 'medium_seller_advanced',
  MessagesAsSeller = 'messages_as_seller',
  Mshops = 'mshops',
  Normal = 'normal',
}

export interface SellerAddress {
  comment: string;
  address_line: string;
  zip_code: string;
  id: null;
  latitude: null;
  longitude: null;
  country: ISort;
  state: ISort;
  city: ISort;
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: LogisticType;
  mode: Mode;
  tags: ShippingTag[];
  promise: null;
}

export enum LogisticType {
  CrossDocking = 'cross_docking',
  Custom = 'custom',
  Default = 'default',
  DropOff = 'drop_off',
  Fulfillment = 'fulfillment',
  NotSpecified = 'not_specified',
  XdDropOff = 'xd_drop_off',
}

export enum Mode {
  Custom = 'custom',
  Me1 = 'me1',
  Me2 = 'me2',
  NotSpecified = 'not_specified',
}

export enum ShippingTag {
  Fulfillment = 'fulfillment',
  MLAChgThresholdFeb23 = 'MLA-chg-threshold-Feb-23',
  MandatoryFreeShipping = 'mandatory_free_shipping',
  Me2Available = 'me2_available',
  OptionalMe1Chosen = 'optional_me1_chosen',
  SelfServiceIn = 'self_service_in',
  SelfServiceOut = 'self_service_out',
  SuspendedByCollect = 'suspended_by_collect',
}

export enum ResultTag {
  BestSellerCandidate = 'best_seller_candidate',
  BrandVerified = 'brand_verified',
  CartEligible = 'cart_eligible',
  DealOfTheDay = 'deal_of_the_day',
  DraggedBidsAndVisits = 'dragged_bids_and_visits',
  ExtendedWarrantyEligible = 'extended_warranty_eligible',
  GoodQualityPicture = 'good_quality_picture',
  GoodQualityThumbnail = 'good_quality_thumbnail',
  ImmediatePayment = 'immediate_payment',
  IncompleteTechnicalSpecs = 'incomplete_technical_specs',
  LoyaltyDiscountEligible = 'loyalty_discount_eligible',
  MeliChoiceCandidate = 'meli_choice_candidate',
  ModerationPenalty = 'moderation_penalty',
  MshopsAhora12 = 'mshops_ahora-12',
  MshopsAhora6 = 'mshops_ahora-6',
  ShippingGuaranteed = 'shipping_guaranteed',
  StandardPriceByChannel = 'standard_price_by_channel',
}

export enum VariationFilter {
  ChairsFabricDesign = 'CHAIRS_FABRIC_DESIGN',
  Color = 'COLOR',
  Finish = 'FINISH',
  LegsColor = 'LEGS_COLOR',
  Material = 'MATERIAL',
  TopColor = 'TOP_COLOR',
}

export interface VariationsDatum {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  inventory_id?: string;
}
