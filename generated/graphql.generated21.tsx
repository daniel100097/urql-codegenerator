import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
    DateTime: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
};

export type HostNodeTask = {
    __typename?: 'HostNodeTask';
    finish: Scalars['Boolean'];
    running: Scalars['Boolean'];
    waiting: Scalars['Boolean'];
    timeout: Scalars['Boolean'];
    error: Scalars['Boolean'];
    gameserver?: Maybe<ProductGameserver>;
    id: Scalars['ID'];
    label: Scalars['String'];
    create: Scalars['DateTime'];
    state: Scalars['String'];
    hostNode: HostNode;
    version: Scalars['Int'];
    update: Scalars['DateTime'];
    lifesign?: Maybe<Scalars['DateTime']>;
    user: User;
};

export type HostNodePort = {
    __typename?: 'HostNodePort';
    id: Scalars['ID'];
    port: Scalars['Int'];
    protocol: Scalars['String'];
    hostNode: HostNode;
    gameserver?: Maybe<ProductGameserver>;
    teamspeak?: Maybe<ProductTeamspeak>;
};

export type ProductTemplateOption = {
    __typename?: 'ProductTemplateOption';
    id: Scalars['ID'];
    title: Scalars['String'];
    upgradeable: Scalars['Boolean'];
    display: Scalars['String'];
    create: Scalars['DateTime'];
    variants: Array<ProductTemplateOptionVariant>;
};

export type ProductTemplateOptionVariantsArgs = {
    includeHidden?: Maybe<Scalars['Boolean']>;
};

export type ProductTemplateOptionVariant = {
    __typename?: 'ProductTemplateOptionVariant';
    id: Scalars['ID'];
    priceMultiplier: Scalars['Float'];
    hidden: Scalars['Boolean'];
    price: Scalars['Float'];
    sort: Scalars['Int'];
    priceSetup: Scalars['Float'];
    key: Scalars['String'];
    label: Scalars['String'];
    meta: Scalars['JSON'];
    value?: Maybe<Scalars['JSON']>;
    option?: Maybe<ProductTemplateOption>;
    siblings: Array<ProductTemplateOptionVariant>;
};

export type ProductVserverIp = {
    __typename?: 'ProductVserverIp';
    id: Scalars['String'];
    create: Scalars['DateTime'];
    ip: Scalars['String'];
    netmask: Scalars['String'];
    gateway: Scalars['String'];
    active: Scalars['Boolean'];
    hostNode?: Maybe<HostNode>;
    vserver?: Maybe<ProductVserver>;
    assigned: Scalars['Boolean'];
};

export type Acl = {
    __typename?: 'Acl';
    id: Scalars['ID'];
    acl: Scalars['String'];
    create: Scalars['DateTime'];
    update: Scalars['DateTime'];
};

export type Role = {
    __typename?: 'Role';
    id: Scalars['String'];
    name: Scalars['String'];
    acls: Array<Acl>;
    users: Array<User>;
};

export type SupportTicketMessage = {
    __typename?: 'SupportTicketMessage';
    userAvatar: Scalars['String'];
    userPublicName: Scalars['String'];
    id: Scalars['String'];
    create: Scalars['DateTime'];
    ticket: SupportTicket;
    text?: Maybe<Scalars['String']>;
    user: User;
    userId?: Maybe<Scalars['String']>;
};

export type SupportTicket = {
    __typename?: 'SupportTicket';
    reviserName?: Maybe<Scalars['String']>;
    open: Scalars['Boolean'];
    id: Scalars['String'];
    create: Scalars['DateTime'];
    update: Scalars['DateTime'];
    lastOpened: Scalars['DateTime'];
    lastOpenedFromReviser: Scalars['DateTime'];
    messages: Array<SupportTicketMessage>;
    reviser?: Maybe<User>;
    category: Scalars['String'];
    author: User;
    subject: Scalars['String'];
    status: Scalars['String'];
    priority: Scalars['Int'];
    files: Array<File>;
    unreadMessages: Scalars['Int'];
    unreadReviserMessages: Scalars['Int'];
};

export type File = {
    __typename?: 'File';
    hasExpired: Scalars['Boolean'];
    url: Scalars['String'];
    exists: Scalars['Boolean'];
    uploaderId?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    create: Scalars['DateTime'];
    file: Scalars['String'];
    expiryDate?: Maybe<Scalars['DateTime']>;
    mimetype: Scalars['String'];
    originalname: Scalars['String'];
    uploader: User;
};

export type ProductVserverImage = {
    __typename?: 'ProductVserverImage';
    id: Scalars['String'];
    create: Scalars['DateTime'];
    title: Scalars['String'];
    platform: Scalars['String'];
    logo?: Maybe<File>;
    active: Scalars['Boolean'];
    resourceUrl: Scalars['String'];
    vservers: Array<ProductVserver>;
    meta: Scalars['JSON'];
};

export type ProductGameserverScript = {
    __typename?: 'ProductGameserverScript';
    id: Scalars['ID'];
    title: Scalars['String'];
    runAsRoot: Scalars['Boolean'];
    disableAutoRestart: Scalars['Boolean'];
    script: Scalars['String'];
    standaloneBtn: Scalars['Boolean'];
    standaloneBtnColor?: Maybe<Scalars['String']>;
    update: Scalars['DateTime'];
    template: ProductGameserverTemplate;
    isDefault: Scalars['Boolean'];
    executeHook?: Maybe<Scalars['String']>;
    hidden: Scalars['Boolean'];
};

export type ProductGameserverTemplate = {
    __typename?: 'ProductGameserverTemplate';
    id: Scalars['String'];
    title: Scalars['String'];
    create: Scalars['DateTime'];
    update: Scalars['DateTime'];
    platform: Scalars['String'];
    logo?: Maybe<File>;
    canUpdateOnStart: Scalars['Boolean'];
    active: Scalars['Boolean'];
    defaultScript?: Maybe<ProductGameserverScript>;
    resourceUrl: Scalars['String'];
    ports: Scalars['Float'];
    meta: Scalars['JSON'];
    defaultCustomParameter: Scalars['String'];
};

export type ProductTemplateGameserver = {
    __typename?: 'ProductTemplateGameserver';
    id: Scalars['ID'];
    meta: Scalars['JSON'];
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    active: Scalars['Boolean'];
    update: Scalars['DateTime'];
    urlKey?: Maybe<Scalars['String']>;
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    create: Scalars['DateTime'];
    availablePeriods: Array<ProductTemplateExtendPeriod>;
    slot?: Maybe<ProductTemplateOption>;
    memory?: Maybe<ProductTemplateOption>;
    attributes: Scalars['JSON'];
    gameserverTemplates: Array<ProductGameserverTemplate>;
    templateOptions: Array<ProductTemplateOption>;
    options: Array<ProductTemplateOption>;
    logos: Array<File>;
};

export type ProductTemplateTeamspeak = {
    __typename?: 'ProductTemplateTeamspeak';
    id: Scalars['ID'];
    meta: Scalars['JSON'];
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    active: Scalars['Boolean'];
    update: Scalars['DateTime'];
    urlKey?: Maybe<Scalars['String']>;
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    create: Scalars['DateTime'];
    slot: ProductTemplateOption;
    attributes: Scalars['JSON'];
    options: Array<ProductTemplateOption>;
    availablePeriods: Array<ProductTemplateExtendPeriod>;
};

export type ProductTemplateExtendPeriod = {
    __typename?: 'ProductTemplateExtendPeriod';
    id: Scalars['ID'];
    expression: Scalars['String'];
    globalGroup?: Maybe<Scalars['String']>;
    discount: Scalars['Float'];
    discountFactor: Scalars['Float'];
    days: Scalars['Float'];
    hours: Scalars['Float'];
    minutes: Scalars['Float'];
};

export type ProductTemplateVserver = {
    __typename?: 'ProductTemplateVserver';
    id: Scalars['ID'];
    meta: Scalars['JSON'];
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    active: Scalars['Boolean'];
    update: Scalars['DateTime'];
    urlKey?: Maybe<Scalars['String']>;
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    create: Scalars['DateTime'];
    cores: ProductTemplateOptionVariant;
    memory: ProductTemplateOptionVariant;
    space: ProductTemplateOptionVariant;
    platform: Scalars['String'];
    options: Array<ProductTemplateOption>;
    availablePeriods: Array<ProductTemplateExtendPeriod>;
};

export type ProductGameserverBackup = {
    __typename?: 'ProductGameserverBackup';
    sizeInMb?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    gameserver: ProductGameserver;
    backupServer: BackupServer;
    create: Scalars['DateTime'];
    restorable: Scalars['Boolean'];
};

export type BackupServer = {
    __typename?: 'BackupServer';
    deletable: Scalars['Boolean'];
    id: Scalars['String'];
    gameserverBackups: Array<ProductGameserverBackup>;
    VserverBackups: Array<ProductVserverBackup>;
    privateKey: Scalars['String'];
    username: Scalars['String'];
    port: Scalars['Int'];
    backupPath: Scalars['String'];
    name: Scalars['String'];
    host: Scalars['String'];
    localHost?: Maybe<Scalars['String']>;
    update: Scalars['DateTime'];
};

export type ProductVserverBackup = {
    __typename?: 'ProductVserverBackup';
    sizeInMb?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    vserver: ProductVserver;
    backupServer: BackupServer;
    create: Scalars['DateTime'];
    restorable: Scalars['Boolean'];
};

export type EmailTemplate = {
    __typename?: 'EmailTemplate';
    id: Scalars['ID'];
    sender: Scalars['String'];
    subject: Scalars['String'];
    template: Scalars['String'];
    templateContent: Scalars['String'];
};

export type ProductTemplateDomain = {
    __typename?: 'ProductTemplateDomain';
    id: Scalars['ID'];
    meta: Scalars['JSON'];
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    active: Scalars['Boolean'];
    update: Scalars['DateTime'];
    urlKey?: Maybe<Scalars['String']>;
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    create: Scalars['DateTime'];
    templateOptions: ProductTemplateOption;
    attributes: Scalars['JSON'];
    gTld: Scalars['String'];
    options: Array<ProductTemplateOption>;
    availablePeriods: Array<ProductTemplateExtendPeriod>;
};

export type ProductDomain = {
    __typename?: 'ProductDomain';
    name: Scalars['String'];
    registered: Scalars['Boolean'];
    id: Scalars['ID'];
    label?: Maybe<Scalars['String']>;
    tld: Scalars['String'];
    create: Scalars['DateTime'];
    attributes: Scalars['JSON'];
    authcode?: Maybe<Scalars['String']>;
    requestNewAuthcode: Scalars['Boolean'];
    product: Product;
    productTemplate: ProductTemplateDomain;
};

export type ProductTemplateSimple = {
    __typename?: 'ProductTemplateSimple';
    id: Scalars['ID'];
    meta: Scalars['JSON'];
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    active: Scalars['Boolean'];
    update: Scalars['DateTime'];
    urlKey?: Maybe<Scalars['String']>;
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    create: Scalars['DateTime'];
    availablePeriods: Array<ProductTemplateExtendPeriod>;
    periods: Array<ProductTemplateExtendPeriod>;
    templateOptions: Array<ProductTemplateOption>;
    attributes: Scalars['JSON'];
    includedGTld?: Maybe<Scalars['String']>;
    options: Array<ProductTemplateOption>;
};

export type ProductSimple = {
    __typename?: 'ProductSimple';
    name: Scalars['String'];
    id: Scalars['ID'];
    label?: Maybe<Scalars['String']>;
    state: Scalars['String'];
    create: Scalars['DateTime'];
    attributes: Scalars['JSON'];
    product: Product;
    productTemplate: ProductTemplateSimple;
    description?: Maybe<Scalars['String']>;
};

export type ProductVserver = {
    __typename?: 'ProductVserver';
    name: Scalars['String'];
    cores: Scalars['String'];
    memory: Scalars['String'];
    diskspace: Scalars['String'];
    tasks: Array<HostNodeTask>;
    hasRunningTask: Scalars['Boolean'];
    platform: Scalars['String'];
    id: Scalars['ID'];
    label?: Maybe<Scalars['String']>;
    mac: Scalars['String'];
    create: Scalars['DateTime'];
    hostNode: HostNode;
    networkSpeed: Scalars['Float'];
    attributes: Scalars['JSON'];
    ips: Array<ProductVserverIp>;
    images: Array<ProductVserverImage>;
    product: Product;
    productTemplate: ProductTemplateVserver;
    backups: Array<ProductVserverBackup>;
    locked: Scalars['Boolean'];
    vserverId?: Maybe<Scalars['Float']>;
    sshPassword?: Maybe<Scalars['String']>;
    trafficTransferredInMB?: Maybe<Scalars['Int']>;
};

export type ProductVserverTrafficTransferredInMbArgs = {
    to?: Maybe<Scalars['String']>;
    from?: Maybe<Scalars['String']>;
};

export type FinanceTransactionItem = {
    __typename?: 'FinanceTransactionItem';
    isPut: Scalars['Boolean'];
    isPull: Scalars['Boolean'];
    hasVat: Scalars['Boolean'];
    amountInclVat: Scalars['Float'];
    id: Scalars['ID'];
    amount: Scalars['Float'];
    title?: Maybe<Scalars['String']>;
    vat?: Maybe<Scalars['Float']>;
    getVatAmount: Scalars['Float'];
    setAmountInclVat: Scalars['Float'];
    getInclVat: Scalars['Float'];
    getExclVat: Scalars['Float'];
};

export type UserAddress = {
    __typename?: 'UserAddress';
    id: Scalars['ID'];
    street1?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    phoneMobile?: Maybe<Scalars['String']>;
    vatId?: Maybe<Scalars['String']>;
    birthdate?: Maybe<Scalars['String']>;
    zip?: Maybe<Scalars['String']>;
    /** @deprecated renamed to zip */
    postcode?: Maybe<Scalars['String']>;
    countryCode: Scalars['String'];
    country: Scalars['String'];
    company?: Maybe<Scalars['String']>;
    firstname?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    lastname?: Maybe<Scalars['String']>;
    user: User;
    verifyDocument?: Maybe<File>;
    verified: Scalars['Boolean'];
    create: Scalars['DateTime'];
    vat?: Maybe<Scalars['Int']>;
};

export type Pdf = {
    __typename?: 'Pdf';
    url: Scalars['String'];
    id: Scalars['String'];
    create: Scalars['DateTime'];
};

export type PdfTemplate = {
    __typename?: 'PdfTemplate';
    id: Scalars['String'];
    templateFile: Scalars['String'];
    template: Scalars['String'];
    create: Scalars['DateTime'];
    update: Scalars['DateTime'];
    templateContent: Scalars['String'];
};

export type FinanceDonationLink = {
    __typename?: 'FinanceDonationLink';
    id: Scalars['String'];
    create: Scalars['DateTime'];
    user: User;
    message: Scalars['String'];
    label?: Maybe<Scalars['String']>;
    donations: Array<FinanceDonation>;
    totalDonationSum: Scalars['Float'];
    url: Scalars['String'];
};

export type FinanceDonation = {
    __typename?: 'FinanceDonation';
    id: Scalars['String'];
    create: Scalars['DateTime'];
    donationMessage: Scalars['String'];
    charge: FinanceCharge;
    donationLink: FinanceDonationLink;
};

export type FinanceCharge = {
    __typename?: 'FinanceCharge';
    verified: Scalars['Boolean'];
    id: Scalars['String'];
    meta: Scalars['JSON'];
    create: Scalars['DateTime'];
    amount: Scalars['Float'];
    fee: Scalars['Float'];
    receiver: User;
    method: Scalars['String'];
    transaction?: Maybe<FinanceTransaction>;
    donation?: Maybe<FinanceDonation>;
};

export type FinanceTransaction = {
    __typename?: 'FinanceTransaction';
    totalExclVat: Scalars['Float'];
    totalInclVat: Scalars['Float'];
    isPut: Scalars['Boolean'];
    isPull: Scalars['Boolean'];
    countryCode: Scalars['String'];
    type: Scalars['String'];
    billId: Scalars['String'];
    charge?: Maybe<FinanceCharge>;
    id: Scalars['ID'];
    total: Scalars['Float'];
    user: User;
    description?: Maybe<Scalars['String']>;
    create: Scalars['DateTime'];
    product: Product;
    pdf?: Maybe<Pdf>;
    items: Array<FinanceTransactionItem>;
    isDonation: Scalars['Boolean'];
    donationMessage?: Maybe<Scalars['String']>;
    donation?: Maybe<Scalars['Boolean']>;
};

export type Product = {
    __typename?: 'Product';
    isProductDowngradable: Scalars['Boolean'];
    availablePeriods: Array<ProductTemplateExtendPeriod>;
    autoRenewIntervalId?: Maybe<Scalars['ID']>;
    basePrice: Scalars['Float'];
    title: Scalars['String'];
    template: ProductTemplateAbstract;
    id: Scalars['ID'];
    expire?: Maybe<Scalars['DateTime']>;
    meta: Scalars['JSON'];
    variants: Array<ProductTemplateOptionVariant>;
    gameservers: Array<ProductGameserver>;
    vservers: Array<ProductVserver>;
    teamspeaks: Array<ProductTeamspeak>;
    domains: Array<ProductDomain>;
    simples: Array<ProductSimple>;
    user: User;
    transactions: Array<FinanceTransaction>;
    create: Scalars['DateTime'];
    locked: Scalars['Boolean'];
    getTemplate: ProductTemplateAbstract;
    totalValueLeft: Scalars['Float'];
    forceExtendPrice?: Maybe<Scalars['Float']>;
    forceExtendIntervalId?: Maybe<Scalars['ID']>;
};

export type ProductTemplateAbstract = {
    __typename?: 'ProductTemplateAbstract';
    id: Scalars['ID'];
    meta: Scalars['JSON'];
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    active: Scalars['Boolean'];
    update: Scalars['DateTime'];
    urlKey?: Maybe<Scalars['String']>;
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    create: Scalars['DateTime'];
};

export type ProductTeamspeak = {
    __typename?: 'ProductTeamspeak';
    name: Scalars['String'];
    ts3Link?: Maybe<Scalars['String']>;
    tasks: HostNodeTask;
    address?: Maybe<Scalars['String']>;
    hasRunningTask: Scalars['Boolean'];
    slot: Scalars['Int'];
    id: Scalars['ID'];
    label?: Maybe<Scalars['String']>;
    create: Scalars['DateTime'];
    hostNode: HostNode;
    ports: Array<HostNodePort>;
    attributes: Scalars['JSON'];
    product: Product;
    productTemplate: ProductTemplateTeamspeak;
    locked: Scalars['Boolean'];
};

export type HostNode = {
    __typename?: 'HostNode';
    cpuInfo: Scalars['String'];
    cpuCores: Scalars['Float'];
    maxInstances: Scalars['Float'];
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    gameservers: Array<ProductGameserver>;
    deletable: Scalars['Boolean'];
    runningInstances: Scalars['Int'];
    id: Scalars['ID'];
    type: Scalars['String'];
    section: Scalars['Float'];
    create: Scalars['DateTime'];
    name: Scalars['String'];
    remoteAddress: Scalars['String'];
    freeInstances: Scalars['Int'];
    tasks: HostNodeTask;
    daemonVersion?: Maybe<Scalars['String']>;
    isAvailable: Scalars['Boolean'];
    meta: Scalars['JSON'];
    forcePublicBackupTranfer: Scalars['Boolean'];
    getDaemonVersionsBehind?: Maybe<Scalars['Float']>;
    latestInfoUpdate?: Maybe<Scalars['DateTime']>;
    isDaemonVersionBehind: Scalars['Boolean'];
};

export type ProductGameserverMysql = {
    __typename?: 'ProductGameserverMysql';
    id: Scalars['ID'];
    create: Scalars['DateTime'];
    label?: Maybe<Scalars['String']>;
    host: Scalars['String'];
    gameserver: ProductGameserver;
    hostNode: HostNode;
};

export type ProductGameserver = {
    __typename?: 'ProductGameserver';
    name: Scalars['String'];
    customParameter: Scalars['String'];
    customAutoUpdateOnStartFlag: Scalars['Boolean'];
    tasks: HostNodeTask;
    slot?: Maybe<Scalars['String']>;
    memory?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    platform: Scalars['String'];
    scripts: Array<ProductGameserverScript>;
    availableGameserverTemplates: Array<ProductGameserverTemplate>;
    hasRunningTask: Scalars['Boolean'];
    installed: Scalars['Boolean'];
    mysqls: Array<ProductGameserverMysql>;
    id: Scalars['ID'];
    label?: Maybe<Scalars['String']>;
    backups: Array<ProductGameserverBackup>;
    template?: Maybe<ProductGameserverTemplate>;
    hostNode: HostNode;
    attributes: Scalars['JSON'];
    product?: Maybe<Product>;
    productTemplate: ProductTemplateGameserver;
    ports: Array<HostNodePort>;
    locked: Scalars['Boolean'];
    failureAutorestart: Scalars['Boolean'];
    autorestarts: Array<Scalars['Float']>;
    canEditSlot: Scalars['Boolean'];
    canEditMemory: Scalars['Boolean'];
    amIOwner: Scalars['Boolean'];
};

export type ProductGameserverAccess = {
    __typename?: 'ProductGameserverAccess';
    id: Scalars['ID'];
    gameserver: ProductGameserver;
    user: User;
    accept: Scalars['Boolean'];
    userEmail: Scalars['String'];
};

export type FinanceEffort = {
    __typename?: 'FinanceEffort';
    id: Scalars['ID'];
    user: User;
    description?: Maybe<Scalars['String']>;
    create: Scalars['DateTime'];
    meta: Scalars['JSON'];
    total: Scalars['Float'];
};

export type UserOauthToken = {
    __typename?: 'UserOauthToken';
    id: Scalars['ID'];
    service: Scalars['String'];
    create: Scalars['DateTime'];
    confirmed: Scalars['Boolean'];
};

export type UserComment = {
    __typename?: 'UserComment';
    id: Scalars['String'];
    create: Scalars['DateTime'];
    message: Scalars['String'];
};

export type User = {
    __typename?: 'User';
    vat?: Maybe<Scalars['Int']>;
    avatar: Scalars['String'];
    credits: Scalars['Float'];
    address?: Maybe<UserAddress>;
    publicName: Scalars['String'];
    gameservers: Array<ProductGameserver>;
    vservers: Array<ProductVserver>;
    teamspeaks: Array<ProductTeamspeak>;
    domains: Array<ProductDomain>;
    forceEmailLogin: Scalars['Boolean'];
    simples: Array<ProductSimple>;
    id: Scalars['ID'];
    nickname?: Maybe<Scalars['String']>;
    verifyLevel: Scalars['Int'];
    localAvatar?: Maybe<File>;
    email: Scalars['String'];
    active: Scalars['Boolean'];
    lastLogin?: Maybe<Scalars['DateTime']>;
    verified: Scalars['Boolean'];
    gameserversAccess: Array<ProductGameserverAccess>;
    chargeTransactions: Array<FinanceCharge>;
    donationLinks: Array<FinanceDonationLink>;
    efforts: Array<FinanceEffort>;
    transactions: Array<FinanceTransaction>;
    tickets: Array<SupportTicket>;
    roles: Array<Role>;
    addresses: UserAddress;
    products: Array<Product>;
    oauthTokens: Array<UserOauthToken>;
    create: Scalars['DateTime'];
    customerId: Scalars['Int'];
    supportId: Scalars['String'];
    canOrderDomain: Scalars['Boolean'];
    bonusCredits: Scalars['Float'];
    importedCredits: Scalars['Float'];
    canHaveBonusCredits: Scalars['Boolean'];
    canMakeFeedback: Scalars['Boolean'];
};

export type CordPageInfo = {
    __typename?: 'CordPageInfo';
    totalCount: Scalars['Float'];
    hasNextPage: Scalars['Boolean'];
    hasPreviousPage: Scalars['Boolean'];
};

export type Blogfeed = {
    __typename?: 'Blogfeed';
    html: Scalars['String'];
    link: Scalars['String'];
    title: Scalars['String'];
    pubDate: Scalars['DateTime'];
};

export type Translation = {
    __typename?: 'Translation';
    id: Scalars['ID'];
    key: Scalars['String'];
    value: Scalars['String'];
    language: Scalars['String'];
    create: Scalars['DateTime'];
};

export type ProductGameserverUsageDto = {
    __typename?: 'ProductGameserverUsageDto';
    diskPoints: Array<ProductGameserverUsageDtoDiskEntry>;
    usagePoints: Array<ProductGameserverUsageDtoEntry>;
};

export type ProductGameserverUsageDtoEntry = {
    __typename?: 'ProductGameserverUsageDtoEntry';
    globalUsage: Scalars['Float'];
    perCore: Scalars['Float'];
    date: Scalars['DateTime'];
    memoryUsageInMb: Scalars['Float'];
};

export type ProductGameserverUsageDtoDiskEntry = {
    __typename?: 'ProductGameserverUsageDtoDiskEntry';
    usageInMb: Scalars['Float'];
    date: Scalars['DateTime'];
};

export type ProductTeamspeakOutputToken = {
    __typename?: 'ProductTeamspeakOutputToken';
    group: Scalars['String'];
    token: Scalars['String'];
};

export type ProductTemplateBundle = {
    __typename?: 'ProductTemplateBundle';
    id: Scalars['ID'];
};

export type VserverStatsEntry = {
    __typename?: 'VserverStatsEntry';
    cpu?: Maybe<Scalars['Float']>;
    cpus?: Maybe<Scalars['Float']>;
    disk?: Maybe<Scalars['String']>;
    diskread?: Maybe<Scalars['Float']>;
    diskwrite?: Maybe<Scalars['Float']>;
    lock?: Maybe<Scalars['String']>;
    maxdisk?: Maybe<Scalars['String']>;
    maxmem?: Maybe<Scalars['Float']>;
    maxswap?: Maybe<Scalars['Float']>;
    mem?: Maybe<Scalars['Float']>;
    name?: Maybe<Scalars['String']>;
    netin?: Maybe<Scalars['Float']>;
    netout?: Maybe<Scalars['Float']>;
    pid?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    swap?: Maybe<Scalars['Float']>;
    template?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    uptime?: Maybe<Scalars['Float']>;
    time: Scalars['Float'];
    vmid?: Maybe<Scalars['String']>;
};

export type ProductAdminInfoPointMapDto = {
    __typename?: 'ProductAdminInfoPointMapDto';
    label: Scalars['String'];
    value: Scalars['Float'];
};

export type HostNodeTypeInfoUsageDto = {
    __typename?: 'HostNodeTypeInfoUsageDto';
    filter?: Maybe<Scalars['String']>;
    type: Scalars['String'];
    free: Scalars['Float'];
};

export type ProductAdminInfoResultDto = {
    __typename?: 'ProductAdminInfoResultDto';
    gameservers: Scalars['Float'];
    teamspeaks: Scalars['Float'];
    vservers: Scalars['Float'];
    simples: Scalars['Float'];
    domains: Scalars['Float'];
    vserverFreeIps: Scalars['Float'];
    activeUsers: Scalars['Float'];
    userRegisterToDay: Array<ProductAdminInfoPointMapDto>;
    userRegisterYesterday: Array<ProductAdminInfoPointMapDto>;
    chargesToday: Array<ProductAdminInfoPointMapDto>;
    chargesYesterday: Array<ProductAdminInfoPointMapDto>;
    hostNodeFree: Array<HostNodeTypeInfoUsageDto>;
};

export type BonusCredits = {
    __typename?: 'BonusCredits';
    minCredits: Scalars['Float'];
    threshold: Scalars['Float'];
    bonus: Scalars['Float'];
};

export type PaymentMethod = {
    __typename?: 'PaymentMethod';
    method: Scalars['String'];
    logo: Scalars['String'];
    amounts?: Maybe<Array<Scalars['Float']>>;
    title: Scalars['String'];
    forceAllowedValues?: Maybe<Array<Scalars['Float']>>;
    minPayable?: Maybe<Scalars['Float']>;
    maxPayable?: Maybe<Scalars['Float']>;
    active?: Maybe<Scalars['Boolean']>;
    tooltip?: Maybe<Scalars['String']>;
    bonusCredits?: Maybe<Array<BonusCredits>>;
    transactionFee?: Maybe<Scalars['Float']>;
};

export type HostNodeInstancesOutput = {
    __typename?: 'HostNodeInstancesOutput';
    gamesevers: Array<ProductGameserver>;
};

export type SupportTicketPriorityEnum = {
    __typename?: 'SupportTicketPriorityEnum';
    id: Scalars['ID'];
    priority: Scalars['Int'];
    label: Scalars['String'];
};

export type SupportTicketReviserEnum = {
    __typename?: 'SupportTicketReviserEnum';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type SupportQuickResponse = {
    __typename?: 'SupportQuickResponse';
    id: Scalars['ID'];
    content: Scalars['String'];
    title: Scalars['String'];
    create: Scalars['DateTime'];
    update: Scalars['DateTime'];
};

export type Query = {
    __typename?: 'Query';
    aclById: Acl;
    acls: AclResultMany;
    acl_has_acl: Scalars['Boolean'];
    roleById: Role;
    roles: RoleResultMany;
    userById: User;
    users: UserResultMany;
    user: User;
    /** @deprecated renamed to user_me */
    user_self: User;
    user_me: User;
    ping: Scalars['DateTime'];
    userCountries: Array<Scalars['String']>;
    emailTemplateById: EmailTemplate;
    emailTemplates: EmailTemplateResultMany;
    email_template: EmailTemplate;
    userAddressById: UserAddress;
    userAddresss: UserAddressResultMany;
    userCommentById: UserComment;
    userComments: UserCommentResultMany;
    userCommentsByUser: Array<UserComment>;
    myUserOAuthTokens: Array<UserOauthToken>;
    user_is_login: Scalars['Boolean'];
    blogPostRead: Array<Blogfeed>;
    translationById: Translation;
    translations: TranslationResultMany;
    productDomainById: ProductDomain;
    productDomains: ProductDomainResultMany;
    productDomainCheck: Scalars['Boolean'];
    productDomainsMy: Array<ProductDomain>;
    productGameserverAccessesByGameserverId: Array<ProductGameserverAccess>;
    myProductGameserverAccesses: Array<ProductGameserverAccess>;
    productGameserverMysqlByGameserver: Array<ProductGameserverMysql>;
    productGameserverScriptById: ProductGameserverScript;
    productGameserverScripts: ProductGameserverScriptResultMany;
    product_gameserver_scripts: Array<ProductGameserverScript>;
    product_gameservers_scripts: Array<ProductGameserverScript>;
    productGameserverTemplateById: ProductGameserverTemplate;
    productGameserverTemplates: ProductGameserverTemplateResultMany;
    product_gameserver_templates: Array<ProductGameserverTemplate>;
    product_gameserver_templates_available: Array<ProductGameserverTemplate>;
    product_gameserver_template: ProductGameserverTemplate;
    productGameserverById: ProductGameserver;
    productGameservers: ProductGameserverResultMany;
    product_gameserver_log: Scalars['String'];
    product_gameserver_running: Scalars['Boolean'];
    productGameserverUsage: ProductGameserverUsageDto;
    product_gameserver_exist: Scalars['Boolean'];
    productGameserversMy: Array<ProductGameserver>;
    productSimpleById: ProductSimple;
    productSimples: ProductSimpleResultMany;
    productSimplesMy: Array<ProductSimple>;
    productTeamspeakById: ProductTeamspeak;
    productTeamspeaks: ProductTeamspeakResultMany;
    productTeamspeaksMy: Array<ProductTeamspeak>;
    productTeamspeakRunning: Scalars['Boolean'];
    productTeamspeakExist: Scalars['Boolean'];
    productTeamspeakTokens: Array<ProductTeamspeakOutputToken>;
    productTemplateBundleById: ProductTemplateBundle;
    productTemplateBundles: ProductTemplateBundleResultMany;
    productTemplateDomainById: ProductTemplateDomain;
    productTemplateDomains: ProductTemplateDomainResultMany;
    productTemplateDomainByUrlKey: ProductTemplateDomain;
    productTemplateExtendPeriodById: ProductTemplateExtendPeriod;
    productTemplateExtendPeriods: ProductTemplateExtendPeriodResultMany;
    productTemplateGameserverById: ProductTemplateGameserver;
    productTemplateGameservers: ProductTemplateGameserverResultMany;
    productTemplateGameserverByUrlKey: ProductTemplateGameserver;
    productTemplateOptionVariantById: ProductTemplateOptionVariant;
    productTemplateOptionVariants: ProductTemplateOptionVariantResultMany;
    productTemplateOptionVariantByIds: Array<ProductTemplateOptionVariant>;
    productTemplateOptionById: ProductTemplateOption;
    productTemplateOptions: ProductTemplateOptionResultMany;
    productTemplateSimpleById: ProductTemplateSimple;
    productTemplateSimples: ProductTemplateSimpleResultMany;
    productTemplateSimpleByUrlKey: ProductTemplateSimple;
    productTemplateTeamspeakById: ProductTemplateTeamspeak;
    productTemplateTeamspeaks: ProductTemplateTeamspeakResultMany;
    productTemplateTeamspeakByUrlKey: ProductTemplateTeamspeak;
    productVserverImageById: ProductVserverImage;
    productVserverImages: ProductVserverImageResultMany;
    productVserverImagePlatformImages: Array<ProductVserverImage>;
    productVserverIpById: ProductVserverIp;
    productVserverIps: ProductVserverIpResultMany;
    productVserverIpFree: Array<ProductVserverIp>;
    productVserverById: ProductVserver;
    productVservers: ProductVserverResultMany;
    productVserverExist: Scalars['Boolean'];
    productVserverRunning: Scalars['Boolean'];
    productVserverStats: Array<VserverStatsEntry>;
    productVserverMy: Array<ProductVserver>;
    productById: Product;
    products: ProductResultMany;
    productAdminInfo: ProductAdminInfoResultDto;
    financeChargeById: FinanceCharge;
    financeCharges: FinanceChargeResultMany;
    FinancePaymentMethods: Array<PaymentMethod>;
    financeTransactionById: FinanceTransaction;
    financeTransactions: FinanceTransactionResultMany;
    financeDonationLinksMy: Array<FinanceDonationLink>;
    financeDonationLinkById: FinanceDonationLink;
    productTemplateVserverById: ProductTemplateVserver;
    productTemplateVservers: ProductTemplateVserverResultMany;
    productTemplateVserversByPlatform: Array<ProductTemplateVserver>;
    productGameserverFsReadIndex: Array<Scalars['String']>;
    productGameserverFsRead: Scalars['String'];
    backupServerById: BackupServer;
    backupServers: BackupServerResultMany;
    backupServer: BackupServer;
    hostNodeTaskById: HostNodeTask;
    hostNodeTasks: HostNodeTaskResultMany;
    hostNodeTasksMy: Array<HostNodeTask>;
    host_node_task_running: Scalars['Boolean'];
    hostNodeById: HostNode;
    hostNodes: HostNodeResultMany;
    host_node: HostNode;
    hostNodeTestFindNode?: Maybe<HostNode>;
    fileById: File;
    files: FileResultMany;
    myFiles: Array<File>;
    pdfTemplateById: PdfTemplate;
    pdfTemplates: PdfTemplateResultMany;
    pdf_template: PdfTemplate;
    supportTicketById: SupportTicket;
    supportTickets: SupportTicketResultMany;
    supportTicketPriorities: Array<SupportTicketPriorityEnum>;
    supportTicketRevisers: Array<SupportTicketReviserEnum>;
    support_ticket: SupportTicket;
    supportQuickResponseById: SupportQuickResponse;
    supportQuickResponses: SupportQuickResponseResultMany;
};

export type QueryAclByIdArgs = {
    id: Scalars['ID'];
};

export type QueryAclsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryAcl_Has_AclArgs = {
    acl: Scalars['String'];
};

export type QueryRoleByIdArgs = {
    id: Scalars['ID'];
};

export type QueryRolesArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryUserByIdArgs = {
    id: Scalars['ID'];
};

export type QueryUsersArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryUserArgs = {
    id: Scalars['String'];
};

export type QueryEmailTemplateByIdArgs = {
    id: Scalars['ID'];
};

export type QueryEmailTemplatesArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryEmail_TemplateArgs = {
    id: Scalars['String'];
};

export type QueryUserAddressByIdArgs = {
    id: Scalars['ID'];
};

export type QueryUserAddresssArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryUserCommentByIdArgs = {
    id: Scalars['ID'];
};

export type QueryUserCommentsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryUserCommentsByUserArgs = {
    userId: Scalars['ID'];
};

export type QueryTranslationByIdArgs = {
    id: Scalars['ID'];
};

export type QueryTranslationsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductDomainByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductDomainsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductDomainCheckArgs = {
    tld: Scalars['String'];
};

export type QueryProductGameserverAccessesByGameserverIdArgs = {
    gameserverId: Scalars['ID'];
};

export type QueryProductGameserverMysqlByGameserverArgs = {
    gameserverId: Scalars['ID'];
};

export type QueryProductGameserverScriptByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductGameserverScriptsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProduct_Gameserver_ScriptsArgs = {
    templateId?: Maybe<Scalars['ID']>;
    search?: Maybe<Scalars['String']>;
    take?: Maybe<Scalars['Float']>;
    skip?: Maybe<Scalars['Float']>;
    orderBy?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['String']>;
};

export type QueryProduct_Gameservers_ScriptsArgs = {
    gameserverId: Scalars['ID'];
};

export type QueryProductGameserverTemplateByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductGameserverTemplatesArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProduct_Gameserver_TemplatesArgs = {
    search?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    offset?: Maybe<Scalars['Float']>;
    orderField?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['String']>;
};

export type QueryProduct_Gameserver_Templates_AvailableArgs = {
    search?: Maybe<Scalars['String']>;
    claimId: Scalars['ID'];
};

export type QueryProduct_Gameserver_TemplateArgs = {
    id: Scalars['ID'];
};

export type QueryProductGameserverByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductGameserversArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProduct_Gameserver_LogArgs = {
    gameserverId: Scalars['ID'];
};

export type QueryProduct_Gameserver_RunningArgs = {
    gameserverId: Scalars['ID'];
};

export type QueryProductGameserverUsageArgs = {
    gameserverId: Scalars['ID'];
};

export type QueryProduct_Gameserver_ExistArgs = {
    gameserverId: Scalars['ID'];
};

export type QueryProductSimpleByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductSimplesArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductTeamspeakByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductTeamspeaksArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductTeamspeakRunningArgs = {
    teamspeakId: Scalars['ID'];
};

export type QueryProductTeamspeakExistArgs = {
    teamspeakId: Scalars['ID'];
};

export type QueryProductTeamspeakTokensArgs = {
    teamspeakId: Scalars['ID'];
};

export type QueryProductTemplateBundleByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductTemplateBundlesArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductTemplateDomainByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductTemplateDomainsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductTemplateDomainByUrlKeyArgs = {
    urlKey: Scalars['String'];
};

export type QueryProductTemplateExtendPeriodByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductTemplateExtendPeriodsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductTemplateGameserverByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductTemplateGameserversArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductTemplateGameserverByUrlKeyArgs = {
    urlKey: Scalars['String'];
};

export type QueryProductTemplateOptionVariantByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductTemplateOptionVariantsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductTemplateOptionVariantByIdsArgs = {
    ids: Array<Scalars['ID']>;
};

export type QueryProductTemplateOptionByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductTemplateOptionsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductTemplateSimpleByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductTemplateSimplesArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductTemplateSimpleByUrlKeyArgs = {
    urlKey: Scalars['String'];
};

export type QueryProductTemplateTeamspeakByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductTemplateTeamspeaksArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductTemplateTeamspeakByUrlKeyArgs = {
    urlKey: Scalars['String'];
};

export type QueryProductVserverImageByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductVserverImagesArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductVserverImagePlatformImagesArgs = {
    search?: Maybe<Scalars['String']>;
    platform: Scalars['String'];
};

export type QueryProductVserverIpByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductVserverIpsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductVserverByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductVserversArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductVserverExistArgs = {
    vserverId: Scalars['ID'];
};

export type QueryProductVserverRunningArgs = {
    vserverId: Scalars['ID'];
};

export type QueryProductVserverStatsArgs = {
    vserverId: Scalars['ID'];
};

export type QueryProductByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryFinanceChargeByIdArgs = {
    id: Scalars['ID'];
};

export type QueryFinanceChargesArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryFinanceTransactionByIdArgs = {
    id: Scalars['ID'];
};

export type QueryFinanceTransactionsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryFinanceDonationLinkByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductTemplateVserverByIdArgs = {
    id: Scalars['ID'];
};

export type QueryProductTemplateVserversArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryProductTemplateVserversByPlatformArgs = {
    platform: Scalars['String'];
};

export type QueryProductGameserverFsReadIndexArgs = {
    reloadIndex?: Maybe<Scalars['Boolean']>;
    gameserverId: Scalars['ID'];
};

export type QueryProductGameserverFsReadArgs = {
    file: Scalars['String'];
    gameserverId: Scalars['ID'];
};

export type QueryBackupServerByIdArgs = {
    id: Scalars['ID'];
};

export type QueryBackupServersArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryBackupServerArgs = {
    id: Scalars['ID'];
};

export type QueryHostNodeTaskByIdArgs = {
    id: Scalars['ID'];
};

export type QueryHostNodeTasksArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryHostNodeTasksMyArgs = {
    take?: Maybe<Scalars['Int']>;
};

export type QueryHost_Node_Task_RunningArgs = {
    identifier: Scalars['ID'];
};

export type QueryHostNodeByIdArgs = {
    id: Scalars['ID'];
};

export type QueryHostNodesArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryHost_NodeArgs = {
    id: Scalars['ID'];
};

export type QueryHostNodeTestFindNodeArgs = {
    filterKey?: Maybe<Scalars['String']>;
    type: Scalars['String'];
};

export type QueryFileByIdArgs = {
    id: Scalars['ID'];
};

export type QueryFilesArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryPdfTemplateByIdArgs = {
    id: Scalars['ID'];
};

export type QueryPdfTemplatesArgs = {
    filter?: Maybe<CordFilter>;
};

export type QueryPdf_TemplateArgs = {
    id: Scalars['ID'];
};

export type QuerySupportTicketByIdArgs = {
    id: Scalars['ID'];
};

export type QuerySupportTicketsArgs = {
    filter?: Maybe<CordFilter>;
};

export type QuerySupport_TicketArgs = {
    id: Scalars['ID'];
};

export type QuerySupportQuickResponseByIdArgs = {
    id: Scalars['ID'];
};

export type QuerySupportQuickResponsesArgs = {
    filter?: Maybe<CordFilter>;
};

export type AclResultMany = {
    __typename?: 'AclResultMany';
    edges: Array<Acl>;
    pageInfo: CordPageInfo;
};

export type CordFilter = {
    order?: Maybe<Scalars['String']>;
    orderBy?: Maybe<Scalars['String']>;
    take?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    fieldValueFilters?: Maybe<Array<CordFilterValue>>;
    searchInRelations?: Maybe<Scalars['Boolean']>;
};

export type CordFilterValue = {
    key: Scalars['String'];
    value?: Maybe<Scalars['String']>;
};

export type RoleResultMany = {
    __typename?: 'RoleResultMany';
    edges: Array<Role>;
    pageInfo: CordPageInfo;
};

export type UserResultMany = {
    __typename?: 'UserResultMany';
    edges: Array<User>;
    pageInfo: CordPageInfo;
};

export type EmailTemplateResultMany = {
    __typename?: 'EmailTemplateResultMany';
    edges: Array<EmailTemplate>;
    pageInfo: CordPageInfo;
};

export type UserAddressResultMany = {
    __typename?: 'UserAddressResultMany';
    edges: Array<UserAddress>;
    pageInfo: CordPageInfo;
};

export type UserCommentResultMany = {
    __typename?: 'UserCommentResultMany';
    edges: Array<UserComment>;
    pageInfo: CordPageInfo;
};

export type TranslationResultMany = {
    __typename?: 'TranslationResultMany';
    edges: Array<Translation>;
    pageInfo: CordPageInfo;
};

export type ProductDomainResultMany = {
    __typename?: 'ProductDomainResultMany';
    edges: Array<ProductDomain>;
    pageInfo: CordPageInfo;
};

export type ProductGameserverScriptResultMany = {
    __typename?: 'ProductGameserverScriptResultMany';
    edges: Array<ProductGameserverScript>;
    pageInfo: CordPageInfo;
};

export type ProductGameserverTemplateResultMany = {
    __typename?: 'ProductGameserverTemplateResultMany';
    edges: Array<ProductGameserverTemplate>;
    pageInfo: CordPageInfo;
};

export type ProductGameserverResultMany = {
    __typename?: 'ProductGameserverResultMany';
    edges: Array<ProductGameserver>;
    pageInfo: CordPageInfo;
};

export type ProductSimpleResultMany = {
    __typename?: 'ProductSimpleResultMany';
    edges: Array<ProductSimple>;
    pageInfo: CordPageInfo;
};

export type ProductTeamspeakResultMany = {
    __typename?: 'ProductTeamspeakResultMany';
    edges: Array<ProductTeamspeak>;
    pageInfo: CordPageInfo;
};

export type ProductTemplateBundleResultMany = {
    __typename?: 'ProductTemplateBundleResultMany';
    edges: Array<ProductTemplateBundle>;
    pageInfo: CordPageInfo;
};

export type ProductTemplateDomainResultMany = {
    __typename?: 'ProductTemplateDomainResultMany';
    edges: Array<ProductTemplateDomain>;
    pageInfo: CordPageInfo;
};

export type ProductTemplateExtendPeriodResultMany = {
    __typename?: 'ProductTemplateExtendPeriodResultMany';
    edges: Array<ProductTemplateExtendPeriod>;
    pageInfo: CordPageInfo;
};

export type ProductTemplateGameserverResultMany = {
    __typename?: 'ProductTemplateGameserverResultMany';
    edges: Array<ProductTemplateGameserver>;
    pageInfo: CordPageInfo;
};

export type ProductTemplateOptionVariantResultMany = {
    __typename?: 'ProductTemplateOptionVariantResultMany';
    edges: Array<ProductTemplateOptionVariant>;
    pageInfo: CordPageInfo;
};

export type ProductTemplateOptionResultMany = {
    __typename?: 'ProductTemplateOptionResultMany';
    edges: Array<ProductTemplateOption>;
    pageInfo: CordPageInfo;
};

export type ProductTemplateSimpleResultMany = {
    __typename?: 'ProductTemplateSimpleResultMany';
    edges: Array<ProductTemplateSimple>;
    pageInfo: CordPageInfo;
};

export type ProductTemplateTeamspeakResultMany = {
    __typename?: 'ProductTemplateTeamspeakResultMany';
    edges: Array<ProductTemplateTeamspeak>;
    pageInfo: CordPageInfo;
};

export type ProductVserverImageResultMany = {
    __typename?: 'ProductVserverImageResultMany';
    edges: Array<ProductVserverImage>;
    pageInfo: CordPageInfo;
};

export type ProductVserverIpResultMany = {
    __typename?: 'ProductVserverIpResultMany';
    edges: Array<ProductVserverIp>;
    pageInfo: CordPageInfo;
};

export type ProductVserverResultMany = {
    __typename?: 'ProductVserverResultMany';
    edges: Array<ProductVserver>;
    pageInfo: CordPageInfo;
};

export type ProductResultMany = {
    __typename?: 'ProductResultMany';
    edges: Array<Product>;
    pageInfo: CordPageInfo;
};

export type FinanceChargeResultMany = {
    __typename?: 'FinanceChargeResultMany';
    edges: Array<FinanceCharge>;
    pageInfo: CordPageInfo;
};

export type FinanceTransactionResultMany = {
    __typename?: 'FinanceTransactionResultMany';
    edges: Array<FinanceTransaction>;
    pageInfo: CordPageInfo;
};

export type ProductTemplateVserverResultMany = {
    __typename?: 'ProductTemplateVserverResultMany';
    edges: Array<ProductTemplateVserver>;
    pageInfo: CordPageInfo;
};

export type BackupServerResultMany = {
    __typename?: 'BackupServerResultMany';
    edges: Array<BackupServer>;
    pageInfo: CordPageInfo;
};

export type HostNodeTaskResultMany = {
    __typename?: 'HostNodeTaskResultMany';
    edges: Array<HostNodeTask>;
    pageInfo: CordPageInfo;
};

export type HostNodeResultMany = {
    __typename?: 'HostNodeResultMany';
    edges: Array<HostNode>;
    pageInfo: CordPageInfo;
};

export type FileResultMany = {
    __typename?: 'FileResultMany';
    edges: Array<File>;
    pageInfo: CordPageInfo;
};

export type PdfTemplateResultMany = {
    __typename?: 'PdfTemplateResultMany';
    edges: Array<PdfTemplate>;
    pageInfo: CordPageInfo;
};

export type SupportTicketResultMany = {
    __typename?: 'SupportTicketResultMany';
    edges: Array<SupportTicket>;
    pageInfo: CordPageInfo;
};

export type SupportQuickResponseResultMany = {
    __typename?: 'SupportQuickResponseResultMany';
    edges: Array<SupportQuickResponse>;
    pageInfo: CordPageInfo;
};

export type Mutation = {
    __typename?: 'Mutation';
    aclRefillAclCache: Scalars['Boolean'];
    role_role_edit: Role;
    role_role_delete: Scalars['Boolean'];
    roleAssignAcl: Role;
    roleUnAssignAcl: Role;
    roleAddUser: Role;
    roleRemoveUser: Role;
    userSetActive: User;
    userTestMyPassword: Scalars['Boolean'];
    userEditSelfGeneral: User;
    userEditSelfAddress: User;
    userEditSelfEmail: User;
    user_register: Scalars['Boolean'];
    user_verify: Scalars['Boolean'];
    user_reset_password: Scalars['Boolean'];
    user_reset_password_token: Scalars['Boolean'];
    userAddressAddVerifyDocument: User;
    userAddressDelVerifyDocument: User;
    userMakeFeedback: User;
    email_template_new: EmailTemplate;
    email_template_edit: EmailTemplate;
    email_template_delete: Scalars['Boolean'];
    userAddressConfirmVerify: UserAddress;
    userAddressRejectVerify: UserAddress;
    userCommentCreate: UserComment;
    userOauthTokenConfirm: UserOauthToken;
    userOAuthDeleteToken: Scalars['Boolean'];
    userLoginWithEmailToken: Scalars['Boolean'];
    user_admin_login: Scalars['Boolean'];
    userAdminLogout: Scalars['Boolean'];
    translationEdit: Translation;
    translationCreate: Translation;
    translationDelete: Scalars['Boolean'];
    productDomainSetAuthcode: ProductDomain;
    productDomainRequestNewAuthcode: ProductDomain;
    productDomainDelete: Scalars['Boolean'];
    productGameserverAccessInvite: ProductGameserverAccess;
    productGameserverAccessRevoke: Scalars['Boolean'];
    productGameserverMysqlCreate: ProductGameserverMysql;
    productGameserverMysqlDelete: Scalars['Boolean'];
    productGameserverMysqlChangeLabel: ProductGameserverMysql;
    product_gameserver_script_delete: Scalars['Boolean'];
    product_gameserver_script_edit: ProductGameserverScript;
    product_gameserver_script_new: ProductGameserverScript;
    product_gameserver_template_edit: ProductGameserverTemplate;
    product_gameserver_template_delete: Scalars['Boolean'];
    product_gameserver_template_set_default_script: ProductGameserverTemplate;
    product_gameserver_change_label: ProductGameserver;
    productGameserverBackupDownload: Scalars['String'];
    productGameserverSetAutorestarts: ProductGameserver;
    productGameserverFailureAutorestart: ProductGameserver;
    product_gameserver_start: ProductGameserver;
    product_gameserver_stop: ProductGameserver;
    product_gameserver_change_password: ProductGameserver;
    product_gameserver_console: Scalars['Boolean'];
    productGameserverBackupCreate: ProductGameserverBackup;
    productGameserverBackupDelete: Scalars['Boolean'];
    productGameserverBackupRestore: Scalars['Boolean'];
    productGameserverInstall: ProductGameserver;
    productGameserverDelete: Scalars['Boolean'];
    productGameserverSetCustomAttribute: ProductGameserver;
    productSimpleDelete: Scalars['Boolean'];
    productSimpleEditLabel: ProductSimple;
    productSimpleSetState: ProductSimple;
    productTeamspeakChangeLabel: ProductTeamspeak;
    productTeamspeakStart: ProductTeamspeak;
    productTeamspeakStop: ProductTeamspeak;
    productTeamspeakInstall: ProductTeamspeak;
    productTeamspeakTokenDelete: Scalars['Boolean'];
    productTeamspeakTokenCreate: Scalars['Boolean'];
    productTeamspeakRemove: Scalars['Boolean'];
    productTemplateDomainCreate: ProductTemplateDomain;
    productTemplateDomainEdit: ProductTemplateDomain;
    productTemplateDomainDelete: Scalars['Boolean'];
    productTemplateExtendPeriodCreate: ProductTemplateExtendPeriod;
    productTemplateExtendPeriodEdit: ProductTemplateExtendPeriod;
    productTemplateExtendPeriodDelete: Scalars['Boolean'];
    productTemplateGameserverCreate: ProductTemplateGameserver;
    productTemplateGameserverEdit: ProductTemplateGameserver;
    productTemplateGameserverDelete: Scalars['Boolean'];
    productTemplateOptionVariantCreate: ProductTemplateOptionVariant;
    productTemplateOptionVariantEdit: ProductTemplateOptionVariant;
    productTemplateOptionVariantDelete: Scalars['Boolean'];
    productTemplateOptionCreate: ProductTemplateOption;
    productTemplateOptionEdit: ProductTemplateOption;
    productTemplateSimpleDelete: Scalars['Boolean'];
    productTemplateSimpleCreate: ProductTemplateSimple;
    productTemplateSimpleEdit: ProductTemplateSimple;
    productTemplateTeamspeakCreate: ProductTemplateTeamspeak;
    productTemplateTeamspeakEdit: ProductTemplateTeamspeak;
    productTemplateTeamspeakDelete: Scalars['Boolean'];
    productVserverImageCreate: ProductVserverImage;
    productVserverImageEdit: ProductVserverImage;
    productVserverImageDelete: Scalars['Boolean'];
    productVserverIpReassignIp: Scalars['Boolean'];
    productVserverIpCreate: Array<ProductVserverIp>;
    productVserverIpEdit: ProductVserverIp;
    productVserverIpDelete: Scalars['Boolean'];
    productVserverDelete: Scalars['Boolean'];
    productVserverMakeVncPort: Scalars['String'];
    productVserverBackupDownload: Scalars['String'];
    productVserverUnlockNetworkSpeed: ProductVserver;
    productVserverChangeLabel: ProductVserver;
    productVserverSetSshPassword: ProductVserver;
    productVserverStart: HostNodeTask;
    productVserverStop: HostNodeTask;
    productVserverInstall: HostNodeTask;
    productVserverAddImage: ProductVserver;
    productVserverRemoveImage: ProductVserver;
    productVserverBackupCreate: ProductVserverBackup;
    productVserverBackupRestore: ProductVserverBackup;
    productVserverBackupDelete: Scalars['Boolean'];
    productUpgradeGameserver: Product;
    productUpgradeTeamspeak: Product;
    productBuyGameserver: Product;
    productBuyTeamspeak: Product;
    productBuySimple: Product;
    productBuyVserver: Product;
    productBuyDomain: Product;
    productEdit: Product;
    productSetAutorenewInterval: Product;
    productExtendBuy: Product;
    financeChargeVerify: FinanceCharge;
    financeChargeDelete: Scalars['Boolean'];
    financeTransactionCreate: FinanceTransaction;
    financeDonationLinkCreate: FinanceDonationLink;
    financeDonationLinkDelete: Scalars['Boolean'];
    productTemplateVserverCreate: ProductTemplateVserver;
    productTemplateVserverEdit: ProductTemplateVserver;
    productTemplateVserverDelete: Scalars['Boolean'];
    productGameserverFsWrite: Scalars['Boolean'];
    backupServerCreate: BackupServer;
    backupServerEdit: BackupServer;
    backupServerDelete: Scalars['Boolean'];
    hostNodeUpdateDaemon: Scalars['String'];
    host_node_edit: HostNode;
    host_node_instances: HostNodeInstancesOutput;
    host_node_delete: Scalars['Boolean'];
    FileDeleteFile: Scalars['Boolean'];
    dsgvoAnonymizeAccount: Scalars['Boolean'];
    pdf_template_edit: PdfTemplate;
    pdf_template_delete: Scalars['Boolean'];
    supportTicketResetUnreadCounter: SupportTicket;
    support_ticket_new: SupportTicket;
    supportTicketAddFile: SupportTicket;
    supportTicketDelete: Scalars['Boolean'];
    supportTicketDeleteMessage: SupportTicket;
    support_ticket_add_message: SupportTicket;
    support_ticket_edit: SupportTicket;
    supportTicketAssignTo: SupportTicket;
    supportTicketSetStatus: SupportTicket;
    supportTicketClose: SupportTicket;
    supportTicketReopen: SupportTicket;
    supportQuickResponseCreate: SupportQuickResponse;
    supportQuickResponseEdit: SupportQuickResponse;
    supportQuickResponseDelete: Scalars['Boolean'];
};

export type MutationRole_Role_EditArgs = {
    data: RoleNewInput;
};

export type MutationRole_Role_DeleteArgs = {
    id: Scalars['ID'];
};

export type MutationRoleAssignAclArgs = {
    aclsId: Array<Scalars['ID']>;
    id: Scalars['ID'];
};

export type MutationRoleUnAssignAclArgs = {
    aclsId: Array<Scalars['ID']>;
    id: Scalars['ID'];
};

export type MutationRoleAddUserArgs = {
    userId: Scalars['ID'];
    id: Scalars['ID'];
};

export type MutationRoleRemoveUserArgs = {
    userId: Scalars['ID'];
    id: Scalars['ID'];
};

export type MutationUserSetActiveArgs = {
    active: Scalars['Boolean'];
    id: Scalars['ID'];
};

export type MutationUserTestMyPasswordArgs = {
    password: Scalars['String'];
};

export type MutationUserEditSelfGeneralArgs = {
    localAvatarId?: Maybe<Scalars['ID']>;
    forceEmailLogin?: Maybe<Scalars['Boolean']>;
    nickname: Scalars['String'];
    new_password?: Maybe<Scalars['String']>;
};

export type MutationUserEditSelfAddressArgs = {
    data: UserInputUserEditAddress;
};

export type MutationUserEditSelfEmailArgs = {
    password: Scalars['String'];
    email: Scalars['String'];
};

export type MutationUser_RegisterArgs = {
    googleCaptcha: Scalars['String'];
    data: UserInputRegister;
};

export type MutationUser_VerifyArgs = {
    token: Scalars['String'];
};

export type MutationUser_Reset_PasswordArgs = {
    captcha: Scalars['String'];
    email: Scalars['String'];
};

export type MutationUser_Reset_Password_TokenArgs = {
    password: Scalars['String'];
    token: Scalars['String'];
};

export type MutationUserAddressAddVerifyDocumentArgs = {
    fileId: Scalars['ID'];
};

export type MutationUserMakeFeedbackArgs = {
    feedbackMessage?: Maybe<Scalars['String']>;
    feedbackSatisfied?: Maybe<Scalars['Boolean']>;
    availableForMoreFeedback?: Maybe<Scalars['Boolean']>;
};

export type MutationEmail_Template_NewArgs = {
    data: EmailTemplateInputNew;
};

export type MutationEmail_Template_EditArgs = {
    data: EmailTemplateInputEdit;
};

export type MutationEmail_Template_DeleteArgs = {
    id: Scalars['ID'];
};

export type MutationUserAddressConfirmVerifyArgs = {
    id: Scalars['ID'];
};

export type MutationUserAddressRejectVerifyArgs = {
    id: Scalars['ID'];
};

export type MutationUserCommentCreateArgs = {
    message: Scalars['String'];
    userId: Scalars['ID'];
};

export type MutationUserOauthTokenConfirmArgs = {
    id: Scalars['ID'];
    password: Scalars['String'];
};

export type MutationUserOAuthDeleteTokenArgs = {
    id: Scalars['ID'];
};

export type MutationUserLoginWithEmailTokenArgs = {
    password: Scalars['String'];
    username: Scalars['String'];
};

export type MutationUser_Admin_LoginArgs = {
    id: Scalars['ID'];
};

export type MutationTranslationEditArgs = {
    language: Scalars['String'];
    value: Scalars['String'];
    key: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationTranslationDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductDomainSetAuthcodeArgs = {
    authcode: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductDomainRequestNewAuthcodeArgs = {
    id: Scalars['ID'];
};

export type MutationProductDomainDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductGameserverAccessInviteArgs = {
    captcha: Scalars['String'];
    emailOfInvitedUser: Scalars['String'];
    gameserverId: Scalars['ID'];
};

export type MutationProductGameserverAccessRevokeArgs = {
    id: Scalars['ID'];
};

export type MutationProductGameserverMysqlCreateArgs = {
    password: Scalars['String'];
    gameserverId: Scalars['ID'];
};

export type MutationProductGameserverMysqlDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductGameserverMysqlChangeLabelArgs = {
    label: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProduct_Gameserver_Script_DeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProduct_Gameserver_Script_EditArgs = {
    data: ProductGameserverScriptEditInput;
};

export type MutationProduct_Gameserver_Script_NewArgs = {
    data: ProductGameserverScriptNewInput;
};

export type MutationProduct_Gameserver_Template_EditArgs = {
    data: ProductGameserverTemplateEditInput;
};

export type MutationProduct_Gameserver_Template_DeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProduct_Gameserver_Template_Set_Default_ScriptArgs = {
    scriptId: Scalars['ID'];
    id: Scalars['ID'];
};

export type MutationProduct_Gameserver_Change_LabelArgs = {
    label: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductGameserverBackupDownloadArgs = {
    id: Scalars['ID'];
};

export type MutationProductGameserverSetAutorestartsArgs = {
    restarts: Array<Scalars['Int']>;
    id: Scalars['ID'];
};

export type MutationProductGameserverFailureAutorestartArgs = {
    restart: Scalars['Boolean'];
    id: Scalars['ID'];
};

export type MutationProduct_Gameserver_StartArgs = {
    scriptId?: Maybe<Scalars['ID']>;
    gameserverId: Scalars['ID'];
};

export type MutationProduct_Gameserver_StopArgs = {
    gameserverId: Scalars['ID'];
};

export type MutationProduct_Gameserver_Change_PasswordArgs = {
    password: Scalars['String'];
    gameserverId: Scalars['ID'];
};

export type MutationProduct_Gameserver_ConsoleArgs = {
    command: Scalars['String'];
    gameserverId: Scalars['ID'];
};

export type MutationProductGameserverBackupCreateArgs = {
    gameserverId: Scalars['ID'];
};

export type MutationProductGameserverBackupDeleteArgs = {
    backupId: Scalars['ID'];
};

export type MutationProductGameserverBackupRestoreArgs = {
    backupId: Scalars['ID'];
};

export type MutationProductGameserverInstallArgs = {
    gameserverTemplateId: Scalars['ID'];
    gameserverId: Scalars['ID'];
};

export type MutationProductGameserverDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductGameserverSetCustomAttributeArgs = {
    value: Scalars['String'];
    key: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductSimpleDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductSimpleEditLabelArgs = {
    label: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductSimpleSetStateArgs = {
    state: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductTeamspeakChangeLabelArgs = {
    label: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductTeamspeakStartArgs = {
    teamspeakId: Scalars['ID'];
};

export type MutationProductTeamspeakStopArgs = {
    teamspeakId: Scalars['ID'];
};

export type MutationProductTeamspeakInstallArgs = {
    teamspeakId: Scalars['ID'];
};

export type MutationProductTeamspeakTokenDeleteArgs = {
    token: Scalars['String'];
    teamspeakId: Scalars['ID'];
};

export type MutationProductTeamspeakTokenCreateArgs = {
    group: Scalars['String'];
    teamspeakId: Scalars['ID'];
};

export type MutationProductTeamspeakRemoveArgs = {
    id: Scalars['ID'];
};

export type MutationProductTemplateDomainCreateArgs = {
    active: Scalars['Boolean'];
    gTld: Scalars['String'];
    urlKey: Scalars['String'];
    basePrice: Scalars['Float'];
    setup: Scalars['Float'];
    title: Scalars['String'];
};

export type MutationProductTemplateDomainEditArgs = {
    active: Scalars['Boolean'];
    basePrice: Scalars['Float'];
    gTld: Scalars['String'];
    urlKey: Scalars['String'];
    setup: Scalars['Float'];
    title: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductTemplateDomainDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductTemplateExtendPeriodCreateArgs = {
    discount: Scalars['Float'];
    discountFactor: Scalars['Float'];
    globalGroup: Scalars['String'];
    expression: Scalars['String'];
};

export type MutationProductTemplateExtendPeriodEditArgs = {
    discount: Scalars['Float'];
    discountFactor: Scalars['Float'];
    globalGroup?: Maybe<Scalars['String']>;
    expression: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductTemplateExtendPeriodDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductTemplateGameserverCreateArgs = {
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    memoryOptionId?: Maybe<Scalars['ID']>;
    slotOptionId?: Maybe<Scalars['ID']>;
    active: Scalars['Boolean'];
    urlKey: Scalars['String'];
    basePrice: Scalars['Float'];
    setup: Scalars['Float'];
    title: Scalars['String'];
};

export type MutationProductTemplateGameserverEditArgs = {
    optionIds?: Maybe<Array<Scalars['ID']>>;
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    assignedGameserverTemplates?: Maybe<Array<Scalars['ID']>>;
    memoryOptionId?: Maybe<Scalars['ID']>;
    slotOptionId?: Maybe<Scalars['ID']>;
    active: Scalars['Boolean'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    setup: Scalars['Float'];
    title: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductTemplateGameserverDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductTemplateOptionVariantCreateArgs = {
    priceSetup: Scalars['Float'];
    priceMultiplier: Scalars['Float'];
    price: Scalars['Float'];
    label: Scalars['String'];
    sort: Scalars['Int'];
    key: Scalars['String'];
    optionId: Scalars['ID'];
};

export type MutationProductTemplateOptionVariantEditArgs = {
    hidden?: Maybe<Scalars['Boolean']>;
    priceSetup: Scalars['Float'];
    priceMultiplier: Scalars['Float'];
    price: Scalars['Float'];
    label: Scalars['String'];
    value?: Maybe<Scalars['String']>;
    sort: Scalars['Int'];
    key: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductTemplateOptionVariantDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductTemplateOptionCreateArgs = {
    display: Scalars['String'];
    title: Scalars['String'];
};

export type MutationProductTemplateOptionEditArgs = {
    upgradeable: Scalars['Boolean'];
    display: Scalars['String'];
    title: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductTemplateSimpleDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductTemplateSimpleCreateArgs = {
    active: Scalars['Boolean'];
    urlKey: Scalars['String'];
    basePrice: Scalars['Float'];
    setup: Scalars['Float'];
    title: Scalars['String'];
};

export type MutationProductTemplateSimpleEditArgs = {
    extendIntervalIds?: Maybe<Array<Scalars['ID']>>;
    includedGTld?: Maybe<Scalars['String']>;
    optionIds?: Maybe<Array<Scalars['ID']>>;
    active: Scalars['Boolean'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    setup: Scalars['Float'];
    title: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductTemplateTeamspeakCreateArgs = {
    slotOptionId: Scalars['ID'];
    active: Scalars['Boolean'];
    urlKey: Scalars['String'];
    basePrice: Scalars['Float'];
    setup: Scalars['Float'];
    title: Scalars['String'];
};

export type MutationProductTemplateTeamspeakEditArgs = {
    slotOptionId: Scalars['ID'];
    active: Scalars['Boolean'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    setup: Scalars['Float'];
    title: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductTemplateTeamspeakDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductVserverImageCreateArgs = {
    data: ProductVserverImageCreateInput;
};

export type MutationProductVserverImageEditArgs = {
    data: ProductVserverImageEditInput;
};

export type MutationProductVserverImageDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductVserverIpReassignIpArgs = {
    newId: Scalars['ID'];
    id: Scalars['ID'];
};

export type MutationProductVserverIpCreateArgs = {
    gateway: Scalars['String'];
    netmask: Scalars['String'];
    active: Scalars['Boolean'];
    hostNodeId?: Maybe<Scalars['ID']>;
    cidr?: Maybe<Scalars['Int']>;
    ip: Scalars['String'];
};

export type MutationProductVserverIpEditArgs = {
    vserverId?: Maybe<Scalars['ID']>;
    gateway: Scalars['String'];
    netmask: Scalars['String'];
    active: Scalars['Boolean'];
    hostNodeId?: Maybe<Scalars['ID']>;
    ip: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductVserverIpDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductVserverDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductVserverMakeVncPortArgs = {
    vserverId: Scalars['ID'];
};

export type MutationProductVserverBackupDownloadArgs = {
    id: Scalars['ID'];
};

export type MutationProductVserverUnlockNetworkSpeedArgs = {
    id: Scalars['ID'];
};

export type MutationProductVserverChangeLabelArgs = {
    label: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationProductVserverSetSshPasswordArgs = {
    password: Scalars['String'];
    vserverId: Scalars['ID'];
};

export type MutationProductVserverStartArgs = {
    withImages?: Maybe<Scalars['Boolean']>;
    vserverId: Scalars['ID'];
};

export type MutationProductVserverStopArgs = {
    vserverId: Scalars['ID'];
};

export type MutationProductVserverInstallArgs = {
    recreate?: Maybe<Scalars['Boolean']>;
    vserverId: Scalars['ID'];
};

export type MutationProductVserverAddImageArgs = {
    imageId: Scalars['ID'];
    id: Scalars['ID'];
};

export type MutationProductVserverRemoveImageArgs = {
    imageId: Scalars['ID'];
    id: Scalars['ID'];
};

export type MutationProductVserverBackupCreateArgs = {
    id: Scalars['ID'];
};

export type MutationProductVserverBackupRestoreArgs = {
    backupId: Scalars['ID'];
    id: Scalars['ID'];
};

export type MutationProductVserverBackupDeleteArgs = {
    backupId: Scalars['ID'];
    id: Scalars['ID'];
};

export type MutationProductUpgradeGameserverArgs = {
    intervalId: Scalars['ID'];
    variantIds: Array<ProductUpgradeGameserverVaraintMapping>;
    id: Scalars['ID'];
};

export type MutationProductUpgradeTeamspeakArgs = {
    intervalId: Scalars['ID'];
    variantIds: Array<ProductUpgradeGameserverVaraintMapping>;
    id: Scalars['ID'];
};

export type MutationProductBuyGameserverArgs = {
    product: ProductBuyGameserverInput;
};

export type MutationProductBuyTeamspeakArgs = {
    product: ProductBuyTeamspeakInput;
};

export type MutationProductBuySimpleArgs = {
    product: ProductBuySimpleInput;
};

export type MutationProductBuyVserverArgs = {
    product: ProductBuyVserverInput;
};

export type MutationProductBuyDomainArgs = {
    product: ProductBuyDomainInput;
};

export type MutationProductEditArgs = {
    data: ProductEditInput;
};

export type MutationProductSetAutorenewIntervalArgs = {
    intervalId?: Maybe<Scalars['ID']>;
    id: Scalars['ID'];
};

export type MutationProductExtendBuyArgs = {
    data: ProductExtendBuyInput;
};

export type MutationFinanceChargeVerifyArgs = {
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
};

export type MutationFinanceChargeDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationFinanceTransactionCreateArgs = {
    data: FinanceTransactionCreateInput;
};

export type MutationFinanceDonationLinkCreateArgs = {
    label?: Maybe<Scalars['String']>;
    message: Scalars['String'];
};

export type MutationFinanceDonationLinkDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductTemplateVserverCreateArgs = {
    data: ProductTemplateVserverCreateInput;
};

export type MutationProductTemplateVserverEditArgs = {
    data: ProductTemplateVserverEditInput;
};

export type MutationProductTemplateVserverDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationProductGameserverFsWriteArgs = {
    base64Content: Scalars['String'];
    file: Scalars['String'];
    gameserverId: Scalars['ID'];
};

export type MutationBackupServerCreateArgs = {
    data: BackupServerInputCreate;
};

export type MutationBackupServerEditArgs = {
    data: BackupServerInputEdit;
};

export type MutationBackupServerDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationHostNodeUpdateDaemonArgs = {
    version?: Maybe<Scalars['String']>;
    sshRsaKey?: Maybe<Scalars['String']>;
    sshPassword?: Maybe<Scalars['String']>;
    sshUsername: Scalars['String'];
    hostNodeId: Scalars['ID'];
};

export type MutationHost_Node_EditArgs = {
    data: HostNodeEditInput;
};

export type MutationHost_Node_InstancesArgs = {
    id: Scalars['ID'];
};

export type MutationHost_Node_DeleteArgs = {
    id: Scalars['ID'];
};

export type MutationFileDeleteFileArgs = {
    id: Scalars['ID'];
};

export type MutationDsgvoAnonymizeAccountArgs = {
    id: Scalars['ID'];
};

export type MutationPdf_Template_EditArgs = {
    data: PdfTemplateNewEditInput;
};

export type MutationPdf_Template_DeleteArgs = {
    id: Scalars['ID'];
};

export type MutationSupportTicketResetUnreadCounterArgs = {
    id: Scalars['ID'];
};

export type MutationSupport_Ticket_NewArgs = {
    data: SupportTicketNewInput;
};

export type MutationSupportTicketAddFileArgs = {
    fileId: Scalars['ID'];
    id: Scalars['ID'];
};

export type MutationSupportTicketDeleteArgs = {
    id: Scalars['ID'];
};

export type MutationSupportTicketDeleteMessageArgs = {
    id: Scalars['ID'];
};

export type MutationSupport_Ticket_Add_MessageArgs = {
    data: SupportTicketAddMessage;
};

export type MutationSupport_Ticket_EditArgs = {
    data: SupportTicketEdit;
    id: Scalars['ID'];
};

export type MutationSupportTicketAssignToArgs = {
    userId: Scalars['ID'];
    id: Scalars['ID'];
};

export type MutationSupportTicketSetStatusArgs = {
    status: Scalars['String'];
    id: Scalars['ID'];
};

export type MutationSupportTicketCloseArgs = {
    id: Scalars['ID'];
};

export type MutationSupportTicketReopenArgs = {
    id: Scalars['ID'];
};

export type MutationSupportQuickResponseCreateArgs = {
    dto: SupportQuickResponseCreateDto;
};

export type MutationSupportQuickResponseEditArgs = {
    dto: SupportQuickResponseEditDto;
};

export type MutationSupportQuickResponseDeleteArgs = {
    id: Scalars['ID'];
};

export type RoleNewInput = {
    name: Scalars['String'];
    id?: Maybe<Scalars['ID']>;
};

export type UserInputUserEditAddress = {
    birthdate?: Maybe<Scalars['String']>;
    street1?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    phoneMobile?: Maybe<Scalars['String']>;
    vatId?: Maybe<Scalars['String']>;
    zip?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    firstname?: Maybe<Scalars['String']>;
    lastname?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
};

export type UserInputRegister = {
    email: Scalars['String'];
    password: Scalars['String'];
    nickname?: Maybe<Scalars['String']>;
    userAddress?: Maybe<UserInputRegisterAddress>;
};

export type UserInputRegisterAddress = {
    birthdate?: Maybe<Scalars['String']>;
    street1?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    phoneMobile?: Maybe<Scalars['String']>;
    vatId?: Maybe<Scalars['String']>;
    zip?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    firstname?: Maybe<Scalars['String']>;
    lastname?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
};

export type EmailTemplateInputNew = {
    subject: Scalars['String'];
    sender: Scalars['String'];
    template: Scalars['String'];
    templateContent?: Maybe<Scalars['String']>;
};

export type EmailTemplateInputEdit = {
    id: Scalars['ID'];
    subject: Scalars['String'];
    sender: Scalars['String'];
    template: Scalars['String'];
    templateContent?: Maybe<Scalars['String']>;
};

export type ProductGameserverScriptEditInput = {
    id: Scalars['ID'];
    script: Scalars['String'];
    standaloneBtn: Scalars['Boolean'];
    standaloneBtnColor?: Maybe<Scalars['String']>;
    templateId: Scalars['ID'];
    title: Scalars['String'];
    executeHook?: Maybe<Scalars['String']>;
    hidden?: Maybe<Scalars['Boolean']>;
    runAsRoot?: Maybe<Scalars['Boolean']>;
    disableAutoRestart?: Maybe<Scalars['Boolean']>;
};

export type ProductGameserverScriptNewInput = {
    script: Scalars['String'];
    templateId: Scalars['ID'];
    title: Scalars['String'];
};

export type ProductGameserverTemplateEditInput = {
    id?: Maybe<Scalars['ID']>;
    title: Scalars['String'];
    platform: Scalars['String'];
    active?: Maybe<Scalars['Boolean']>;
    resourceUrl: Scalars['String'];
    logoId?: Maybe<Scalars['ID']>;
    defaultCustomParameter?: Maybe<Scalars['String']>;
    ports: Scalars['Int'];
    canUpdateOnStart: Scalars['Boolean'];
};

export type ProductVserverImageCreateInput = {
    active: Scalars['Boolean'];
    title: Scalars['String'];
    platform: Scalars['String'];
    logoId?: Maybe<Scalars['String']>;
    resourceUrl: Scalars['String'];
};

export type ProductVserverImageEditInput = {
    active: Scalars['Boolean'];
    title: Scalars['String'];
    platform: Scalars['String'];
    logoId?: Maybe<Scalars['String']>;
    resourceUrl: Scalars['String'];
    id: Scalars['ID'];
};

export type ProductUpgradeGameserverVaraintMapping = {
    optionId: Scalars['ID'];
    newId: Scalars['ID'];
};

export type ProductBuyGameserverInput = {
    templateId: Scalars['ID'];
    paymentIntervalId: Scalars['ID'];
    options: Array<ProductBuyGameserverInputOption>;
    price: Scalars['Float'];
};

export type ProductBuyGameserverInputOption = {
    optionId: Scalars['ID'];
    variantId: Scalars['ID'];
};

export type ProductBuyTeamspeakInput = {
    templateId: Scalars['ID'];
    paymentIntervalId: Scalars['ID'];
    options: Array<ProductBuyTeamspeakInputOption>;
    price: Scalars['Float'];
};

export type ProductBuyTeamspeakInputOption = {
    optionId: Scalars['ID'];
    variantId: Scalars['ID'];
};

export type ProductBuySimpleInput = {
    templateId: Scalars['ID'];
    paymentIntervalId: Scalars['ID'];
    options: Array<ProductBuySimpleInputOption>;
    tld?: Maybe<Scalars['String']>;
    tldAuthcode?: Maybe<Scalars['String']>;
    price: Scalars['Float'];
};

export type ProductBuySimpleInputOption = {
    optionId: Scalars['ID'];
    variantId: Scalars['ID'];
};

export type ProductBuyVserverInput = {
    templateId: Scalars['ID'];
    paymentIntervalId: Scalars['ID'];
    price: Scalars['Float'];
};

export type ProductBuyDomainInput = {
    templateId: Scalars['ID'];
    paymentIntervalId: Scalars['ID'];
    price: Scalars['Float'];
    tld: Scalars['String'];
    authcode?: Maybe<Scalars['String']>;
};

export type ProductEditInput = {
    expire: Scalars['DateTime'];
    id: Scalars['ID'];
};

export type ProductExtendBuyInput = {
    productId: Scalars['ID'];
    paymentIntervalId: Scalars['ID'];
    price: Scalars['Float'];
};

export type FinanceTransactionCreateInput = {
    positions: Array<FinanceTransactionItemInput>;
    endDate: Scalars['DateTime'];
    type: Scalars['String'];
    description: Scalars['String'];
    userId: Scalars['ID'];
};

export type FinanceTransactionItemInput = {
    amount: Scalars['Float'];
    vat: Scalars['Float'];
    title: Scalars['String'];
};

export type ProductTemplateVserverCreateInput = {
    active: Scalars['Boolean'];
    basePrice: Scalars['Float'];
    coresId: Scalars['ID'];
    memoryId: Scalars['ID'];
    setup: Scalars['Float'];
    spaceId: Scalars['ID'];
    urlKey: Scalars['String'];
    title: Scalars['String'];
    platform: Scalars['String'];
};

export type ProductTemplateVserverEditInput = {
    active: Scalars['Boolean'];
    basePrice: Scalars['Float'];
    coresId: Scalars['ID'];
    memoryId: Scalars['ID'];
    setup: Scalars['Float'];
    spaceId: Scalars['ID'];
    urlKey: Scalars['String'];
    title: Scalars['String'];
    platform: Scalars['String'];
    id: Scalars['ID'];
    hostNodeFilterKey?: Maybe<Scalars['String']>;
};

export type BackupServerInputCreate = {
    backupPath: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    port: Scalars['Int'];
    privateKey: Scalars['String'];
    username: Scalars['String'];
    host: Scalars['String'];
    localHost: Scalars['String'];
};

export type BackupServerInputEdit = {
    id: Scalars['ID'];
    backupPath?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    port?: Maybe<Scalars['Int']>;
    privateKey?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
    host?: Maybe<Scalars['String']>;
    localHost?: Maybe<Scalars['String']>;
};

export type HostNodeEditInput = {
    id?: Maybe<Scalars['ID']>;
    name: Scalars['String'];
    remoteAddress: Scalars['String'];
    section: Scalars['Int'];
    type: Scalars['String'];
    maxInstances?: Maybe<Scalars['Int']>;
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    forcePublicBackupTranfer?: Maybe<Scalars['Boolean']>;
};

export type PdfTemplateNewEditInput = {
    id?: Maybe<Scalars['ID']>;
    template: Scalars['String'];
    templateContent?: Maybe<Scalars['String']>;
};

export type SupportTicketNewInput = {
    subject: Scalars['String'];
    category: Scalars['String'];
    fileIds: Array<Scalars['ID']>;
    priority: Scalars['Int'];
    message: Scalars['String'];
};

export type SupportTicketAddMessage = {
    id: Scalars['ID'];
    message: Scalars['String'];
};

export type SupportTicketEdit = {
    status?: Maybe<Scalars['String']>;
    priority?: Maybe<Scalars['Int']>;
};

export type SupportQuickResponseCreateDto = {
    content: Scalars['String'];
    title?: Maybe<Scalars['String']>;
};

export type SupportQuickResponseEditDto = {
    content: Scalars['String'];
    title?: Maybe<Scalars['String']>;
    id: Scalars['String'];
};

export type Me_Has_AclQueryVariables = Exact<{
    acl: Scalars['String'];
}>;

export type Me_Has_AclQuery = { __typename?: 'Query' } & Pick<
    Query,
    'acl_has_acl'
>;

export type AclsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type AclsQuery = { __typename?: 'Query' } & {
    acls: { __typename?: 'AclResultMany' } & {
        edges: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type AclRefillAclCacheMutationVariables = Exact<{
    [key: string]: never;
}>;

export type AclRefillAclCacheMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'aclRefillAclCache'
>;

export type CreateBackupServerMutationVariables = Exact<{
    backupPath: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    port: Scalars['Int'];
    username: Scalars['String'];
    privateKey: Scalars['String'];
    host: Scalars['String'];
    localHost: Scalars['String'];
}>;

export type CreateBackupServerMutation = { __typename?: 'Mutation' } & {
    backupServerCreate: { __typename?: 'BackupServer' } & Pick<
        BackupServer,
        'id'
    >;
};

export type EditBackupServerMutationVariables = Exact<{
    id: Scalars['ID'];
    backupPath?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    port?: Maybe<Scalars['Int']>;
    username?: Maybe<Scalars['String']>;
    privateKey?: Maybe<Scalars['String']>;
    host?: Maybe<Scalars['String']>;
    localHost: Scalars['String'];
}>;

export type EditBackupServerMutation = { __typename?: 'Mutation' } & {
    backupServerEdit: { __typename?: 'BackupServer' } & Pick<
        BackupServer,
        'id'
    >;
};

export type DeleteBackupServerByIdMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteBackupServerByIdMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'backupServerDelete'
>;

export type BackupServersQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type BackupServersQuery = { __typename?: 'Query' } & {
    backupServers: { __typename?: 'BackupServerResultMany' } & {
        edges: Array<
            { __typename?: 'BackupServer' } & Pick<
                BackupServer,
                | 'id'
                | 'name'
                | 'update'
                | 'backupPath'
                | 'privateKey'
                | 'username'
                | 'host'
            >
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type BackupServerByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type BackupServerByIdQuery = { __typename?: 'Query' } & {
    backupServer: { __typename?: 'BackupServer' } & Pick<
        BackupServer,
        | 'id'
        | 'name'
        | 'update'
        | 'backupPath'
        | 'privateKey'
        | 'port'
        | 'username'
        | 'host'
        | 'deletable'
        | 'localHost'
    >;
};

export type BlogPostReadQueryVariables = Exact<{ [key: string]: never }>;

export type BlogPostReadQuery = { __typename?: 'Query' } & {
    blogPostRead: Array<
        { __typename?: 'Blogfeed' } & Pick<
            Blogfeed,
            'title' | 'link' | 'pubDate' | 'html'
        >
    >;
};

export type ProductDomainPartFragment = { __typename?: 'ProductDomain' } & Pick<
    ProductDomain,
    | 'id'
    | 'attributes'
    | 'name'
    | 'create'
    | 'authcode'
    | 'requestNewAuthcode'
    | 'registered'
    | 'tld'
> & { product: { __typename?: 'Product' } & Pick<Product, 'id' | 'expire'> };

export type ProductDomainsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductDomainsQuery = { __typename?: 'Query' } & {
    productDomains: { __typename?: 'ProductDomainResultMany' } & {
        edges: Array<
            { __typename?: 'ProductDomain' } & Pick<
                ProductDomain,
                'id' | 'create' | 'authcode' | 'name' | 'tld' | 'attributes'
            > & {
                    product: { __typename?: 'Product' } & Pick<
                        Product,
                        'id' | 'expire'
                    > & { user: { __typename?: 'User' } & Pick<User, 'id'> };
                }
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type ProductDomainByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductDomainByIdQuery = { __typename?: 'Query' } & {
    productDomainById: {
        __typename?: 'ProductDomain';
    } & ProductDomainPartFragment;
};

export type MyProductDomainsQueryVariables = Exact<{ [key: string]: never }>;

export type MyProductDomainsQuery = { __typename?: 'Query' } & {
    productDomainsMy: Array<
        { __typename?: 'ProductDomain' } & Pick<
            ProductDomain,
            'id' | 'name' | 'tld'
        > & {
                product: { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'expire'
                >;
            }
    >;
};

export type ProductDomainRequestNewAuthcodeMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductDomainRequestNewAuthcodeMutation = {
    __typename?: 'Mutation';
} & {
    productDomainRequestNewAuthcode: {
        __typename?: 'ProductDomain';
    } & ProductDomainPartFragment;
};

export type ProductDomainDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductDomainDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productDomainDelete'
>;

export type ProductDomainSetAuthcodeMutationVariables = Exact<{
    id: Scalars['ID'];
    authcode: Scalars['String'];
}>;

export type ProductDomainSetAuthcodeMutation = { __typename?: 'Mutation' } & {
    productDomainSetAuthcode: {
        __typename?: 'ProductDomain';
    } & ProductDomainPartFragment;
};

export type DsgvoAnonymizeAccountMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DsgvoAnonymizeAccountMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'dsgvoAnonymizeAccount'
>;

export type EmailTemplatePartFragment = { __typename?: 'EmailTemplate' } & Pick<
    EmailTemplate,
    'id' | 'sender' | 'subject' | 'template'
>;

export type EmailTemplatesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type EmailTemplatesQuery = { __typename?: 'Query' } & {
    emailTemplates: { __typename?: 'EmailTemplateResultMany' } & {
        edges: Array<
            { __typename?: 'EmailTemplate' } & EmailTemplatePartFragment
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type EmailTemplateByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type EmailTemplateByIdQuery = { __typename?: 'Query' } & {
    emailTemplateById: { __typename?: 'EmailTemplate' } & Pick<
        EmailTemplate,
        'templateContent'
    > &
        EmailTemplatePartFragment;
};

export type NewEmailTemplateMutationVariables = Exact<{
    sender: Scalars['String'];
    subject: Scalars['String'];
    template: Scalars['String'];
    templateContent?: Maybe<Scalars['String']>;
}>;

export type NewEmailTemplateMutation = { __typename?: 'Mutation' } & {
    email_template_new: { __typename?: 'EmailTemplate' } & Pick<
        EmailTemplate,
        'templateContent'
    > &
        EmailTemplatePartFragment;
};

export type DeleteEmailTemplateMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteEmailTemplateMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'email_template_delete'
>;

export type EditEmailTemplateMutationVariables = Exact<{
    id: Scalars['ID'];
    sender: Scalars['String'];
    subject: Scalars['String'];
    template: Scalars['String'];
    templateContent?: Maybe<Scalars['String']>;
}>;

export type EditEmailTemplateMutation = { __typename?: 'Mutation' } & {
    email_template_edit: { __typename?: 'EmailTemplate' } & Pick<
        EmailTemplate,
        'templateContent'
    > &
        EmailTemplatePartFragment;
};

export type FileDeleteFileMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type FileDeleteFileMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'FileDeleteFile'
>;

export type MyFilesQueryVariables = Exact<{ [key: string]: never }>;

export type MyFilesQuery = { __typename?: 'Query' } & {
    myFiles: Array<
        { __typename?: 'File' } & Pick<
            File,
            | 'id'
            | 'hasExpired'
            | 'url'
            | 'exists'
            | 'create'
            | 'mimetype'
            | 'originalname'
            | 'expiryDate'
        >
    >;
};

export type FinancePaymentMethodsQueryVariables = Exact<{
    [key: string]: never;
}>;

export type FinancePaymentMethodsQuery = { __typename?: 'Query' } & {
    FinancePaymentMethods: Array<
        { __typename?: 'PaymentMethod' } & Pick<
            PaymentMethod,
            | 'method'
            | 'logo'
            | 'title'
            | 'minPayable'
            | 'maxPayable'
            | 'active'
            | 'forceAllowedValues'
            | 'tooltip'
            | 'transactionFee'
        > & {
                bonusCredits?: Maybe<
                    Array<
                        { __typename?: 'BonusCredits' } & Pick<
                            BonusCredits,
                            'minCredits' | 'threshold' | 'bonus'
                        >
                    >
                >;
            }
    >;
};

export type FinanceTransactionPartFragment = {
    __typename?: 'FinanceTransaction';
} & Pick<
    FinanceTransaction,
    | 'id'
    | 'description'
    | 'create'
    | 'total'
    | 'isPull'
    | 'isPut'
    | 'billId'
    | 'totalExclVat'
    | 'totalInclVat'
> & {
        pdf?: Maybe<{ __typename?: 'Pdf' } & Pick<Pdf, 'id' | 'url'>>;
        items: Array<
            { __typename?: 'FinanceTransactionItem' } & Pick<
                FinanceTransactionItem,
                'id' | 'amount' | 'vat' | 'getInclVat' | 'title' | 'getExclVat'
            >
        >;
    };

export type FinanceTransactionsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type FinanceTransactionsQuery = { __typename?: 'Query' } & {
    financeTransactions: { __typename?: 'FinanceTransactionResultMany' } & {
        edges: Array<
            {
                __typename?: 'FinanceTransaction';
            } & FinanceTransactionPartFragment
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type FinanceTransactionByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type FinanceTransactionByIdQuery = { __typename?: 'Query' } & {
    financeTransactionById: {
        __typename?: 'FinanceTransaction';
    } & FinanceTransactionPartFragment;
};

export type CreateFinanceTransactionMutationVariables = Exact<{
    data: FinanceTransactionCreateInput;
}>;

export type CreateFinanceTransactionMutation = { __typename?: 'Mutation' } & {
    financeTransactionCreate: {
        __typename?: 'FinanceTransaction';
    } & FinanceTransactionPartFragment;
};

export type MyFinanceTransactionsQueryVariables = Exact<{
    [key: string]: never;
}>;

export type MyFinanceTransactionsQuery = { __typename?: 'Query' } & {
    user_me: { __typename?: 'User' } & Pick<User, 'id' | 'credits'> & {
            transactions: Array<
                { __typename?: 'FinanceTransaction' } & Pick<
                    FinanceTransaction,
                    'donationMessage' | 'isDonation'
                > &
                    FinanceTransactionPartFragment
            >;
        };
};

export type FinanceChargePartFragment = { __typename?: 'FinanceCharge' } & Pick<
    FinanceCharge,
    'id' | 'create' | 'amount' | 'method' | 'verified' | 'meta'
> & {
        receiver: { __typename?: 'User' } & Pick<User, 'email' | 'id'>;
        transaction?: Maybe<
            { __typename?: 'FinanceTransaction' } & Pick<
                FinanceTransaction,
                'id'
            >
        >;
    };

export type FinanceChargesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type FinanceChargesQuery = { __typename?: 'Query' } & {
    financeCharges: { __typename?: 'FinanceChargeResultMany' } & {
        edges: Array<
            { __typename?: 'FinanceCharge' } & {
                donation?: Maybe<
                    { __typename?: 'FinanceDonation' } & Pick<
                        FinanceDonation,
                        'id'
                    >
                >;
            } & FinanceChargePartFragment
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type FinanceChargeByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type FinanceChargeByIdQuery = { __typename?: 'Query' } & {
    financeChargeById: {
        __typename?: 'FinanceCharge';
    } & FinanceChargePartFragment;
};

export type FinanceChargeVerifyMutationVariables = Exact<{
    id: Scalars['ID'];
    description?: Maybe<Scalars['String']>;
}>;

export type FinanceChargeVerifyMutation = { __typename?: 'Mutation' } & {
    financeChargeVerify: {
        __typename?: 'FinanceCharge';
    } & FinanceChargePartFragment;
};

export type FinanceChargeDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type FinanceChargeDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'financeChargeDelete'
>;

export type FinanceDonationLinksMyQueryVariables = Exact<{
    [key: string]: never;
}>;

export type FinanceDonationLinksMyQuery = { __typename?: 'Query' } & {
    financeDonationLinksMy: Array<
        { __typename?: 'FinanceDonationLink' } & Pick<
            FinanceDonationLink,
            'id' | 'create' | 'message' | 'url' | 'totalDonationSum' | 'label'
        >
    >;
};

export type FinanceDonationLinkCreateMutationVariables = Exact<{
    message: Scalars['String'];
    label?: Maybe<Scalars['String']>;
}>;

export type FinanceDonationLinkCreateMutation = { __typename?: 'Mutation' } & {
    financeDonationLinkCreate: { __typename?: 'FinanceDonationLink' } & Pick<
        FinanceDonationLink,
        'id' | 'create' | 'message' | 'url' | 'totalDonationSum'
    >;
};

export type FinanceDonationLinkDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type FinanceDonationLinkDeleteMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'financeDonationLinkDelete'>;

export type ProductGameserverPartFragment = {
    __typename?: 'ProductGameserver';
} & Pick<
    ProductGameserver,
    | 'id'
    | 'attributes'
    | 'name'
    | 'address'
    | 'failureAutorestart'
    | 'installed'
    | 'slot'
    | 'memory'
    | 'platform'
    | 'canEditMemory'
    | 'canEditSlot'
    | 'customAutoUpdateOnStartFlag'
    | 'customParameter'
    | 'hasRunningTask'
    | 'autorestarts'
> & {
        product?: Maybe<
            { __typename?: 'Product' } & Pick<
                Product,
                'id' | 'expire' | 'locked'
            >
        >;
        scripts: Array<
            { __typename?: 'ProductGameserverScript' } & Pick<
                ProductGameserverScript,
                'id' | 'title' | 'standaloneBtn' | 'standaloneBtnColor'
            >
        >;
        template?: Maybe<
            { __typename?: 'ProductGameserverTemplate' } & Pick<
                ProductGameserverTemplate,
                'id' | 'title' | 'defaultCustomParameter' | 'canUpdateOnStart'
            > & {
                    logo?: Maybe<
                        { __typename?: 'File' } & Pick<File, 'id' | 'url'>
                    >;
                }
        >;
        ports: Array<
            { __typename?: 'HostNodePort' } & Pick<HostNodePort, 'id' | 'port'>
        >;
        hostNode: { __typename?: 'HostNode' } & Pick<
            HostNode,
            'id' | 'remoteAddress' | 'name' | 'cpuInfo' | 'cpuCores'
        >;
    };

export type ProductGameserverStartMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
    scriptId?: Maybe<Scalars['ID']>;
}>;

export type ProductGameserverStartMutation = { __typename?: 'Mutation' } & {
    product_gameserver_start: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

export type ProductGameserverSetAutorestartsMutationVariables = Exact<{
    id: Scalars['ID'];
    restarts: Array<Scalars['Int']> | Scalars['Int'];
}>;

export type ProductGameserverSetAutorestartsMutation = {
    __typename?: 'Mutation';
} & {
    productGameserverSetAutorestarts: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

export type ProductGameserverFailureAutorestartMutationVariables = Exact<{
    id: Scalars['ID'];
    restart: Scalars['Boolean'];
}>;

export type ProductGameserverFailureAutorestartMutation = {
    __typename?: 'Mutation';
} & {
    productGameserverFailureAutorestart: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

export type ProductGameserverRunningQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

export type ProductGameserverRunningQuery = { __typename?: 'Query' } & Pick<
    Query,
    'product_gameserver_running'
>;

export type ProductGameserverLogQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

export type ProductGameserverLogQuery = { __typename?: 'Query' } & Pick<
    Query,
    'product_gameserver_log'
>;

export type ProductGameserverStopMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

export type ProductGameserverStopMutation = { __typename?: 'Mutation' } & {
    product_gameserver_stop: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

export type ProductGameserverConsoleMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
    command: Scalars['String'];
}>;

export type ProductGameserverConsoleMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'product_gameserver_console'>;

export type ProductGameserverExistQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

export type ProductGameserverExistQuery = { __typename?: 'Query' } & Pick<
    Query,
    'product_gameserver_exist'
>;

export type ProductGameserverChangeFtpPasswordMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
    password: Scalars['String'];
}>;

export type ProductGameserverChangeFtpPasswordMutation = {
    __typename?: 'Mutation';
} & {
    product_gameserver_change_password: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

export type ProductGameserverQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductGameserverQuery = { __typename?: 'Query' } & {
    productGameserverById: { __typename?: 'ProductGameserver' } & {
        availableGameserverTemplates: Array<
            { __typename?: 'ProductGameserverTemplate' } & Pick<
                ProductGameserverTemplate,
                'id' | 'title'
            > & {
                    logo?: Maybe<
                        { __typename?: 'File' } & Pick<File, 'id' | 'url'>
                    >;
                }
        >;
    } & ProductGameserverPartFragment;
};

export type ProductGameserverUsageQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

export type ProductGameserverUsageQuery = { __typename?: 'Query' } & {
    productGameserverUsage: { __typename?: 'ProductGameserverUsageDto' } & {
        usagePoints: Array<
            { __typename?: 'ProductGameserverUsageDtoEntry' } & Pick<
                ProductGameserverUsageDtoEntry,
                'globalUsage' | 'perCore' | 'date' | 'memoryUsageInMb'
            >
        >;
        diskPoints: Array<
            { __typename?: 'ProductGameserverUsageDtoDiskEntry' } & Pick<
                ProductGameserverUsageDtoDiskEntry,
                'date' | 'usageInMb'
            >
        >;
    };
};

export type ProductGameserverAddonsQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

export type ProductGameserverAddonsQuery = { __typename?: 'Query' } & {
    product_gameservers_scripts: Array<
        { __typename?: 'ProductGameserverScript' } & Pick<
            ProductGameserverScript,
            'id' | 'title' | 'standaloneBtn' | 'isDefault'
        >
    >;
};

export type ProductGameserverSetCustomAttributeMutationVariables = Exact<{
    id: Scalars['ID'];
    key: Scalars['String'];
    value: Scalars['String'];
}>;

export type ProductGameserverSetCustomAttributeMutation = {
    __typename?: 'Mutation';
} & {
    productGameserverSetCustomAttribute: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

export type ProductGameserverChangeLabelMutationVariables = Exact<{
    id: Scalars['ID'];
    label: Scalars['String'];
}>;

export type ProductGameserverChangeLabelMutation = {
    __typename?: 'Mutation';
} & {
    product_gameserver_change_label: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

export type ProductGameserverBackupCreateMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

export type ProductGameserverBackupCreateMutation = {
    __typename?: 'Mutation';
} & {
    productGameserverBackupCreate: {
        __typename?: 'ProductGameserverBackup';
    } & Pick<ProductGameserverBackup, 'id'>;
};

export type ProductGameserverBackupDeleteMutationVariables = Exact<{
    backupId: Scalars['ID'];
}>;

export type ProductGameserverBackupDeleteMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productGameserverBackupDelete'>;

export type ProductGameserverBackupRestoreMutationVariables = Exact<{
    backupId: Scalars['ID'];
}>;

export type ProductGameserverBackupRestoreMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productGameserverBackupRestore'>;

export type ProductGameserverDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductGameserverDeleteMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productGameserverDelete'>;

export type ProductGameserverInstallMutationVariables = Exact<{
    id: Scalars['ID'];
    gameserverTemplateId: Scalars['ID'];
}>;

export type ProductGameserverInstallMutation = { __typename?: 'Mutation' } & {
    productGameserverInstall: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

export type ProductGameserverBackupsQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductGameserverBackupsQuery = { __typename?: 'Query' } & {
    productGameserverById: { __typename?: 'ProductGameserver' } & Pick<
        ProductGameserver,
        'id'
    > & {
            backups: Array<
                { __typename?: 'ProductGameserverBackup' } & Pick<
                    ProductGameserverBackup,
                    'id' | 'create' | 'sizeInMb' | 'restorable'
                >
            >;
        };
};

export type ProductGameserverBackupDownloadMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductGameserverBackupDownloadMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productGameserverBackupDownload'>;

export type ProductGameserversQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductGameserversQuery = { __typename?: 'Query' } & {
    productGameservers: { __typename?: 'ProductGameserverResultMany' } & {
        edges: Array<
            { __typename?: 'ProductGameserver' } & Pick<
                ProductGameserver,
                'id' | 'name'
            > & {
                    template?: Maybe<
                        { __typename?: 'ProductGameserverTemplate' } & Pick<
                            ProductGameserverTemplate,
                            'id' | 'title'
                        >
                    >;
                    product?: Maybe<
                        { __typename?: 'Product' } & Pick<Product, 'id'> & {
                                user: { __typename?: 'User' } & Pick<
                                    User,
                                    'id'
                                >;
                            }
                    >;
                    hostNode: { __typename?: 'HostNode' } & Pick<
                        HostNode,
                        'id' | 'remoteAddress' | 'name'
                    >;
                }
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type MyProductGameserversQueryVariables = Exact<{
    [key: string]: never;
}>;

export type MyProductGameserversQuery = { __typename?: 'Query' } & {
    productGameserversMy: Array<
        { __typename?: 'ProductGameserver' } & Pick<
            ProductGameserver,
            'id' | 'name' | 'amIOwner'
        > & {
                product?: Maybe<
                    { __typename?: 'Product' } & Pick<Product, 'id' | 'expire'>
                >;
                template?: Maybe<
                    { __typename?: 'ProductGameserverTemplate' } & Pick<
                        ProductGameserverTemplate,
                        'id'
                    > & {
                            logo?: Maybe<
                                { __typename?: 'File' } & Pick<
                                    File,
                                    'id' | 'url'
                                >
                            >;
                        }
                >;
            }
    >;
};

export type MyProductGameserverAccessesQueryVariables = Exact<{
    [key: string]: never;
}>;

export type MyProductGameserverAccessesQuery = { __typename?: 'Query' } & {
    myProductGameserverAccesses: Array<
        { __typename?: 'ProductGameserverAccess' } & Pick<
            ProductGameserverAccess,
            'id'
        > & {
                gameserver: { __typename?: 'ProductGameserver' } & Pick<
                    ProductGameserver,
                    'id' | 'name'
                > & {
                        template?: Maybe<
                            { __typename?: 'ProductGameserverTemplate' } & Pick<
                                ProductGameserverTemplate,
                                'id'
                            > & {
                                    logo?: Maybe<
                                        { __typename?: 'File' } & Pick<
                                            File,
                                            'id' | 'url'
                                        >
                                    >;
                                }
                        >;
                    };
            }
    >;
};

export type ProductGameserverAccessesByGameserverIdQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

export type ProductGameserverAccessesByGameserverIdQuery = {
    __typename?: 'Query';
} & {
    productGameserverAccessesByGameserverId: Array<
        { __typename?: 'ProductGameserverAccess' } & Pick<
            ProductGameserverAccess,
            'accept' | 'id' | 'userEmail'
        > & {
                gameserver: { __typename?: 'ProductGameserver' } & Pick<
                    ProductGameserver,
                    'name'
                >;
            }
    >;
};

export type ProductGameserverAccessInviteMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
    emailOfInvitedUser: Scalars['String'];
    captcha: Scalars['String'];
}>;

export type ProductGameserverAccessInviteMutation = {
    __typename?: 'Mutation';
} & {
    productGameserverAccessInvite: {
        __typename?: 'ProductGameserverAccess';
    } & Pick<ProductGameserverAccess, 'accept' | 'id' | 'userEmail'> & {
            gameserver: { __typename?: 'ProductGameserver' } & Pick<
                ProductGameserver,
                'name'
            >;
        };
};

export type ProductGameserverAccessRevokeMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductGameserverAccessRevokeMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productGameserverAccessRevoke'>;

export type ProductGameserverMysqlByGameserverQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

export type ProductGameserverMysqlByGameserverQuery = {
    __typename?: 'Query';
} & {
    productGameserverMysqlByGameserver: Array<
        { __typename?: 'ProductGameserverMysql' } & Pick<
            ProductGameserverMysql,
            'id' | 'label' | 'create' | 'host'
        >
    >;
};

export type ProductGameserverMysqlCreateMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
    password: Scalars['String'];
}>;

export type ProductGameserverMysqlCreateMutation = {
    __typename?: 'Mutation';
} & {
    productGameserverMysqlCreate: {
        __typename?: 'ProductGameserverMysql';
    } & Pick<ProductGameserverMysql, 'id' | 'label' | 'host' | 'create'>;
};

export type ProductGameserverMysqlChangeLabelMutationVariables = Exact<{
    id: Scalars['ID'];
    label: Scalars['String'];
}>;

export type ProductGameserverMysqlChangeLabelMutation = {
    __typename?: 'Mutation';
} & {
    productGameserverMysqlChangeLabel: {
        __typename?: 'ProductGameserverMysql';
    } & Pick<ProductGameserverMysql, 'id' | 'label' | 'create' | 'host'>;
};

export type ProductGameserverMysqlDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductGameserverMysqlDeleteMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productGameserverMysqlDelete'>;

export type ProductGameserverScriptsQueryVariables = Exact<{
    search?: Maybe<Scalars['String']>;
    orderBy?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['String']>;
    templateId?: Maybe<Scalars['ID']>;
}>;

export type ProductGameserverScriptsQuery = { __typename?: 'Query' } & {
    product_gameserver_scripts: Array<
        { __typename?: 'ProductGameserverScript' } & Pick<
            ProductGameserverScript,
            'id' | 'title' | 'script' | 'isDefault' | 'hidden' | 'executeHook'
        >
    >;
};

export type ProductGameserverScriptEditMutationVariables = Exact<{
    title: Scalars['String'];
    script: Scalars['String'];
    standaloneBtn: Scalars['Boolean'];
    standaloneBtnColor?: Maybe<Scalars['String']>;
    templateId: Scalars['ID'];
    runAsRoot: Scalars['Boolean'];
    disableAutoRestart: Scalars['Boolean'];
    hidden?: Maybe<Scalars['Boolean']>;
    executeHook?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
}>;

export type ProductGameserverScriptEditMutation = {
    __typename?: 'Mutation';
} & {
    product_gameserver_script_edit: {
        __typename?: 'ProductGameserverScript';
    } & Pick<
        ProductGameserverScript,
        'id' | 'title' | 'script' | 'hidden' | 'executeHook'
    >;
};

export type ProductGameserverScriptDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductGameserverScriptDeleteMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'product_gameserver_script_delete'>;

export type ProductGameserverScriptByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductGameserverScriptByIdQuery = { __typename?: 'Query' } & {
    productGameserverScriptById: {
        __typename?: 'ProductGameserverScript';
    } & Pick<
        ProductGameserverScript,
        | 'id'
        | 'title'
        | 'script'
        | 'standaloneBtn'
        | 'standaloneBtnColor'
        | 'runAsRoot'
        | 'disableAutoRestart'
        | 'hidden'
        | 'executeHook'
    >;
};

export type ProductGameserverTemplatePartFragment = {
    __typename?: 'ProductGameserverTemplate';
} & Pick<
    ProductGameserverTemplate,
    | 'id'
    | 'title'
    | 'canUpdateOnStart'
    | 'platform'
    | 'update'
    | 'defaultCustomParameter'
    | 'active'
    | 'ports'
    | 'resourceUrl'
> & {
        defaultScript?: Maybe<
            { __typename?: 'ProductGameserverScript' } & Pick<
                ProductGameserverScript,
                'id'
            >
        >;
        logo?: Maybe<{ __typename?: 'File' } & Pick<File, 'id'>>;
    };

export type ProductGameserverTemplateQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductGameserverTemplateQuery = { __typename?: 'Query' } & {
    product_gameserver_template: {
        __typename?: 'ProductGameserverTemplate';
    } & ProductGameserverTemplatePartFragment;
};

export type ProductGameserverTemplatesQueryVariables = Exact<{
    filter: CordFilter;
}>;

export type ProductGameserverTemplatesQuery = { __typename?: 'Query' } & {
    productGameserverTemplates: {
        __typename?: 'ProductGameserverTemplateResultMany';
    } & {
        edges: Array<
            { __typename?: 'ProductGameserverTemplate' } & Pick<
                ProductGameserverTemplate,
                'id' | 'title' | 'platform'
            > & {
                    logo?: Maybe<
                        { __typename?: 'File' } & Pick<File, 'url' | 'id'>
                    >;
                }
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type ProductGameserverTemplateEditMutationVariables = Exact<{
    id?: Maybe<Scalars['ID']>;
    title: Scalars['String'];
    platform: Scalars['String'];
    active: Scalars['Boolean'];
    resourceUrl: Scalars['String'];
    logoId?: Maybe<Scalars['ID']>;
    ports: Scalars['Int'];
    defaultCustomParameter: Scalars['String'];
    canUpdateOnStart: Scalars['Boolean'];
}>;

export type ProductGameserverTemplateEditMutation = {
    __typename?: 'Mutation';
} & {
    product_gameserver_template_edit: {
        __typename?: 'ProductGameserverTemplate';
    } & ProductGameserverTemplatePartFragment;
};

export type ProductGameserverTemplateDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductGameserverTemplateDeleteMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'product_gameserver_template_delete'>;

export type ProductGameserverTemplateSetDefaultScriptMutationVariables = Exact<{
    id: Scalars['ID'];
    scriptId: Scalars['ID'];
}>;

export type ProductGameserverTemplateSetDefaultScriptMutation = {
    __typename?: 'Mutation';
} & {
    product_gameserver_template_set_default_script: {
        __typename?: 'ProductGameserverTemplate';
    } & Pick<ProductGameserverTemplate, 'id'>;
};

export type HostNodeByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type HostNodeByIdQuery = { __typename?: 'Query' } & {
    host_node: { __typename?: 'HostNode' } & Pick<
        HostNode,
        | 'id'
        | 'name'
        | 'section'
        | 'remoteAddress'
        | 'type'
        | 'deletable'
        | 'hostNodeFilterKey'
        | 'maxInstances'
        | 'freeInstances'
        | 'forcePublicBackupTranfer'
        | 'isAvailable'
        | 'meta'
        | 'daemonVersion'
    >;
};

export type HostNodesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type HostNodesQuery = { __typename?: 'Query' } & {
    hostNodes: { __typename?: 'HostNodeResultMany' } & {
        edges: Array<
            { __typename?: 'HostNode' } & Pick<
                HostNode,
                | 'id'
                | 'name'
                | 'remoteAddress'
                | 'type'
                | 'isAvailable'
                | 'daemonVersion'
                | 'isDaemonVersionBehind'
                | 'getDaemonVersionsBehind'
                | 'latestInfoUpdate'
            >
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type HostNodeTestFindNodeQueryVariables = Exact<{
    type: Scalars['String'];
    filterKey?: Maybe<Scalars['String']>;
}>;

export type HostNodeTestFindNodeQuery = { __typename?: 'Query' } & {
    hostNodeTestFindNode?: Maybe<
        { __typename?: 'HostNode' } & Pick<
            HostNode,
            | 'id'
            | 'name'
            | 'remoteAddress'
            | 'type'
            | 'isAvailable'
            | 'daemonVersion'
        >
    >;
};

export type EditCreateHostNodeMutationVariables = Exact<{
    data: HostNodeEditInput;
}>;

export type EditCreateHostNodeMutation = { __typename?: 'Mutation' } & {
    host_node_edit: { __typename?: 'HostNode' } & Pick<
        HostNode,
        | 'id'
        | 'name'
        | 'section'
        | 'remoteAddress'
        | 'type'
        | 'deletable'
        | 'hostNodeFilterKey'
        | 'maxInstances'
        | 'freeInstances'
        | 'isAvailable'
        | 'forcePublicBackupTranfer'
        | 'meta'
        | 'daemonVersion'
    >;
};

export type DeleteHostNodeByIdMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteHostNodeByIdMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'host_node_delete'
>;

export type HostNodeUpdateDaemonMutationVariables = Exact<{
    version?: Maybe<Scalars['String']>;
    hostNodeId: Scalars['ID'];
    sshUsername: Scalars['String'];
    sshPassword?: Maybe<Scalars['String']>;
    sshRsaKey?: Maybe<Scalars['String']>;
}>;

export type HostNodeUpdateDaemonMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'hostNodeUpdateDaemon'
>;

export type HostNodeTasksMyQueryVariables = Exact<{
    take?: Maybe<Scalars['Int']>;
}>;

export type HostNodeTasksMyQuery = { __typename?: 'Query' } & {
    hostNodeTasksMy: Array<
        { __typename?: 'HostNodeTask' } & Pick<
            HostNodeTask,
            'id' | 'update' | 'running' | 'finish' | 'error' | 'label'
        > & {
                gameserver?: Maybe<
                    { __typename?: 'ProductGameserver' } & Pick<
                        ProductGameserver,
                        'id' | 'name'
                    >
                >;
            }
    >;
};

export type HostNodeTaskByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type HostNodeTaskByIdQuery = { __typename?: 'Query' } & {
    hostNodeTaskById: { __typename?: 'HostNodeTask' } & Pick<
        HostNodeTask,
        'id' | 'update' | 'running' | 'finish' | 'error' | 'label'
    > & {
            gameserver?: Maybe<
                { __typename?: 'ProductGameserver' } & Pick<
                    ProductGameserver,
                    'id' | 'name'
                >
            >;
        };
};

export type HostNodeTaskIsRunningQueryVariables = Exact<{
    identifier: Scalars['ID'];
}>;

export type HostNodeTaskIsRunningQuery = { __typename?: 'Query' } & Pick<
    Query,
    'host_node_task_running'
>;

export type PdfTemplatePartFragment = { __typename?: 'PdfTemplate' } & Pick<
    PdfTemplate,
    'id' | 'templateContent' | 'template' | 'create' | 'update' | 'templateFile'
>;

export type GetPdfTemplateQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type GetPdfTemplateQuery = { __typename?: 'Query' } & {
    pdf_template: { __typename?: 'PdfTemplate' } & PdfTemplatePartFragment;
};

export type PdfTemplatesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type PdfTemplatesQuery = { __typename?: 'Query' } & {
    pdfTemplates: { __typename?: 'PdfTemplateResultMany' } & {
        edges: Array<{ __typename?: 'PdfTemplate' } & PdfTemplatePartFragment>;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type DeletePdfTemplateMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeletePdfTemplateMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'pdf_template_delete'
>;

export type EditPdfTemplateMutationVariables = Exact<{
    id?: Maybe<Scalars['ID']>;
    templateContent?: Maybe<Scalars['String']>;
    template: Scalars['String'];
}>;

export type EditPdfTemplateMutation = { __typename?: 'Mutation' } & {
    pdf_template_edit: { __typename?: 'PdfTemplate' } & PdfTemplatePartFragment;
};

export type ProductPartFragment = { __typename?: 'Product' } & Pick<
    Product,
    'id' | 'expire' | 'autoRenewIntervalId'
> & {
        gameservers: Array<
            { __typename?: 'ProductGameserver' } & Pick<ProductGameserver, 'id'>
        >;
        vservers: Array<
            { __typename?: 'ProductVserver' } & Pick<ProductVserver, 'id'>
        >;
        user: { __typename?: 'User' } & Pick<User, 'id' | 'publicName'>;
        transactions: Array<
            { __typename?: 'FinanceTransaction' } & Pick<
                FinanceTransaction,
                'id'
            >
        >;
    };

export type ProductSetAutorenewIntervalMutationVariables = Exact<{
    id: Scalars['ID'];
    intervalId?: Maybe<Scalars['ID']>;
}>;

export type ProductSetAutorenewIntervalMutation = {
    __typename?: 'Mutation';
} & {
    productSetAutorenewInterval: {
        __typename?: 'Product';
    } & ProductPartFragment;
};

export type ProductsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductsQuery = { __typename?: 'Query' } & {
    products: { __typename?: 'ProductResultMany' } & {
        edges: Array<{ __typename?: 'Product' } & ProductPartFragment>;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type ProductByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductByIdQuery = { __typename?: 'Query' } & {
    productById: { __typename?: 'Product' } & ProductPartFragment;
};

export type ProductById2QueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductById2Query = { __typename?: 'Query' } & {
    productById: { __typename?: 'Product' } & {
        availablePeriods: Array<
            { __typename?: 'ProductTemplateExtendPeriod' } & Pick<
                ProductTemplateExtendPeriod,
                'id' | 'days'
            >
        >;
    } & ProductPartFragment;
};

export type ProductEditMutationVariables = Exact<{
    data: ProductEditInput;
}>;

export type ProductEditMutation = { __typename?: 'Mutation' } & {
    productEdit: { __typename?: 'Product' } & ProductPartFragment;
};

export type ProductGameserverFsReadIndexQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
    reloadIndex?: Maybe<Scalars['Boolean']>;
}>;

export type ProductGameserverFsReadIndexQuery = { __typename?: 'Query' } & Pick<
    Query,
    'productGameserverFsReadIndex'
>;

export type ProductGameserverFsReadQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
    file: Scalars['String'];
}>;

export type ProductGameserverFsReadQuery = { __typename?: 'Query' } & Pick<
    Query,
    'productGameserverFsRead'
>;

export type ProductGameserverFsWriteMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
    file: Scalars['String'];
    base64Content: Scalars['String'];
}>;

export type ProductGameserverFsWriteMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productGameserverFsWrite'>;

export type CreateProductGameserverScriptMutationVariables = Exact<{
    title: Scalars['String'];
    script: Scalars['String'];
    templateId: Scalars['ID'];
}>;

export type CreateProductGameserverScriptMutation = {
    __typename?: 'Mutation';
} & {
    product_gameserver_script_new: {
        __typename?: 'ProductGameserverScript';
    } & Pick<ProductGameserverScript, 'id' | 'title' | 'script'>;
};

export type RolePartFragment = { __typename?: 'Role' } & Pick<
    Role,
    'id' | 'name'
>;

export type RolesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type RolesQuery = { __typename?: 'Query' } & {
    roles: { __typename?: 'RoleResultMany' } & {
        edges: Array<{ __typename?: 'Role' } & RolePartFragment>;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type RoleByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type RoleByIdQuery = { __typename?: 'Query' } & {
    roleById: { __typename?: 'Role' } & {
        acls: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
        users: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
    } & RolePartFragment;
};

export type EditRoleRoleMutationVariables = Exact<{
    id?: Maybe<Scalars['ID']>;
    name: Scalars['String'];
}>;

export type EditRoleRoleMutation = { __typename?: 'Mutation' } & {
    role_role_edit: { __typename?: 'Role' } & {
        acls: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
        users: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
    } & RolePartFragment;
};

export type RoleUnAssignAclMutationVariables = Exact<{
    id: Scalars['ID'];
    aclsId: Array<Scalars['ID']> | Scalars['ID'];
}>;

export type RoleUnAssignAclMutation = { __typename?: 'Mutation' } & {
    roleUnAssignAcl: { __typename?: 'Role' } & {
        acls: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
    } & RolePartFragment;
};

export type RoleAssignAclMutationVariables = Exact<{
    id: Scalars['ID'];
    aclsId: Array<Scalars['ID']> | Scalars['ID'];
}>;

export type RoleAssignAclMutation = { __typename?: 'Mutation' } & {
    roleAssignAcl: { __typename?: 'Role' } & {
        acls: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
        users: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
    } & RolePartFragment;
};

export type RoleAddUserMutationVariables = Exact<{
    id: Scalars['ID'];
    userId: Scalars['ID'];
}>;

export type RoleAddUserMutation = { __typename?: 'Mutation' } & {
    roleAddUser: { __typename?: 'Role' } & {
        acls: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
        users: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
    } & RolePartFragment;
};

export type RoleRemoveUserMutationVariables = Exact<{
    id: Scalars['ID'];
    userId: Scalars['ID'];
}>;

export type RoleRemoveUserMutation = { __typename?: 'Mutation' } & {
    roleRemoveUser: { __typename?: 'Role' } & {
        acls: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
        users: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
    } & RolePartFragment;
};

export type DeleteRoleRoleMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteRoleRoleMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'role_role_delete'
>;

export type ProductSimplesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductSimplesQuery = { __typename?: 'Query' } & {
    productSimples: { __typename?: 'ProductSimpleResultMany' } & {
        edges: Array<
            { __typename?: 'ProductSimple' } & Pick<
                ProductSimple,
                'id' | 'create' | 'state' | 'name'
            > & {
                    product: { __typename?: 'Product' } & Pick<
                        Product,
                        'id' | 'expire'
                    > & { user: { __typename?: 'User' } & Pick<User, 'id'> };
                }
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type ProductSimpleByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductSimpleByIdQuery = { __typename?: 'Query' } & {
    productSimpleById: { __typename?: 'ProductSimple' } & Pick<
        ProductSimple,
        'id' | 'name' | 'description' | 'state'
    > & {
            product: { __typename?: 'Product' } & Pick<
                Product,
                'id' | 'expire'
            >;
        };
};

export type MyProductSimplesQueryVariables = Exact<{ [key: string]: never }>;

export type MyProductSimplesQuery = { __typename?: 'Query' } & {
    productSimplesMy: Array<
        { __typename?: 'ProductSimple' } & Pick<
            ProductSimple,
            'id' | 'name' | 'state'
        > & {
                product: { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'expire'
                >;
            }
    >;
};

export type ProductSimpleEditLabelMutationVariables = Exact<{
    id: Scalars['ID'];
    label: Scalars['String'];
}>;

export type ProductSimpleEditLabelMutation = { __typename?: 'Mutation' } & {
    productSimpleEditLabel: { __typename?: 'ProductSimple' } & Pick<
        ProductSimple,
        'id' | 'name' | 'state'
    > & {
            product: { __typename?: 'Product' } & Pick<
                Product,
                'id' | 'expire'
            >;
        };
};

export type ProductSimpleDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductSimpleDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productSimpleDelete'
>;

export type ProductSimpleSetStateMutationVariables = Exact<{
    id: Scalars['ID'];
    state: Scalars['String'];
}>;

export type ProductSimpleSetStateMutation = { __typename?: 'Mutation' } & {
    productSimpleSetState: { __typename?: 'ProductSimple' } & Pick<
        ProductSimple,
        'id' | 'name' | 'state'
    > & {
            product: { __typename?: 'Product' } & Pick<
                Product,
                'id' | 'expire'
            >;
        };
};

export type SupportQuickResponseFragmentFragment = {
    __typename?: 'SupportQuickResponse';
} & Pick<
    SupportQuickResponse,
    'id' | 'title' | 'content' | 'update' | 'create'
>;

export type SupportQuickResponseDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type SupportQuickResponseDeleteMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'supportQuickResponseDelete'>;

export type SupportQuickResponseEditMutationVariables = Exact<{
    dto: SupportQuickResponseEditDto;
}>;

export type SupportQuickResponseEditMutation = { __typename?: 'Mutation' } & {
    supportQuickResponseEdit: {
        __typename?: 'SupportQuickResponse';
    } & SupportQuickResponseFragmentFragment;
};

export type SupportQuickResponseCreateMutationVariables = Exact<{
    dto: SupportQuickResponseCreateDto;
}>;

export type SupportQuickResponseCreateMutation = { __typename?: 'Mutation' } & {
    supportQuickResponseCreate: {
        __typename?: 'SupportQuickResponse';
    } & SupportQuickResponseFragmentFragment;
};

export type SupportQuickResponsesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type SupportQuickResponsesQuery = { __typename?: 'Query' } & {
    supportQuickResponses: { __typename?: 'SupportQuickResponseResultMany' } & {
        edges: Array<
            {
                __typename?: 'SupportQuickResponse';
            } & SupportQuickResponseFragmentFragment
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type SupportQuickResponseByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type SupportQuickResponseByIdQuery = { __typename?: 'Query' } & {
    supportQuickResponseById: {
        __typename?: 'SupportQuickResponse';
    } & SupportQuickResponseFragmentFragment;
};

export type SupportTicketPartFragment = { __typename?: 'SupportTicket' } & Pick<
    SupportTicket,
    | 'id'
    | 'subject'
    | 'create'
    | 'update'
    | 'priority'
    | 'open'
    | 'status'
    | 'unreadReviserMessages'
    | 'unreadMessages'
    | 'reviserName'
    | 'lastOpened'
> & {
        author: { __typename?: 'User' } & Pick<User, 'id' | 'publicName'>;
        messages: Array<
            { __typename?: 'SupportTicketMessage' } & Pick<
                SupportTicketMessage,
                | 'text'
                | 'id'
                | 'userAvatar'
                | 'userPublicName'
                | 'create'
                | 'userId'
            >
        >;
        files: Array<
            { __typename?: 'File' } & Pick<
                File,
                | 'id'
                | 'originalname'
                | 'file'
                | 'mimetype'
                | 'create'
                | 'url'
                | 'uploaderId'
            >
        >;
    };

export type SupportTicketDeleteMessageMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type SupportTicketDeleteMessageMutation = { __typename?: 'Mutation' } & {
    supportTicketDeleteMessage: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

export type UserMyTicketsQueryVariables = Exact<{ [key: string]: never }>;

export type UserMyTicketsQuery = { __typename?: 'Query' } & {
    user_me: { __typename?: 'User' } & Pick<User, 'id'> & {
            tickets: Array<
                { __typename?: 'SupportTicket' } & SupportTicketPartFragment
            >;
        };
};

export type SupportTicketByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type SupportTicketByIdQuery = { __typename?: 'Query' } & {
    supportTicketById: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

export type SupportTicketDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type SupportTicketDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'supportTicketDelete'
>;

export type SupportTicketsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type SupportTicketsQuery = { __typename?: 'Query' } & {
    supportTickets: { __typename?: 'SupportTicketResultMany' } & {
        edges: Array<
            { __typename?: 'SupportTicket' } & SupportTicketPartFragment
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type SupportTicketResetUnreadCounterMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type SupportTicketResetUnreadCounterMutation = {
    __typename?: 'Mutation';
} & {
    supportTicketResetUnreadCounter: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

export type AddMessageToSupportTicketMutationVariables = Exact<{
    message: Scalars['String'];
    id: Scalars['ID'];
}>;

export type AddMessageToSupportTicketMutation = { __typename?: 'Mutation' } & {
    support_ticket_add_message: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

export type SupportTicketSetStatusMutationVariables = Exact<{
    id: Scalars['ID'];
    status: Scalars['String'];
}>;

export type SupportTicketSetStatusMutation = { __typename?: 'Mutation' } & {
    supportTicketSetStatus: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

export type SupportTicketCloseMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type SupportTicketCloseMutation = { __typename?: 'Mutation' } & {
    supportTicketClose: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

export type SupportTicketReopenMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type SupportTicketReopenMutation = { __typename?: 'Mutation' } & {
    supportTicketReopen: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

export type SupportTicketAssignToMutationVariables = Exact<{
    id: Scalars['ID'];
    userId: Scalars['ID'];
}>;

export type SupportTicketAssignToMutation = { __typename?: 'Mutation' } & {
    supportTicketAssignTo: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

export type SupportTicketAddFileMutationVariables = Exact<{
    id: Scalars['ID'];
    fileId: Scalars['ID'];
}>;

export type SupportTicketAddFileMutation = { __typename?: 'Mutation' } & {
    supportTicketAddFile: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

export type EditSupportTicketMutationVariables = Exact<{
    id: Scalars['ID'];
    status?: Maybe<Scalars['String']>;
    priority?: Maybe<Scalars['Int']>;
}>;

export type EditSupportTicketMutation = { __typename?: 'Mutation' } & {
    support_ticket_edit: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

export type Support_Ticket_NewMutationVariables = Exact<{
    data: SupportTicketNewInput;
}>;

export type Support_Ticket_NewMutation = { __typename?: 'Mutation' } & {
    support_ticket_new: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

export type SupportTicketPrioritiesQueryVariables = Exact<{
    [key: string]: never;
}>;

export type SupportTicketPrioritiesQuery = { __typename?: 'Query' } & {
    supportTicketPriorities: Array<
        { __typename?: 'SupportTicketPriorityEnum' } & Pick<
            SupportTicketPriorityEnum,
            'id' | 'label' | 'priority'
        >
    >;
};

export type SupportTicketRevisersQueryVariables = Exact<{
    [key: string]: never;
}>;

export type SupportTicketRevisersQuery = { __typename?: 'Query' } & {
    supportTicketRevisers: Array<
        { __typename?: 'SupportTicketReviserEnum' } & Pick<
            SupportTicketReviserEnum,
            'id' | 'name'
        >
    >;
};

export type ProductTeamspeakPartFragment = {
    __typename?: 'ProductTeamspeak';
} & Pick<
    ProductTeamspeak,
    'id' | 'name' | 'address' | 'create' | 'slot' | 'ts3Link' | 'hasRunningTask'
> & {
        ports: Array<
            { __typename?: 'HostNodePort' } & Pick<HostNodePort, 'id' | 'port'>
        >;
        hostNode: { __typename?: 'HostNode' } & Pick<
            HostNode,
            'id' | 'cpuInfo' | 'name'
        >;
        product: { __typename?: 'Product' } & Pick<
            Product,
            'id' | 'title' | 'locked' | 'expire'
        > & { user: { __typename?: 'User' } & Pick<User, 'id' | 'publicName'> };
        productTemplate: { __typename?: 'ProductTemplateTeamspeak' } & Pick<
            ProductTemplateTeamspeak,
            'id' | 'title'
        >;
    };

export type ProductTeamspeakChangeLabelMutationVariables = Exact<{
    id: Scalars['ID'];
    label: Scalars['String'];
}>;

export type ProductTeamspeakChangeLabelMutation = {
    __typename?: 'Mutation';
} & {
    productTeamspeakChangeLabel: {
        __typename?: 'ProductTeamspeak';
    } & ProductTeamspeakPartFragment;
};

export type ProductTeamspeaksQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductTeamspeaksQuery = { __typename?: 'Query' } & {
    productTeamspeaks: { __typename?: 'ProductTeamspeakResultMany' } & {
        edges: Array<
            { __typename?: 'ProductTeamspeak' } & Pick<
                ProductTeamspeak,
                'id' | 'name' | 'address' | 'create'
            > & {
                    ports: Array<
                        { __typename?: 'HostNodePort' } & Pick<
                            HostNodePort,
                            'id'
                        >
                    >;
                    product: { __typename?: 'Product' } & Pick<
                        Product,
                        'id' | 'expire' | 'title'
                    > & {
                            user: { __typename?: 'User' } & Pick<
                                User,
                                'id' | 'publicName'
                            >;
                        };
                    productTemplate: {
                        __typename?: 'ProductTemplateTeamspeak';
                    } & Pick<ProductTemplateTeamspeak, 'id' | 'title'>;
                }
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type MyProductTeamspeaksQueryVariables = Exact<{ [key: string]: never }>;

export type MyProductTeamspeaksQuery = { __typename?: 'Query' } & {
    productTeamspeaksMy: Array<
        { __typename?: 'ProductTeamspeak' } & Pick<
            ProductTeamspeak,
            'id' | 'name' | 'address' | 'create'
        > & {
                ports: Array<
                    { __typename?: 'HostNodePort' } & Pick<HostNodePort, 'id'>
                >;
                product: { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'title' | 'expire'
                > & {
                        user: { __typename?: 'User' } & Pick<
                            User,
                            'id' | 'publicName'
                        >;
                    };
                productTemplate: {
                    __typename?: 'ProductTemplateTeamspeak';
                } & Pick<ProductTemplateTeamspeak, 'id' | 'title'>;
            }
    >;
};

export type ProductTeamspeakByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductTeamspeakByIdQuery = { __typename?: 'Query' } & {
    productTeamspeakById: {
        __typename?: 'ProductTeamspeak';
    } & ProductTeamspeakPartFragment;
};

export type ProductTeamspeakTokensQueryVariables = Exact<{
    teamspeakId: Scalars['ID'];
}>;

export type ProductTeamspeakTokensQuery = { __typename?: 'Query' } & {
    productTeamspeakTokens: Array<
        { __typename?: 'ProductTeamspeakOutputToken' } & Pick<
            ProductTeamspeakOutputToken,
            'group' | 'token'
        >
    >;
};

export type ProductTeamspeakRunningQueryVariables = Exact<{
    teamspeakId: Scalars['ID'];
}>;

export type ProductTeamspeakRunningQuery = { __typename?: 'Query' } & Pick<
    Query,
    'productTeamspeakRunning'
>;

export type ProductTeamspeakTokenCreateMutationVariables = Exact<{
    teamspeakId: Scalars['ID'];
    group: Scalars['String'];
}>;

export type ProductTeamspeakTokenCreateMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTeamspeakTokenCreate'>;

export type ProductTeamspeakTokenDeleteMutationVariables = Exact<{
    teamspeakId: Scalars['ID'];
    token: Scalars['String'];
}>;

export type ProductTeamspeakTokenDeleteMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTeamspeakTokenDelete'>;

export type ProductTeamspeakExistQueryVariables = Exact<{
    teamspeakId: Scalars['ID'];
}>;

export type ProductTeamspeakExistQuery = { __typename?: 'Query' } & Pick<
    Query,
    'productTeamspeakExist'
>;

export type ProductTeamspeakStartMutationVariables = Exact<{
    teamspeakId: Scalars['ID'];
}>;

export type ProductTeamspeakStartMutation = { __typename?: 'Mutation' } & {
    productTeamspeakStart: {
        __typename?: 'ProductTeamspeak';
    } & ProductTeamspeakPartFragment;
};

export type ProductTeamspeakRemoveMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductTeamspeakRemoveMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productTeamspeakRemove'
>;

export type ProductTeamspeakStopMutationVariables = Exact<{
    teamspeakId: Scalars['ID'];
}>;

export type ProductTeamspeakStopMutation = { __typename?: 'Mutation' } & {
    productTeamspeakStop: {
        __typename?: 'ProductTeamspeak';
    } & ProductTeamspeakPartFragment;
};

export type ProductTeamspeakInstallMutationVariables = Exact<{
    teamspeakId: Scalars['ID'];
}>;

export type ProductTeamspeakInstallMutation = { __typename?: 'Mutation' } & {
    productTeamspeakInstall: {
        __typename?: 'ProductTeamspeak';
    } & ProductTeamspeakPartFragment;
};

export type ProductTemplateDomainPartFragment = {
    __typename?: 'ProductTemplateDomain';
} & Pick<
    ProductTemplateDomain,
    | 'id'
    | 'title'
    | 'setup'
    | 'basePrice'
    | 'active'
    | 'gTld'
    | 'update'
    | 'attributes'
    | 'urlKey'
> & {
        options: Array<
            { __typename?: 'ProductTemplateOption' } & Pick<
                ProductTemplateOption,
                'id'
            >
        >;
    };

export type ProductTemplateDomainByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductTemplateDomainByIdQuery = { __typename?: 'Query' } & {
    productTemplateDomainById: {
        __typename?: 'ProductTemplateDomain';
    } & ProductTemplateDomainPartFragment;
};

export type ProductTemplateDomainsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductTemplateDomainsQuery = { __typename?: 'Query' } & {
    productTemplateDomains: {
        __typename?: 'ProductTemplateDomainResultMany';
    } & {
        edges: Array<
            { __typename?: 'ProductTemplateDomain' } & Pick<
                ProductTemplateDomain,
                | 'id'
                | 'urlKey'
                | 'title'
                | 'setup'
                | 'basePrice'
                | 'gTld'
                | 'active'
                | 'update'
            > & {
                    options: Array<
                        { __typename?: 'ProductTemplateOption' } & Pick<
                            ProductTemplateOption,
                            'id'
                        >
                    >;
                }
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type CreateProductTemplateDomainMutationVariables = Exact<{
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    gTld: Scalars['String'];
    active: Scalars['Boolean'];
}>;

export type CreateProductTemplateDomainMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateDomainCreate: {
        __typename?: 'ProductTemplateDomain';
    } & Pick<ProductTemplateDomain, 'id'>;
};

export type EditProductTemplateDomainMutationVariables = Exact<{
    id: Scalars['ID'];
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    gTld: Scalars['String'];
    active: Scalars['Boolean'];
}>;

export type EditProductTemplateDomainMutation = { __typename?: 'Mutation' } & {
    productTemplateDomainEdit: {
        __typename?: 'ProductTemplateDomain';
    } & ProductTemplateDomainPartFragment;
};

export type DeleteProductTemplateDomainMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteProductTemplateDomainMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTemplateDomainDelete'>;

export type ProductTemplateExtendPeriodsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductTemplateExtendPeriodsQuery = { __typename?: 'Query' } & {
    productTemplateExtendPeriods: {
        __typename?: 'ProductTemplateExtendPeriodResultMany';
    } & {
        edges: Array<
            { __typename?: 'ProductTemplateExtendPeriod' } & Pick<
                ProductTemplateExtendPeriod,
                | 'id'
                | 'expression'
                | 'discount'
                | 'discountFactor'
                | 'globalGroup'
            >
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type ProductTemplateExtendPeriodByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductTemplateExtendPeriodByIdQuery = { __typename?: 'Query' } & {
    productTemplateExtendPeriodById: {
        __typename?: 'ProductTemplateExtendPeriod';
    } & Pick<
        ProductTemplateExtendPeriod,
        'id' | 'expression' | 'discount' | 'discountFactor' | 'globalGroup'
    >;
};

export type CreateProductTemplateExtendPeriodMutationVariables = Exact<{
    expression: Scalars['String'];
    globalGroup: Scalars['String'];
    discountFactor: Scalars['Float'];
    discount: Scalars['Float'];
}>;

export type CreateProductTemplateExtendPeriodMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateExtendPeriodCreate: {
        __typename?: 'ProductTemplateExtendPeriod';
    } & Pick<ProductTemplateExtendPeriod, 'id'>;
};

export type EditProductTemplateExtendPeriodMutationVariables = Exact<{
    id: Scalars['ID'];
    expression: Scalars['String'];
    globalGroup: Scalars['String'];
    discountFactor: Scalars['Float'];
    discount: Scalars['Float'];
}>;

export type EditProductTemplateExtendPeriodMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateExtendPeriodEdit: {
        __typename?: 'ProductTemplateExtendPeriod';
    } & Pick<
        ProductTemplateExtendPeriod,
        'id' | 'expression' | 'discount' | 'discountFactor' | 'globalGroup'
    >;
};

export type DeleteProductTemplateExtendPeriodMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteProductTemplateExtendPeriodMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTemplateExtendPeriodDelete'>;

export type ProductTemplateGameserverPartFragment = {
    __typename?: 'ProductTemplateGameserver';
} & Pick<
    ProductTemplateGameserver,
    | 'id'
    | 'title'
    | 'setup'
    | 'basePrice'
    | 'active'
    | 'update'
    | 'hostNodeFilterKey'
    | 'attributes'
    | 'urlKey'
> & {
        memory?: Maybe<
            { __typename?: 'ProductTemplateOption' } & Pick<
                ProductTemplateOption,
                'id'
            >
        >;
        slot?: Maybe<
            { __typename?: 'ProductTemplateOption' } & Pick<
                ProductTemplateOption,
                'id'
            >
        >;
        options: Array<
            { __typename?: 'ProductTemplateOption' } & Pick<
                ProductTemplateOption,
                'id'
            >
        >;
        templateOptions: Array<
            { __typename?: 'ProductTemplateOption' } & Pick<
                ProductTemplateOption,
                'id'
            >
        >;
    };

export type ProductTemplateGameserverByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductTemplateGameserverByIdQuery = { __typename?: 'Query' } & {
    productTemplateGameserverById: {
        __typename?: 'ProductTemplateGameserver';
    } & ProductTemplateGameserverPartFragment;
};

export type ProductTemplateGameserversQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductTemplateGameserversQuery = { __typename?: 'Query' } & {
    productTemplateGameservers: {
        __typename?: 'ProductTemplateGameserverResultMany';
    } & {
        edges: Array<
            { __typename?: 'ProductTemplateGameserver' } & Pick<
                ProductTemplateGameserver,
                | 'id'
                | 'urlKey'
                | 'title'
                | 'setup'
                | 'basePrice'
                | 'active'
                | 'update'
            > & {
                    memory?: Maybe<
                        { __typename?: 'ProductTemplateOption' } & Pick<
                            ProductTemplateOption,
                            'id'
                        >
                    >;
                    slot?: Maybe<
                        { __typename?: 'ProductTemplateOption' } & Pick<
                            ProductTemplateOption,
                            'id'
                        >
                    >;
                    options: Array<
                        { __typename?: 'ProductTemplateOption' } & Pick<
                            ProductTemplateOption,
                            'id'
                        >
                    >;
                }
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type CreateProductTemplateGameserverMutationVariables = Exact<{
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    active: Scalars['Boolean'];
    slotOptionId?: Maybe<Scalars['ID']>;
    memoryOptionId?: Maybe<Scalars['ID']>;
}>;

export type CreateProductTemplateGameserverMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateGameserverCreate: {
        __typename?: 'ProductTemplateGameserver';
    } & Pick<ProductTemplateGameserver, 'id'>;
};

export type EditProductTemplateGameserverMutationVariables = Exact<{
    id: Scalars['ID'];
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    active: Scalars['Boolean'];
    slotOptionId?: Maybe<Scalars['ID']>;
    memoryOptionId?: Maybe<Scalars['ID']>;
    assignedGameserverTemplates?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    optionIds?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;

export type EditProductTemplateGameserverMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateGameserverEdit: {
        __typename?: 'ProductTemplateGameserver';
    } & ProductTemplateGameserverPartFragment;
};

export type DeleteProductTemplateGameserverMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteProductTemplateGameserverMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTemplateGameserverDelete'>;

export type ProductTemplateOptionByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductTemplateOptionByIdQuery = { __typename?: 'Query' } & {
    productTemplateOptionById: { __typename?: 'ProductTemplateOption' } & Pick<
        ProductTemplateOption,
        'id' | 'title' | 'display' | 'create' | 'upgradeable'
    > & {
            variants: Array<
                { __typename?: 'ProductTemplateOptionVariant' } & Pick<
                    ProductTemplateOptionVariant,
                    | 'id'
                    | 'priceMultiplier'
                    | 'price'
                    | 'priceSetup'
                    | 'key'
                    | 'label'
                    | 'value'
                    | 'meta'
                > & {
                        siblings: Array<
                            {
                                __typename?: 'ProductTemplateOptionVariant';
                            } & Pick<ProductTemplateOptionVariant, 'id'>
                        >;
                    }
            >;
        };
};

export type ProductTemplateOptionsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductTemplateOptionsQuery = { __typename?: 'Query' } & {
    productTemplateOptions: {
        __typename?: 'ProductTemplateOptionResultMany';
    } & {
        edges: Array<
            { __typename?: 'ProductTemplateOption' } & Pick<
                ProductTemplateOption,
                'id' | 'title' | 'display' | 'create'
            > & {
                    variants: Array<
                        { __typename?: 'ProductTemplateOptionVariant' } & Pick<
                            ProductTemplateOptionVariant,
                            | 'id'
                            | 'priceMultiplier'
                            | 'price'
                            | 'priceSetup'
                            | 'key'
                            | 'label'
                            | 'value'
                            | 'meta'
                        > & {
                                siblings: Array<
                                    {
                                        __typename?: 'ProductTemplateOptionVariant';
                                    } & Pick<ProductTemplateOptionVariant, 'id'>
                                >;
                            }
                    >;
                }
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type CreateProductTemplateOptionMutationVariables = Exact<{
    title: Scalars['String'];
    display: Scalars['String'];
}>;

export type CreateProductTemplateOptionMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateOptionCreate: {
        __typename?: 'ProductTemplateOption';
    } & Pick<ProductTemplateOption, 'id'>;
};

export type EditProductTemplateOptionMutationVariables = Exact<{
    id: Scalars['ID'];
    title: Scalars['String'];
    display: Scalars['String'];
    upgradeable: Scalars['Boolean'];
}>;

export type EditProductTemplateOptionMutation = { __typename?: 'Mutation' } & {
    productTemplateOptionEdit: { __typename?: 'ProductTemplateOption' } & Pick<
        ProductTemplateOption,
        'id'
    >;
};

export type ProductTemplateOptionVariantByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductTemplateOptionVariantByIdQuery = { __typename?: 'Query' } & {
    productTemplateOptionVariantById: {
        __typename?: 'ProductTemplateOptionVariant';
    } & Pick<
        ProductTemplateOptionVariant,
        | 'id'
        | 'priceMultiplier'
        | 'price'
        | 'priceSetup'
        | 'key'
        | 'sort'
        | 'hidden'
        | 'label'
        | 'value'
        | 'meta'
    > & {
            siblings: Array<
                { __typename?: 'ProductTemplateOptionVariant' } & Pick<
                    ProductTemplateOptionVariant,
                    'id'
                >
            >;
        };
};

export type ProductTemplateOptionVariantsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductTemplateOptionVariantsQuery = { __typename?: 'Query' } & {
    productTemplateOptionVariants: {
        __typename?: 'ProductTemplateOptionVariantResultMany';
    } & {
        edges: Array<
            { __typename?: 'ProductTemplateOptionVariant' } & Pick<
                ProductTemplateOptionVariant,
                | 'id'
                | 'priceMultiplier'
                | 'price'
                | 'priceSetup'
                | 'key'
                | 'label'
                | 'value'
                | 'meta'
                | 'sort'
            > & {
                    siblings: Array<
                        { __typename?: 'ProductTemplateOptionVariant' } & Pick<
                            ProductTemplateOptionVariant,
                            'id'
                        >
                    >;
                    option?: Maybe<
                        { __typename?: 'ProductTemplateOption' } & Pick<
                            ProductTemplateOption,
                            'id' | 'title'
                        >
                    >;
                }
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type CreateProductTemplateOptionVariantMutationVariables = Exact<{
    optionId: Scalars['ID'];
    key: Scalars['String'];
    sort: Scalars['Int'];
    label: Scalars['String'];
    price: Scalars['Float'];
    priceMultiplier: Scalars['Float'];
    priceSetup: Scalars['Float'];
}>;

export type CreateProductTemplateOptionVariantMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateOptionVariantCreate: {
        __typename?: 'ProductTemplateOptionVariant';
    } & Pick<ProductTemplateOptionVariant, 'id'>;
};

export type EditProductTemplateOptionVariantMutationVariables = Exact<{
    id: Scalars['ID'];
    key: Scalars['String'];
    sort: Scalars['Int'];
    label: Scalars['String'];
    price: Scalars['Float'];
    value?: Maybe<Scalars['String']>;
    priceMultiplier: Scalars['Float'];
    priceSetup: Scalars['Float'];
    hidden?: Maybe<Scalars['Boolean']>;
}>;

export type EditProductTemplateOptionVariantMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateOptionVariantEdit: {
        __typename?: 'ProductTemplateOptionVariant';
    } & Pick<
        ProductTemplateOptionVariant,
        | 'id'
        | 'priceMultiplier'
        | 'sort'
        | 'hidden'
        | 'price'
        | 'priceSetup'
        | 'key'
        | 'label'
        | 'value'
        | 'meta'
    > & {
            siblings: Array<
                { __typename?: 'ProductTemplateOptionVariant' } & Pick<
                    ProductTemplateOptionVariant,
                    'id'
                >
            >;
        };
};

export type DeleteProductTemplateOptionVariantMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteProductTemplateOptionVariantMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTemplateOptionVariantDelete'>;

export type ProductTemplateSimplePartFragment = {
    __typename?: 'ProductTemplateSimple';
} & Pick<
    ProductTemplateSimple,
    | 'id'
    | 'title'
    | 'setup'
    | 'basePrice'
    | 'active'
    | 'update'
    | 'attributes'
    | 'includedGTld'
    | 'urlKey'
> & {
        options: Array<
            { __typename?: 'ProductTemplateOption' } & Pick<
                ProductTemplateOption,
                'id'
            >
        >;
        periods: Array<
            { __typename?: 'ProductTemplateExtendPeriod' } & Pick<
                ProductTemplateExtendPeriod,
                'id'
            >
        >;
        availablePeriods: Array<
            { __typename?: 'ProductTemplateExtendPeriod' } & Pick<
                ProductTemplateExtendPeriod,
                'id'
            >
        >;
    };

export type ProductTemplateSimpleByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductTemplateSimpleByIdQuery = { __typename?: 'Query' } & {
    productTemplateSimpleById: {
        __typename?: 'ProductTemplateSimple';
    } & ProductTemplateSimplePartFragment;
};

export type ProductTemplateSimplesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductTemplateSimplesQuery = { __typename?: 'Query' } & {
    productTemplateSimples: {
        __typename?: 'ProductTemplateSimpleResultMany';
    } & {
        edges: Array<
            { __typename?: 'ProductTemplateSimple' } & Pick<
                ProductTemplateSimple,
                | 'id'
                | 'urlKey'
                | 'title'
                | 'setup'
                | 'basePrice'
                | 'active'
                | 'update'
            > & {
                    options: Array<
                        { __typename?: 'ProductTemplateOption' } & Pick<
                            ProductTemplateOption,
                            'id'
                        >
                    >;
                }
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type CreateProductTemplateSimpleMutationVariables = Exact<{
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    active: Scalars['Boolean'];
}>;

export type CreateProductTemplateSimpleMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateSimpleCreate: {
        __typename?: 'ProductTemplateSimple';
    } & Pick<ProductTemplateSimple, 'id'>;
};

export type EditProductTemplateSimpleMutationVariables = Exact<{
    id: Scalars['ID'];
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    active: Scalars['Boolean'];
    optionIds: Array<Scalars['ID']> | Scalars['ID'];
    includedGTld?: Maybe<Scalars['String']>;
    extendIntervalIds?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;

export type EditProductTemplateSimpleMutation = { __typename?: 'Mutation' } & {
    productTemplateSimpleEdit: {
        __typename?: 'ProductTemplateSimple';
    } & ProductTemplateSimplePartFragment;
};

export type DeleteProductTemplateSimpleMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteProductTemplateSimpleMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTemplateSimpleDelete'>;

export type ProductTemplateTeamspeakPartFragment = {
    __typename?: 'ProductTemplateTeamspeak';
} & Pick<
    ProductTemplateTeamspeak,
    | 'id'
    | 'title'
    | 'setup'
    | 'basePrice'
    | 'active'
    | 'update'
    | 'attributes'
    | 'urlKey'
> & {
        slot: { __typename?: 'ProductTemplateOption' } & Pick<
            ProductTemplateOption,
            'id'
        >;
        options: Array<
            { __typename?: 'ProductTemplateOption' } & Pick<
                ProductTemplateOption,
                'id'
            >
        >;
    };

export type ProductTemplateTeamspeakByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductTemplateTeamspeakByIdQuery = { __typename?: 'Query' } & {
    productTemplateTeamspeakById: {
        __typename?: 'ProductTemplateTeamspeak';
    } & ProductTemplateTeamspeakPartFragment;
};

export type ProductTemplateTeamspeaksQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductTemplateTeamspeaksQuery = { __typename?: 'Query' } & {
    productTemplateTeamspeaks: {
        __typename?: 'ProductTemplateTeamspeakResultMany';
    } & {
        edges: Array<
            { __typename?: 'ProductTemplateTeamspeak' } & Pick<
                ProductTemplateTeamspeak,
                | 'id'
                | 'urlKey'
                | 'title'
                | 'setup'
                | 'basePrice'
                | 'active'
                | 'update'
            > & {
                    slot: { __typename?: 'ProductTemplateOption' } & Pick<
                        ProductTemplateOption,
                        'id'
                    >;
                    options: Array<
                        { __typename?: 'ProductTemplateOption' } & Pick<
                            ProductTemplateOption,
                            'id'
                        >
                    >;
                }
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type CreateProductTemplateTeamspeakMutationVariables = Exact<{
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    active: Scalars['Boolean'];
    slotOptionId: Scalars['ID'];
}>;

export type CreateProductTemplateTeamspeakMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateTeamspeakCreate: {
        __typename?: 'ProductTemplateTeamspeak';
    } & Pick<ProductTemplateTeamspeak, 'id'>;
};

export type EditProductTemplateTeamspeakMutationVariables = Exact<{
    id: Scalars['ID'];
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    active: Scalars['Boolean'];
    slotOptionId: Scalars['ID'];
}>;

export type EditProductTemplateTeamspeakMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateTeamspeakEdit: {
        __typename?: 'ProductTemplateTeamspeak';
    } & ProductTemplateTeamspeakPartFragment;
};

export type DeleteProductTemplateTeamspeakMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteProductTemplateTeamspeakMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTemplateTeamspeakDelete'>;

export type ProductTemplateVserverPartFragment = {
    __typename?: 'ProductTemplateVserver';
} & Pick<
    ProductTemplateVserver,
    | 'id'
    | 'urlKey'
    | 'title'
    | 'setup'
    | 'basePrice'
    | 'active'
    | 'platform'
    | 'update'
    | 'hostNodeFilterKey'
> & {
        memory: { __typename?: 'ProductTemplateOptionVariant' } & Pick<
            ProductTemplateOptionVariant,
            'id'
        >;
        space: { __typename?: 'ProductTemplateOptionVariant' } & Pick<
            ProductTemplateOptionVariant,
            'id'
        >;
        cores: { __typename?: 'ProductTemplateOptionVariant' } & Pick<
            ProductTemplateOptionVariant,
            'id'
        >;
    };

export type ProductTemplateVserversQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductTemplateVserversQuery = { __typename?: 'Query' } & {
    productTemplateVservers: {
        __typename?: 'ProductTemplateVserverResultMany';
    } & {
        edges: Array<
            {
                __typename?: 'ProductTemplateVserver';
            } & ProductTemplateVserverPartFragment
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type ProductTemplateVserverByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductTemplateVserverByIdQuery = { __typename?: 'Query' } & {
    productTemplateVserverById: {
        __typename?: 'ProductTemplateVserver';
    } & ProductTemplateVserverPartFragment;
};

export type CreateProductTemplateVserverMutationVariables = Exact<{
    data: ProductTemplateVserverCreateInput;
}>;

export type CreateProductTemplateVserverMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateVserverCreate: {
        __typename?: 'ProductTemplateVserver';
    } & ProductTemplateVserverPartFragment;
};

export type EditProductTemplateVserverMutationVariables = Exact<{
    data: ProductTemplateVserverEditInput;
}>;

export type EditProductTemplateVserverMutation = { __typename?: 'Mutation' } & {
    productTemplateVserverEdit: {
        __typename?: 'ProductTemplateVserver';
    } & ProductTemplateVserverPartFragment;
};

export type DeleteProductTemplateVserverMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteProductTemplateVserverMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTemplateVserverDelete'>;

export type TranslationPartFragment = { __typename?: 'Translation' } & Pick<
    Translation,
    'id' | 'language' | 'key' | 'value'
>;

export type TranslationsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type TranslationsQuery = { __typename?: 'Query' } & {
    translations: { __typename?: 'TranslationResultMany' } & {
        edges: Array<{ __typename?: 'Translation' } & TranslationPartFragment>;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type TranslationByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type TranslationByIdQuery = { __typename?: 'Query' } & {
    translationById: { __typename?: 'Translation' } & TranslationPartFragment;
};

export type TranslationEditMutationVariables = Exact<{
    id: Scalars['ID'];
    value: Scalars['String'];
    key: Scalars['String'];
    language: Scalars['String'];
}>;

export type TranslationEditMutation = { __typename?: 'Mutation' } & {
    translationEdit: { __typename?: 'Translation' } & TranslationPartFragment;
};

export type TranslationCreateMutationVariables = Exact<{
    [key: string]: never;
}>;

export type TranslationCreateMutation = { __typename?: 'Mutation' } & {
    translationCreate: { __typename?: 'Translation' } & TranslationPartFragment;
};

export type TranslationDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type TranslationDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'translationDelete'
>;

export type UserPartFragment = { __typename?: 'User' } & Pick<
    User,
    | 'avatar'
    | 'nickname'
    | 'credits'
    | 'email'
    | 'active'
    | 'supportId'
    | 'id'
    | 'forceEmailLogin'
> & { localAvatar?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>> };

export type UserSetActiveMutationVariables = Exact<{
    id: Scalars['ID'];
    active: Scalars['Boolean'];
}>;

export type UserSetActiveMutation = { __typename?: 'Mutation' } & {
    userSetActive: { __typename?: 'User' } & UserPartFragment;
};

export type PingQueryVariables = Exact<{ [key: string]: never }>;

export type PingQuery = { __typename?: 'Query' } & Pick<Query, 'ping'>;

export type UserPartAddressFragment = { __typename?: 'UserAddress' } & Pick<
    UserAddress,
    | 'firstname'
    | 'lastname'
    | 'street1'
    | 'zip'
    | 'country'
    | 'title'
    | 'city'
    | 'birthdate'
    | 'phone'
    | 'phoneMobile'
    | 'company'
    | 'vatId'
    | 'id'
    | 'verified'
    | 'vat'
> & {
        verifyDocument?: Maybe<
            { __typename?: 'File' } & Pick<
                File,
                'id' | 'originalname' | 'url' | 'create'
            >
        >;
    };

export type UsersQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type UsersQuery = { __typename?: 'Query' } & {
    users: { __typename?: 'UserResultMany' } & {
        edges: Array<{ __typename?: 'User' } & UserPartFragment>;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type UserTestMyPasswordMutationVariables = Exact<{
    password: Scalars['String'];
}>;

export type UserTestMyPasswordMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'userTestMyPassword'
>;

export type UserByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type UserByIdQuery = { __typename?: 'Query' } & {
    userById: { __typename?: 'User' } & Pick<
        User,
        | 'verifyLevel'
        | 'lastLogin'
        | 'publicName'
        | 'customerId'
        | 'vat'
        | 'create'
        | 'active'
        | 'supportId'
    > & {
            address?: Maybe<
                { __typename?: 'UserAddress' } & UserPartAddressFragment
            >;
            tickets: Array<
                { __typename?: 'SupportTicket' } & Pick<
                    SupportTicket,
                    'id' | 'create' | 'open' | 'subject' | 'status' | 'category'
                >
            >;
            products: Array<{ __typename?: 'Product' } & Pick<Product, 'id'>>;
            gameservers: Array<
                { __typename?: 'ProductGameserver' } & Pick<
                    ProductGameserver,
                    'id' | 'name'
                > & {
                        product?: Maybe<
                            { __typename?: 'Product' } & Pick<
                                Product,
                                'id' | 'create' | 'expire'
                            >
                        >;
                    }
            >;
            teamspeaks: Array<
                { __typename?: 'ProductTeamspeak' } & Pick<
                    ProductTeamspeak,
                    'id' | 'name'
                > & {
                        product: { __typename?: 'Product' } & Pick<
                            Product,
                            'id' | 'create' | 'expire'
                        >;
                    }
            >;
            vservers: Array<
                { __typename?: 'ProductVserver' } & Pick<
                    ProductVserver,
                    'id' | 'name'
                > & {
                        ips: Array<
                            { __typename?: 'ProductVserverIp' } & Pick<
                                ProductVserverIp,
                                'ip'
                            >
                        >;
                        product: { __typename?: 'Product' } & Pick<
                            Product,
                            'id' | 'create' | 'expire'
                        >;
                    }
            >;
            domains: Array<
                { __typename?: 'ProductDomain' } & Pick<
                    ProductDomain,
                    | 'id'
                    | 'authcode'
                    | 'requestNewAuthcode'
                    | 'registered'
                    | 'tld'
                    | 'name'
                > & {
                        product: { __typename?: 'Product' } & Pick<
                            Product,
                            'id' | 'create' | 'expire'
                        >;
                    }
            >;
            simples: Array<
                { __typename?: 'ProductSimple' } & Pick<
                    ProductSimple,
                    'id' | 'name' | 'description'
                > & {
                        product: { __typename?: 'Product' } & Pick<
                            Product,
                            'id' | 'create' | 'expire'
                        >;
                    }
            >;
            transactions: Array<
                { __typename?: 'FinanceTransaction' } & Pick<
                    FinanceTransaction,
                    'id' | 'type' | 'billId' | 'total' | 'create'
                > & {
                        charge?: Maybe<
                            { __typename?: 'FinanceCharge' } & Pick<
                                FinanceCharge,
                                'id' | 'create'
                            >
                        >;
                    }
            >;
        } & UserPartFragment;
};

export type MeLoggedInQueryVariables = Exact<{ [key: string]: never }>;

export type MeLoggedInQuery = { __typename?: 'Query' } & Pick<
    Query,
    'user_is_login'
>;

export type LoginMutationVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'userLoginWithEmailToken'
>;

export type AdminLoginAsUserMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type AdminLoginAsUserMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'user_admin_login'
>;

export type UserMakeFeedbackMutationVariables = Exact<{
    availableForMoreFeedback?: Maybe<Scalars['Boolean']>;
    feedbackMessage?: Maybe<Scalars['String']>;
    feedbackSatisfied?: Maybe<Scalars['Boolean']>;
}>;

export type UserMakeFeedbackMutation = { __typename?: 'Mutation' } & {
    userMakeFeedback: { __typename?: 'User' } & Pick<
        User,
        'id' | 'canMakeFeedback'
    >;
};

export type UserMeQueryVariables = Exact<{ [key: string]: never }>;

export type UserMeQuery = { __typename?: 'Query' } & {
    user_me: { __typename?: 'User' } & Pick<
        User,
        'supportId' | 'publicName' | 'canMakeFeedback'
    > & {
            address?: Maybe<
                { __typename?: 'UserAddress' } & UserPartAddressFragment
            >;
        } & UserPartFragment;
};

export type UserAddressAddVerifyDocumentMutationVariables = Exact<{
    fileId: Scalars['ID'];
}>;

export type UserAddressAddVerifyDocumentMutation = {
    __typename?: 'Mutation';
} & {
    userAddressAddVerifyDocument: { __typename?: 'User' } & Pick<
        User,
        'supportId'
    > & {
            address?: Maybe<
                { __typename?: 'UserAddress' } & UserPartAddressFragment
            >;
        } & UserPartFragment;
};

export type UserAddressDelVerifyDocumentMutationVariables = Exact<{
    [key: string]: never;
}>;

export type UserAddressDelVerifyDocumentMutation = {
    __typename?: 'Mutation';
} & {
    userAddressDelVerifyDocument: { __typename?: 'User' } & Pick<
        User,
        'supportId'
    > & {
            address?: Maybe<
                { __typename?: 'UserAddress' } & UserPartAddressFragment
            >;
        } & UserPartFragment;
};

export type UserMeCustomCreditsQueryVariables = Exact<{ [key: string]: never }>;

export type UserMeCustomCreditsQuery = { __typename?: 'Query' } & {
    user_me: { __typename?: 'User' } & Pick<
        User,
        | 'id'
        | 'bonusCredits'
        | 'importedCredits'
        | 'credits'
        | 'canHaveBonusCredits'
    >;
};

export type UserCustomCreditsQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type UserCustomCreditsQuery = { __typename?: 'Query' } & {
    userById: { __typename?: 'User' } & Pick<
        User,
        'id' | 'bonusCredits' | 'importedCredits' | 'credits'
    >;
};

export type UserEditSelfGeneralMutationVariables = Exact<{
    new_password?: Maybe<Scalars['String']>;
    nickname: Scalars['String'];
    forceEmailLogin?: Maybe<Scalars['Boolean']>;
    localAvatarId?: Maybe<Scalars['ID']>;
}>;

export type UserEditSelfGeneralMutation = { __typename?: 'Mutation' } & {
    userEditSelfGeneral: { __typename?: 'User' } & {
        address?: Maybe<
            { __typename?: 'UserAddress' } & UserPartAddressFragment
        >;
    } & UserPartFragment;
};

export type UserEditSelfAddressMutationVariables = Exact<{
    data: UserInputUserEditAddress;
}>;

export type UserEditSelfAddressMutation = { __typename?: 'Mutation' } & {
    userEditSelfAddress: { __typename?: 'User' } & {
        address?: Maybe<
            { __typename?: 'UserAddress' } & UserPartAddressFragment
        >;
    } & UserPartFragment;
};

export type UserEditSelfEmailMutationVariables = Exact<{
    email: Scalars['String'];
    password: Scalars['String'];
}>;

export type UserEditSelfEmailMutation = { __typename?: 'Mutation' } & {
    userEditSelfEmail: { __typename?: 'User' } & UserPartFragment;
};

export type UserCountriesQueryVariables = Exact<{ [key: string]: never }>;

export type UserCountriesQuery = { __typename?: 'Query' } & Pick<
    Query,
    'userCountries'
>;

export type RegisterNewUserMutationVariables = Exact<{
    googleCaptcha: Scalars['String'];
    data: UserInputRegister;
}>;

export type RegisterNewUserMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'user_register'
>;

export type UserAdminLogoutMutationVariables = Exact<{ [key: string]: never }>;

export type UserAdminLogoutMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'userAdminLogout'
>;

export type User_VerifyMutationVariables = Exact<{
    token: Scalars['String'];
}>;

export type User_VerifyMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'user_verify'
>;

export type Reset_PasswordMutationVariables = Exact<{
    token: Scalars['String'];
    password: Scalars['String'];
}>;

export type Reset_PasswordMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'user_reset_password_token'
>;

export type UserResetPasswordMutationVariables = Exact<{
    email: Scalars['String'];
    captcha: Scalars['String'];
}>;

export type UserResetPasswordMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'user_reset_password'
>;

export type ProductAdminInfoQueryVariables = Exact<{ [key: string]: never }>;

export type ProductAdminInfoQuery = { __typename?: 'Query' } & {
    productAdminInfo: { __typename?: 'ProductAdminInfoResultDto' } & Pick<
        ProductAdminInfoResultDto,
        | 'domains'
        | 'vservers'
        | 'gameservers'
        | 'vserverFreeIps'
        | 'teamspeaks'
        | 'simples'
        | 'activeUsers'
    > & {
            userRegisterYesterday: Array<
                { __typename?: 'ProductAdminInfoPointMapDto' } & Pick<
                    ProductAdminInfoPointMapDto,
                    'label' | 'value'
                >
            >;
            userRegisterToDay: Array<
                { __typename?: 'ProductAdminInfoPointMapDto' } & Pick<
                    ProductAdminInfoPointMapDto,
                    'label' | 'value'
                >
            >;
            chargesToday: Array<
                { __typename?: 'ProductAdminInfoPointMapDto' } & Pick<
                    ProductAdminInfoPointMapDto,
                    'label' | 'value'
                >
            >;
            chargesYesterday: Array<
                { __typename?: 'ProductAdminInfoPointMapDto' } & Pick<
                    ProductAdminInfoPointMapDto,
                    'label' | 'value'
                >
            >;
            hostNodeFree: Array<
                { __typename?: 'HostNodeTypeInfoUsageDto' } & Pick<
                    HostNodeTypeInfoUsageDto,
                    'type' | 'free' | 'filter'
                >
            >;
        };
};

export type UserAddresssQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type UserAddresssQuery = { __typename?: 'Query' } & {
    userAddresss: { __typename?: 'UserAddressResultMany' } & {
        edges: Array<
            { __typename?: 'UserAddress' } & Pick<
                UserAddress,
                | 'firstname'
                | 'lastname'
                | 'street1'
                | 'zip'
                | 'country'
                | 'title'
                | 'city'
                | 'birthdate'
                | 'phone'
                | 'phoneMobile'
                | 'company'
                | 'vatId'
                | 'create'
                | 'id'
                | 'verified'
                | 'vat'
            > & {
                    user: { __typename?: 'User' } & Pick<User, 'id'>;
                    verifyDocument?: Maybe<
                        { __typename?: 'File' } & Pick<
                            File,
                            'id' | 'originalname' | 'url' | 'create'
                        >
                    >;
                }
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type UserAddressConfirmVerifyMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type UserAddressConfirmVerifyMutation = { __typename?: 'Mutation' } & {
    userAddressConfirmVerify: { __typename?: 'UserAddress' } & Pick<
        UserAddress,
        | 'firstname'
        | 'lastname'
        | 'street1'
        | 'zip'
        | 'country'
        | 'title'
        | 'city'
        | 'birthdate'
        | 'phone'
        | 'phoneMobile'
        | 'company'
        | 'vatId'
        | 'create'
        | 'id'
        | 'verified'
        | 'vat'
    > & {
            user: { __typename?: 'User' } & Pick<User, 'id'>;
            verifyDocument?: Maybe<
                { __typename?: 'File' } & Pick<
                    File,
                    'id' | 'originalname' | 'url' | 'create'
                >
            >;
        };
};

export type UserAddressRejectVerifyMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type UserAddressRejectVerifyMutation = { __typename?: 'Mutation' } & {
    userAddressRejectVerify: { __typename?: 'UserAddress' } & Pick<
        UserAddress,
        | 'firstname'
        | 'lastname'
        | 'street1'
        | 'zip'
        | 'country'
        | 'title'
        | 'city'
        | 'birthdate'
        | 'phone'
        | 'phoneMobile'
        | 'company'
        | 'vatId'
        | 'create'
        | 'id'
        | 'verified'
        | 'vat'
    > & {
            user: { __typename?: 'User' } & Pick<User, 'id'>;
            verifyDocument?: Maybe<
                { __typename?: 'File' } & Pick<
                    File,
                    'id' | 'originalname' | 'url' | 'create'
                >
            >;
        };
};

export type UserCommentsByUserQueryVariables = Exact<{
    userId: Scalars['ID'];
}>;

export type UserCommentsByUserQuery = { __typename?: 'Query' } & {
    userCommentsByUser: Array<
        { __typename?: 'UserComment' } & Pick<
            UserComment,
            'message' | 'id' | 'create'
        >
    >;
};

export type UserCommentCreateMutationVariables = Exact<{
    userId: Scalars['ID'];
    message: Scalars['String'];
}>;

export type UserCommentCreateMutation = { __typename?: 'Mutation' } & {
    userCommentCreate: { __typename?: 'UserComment' } & Pick<
        UserComment,
        'message' | 'id' | 'create'
    >;
};

export type MyUserOAuthTokensQueryVariables = Exact<{ [key: string]: never }>;

export type MyUserOAuthTokensQuery = { __typename?: 'Query' } & {
    myUserOAuthTokens: Array<
        { __typename?: 'UserOauthToken' } & Pick<
            UserOauthToken,
            'id' | 'service' | 'confirmed'
        >
    >;
};

export type UserOauthTokenConfirmMutationVariables = Exact<{
    password: Scalars['String'];
    id: Scalars['ID'];
}>;

export type UserOauthTokenConfirmMutation = { __typename?: 'Mutation' } & {
    userOauthTokenConfirm: { __typename?: 'UserOauthToken' } & Pick<
        UserOauthToken,
        'id' | 'service' | 'confirmed'
    >;
};

export type UserOAuthDeleteTokenMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type UserOAuthDeleteTokenMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'userOAuthDeleteToken'
>;

export type ProductVserverPartFragment = {
    __typename?: 'ProductVserver';
} & Pick<
    ProductVserver,
    | 'id'
    | 'create'
    | 'name'
    | 'hasRunningTask'
    | 'sshPassword'
    | 'vserverId'
    | 'cores'
    | 'memory'
    | 'platform'
    | 'diskspace'
    | 'networkSpeed'
    | 'attributes'
> & {
        ips: Array<
            { __typename?: 'ProductVserverIp' } & Pick<
                ProductVserverIp,
                'id' | 'ip' | 'active' | 'gateway' | 'netmask'
            >
        >;
        hostNode: { __typename?: 'HostNode' } & Pick<
            HostNode,
            'id' | 'name' | 'cpuInfo' | 'cpuCores'
        >;
        product: { __typename?: 'Product' } & Pick<
            Product,
            'id' | 'locked' | 'expire'
        > & { user: { __typename?: 'User' } & Pick<User, 'id' | 'publicName'> };
        images: Array<
            { __typename?: 'ProductVserverImage' } & Pick<
                ProductVserverImage,
                'id'
            > & {
                    logo?: Maybe<
                        { __typename?: 'File' } & Pick<File, 'id' | 'url'>
                    >;
                }
        >;
    };

export type ProductVserverByIdBackupsQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverByIdBackupsQuery = { __typename?: 'Query' } & {
    productVserverById: { __typename?: 'ProductVserver' } & {
        backups: Array<
            { __typename?: 'ProductVserverBackup' } & Pick<
                ProductVserverBackup,
                'id' | 'create' | 'sizeInMb' | 'restorable'
            >
        >;
    } & ProductVserverPartFragment;
};

export type ProductVserverDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productVserverDelete'
>;

export type ProductVserversQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductVserversQuery = { __typename?: 'Query' } & {
    productVservers: { __typename?: 'ProductVserverResultMany' } & {
        edges: Array<
            { __typename?: 'ProductVserver' } & ProductVserverPartFragment
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type ProductVserverExistQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverExistQuery = { __typename?: 'Query' } & Pick<
    Query,
    'productVserverExist'
>;

export type ProductVserverStatsQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverStatsQuery = { __typename?: 'Query' } & {
    productVserverStats: Array<
        { __typename?: 'VserverStatsEntry' } & Pick<
            VserverStatsEntry,
            | 'cpu'
            | 'cpus'
            | 'disk'
            | 'diskread'
            | 'diskwrite'
            | 'lock'
            | 'maxdisk'
            | 'maxmem'
            | 'maxswap'
            | 'mem'
            | 'name'
            | 'netin'
            | 'netout'
            | 'pid'
            | 'status'
            | 'swap'
            | 'template'
            | 'type'
            | 'time'
            | 'uptime'
            | 'vmid'
        >
    >;
};

export type ProductVserverRunningQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverRunningQuery = { __typename?: 'Query' } & Pick<
    Query,
    'productVserverRunning'
>;

export type ProductVserverMakeVncPortMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverMakeVncPortMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productVserverMakeVncPort'>;

export type ProductVserverInstallMutationVariables = Exact<{
    id: Scalars['ID'];
    recreate?: Maybe<Scalars['Boolean']>;
}>;

export type ProductVserverInstallMutation = { __typename?: 'Mutation' } & {
    productVserverInstall: { __typename?: 'HostNodeTask' } & Pick<
        HostNodeTask,
        'id'
    >;
};

export type ProductVserverBackupRestoreMutationVariables = Exact<{
    id: Scalars['ID'];
    backupId: Scalars['ID'];
}>;

export type ProductVserverBackupRestoreMutation = {
    __typename?: 'Mutation';
} & {
    productVserverBackupRestore: { __typename?: 'ProductVserverBackup' } & Pick<
        ProductVserverBackup,
        'id'
    >;
};

export type ProductVserverBackupDownloadMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverBackupDownloadMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productVserverBackupDownload'>;

export type ProductVserverBackupCreateMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverBackupCreateMutation = { __typename?: 'Mutation' } & {
    productVserverBackupCreate: { __typename?: 'ProductVserverBackup' } & Pick<
        ProductVserverBackup,
        'id'
    >;
};

export type ProductVserverBackupDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
    backupId: Scalars['ID'];
}>;

export type ProductVserverBackupDeleteMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productVserverBackupDelete'>;

export type ProductVserverStartMutationVariables = Exact<{
    id: Scalars['ID'];
    withImages?: Maybe<Scalars['Boolean']>;
}>;

export type ProductVserverStartMutation = { __typename?: 'Mutation' } & {
    productVserverStart: { __typename?: 'HostNodeTask' } & Pick<
        HostNodeTask,
        'id'
    >;
};

export type ProductVserverStopMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverStopMutation = { __typename?: 'Mutation' } & {
    productVserverStop: { __typename?: 'HostNodeTask' } & Pick<
        HostNodeTask,
        'id'
    >;
};

export type ProductVserverSetSshPasswordMutationVariables = Exact<{
    id: Scalars['ID'];
    password: Scalars['String'];
}>;

export type ProductVserverSetSshPasswordMutation = {
    __typename?: 'Mutation';
} & {
    productVserverSetSshPassword: {
        __typename?: 'ProductVserver';
    } & ProductVserverPartFragment;
};

export type ProductVserverChangeLabelMutationVariables = Exact<{
    id: Scalars['ID'];
    label: Scalars['String'];
}>;

export type ProductVserverChangeLabelMutation = { __typename?: 'Mutation' } & {
    productVserverChangeLabel: {
        __typename?: 'ProductVserver';
    } & ProductVserverPartFragment;
};

export type ProductVserverAddImageMutationVariables = Exact<{
    id: Scalars['ID'];
    imageId: Scalars['ID'];
}>;

export type ProductVserverAddImageMutation = { __typename?: 'Mutation' } & {
    productVserverAddImage: {
        __typename?: 'ProductVserver';
    } & ProductVserverPartFragment;
};

export type ProductVserverRemoveImageMutationVariables = Exact<{
    id: Scalars['ID'];
    imageId: Scalars['ID'];
}>;

export type ProductVserverRemoveImageMutation = { __typename?: 'Mutation' } & {
    productVserverRemoveImage: {
        __typename?: 'ProductVserver';
    } & ProductVserverPartFragment;
};

export type ProductVserverByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverByIdQuery = { __typename?: 'Query' } & {
    productVserverById: { __typename?: 'ProductVserver' } & Pick<
        ProductVserver,
        'trafficTransferredInMB'
    > &
        ProductVserverPartFragment;
};

export type ProductVserverUnlockNetworkSpeedMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverUnlockNetworkSpeedMutation = {
    __typename?: 'Mutation';
} & {
    productVserverUnlockNetworkSpeed: {
        __typename?: 'ProductVserver';
    } & ProductVserverPartFragment;
};

export type MyProductVserversQueryVariables = Exact<{ [key: string]: never }>;

export type MyProductVserversQuery = { __typename?: 'Query' } & {
    productVserverMy: Array<
        { __typename?: 'ProductVserver' } & Pick<
            ProductVserver,
            'id' | 'name'
        > & {
                product: { __typename?: 'Product' } & Pick<
                    Product,
                    'expire' | 'id'
                >;
                images: Array<
                    { __typename?: 'ProductVserverImage' } & Pick<
                        ProductVserverImage,
                        'id'
                    > & {
                            logo?: Maybe<
                                { __typename?: 'File' } & Pick<File, 'url'>
                            >;
                        }
                >;
            }
    >;
};

export type ProductVserverImagePartFragment = {
    __typename?: 'ProductVserverImage';
} & Pick<
    ProductVserverImage,
    'id' | 'title' | 'platform' | 'resourceUrl' | 'active'
> & { logo?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>> };

export type ProductVserverImagesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductVserverImagesQuery = { __typename?: 'Query' } & {
    productVserverImages: { __typename?: 'ProductVserverImageResultMany' } & {
        edges: Array<
            {
                __typename?: 'ProductVserverImage';
            } & ProductVserverImagePartFragment
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type ProductVserverImageCreateMutationVariables = Exact<{
    data: ProductVserverImageCreateInput;
}>;

export type ProductVserverImageCreateMutation = { __typename?: 'Mutation' } & {
    productVserverImageCreate: {
        __typename?: 'ProductVserverImage';
    } & ProductVserverImagePartFragment;
};

export type ProductVserverImageEditMutationVariables = Exact<{
    data: ProductVserverImageEditInput;
}>;

export type ProductVserverImageEditMutation = { __typename?: 'Mutation' } & {
    productVserverImageEdit: {
        __typename?: 'ProductVserverImage';
    } & ProductVserverImagePartFragment;
};

export type ProductVserverImageDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverImageDeleteMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productVserverImageDelete'>;

export type ProductVserverImageByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverImageByIdQuery = { __typename?: 'Query' } & {
    productVserverImageById: {
        __typename?: 'ProductVserverImage';
    } & ProductVserverImagePartFragment;
};

export type ProductVserverImagePlatformImagesQueryVariables = Exact<{
    platform: Scalars['String'];
    search?: Maybe<Scalars['String']>;
}>;

export type ProductVserverImagePlatformImagesQuery = {
    __typename?: 'Query';
} & {
    productVserverImagePlatformImages: Array<
        { __typename?: 'ProductVserverImage' } & ProductVserverImagePartFragment
    >;
};

export type CreateProductVserverIpMutationVariables = Exact<{
    ip: Scalars['String'];
    hostNodeId?: Maybe<Scalars['ID']>;
    gateway: Scalars['String'];
    netmask: Scalars['String'];
    active: Scalars['Boolean'];
    cidr?: Maybe<Scalars['Int']>;
}>;

export type CreateProductVserverIpMutation = { __typename?: 'Mutation' } & {
    productVserverIpCreate: Array<
        { __typename?: 'ProductVserverIp' } & Pick<ProductVserverIp, 'id'>
    >;
};

export type EditProductVserverIpMutationVariables = Exact<{
    ip: Scalars['String'];
    hostNodeId?: Maybe<Scalars['ID']>;
    gateway: Scalars['String'];
    netmask: Scalars['String'];
    active: Scalars['Boolean'];
    vserverId?: Maybe<Scalars['ID']>;
    id: Scalars['ID'];
}>;

export type EditProductVserverIpMutation = { __typename?: 'Mutation' } & {
    productVserverIpEdit: { __typename?: 'ProductVserverIp' } & Pick<
        ProductVserverIp,
        'id' | 'create' | 'ip' | 'assigned' | 'netmask' | 'active' | 'gateway'
    > & {
            hostNode?: Maybe<
                { __typename?: 'HostNode' } & Pick<HostNode, 'id'>
            >;
            vserver?: Maybe<
                { __typename?: 'ProductVserver' } & Pick<ProductVserver, 'id'>
            >;
        };
};

export type DeleteProductVserverIpMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteProductVserverIpMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productVserverIpDelete'
>;

export type ProductVserverIpsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

export type ProductVserverIpsQuery = { __typename?: 'Query' } & {
    productVserverIps: { __typename?: 'ProductVserverIpResultMany' } & {
        edges: Array<
            { __typename?: 'ProductVserverIp' } & Pick<
                ProductVserverIp,
                'id' | 'create' | 'ip' | 'assigned'
            >
        >;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

export type ProductVserverIpByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductVserverIpByIdQuery = { __typename?: 'Query' } & {
    productVserverIpById: { __typename?: 'ProductVserverIp' } & Pick<
        ProductVserverIp,
        'id' | 'create' | 'ip' | 'assigned' | 'netmask' | 'active' | 'gateway'
    > & {
            hostNode?: Maybe<
                { __typename?: 'HostNode' } & Pick<HostNode, 'id'>
            >;
            vserver?: Maybe<
                { __typename?: 'ProductVserver' } & Pick<ProductVserver, 'id'>
            >;
        };
};

export type ProductVserverIpFreeQueryVariables = Exact<{
    [key: string]: never;
}>;

export type ProductVserverIpFreeQuery = { __typename?: 'Query' } & {
    productVserverIpFree: Array<
        { __typename?: 'ProductVserverIp' } & Pick<
            ProductVserverIp,
            | 'id'
            | 'create'
            | 'ip'
            | 'assigned'
            | 'netmask'
            | 'active'
            | 'gateway'
        >
    >;
};

export type ProductVserverIpReassignIpMutationVariables = Exact<{
    id: Scalars['ID'];
    newId: Scalars['ID'];
}>;

export type ProductVserverIpReassignIpMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productVserverIpReassignIp'>;

export const ProductDomainPartFragmentDoc = gql`
    fragment ProductDomainPart on ProductDomain {
        id
        attributes
        name
        create
        authcode
        requestNewAuthcode
        registered
        product {
            id
            expire
        }
        tld
    }
`;
export const EmailTemplatePartFragmentDoc = gql`
    fragment EmailTemplatePart on EmailTemplate {
        id
        sender
        subject
        template
    }
`;
export const FinanceTransactionPartFragmentDoc = gql`
    fragment FinanceTransactionPart on FinanceTransaction {
        id
        description
        create
        total
        isPull
        isPut
        billId
        pdf {
            id
            url
        }
        items {
            id
            amount
            vat
            getInclVat
            title
            getExclVat
        }
        totalExclVat
        totalInclVat
    }
`;
export const FinanceChargePartFragmentDoc = gql`
    fragment FinanceChargePart on FinanceCharge {
        id
        create
        amount
        method
        receiver {
            email
            id
        }
        transaction {
            id
        }
        verified
        meta
    }
`;
export const ProductGameserverPartFragmentDoc = gql`
    fragment ProductGameserverPart on ProductGameserver {
        id
        attributes
        name
        address
        failureAutorestart
        installed
        slot
        memory
        platform
        canEditMemory
        canEditSlot
        customAutoUpdateOnStartFlag
        customParameter
        product {
            id
            expire
            locked
        }
        scripts {
            id
            title
            standaloneBtn
            standaloneBtnColor
        }
        template {
            id
            title
            defaultCustomParameter
            canUpdateOnStart
            logo {
                id
                url
            }
        }
        ports {
            id
            port
        }
        hostNode {
            id
            remoteAddress
            name
            cpuInfo
            cpuCores
        }
        hasRunningTask
        autorestarts
    }
`;
export const ProductGameserverTemplatePartFragmentDoc = gql`
    fragment ProductGameserverTemplatePart on ProductGameserverTemplate {
        id
        title
        canUpdateOnStart
        platform
        update
        defaultCustomParameter
        active
        ports
        defaultScript {
            id
        }
        resourceUrl
        logo {
            id
        }
    }
`;
export const PdfTemplatePartFragmentDoc = gql`
    fragment PdfTemplatePart on PdfTemplate {
        id
        templateContent
        template
        create
        update
        templateFile
    }
`;
export const ProductPartFragmentDoc = gql`
    fragment ProductPart on Product {
        id
        expire
        autoRenewIntervalId
        gameservers {
            id
        }
        vservers {
            id
        }
        user {
            id
            publicName
        }
        transactions {
            id
        }
    }
`;
export const RolePartFragmentDoc = gql`
    fragment RolePart on Role {
        id
        name
    }
`;
export const SupportQuickResponseFragmentFragmentDoc = gql`
    fragment supportQuickResponseFragment on SupportQuickResponse {
        id
        title
        content
        update
        create
    }
`;
export const SupportTicketPartFragmentDoc = gql`
    fragment SupportTicketPart on SupportTicket {
        id
        subject
        create
        update
        priority
        author {
            id
            publicName
        }
        open
        status
        unreadReviserMessages
        unreadMessages
        reviserName
        lastOpened
        messages {
            text
            id
            userAvatar
            userPublicName
            create
            userId
        }
        files {
            id
            originalname
            file
            mimetype
            create
            url
            uploaderId
        }
    }
`;
export const ProductTeamspeakPartFragmentDoc = gql`
    fragment ProductTeamspeakPart on ProductTeamspeak {
        id
        name
        address
        create
        slot
        ts3Link
        ports {
            id
            port
        }
        hostNode {
            id
            cpuInfo
            name
        }
        product {
            id
            title
            locked
            expire
            user {
                id
                publicName
            }
        }
        productTemplate {
            id
            title
        }
        hasRunningTask
    }
`;
export const ProductTemplateDomainPartFragmentDoc = gql`
    fragment ProductTemplateDomainPart on ProductTemplateDomain {
        id
        options {
            id
        }
        title
        setup
        basePrice
        active
        gTld
        update
        attributes
        urlKey
    }
`;
export const ProductTemplateGameserverPartFragmentDoc = gql`
    fragment ProductTemplateGameserverPart on ProductTemplateGameserver {
        id
        memory {
            id
        }
        slot {
            id
        }
        options {
            id
        }
        templateOptions {
            id
        }
        title
        setup
        basePrice
        active
        update
        hostNodeFilterKey
        attributes
        urlKey
    }
`;
export const ProductTemplateSimplePartFragmentDoc = gql`
    fragment ProductTemplateSimplePart on ProductTemplateSimple {
        id
        options {
            id
        }
        title
        setup
        basePrice
        active
        periods {
            id
        }
        update
        attributes
        availablePeriods {
            id
        }
        includedGTld
        urlKey
    }
`;
export const ProductTemplateTeamspeakPartFragmentDoc = gql`
    fragment ProductTemplateTeamspeakPart on ProductTemplateTeamspeak {
        id
        slot {
            id
        }
        options {
            id
        }
        title
        setup
        basePrice
        active
        update
        attributes
        urlKey
    }
`;
export const ProductTemplateVserverPartFragmentDoc = gql`
    fragment ProductTemplateVserverPart on ProductTemplateVserver {
        id
        urlKey
        title
        setup
        basePrice
        active
        platform
        update
        hostNodeFilterKey
        memory {
            id
        }
        space {
            id
        }
        cores {
            id
        }
    }
`;
export const TranslationPartFragmentDoc = gql`
    fragment TranslationPart on Translation {
        id
        language
        key
        value
    }
`;
export const UserPartFragmentDoc = gql`
    fragment UserPart on User {
        avatar
        nickname
        credits
        email
        active
        supportId
        localAvatar {
            id
            url
        }
        id
        forceEmailLogin
    }
`;
export const UserPartAddressFragmentDoc = gql`
    fragment UserPartAddress on UserAddress {
        firstname
        lastname
        street1
        zip
        country
        title
        city
        birthdate
        phone
        phoneMobile
        company
        vatId
        id
        verified
        vat
        verifyDocument {
            id
            originalname
            url
            create
        }
    }
`;
export const ProductVserverPartFragmentDoc = gql`
    fragment ProductVserverPart on ProductVserver {
        id
        create
        name
        hasRunningTask
        sshPassword
        vserverId
        cores
        memory
        platform
        diskspace
        networkSpeed
        attributes
        ips {
            id
            ip
            active
            gateway
            netmask
        }
        hostNode {
            id
            name
            cpuInfo
            cpuCores
        }
        product {
            id
            locked
            user {
                id
                publicName
            }
            expire
        }
        images {
            id
            logo {
                id
                url
            }
        }
    }
`;
export const ProductVserverImagePartFragmentDoc = gql`
    fragment ProductVserverImagePart on ProductVserverImage {
        id
        title
        platform
        resourceUrl
        logo {
            id
            url
        }
        active
    }
`;
export const Me_Has_AclDocument = gql`
    query me_has_acl($acl: String!) {
        acl_has_acl(acl: $acl)
    }
`;

export function useQueryme_Has_Acl(
    options: Omit<Urql.UseQueryArgs<Me_Has_AclQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<Me_Has_AclQuery>({
        query: Me_Has_AclDocument,
        ...options,
    });
}
export const AclsDocument = gql`
    query acls($filter: CordFilter) {
        acls(filter: $filter) {
            edges {
                id
                acl
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryacls(
    options: Omit<Urql.UseQueryArgs<AclsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<AclsQuery>({ query: AclsDocument, ...options });
}
export const AclRefillAclCacheDocument = gql`
    mutation aclRefillAclCache {
        aclRefillAclCache
    }
`;

export function useMutationaclRefillAclCache() {
    return Urql.useMutation<
        AclRefillAclCacheMutation,
        AclRefillAclCacheMutationVariables
    >(AclRefillAclCacheDocument);
}
export const CreateBackupServerDocument = gql`
    mutation createBackupServer(
        $backupPath: String!
        $name: String
        $port: Int!
        $username: String!
        $privateKey: String!
        $host: String!
        $localHost: String!
    ) {
        backupServerCreate(
            data: {
                backupPath: $backupPath
                name: $name
                port: $port
                privateKey: $privateKey
                username: $username
                host: $host
                localHost: $localHost
            }
        ) {
            id
        }
    }
`;

export function useMutationcreateBackupServer() {
    return Urql.useMutation<
        CreateBackupServerMutation,
        CreateBackupServerMutationVariables
    >(CreateBackupServerDocument);
}
export const EditBackupServerDocument = gql`
    mutation editBackupServer(
        $id: ID!
        $backupPath: String
        $name: String
        $port: Int
        $username: String
        $privateKey: String
        $host: String
        $localHost: String!
    ) {
        backupServerEdit(
            data: {
                id: $id
                backupPath: $backupPath
                name: $name
                port: $port
                privateKey: $privateKey
                username: $username
                host: $host
                localHost: $localHost
            }
        ) {
            id
        }
    }
`;

export function useMutationeditBackupServer() {
    return Urql.useMutation<
        EditBackupServerMutation,
        EditBackupServerMutationVariables
    >(EditBackupServerDocument);
}
export const DeleteBackupServerByIdDocument = gql`
    mutation deleteBackupServerById($id: ID!) {
        backupServerDelete(id: $id)
    }
`;

export function useMutationdeleteBackupServerById() {
    return Urql.useMutation<
        DeleteBackupServerByIdMutation,
        DeleteBackupServerByIdMutationVariables
    >(DeleteBackupServerByIdDocument);
}
export const BackupServersDocument = gql`
    query backupServers($filter: CordFilter) {
        backupServers(filter: $filter) {
            edges {
                id
                name
                update
                backupPath
                privateKey
                username
                host
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQuerybackupServers(
    options: Omit<Urql.UseQueryArgs<BackupServersQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<BackupServersQuery>({
        query: BackupServersDocument,
        ...options,
    });
}
export const BackupServerByIdDocument = gql`
    query backupServerById($id: ID!) {
        backupServer(id: $id) {
            id
            name
            update
            backupPath
            privateKey
            port
            username
            host
            deletable
            localHost
        }
    }
`;

export function useQuerybackupServerById(
    options: Omit<
        Urql.UseQueryArgs<BackupServerByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<BackupServerByIdQuery>({
        query: BackupServerByIdDocument,
        ...options,
    });
}
export const BlogPostReadDocument = gql`
    query blogPostRead {
        blogPostRead {
            title
            link
            pubDate
            html
        }
    }
`;

export function useQueryblogPostRead(
    options: Omit<Urql.UseQueryArgs<BlogPostReadQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<BlogPostReadQuery>({
        query: BlogPostReadDocument,
        ...options,
    });
}
export const ProductDomainsDocument = gql`
    query productDomains($filter: CordFilter) {
        productDomains(filter: $filter) {
            edges {
                id
                create
                authcode
                product {
                    id
                    user {
                        id
                    }
                    expire
                }
                name
                tld
                attributes
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryproductDomains(
    options: Omit<Urql.UseQueryArgs<ProductDomainsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<ProductDomainsQuery>({
        query: ProductDomainsDocument,
        ...options,
    });
}
export const ProductDomainByIdDocument = gql`
    query productDomainById($id: ID!) {
        productDomainById(id: $id) {
            ...ProductDomainPart
        }
    }
    ${ProductDomainPartFragmentDoc}
`;

export function useQueryproductDomainById(
    options: Omit<
        Urql.UseQueryArgs<ProductDomainByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductDomainByIdQuery>({
        query: ProductDomainByIdDocument,
        ...options,
    });
}
export const MyProductDomainsDocument = gql`
    query myProductDomains {
        productDomainsMy {
            id
            name
            product {
                id
                expire
            }
            tld
        }
    }
`;

export function useQuerymyProductDomains(
    options: Omit<
        Urql.UseQueryArgs<MyProductDomainsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyProductDomainsQuery>({
        query: MyProductDomainsDocument,
        ...options,
    });
}
export const ProductDomainRequestNewAuthcodeDocument = gql`
    mutation productDomainRequestNewAuthcode($id: ID!) {
        productDomainRequestNewAuthcode(id: $id) {
            ...ProductDomainPart
        }
    }
    ${ProductDomainPartFragmentDoc}
`;

export function useMutationproductDomainRequestNewAuthcode() {
    return Urql.useMutation<
        ProductDomainRequestNewAuthcodeMutation,
        ProductDomainRequestNewAuthcodeMutationVariables
    >(ProductDomainRequestNewAuthcodeDocument);
}
export const ProductDomainDeleteDocument = gql`
    mutation productDomainDelete($id: ID!) {
        productDomainDelete(id: $id)
    }
`;

export function useMutationproductDomainDelete() {
    return Urql.useMutation<
        ProductDomainDeleteMutation,
        ProductDomainDeleteMutationVariables
    >(ProductDomainDeleteDocument);
}
export const ProductDomainSetAuthcodeDocument = gql`
    mutation productDomainSetAuthcode($id: ID!, $authcode: String!) {
        productDomainSetAuthcode(id: $id, authcode: $authcode) {
            ...ProductDomainPart
        }
    }
    ${ProductDomainPartFragmentDoc}
`;

export function useMutationproductDomainSetAuthcode() {
    return Urql.useMutation<
        ProductDomainSetAuthcodeMutation,
        ProductDomainSetAuthcodeMutationVariables
    >(ProductDomainSetAuthcodeDocument);
}
export const DsgvoAnonymizeAccountDocument = gql`
    mutation dsgvoAnonymizeAccount($id: ID!) {
        dsgvoAnonymizeAccount(id: $id)
    }
`;

export function useMutationdsgvoAnonymizeAccount() {
    return Urql.useMutation<
        DsgvoAnonymizeAccountMutation,
        DsgvoAnonymizeAccountMutationVariables
    >(DsgvoAnonymizeAccountDocument);
}
export const EmailTemplatesDocument = gql`
    query EmailTemplates($filter: CordFilter) {
        emailTemplates(filter: $filter) {
            edges {
                ...EmailTemplatePart
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${EmailTemplatePartFragmentDoc}
`;

export function useQueryEmailTemplates(
    options: Omit<Urql.UseQueryArgs<EmailTemplatesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<EmailTemplatesQuery>({
        query: EmailTemplatesDocument,
        ...options,
    });
}
export const EmailTemplateByIdDocument = gql`
    query emailTemplateById($id: ID!) {
        emailTemplateById(id: $id) {
            ...EmailTemplatePart
            templateContent
        }
    }
    ${EmailTemplatePartFragmentDoc}
`;

export function useQueryemailTemplateById(
    options: Omit<
        Urql.UseQueryArgs<EmailTemplateByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<EmailTemplateByIdQuery>({
        query: EmailTemplateByIdDocument,
        ...options,
    });
}
export const NewEmailTemplateDocument = gql`
    mutation newEmailTemplate(
        $sender: String!
        $subject: String!
        $template: String!
        $templateContent: String
    ) {
        email_template_new(
            data: {
                sender: $sender
                subject: $subject
                template: $template
                templateContent: $templateContent
            }
        ) {
            ...EmailTemplatePart
            templateContent
        }
    }
    ${EmailTemplatePartFragmentDoc}
`;

export function useMutationnewEmailTemplate() {
    return Urql.useMutation<
        NewEmailTemplateMutation,
        NewEmailTemplateMutationVariables
    >(NewEmailTemplateDocument);
}
export const DeleteEmailTemplateDocument = gql`
    mutation deleteEmailTemplate($id: ID!) {
        email_template_delete(id: $id)
    }
`;

export function useMutationdeleteEmailTemplate() {
    return Urql.useMutation<
        DeleteEmailTemplateMutation,
        DeleteEmailTemplateMutationVariables
    >(DeleteEmailTemplateDocument);
}
export const EditEmailTemplateDocument = gql`
    mutation editEmailTemplate(
        $id: ID!
        $sender: String!
        $subject: String!
        $template: String!
        $templateContent: String
    ) {
        email_template_edit(
            data: {
                id: $id
                sender: $sender
                subject: $subject
                template: $template
                templateContent: $templateContent
            }
        ) {
            ...EmailTemplatePart
            templateContent
        }
    }
    ${EmailTemplatePartFragmentDoc}
`;

export function useMutationeditEmailTemplate() {
    return Urql.useMutation<
        EditEmailTemplateMutation,
        EditEmailTemplateMutationVariables
    >(EditEmailTemplateDocument);
}
export const FileDeleteFileDocument = gql`
    mutation FileDeleteFile($id: ID!) {
        FileDeleteFile(id: $id)
    }
`;

export function useMutationFileDeleteFile() {
    return Urql.useMutation<
        FileDeleteFileMutation,
        FileDeleteFileMutationVariables
    >(FileDeleteFileDocument);
}
export const MyFilesDocument = gql`
    query myFiles {
        myFiles {
            id
            hasExpired
            url
            exists
            create
            mimetype
            originalname
            expiryDate
        }
    }
`;

export function useQuerymyFiles(
    options: Omit<Urql.UseQueryArgs<MyFilesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<MyFilesQuery>({ query: MyFilesDocument, ...options });
}
export const FinancePaymentMethodsDocument = gql`
    query FinancePaymentMethods {
        FinancePaymentMethods {
            method
            logo
            title
            minPayable
            maxPayable
            active
            forceAllowedValues
            tooltip
            bonusCredits {
                minCredits
                threshold
                bonus
            }
            transactionFee
        }
    }
`;

export function useQueryFinancePaymentMethods(
    options: Omit<
        Urql.UseQueryArgs<FinancePaymentMethodsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<FinancePaymentMethodsQuery>({
        query: FinancePaymentMethodsDocument,
        ...options,
    });
}
export const FinanceTransactionsDocument = gql`
    query financeTransactions($filter: CordFilter) {
        financeTransactions(filter: $filter) {
            edges {
                ...FinanceTransactionPart
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${FinanceTransactionPartFragmentDoc}
`;

export function useQueryfinanceTransactions(
    options: Omit<
        Urql.UseQueryArgs<FinanceTransactionsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<FinanceTransactionsQuery>({
        query: FinanceTransactionsDocument,
        ...options,
    });
}
export const FinanceTransactionByIdDocument = gql`
    query financeTransactionById($id: ID!) {
        financeTransactionById(id: $id) {
            ...FinanceTransactionPart
        }
    }
    ${FinanceTransactionPartFragmentDoc}
`;

export function useQueryfinanceTransactionById(
    options: Omit<
        Urql.UseQueryArgs<FinanceTransactionByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<FinanceTransactionByIdQuery>({
        query: FinanceTransactionByIdDocument,
        ...options,
    });
}
export const CreateFinanceTransactionDocument = gql`
    mutation CreateFinanceTransaction($data: FinanceTransactionCreateInput!) {
        financeTransactionCreate(data: $data) {
            ...FinanceTransactionPart
        }
    }
    ${FinanceTransactionPartFragmentDoc}
`;

export function useMutationCreateFinanceTransaction() {
    return Urql.useMutation<
        CreateFinanceTransactionMutation,
        CreateFinanceTransactionMutationVariables
    >(CreateFinanceTransactionDocument);
}
export const MyFinanceTransactionsDocument = gql`
    query MyFinanceTransactions {
        user_me {
            id
            transactions {
                ...FinanceTransactionPart
                donationMessage
                isDonation
            }
            credits
        }
    }
    ${FinanceTransactionPartFragmentDoc}
`;

export function useQueryMyFinanceTransactions(
    options: Omit<
        Urql.UseQueryArgs<MyFinanceTransactionsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyFinanceTransactionsQuery>({
        query: MyFinanceTransactionsDocument,
        ...options,
    });
}
export const FinanceChargesDocument = gql`
    query financeCharges($filter: CordFilter) {
        financeCharges(filter: $filter) {
            edges {
                ...FinanceChargePart
                donation {
                    id
                }
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${FinanceChargePartFragmentDoc}
`;

export function useQueryfinanceCharges(
    options: Omit<Urql.UseQueryArgs<FinanceChargesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<FinanceChargesQuery>({
        query: FinanceChargesDocument,
        ...options,
    });
}
export const FinanceChargeByIdDocument = gql`
    query financeChargeById($id: ID!) {
        financeChargeById(id: $id) {
            ...FinanceChargePart
        }
    }
    ${FinanceChargePartFragmentDoc}
`;

export function useQueryfinanceChargeById(
    options: Omit<
        Urql.UseQueryArgs<FinanceChargeByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<FinanceChargeByIdQuery>({
        query: FinanceChargeByIdDocument,
        ...options,
    });
}
export const FinanceChargeVerifyDocument = gql`
    mutation financeChargeVerify($id: ID!, $description: String) {
        financeChargeVerify(id: $id, description: $description) {
            ...FinanceChargePart
        }
    }
    ${FinanceChargePartFragmentDoc}
`;

export function useMutationfinanceChargeVerify() {
    return Urql.useMutation<
        FinanceChargeVerifyMutation,
        FinanceChargeVerifyMutationVariables
    >(FinanceChargeVerifyDocument);
}
export const FinanceChargeDeleteDocument = gql`
    mutation financeChargeDelete($id: ID!) {
        financeChargeDelete(id: $id)
    }
`;

export function useMutationfinanceChargeDelete() {
    return Urql.useMutation<
        FinanceChargeDeleteMutation,
        FinanceChargeDeleteMutationVariables
    >(FinanceChargeDeleteDocument);
}
export const FinanceDonationLinksMyDocument = gql`
    query financeDonationLinksMy {
        financeDonationLinksMy {
            id
            create
            message
            url
            totalDonationSum
            label
        }
    }
`;

export function useQueryfinanceDonationLinksMy(
    options: Omit<
        Urql.UseQueryArgs<FinanceDonationLinksMyQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<FinanceDonationLinksMyQuery>({
        query: FinanceDonationLinksMyDocument,
        ...options,
    });
}
export const FinanceDonationLinkCreateDocument = gql`
    mutation financeDonationLinkCreate($message: String!, $label: String) {
        financeDonationLinkCreate(message: $message, label: $label) {
            id
            create
            message
            url
            totalDonationSum
        }
    }
`;

export function useMutationfinanceDonationLinkCreate() {
    return Urql.useMutation<
        FinanceDonationLinkCreateMutation,
        FinanceDonationLinkCreateMutationVariables
    >(FinanceDonationLinkCreateDocument);
}
export const FinanceDonationLinkDeleteDocument = gql`
    mutation financeDonationLinkDelete($id: ID!) {
        financeDonationLinkDelete(id: $id)
    }
`;

export function useMutationfinanceDonationLinkDelete() {
    return Urql.useMutation<
        FinanceDonationLinkDeleteMutation,
        FinanceDonationLinkDeleteMutationVariables
    >(FinanceDonationLinkDeleteDocument);
}
export const ProductGameserverStartDocument = gql`
    mutation productGameserverStart($gameserverId: ID!, $scriptId: ID) {
        product_gameserver_start(
            gameserverId: $gameserverId
            scriptId: $scriptId
        ) {
            ...ProductGameserverPart
        }
    }
    ${ProductGameserverPartFragmentDoc}
`;

export function useMutationproductGameserverStart() {
    return Urql.useMutation<
        ProductGameserverStartMutation,
        ProductGameserverStartMutationVariables
    >(ProductGameserverStartDocument);
}
export const ProductGameserverSetAutorestartsDocument = gql`
    mutation productGameserverSetAutorestarts($id: ID!, $restarts: [Int!]!) {
        productGameserverSetAutorestarts(id: $id, restarts: $restarts) {
            ...ProductGameserverPart
        }
    }
    ${ProductGameserverPartFragmentDoc}
`;

export function useMutationproductGameserverSetAutorestarts() {
    return Urql.useMutation<
        ProductGameserverSetAutorestartsMutation,
        ProductGameserverSetAutorestartsMutationVariables
    >(ProductGameserverSetAutorestartsDocument);
}
export const ProductGameserverFailureAutorestartDocument = gql`
    mutation productGameserverFailureAutorestart($id: ID!, $restart: Boolean!) {
        productGameserverFailureAutorestart(id: $id, restart: $restart) {
            ...ProductGameserverPart
        }
    }
    ${ProductGameserverPartFragmentDoc}
`;

export function useMutationproductGameserverFailureAutorestart() {
    return Urql.useMutation<
        ProductGameserverFailureAutorestartMutation,
        ProductGameserverFailureAutorestartMutationVariables
    >(ProductGameserverFailureAutorestartDocument);
}
export const ProductGameserverRunningDocument = gql`
    query productGameserverRunning($gameserverId: ID!) {
        product_gameserver_running(gameserverId: $gameserverId)
    }
`;

export function useQueryproductGameserverRunning(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverRunningQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverRunningQuery>({
        query: ProductGameserverRunningDocument,
        ...options,
    });
}
export const ProductGameserverLogDocument = gql`
    query productGameserverLog($gameserverId: ID!) {
        product_gameserver_log(gameserverId: $gameserverId)
    }
`;

export function useQueryproductGameserverLog(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverLogQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverLogQuery>({
        query: ProductGameserverLogDocument,
        ...options,
    });
}
export const ProductGameserverStopDocument = gql`
    mutation productGameserverStop($gameserverId: ID!) {
        product_gameserver_stop(gameserverId: $gameserverId) {
            ...ProductGameserverPart
        }
    }
    ${ProductGameserverPartFragmentDoc}
`;

export function useMutationproductGameserverStop() {
    return Urql.useMutation<
        ProductGameserverStopMutation,
        ProductGameserverStopMutationVariables
    >(ProductGameserverStopDocument);
}
export const ProductGameserverConsoleDocument = gql`
    mutation productGameserverConsole($gameserverId: ID!, $command: String!) {
        product_gameserver_console(
            gameserverId: $gameserverId
            command: $command
        )
    }
`;

export function useMutationproductGameserverConsole() {
    return Urql.useMutation<
        ProductGameserverConsoleMutation,
        ProductGameserverConsoleMutationVariables
    >(ProductGameserverConsoleDocument);
}
export const ProductGameserverExistDocument = gql`
    query productGameserverExist($gameserverId: ID!) {
        product_gameserver_exist(gameserverId: $gameserverId)
    }
`;

export function useQueryproductGameserverExist(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverExistQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverExistQuery>({
        query: ProductGameserverExistDocument,
        ...options,
    });
}
export const ProductGameserverChangeFtpPasswordDocument = gql`
    mutation productGameserverChangeFtpPassword(
        $gameserverId: ID!
        $password: String!
    ) {
        product_gameserver_change_password(
            gameserverId: $gameserverId
            password: $password
        ) {
            ...ProductGameserverPart
        }
    }
    ${ProductGameserverPartFragmentDoc}
`;

export function useMutationproductGameserverChangeFtpPassword() {
    return Urql.useMutation<
        ProductGameserverChangeFtpPasswordMutation,
        ProductGameserverChangeFtpPasswordMutationVariables
    >(ProductGameserverChangeFtpPasswordDocument);
}
export const ProductGameserverDocument = gql`
    query productGameserver($id: ID!) {
        productGameserverById(id: $id) {
            ...ProductGameserverPart
            availableGameserverTemplates {
                id
                title
                logo {
                    id
                    url
                }
            }
        }
    }
    ${ProductGameserverPartFragmentDoc}
`;

export function useQueryproductGameserver(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverQuery>({
        query: ProductGameserverDocument,
        ...options,
    });
}
export const ProductGameserverUsageDocument = gql`
    query productGameserverUsage($gameserverId: ID!) {
        productGameserverUsage(gameserverId: $gameserverId) {
            usagePoints {
                globalUsage
                perCore
                date
                memoryUsageInMb
            }
            diskPoints {
                date
                usageInMb
            }
        }
    }
`;

export function useQueryproductGameserverUsage(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverUsageQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverUsageQuery>({
        query: ProductGameserverUsageDocument,
        ...options,
    });
}
export const ProductGameserverAddonsDocument = gql`
    query productGameserverAddons($gameserverId: ID!) {
        product_gameservers_scripts(gameserverId: $gameserverId) {
            id
            title
            standaloneBtn
            isDefault
        }
    }
`;

export function useQueryproductGameserverAddons(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverAddonsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverAddonsQuery>({
        query: ProductGameserverAddonsDocument,
        ...options,
    });
}
export const ProductGameserverSetCustomAttributeDocument = gql`
    mutation productGameserverSetCustomAttribute(
        $id: ID!
        $key: String!
        $value: String!
    ) {
        productGameserverSetCustomAttribute(id: $id, key: $key, value: $value) {
            ...ProductGameserverPart
        }
    }
    ${ProductGameserverPartFragmentDoc}
`;

export function useMutationproductGameserverSetCustomAttribute() {
    return Urql.useMutation<
        ProductGameserverSetCustomAttributeMutation,
        ProductGameserverSetCustomAttributeMutationVariables
    >(ProductGameserverSetCustomAttributeDocument);
}
export const ProductGameserverChangeLabelDocument = gql`
    mutation productGameserverChangeLabel($id: ID!, $label: String!) {
        product_gameserver_change_label(id: $id, label: $label) {
            ...ProductGameserverPart
        }
    }
    ${ProductGameserverPartFragmentDoc}
`;

export function useMutationproductGameserverChangeLabel() {
    return Urql.useMutation<
        ProductGameserverChangeLabelMutation,
        ProductGameserverChangeLabelMutationVariables
    >(ProductGameserverChangeLabelDocument);
}
export const ProductGameserverBackupCreateDocument = gql`
    mutation productGameserverBackupCreate($gameserverId: ID!) {
        productGameserverBackupCreate(gameserverId: $gameserverId) {
            id
        }
    }
`;

export function useMutationproductGameserverBackupCreate() {
    return Urql.useMutation<
        ProductGameserverBackupCreateMutation,
        ProductGameserverBackupCreateMutationVariables
    >(ProductGameserverBackupCreateDocument);
}
export const ProductGameserverBackupDeleteDocument = gql`
    mutation productGameserverBackupDelete($backupId: ID!) {
        productGameserverBackupDelete(backupId: $backupId)
    }
`;

export function useMutationproductGameserverBackupDelete() {
    return Urql.useMutation<
        ProductGameserverBackupDeleteMutation,
        ProductGameserverBackupDeleteMutationVariables
    >(ProductGameserverBackupDeleteDocument);
}
export const ProductGameserverBackupRestoreDocument = gql`
    mutation productGameserverBackupRestore($backupId: ID!) {
        productGameserverBackupRestore(backupId: $backupId)
    }
`;

export function useMutationproductGameserverBackupRestore() {
    return Urql.useMutation<
        ProductGameserverBackupRestoreMutation,
        ProductGameserverBackupRestoreMutationVariables
    >(ProductGameserverBackupRestoreDocument);
}
export const ProductGameserverDeleteDocument = gql`
    mutation productGameserverDelete($id: ID!) {
        productGameserverDelete(id: $id)
    }
`;

export function useMutationproductGameserverDelete() {
    return Urql.useMutation<
        ProductGameserverDeleteMutation,
        ProductGameserverDeleteMutationVariables
    >(ProductGameserverDeleteDocument);
}
export const ProductGameserverInstallDocument = gql`
    mutation productGameserverInstall($id: ID!, $gameserverTemplateId: ID!) {
        productGameserverInstall(
            gameserverId: $id
            gameserverTemplateId: $gameserverTemplateId
        ) {
            ...ProductGameserverPart
        }
    }
    ${ProductGameserverPartFragmentDoc}
`;

export function useMutationproductGameserverInstall() {
    return Urql.useMutation<
        ProductGameserverInstallMutation,
        ProductGameserverInstallMutationVariables
    >(ProductGameserverInstallDocument);
}
export const ProductGameserverBackupsDocument = gql`
    query productGameserverBackups($id: ID!) {
        productGameserverById(id: $id) {
            id
            backups {
                id
                create
                sizeInMb
                restorable
            }
        }
    }
`;

export function useQueryproductGameserverBackups(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverBackupsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverBackupsQuery>({
        query: ProductGameserverBackupsDocument,
        ...options,
    });
}
export const ProductGameserverBackupDownloadDocument = gql`
    mutation productGameserverBackupDownload($id: ID!) {
        productGameserverBackupDownload(id: $id)
    }
`;

export function useMutationproductGameserverBackupDownload() {
    return Urql.useMutation<
        ProductGameserverBackupDownloadMutation,
        ProductGameserverBackupDownloadMutationVariables
    >(ProductGameserverBackupDownloadDocument);
}
export const ProductGameserversDocument = gql`
    query productGameservers($filter: CordFilter) {
        productGameservers(filter: $filter) {
            edges {
                id
                template {
                    id
                    title
                }
                product {
                    id
                    user {
                        id
                    }
                }
                hostNode {
                    id
                    remoteAddress
                    name
                }
                name
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryproductGameservers(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserversQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserversQuery>({
        query: ProductGameserversDocument,
        ...options,
    });
}
export const MyProductGameserversDocument = gql`
    query myProductGameservers {
        productGameserversMy {
            id
            name
            amIOwner
            product {
                id
                expire
            }
            template {
                id
                logo {
                    id
                    url
                }
            }
        }
    }
`;

export function useQuerymyProductGameservers(
    options: Omit<
        Urql.UseQueryArgs<MyProductGameserversQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyProductGameserversQuery>({
        query: MyProductGameserversDocument,
        ...options,
    });
}
export const MyProductGameserverAccessesDocument = gql`
    query myProductGameserverAccesses {
        myProductGameserverAccesses {
            id
            gameserver {
                id
                name
                template {
                    id
                    logo {
                        id
                        url
                    }
                }
            }
        }
    }
`;

export function useQuerymyProductGameserverAccesses(
    options: Omit<
        Urql.UseQueryArgs<MyProductGameserverAccessesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyProductGameserverAccessesQuery>({
        query: MyProductGameserverAccessesDocument,
        ...options,
    });
}
export const ProductGameserverAccessesByGameserverIdDocument = gql`
    query productGameserverAccessesByGameserverId($gameserverId: ID!) {
        productGameserverAccessesByGameserverId(gameserverId: $gameserverId) {
            accept
            id
            userEmail
            gameserver {
                name
            }
        }
    }
`;

export function useQueryproductGameserverAccessesByGameserverId(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverAccessesByGameserverIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverAccessesByGameserverIdQuery>({
        query: ProductGameserverAccessesByGameserverIdDocument,
        ...options,
    });
}
export const ProductGameserverAccessInviteDocument = gql`
    mutation productGameserverAccessInvite(
        $gameserverId: ID!
        $emailOfInvitedUser: String!
        $captcha: String!
    ) {
        productGameserverAccessInvite(
            gameserverId: $gameserverId
            emailOfInvitedUser: $emailOfInvitedUser
            captcha: $captcha
        ) {
            accept
            id
            userEmail
            gameserver {
                name
            }
        }
    }
`;

export function useMutationproductGameserverAccessInvite() {
    return Urql.useMutation<
        ProductGameserverAccessInviteMutation,
        ProductGameserverAccessInviteMutationVariables
    >(ProductGameserverAccessInviteDocument);
}
export const ProductGameserverAccessRevokeDocument = gql`
    mutation productGameserverAccessRevoke($id: ID!) {
        productGameserverAccessRevoke(id: $id)
    }
`;

export function useMutationproductGameserverAccessRevoke() {
    return Urql.useMutation<
        ProductGameserverAccessRevokeMutation,
        ProductGameserverAccessRevokeMutationVariables
    >(ProductGameserverAccessRevokeDocument);
}
export const ProductGameserverMysqlByGameserverDocument = gql`
    query productGameserverMysqlByGameserver($gameserverId: ID!) {
        productGameserverMysqlByGameserver(gameserverId: $gameserverId) {
            id
            label
            create
            host
        }
    }
`;

export function useQueryproductGameserverMysqlByGameserver(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverMysqlByGameserverQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverMysqlByGameserverQuery>({
        query: ProductGameserverMysqlByGameserverDocument,
        ...options,
    });
}
export const ProductGameserverMysqlCreateDocument = gql`
    mutation productGameserverMysqlCreate(
        $gameserverId: ID!
        $password: String!
    ) {
        productGameserverMysqlCreate(
            gameserverId: $gameserverId
            password: $password
        ) {
            id
            label
            host
            create
        }
    }
`;

export function useMutationproductGameserverMysqlCreate() {
    return Urql.useMutation<
        ProductGameserverMysqlCreateMutation,
        ProductGameserverMysqlCreateMutationVariables
    >(ProductGameserverMysqlCreateDocument);
}
export const ProductGameserverMysqlChangeLabelDocument = gql`
    mutation productGameserverMysqlChangeLabel($id: ID!, $label: String!) {
        productGameserverMysqlChangeLabel(id: $id, label: $label) {
            id
            label
            create
            host
        }
    }
`;

export function useMutationproductGameserverMysqlChangeLabel() {
    return Urql.useMutation<
        ProductGameserverMysqlChangeLabelMutation,
        ProductGameserverMysqlChangeLabelMutationVariables
    >(ProductGameserverMysqlChangeLabelDocument);
}
export const ProductGameserverMysqlDeleteDocument = gql`
    mutation productGameserverMysqlDelete($id: ID!) {
        productGameserverMysqlDelete(id: $id)
    }
`;

export function useMutationproductGameserverMysqlDelete() {
    return Urql.useMutation<
        ProductGameserverMysqlDeleteMutation,
        ProductGameserverMysqlDeleteMutationVariables
    >(ProductGameserverMysqlDeleteDocument);
}
export const ProductGameserverScriptsDocument = gql`
    query productGameserverScripts(
        $search: String
        $orderBy: String
        $order: String
        $templateId: ID
    ) {
        product_gameserver_scripts(
            search: $search
            orderBy: $orderBy
            order: $order
            templateId: $templateId
        ) {
            id
            title
            script
            isDefault
            hidden
            executeHook
        }
    }
`;

export function useQueryproductGameserverScripts(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverScriptsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverScriptsQuery>({
        query: ProductGameserverScriptsDocument,
        ...options,
    });
}
export const ProductGameserverScriptEditDocument = gql`
    mutation productGameserverScriptEdit(
        $title: String!
        $script: String!
        $standaloneBtn: Boolean!
        $standaloneBtnColor: String
        $templateId: ID!
        $runAsRoot: Boolean!
        $disableAutoRestart: Boolean!
        $hidden: Boolean
        $executeHook: String
        $id: ID!
    ) {
        product_gameserver_script_edit(
            data: {
                title: $title
                script: $script
                templateId: $templateId
                id: $id
                standaloneBtn: $standaloneBtn
                standaloneBtnColor: $standaloneBtnColor
                disableAutoRestart: $disableAutoRestart
                runAsRoot: $runAsRoot
                hidden: $hidden
                executeHook: $executeHook
            }
        ) {
            id
            title
            script
            hidden
            executeHook
        }
    }
`;

export function useMutationproductGameserverScriptEdit() {
    return Urql.useMutation<
        ProductGameserverScriptEditMutation,
        ProductGameserverScriptEditMutationVariables
    >(ProductGameserverScriptEditDocument);
}
export const ProductGameserverScriptDeleteDocument = gql`
    mutation productGameserverScriptDelete($id: ID!) {
        product_gameserver_script_delete(id: $id)
    }
`;

export function useMutationproductGameserverScriptDelete() {
    return Urql.useMutation<
        ProductGameserverScriptDeleteMutation,
        ProductGameserverScriptDeleteMutationVariables
    >(ProductGameserverScriptDeleteDocument);
}
export const ProductGameserverScriptByIdDocument = gql`
    query productGameserverScriptById($id: ID!) {
        productGameserverScriptById(id: $id) {
            id
            title
            script
            standaloneBtn
            standaloneBtnColor
            runAsRoot
            disableAutoRestart
            hidden
            executeHook
        }
    }
`;

export function useQueryproductGameserverScriptById(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverScriptByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverScriptByIdQuery>({
        query: ProductGameserverScriptByIdDocument,
        ...options,
    });
}
export const ProductGameserverTemplateDocument = gql`
    query productGameserverTemplate($id: ID!) {
        product_gameserver_template(id: $id) {
            ...ProductGameserverTemplatePart
        }
    }
    ${ProductGameserverTemplatePartFragmentDoc}
`;

export function useQueryproductGameserverTemplate(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverTemplateQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverTemplateQuery>({
        query: ProductGameserverTemplateDocument,
        ...options,
    });
}
export const ProductGameserverTemplatesDocument = gql`
    query productGameserverTemplates($filter: CordFilter!) {
        productGameserverTemplates(filter: $filter) {
            edges {
                id
                title
                platform
                logo {
                    url
                    id
                }
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryproductGameserverTemplates(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverTemplatesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverTemplatesQuery>({
        query: ProductGameserverTemplatesDocument,
        ...options,
    });
}
export const ProductGameserverTemplateEditDocument = gql`
    mutation productGameserverTemplateEdit(
        $id: ID
        $title: String!
        $platform: String!
        $active: Boolean!
        $resourceUrl: String!
        $logoId: ID
        $ports: Int!
        $defaultCustomParameter: String!
        $canUpdateOnStart: Boolean!
    ) {
        product_gameserver_template_edit(
            data: {
                id: $id
                title: $title
                platform: $platform
                active: $active
                logoId: $logoId
                resourceUrl: $resourceUrl
                ports: $ports
                defaultCustomParameter: $defaultCustomParameter
                canUpdateOnStart: $canUpdateOnStart
            }
        ) {
            ...ProductGameserverTemplatePart
        }
    }
    ${ProductGameserverTemplatePartFragmentDoc}
`;

export function useMutationproductGameserverTemplateEdit() {
    return Urql.useMutation<
        ProductGameserverTemplateEditMutation,
        ProductGameserverTemplateEditMutationVariables
    >(ProductGameserverTemplateEditDocument);
}
export const ProductGameserverTemplateDeleteDocument = gql`
    mutation productGameserverTemplateDelete($id: ID!) {
        product_gameserver_template_delete(id: $id)
    }
`;

export function useMutationproductGameserverTemplateDelete() {
    return Urql.useMutation<
        ProductGameserverTemplateDeleteMutation,
        ProductGameserverTemplateDeleteMutationVariables
    >(ProductGameserverTemplateDeleteDocument);
}
export const ProductGameserverTemplateSetDefaultScriptDocument = gql`
    mutation productGameserverTemplateSetDefaultScript(
        $id: ID!
        $scriptId: ID!
    ) {
        product_gameserver_template_set_default_script(
            id: $id
            scriptId: $scriptId
        ) {
            id
        }
    }
`;

export function useMutationproductGameserverTemplateSetDefaultScript() {
    return Urql.useMutation<
        ProductGameserverTemplateSetDefaultScriptMutation,
        ProductGameserverTemplateSetDefaultScriptMutationVariables
    >(ProductGameserverTemplateSetDefaultScriptDocument);
}
export const HostNodeByIdDocument = gql`
    query hostNodeById($id: ID!) {
        host_node(id: $id) {
            id
            name
            section
            remoteAddress
            type
            deletable
            hostNodeFilterKey
            maxInstances
            freeInstances
            forcePublicBackupTranfer
            isAvailable
            meta
            daemonVersion
        }
    }
`;

export function useQueryhostNodeById(
    options: Omit<Urql.UseQueryArgs<HostNodeByIdQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<HostNodeByIdQuery>({
        query: HostNodeByIdDocument,
        ...options,
    });
}
export const HostNodesDocument = gql`
    query hostNodes($filter: CordFilter) {
        hostNodes(filter: $filter) {
            edges {
                id
                name
                remoteAddress
                type
                isAvailable
                daemonVersion
                isDaemonVersionBehind
                getDaemonVersionsBehind
                latestInfoUpdate
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryhostNodes(
    options: Omit<Urql.UseQueryArgs<HostNodesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<HostNodesQuery>({
        query: HostNodesDocument,
        ...options,
    });
}
export const HostNodeTestFindNodeDocument = gql`
    query hostNodeTestFindNode($type: String!, $filterKey: String) {
        hostNodeTestFindNode(type: $type, filterKey: $filterKey) {
            id
            name
            remoteAddress
            type
            isAvailable
            daemonVersion
        }
    }
`;

export function useQueryhostNodeTestFindNode(
    options: Omit<
        Urql.UseQueryArgs<HostNodeTestFindNodeQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<HostNodeTestFindNodeQuery>({
        query: HostNodeTestFindNodeDocument,
        ...options,
    });
}
export const EditCreateHostNodeDocument = gql`
    mutation editCreateHostNode($data: HostNodeEditInput!) {
        host_node_edit(data: $data) {
            id
            name
            section
            remoteAddress
            type
            deletable
            hostNodeFilterKey
            maxInstances
            freeInstances
            isAvailable
            forcePublicBackupTranfer
            meta
            daemonVersion
        }
    }
`;

export function useMutationeditCreateHostNode() {
    return Urql.useMutation<
        EditCreateHostNodeMutation,
        EditCreateHostNodeMutationVariables
    >(EditCreateHostNodeDocument);
}
export const DeleteHostNodeByIdDocument = gql`
    mutation deleteHostNodeById($id: ID!) {
        host_node_delete(id: $id)
    }
`;

export function useMutationdeleteHostNodeById() {
    return Urql.useMutation<
        DeleteHostNodeByIdMutation,
        DeleteHostNodeByIdMutationVariables
    >(DeleteHostNodeByIdDocument);
}
export const HostNodeUpdateDaemonDocument = gql`
    mutation hostNodeUpdateDaemon(
        $version: String
        $hostNodeId: ID!
        $sshUsername: String!
        $sshPassword: String
        $sshRsaKey: String
    ) {
        hostNodeUpdateDaemon(
            version: $version
            hostNodeId: $hostNodeId
            sshUsername: $sshUsername
            sshPassword: $sshPassword
            sshRsaKey: $sshRsaKey
        )
    }
`;

export function useMutationhostNodeUpdateDaemon() {
    return Urql.useMutation<
        HostNodeUpdateDaemonMutation,
        HostNodeUpdateDaemonMutationVariables
    >(HostNodeUpdateDaemonDocument);
}
export const HostNodeTasksMyDocument = gql`
    query hostNodeTasksMy($take: Int) {
        hostNodeTasksMy(take: $take) {
            id
            update
            running
            finish
            error
            label
            gameserver {
                id
                name
            }
        }
    }
`;

export function useQueryhostNodeTasksMy(
    options: Omit<
        Urql.UseQueryArgs<HostNodeTasksMyQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<HostNodeTasksMyQuery>({
        query: HostNodeTasksMyDocument,
        ...options,
    });
}
export const HostNodeTaskByIdDocument = gql`
    query hostNodeTaskById($id: ID!) {
        hostNodeTaskById(id: $id) {
            id
            update
            running
            finish
            error
            label
            gameserver {
                id
                name
            }
        }
    }
`;

export function useQueryhostNodeTaskById(
    options: Omit<
        Urql.UseQueryArgs<HostNodeTaskByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<HostNodeTaskByIdQuery>({
        query: HostNodeTaskByIdDocument,
        ...options,
    });
}
export const HostNodeTaskIsRunningDocument = gql`
    query hostNodeTaskIsRunning($identifier: ID!) {
        host_node_task_running(identifier: $identifier)
    }
`;

export function useQueryhostNodeTaskIsRunning(
    options: Omit<
        Urql.UseQueryArgs<HostNodeTaskIsRunningQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<HostNodeTaskIsRunningQuery>({
        query: HostNodeTaskIsRunningDocument,
        ...options,
    });
}
export const GetPdfTemplateDocument = gql`
    query getPdfTemplate($id: ID!) {
        pdf_template(id: $id) {
            ...PdfTemplatePart
        }
    }
    ${PdfTemplatePartFragmentDoc}
`;

export function useQuerygetPdfTemplate(
    options: Omit<Urql.UseQueryArgs<GetPdfTemplateQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<GetPdfTemplateQuery>({
        query: GetPdfTemplateDocument,
        ...options,
    });
}
export const PdfTemplatesDocument = gql`
    query pdfTemplates($filter: CordFilter) {
        pdfTemplates(filter: $filter) {
            edges {
                ...PdfTemplatePart
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${PdfTemplatePartFragmentDoc}
`;

export function useQuerypdfTemplates(
    options: Omit<Urql.UseQueryArgs<PdfTemplatesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<PdfTemplatesQuery>({
        query: PdfTemplatesDocument,
        ...options,
    });
}
export const DeletePdfTemplateDocument = gql`
    mutation deletePdfTemplate($id: ID!) {
        pdf_template_delete(id: $id)
    }
`;

export function useMutationdeletePdfTemplate() {
    return Urql.useMutation<
        DeletePdfTemplateMutation,
        DeletePdfTemplateMutationVariables
    >(DeletePdfTemplateDocument);
}
export const EditPdfTemplateDocument = gql`
    mutation editPdfTemplate(
        $id: ID
        $templateContent: String
        $template: String!
    ) {
        pdf_template_edit(
            data: {
                id: $id
                templateContent: $templateContent
                template: $template
            }
        ) {
            ...PdfTemplatePart
        }
    }
    ${PdfTemplatePartFragmentDoc}
`;

export function useMutationeditPdfTemplate() {
    return Urql.useMutation<
        EditPdfTemplateMutation,
        EditPdfTemplateMutationVariables
    >(EditPdfTemplateDocument);
}
export const ProductSetAutorenewIntervalDocument = gql`
    mutation productSetAutorenewInterval($id: ID!, $intervalId: ID) {
        productSetAutorenewInterval(id: $id, intervalId: $intervalId) {
            ...ProductPart
        }
    }
    ${ProductPartFragmentDoc}
`;

export function useMutationproductSetAutorenewInterval() {
    return Urql.useMutation<
        ProductSetAutorenewIntervalMutation,
        ProductSetAutorenewIntervalMutationVariables
    >(ProductSetAutorenewIntervalDocument);
}
export const ProductsDocument = gql`
    query Products($filter: CordFilter) {
        products(filter: $filter) {
            edges {
                ...ProductPart
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${ProductPartFragmentDoc}
`;

export function useQueryProducts(
    options: Omit<Urql.UseQueryArgs<ProductsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<ProductsQuery>({
        query: ProductsDocument,
        ...options,
    });
}
export const ProductByIdDocument = gql`
    query ProductById($id: ID!) {
        productById(id: $id) {
            ...ProductPart
        }
    }
    ${ProductPartFragmentDoc}
`;

export function useQueryProductById(
    options: Omit<Urql.UseQueryArgs<ProductByIdQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<ProductByIdQuery>({
        query: ProductByIdDocument,
        ...options,
    });
}
export const ProductById2Document = gql`
    query ProductById2($id: ID!) {
        productById(id: $id) {
            ...ProductPart
            availablePeriods {
                id
                days
            }
        }
    }
    ${ProductPartFragmentDoc}
`;

export function useQueryProductById2(
    options: Omit<Urql.UseQueryArgs<ProductById2QueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<ProductById2Query>({
        query: ProductById2Document,
        ...options,
    });
}
export const ProductEditDocument = gql`
    mutation productEdit($data: ProductEditInput!) {
        productEdit(data: $data) {
            ...ProductPart
        }
    }
    ${ProductPartFragmentDoc}
`;

export function useMutationproductEdit() {
    return Urql.useMutation<ProductEditMutation, ProductEditMutationVariables>(
        ProductEditDocument
    );
}
export const ProductGameserverFsReadIndexDocument = gql`
    query productGameserverFsReadIndex(
        $gameserverId: ID!
        $reloadIndex: Boolean
    ) {
        productGameserverFsReadIndex(
            gameserverId: $gameserverId
            reloadIndex: $reloadIndex
        )
    }
`;

export function useQueryproductGameserverFsReadIndex(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverFsReadIndexQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverFsReadIndexQuery>({
        query: ProductGameserverFsReadIndexDocument,
        ...options,
    });
}
export const ProductGameserverFsReadDocument = gql`
    query productGameserverFsRead($gameserverId: ID!, $file: String!) {
        productGameserverFsRead(gameserverId: $gameserverId, file: $file)
    }
`;

export function useQueryproductGameserverFsRead(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverFsReadQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverFsReadQuery>({
        query: ProductGameserverFsReadDocument,
        ...options,
    });
}
export const ProductGameserverFsWriteDocument = gql`
    mutation productGameserverFsWrite(
        $gameserverId: ID!
        $file: String!
        $base64Content: String!
    ) {
        productGameserverFsWrite(
            gameserverId: $gameserverId
            file: $file
            base64Content: $base64Content
        )
    }
`;

export function useMutationproductGameserverFsWrite() {
    return Urql.useMutation<
        ProductGameserverFsWriteMutation,
        ProductGameserverFsWriteMutationVariables
    >(ProductGameserverFsWriteDocument);
}
export const CreateProductGameserverScriptDocument = gql`
    mutation createProductGameserverScript(
        $title: String!
        $script: String!
        $templateId: ID!
    ) {
        product_gameserver_script_new(
            data: { title: $title, script: $script, templateId: $templateId }
        ) {
            id
            title
            script
        }
    }
`;

export function useMutationcreateProductGameserverScript() {
    return Urql.useMutation<
        CreateProductGameserverScriptMutation,
        CreateProductGameserverScriptMutationVariables
    >(CreateProductGameserverScriptDocument);
}
export const RolesDocument = gql`
    query roles($filter: CordFilter) {
        roles(filter: $filter) {
            edges {
                ...RolePart
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${RolePartFragmentDoc}
`;

export function useQueryroles(
    options: Omit<Urql.UseQueryArgs<RolesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<RolesQuery>({ query: RolesDocument, ...options });
}
export const RoleByIdDocument = gql`
    query roleById($id: ID!) {
        roleById(id: $id) {
            ...RolePart
            acls {
                id
                acl
            }
            users {
                id
            }
        }
    }
    ${RolePartFragmentDoc}
`;

export function useQueryroleById(
    options: Omit<Urql.UseQueryArgs<RoleByIdQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<RoleByIdQuery>({
        query: RoleByIdDocument,
        ...options,
    });
}
export const EditRoleRoleDocument = gql`
    mutation editRoleRole($id: ID, $name: String!) {
        role_role_edit(data: { id: $id, name: $name }) {
            ...RolePart
            acls {
                id
                acl
            }
            users {
                id
            }
        }
    }
    ${RolePartFragmentDoc}
`;

export function useMutationeditRoleRole() {
    return Urql.useMutation<
        EditRoleRoleMutation,
        EditRoleRoleMutationVariables
    >(EditRoleRoleDocument);
}
export const RoleUnAssignAclDocument = gql`
    mutation roleUnAssignAcl($id: ID!, $aclsId: [ID!]!) {
        roleUnAssignAcl(id: $id, aclsId: $aclsId) {
            ...RolePart
            acls {
                id
                acl
            }
        }
    }
    ${RolePartFragmentDoc}
`;

export function useMutationroleUnAssignAcl() {
    return Urql.useMutation<
        RoleUnAssignAclMutation,
        RoleUnAssignAclMutationVariables
    >(RoleUnAssignAclDocument);
}
export const RoleAssignAclDocument = gql`
    mutation roleAssignAcl($id: ID!, $aclsId: [ID!]!) {
        roleAssignAcl(id: $id, aclsId: $aclsId) {
            ...RolePart
            acls {
                id
                acl
            }
            users {
                id
            }
        }
    }
    ${RolePartFragmentDoc}
`;

export function useMutationroleAssignAcl() {
    return Urql.useMutation<
        RoleAssignAclMutation,
        RoleAssignAclMutationVariables
    >(RoleAssignAclDocument);
}
export const RoleAddUserDocument = gql`
    mutation roleAddUser($id: ID!, $userId: ID!) {
        roleAddUser(id: $id, userId: $userId) {
            ...RolePart
            acls {
                id
                acl
            }
            users {
                id
            }
        }
    }
    ${RolePartFragmentDoc}
`;

export function useMutationroleAddUser() {
    return Urql.useMutation<RoleAddUserMutation, RoleAddUserMutationVariables>(
        RoleAddUserDocument
    );
}
export const RoleRemoveUserDocument = gql`
    mutation roleRemoveUser($id: ID!, $userId: ID!) {
        roleRemoveUser(id: $id, userId: $userId) {
            ...RolePart
            acls {
                id
                acl
            }
            users {
                id
            }
        }
    }
    ${RolePartFragmentDoc}
`;

export function useMutationroleRemoveUser() {
    return Urql.useMutation<
        RoleRemoveUserMutation,
        RoleRemoveUserMutationVariables
    >(RoleRemoveUserDocument);
}
export const DeleteRoleRoleDocument = gql`
    mutation deleteRoleRole($id: ID!) {
        role_role_delete(id: $id)
    }
`;

export function useMutationdeleteRoleRole() {
    return Urql.useMutation<
        DeleteRoleRoleMutation,
        DeleteRoleRoleMutationVariables
    >(DeleteRoleRoleDocument);
}
export const ProductSimplesDocument = gql`
    query productSimples($filter: CordFilter) {
        productSimples(filter: $filter) {
            edges {
                id
                product {
                    id
                    user {
                        id
                    }
                    expire
                }
                create
                state
                name
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryproductSimples(
    options: Omit<Urql.UseQueryArgs<ProductSimplesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<ProductSimplesQuery>({
        query: ProductSimplesDocument,
        ...options,
    });
}
export const ProductSimpleByIdDocument = gql`
    query productSimpleById($id: ID!) {
        productSimpleById(id: $id) {
            id
            name
            description
            product {
                id
                expire
            }
            state
        }
    }
`;

export function useQueryproductSimpleById(
    options: Omit<
        Urql.UseQueryArgs<ProductSimpleByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductSimpleByIdQuery>({
        query: ProductSimpleByIdDocument,
        ...options,
    });
}
export const MyProductSimplesDocument = gql`
    query myProductSimples {
        productSimplesMy {
            id
            name
            product {
                id
                expire
            }
            state
        }
    }
`;

export function useQuerymyProductSimples(
    options: Omit<
        Urql.UseQueryArgs<MyProductSimplesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyProductSimplesQuery>({
        query: MyProductSimplesDocument,
        ...options,
    });
}
export const ProductSimpleEditLabelDocument = gql`
    mutation productSimpleEditLabel($id: ID!, $label: String!) {
        productSimpleEditLabel(id: $id, label: $label) {
            id
            name
            product {
                id
                expire
            }
            state
        }
    }
`;

export function useMutationproductSimpleEditLabel() {
    return Urql.useMutation<
        ProductSimpleEditLabelMutation,
        ProductSimpleEditLabelMutationVariables
    >(ProductSimpleEditLabelDocument);
}
export const ProductSimpleDeleteDocument = gql`
    mutation productSimpleDelete($id: ID!) {
        productSimpleDelete(id: $id)
    }
`;

export function useMutationproductSimpleDelete() {
    return Urql.useMutation<
        ProductSimpleDeleteMutation,
        ProductSimpleDeleteMutationVariables
    >(ProductSimpleDeleteDocument);
}
export const ProductSimpleSetStateDocument = gql`
    mutation productSimpleSetState($id: ID!, $state: String!) {
        productSimpleSetState(id: $id, state: $state) {
            id
            name
            product {
                id
                expire
            }
            state
        }
    }
`;

export function useMutationproductSimpleSetState() {
    return Urql.useMutation<
        ProductSimpleSetStateMutation,
        ProductSimpleSetStateMutationVariables
    >(ProductSimpleSetStateDocument);
}
export const SupportQuickResponseDeleteDocument = gql`
    mutation supportQuickResponseDelete($id: ID!) {
        supportQuickResponseDelete(id: $id)
    }
`;

export function useMutationsupportQuickResponseDelete() {
    return Urql.useMutation<
        SupportQuickResponseDeleteMutation,
        SupportQuickResponseDeleteMutationVariables
    >(SupportQuickResponseDeleteDocument);
}
export const SupportQuickResponseEditDocument = gql`
    mutation supportQuickResponseEdit($dto: SupportQuickResponseEditDto!) {
        supportQuickResponseEdit(dto: $dto) {
            ...supportQuickResponseFragment
        }
    }
    ${SupportQuickResponseFragmentFragmentDoc}
`;

export function useMutationsupportQuickResponseEdit() {
    return Urql.useMutation<
        SupportQuickResponseEditMutation,
        SupportQuickResponseEditMutationVariables
    >(SupportQuickResponseEditDocument);
}
export const SupportQuickResponseCreateDocument = gql`
    mutation supportQuickResponseCreate($dto: SupportQuickResponseCreateDto!) {
        supportQuickResponseCreate(dto: $dto) {
            ...supportQuickResponseFragment
        }
    }
    ${SupportQuickResponseFragmentFragmentDoc}
`;

export function useMutationsupportQuickResponseCreate() {
    return Urql.useMutation<
        SupportQuickResponseCreateMutation,
        SupportQuickResponseCreateMutationVariables
    >(SupportQuickResponseCreateDocument);
}
export const SupportQuickResponsesDocument = gql`
    query supportQuickResponses($filter: CordFilter) {
        supportQuickResponses(filter: $filter) {
            edges {
                ...supportQuickResponseFragment
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${SupportQuickResponseFragmentFragmentDoc}
`;

export function useQuerysupportQuickResponses(
    options: Omit<
        Urql.UseQueryArgs<SupportQuickResponsesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<SupportQuickResponsesQuery>({
        query: SupportQuickResponsesDocument,
        ...options,
    });
}
export const SupportQuickResponseByIdDocument = gql`
    query supportQuickResponseById($id: ID!) {
        supportQuickResponseById(id: $id) {
            ...supportQuickResponseFragment
        }
    }
    ${SupportQuickResponseFragmentFragmentDoc}
`;

export function useQuerysupportQuickResponseById(
    options: Omit<
        Urql.UseQueryArgs<SupportQuickResponseByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<SupportQuickResponseByIdQuery>({
        query: SupportQuickResponseByIdDocument,
        ...options,
    });
}
export const SupportTicketDeleteMessageDocument = gql`
    mutation supportTicketDeleteMessage($id: ID!) {
        supportTicketDeleteMessage(id: $id) {
            ...SupportTicketPart
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useMutationsupportTicketDeleteMessage() {
    return Urql.useMutation<
        SupportTicketDeleteMessageMutation,
        SupportTicketDeleteMessageMutationVariables
    >(SupportTicketDeleteMessageDocument);
}
export const UserMyTicketsDocument = gql`
    query UserMyTickets {
        user_me {
            id
            tickets {
                ...SupportTicketPart
            }
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useQueryUserMyTickets(
    options: Omit<Urql.UseQueryArgs<UserMyTicketsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<UserMyTicketsQuery>({
        query: UserMyTicketsDocument,
        ...options,
    });
}
export const SupportTicketByIdDocument = gql`
    query supportTicketById($id: ID!) {
        supportTicketById(id: $id) {
            ...SupportTicketPart
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useQuerysupportTicketById(
    options: Omit<
        Urql.UseQueryArgs<SupportTicketByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<SupportTicketByIdQuery>({
        query: SupportTicketByIdDocument,
        ...options,
    });
}
export const SupportTicketDeleteDocument = gql`
    mutation supportTicketDelete($id: ID!) {
        supportTicketDelete(id: $id)
    }
`;

export function useMutationsupportTicketDelete() {
    return Urql.useMutation<
        SupportTicketDeleteMutation,
        SupportTicketDeleteMutationVariables
    >(SupportTicketDeleteDocument);
}
export const SupportTicketsDocument = gql`
    query supportTickets($filter: CordFilter) {
        supportTickets(filter: $filter) {
            edges {
                ...SupportTicketPart
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useQuerysupportTickets(
    options: Omit<Urql.UseQueryArgs<SupportTicketsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<SupportTicketsQuery>({
        query: SupportTicketsDocument,
        ...options,
    });
}
export const SupportTicketResetUnreadCounterDocument = gql`
    mutation supportTicketResetUnreadCounter($id: ID!) {
        supportTicketResetUnreadCounter(id: $id) {
            ...SupportTicketPart
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useMutationsupportTicketResetUnreadCounter() {
    return Urql.useMutation<
        SupportTicketResetUnreadCounterMutation,
        SupportTicketResetUnreadCounterMutationVariables
    >(SupportTicketResetUnreadCounterDocument);
}
export const AddMessageToSupportTicketDocument = gql`
    mutation addMessageToSupportTicket($message: String!, $id: ID!) {
        support_ticket_add_message(data: { message: $message, id: $id }) {
            ...SupportTicketPart
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useMutationaddMessageToSupportTicket() {
    return Urql.useMutation<
        AddMessageToSupportTicketMutation,
        AddMessageToSupportTicketMutationVariables
    >(AddMessageToSupportTicketDocument);
}
export const SupportTicketSetStatusDocument = gql`
    mutation supportTicketSetStatus($id: ID!, $status: String!) {
        supportTicketSetStatus(id: $id, status: $status) {
            ...SupportTicketPart
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useMutationsupportTicketSetStatus() {
    return Urql.useMutation<
        SupportTicketSetStatusMutation,
        SupportTicketSetStatusMutationVariables
    >(SupportTicketSetStatusDocument);
}
export const SupportTicketCloseDocument = gql`
    mutation supportTicketClose($id: ID!) {
        supportTicketClose(id: $id) {
            ...SupportTicketPart
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useMutationsupportTicketClose() {
    return Urql.useMutation<
        SupportTicketCloseMutation,
        SupportTicketCloseMutationVariables
    >(SupportTicketCloseDocument);
}
export const SupportTicketReopenDocument = gql`
    mutation supportTicketReopen($id: ID!) {
        supportTicketReopen(id: $id) {
            ...SupportTicketPart
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useMutationsupportTicketReopen() {
    return Urql.useMutation<
        SupportTicketReopenMutation,
        SupportTicketReopenMutationVariables
    >(SupportTicketReopenDocument);
}
export const SupportTicketAssignToDocument = gql`
    mutation supportTicketAssignTo($id: ID!, $userId: ID!) {
        supportTicketAssignTo(id: $id, userId: $userId) {
            ...SupportTicketPart
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useMutationsupportTicketAssignTo() {
    return Urql.useMutation<
        SupportTicketAssignToMutation,
        SupportTicketAssignToMutationVariables
    >(SupportTicketAssignToDocument);
}
export const SupportTicketAddFileDocument = gql`
    mutation supportTicketAddFile($id: ID!, $fileId: ID!) {
        supportTicketAddFile(id: $id, fileId: $fileId) {
            ...SupportTicketPart
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useMutationsupportTicketAddFile() {
    return Urql.useMutation<
        SupportTicketAddFileMutation,
        SupportTicketAddFileMutationVariables
    >(SupportTicketAddFileDocument);
}
export const EditSupportTicketDocument = gql`
    mutation editSupportTicket($id: ID!, $status: String, $priority: Int) {
        support_ticket_edit(
            data: { priority: $priority, status: $status }
            id: $id
        ) {
            ...SupportTicketPart
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useMutationeditSupportTicket() {
    return Urql.useMutation<
        EditSupportTicketMutation,
        EditSupportTicketMutationVariables
    >(EditSupportTicketDocument);
}
export const Support_Ticket_NewDocument = gql`
    mutation support_ticket_new($data: SupportTicketNewInput!) {
        support_ticket_new(data: $data) {
            ...SupportTicketPart
        }
    }
    ${SupportTicketPartFragmentDoc}
`;

export function useMutationsupport_Ticket_New() {
    return Urql.useMutation<
        Support_Ticket_NewMutation,
        Support_Ticket_NewMutationVariables
    >(Support_Ticket_NewDocument);
}
export const SupportTicketPrioritiesDocument = gql`
    query supportTicketPriorities {
        supportTicketPriorities {
            id
            label
            priority
        }
    }
`;

export function useQuerysupportTicketPriorities(
    options: Omit<
        Urql.UseQueryArgs<SupportTicketPrioritiesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<SupportTicketPrioritiesQuery>({
        query: SupportTicketPrioritiesDocument,
        ...options,
    });
}
export const SupportTicketRevisersDocument = gql`
    query supportTicketRevisers {
        supportTicketRevisers {
            id
            name
        }
    }
`;

export function useQuerysupportTicketRevisers(
    options: Omit<
        Urql.UseQueryArgs<SupportTicketRevisersQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<SupportTicketRevisersQuery>({
        query: SupportTicketRevisersDocument,
        ...options,
    });
}
export const ProductTeamspeakChangeLabelDocument = gql`
    mutation productTeamspeakChangeLabel($id: ID!, $label: String!) {
        productTeamspeakChangeLabel(id: $id, label: $label) {
            ...ProductTeamspeakPart
        }
    }
    ${ProductTeamspeakPartFragmentDoc}
`;

export function useMutationproductTeamspeakChangeLabel() {
    return Urql.useMutation<
        ProductTeamspeakChangeLabelMutation,
        ProductTeamspeakChangeLabelMutationVariables
    >(ProductTeamspeakChangeLabelDocument);
}
export const ProductTeamspeaksDocument = gql`
    query productTeamspeaks($filter: CordFilter) {
        productTeamspeaks(filter: $filter) {
            edges {
                id
                name
                address
                create
                ports {
                    id
                }
                product {
                    id
                    expire
                    title
                    user {
                        id
                        publicName
                    }
                }
                productTemplate {
                    id
                    title
                }
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryproductTeamspeaks(
    options: Omit<
        Urql.UseQueryArgs<ProductTeamspeaksQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTeamspeaksQuery>({
        query: ProductTeamspeaksDocument,
        ...options,
    });
}
export const MyProductTeamspeaksDocument = gql`
    query MyProductTeamspeaks {
        productTeamspeaksMy {
            id
            name
            address
            create
            ports {
                id
            }
            product {
                id
                title
                expire
                user {
                    id
                    publicName
                }
            }
            productTemplate {
                id
                title
            }
        }
    }
`;

export function useQueryMyProductTeamspeaks(
    options: Omit<
        Urql.UseQueryArgs<MyProductTeamspeaksQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyProductTeamspeaksQuery>({
        query: MyProductTeamspeaksDocument,
        ...options,
    });
}
export const ProductTeamspeakByIdDocument = gql`
    query productTeamspeakById($id: ID!) {
        productTeamspeakById(id: $id) {
            ...ProductTeamspeakPart
        }
    }
    ${ProductTeamspeakPartFragmentDoc}
`;

export function useQueryproductTeamspeakById(
    options: Omit<
        Urql.UseQueryArgs<ProductTeamspeakByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTeamspeakByIdQuery>({
        query: ProductTeamspeakByIdDocument,
        ...options,
    });
}
export const ProductTeamspeakTokensDocument = gql`
    query productTeamspeakTokens($teamspeakId: ID!) {
        productTeamspeakTokens(teamspeakId: $teamspeakId) {
            group
            token
        }
    }
`;

export function useQueryproductTeamspeakTokens(
    options: Omit<
        Urql.UseQueryArgs<ProductTeamspeakTokensQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTeamspeakTokensQuery>({
        query: ProductTeamspeakTokensDocument,
        ...options,
    });
}
export const ProductTeamspeakRunningDocument = gql`
    query productTeamspeakRunning($teamspeakId: ID!) {
        productTeamspeakRunning(teamspeakId: $teamspeakId)
    }
`;

export function useQueryproductTeamspeakRunning(
    options: Omit<
        Urql.UseQueryArgs<ProductTeamspeakRunningQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTeamspeakRunningQuery>({
        query: ProductTeamspeakRunningDocument,
        ...options,
    });
}
export const ProductTeamspeakTokenCreateDocument = gql`
    mutation productTeamspeakTokenCreate($teamspeakId: ID!, $group: String!) {
        productTeamspeakTokenCreate(teamspeakId: $teamspeakId, group: $group)
    }
`;

export function useMutationproductTeamspeakTokenCreate() {
    return Urql.useMutation<
        ProductTeamspeakTokenCreateMutation,
        ProductTeamspeakTokenCreateMutationVariables
    >(ProductTeamspeakTokenCreateDocument);
}
export const ProductTeamspeakTokenDeleteDocument = gql`
    mutation productTeamspeakTokenDelete($teamspeakId: ID!, $token: String!) {
        productTeamspeakTokenDelete(teamspeakId: $teamspeakId, token: $token)
    }
`;

export function useMutationproductTeamspeakTokenDelete() {
    return Urql.useMutation<
        ProductTeamspeakTokenDeleteMutation,
        ProductTeamspeakTokenDeleteMutationVariables
    >(ProductTeamspeakTokenDeleteDocument);
}
export const ProductTeamspeakExistDocument = gql`
    query productTeamspeakExist($teamspeakId: ID!) {
        productTeamspeakExist(teamspeakId: $teamspeakId)
    }
`;

export function useQueryproductTeamspeakExist(
    options: Omit<
        Urql.UseQueryArgs<ProductTeamspeakExistQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTeamspeakExistQuery>({
        query: ProductTeamspeakExistDocument,
        ...options,
    });
}
export const ProductTeamspeakStartDocument = gql`
    mutation productTeamspeakStart($teamspeakId: ID!) {
        productTeamspeakStart(teamspeakId: $teamspeakId) {
            ...ProductTeamspeakPart
        }
    }
    ${ProductTeamspeakPartFragmentDoc}
`;

export function useMutationproductTeamspeakStart() {
    return Urql.useMutation<
        ProductTeamspeakStartMutation,
        ProductTeamspeakStartMutationVariables
    >(ProductTeamspeakStartDocument);
}
export const ProductTeamspeakRemoveDocument = gql`
    mutation productTeamspeakRemove($id: ID!) {
        productTeamspeakRemove(id: $id)
    }
`;

export function useMutationproductTeamspeakRemove() {
    return Urql.useMutation<
        ProductTeamspeakRemoveMutation,
        ProductTeamspeakRemoveMutationVariables
    >(ProductTeamspeakRemoveDocument);
}
export const ProductTeamspeakStopDocument = gql`
    mutation productTeamspeakStop($teamspeakId: ID!) {
        productTeamspeakStop(teamspeakId: $teamspeakId) {
            ...ProductTeamspeakPart
        }
    }
    ${ProductTeamspeakPartFragmentDoc}
`;

export function useMutationproductTeamspeakStop() {
    return Urql.useMutation<
        ProductTeamspeakStopMutation,
        ProductTeamspeakStopMutationVariables
    >(ProductTeamspeakStopDocument);
}
export const ProductTeamspeakInstallDocument = gql`
    mutation productTeamspeakInstall($teamspeakId: ID!) {
        productTeamspeakInstall(teamspeakId: $teamspeakId) {
            ...ProductTeamspeakPart
        }
    }
    ${ProductTeamspeakPartFragmentDoc}
`;

export function useMutationproductTeamspeakInstall() {
    return Urql.useMutation<
        ProductTeamspeakInstallMutation,
        ProductTeamspeakInstallMutationVariables
    >(ProductTeamspeakInstallDocument);
}
export const ProductTemplateDomainByIdDocument = gql`
    query ProductTemplateDomainById($id: ID!) {
        productTemplateDomainById(id: $id) {
            ...ProductTemplateDomainPart
        }
    }
    ${ProductTemplateDomainPartFragmentDoc}
`;

export function useQueryProductTemplateDomainById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateDomainByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateDomainByIdQuery>({
        query: ProductTemplateDomainByIdDocument,
        ...options,
    });
}
export const ProductTemplateDomainsDocument = gql`
    query ProductTemplateDomains($filter: CordFilter) {
        productTemplateDomains(filter: $filter) {
            edges {
                id
                options {
                    id
                }
                urlKey
                title
                setup
                basePrice
                gTld
                active
                update
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryProductTemplateDomains(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateDomainsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateDomainsQuery>({
        query: ProductTemplateDomainsDocument,
        ...options,
    });
}
export const CreateProductTemplateDomainDocument = gql`
    mutation createProductTemplateDomain(
        $title: String!
        $setup: Float!
        $basePrice: Float!
        $urlKey: String!
        $gTld: String!
        $active: Boolean!
    ) {
        productTemplateDomainCreate(
            title: $title
            gTld: $gTld
            setup: $setup
            basePrice: $basePrice
            urlKey: $urlKey
            active: $active
        ) {
            id
        }
    }
`;

export function useMutationcreateProductTemplateDomain() {
    return Urql.useMutation<
        CreateProductTemplateDomainMutation,
        CreateProductTemplateDomainMutationVariables
    >(CreateProductTemplateDomainDocument);
}
export const EditProductTemplateDomainDocument = gql`
    mutation editProductTemplateDomain(
        $id: ID!
        $title: String!
        $setup: Float!
        $basePrice: Float!
        $urlKey: String!
        $gTld: String!
        $active: Boolean!
    ) {
        productTemplateDomainEdit(
            id: $id
            title: $title
            setup: $setup
            gTld: $gTld
            urlKey: $urlKey
            basePrice: $basePrice
            active: $active
        ) {
            ...ProductTemplateDomainPart
        }
    }
    ${ProductTemplateDomainPartFragmentDoc}
`;

export function useMutationeditProductTemplateDomain() {
    return Urql.useMutation<
        EditProductTemplateDomainMutation,
        EditProductTemplateDomainMutationVariables
    >(EditProductTemplateDomainDocument);
}
export const DeleteProductTemplateDomainDocument = gql`
    mutation deleteProductTemplateDomain($id: ID!) {
        productTemplateDomainDelete(id: $id)
    }
`;

export function useMutationdeleteProductTemplateDomain() {
    return Urql.useMutation<
        DeleteProductTemplateDomainMutation,
        DeleteProductTemplateDomainMutationVariables
    >(DeleteProductTemplateDomainDocument);
}
export const ProductTemplateExtendPeriodsDocument = gql`
    query productTemplateExtendPeriods($filter: CordFilter) {
        productTemplateExtendPeriods(filter: $filter) {
            edges {
                id
                expression
                discount
                discountFactor
                globalGroup
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryproductTemplateExtendPeriods(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateExtendPeriodsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateExtendPeriodsQuery>({
        query: ProductTemplateExtendPeriodsDocument,
        ...options,
    });
}
export const ProductTemplateExtendPeriodByIdDocument = gql`
    query productTemplateExtendPeriodById($id: ID!) {
        productTemplateExtendPeriodById(id: $id) {
            id
            expression
            discount
            discountFactor
            globalGroup
        }
    }
`;

export function useQueryproductTemplateExtendPeriodById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateExtendPeriodByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateExtendPeriodByIdQuery>({
        query: ProductTemplateExtendPeriodByIdDocument,
        ...options,
    });
}
export const CreateProductTemplateExtendPeriodDocument = gql`
    mutation createProductTemplateExtendPeriod(
        $expression: String!
        $globalGroup: String!
        $discountFactor: Float!
        $discount: Float!
    ) {
        productTemplateExtendPeriodCreate(
            expression: $expression
            globalGroup: $globalGroup
            discountFactor: $discountFactor
            discount: $discount
        ) {
            id
        }
    }
`;

export function useMutationcreateProductTemplateExtendPeriod() {
    return Urql.useMutation<
        CreateProductTemplateExtendPeriodMutation,
        CreateProductTemplateExtendPeriodMutationVariables
    >(CreateProductTemplateExtendPeriodDocument);
}
export const EditProductTemplateExtendPeriodDocument = gql`
    mutation editProductTemplateExtendPeriod(
        $id: ID!
        $expression: String!
        $globalGroup: String!
        $discountFactor: Float!
        $discount: Float!
    ) {
        productTemplateExtendPeriodEdit(
            id: $id
            expression: $expression
            globalGroup: $globalGroup
            discountFactor: $discountFactor
            discount: $discount
        ) {
            id
            expression
            discount
            discountFactor
            globalGroup
        }
    }
`;

export function useMutationeditProductTemplateExtendPeriod() {
    return Urql.useMutation<
        EditProductTemplateExtendPeriodMutation,
        EditProductTemplateExtendPeriodMutationVariables
    >(EditProductTemplateExtendPeriodDocument);
}
export const DeleteProductTemplateExtendPeriodDocument = gql`
    mutation deleteProductTemplateExtendPeriod($id: ID!) {
        productTemplateExtendPeriodDelete(id: $id)
    }
`;

export function useMutationdeleteProductTemplateExtendPeriod() {
    return Urql.useMutation<
        DeleteProductTemplateExtendPeriodMutation,
        DeleteProductTemplateExtendPeriodMutationVariables
    >(DeleteProductTemplateExtendPeriodDocument);
}
export const ProductTemplateGameserverByIdDocument = gql`
    query productTemplateGameserverById($id: ID!) {
        productTemplateGameserverById(id: $id) {
            ...ProductTemplateGameserverPart
        }
    }
    ${ProductTemplateGameserverPartFragmentDoc}
`;

export function useQueryproductTemplateGameserverById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateGameserverByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateGameserverByIdQuery>({
        query: ProductTemplateGameserverByIdDocument,
        ...options,
    });
}
export const ProductTemplateGameserversDocument = gql`
    query productTemplateGameservers($filter: CordFilter) {
        productTemplateGameservers(filter: $filter) {
            edges {
                id
                memory {
                    id
                }
                slot {
                    id
                }
                options {
                    id
                }
                urlKey
                title
                setup
                basePrice
                active
                update
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryproductTemplateGameservers(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateGameserversQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateGameserversQuery>({
        query: ProductTemplateGameserversDocument,
        ...options,
    });
}
export const CreateProductTemplateGameserverDocument = gql`
    mutation createProductTemplateGameserver(
        $title: String!
        $setup: Float!
        $basePrice: Float!
        $urlKey: String!
        $active: Boolean!
        $slotOptionId: ID
        $memoryOptionId: ID
    ) {
        productTemplateGameserverCreate(
            title: $title
            setup: $setup
            basePrice: $basePrice
            urlKey: $urlKey
            active: $active
            slotOptionId: $slotOptionId
            memoryOptionId: $memoryOptionId
        ) {
            id
        }
    }
`;

export function useMutationcreateProductTemplateGameserver() {
    return Urql.useMutation<
        CreateProductTemplateGameserverMutation,
        CreateProductTemplateGameserverMutationVariables
    >(CreateProductTemplateGameserverDocument);
}
export const EditProductTemplateGameserverDocument = gql`
    mutation editProductTemplateGameserver(
        $id: ID!
        $title: String!
        $setup: Float!
        $basePrice: Float!
        $urlKey: String!
        $active: Boolean!
        $slotOptionId: ID
        $memoryOptionId: ID
        $assignedGameserverTemplates: [ID!]
        $hostNodeFilterKey: String
        $optionIds: [ID!]
    ) {
        productTemplateGameserverEdit(
            id: $id
            title: $title
            setup: $setup
            urlKey: $urlKey
            assignedGameserverTemplates: $assignedGameserverTemplates
            basePrice: $basePrice
            active: $active
            hostNodeFilterKey: $hostNodeFilterKey
            slotOptionId: $slotOptionId
            memoryOptionId: $memoryOptionId
            optionIds: $optionIds
        ) {
            ...ProductTemplateGameserverPart
        }
    }
    ${ProductTemplateGameserverPartFragmentDoc}
`;

export function useMutationeditProductTemplateGameserver() {
    return Urql.useMutation<
        EditProductTemplateGameserverMutation,
        EditProductTemplateGameserverMutationVariables
    >(EditProductTemplateGameserverDocument);
}
export const DeleteProductTemplateGameserverDocument = gql`
    mutation deleteProductTemplateGameserver($id: ID!) {
        productTemplateGameserverDelete(id: $id)
    }
`;

export function useMutationdeleteProductTemplateGameserver() {
    return Urql.useMutation<
        DeleteProductTemplateGameserverMutation,
        DeleteProductTemplateGameserverMutationVariables
    >(DeleteProductTemplateGameserverDocument);
}
export const ProductTemplateOptionByIdDocument = gql`
    query productTemplateOptionById($id: ID!) {
        productTemplateOptionById(id: $id) {
            id
            title
            display
            create
            upgradeable
            variants(includeHidden: true) {
                id
                priceMultiplier
                price
                priceSetup
                key
                label
                value
                meta
                siblings {
                    id
                }
            }
        }
    }
`;

export function useQueryproductTemplateOptionById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateOptionByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateOptionByIdQuery>({
        query: ProductTemplateOptionByIdDocument,
        ...options,
    });
}
export const ProductTemplateOptionsDocument = gql`
    query productTemplateOptions($filter: CordFilter) {
        productTemplateOptions(filter: $filter) {
            edges {
                id
                title
                display
                create
                variants(includeHidden: true) {
                    id
                    priceMultiplier
                    price
                    priceSetup
                    key
                    label
                    value
                    meta
                    siblings {
                        id
                    }
                }
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryproductTemplateOptions(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateOptionsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateOptionsQuery>({
        query: ProductTemplateOptionsDocument,
        ...options,
    });
}
export const CreateProductTemplateOptionDocument = gql`
    mutation createProductTemplateOption($title: String!, $display: String!) {
        productTemplateOptionCreate(title: $title, display: $display) {
            id
        }
    }
`;

export function useMutationcreateProductTemplateOption() {
    return Urql.useMutation<
        CreateProductTemplateOptionMutation,
        CreateProductTemplateOptionMutationVariables
    >(CreateProductTemplateOptionDocument);
}
export const EditProductTemplateOptionDocument = gql`
    mutation editProductTemplateOption(
        $id: ID!
        $title: String!
        $display: String!
        $upgradeable: Boolean!
    ) {
        productTemplateOptionEdit(
            id: $id
            title: $title
            display: $display
            upgradeable: $upgradeable
        ) {
            id
        }
    }
`;

export function useMutationeditProductTemplateOption() {
    return Urql.useMutation<
        EditProductTemplateOptionMutation,
        EditProductTemplateOptionMutationVariables
    >(EditProductTemplateOptionDocument);
}
export const ProductTemplateOptionVariantByIdDocument = gql`
    query productTemplateOptionVariantById($id: ID!) {
        productTemplateOptionVariantById(id: $id) {
            id
            priceMultiplier
            price
            priceSetup
            key
            sort
            hidden
            label
            value
            meta
            siblings {
                id
            }
        }
    }
`;

export function useQueryproductTemplateOptionVariantById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateOptionVariantByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateOptionVariantByIdQuery>({
        query: ProductTemplateOptionVariantByIdDocument,
        ...options,
    });
}
export const ProductTemplateOptionVariantsDocument = gql`
    query productTemplateOptionVariants($filter: CordFilter) {
        productTemplateOptionVariants(filter: $filter) {
            edges {
                id
                priceMultiplier
                price
                priceSetup
                key
                label
                value
                meta
                sort
                siblings {
                    id
                }
                option {
                    id
                    title
                }
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryproductTemplateOptionVariants(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateOptionVariantsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateOptionVariantsQuery>({
        query: ProductTemplateOptionVariantsDocument,
        ...options,
    });
}
export const CreateProductTemplateOptionVariantDocument = gql`
    mutation createProductTemplateOptionVariant(
        $optionId: ID!
        $key: String!
        $sort: Int!
        $label: String!
        $price: Float!
        $priceMultiplier: Float!
        $priceSetup: Float!
    ) {
        productTemplateOptionVariantCreate(
            optionId: $optionId
            key: $key
            label: $label
            sort: $sort
            price: $price
            priceMultiplier: $priceMultiplier
            priceSetup: $priceSetup
        ) {
            id
        }
    }
`;

export function useMutationcreateProductTemplateOptionVariant() {
    return Urql.useMutation<
        CreateProductTemplateOptionVariantMutation,
        CreateProductTemplateOptionVariantMutationVariables
    >(CreateProductTemplateOptionVariantDocument);
}
export const EditProductTemplateOptionVariantDocument = gql`
    mutation editProductTemplateOptionVariant(
        $id: ID!
        $key: String!
        $sort: Int!
        $label: String!
        $price: Float!
        $value: String
        $priceMultiplier: Float!
        $priceSetup: Float!
        $hidden: Boolean
    ) {
        productTemplateOptionVariantEdit(
            id: $id
            key: $key
            sort: $sort
            label: $label
            price: $price
            value: $value
            priceMultiplier: $priceMultiplier
            priceSetup: $priceSetup
            hidden: $hidden
        ) {
            id
            priceMultiplier
            sort
            hidden
            price
            priceSetup
            key
            label
            value
            meta
            siblings {
                id
            }
        }
    }
`;

export function useMutationeditProductTemplateOptionVariant() {
    return Urql.useMutation<
        EditProductTemplateOptionVariantMutation,
        EditProductTemplateOptionVariantMutationVariables
    >(EditProductTemplateOptionVariantDocument);
}
export const DeleteProductTemplateOptionVariantDocument = gql`
    mutation deleteProductTemplateOptionVariant($id: ID!) {
        productTemplateOptionVariantDelete(id: $id)
    }
`;

export function useMutationdeleteProductTemplateOptionVariant() {
    return Urql.useMutation<
        DeleteProductTemplateOptionVariantMutation,
        DeleteProductTemplateOptionVariantMutationVariables
    >(DeleteProductTemplateOptionVariantDocument);
}
export const ProductTemplateSimpleByIdDocument = gql`
    query ProductTemplateSimpleById($id: ID!) {
        productTemplateSimpleById(id: $id) {
            ...ProductTemplateSimplePart
        }
    }
    ${ProductTemplateSimplePartFragmentDoc}
`;

export function useQueryProductTemplateSimpleById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateSimpleByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateSimpleByIdQuery>({
        query: ProductTemplateSimpleByIdDocument,
        ...options,
    });
}
export const ProductTemplateSimplesDocument = gql`
    query ProductTemplateSimples($filter: CordFilter) {
        productTemplateSimples(filter: $filter) {
            edges {
                id
                options {
                    id
                }
                urlKey
                title
                setup
                basePrice
                active
                update
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryProductTemplateSimples(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateSimplesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateSimplesQuery>({
        query: ProductTemplateSimplesDocument,
        ...options,
    });
}
export const CreateProductTemplateSimpleDocument = gql`
    mutation createProductTemplateSimple(
        $title: String!
        $setup: Float!
        $basePrice: Float!
        $urlKey: String!
        $active: Boolean!
    ) {
        productTemplateSimpleCreate(
            title: $title
            setup: $setup
            basePrice: $basePrice
            urlKey: $urlKey
            active: $active
        ) {
            id
        }
    }
`;

export function useMutationcreateProductTemplateSimple() {
    return Urql.useMutation<
        CreateProductTemplateSimpleMutation,
        CreateProductTemplateSimpleMutationVariables
    >(CreateProductTemplateSimpleDocument);
}
export const EditProductTemplateSimpleDocument = gql`
    mutation editProductTemplateSimple(
        $id: ID!
        $title: String!
        $setup: Float!
        $basePrice: Float!
        $urlKey: String!
        $active: Boolean!
        $optionIds: [ID!]!
        $includedGTld: String
        $extendIntervalIds: [ID!]
    ) {
        productTemplateSimpleEdit(
            id: $id
            title: $title
            setup: $setup
            urlKey: $urlKey
            basePrice: $basePrice
            active: $active
            optionIds: $optionIds
            includedGTld: $includedGTld
            extendIntervalIds: $extendIntervalIds
        ) {
            ...ProductTemplateSimplePart
        }
    }
    ${ProductTemplateSimplePartFragmentDoc}
`;

export function useMutationeditProductTemplateSimple() {
    return Urql.useMutation<
        EditProductTemplateSimpleMutation,
        EditProductTemplateSimpleMutationVariables
    >(EditProductTemplateSimpleDocument);
}
export const DeleteProductTemplateSimpleDocument = gql`
    mutation deleteProductTemplateSimple($id: ID!) {
        productTemplateSimpleDelete(id: $id)
    }
`;

export function useMutationdeleteProductTemplateSimple() {
    return Urql.useMutation<
        DeleteProductTemplateSimpleMutation,
        DeleteProductTemplateSimpleMutationVariables
    >(DeleteProductTemplateSimpleDocument);
}
export const ProductTemplateTeamspeakByIdDocument = gql`
    query productTemplateTeamspeakById($id: ID!) {
        productTemplateTeamspeakById(id: $id) {
            ...ProductTemplateTeamspeakPart
        }
    }
    ${ProductTemplateTeamspeakPartFragmentDoc}
`;

export function useQueryproductTemplateTeamspeakById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateTeamspeakByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateTeamspeakByIdQuery>({
        query: ProductTemplateTeamspeakByIdDocument,
        ...options,
    });
}
export const ProductTemplateTeamspeaksDocument = gql`
    query productTemplateTeamspeaks($filter: CordFilter) {
        productTemplateTeamspeaks(filter: $filter) {
            edges {
                id
                slot {
                    id
                }
                options {
                    id
                }
                urlKey
                title
                setup
                basePrice
                active
                update
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryproductTemplateTeamspeaks(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateTeamspeaksQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateTeamspeaksQuery>({
        query: ProductTemplateTeamspeaksDocument,
        ...options,
    });
}
export const CreateProductTemplateTeamspeakDocument = gql`
    mutation createProductTemplateTeamspeak(
        $title: String!
        $setup: Float!
        $basePrice: Float!
        $urlKey: String!
        $active: Boolean!
        $slotOptionId: ID!
    ) {
        productTemplateTeamspeakCreate(
            title: $title
            setup: $setup
            basePrice: $basePrice
            urlKey: $urlKey
            active: $active
            slotOptionId: $slotOptionId
        ) {
            id
        }
    }
`;

export function useMutationcreateProductTemplateTeamspeak() {
    return Urql.useMutation<
        CreateProductTemplateTeamspeakMutation,
        CreateProductTemplateTeamspeakMutationVariables
    >(CreateProductTemplateTeamspeakDocument);
}
export const EditProductTemplateTeamspeakDocument = gql`
    mutation editProductTemplateTeamspeak(
        $id: ID!
        $title: String!
        $setup: Float!
        $basePrice: Float!
        $urlKey: String!
        $active: Boolean!
        $slotOptionId: ID!
    ) {
        productTemplateTeamspeakEdit(
            id: $id
            title: $title
            setup: $setup
            urlKey: $urlKey
            basePrice: $basePrice
            active: $active
            slotOptionId: $slotOptionId
        ) {
            ...ProductTemplateTeamspeakPart
        }
    }
    ${ProductTemplateTeamspeakPartFragmentDoc}
`;

export function useMutationeditProductTemplateTeamspeak() {
    return Urql.useMutation<
        EditProductTemplateTeamspeakMutation,
        EditProductTemplateTeamspeakMutationVariables
    >(EditProductTemplateTeamspeakDocument);
}
export const DeleteProductTemplateTeamspeakDocument = gql`
    mutation deleteProductTemplateTeamspeak($id: ID!) {
        productTemplateTeamspeakDelete(id: $id)
    }
`;

export function useMutationdeleteProductTemplateTeamspeak() {
    return Urql.useMutation<
        DeleteProductTemplateTeamspeakMutation,
        DeleteProductTemplateTeamspeakMutationVariables
    >(DeleteProductTemplateTeamspeakDocument);
}
export const ProductTemplateVserversDocument = gql`
    query productTemplateVservers($filter: CordFilter) {
        productTemplateVservers(filter: $filter) {
            edges {
                ...ProductTemplateVserverPart
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${ProductTemplateVserverPartFragmentDoc}
`;

export function useQueryproductTemplateVservers(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateVserversQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateVserversQuery>({
        query: ProductTemplateVserversDocument,
        ...options,
    });
}
export const ProductTemplateVserverByIdDocument = gql`
    query productTemplateVserverById($id: ID!) {
        productTemplateVserverById(id: $id) {
            ...ProductTemplateVserverPart
        }
    }
    ${ProductTemplateVserverPartFragmentDoc}
`;

export function useQueryproductTemplateVserverById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateVserverByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateVserverByIdQuery>({
        query: ProductTemplateVserverByIdDocument,
        ...options,
    });
}
export const CreateProductTemplateVserverDocument = gql`
    mutation createProductTemplateVserver(
        $data: ProductTemplateVserverCreateInput!
    ) {
        productTemplateVserverCreate(data: $data) {
            ...ProductTemplateVserverPart
        }
    }
    ${ProductTemplateVserverPartFragmentDoc}
`;

export function useMutationcreateProductTemplateVserver() {
    return Urql.useMutation<
        CreateProductTemplateVserverMutation,
        CreateProductTemplateVserverMutationVariables
    >(CreateProductTemplateVserverDocument);
}
export const EditProductTemplateVserverDocument = gql`
    mutation editProductTemplateVserver(
        $data: ProductTemplateVserverEditInput!
    ) {
        productTemplateVserverEdit(data: $data) {
            ...ProductTemplateVserverPart
        }
    }
    ${ProductTemplateVserverPartFragmentDoc}
`;

export function useMutationeditProductTemplateVserver() {
    return Urql.useMutation<
        EditProductTemplateVserverMutation,
        EditProductTemplateVserverMutationVariables
    >(EditProductTemplateVserverDocument);
}
export const DeleteProductTemplateVserverDocument = gql`
    mutation deleteProductTemplateVserver($id: ID!) {
        productTemplateVserverDelete(id: $id)
    }
`;

export function useMutationdeleteProductTemplateVserver() {
    return Urql.useMutation<
        DeleteProductTemplateVserverMutation,
        DeleteProductTemplateVserverMutationVariables
    >(DeleteProductTemplateVserverDocument);
}
export const TranslationsDocument = gql`
    query translations($filter: CordFilter) {
        translations(filter: $filter) {
            edges {
                ...TranslationPart
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${TranslationPartFragmentDoc}
`;

export function useQuerytranslations(
    options: Omit<Urql.UseQueryArgs<TranslationsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<TranslationsQuery>({
        query: TranslationsDocument,
        ...options,
    });
}
export const TranslationByIdDocument = gql`
    query translationById($id: ID!) {
        translationById(id: $id) {
            ...TranslationPart
        }
    }
    ${TranslationPartFragmentDoc}
`;

export function useQuerytranslationById(
    options: Omit<
        Urql.UseQueryArgs<TranslationByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<TranslationByIdQuery>({
        query: TranslationByIdDocument,
        ...options,
    });
}
export const TranslationEditDocument = gql`
    mutation translationEdit(
        $id: ID!
        $value: String!
        $key: String!
        $language: String!
    ) {
        translationEdit(
            id: $id
            value: $value
            key: $key
            language: $language
        ) {
            ...TranslationPart
        }
    }
    ${TranslationPartFragmentDoc}
`;

export function useMutationtranslationEdit() {
    return Urql.useMutation<
        TranslationEditMutation,
        TranslationEditMutationVariables
    >(TranslationEditDocument);
}
export const TranslationCreateDocument = gql`
    mutation translationCreate {
        translationCreate {
            ...TranslationPart
        }
    }
    ${TranslationPartFragmentDoc}
`;

export function useMutationtranslationCreate() {
    return Urql.useMutation<
        TranslationCreateMutation,
        TranslationCreateMutationVariables
    >(TranslationCreateDocument);
}
export const TranslationDeleteDocument = gql`
    mutation translationDelete($id: ID!) {
        translationDelete(id: $id)
    }
`;

export function useMutationtranslationDelete() {
    return Urql.useMutation<
        TranslationDeleteMutation,
        TranslationDeleteMutationVariables
    >(TranslationDeleteDocument);
}
export const UserSetActiveDocument = gql`
    mutation userSetActive($id: ID!, $active: Boolean!) {
        userSetActive(id: $id, active: $active) {
            ...UserPart
        }
    }
    ${UserPartFragmentDoc}
`;

export function useMutationuserSetActive() {
    return Urql.useMutation<
        UserSetActiveMutation,
        UserSetActiveMutationVariables
    >(UserSetActiveDocument);
}
export const PingDocument = gql`
    query ping {
        ping
    }
`;

export function useQueryping(
    options: Omit<Urql.UseQueryArgs<PingQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<PingQuery>({ query: PingDocument, ...options });
}
export const UsersDocument = gql`
    query users($filter: CordFilter) {
        users(filter: $filter) {
            edges {
                ...UserPart
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${UserPartFragmentDoc}
`;

export function useQueryusers(
    options: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
}
export const UserTestMyPasswordDocument = gql`
    mutation userTestMyPassword($password: String!) {
        userTestMyPassword(password: $password)
    }
`;

export function useMutationuserTestMyPassword() {
    return Urql.useMutation<
        UserTestMyPasswordMutation,
        UserTestMyPasswordMutationVariables
    >(UserTestMyPasswordDocument);
}
export const UserByIdDocument = gql`
    query userById($id: ID!) {
        userById(id: $id) {
            ...UserPart
            verifyLevel
            lastLogin
            publicName
            customerId
            vat
            create
            active
            supportId
            address {
                ...UserPartAddress
            }
            tickets {
                id
                create
                open
                subject
                status
                category
            }
            products {
                id
            }
            gameservers {
                id
                name
                product {
                    id
                    create
                    expire
                }
            }
            teamspeaks {
                id
                name
                product {
                    id
                    create
                    expire
                }
            }
            vservers {
                id
                name
                ips {
                    ip
                }
                product {
                    id
                    create
                    expire
                }
            }
            domains {
                id
                authcode
                requestNewAuthcode
                registered
                tld
                name
                product {
                    id
                    create
                    expire
                }
            }
            simples {
                id
                name
                description
                product {
                    id
                    create
                    expire
                }
            }
            transactions {
                id
                type
                billId
                total
                create
                charge {
                    id
                    create
                }
            }
        }
    }
    ${UserPartFragmentDoc}
    ${UserPartAddressFragmentDoc}
`;

export function useQueryuserById(
    options: Omit<Urql.UseQueryArgs<UserByIdQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<UserByIdQuery>({
        query: UserByIdDocument,
        ...options,
    });
}
export const MeLoggedInDocument = gql`
    query meLoggedIn {
        user_is_login
    }
`;

export function useQuerymeLoggedIn(
    options: Omit<Urql.UseQueryArgs<MeLoggedInQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<MeLoggedInQuery>({
        query: MeLoggedInDocument,
        ...options,
    });
}
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
        userLoginWithEmailToken(username: $username, password: $password)
    }
`;

export function useMutationlogin() {
    return Urql.useMutation<LoginMutation, LoginMutationVariables>(
        LoginDocument
    );
}
export const AdminLoginAsUserDocument = gql`
    mutation adminLoginAsUser($id: ID!) {
        user_admin_login(id: $id)
    }
`;

export function useMutationadminLoginAsUser() {
    return Urql.useMutation<
        AdminLoginAsUserMutation,
        AdminLoginAsUserMutationVariables
    >(AdminLoginAsUserDocument);
}
export const UserMakeFeedbackDocument = gql`
    mutation userMakeFeedback(
        $availableForMoreFeedback: Boolean
        $feedbackMessage: String
        $feedbackSatisfied: Boolean
    ) {
        userMakeFeedback(
            availableForMoreFeedback: $availableForMoreFeedback
            feedbackMessage: $feedbackMessage
            feedbackSatisfied: $feedbackSatisfied
        ) {
            id
            canMakeFeedback
        }
    }
`;

export function useMutationuserMakeFeedback() {
    return Urql.useMutation<
        UserMakeFeedbackMutation,
        UserMakeFeedbackMutationVariables
    >(UserMakeFeedbackDocument);
}
export const UserMeDocument = gql`
    query userMe {
        user_me {
            ...UserPart
            supportId
            publicName
            canMakeFeedback
            address {
                ...UserPartAddress
            }
        }
    }
    ${UserPartFragmentDoc}
    ${UserPartAddressFragmentDoc}
`;

export function useQueryuserMe(
    options: Omit<Urql.UseQueryArgs<UserMeQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<UserMeQuery>({ query: UserMeDocument, ...options });
}
export const UserAddressAddVerifyDocumentDocument = gql`
    mutation userAddressAddVerifyDocument($fileId: ID!) {
        userAddressAddVerifyDocument(fileId: $fileId) {
            ...UserPart
            supportId
            address {
                ...UserPartAddress
            }
        }
    }
    ${UserPartFragmentDoc}
    ${UserPartAddressFragmentDoc}
`;

export function useMutationuserAddressAddVerifyDocument() {
    return Urql.useMutation<
        UserAddressAddVerifyDocumentMutation,
        UserAddressAddVerifyDocumentMutationVariables
    >(UserAddressAddVerifyDocumentDocument);
}
export const UserAddressDelVerifyDocumentDocument = gql`
    mutation userAddressDelVerifyDocument {
        userAddressDelVerifyDocument {
            ...UserPart
            supportId
            address {
                ...UserPartAddress
            }
        }
    }
    ${UserPartFragmentDoc}
    ${UserPartAddressFragmentDoc}
`;

export function useMutationuserAddressDelVerifyDocument() {
    return Urql.useMutation<
        UserAddressDelVerifyDocumentMutation,
        UserAddressDelVerifyDocumentMutationVariables
    >(UserAddressDelVerifyDocumentDocument);
}
export const UserMeCustomCreditsDocument = gql`
    query userMeCustomCredits {
        user_me {
            id
            bonusCredits
            importedCredits
            credits
            canHaveBonusCredits
        }
    }
`;

export function useQueryuserMeCustomCredits(
    options: Omit<
        Urql.UseQueryArgs<UserMeCustomCreditsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<UserMeCustomCreditsQuery>({
        query: UserMeCustomCreditsDocument,
        ...options,
    });
}
export const UserCustomCreditsDocument = gql`
    query userCustomCredits($id: ID!) {
        userById(id: $id) {
            id
            bonusCredits
            importedCredits
            credits
        }
    }
`;

export function useQueryuserCustomCredits(
    options: Omit<
        Urql.UseQueryArgs<UserCustomCreditsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<UserCustomCreditsQuery>({
        query: UserCustomCreditsDocument,
        ...options,
    });
}
export const UserEditSelfGeneralDocument = gql`
    mutation userEditSelfGeneral(
        $new_password: String
        $nickname: String!
        $forceEmailLogin: Boolean
        $localAvatarId: ID
    ) {
        userEditSelfGeneral(
            new_password: $new_password
            nickname: $nickname
            forceEmailLogin: $forceEmailLogin
            localAvatarId: $localAvatarId
        ) {
            ...UserPart
            address {
                ...UserPartAddress
            }
        }
    }
    ${UserPartFragmentDoc}
    ${UserPartAddressFragmentDoc}
`;

export function useMutationuserEditSelfGeneral() {
    return Urql.useMutation<
        UserEditSelfGeneralMutation,
        UserEditSelfGeneralMutationVariables
    >(UserEditSelfGeneralDocument);
}
export const UserEditSelfAddressDocument = gql`
    mutation userEditSelfAddress($data: UserInputUserEditAddress!) {
        userEditSelfAddress(data: $data) {
            ...UserPart
            address {
                ...UserPartAddress
            }
        }
    }
    ${UserPartFragmentDoc}
    ${UserPartAddressFragmentDoc}
`;

export function useMutationuserEditSelfAddress() {
    return Urql.useMutation<
        UserEditSelfAddressMutation,
        UserEditSelfAddressMutationVariables
    >(UserEditSelfAddressDocument);
}
export const UserEditSelfEmailDocument = gql`
    mutation userEditSelfEmail($email: String!, $password: String!) {
        userEditSelfEmail(email: $email, password: $password) {
            ...UserPart
        }
    }
    ${UserPartFragmentDoc}
`;

export function useMutationuserEditSelfEmail() {
    return Urql.useMutation<
        UserEditSelfEmailMutation,
        UserEditSelfEmailMutationVariables
    >(UserEditSelfEmailDocument);
}
export const UserCountriesDocument = gql`
    query userCountries {
        userCountries
    }
`;

export function useQueryuserCountries(
    options: Omit<Urql.UseQueryArgs<UserCountriesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<UserCountriesQuery>({
        query: UserCountriesDocument,
        ...options,
    });
}
export const RegisterNewUserDocument = gql`
    mutation registerNewUser(
        $googleCaptcha: String!
        $data: UserInputRegister!
    ) {
        user_register(data: $data, googleCaptcha: $googleCaptcha)
    }
`;

export function useMutationregisterNewUser() {
    return Urql.useMutation<
        RegisterNewUserMutation,
        RegisterNewUserMutationVariables
    >(RegisterNewUserDocument);
}
export const UserAdminLogoutDocument = gql`
    mutation userAdminLogout {
        userAdminLogout
    }
`;

export function useMutationuserAdminLogout() {
    return Urql.useMutation<
        UserAdminLogoutMutation,
        UserAdminLogoutMutationVariables
    >(UserAdminLogoutDocument);
}
export const User_VerifyDocument = gql`
    mutation user_verify($token: String!) {
        user_verify(token: $token)
    }
`;

export function useMutationuser_Verify() {
    return Urql.useMutation<User_VerifyMutation, User_VerifyMutationVariables>(
        User_VerifyDocument
    );
}
export const Reset_PasswordDocument = gql`
    mutation reset_password($token: String!, $password: String!) {
        user_reset_password_token(token: $token, password: $password)
    }
`;

export function useMutationreset_Password() {
    return Urql.useMutation<
        Reset_PasswordMutation,
        Reset_PasswordMutationVariables
    >(Reset_PasswordDocument);
}
export const UserResetPasswordDocument = gql`
    mutation userResetPassword($email: String!, $captcha: String!) {
        user_reset_password(email: $email, captcha: $captcha)
    }
`;

export function useMutationuserResetPassword() {
    return Urql.useMutation<
        UserResetPasswordMutation,
        UserResetPasswordMutationVariables
    >(UserResetPasswordDocument);
}
export const ProductAdminInfoDocument = gql`
    query productAdminInfo {
        productAdminInfo {
            domains
            vservers
            gameservers
            vserverFreeIps
            teamspeaks
            simples
            activeUsers
            userRegisterYesterday {
                label
                value
            }
            userRegisterToDay {
                label
                value
            }
            chargesToday {
                label
                value
            }
            chargesYesterday {
                label
                value
            }
            hostNodeFree {
                type
                free
                filter
            }
        }
    }
`;

export function useQueryproductAdminInfo(
    options: Omit<
        Urql.UseQueryArgs<ProductAdminInfoQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductAdminInfoQuery>({
        query: ProductAdminInfoDocument,
        ...options,
    });
}
export const UserAddresssDocument = gql`
    query userAddresss($filter: CordFilter) {
        userAddresss(filter: $filter) {
            edges {
                firstname
                lastname
                street1
                zip
                country
                title
                city
                birthdate
                phone
                phoneMobile
                company
                vatId
                create
                id
                verified
                vat
                user {
                    id
                }
                verifyDocument {
                    id
                    originalname
                    url
                    create
                }
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryuserAddresss(
    options: Omit<Urql.UseQueryArgs<UserAddresssQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<UserAddresssQuery>({
        query: UserAddresssDocument,
        ...options,
    });
}
export const UserAddressConfirmVerifyDocument = gql`
    mutation userAddressConfirmVerify($id: ID!) {
        userAddressConfirmVerify(id: $id) {
            firstname
            lastname
            street1
            zip
            country
            title
            city
            birthdate
            phone
            phoneMobile
            company
            vatId
            create
            id
            verified
            vat
            user {
                id
            }
            verifyDocument {
                id
                originalname
                url
                create
            }
        }
    }
`;

export function useMutationuserAddressConfirmVerify() {
    return Urql.useMutation<
        UserAddressConfirmVerifyMutation,
        UserAddressConfirmVerifyMutationVariables
    >(UserAddressConfirmVerifyDocument);
}
export const UserAddressRejectVerifyDocument = gql`
    mutation userAddressRejectVerify($id: ID!) {
        userAddressRejectVerify(id: $id) {
            firstname
            lastname
            street1
            zip
            country
            title
            city
            birthdate
            phone
            phoneMobile
            company
            vatId
            create
            id
            verified
            vat
            user {
                id
            }
            verifyDocument {
                id
                originalname
                url
                create
            }
        }
    }
`;

export function useMutationuserAddressRejectVerify() {
    return Urql.useMutation<
        UserAddressRejectVerifyMutation,
        UserAddressRejectVerifyMutationVariables
    >(UserAddressRejectVerifyDocument);
}
export const UserCommentsByUserDocument = gql`
    query userCommentsByUser($userId: ID!) {
        userCommentsByUser(userId: $userId) {
            message
            id
            create
        }
    }
`;

export function useQueryuserCommentsByUser(
    options: Omit<
        Urql.UseQueryArgs<UserCommentsByUserQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<UserCommentsByUserQuery>({
        query: UserCommentsByUserDocument,
        ...options,
    });
}
export const UserCommentCreateDocument = gql`
    mutation userCommentCreate($userId: ID!, $message: String!) {
        userCommentCreate(userId: $userId, message: $message) {
            message
            id
            create
        }
    }
`;

export function useMutationuserCommentCreate() {
    return Urql.useMutation<
        UserCommentCreateMutation,
        UserCommentCreateMutationVariables
    >(UserCommentCreateDocument);
}
export const MyUserOAuthTokensDocument = gql`
    query myUserOAuthTokens {
        myUserOAuthTokens {
            id
            service
            confirmed
        }
    }
`;

export function useQuerymyUserOAuthTokens(
    options: Omit<
        Urql.UseQueryArgs<MyUserOAuthTokensQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyUserOAuthTokensQuery>({
        query: MyUserOAuthTokensDocument,
        ...options,
    });
}
export const UserOauthTokenConfirmDocument = gql`
    mutation userOauthTokenConfirm($password: String!, $id: ID!) {
        userOauthTokenConfirm(id: $id, password: $password) {
            id
            service
            confirmed
        }
    }
`;

export function useMutationuserOauthTokenConfirm() {
    return Urql.useMutation<
        UserOauthTokenConfirmMutation,
        UserOauthTokenConfirmMutationVariables
    >(UserOauthTokenConfirmDocument);
}
export const UserOAuthDeleteTokenDocument = gql`
    mutation userOAuthDeleteToken($id: ID!) {
        userOAuthDeleteToken(id: $id)
    }
`;

export function useMutationuserOAuthDeleteToken() {
    return Urql.useMutation<
        UserOAuthDeleteTokenMutation,
        UserOAuthDeleteTokenMutationVariables
    >(UserOAuthDeleteTokenDocument);
}
export const ProductVserverByIdBackupsDocument = gql`
    query productVserverByIdBackups($id: ID!) {
        productVserverById(id: $id) {
            ...ProductVserverPart
            backups {
                id
                create
                sizeInMb
                restorable
            }
        }
    }
    ${ProductVserverPartFragmentDoc}
`;

export function useQueryproductVserverByIdBackups(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverByIdBackupsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverByIdBackupsQuery>({
        query: ProductVserverByIdBackupsDocument,
        ...options,
    });
}
export const ProductVserverDeleteDocument = gql`
    mutation productVserverDelete($id: ID!) {
        productVserverDelete(id: $id)
    }
`;

export function useMutationproductVserverDelete() {
    return Urql.useMutation<
        ProductVserverDeleteMutation,
        ProductVserverDeleteMutationVariables
    >(ProductVserverDeleteDocument);
}
export const ProductVserversDocument = gql`
    query productVservers($filter: CordFilter) {
        productVservers(filter: $filter) {
            edges {
                ...ProductVserverPart
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${ProductVserverPartFragmentDoc}
`;

export function useQueryproductVservers(
    options: Omit<
        Urql.UseQueryArgs<ProductVserversQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserversQuery>({
        query: ProductVserversDocument,
        ...options,
    });
}
export const ProductVserverExistDocument = gql`
    query productVserverExist($id: ID!) {
        productVserverExist(vserverId: $id)
    }
`;

export function useQueryproductVserverExist(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverExistQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverExistQuery>({
        query: ProductVserverExistDocument,
        ...options,
    });
}
export const ProductVserverStatsDocument = gql`
    query productVserverStats($id: ID!) {
        productVserverStats(vserverId: $id) {
            cpu
            cpus
            disk
            diskread
            diskwrite
            lock
            maxdisk
            maxmem
            maxswap
            mem
            name
            netin
            netout
            pid
            status
            swap
            template
            type
            time
            uptime
            vmid
        }
    }
`;

export function useQueryproductVserverStats(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverStatsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverStatsQuery>({
        query: ProductVserverStatsDocument,
        ...options,
    });
}
export const ProductVserverRunningDocument = gql`
    query productVserverRunning($id: ID!) {
        productVserverRunning(vserverId: $id)
    }
`;

export function useQueryproductVserverRunning(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverRunningQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverRunningQuery>({
        query: ProductVserverRunningDocument,
        ...options,
    });
}
export const ProductVserverMakeVncPortDocument = gql`
    mutation productVserverMakeVncPort($id: ID!) {
        productVserverMakeVncPort(vserverId: $id)
    }
`;

export function useMutationproductVserverMakeVncPort() {
    return Urql.useMutation<
        ProductVserverMakeVncPortMutation,
        ProductVserverMakeVncPortMutationVariables
    >(ProductVserverMakeVncPortDocument);
}
export const ProductVserverInstallDocument = gql`
    mutation productVserverInstall($id: ID!, $recreate: Boolean) {
        productVserverInstall(vserverId: $id, recreate: $recreate) {
            id
        }
    }
`;

export function useMutationproductVserverInstall() {
    return Urql.useMutation<
        ProductVserverInstallMutation,
        ProductVserverInstallMutationVariables
    >(ProductVserverInstallDocument);
}
export const ProductVserverBackupRestoreDocument = gql`
    mutation productVserverBackupRestore($id: ID!, $backupId: ID!) {
        productVserverBackupRestore(id: $id, backupId: $backupId) {
            id
        }
    }
`;

export function useMutationproductVserverBackupRestore() {
    return Urql.useMutation<
        ProductVserverBackupRestoreMutation,
        ProductVserverBackupRestoreMutationVariables
    >(ProductVserverBackupRestoreDocument);
}
export const ProductVserverBackupDownloadDocument = gql`
    mutation productVserverBackupDownload($id: ID!) {
        productVserverBackupDownload(id: $id)
    }
`;

export function useMutationproductVserverBackupDownload() {
    return Urql.useMutation<
        ProductVserverBackupDownloadMutation,
        ProductVserverBackupDownloadMutationVariables
    >(ProductVserverBackupDownloadDocument);
}
export const ProductVserverBackupCreateDocument = gql`
    mutation productVserverBackupCreate($id: ID!) {
        productVserverBackupCreate(id: $id) {
            id
        }
    }
`;

export function useMutationproductVserverBackupCreate() {
    return Urql.useMutation<
        ProductVserverBackupCreateMutation,
        ProductVserverBackupCreateMutationVariables
    >(ProductVserverBackupCreateDocument);
}
export const ProductVserverBackupDeleteDocument = gql`
    mutation productVserverBackupDelete($id: ID!, $backupId: ID!) {
        productVserverBackupDelete(id: $id, backupId: $backupId)
    }
`;

export function useMutationproductVserverBackupDelete() {
    return Urql.useMutation<
        ProductVserverBackupDeleteMutation,
        ProductVserverBackupDeleteMutationVariables
    >(ProductVserverBackupDeleteDocument);
}
export const ProductVserverStartDocument = gql`
    mutation productVserverStart($id: ID!, $withImages: Boolean) {
        productVserverStart(vserverId: $id, withImages: $withImages) {
            id
        }
    }
`;

export function useMutationproductVserverStart() {
    return Urql.useMutation<
        ProductVserverStartMutation,
        ProductVserverStartMutationVariables
    >(ProductVserverStartDocument);
}
export const ProductVserverStopDocument = gql`
    mutation productVserverStop($id: ID!) {
        productVserverStop(vserverId: $id) {
            id
        }
    }
`;

export function useMutationproductVserverStop() {
    return Urql.useMutation<
        ProductVserverStopMutation,
        ProductVserverStopMutationVariables
    >(ProductVserverStopDocument);
}
export const ProductVserverSetSshPasswordDocument = gql`
    mutation productVserverSetSshPassword($id: ID!, $password: String!) {
        productVserverSetSshPassword(vserverId: $id, password: $password) {
            ...ProductVserverPart
        }
    }
    ${ProductVserverPartFragmentDoc}
`;

export function useMutationproductVserverSetSshPassword() {
    return Urql.useMutation<
        ProductVserverSetSshPasswordMutation,
        ProductVserverSetSshPasswordMutationVariables
    >(ProductVserverSetSshPasswordDocument);
}
export const ProductVserverChangeLabelDocument = gql`
    mutation productVserverChangeLabel($id: ID!, $label: String!) {
        productVserverChangeLabel(id: $id, label: $label) {
            ...ProductVserverPart
        }
    }
    ${ProductVserverPartFragmentDoc}
`;

export function useMutationproductVserverChangeLabel() {
    return Urql.useMutation<
        ProductVserverChangeLabelMutation,
        ProductVserverChangeLabelMutationVariables
    >(ProductVserverChangeLabelDocument);
}
export const ProductVserverAddImageDocument = gql`
    mutation productVserverAddImage($id: ID!, $imageId: ID!) {
        productVserverAddImage(id: $id, imageId: $imageId) {
            ...ProductVserverPart
        }
    }
    ${ProductVserverPartFragmentDoc}
`;

export function useMutationproductVserverAddImage() {
    return Urql.useMutation<
        ProductVserverAddImageMutation,
        ProductVserverAddImageMutationVariables
    >(ProductVserverAddImageDocument);
}
export const ProductVserverRemoveImageDocument = gql`
    mutation productVserverRemoveImage($id: ID!, $imageId: ID!) {
        productVserverRemoveImage(id: $id, imageId: $imageId) {
            ...ProductVserverPart
        }
    }
    ${ProductVserverPartFragmentDoc}
`;

export function useMutationproductVserverRemoveImage() {
    return Urql.useMutation<
        ProductVserverRemoveImageMutation,
        ProductVserverRemoveImageMutationVariables
    >(ProductVserverRemoveImageDocument);
}
export const ProductVserverByIdDocument = gql`
    query productVserverById($id: ID!) {
        productVserverById(id: $id) {
            ...ProductVserverPart
            trafficTransferredInMB
        }
    }
    ${ProductVserverPartFragmentDoc}
`;

export function useQueryproductVserverById(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverByIdQuery>({
        query: ProductVserverByIdDocument,
        ...options,
    });
}
export const ProductVserverUnlockNetworkSpeedDocument = gql`
    mutation productVserverUnlockNetworkSpeed($id: ID!) {
        productVserverUnlockNetworkSpeed(id: $id) {
            ...ProductVserverPart
        }
    }
    ${ProductVserverPartFragmentDoc}
`;

export function useMutationproductVserverUnlockNetworkSpeed() {
    return Urql.useMutation<
        ProductVserverUnlockNetworkSpeedMutation,
        ProductVserverUnlockNetworkSpeedMutationVariables
    >(ProductVserverUnlockNetworkSpeedDocument);
}
export const MyProductVserversDocument = gql`
    query myProductVservers {
        productVserverMy {
            id
            product {
                expire
                id
            }
            images {
                id
                logo {
                    url
                }
            }
            name
        }
    }
`;

export function useQuerymyProductVservers(
    options: Omit<
        Urql.UseQueryArgs<MyProductVserversQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyProductVserversQuery>({
        query: MyProductVserversDocument,
        ...options,
    });
}
export const ProductVserverImagesDocument = gql`
    query productVserverImages($filter: CordFilter) {
        productVserverImages(filter: $filter) {
            edges {
                ...ProductVserverImagePart
            }
            pageInfo {
                totalCount
            }
        }
    }
    ${ProductVserverImagePartFragmentDoc}
`;

export function useQueryproductVserverImages(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverImagesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverImagesQuery>({
        query: ProductVserverImagesDocument,
        ...options,
    });
}
export const ProductVserverImageCreateDocument = gql`
    mutation productVserverImageCreate($data: ProductVserverImageCreateInput!) {
        productVserverImageCreate(data: $data) {
            ...ProductVserverImagePart
        }
    }
    ${ProductVserverImagePartFragmentDoc}
`;

export function useMutationproductVserverImageCreate() {
    return Urql.useMutation<
        ProductVserverImageCreateMutation,
        ProductVserverImageCreateMutationVariables
    >(ProductVserverImageCreateDocument);
}
export const ProductVserverImageEditDocument = gql`
    mutation productVserverImageEdit($data: ProductVserverImageEditInput!) {
        productVserverImageEdit(data: $data) {
            ...ProductVserverImagePart
        }
    }
    ${ProductVserverImagePartFragmentDoc}
`;

export function useMutationproductVserverImageEdit() {
    return Urql.useMutation<
        ProductVserverImageEditMutation,
        ProductVserverImageEditMutationVariables
    >(ProductVserverImageEditDocument);
}
export const ProductVserverImageDeleteDocument = gql`
    mutation productVserverImageDelete($id: ID!) {
        productVserverImageDelete(id: $id)
    }
`;

export function useMutationproductVserverImageDelete() {
    return Urql.useMutation<
        ProductVserverImageDeleteMutation,
        ProductVserverImageDeleteMutationVariables
    >(ProductVserverImageDeleteDocument);
}
export const ProductVserverImageByIdDocument = gql`
    query productVserverImageById($id: ID!) {
        productVserverImageById(id: $id) {
            ...ProductVserverImagePart
        }
    }
    ${ProductVserverImagePartFragmentDoc}
`;

export function useQueryproductVserverImageById(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverImageByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverImageByIdQuery>({
        query: ProductVserverImageByIdDocument,
        ...options,
    });
}
export const ProductVserverImagePlatformImagesDocument = gql`
    query productVserverImagePlatformImages(
        $platform: String!
        $search: String
    ) {
        productVserverImagePlatformImages(
            platform: $platform
            search: $search
        ) {
            ...ProductVserverImagePart
        }
    }
    ${ProductVserverImagePartFragmentDoc}
`;

export function useQueryproductVserverImagePlatformImages(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverImagePlatformImagesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverImagePlatformImagesQuery>({
        query: ProductVserverImagePlatformImagesDocument,
        ...options,
    });
}
export const CreateProductVserverIpDocument = gql`
    mutation createProductVserverIp(
        $ip: String!
        $hostNodeId: ID
        $gateway: String!
        $netmask: String!
        $active: Boolean!
        $cidr: Int
    ) {
        productVserverIpCreate(
            ip: $ip
            hostNodeId: $hostNodeId
            gateway: $gateway
            netmask: $netmask
            cidr: $cidr
            active: $active
        ) {
            id
        }
    }
`;

export function useMutationcreateProductVserverIp() {
    return Urql.useMutation<
        CreateProductVserverIpMutation,
        CreateProductVserverIpMutationVariables
    >(CreateProductVserverIpDocument);
}
export const EditProductVserverIpDocument = gql`
    mutation editProductVserverIp(
        $ip: String!
        $hostNodeId: ID
        $gateway: String!
        $netmask: String!
        $active: Boolean!
        $vserverId: ID
        $id: ID!
    ) {
        productVserverIpEdit(
            ip: $ip
            hostNodeId: $hostNodeId
            gateway: $gateway
            netmask: $netmask
            vserverId: $vserverId
            id: $id
            active: $active
        ) {
            id
            create
            ip
            assigned
            netmask
            active
            gateway
            hostNode {
                id
            }
            vserver {
                id
            }
        }
    }
`;

export function useMutationeditProductVserverIp() {
    return Urql.useMutation<
        EditProductVserverIpMutation,
        EditProductVserverIpMutationVariables
    >(EditProductVserverIpDocument);
}
export const DeleteProductVserverIpDocument = gql`
    mutation deleteProductVserverIp($id: ID!) {
        productVserverIpDelete(id: $id)
    }
`;

export function useMutationdeleteProductVserverIp() {
    return Urql.useMutation<
        DeleteProductVserverIpMutation,
        DeleteProductVserverIpMutationVariables
    >(DeleteProductVserverIpDocument);
}
export const ProductVserverIpsDocument = gql`
    query productVserverIps($filter: CordFilter) {
        productVserverIps(filter: $filter) {
            edges {
                id
                create
                ip
                assigned
            }
            pageInfo {
                totalCount
            }
        }
    }
`;

export function useQueryproductVserverIps(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverIpsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverIpsQuery>({
        query: ProductVserverIpsDocument,
        ...options,
    });
}
export const ProductVserverIpByIdDocument = gql`
    query productVserverIpById($id: ID!) {
        productVserverIpById(id: $id) {
            id
            create
            ip
            assigned
            netmask
            active
            gateway
            hostNode {
                id
            }
            vserver {
                id
            }
        }
    }
`;

export function useQueryproductVserverIpById(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverIpByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverIpByIdQuery>({
        query: ProductVserverIpByIdDocument,
        ...options,
    });
}
export const ProductVserverIpFreeDocument = gql`
    query productVserverIpFree {
        productVserverIpFree {
            id
            create
            ip
            assigned
            netmask
            active
            gateway
        }
    }
`;

export function useQueryproductVserverIpFree(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverIpFreeQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverIpFreeQuery>({
        query: ProductVserverIpFreeDocument,
        ...options,
    });
}
export const ProductVserverIpReassignIpDocument = gql`
    mutation productVserverIpReassignIp($id: ID!, $newId: ID!) {
        productVserverIpReassignIp(id: $id, newId: $newId)
    }
`;

export function useMutationproductVserverIpReassignIp() {
    return Urql.useMutation<
        ProductVserverIpReassignIpMutation,
        ProductVserverIpReassignIpMutationVariables
    >(ProductVserverIpReassignIpDocument);
}
