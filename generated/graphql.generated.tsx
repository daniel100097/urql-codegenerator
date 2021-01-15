type Maybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
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

type HostNodeTask = {
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

type HostNodePort = {
    __typename?: 'HostNodePort';
    id: Scalars['ID'];
    port: Scalars['Int'];
    protocol: Scalars['String'];
    hostNode: HostNode;
    gameserver?: Maybe<ProductGameserver>;
    teamspeak?: Maybe<ProductTeamspeak>;
};

type ProductTemplateOption = {
    __typename?: 'ProductTemplateOption';
    id: Scalars['ID'];
    title: Scalars['String'];
    upgradeable: Scalars['Boolean'];
    display: Scalars['String'];
    create: Scalars['DateTime'];
    variants: Array<ProductTemplateOptionVariant>;
};

type ProductTemplateOptionVariantsArgs = {
    includeHidden?: Maybe<Scalars['Boolean']>;
};

type ProductTemplateOptionVariant = {
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

type ProductVserverIp = {
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

type Acl = {
    __typename?: 'Acl';
    id: Scalars['ID'];
    acl: Scalars['String'];
    create: Scalars['DateTime'];
    update: Scalars['DateTime'];
};

type Role = {
    __typename?: 'Role';
    id: Scalars['String'];
    name: Scalars['String'];
    acls: Array<Acl>;
    users: Array<User>;
};

type SupportTicketMessage = {
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

type SupportTicket = {
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

type File = {
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

type ProductVserverImage = {
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

type ProductGameserverScript = {
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

type ProductGameserverTemplate = {
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

type ProductTemplateGameserver = {
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

type ProductTemplateTeamspeak = {
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

type ProductTemplateExtendPeriod = {
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

type ProductTemplateVserver = {
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

type ProductGameserverBackup = {
    __typename?: 'ProductGameserverBackup';
    sizeInMb?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    gameserver: ProductGameserver;
    backupServer: BackupServer;
    create: Scalars['DateTime'];
    restorable: Scalars['Boolean'];
};

type BackupServer = {
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

type ProductVserverBackup = {
    __typename?: 'ProductVserverBackup';
    sizeInMb?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    vserver: ProductVserver;
    backupServer: BackupServer;
    create: Scalars['DateTime'];
    restorable: Scalars['Boolean'];
};

type EmailTemplate = {
    __typename?: 'EmailTemplate';
    id: Scalars['ID'];
    sender: Scalars['String'];
    subject: Scalars['String'];
    template: Scalars['String'];
    templateContent: Scalars['String'];
};

type ProductTemplateDomain = {
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

type ProductDomain = {
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

type ProductTemplateSimple = {
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

type ProductSimple = {
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

type ProductVserver = {
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

type ProductVserverTrafficTransferredInMbArgs = {
    to?: Maybe<Scalars['String']>;
    from?: Maybe<Scalars['String']>;
};

type FinanceTransactionItem = {
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

type UserAddress = {
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

type Pdf = {
    __typename?: 'Pdf';
    url: Scalars['String'];
    id: Scalars['String'];
    create: Scalars['DateTime'];
};

type PdfTemplate = {
    __typename?: 'PdfTemplate';
    id: Scalars['String'];
    templateFile: Scalars['String'];
    template: Scalars['String'];
    create: Scalars['DateTime'];
    update: Scalars['DateTime'];
    templateContent: Scalars['String'];
};

type FinanceDonationLink = {
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

type FinanceDonation = {
    __typename?: 'FinanceDonation';
    id: Scalars['String'];
    create: Scalars['DateTime'];
    donationMessage: Scalars['String'];
    charge: FinanceCharge;
    donationLink: FinanceDonationLink;
};

type FinanceCharge = {
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

type FinanceTransaction = {
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

type Product = {
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

type ProductTemplateAbstract = {
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

type ProductTeamspeak = {
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

type HostNode = {
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

type ProductGameserverMysql = {
    __typename?: 'ProductGameserverMysql';
    id: Scalars['ID'];
    create: Scalars['DateTime'];
    label?: Maybe<Scalars['String']>;
    host: Scalars['String'];
    gameserver: ProductGameserver;
    hostNode: HostNode;
};

type ProductGameserver = {
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

type ProductGameserverAccess = {
    __typename?: 'ProductGameserverAccess';
    id: Scalars['ID'];
    gameserver: ProductGameserver;
    user: User;
    accept: Scalars['Boolean'];
    userEmail: Scalars['String'];
};

type FinanceEffort = {
    __typename?: 'FinanceEffort';
    id: Scalars['ID'];
    user: User;
    description?: Maybe<Scalars['String']>;
    create: Scalars['DateTime'];
    meta: Scalars['JSON'];
    total: Scalars['Float'];
};

type UserOauthToken = {
    __typename?: 'UserOauthToken';
    id: Scalars['ID'];
    service: Scalars['String'];
    create: Scalars['DateTime'];
    confirmed: Scalars['Boolean'];
};

type UserComment = {
    __typename?: 'UserComment';
    id: Scalars['String'];
    create: Scalars['DateTime'];
    message: Scalars['String'];
};

type User = {
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

type CordPageInfo = {
    __typename?: 'CordPageInfo';
    totalCount: Scalars['Float'];
    hasNextPage: Scalars['Boolean'];
    hasPreviousPage: Scalars['Boolean'];
};

type Blogfeed = {
    __typename?: 'Blogfeed';
    html: Scalars['String'];
    link: Scalars['String'];
    title: Scalars['String'];
    pubDate: Scalars['DateTime'];
};

type Translation = {
    __typename?: 'Translation';
    id: Scalars['ID'];
    key: Scalars['String'];
    value: Scalars['String'];
    language: Scalars['String'];
    create: Scalars['DateTime'];
};

type ProductGameserverUsageDto = {
    __typename?: 'ProductGameserverUsageDto';
    diskPoints: Array<ProductGameserverUsageDtoDiskEntry>;
    usagePoints: Array<ProductGameserverUsageDtoEntry>;
};

type ProductGameserverUsageDtoEntry = {
    __typename?: 'ProductGameserverUsageDtoEntry';
    globalUsage: Scalars['Float'];
    perCore: Scalars['Float'];
    date: Scalars['DateTime'];
    memoryUsageInMb: Scalars['Float'];
};

type ProductGameserverUsageDtoDiskEntry = {
    __typename?: 'ProductGameserverUsageDtoDiskEntry';
    usageInMb: Scalars['Float'];
    date: Scalars['DateTime'];
};

type ProductTeamspeakOutputToken = {
    __typename?: 'ProductTeamspeakOutputToken';
    group: Scalars['String'];
    token: Scalars['String'];
};

type ProductTemplateBundle = {
    __typename?: 'ProductTemplateBundle';
    id: Scalars['ID'];
};

type VserverStatsEntry = {
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

type ProductAdminInfoPointMapDto = {
    __typename?: 'ProductAdminInfoPointMapDto';
    label: Scalars['String'];
    value: Scalars['Float'];
};

type HostNodeTypeInfoUsageDto = {
    __typename?: 'HostNodeTypeInfoUsageDto';
    filter?: Maybe<Scalars['String']>;
    type: Scalars['String'];
    free: Scalars['Float'];
};

type ProductAdminInfoResultDto = {
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

type BonusCredits = {
    __typename?: 'BonusCredits';
    minCredits: Scalars['Float'];
    threshold: Scalars['Float'];
    bonus: Scalars['Float'];
};

type PaymentMethod = {
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

type HostNodeInstancesOutput = {
    __typename?: 'HostNodeInstancesOutput';
    gamesevers: Array<ProductGameserver>;
};

type SupportTicketPriorityEnum = {
    __typename?: 'SupportTicketPriorityEnum';
    id: Scalars['ID'];
    priority: Scalars['Int'];
    label: Scalars['String'];
};

type SupportTicketReviserEnum = {
    __typename?: 'SupportTicketReviserEnum';
    id: Scalars['ID'];
    name: Scalars['String'];
};

type SupportQuickResponse = {
    __typename?: 'SupportQuickResponse';
    id: Scalars['ID'];
    content: Scalars['String'];
    title: Scalars['String'];
    create: Scalars['DateTime'];
    update: Scalars['DateTime'];
};

type Query = {
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

type QueryAclByIdArgs = {
    id: Scalars['ID'];
};

type QueryAclsArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryAcl_Has_AclArgs = {
    acl: Scalars['String'];
};

type QueryRoleByIdArgs = {
    id: Scalars['ID'];
};

type QueryRolesArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryUserByIdArgs = {
    id: Scalars['ID'];
};

type QueryUsersArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryUserArgs = {
    id: Scalars['String'];
};

type QueryEmailTemplateByIdArgs = {
    id: Scalars['ID'];
};

type QueryEmailTemplatesArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryEmail_TemplateArgs = {
    id: Scalars['String'];
};

type QueryUserAddressByIdArgs = {
    id: Scalars['ID'];
};

type QueryUserAddresssArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryUserCommentByIdArgs = {
    id: Scalars['ID'];
};

type QueryUserCommentsArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryUserCommentsByUserArgs = {
    userId: Scalars['ID'];
};

type QueryTranslationByIdArgs = {
    id: Scalars['ID'];
};

type QueryTranslationsArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductDomainByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductDomainsArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductDomainCheckArgs = {
    tld: Scalars['String'];
};

type QueryProductGameserverAccessesByGameserverIdArgs = {
    gameserverId: Scalars['ID'];
};

type QueryProductGameserverMysqlByGameserverArgs = {
    gameserverId: Scalars['ID'];
};

type QueryProductGameserverScriptByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductGameserverScriptsArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProduct_Gameserver_ScriptsArgs = {
    templateId?: Maybe<Scalars['ID']>;
    search?: Maybe<Scalars['String']>;
    take?: Maybe<Scalars['Float']>;
    skip?: Maybe<Scalars['Float']>;
    orderBy?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['String']>;
};

type QueryProduct_Gameservers_ScriptsArgs = {
    gameserverId: Scalars['ID'];
};

type QueryProductGameserverTemplateByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductGameserverTemplatesArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProduct_Gameserver_TemplatesArgs = {
    search?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    offset?: Maybe<Scalars['Float']>;
    orderField?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['String']>;
};

type QueryProduct_Gameserver_Templates_AvailableArgs = {
    search?: Maybe<Scalars['String']>;
    claimId: Scalars['ID'];
};

type QueryProduct_Gameserver_TemplateArgs = {
    id: Scalars['ID'];
};

type QueryProductGameserverByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductGameserversArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProduct_Gameserver_LogArgs = {
    gameserverId: Scalars['ID'];
};

type QueryProduct_Gameserver_RunningArgs = {
    gameserverId: Scalars['ID'];
};

type QueryProductGameserverUsageArgs = {
    gameserverId: Scalars['ID'];
};

type QueryProduct_Gameserver_ExistArgs = {
    gameserverId: Scalars['ID'];
};

type QueryProductSimpleByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductSimplesArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductTeamspeakByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductTeamspeaksArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductTeamspeakRunningArgs = {
    teamspeakId: Scalars['ID'];
};

type QueryProductTeamspeakExistArgs = {
    teamspeakId: Scalars['ID'];
};

type QueryProductTeamspeakTokensArgs = {
    teamspeakId: Scalars['ID'];
};

type QueryProductTemplateBundleByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductTemplateBundlesArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductTemplateDomainByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductTemplateDomainsArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductTemplateDomainByUrlKeyArgs = {
    urlKey: Scalars['String'];
};

type QueryProductTemplateExtendPeriodByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductTemplateExtendPeriodsArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductTemplateGameserverByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductTemplateGameserversArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductTemplateGameserverByUrlKeyArgs = {
    urlKey: Scalars['String'];
};

type QueryProductTemplateOptionVariantByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductTemplateOptionVariantsArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductTemplateOptionVariantByIdsArgs = {
    ids: Array<Scalars['ID']>;
};

type QueryProductTemplateOptionByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductTemplateOptionsArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductTemplateSimpleByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductTemplateSimplesArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductTemplateSimpleByUrlKeyArgs = {
    urlKey: Scalars['String'];
};

type QueryProductTemplateTeamspeakByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductTemplateTeamspeaksArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductTemplateTeamspeakByUrlKeyArgs = {
    urlKey: Scalars['String'];
};

type QueryProductVserverImageByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductVserverImagesArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductVserverImagePlatformImagesArgs = {
    search?: Maybe<Scalars['String']>;
    platform: Scalars['String'];
};

type QueryProductVserverIpByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductVserverIpsArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductVserverByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductVserversArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductVserverExistArgs = {
    vserverId: Scalars['ID'];
};

type QueryProductVserverRunningArgs = {
    vserverId: Scalars['ID'];
};

type QueryProductVserverStatsArgs = {
    vserverId: Scalars['ID'];
};

type QueryProductByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductsArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryFinanceChargeByIdArgs = {
    id: Scalars['ID'];
};

type QueryFinanceChargesArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryFinanceTransactionByIdArgs = {
    id: Scalars['ID'];
};

type QueryFinanceTransactionsArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryFinanceDonationLinkByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductTemplateVserverByIdArgs = {
    id: Scalars['ID'];
};

type QueryProductTemplateVserversArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryProductTemplateVserversByPlatformArgs = {
    platform: Scalars['String'];
};

type QueryProductGameserverFsReadIndexArgs = {
    reloadIndex?: Maybe<Scalars['Boolean']>;
    gameserverId: Scalars['ID'];
};

type QueryProductGameserverFsReadArgs = {
    file: Scalars['String'];
    gameserverId: Scalars['ID'];
};

type QueryBackupServerByIdArgs = {
    id: Scalars['ID'];
};

type QueryBackupServersArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryBackupServerArgs = {
    id: Scalars['ID'];
};

type QueryHostNodeTaskByIdArgs = {
    id: Scalars['ID'];
};

type QueryHostNodeTasksArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryHostNodeTasksMyArgs = {
    take?: Maybe<Scalars['Int']>;
};

type QueryHost_Node_Task_RunningArgs = {
    identifier: Scalars['ID'];
};

type QueryHostNodeByIdArgs = {
    id: Scalars['ID'];
};

type QueryHostNodesArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryHost_NodeArgs = {
    id: Scalars['ID'];
};

type QueryHostNodeTestFindNodeArgs = {
    filterKey?: Maybe<Scalars['String']>;
    type: Scalars['String'];
};

type QueryFileByIdArgs = {
    id: Scalars['ID'];
};

type QueryFilesArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryPdfTemplateByIdArgs = {
    id: Scalars['ID'];
};

type QueryPdfTemplatesArgs = {
    filter?: Maybe<CordFilter>;
};

type QueryPdf_TemplateArgs = {
    id: Scalars['ID'];
};

type QuerySupportTicketByIdArgs = {
    id: Scalars['ID'];
};

type QuerySupportTicketsArgs = {
    filter?: Maybe<CordFilter>;
};

type QuerySupport_TicketArgs = {
    id: Scalars['ID'];
};

type QuerySupportQuickResponseByIdArgs = {
    id: Scalars['ID'];
};

type QuerySupportQuickResponsesArgs = {
    filter?: Maybe<CordFilter>;
};

type AclResultMany = {
    __typename?: 'AclResultMany';
    edges: Array<Acl>;
    pageInfo: CordPageInfo;
};

type CordFilter = {
    order?: Maybe<Scalars['String']>;
    orderBy?: Maybe<Scalars['String']>;
    take?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    search?: Maybe<Scalars['String']>;
    fieldValueFilters?: Maybe<Array<CordFilterValue>>;
    searchInRelations?: Maybe<Scalars['Boolean']>;
};

type CordFilterValue = {
    key: Scalars['String'];
    value?: Maybe<Scalars['String']>;
};

type RoleResultMany = {
    __typename?: 'RoleResultMany';
    edges: Array<Role>;
    pageInfo: CordPageInfo;
};

type UserResultMany = {
    __typename?: 'UserResultMany';
    edges: Array<User>;
    pageInfo: CordPageInfo;
};

type EmailTemplateResultMany = {
    __typename?: 'EmailTemplateResultMany';
    edges: Array<EmailTemplate>;
    pageInfo: CordPageInfo;
};

type UserAddressResultMany = {
    __typename?: 'UserAddressResultMany';
    edges: Array<UserAddress>;
    pageInfo: CordPageInfo;
};

type UserCommentResultMany = {
    __typename?: 'UserCommentResultMany';
    edges: Array<UserComment>;
    pageInfo: CordPageInfo;
};

type TranslationResultMany = {
    __typename?: 'TranslationResultMany';
    edges: Array<Translation>;
    pageInfo: CordPageInfo;
};

type ProductDomainResultMany = {
    __typename?: 'ProductDomainResultMany';
    edges: Array<ProductDomain>;
    pageInfo: CordPageInfo;
};

type ProductGameserverScriptResultMany = {
    __typename?: 'ProductGameserverScriptResultMany';
    edges: Array<ProductGameserverScript>;
    pageInfo: CordPageInfo;
};

type ProductGameserverTemplateResultMany = {
    __typename?: 'ProductGameserverTemplateResultMany';
    edges: Array<ProductGameserverTemplate>;
    pageInfo: CordPageInfo;
};

type ProductGameserverResultMany = {
    __typename?: 'ProductGameserverResultMany';
    edges: Array<ProductGameserver>;
    pageInfo: CordPageInfo;
};

type ProductSimpleResultMany = {
    __typename?: 'ProductSimpleResultMany';
    edges: Array<ProductSimple>;
    pageInfo: CordPageInfo;
};

type ProductTeamspeakResultMany = {
    __typename?: 'ProductTeamspeakResultMany';
    edges: Array<ProductTeamspeak>;
    pageInfo: CordPageInfo;
};

type ProductTemplateBundleResultMany = {
    __typename?: 'ProductTemplateBundleResultMany';
    edges: Array<ProductTemplateBundle>;
    pageInfo: CordPageInfo;
};

type ProductTemplateDomainResultMany = {
    __typename?: 'ProductTemplateDomainResultMany';
    edges: Array<ProductTemplateDomain>;
    pageInfo: CordPageInfo;
};

type ProductTemplateExtendPeriodResultMany = {
    __typename?: 'ProductTemplateExtendPeriodResultMany';
    edges: Array<ProductTemplateExtendPeriod>;
    pageInfo: CordPageInfo;
};

type ProductTemplateGameserverResultMany = {
    __typename?: 'ProductTemplateGameserverResultMany';
    edges: Array<ProductTemplateGameserver>;
    pageInfo: CordPageInfo;
};

type ProductTemplateOptionVariantResultMany = {
    __typename?: 'ProductTemplateOptionVariantResultMany';
    edges: Array<ProductTemplateOptionVariant>;
    pageInfo: CordPageInfo;
};

type ProductTemplateOptionResultMany = {
    __typename?: 'ProductTemplateOptionResultMany';
    edges: Array<ProductTemplateOption>;
    pageInfo: CordPageInfo;
};

type ProductTemplateSimpleResultMany = {
    __typename?: 'ProductTemplateSimpleResultMany';
    edges: Array<ProductTemplateSimple>;
    pageInfo: CordPageInfo;
};

type ProductTemplateTeamspeakResultMany = {
    __typename?: 'ProductTemplateTeamspeakResultMany';
    edges: Array<ProductTemplateTeamspeak>;
    pageInfo: CordPageInfo;
};

type ProductVserverImageResultMany = {
    __typename?: 'ProductVserverImageResultMany';
    edges: Array<ProductVserverImage>;
    pageInfo: CordPageInfo;
};

type ProductVserverIpResultMany = {
    __typename?: 'ProductVserverIpResultMany';
    edges: Array<ProductVserverIp>;
    pageInfo: CordPageInfo;
};

type ProductVserverResultMany = {
    __typename?: 'ProductVserverResultMany';
    edges: Array<ProductVserver>;
    pageInfo: CordPageInfo;
};

type ProductResultMany = {
    __typename?: 'ProductResultMany';
    edges: Array<Product>;
    pageInfo: CordPageInfo;
};

type FinanceChargeResultMany = {
    __typename?: 'FinanceChargeResultMany';
    edges: Array<FinanceCharge>;
    pageInfo: CordPageInfo;
};

type FinanceTransactionResultMany = {
    __typename?: 'FinanceTransactionResultMany';
    edges: Array<FinanceTransaction>;
    pageInfo: CordPageInfo;
};

type ProductTemplateVserverResultMany = {
    __typename?: 'ProductTemplateVserverResultMany';
    edges: Array<ProductTemplateVserver>;
    pageInfo: CordPageInfo;
};

type BackupServerResultMany = {
    __typename?: 'BackupServerResultMany';
    edges: Array<BackupServer>;
    pageInfo: CordPageInfo;
};

type HostNodeTaskResultMany = {
    __typename?: 'HostNodeTaskResultMany';
    edges: Array<HostNodeTask>;
    pageInfo: CordPageInfo;
};

type HostNodeResultMany = {
    __typename?: 'HostNodeResultMany';
    edges: Array<HostNode>;
    pageInfo: CordPageInfo;
};

type FileResultMany = {
    __typename?: 'FileResultMany';
    edges: Array<File>;
    pageInfo: CordPageInfo;
};

type PdfTemplateResultMany = {
    __typename?: 'PdfTemplateResultMany';
    edges: Array<PdfTemplate>;
    pageInfo: CordPageInfo;
};

type SupportTicketResultMany = {
    __typename?: 'SupportTicketResultMany';
    edges: Array<SupportTicket>;
    pageInfo: CordPageInfo;
};

type SupportQuickResponseResultMany = {
    __typename?: 'SupportQuickResponseResultMany';
    edges: Array<SupportQuickResponse>;
    pageInfo: CordPageInfo;
};

type Mutation = {
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

type MutationRole_Role_EditArgs = {
    data: RoleNewInput;
};

type MutationRole_Role_DeleteArgs = {
    id: Scalars['ID'];
};

type MutationRoleAssignAclArgs = {
    aclsId: Array<Scalars['ID']>;
    id: Scalars['ID'];
};

type MutationRoleUnAssignAclArgs = {
    aclsId: Array<Scalars['ID']>;
    id: Scalars['ID'];
};

type MutationRoleAddUserArgs = {
    userId: Scalars['ID'];
    id: Scalars['ID'];
};

type MutationRoleRemoveUserArgs = {
    userId: Scalars['ID'];
    id: Scalars['ID'];
};

type MutationUserSetActiveArgs = {
    active: Scalars['Boolean'];
    id: Scalars['ID'];
};

type MutationUserTestMyPasswordArgs = {
    password: Scalars['String'];
};

type MutationUserEditSelfGeneralArgs = {
    localAvatarId?: Maybe<Scalars['ID']>;
    forceEmailLogin?: Maybe<Scalars['Boolean']>;
    nickname: Scalars['String'];
    new_password?: Maybe<Scalars['String']>;
};

type MutationUserEditSelfAddressArgs = {
    data: UserInputUserEditAddress;
};

type MutationUserEditSelfEmailArgs = {
    password: Scalars['String'];
    email: Scalars['String'];
};

type MutationUser_RegisterArgs = {
    googleCaptcha: Scalars['String'];
    data: UserInputRegister;
};

type MutationUser_VerifyArgs = {
    token: Scalars['String'];
};

type MutationUser_Reset_PasswordArgs = {
    captcha: Scalars['String'];
    email: Scalars['String'];
};

type MutationUser_Reset_Password_TokenArgs = {
    password: Scalars['String'];
    token: Scalars['String'];
};

type MutationUserAddressAddVerifyDocumentArgs = {
    fileId: Scalars['ID'];
};

type MutationUserMakeFeedbackArgs = {
    feedbackMessage?: Maybe<Scalars['String']>;
    feedbackSatisfied?: Maybe<Scalars['Boolean']>;
    availableForMoreFeedback?: Maybe<Scalars['Boolean']>;
};

type MutationEmail_Template_NewArgs = {
    data: EmailTemplateInputNew;
};

type MutationEmail_Template_EditArgs = {
    data: EmailTemplateInputEdit;
};

type MutationEmail_Template_DeleteArgs = {
    id: Scalars['ID'];
};

type MutationUserAddressConfirmVerifyArgs = {
    id: Scalars['ID'];
};

type MutationUserAddressRejectVerifyArgs = {
    id: Scalars['ID'];
};

type MutationUserCommentCreateArgs = {
    message: Scalars['String'];
    userId: Scalars['ID'];
};

type MutationUserOauthTokenConfirmArgs = {
    id: Scalars['ID'];
    password: Scalars['String'];
};

type MutationUserOAuthDeleteTokenArgs = {
    id: Scalars['ID'];
};

type MutationUserLoginWithEmailTokenArgs = {
    password: Scalars['String'];
    username: Scalars['String'];
};

type MutationUser_Admin_LoginArgs = {
    id: Scalars['ID'];
};

type MutationTranslationEditArgs = {
    language: Scalars['String'];
    value: Scalars['String'];
    key: Scalars['String'];
    id: Scalars['ID'];
};

type MutationTranslationDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductDomainSetAuthcodeArgs = {
    authcode: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProductDomainRequestNewAuthcodeArgs = {
    id: Scalars['ID'];
};

type MutationProductDomainDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductGameserverAccessInviteArgs = {
    captcha: Scalars['String'];
    emailOfInvitedUser: Scalars['String'];
    gameserverId: Scalars['ID'];
};

type MutationProductGameserverAccessRevokeArgs = {
    id: Scalars['ID'];
};

type MutationProductGameserverMysqlCreateArgs = {
    password: Scalars['String'];
    gameserverId: Scalars['ID'];
};

type MutationProductGameserverMysqlDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductGameserverMysqlChangeLabelArgs = {
    label: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProduct_Gameserver_Script_DeleteArgs = {
    id: Scalars['ID'];
};

type MutationProduct_Gameserver_Script_EditArgs = {
    data: ProductGameserverScriptEditInput;
};

type MutationProduct_Gameserver_Script_NewArgs = {
    data: ProductGameserverScriptNewInput;
};

type MutationProduct_Gameserver_Template_EditArgs = {
    data: ProductGameserverTemplateEditInput;
};

type MutationProduct_Gameserver_Template_DeleteArgs = {
    id: Scalars['ID'];
};

type MutationProduct_Gameserver_Template_Set_Default_ScriptArgs = {
    scriptId: Scalars['ID'];
    id: Scalars['ID'];
};

type MutationProduct_Gameserver_Change_LabelArgs = {
    label: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProductGameserverBackupDownloadArgs = {
    id: Scalars['ID'];
};

type MutationProductGameserverSetAutorestartsArgs = {
    restarts: Array<Scalars['Int']>;
    id: Scalars['ID'];
};

type MutationProductGameserverFailureAutorestartArgs = {
    restart: Scalars['Boolean'];
    id: Scalars['ID'];
};

type MutationProduct_Gameserver_StartArgs = {
    scriptId?: Maybe<Scalars['ID']>;
    gameserverId: Scalars['ID'];
};

type MutationProduct_Gameserver_StopArgs = {
    gameserverId: Scalars['ID'];
};

type MutationProduct_Gameserver_Change_PasswordArgs = {
    password: Scalars['String'];
    gameserverId: Scalars['ID'];
};

type MutationProduct_Gameserver_ConsoleArgs = {
    command: Scalars['String'];
    gameserverId: Scalars['ID'];
};

type MutationProductGameserverBackupCreateArgs = {
    gameserverId: Scalars['ID'];
};

type MutationProductGameserverBackupDeleteArgs = {
    backupId: Scalars['ID'];
};

type MutationProductGameserverBackupRestoreArgs = {
    backupId: Scalars['ID'];
};

type MutationProductGameserverInstallArgs = {
    gameserverTemplateId: Scalars['ID'];
    gameserverId: Scalars['ID'];
};

type MutationProductGameserverDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductGameserverSetCustomAttributeArgs = {
    value: Scalars['String'];
    key: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProductSimpleDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductSimpleEditLabelArgs = {
    label: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProductSimpleSetStateArgs = {
    state: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProductTeamspeakChangeLabelArgs = {
    label: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProductTeamspeakStartArgs = {
    teamspeakId: Scalars['ID'];
};

type MutationProductTeamspeakStopArgs = {
    teamspeakId: Scalars['ID'];
};

type MutationProductTeamspeakInstallArgs = {
    teamspeakId: Scalars['ID'];
};

type MutationProductTeamspeakTokenDeleteArgs = {
    token: Scalars['String'];
    teamspeakId: Scalars['ID'];
};

type MutationProductTeamspeakTokenCreateArgs = {
    group: Scalars['String'];
    teamspeakId: Scalars['ID'];
};

type MutationProductTeamspeakRemoveArgs = {
    id: Scalars['ID'];
};

type MutationProductTemplateDomainCreateArgs = {
    active: Scalars['Boolean'];
    gTld: Scalars['String'];
    urlKey: Scalars['String'];
    basePrice: Scalars['Float'];
    setup: Scalars['Float'];
    title: Scalars['String'];
};

type MutationProductTemplateDomainEditArgs = {
    active: Scalars['Boolean'];
    basePrice: Scalars['Float'];
    gTld: Scalars['String'];
    urlKey: Scalars['String'];
    setup: Scalars['Float'];
    title: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProductTemplateDomainDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductTemplateExtendPeriodCreateArgs = {
    discount: Scalars['Float'];
    discountFactor: Scalars['Float'];
    globalGroup: Scalars['String'];
    expression: Scalars['String'];
};

type MutationProductTemplateExtendPeriodEditArgs = {
    discount: Scalars['Float'];
    discountFactor: Scalars['Float'];
    globalGroup?: Maybe<Scalars['String']>;
    expression: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProductTemplateExtendPeriodDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductTemplateGameserverCreateArgs = {
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    memoryOptionId?: Maybe<Scalars['ID']>;
    slotOptionId?: Maybe<Scalars['ID']>;
    active: Scalars['Boolean'];
    urlKey: Scalars['String'];
    basePrice: Scalars['Float'];
    setup: Scalars['Float'];
    title: Scalars['String'];
};

type MutationProductTemplateGameserverEditArgs = {
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

type MutationProductTemplateGameserverDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductTemplateOptionVariantCreateArgs = {
    priceSetup: Scalars['Float'];
    priceMultiplier: Scalars['Float'];
    price: Scalars['Float'];
    label: Scalars['String'];
    sort: Scalars['Int'];
    key: Scalars['String'];
    optionId: Scalars['ID'];
};

type MutationProductTemplateOptionVariantEditArgs = {
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

type MutationProductTemplateOptionVariantDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductTemplateOptionCreateArgs = {
    display: Scalars['String'];
    title: Scalars['String'];
};

type MutationProductTemplateOptionEditArgs = {
    upgradeable: Scalars['Boolean'];
    display: Scalars['String'];
    title: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProductTemplateSimpleDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductTemplateSimpleCreateArgs = {
    active: Scalars['Boolean'];
    urlKey: Scalars['String'];
    basePrice: Scalars['Float'];
    setup: Scalars['Float'];
    title: Scalars['String'];
};

type MutationProductTemplateSimpleEditArgs = {
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

type MutationProductTemplateTeamspeakCreateArgs = {
    slotOptionId: Scalars['ID'];
    active: Scalars['Boolean'];
    urlKey: Scalars['String'];
    basePrice: Scalars['Float'];
    setup: Scalars['Float'];
    title: Scalars['String'];
};

type MutationProductTemplateTeamspeakEditArgs = {
    slotOptionId: Scalars['ID'];
    active: Scalars['Boolean'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    setup: Scalars['Float'];
    title: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProductTemplateTeamspeakDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductVserverImageCreateArgs = {
    data: ProductVserverImageCreateInput;
};

type MutationProductVserverImageEditArgs = {
    data: ProductVserverImageEditInput;
};

type MutationProductVserverImageDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductVserverIpReassignIpArgs = {
    newId: Scalars['ID'];
    id: Scalars['ID'];
};

type MutationProductVserverIpCreateArgs = {
    gateway: Scalars['String'];
    netmask: Scalars['String'];
    active: Scalars['Boolean'];
    hostNodeId?: Maybe<Scalars['ID']>;
    cidr?: Maybe<Scalars['Int']>;
    ip: Scalars['String'];
};

type MutationProductVserverIpEditArgs = {
    vserverId?: Maybe<Scalars['ID']>;
    gateway: Scalars['String'];
    netmask: Scalars['String'];
    active: Scalars['Boolean'];
    hostNodeId?: Maybe<Scalars['ID']>;
    ip: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProductVserverIpDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductVserverDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductVserverMakeVncPortArgs = {
    vserverId: Scalars['ID'];
};

type MutationProductVserverBackupDownloadArgs = {
    id: Scalars['ID'];
};

type MutationProductVserverUnlockNetworkSpeedArgs = {
    id: Scalars['ID'];
};

type MutationProductVserverChangeLabelArgs = {
    label: Scalars['String'];
    id: Scalars['ID'];
};

type MutationProductVserverSetSshPasswordArgs = {
    password: Scalars['String'];
    vserverId: Scalars['ID'];
};

type MutationProductVserverStartArgs = {
    withImages?: Maybe<Scalars['Boolean']>;
    vserverId: Scalars['ID'];
};

type MutationProductVserverStopArgs = {
    vserverId: Scalars['ID'];
};

type MutationProductVserverInstallArgs = {
    recreate?: Maybe<Scalars['Boolean']>;
    vserverId: Scalars['ID'];
};

type MutationProductVserverAddImageArgs = {
    imageId: Scalars['ID'];
    id: Scalars['ID'];
};

type MutationProductVserverRemoveImageArgs = {
    imageId: Scalars['ID'];
    id: Scalars['ID'];
};

type MutationProductVserverBackupCreateArgs = {
    id: Scalars['ID'];
};

type MutationProductVserverBackupRestoreArgs = {
    backupId: Scalars['ID'];
    id: Scalars['ID'];
};

type MutationProductVserverBackupDeleteArgs = {
    backupId: Scalars['ID'];
    id: Scalars['ID'];
};

type MutationProductUpgradeGameserverArgs = {
    intervalId: Scalars['ID'];
    variantIds: Array<ProductUpgradeGameserverVaraintMapping>;
    id: Scalars['ID'];
};

type MutationProductUpgradeTeamspeakArgs = {
    intervalId: Scalars['ID'];
    variantIds: Array<ProductUpgradeGameserverVaraintMapping>;
    id: Scalars['ID'];
};

type MutationProductBuyGameserverArgs = {
    product: ProductBuyGameserverInput;
};

type MutationProductBuyTeamspeakArgs = {
    product: ProductBuyTeamspeakInput;
};

type MutationProductBuySimpleArgs = {
    product: ProductBuySimpleInput;
};

type MutationProductBuyVserverArgs = {
    product: ProductBuyVserverInput;
};

type MutationProductBuyDomainArgs = {
    product: ProductBuyDomainInput;
};

type MutationProductEditArgs = {
    data: ProductEditInput;
};

type MutationProductSetAutorenewIntervalArgs = {
    intervalId?: Maybe<Scalars['ID']>;
    id: Scalars['ID'];
};

type MutationProductExtendBuyArgs = {
    data: ProductExtendBuyInput;
};

type MutationFinanceChargeVerifyArgs = {
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
};

type MutationFinanceChargeDeleteArgs = {
    id: Scalars['ID'];
};

type MutationFinanceTransactionCreateArgs = {
    data: FinanceTransactionCreateInput;
};

type MutationFinanceDonationLinkCreateArgs = {
    label?: Maybe<Scalars['String']>;
    message: Scalars['String'];
};

type MutationFinanceDonationLinkDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductTemplateVserverCreateArgs = {
    data: ProductTemplateVserverCreateInput;
};

type MutationProductTemplateVserverEditArgs = {
    data: ProductTemplateVserverEditInput;
};

type MutationProductTemplateVserverDeleteArgs = {
    id: Scalars['ID'];
};

type MutationProductGameserverFsWriteArgs = {
    base64Content: Scalars['String'];
    file: Scalars['String'];
    gameserverId: Scalars['ID'];
};

type MutationBackupServerCreateArgs = {
    data: BackupServerInputCreate;
};

type MutationBackupServerEditArgs = {
    data: BackupServerInputEdit;
};

type MutationBackupServerDeleteArgs = {
    id: Scalars['ID'];
};

type MutationHostNodeUpdateDaemonArgs = {
    version?: Maybe<Scalars['String']>;
    sshRsaKey?: Maybe<Scalars['String']>;
    sshPassword?: Maybe<Scalars['String']>;
    sshUsername: Scalars['String'];
    hostNodeId: Scalars['ID'];
};

type MutationHost_Node_EditArgs = {
    data: HostNodeEditInput;
};

type MutationHost_Node_InstancesArgs = {
    id: Scalars['ID'];
};

type MutationHost_Node_DeleteArgs = {
    id: Scalars['ID'];
};

type MutationFileDeleteFileArgs = {
    id: Scalars['ID'];
};

type MutationDsgvoAnonymizeAccountArgs = {
    id: Scalars['ID'];
};

type MutationPdf_Template_EditArgs = {
    data: PdfTemplateNewEditInput;
};

type MutationPdf_Template_DeleteArgs = {
    id: Scalars['ID'];
};

type MutationSupportTicketResetUnreadCounterArgs = {
    id: Scalars['ID'];
};

type MutationSupport_Ticket_NewArgs = {
    data: SupportTicketNewInput;
};

type MutationSupportTicketAddFileArgs = {
    fileId: Scalars['ID'];
    id: Scalars['ID'];
};

type MutationSupportTicketDeleteArgs = {
    id: Scalars['ID'];
};

type MutationSupportTicketDeleteMessageArgs = {
    id: Scalars['ID'];
};

type MutationSupport_Ticket_Add_MessageArgs = {
    data: SupportTicketAddMessage;
};

type MutationSupport_Ticket_EditArgs = {
    data: SupportTicketEdit;
    id: Scalars['ID'];
};

type MutationSupportTicketAssignToArgs = {
    userId: Scalars['ID'];
    id: Scalars['ID'];
};

type MutationSupportTicketSetStatusArgs = {
    status: Scalars['String'];
    id: Scalars['ID'];
};

type MutationSupportTicketCloseArgs = {
    id: Scalars['ID'];
};

type MutationSupportTicketReopenArgs = {
    id: Scalars['ID'];
};

type MutationSupportQuickResponseCreateArgs = {
    dto: SupportQuickResponseCreateDto;
};

type MutationSupportQuickResponseEditArgs = {
    dto: SupportQuickResponseEditDto;
};

type MutationSupportQuickResponseDeleteArgs = {
    id: Scalars['ID'];
};

type RoleNewInput = {
    name: Scalars['String'];
    id?: Maybe<Scalars['ID']>;
};

type UserInputUserEditAddress = {
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

type UserInputRegister = {
    email: Scalars['String'];
    password: Scalars['String'];
    nickname?: Maybe<Scalars['String']>;
    userAddress?: Maybe<UserInputRegisterAddress>;
};

type UserInputRegisterAddress = {
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

type EmailTemplateInputNew = {
    subject: Scalars['String'];
    sender: Scalars['String'];
    template: Scalars['String'];
    templateContent?: Maybe<Scalars['String']>;
};

type EmailTemplateInputEdit = {
    id: Scalars['ID'];
    subject: Scalars['String'];
    sender: Scalars['String'];
    template: Scalars['String'];
    templateContent?: Maybe<Scalars['String']>;
};

type ProductGameserverScriptEditInput = {
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

type ProductGameserverScriptNewInput = {
    script: Scalars['String'];
    templateId: Scalars['ID'];
    title: Scalars['String'];
};

type ProductGameserverTemplateEditInput = {
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

type ProductVserverImageCreateInput = {
    active: Scalars['Boolean'];
    title: Scalars['String'];
    platform: Scalars['String'];
    logoId?: Maybe<Scalars['String']>;
    resourceUrl: Scalars['String'];
};

type ProductVserverImageEditInput = {
    active: Scalars['Boolean'];
    title: Scalars['String'];
    platform: Scalars['String'];
    logoId?: Maybe<Scalars['String']>;
    resourceUrl: Scalars['String'];
    id: Scalars['ID'];
};

type ProductUpgradeGameserverVaraintMapping = {
    optionId: Scalars['ID'];
    newId: Scalars['ID'];
};

type ProductBuyGameserverInput = {
    templateId: Scalars['ID'];
    paymentIntervalId: Scalars['ID'];
    options: Array<ProductBuyGameserverInputOption>;
    price: Scalars['Float'];
};

type ProductBuyGameserverInputOption = {
    optionId: Scalars['ID'];
    variantId: Scalars['ID'];
};

type ProductBuyTeamspeakInput = {
    templateId: Scalars['ID'];
    paymentIntervalId: Scalars['ID'];
    options: Array<ProductBuyTeamspeakInputOption>;
    price: Scalars['Float'];
};

type ProductBuyTeamspeakInputOption = {
    optionId: Scalars['ID'];
    variantId: Scalars['ID'];
};

type ProductBuySimpleInput = {
    templateId: Scalars['ID'];
    paymentIntervalId: Scalars['ID'];
    options: Array<ProductBuySimpleInputOption>;
    tld?: Maybe<Scalars['String']>;
    tldAuthcode?: Maybe<Scalars['String']>;
    price: Scalars['Float'];
};

type ProductBuySimpleInputOption = {
    optionId: Scalars['ID'];
    variantId: Scalars['ID'];
};

type ProductBuyVserverInput = {
    templateId: Scalars['ID'];
    paymentIntervalId: Scalars['ID'];
    price: Scalars['Float'];
};

type ProductBuyDomainInput = {
    templateId: Scalars['ID'];
    paymentIntervalId: Scalars['ID'];
    price: Scalars['Float'];
    tld: Scalars['String'];
    authcode?: Maybe<Scalars['String']>;
};

type ProductEditInput = {
    expire: Scalars['DateTime'];
    id: Scalars['ID'];
};

type ProductExtendBuyInput = {
    productId: Scalars['ID'];
    paymentIntervalId: Scalars['ID'];
    price: Scalars['Float'];
};

type FinanceTransactionCreateInput = {
    positions: Array<FinanceTransactionItemInput>;
    endDate: Scalars['DateTime'];
    type: Scalars['String'];
    description: Scalars['String'];
    userId: Scalars['ID'];
};

type FinanceTransactionItemInput = {
    amount: Scalars['Float'];
    vat: Scalars['Float'];
    title: Scalars['String'];
};

type ProductTemplateVserverCreateInput = {
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

type ProductTemplateVserverEditInput = {
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

type BackupServerInputCreate = {
    backupPath: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    port: Scalars['Int'];
    privateKey: Scalars['String'];
    username: Scalars['String'];
    host: Scalars['String'];
    localHost: Scalars['String'];
};

type BackupServerInputEdit = {
    id: Scalars['ID'];
    backupPath?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    port?: Maybe<Scalars['Int']>;
    privateKey?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
    host?: Maybe<Scalars['String']>;
    localHost?: Maybe<Scalars['String']>;
};

type HostNodeEditInput = {
    id?: Maybe<Scalars['ID']>;
    name: Scalars['String'];
    remoteAddress: Scalars['String'];
    section: Scalars['Int'];
    type: Scalars['String'];
    maxInstances?: Maybe<Scalars['Int']>;
    hostNodeFilterKey?: Maybe<Scalars['String']>;
    forcePublicBackupTranfer?: Maybe<Scalars['Boolean']>;
};

type PdfTemplateNewEditInput = {
    id?: Maybe<Scalars['ID']>;
    template: Scalars['String'];
    templateContent?: Maybe<Scalars['String']>;
};

type SupportTicketNewInput = {
    subject: Scalars['String'];
    category: Scalars['String'];
    fileIds: Array<Scalars['ID']>;
    priority: Scalars['Int'];
    message: Scalars['String'];
};

type SupportTicketAddMessage = {
    id: Scalars['ID'];
    message: Scalars['String'];
};

type SupportTicketEdit = {
    status?: Maybe<Scalars['String']>;
    priority?: Maybe<Scalars['Int']>;
};

type SupportQuickResponseCreateDto = {
    content: Scalars['String'];
    title?: Maybe<Scalars['String']>;
};

type SupportQuickResponseEditDto = {
    content: Scalars['String'];
    title?: Maybe<Scalars['String']>;
    id: Scalars['String'];
};

type MeHasAclQueryVariables = Exact<{
    acl: Scalars['String'];
}>;

type MeHasAclQuery = { __typename?: 'Query' } & Pick<Query, 'acl_has_acl'>;

type AclsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type AclsQuery = { __typename?: 'Query' } & {
    acls: { __typename?: 'AclResultMany' } & {
        edges: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

type AclRefillAclCacheMutationVariables = Exact<{ [key: string]: never }>;

type AclRefillAclCacheMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'aclRefillAclCache'
>;

type CreateBackupServerMutationVariables = Exact<{
    backupPath: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    port: Scalars['Int'];
    username: Scalars['String'];
    privateKey: Scalars['String'];
    host: Scalars['String'];
    localHost: Scalars['String'];
}>;

type CreateBackupServerMutation = { __typename?: 'Mutation' } & {
    backupServerCreate: { __typename?: 'BackupServer' } & Pick<
        BackupServer,
        'id'
    >;
};

type EditBackupServerMutationVariables = Exact<{
    id: Scalars['ID'];
    backupPath?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    port?: Maybe<Scalars['Int']>;
    username?: Maybe<Scalars['String']>;
    privateKey?: Maybe<Scalars['String']>;
    host?: Maybe<Scalars['String']>;
    localHost: Scalars['String'];
}>;

type EditBackupServerMutation = { __typename?: 'Mutation' } & {
    backupServerEdit: { __typename?: 'BackupServer' } & Pick<
        BackupServer,
        'id'
    >;
};

type DeleteBackupServerByIdMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeleteBackupServerByIdMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'backupServerDelete'
>;

type BackupServersQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type BackupServersQuery = { __typename?: 'Query' } & {
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

type BackupServerByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type BackupServerByIdQuery = { __typename?: 'Query' } & {
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

type BlogPostReadQueryVariables = Exact<{ [key: string]: never }>;

type BlogPostReadQuery = { __typename?: 'Query' } & {
    blogPostRead: Array<
        { __typename?: 'Blogfeed' } & Pick<
            Blogfeed,
            'title' | 'link' | 'pubDate' | 'html'
        >
    >;
};

type ProductDomainPartFragment = { __typename?: 'ProductDomain' } & Pick<
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

type ProductDomainsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductDomainsQuery = { __typename?: 'Query' } & {
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

type ProductDomainByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductDomainByIdQuery = { __typename?: 'Query' } & {
    productDomainById: {
        __typename?: 'ProductDomain';
    } & ProductDomainPartFragment;
};

type MyProductDomainsQueryVariables = Exact<{ [key: string]: never }>;

type MyProductDomainsQuery = { __typename?: 'Query' } & {
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

type ProductDomainRequestNewAuthcodeMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductDomainRequestNewAuthcodeMutation = { __typename?: 'Mutation' } & {
    productDomainRequestNewAuthcode: {
        __typename?: 'ProductDomain';
    } & ProductDomainPartFragment;
};

type ProductDomainDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductDomainDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productDomainDelete'
>;

type ProductDomainSetAuthcodeMutationVariables = Exact<{
    id: Scalars['ID'];
    authcode: Scalars['String'];
}>;

type ProductDomainSetAuthcodeMutation = { __typename?: 'Mutation' } & {
    productDomainSetAuthcode: {
        __typename?: 'ProductDomain';
    } & ProductDomainPartFragment;
};

type DsgvoAnonymizeAccountMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DsgvoAnonymizeAccountMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'dsgvoAnonymizeAccount'
>;

type EmailTemplatePartFragment = { __typename?: 'EmailTemplate' } & Pick<
    EmailTemplate,
    'id' | 'sender' | 'subject' | 'template'
>;

type EmailTemplatesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type EmailTemplatesQuery = { __typename?: 'Query' } & {
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

type EmailTemplateByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type EmailTemplateByIdQuery = { __typename?: 'Query' } & {
    emailTemplateById: { __typename?: 'EmailTemplate' } & Pick<
        EmailTemplate,
        'templateContent'
    > &
        EmailTemplatePartFragment;
};

type NewEmailTemplateMutationVariables = Exact<{
    sender: Scalars['String'];
    subject: Scalars['String'];
    template: Scalars['String'];
    templateContent?: Maybe<Scalars['String']>;
}>;

type NewEmailTemplateMutation = { __typename?: 'Mutation' } & {
    email_template_new: { __typename?: 'EmailTemplate' } & Pick<
        EmailTemplate,
        'templateContent'
    > &
        EmailTemplatePartFragment;
};

type DeleteEmailTemplateMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeleteEmailTemplateMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'email_template_delete'
>;

type EditEmailTemplateMutationVariables = Exact<{
    id: Scalars['ID'];
    sender: Scalars['String'];
    subject: Scalars['String'];
    template: Scalars['String'];
    templateContent?: Maybe<Scalars['String']>;
}>;

type EditEmailTemplateMutation = { __typename?: 'Mutation' } & {
    email_template_edit: { __typename?: 'EmailTemplate' } & Pick<
        EmailTemplate,
        'templateContent'
    > &
        EmailTemplatePartFragment;
};

type FileDeleteFileMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type FileDeleteFileMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'FileDeleteFile'
>;

type MyFilesQueryVariables = Exact<{ [key: string]: never }>;

type MyFilesQuery = { __typename?: 'Query' } & {
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

type FinancePaymentMethodsQueryVariables = Exact<{ [key: string]: never }>;

type FinancePaymentMethodsQuery = { __typename?: 'Query' } & {
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

type FinanceTransactionPartFragment = {
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

type FinanceTransactionsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type FinanceTransactionsQuery = { __typename?: 'Query' } & {
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

type FinanceTransactionByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type FinanceTransactionByIdQuery = { __typename?: 'Query' } & {
    financeTransactionById: {
        __typename?: 'FinanceTransaction';
    } & FinanceTransactionPartFragment;
};

type CreateFinanceTransactionMutationVariables = Exact<{
    data: FinanceTransactionCreateInput;
}>;

type CreateFinanceTransactionMutation = { __typename?: 'Mutation' } & {
    financeTransactionCreate: {
        __typename?: 'FinanceTransaction';
    } & FinanceTransactionPartFragment;
};

type MyFinanceTransactionsQueryVariables = Exact<{ [key: string]: never }>;

type MyFinanceTransactionsQuery = { __typename?: 'Query' } & {
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

type FinanceChargePartFragment = { __typename?: 'FinanceCharge' } & Pick<
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

type FinanceChargesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type FinanceChargesQuery = { __typename?: 'Query' } & {
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

type FinanceChargeByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type FinanceChargeByIdQuery = { __typename?: 'Query' } & {
    financeChargeById: {
        __typename?: 'FinanceCharge';
    } & FinanceChargePartFragment;
};

type FinanceChargeVerifyMutationVariables = Exact<{
    id: Scalars['ID'];
    description?: Maybe<Scalars['String']>;
}>;

type FinanceChargeVerifyMutation = { __typename?: 'Mutation' } & {
    financeChargeVerify: {
        __typename?: 'FinanceCharge';
    } & FinanceChargePartFragment;
};

type FinanceChargeDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type FinanceChargeDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'financeChargeDelete'
>;

type FinanceDonationLinksMyQueryVariables = Exact<{ [key: string]: never }>;

type FinanceDonationLinksMyQuery = { __typename?: 'Query' } & {
    financeDonationLinksMy: Array<
        { __typename?: 'FinanceDonationLink' } & Pick<
            FinanceDonationLink,
            'id' | 'create' | 'message' | 'url' | 'totalDonationSum' | 'label'
        >
    >;
};

type FinanceDonationLinkCreateMutationVariables = Exact<{
    message: Scalars['String'];
    label?: Maybe<Scalars['String']>;
}>;

type FinanceDonationLinkCreateMutation = { __typename?: 'Mutation' } & {
    financeDonationLinkCreate: { __typename?: 'FinanceDonationLink' } & Pick<
        FinanceDonationLink,
        'id' | 'create' | 'message' | 'url' | 'totalDonationSum'
    >;
};

type FinanceDonationLinkDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type FinanceDonationLinkDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'financeDonationLinkDelete'
>;

type ProductGameserverPartFragment = {
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

type ProductGameserverStartMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
    scriptId?: Maybe<Scalars['ID']>;
}>;

type ProductGameserverStartMutation = { __typename?: 'Mutation' } & {
    product_gameserver_start: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

type ProductGameserverSetAutorestartsMutationVariables = Exact<{
    id: Scalars['ID'];
    restarts: Array<Scalars['Int']> | Scalars['Int'];
}>;

type ProductGameserverSetAutorestartsMutation = { __typename?: 'Mutation' } & {
    productGameserverSetAutorestarts: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

type ProductGameserverFailureAutorestartMutationVariables = Exact<{
    id: Scalars['ID'];
    restart: Scalars['Boolean'];
}>;

type ProductGameserverFailureAutorestartMutation = {
    __typename?: 'Mutation';
} & {
    productGameserverFailureAutorestart: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

type ProductGameserverRunningQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

type ProductGameserverRunningQuery = { __typename?: 'Query' } & Pick<
    Query,
    'product_gameserver_running'
>;

type ProductGameserverLogQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

type ProductGameserverLogQuery = { __typename?: 'Query' } & Pick<
    Query,
    'product_gameserver_log'
>;

type ProductGameserverStopMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

type ProductGameserverStopMutation = { __typename?: 'Mutation' } & {
    product_gameserver_stop: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

type ProductGameserverConsoleMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
    command: Scalars['String'];
}>;

type ProductGameserverConsoleMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'product_gameserver_console'
>;

type ProductGameserverExistQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

type ProductGameserverExistQuery = { __typename?: 'Query' } & Pick<
    Query,
    'product_gameserver_exist'
>;

type ProductGameserverChangeFtpPasswordMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
    password: Scalars['String'];
}>;

type ProductGameserverChangeFtpPasswordMutation = {
    __typename?: 'Mutation';
} & {
    product_gameserver_change_password: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

type ProductGameserverQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductGameserverQuery = { __typename?: 'Query' } & {
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

type ProductGameserverUsageQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

type ProductGameserverUsageQuery = { __typename?: 'Query' } & {
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

type ProductGameserverAddonsQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

type ProductGameserverAddonsQuery = { __typename?: 'Query' } & {
    product_gameservers_scripts: Array<
        { __typename?: 'ProductGameserverScript' } & Pick<
            ProductGameserverScript,
            'id' | 'title' | 'standaloneBtn' | 'isDefault'
        >
    >;
};

type ProductGameserverSetCustomAttributeMutationVariables = Exact<{
    id: Scalars['ID'];
    key: Scalars['String'];
    value: Scalars['String'];
}>;

type ProductGameserverSetCustomAttributeMutation = {
    __typename?: 'Mutation';
} & {
    productGameserverSetCustomAttribute: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

type ProductGameserverChangeLabelMutationVariables = Exact<{
    id: Scalars['ID'];
    label: Scalars['String'];
}>;

type ProductGameserverChangeLabelMutation = { __typename?: 'Mutation' } & {
    product_gameserver_change_label: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

type ProductGameserverBackupCreateMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

type ProductGameserverBackupCreateMutation = { __typename?: 'Mutation' } & {
    productGameserverBackupCreate: {
        __typename?: 'ProductGameserverBackup';
    } & Pick<ProductGameserverBackup, 'id'>;
};

type ProductGameserverBackupDeleteMutationVariables = Exact<{
    backupId: Scalars['ID'];
}>;

type ProductGameserverBackupDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productGameserverBackupDelete'
>;

type ProductGameserverBackupRestoreMutationVariables = Exact<{
    backupId: Scalars['ID'];
}>;

type ProductGameserverBackupRestoreMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productGameserverBackupRestore'>;

type ProductGameserverDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductGameserverDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productGameserverDelete'
>;

type ProductGameserverInstallMutationVariables = Exact<{
    id: Scalars['ID'];
    gameserverTemplateId: Scalars['ID'];
}>;

type ProductGameserverInstallMutation = { __typename?: 'Mutation' } & {
    productGameserverInstall: {
        __typename?: 'ProductGameserver';
    } & ProductGameserverPartFragment;
};

type ProductGameserverBackupsQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductGameserverBackupsQuery = { __typename?: 'Query' } & {
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

type ProductGameserverBackupDownloadMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductGameserverBackupDownloadMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productGameserverBackupDownload'>;

type ProductGameserversQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductGameserversQuery = { __typename?: 'Query' } & {
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

type MyProductGameserversQueryVariables = Exact<{ [key: string]: never }>;

type MyProductGameserversQuery = { __typename?: 'Query' } & {
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

type MyProductGameserverAccessesQueryVariables = Exact<{
    [key: string]: never;
}>;

type MyProductGameserverAccessesQuery = { __typename?: 'Query' } & {
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

type ProductGameserverAccessesByGameserverIdQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

type ProductGameserverAccessesByGameserverIdQuery = { __typename?: 'Query' } & {
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

type ProductGameserverAccessInviteMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
    emailOfInvitedUser: Scalars['String'];
    captcha: Scalars['String'];
}>;

type ProductGameserverAccessInviteMutation = { __typename?: 'Mutation' } & {
    productGameserverAccessInvite: {
        __typename?: 'ProductGameserverAccess';
    } & Pick<ProductGameserverAccess, 'accept' | 'id' | 'userEmail'> & {
            gameserver: { __typename?: 'ProductGameserver' } & Pick<
                ProductGameserver,
                'name'
            >;
        };
};

type ProductGameserverAccessRevokeMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductGameserverAccessRevokeMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productGameserverAccessRevoke'
>;

type ProductGameserverMysqlByGameserverQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
}>;

type ProductGameserverMysqlByGameserverQuery = { __typename?: 'Query' } & {
    productGameserverMysqlByGameserver: Array<
        { __typename?: 'ProductGameserverMysql' } & Pick<
            ProductGameserverMysql,
            'id' | 'label' | 'create' | 'host'
        >
    >;
};

type ProductGameserverMysqlCreateMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
    password: Scalars['String'];
}>;

type ProductGameserverMysqlCreateMutation = { __typename?: 'Mutation' } & {
    productGameserverMysqlCreate: {
        __typename?: 'ProductGameserverMysql';
    } & Pick<ProductGameserverMysql, 'id' | 'label' | 'host' | 'create'>;
};

type ProductGameserverMysqlChangeLabelMutationVariables = Exact<{
    id: Scalars['ID'];
    label: Scalars['String'];
}>;

type ProductGameserverMysqlChangeLabelMutation = { __typename?: 'Mutation' } & {
    productGameserverMysqlChangeLabel: {
        __typename?: 'ProductGameserverMysql';
    } & Pick<ProductGameserverMysql, 'id' | 'label' | 'create' | 'host'>;
};

type ProductGameserverMysqlDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductGameserverMysqlDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productGameserverMysqlDelete'
>;

type ProductGameserverScriptsQueryVariables = Exact<{
    search?: Maybe<Scalars['String']>;
    orderBy?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['String']>;
    templateId?: Maybe<Scalars['ID']>;
}>;

type ProductGameserverScriptsQuery = { __typename?: 'Query' } & {
    product_gameserver_scripts: Array<
        { __typename?: 'ProductGameserverScript' } & Pick<
            ProductGameserverScript,
            'id' | 'title' | 'script' | 'isDefault' | 'hidden' | 'executeHook'
        >
    >;
};

type ProductGameserverScriptEditMutationVariables = Exact<{
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

type ProductGameserverScriptEditMutation = { __typename?: 'Mutation' } & {
    product_gameserver_script_edit: {
        __typename?: 'ProductGameserverScript';
    } & Pick<
        ProductGameserverScript,
        'id' | 'title' | 'script' | 'hidden' | 'executeHook'
    >;
};

type ProductGameserverScriptDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductGameserverScriptDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'product_gameserver_script_delete'
>;

type ProductGameserverScriptByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductGameserverScriptByIdQuery = { __typename?: 'Query' } & {
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

type ProductGameserverTemplatePartFragment = {
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

type ProductGameserverTemplateQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductGameserverTemplateQuery = { __typename?: 'Query' } & {
    product_gameserver_template: {
        __typename?: 'ProductGameserverTemplate';
    } & ProductGameserverTemplatePartFragment;
};

type ProductGameserverTemplatesQueryVariables = Exact<{
    filter: CordFilter;
}>;

type ProductGameserverTemplatesQuery = { __typename?: 'Query' } & {
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

type ProductGameserverTemplateEditMutationVariables = Exact<{
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

type ProductGameserverTemplateEditMutation = { __typename?: 'Mutation' } & {
    product_gameserver_template_edit: {
        __typename?: 'ProductGameserverTemplate';
    } & ProductGameserverTemplatePartFragment;
};

type ProductGameserverTemplateDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductGameserverTemplateDeleteMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'product_gameserver_template_delete'>;

type ProductGameserverTemplateSetDefaultScriptMutationVariables = Exact<{
    id: Scalars['ID'];
    scriptId: Scalars['ID'];
}>;

type ProductGameserverTemplateSetDefaultScriptMutation = {
    __typename?: 'Mutation';
} & {
    product_gameserver_template_set_default_script: {
        __typename?: 'ProductGameserverTemplate';
    } & Pick<ProductGameserverTemplate, 'id'>;
};

type HostNodeByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type HostNodeByIdQuery = { __typename?: 'Query' } & {
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

type HostNodesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type HostNodesQuery = { __typename?: 'Query' } & {
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

type HostNodeTestFindNodeQueryVariables = Exact<{
    type: Scalars['String'];
    filterKey?: Maybe<Scalars['String']>;
}>;

type HostNodeTestFindNodeQuery = { __typename?: 'Query' } & {
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

type EditCreateHostNodeMutationVariables = Exact<{
    data: HostNodeEditInput;
}>;

type EditCreateHostNodeMutation = { __typename?: 'Mutation' } & {
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

type DeleteHostNodeByIdMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeleteHostNodeByIdMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'host_node_delete'
>;

type HostNodeUpdateDaemonMutationVariables = Exact<{
    version?: Maybe<Scalars['String']>;
    hostNodeId: Scalars['ID'];
    sshUsername: Scalars['String'];
    sshPassword?: Maybe<Scalars['String']>;
    sshRsaKey?: Maybe<Scalars['String']>;
}>;

type HostNodeUpdateDaemonMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'hostNodeUpdateDaemon'
>;

type HostNodeTasksMyQueryVariables = Exact<{
    take?: Maybe<Scalars['Int']>;
}>;

type HostNodeTasksMyQuery = { __typename?: 'Query' } & {
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

type HostNodeTaskByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type HostNodeTaskByIdQuery = { __typename?: 'Query' } & {
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

type HostNodeTaskIsRunningQueryVariables = Exact<{
    identifier: Scalars['ID'];
}>;

type HostNodeTaskIsRunningQuery = { __typename?: 'Query' } & Pick<
    Query,
    'host_node_task_running'
>;

type PdfTemplatePartFragment = { __typename?: 'PdfTemplate' } & Pick<
    PdfTemplate,
    'id' | 'templateContent' | 'template' | 'create' | 'update' | 'templateFile'
>;

type GetPdfTemplateQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type GetPdfTemplateQuery = { __typename?: 'Query' } & {
    pdf_template: { __typename?: 'PdfTemplate' } & PdfTemplatePartFragment;
};

type PdfTemplatesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type PdfTemplatesQuery = { __typename?: 'Query' } & {
    pdfTemplates: { __typename?: 'PdfTemplateResultMany' } & {
        edges: Array<{ __typename?: 'PdfTemplate' } & PdfTemplatePartFragment>;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

type DeletePdfTemplateMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeletePdfTemplateMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'pdf_template_delete'
>;

type EditPdfTemplateMutationVariables = Exact<{
    id?: Maybe<Scalars['ID']>;
    templateContent?: Maybe<Scalars['String']>;
    template: Scalars['String'];
}>;

type EditPdfTemplateMutation = { __typename?: 'Mutation' } & {
    pdf_template_edit: { __typename?: 'PdfTemplate' } & PdfTemplatePartFragment;
};

type ProductPartFragment = { __typename?: 'Product' } & Pick<
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

type ProductSetAutorenewIntervalMutationVariables = Exact<{
    id: Scalars['ID'];
    intervalId?: Maybe<Scalars['ID']>;
}>;

type ProductSetAutorenewIntervalMutation = { __typename?: 'Mutation' } & {
    productSetAutorenewInterval: {
        __typename?: 'Product';
    } & ProductPartFragment;
};

type ProductsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductsQuery = { __typename?: 'Query' } & {
    products: { __typename?: 'ProductResultMany' } & {
        edges: Array<{ __typename?: 'Product' } & ProductPartFragment>;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

type ProductByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductByIdQuery = { __typename?: 'Query' } & {
    productById: { __typename?: 'Product' } & ProductPartFragment;
};

type ProductById2QueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductById2Query = { __typename?: 'Query' } & {
    productById: { __typename?: 'Product' } & {
        availablePeriods: Array<
            { __typename?: 'ProductTemplateExtendPeriod' } & Pick<
                ProductTemplateExtendPeriod,
                'id' | 'days'
            >
        >;
    } & ProductPartFragment;
};

type ProductEditMutationVariables = Exact<{
    data: ProductEditInput;
}>;

type ProductEditMutation = { __typename?: 'Mutation' } & {
    productEdit: { __typename?: 'Product' } & ProductPartFragment;
};

type ProductGameserverFsReadIndexQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
    reloadIndex?: Maybe<Scalars['Boolean']>;
}>;

type ProductGameserverFsReadIndexQuery = { __typename?: 'Query' } & Pick<
    Query,
    'productGameserverFsReadIndex'
>;

type ProductGameserverFsReadQueryVariables = Exact<{
    gameserverId: Scalars['ID'];
    file: Scalars['String'];
}>;

type ProductGameserverFsReadQuery = { __typename?: 'Query' } & Pick<
    Query,
    'productGameserverFsRead'
>;

type ProductGameserverFsWriteMutationVariables = Exact<{
    gameserverId: Scalars['ID'];
    file: Scalars['String'];
    base64Content: Scalars['String'];
}>;

type ProductGameserverFsWriteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productGameserverFsWrite'
>;

type CreateProductGameserverScriptMutationVariables = Exact<{
    title: Scalars['String'];
    script: Scalars['String'];
    templateId: Scalars['ID'];
}>;

type CreateProductGameserverScriptMutation = { __typename?: 'Mutation' } & {
    product_gameserver_script_new: {
        __typename?: 'ProductGameserverScript';
    } & Pick<ProductGameserverScript, 'id' | 'title' | 'script'>;
};

type RolePartFragment = { __typename?: 'Role' } & Pick<Role, 'id' | 'name'>;

type RolesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type RolesQuery = { __typename?: 'Query' } & {
    roles: { __typename?: 'RoleResultMany' } & {
        edges: Array<{ __typename?: 'Role' } & RolePartFragment>;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

type RoleByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type RoleByIdQuery = { __typename?: 'Query' } & {
    roleById: { __typename?: 'Role' } & {
        acls: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
        users: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
    } & RolePartFragment;
};

type EditRoleRoleMutationVariables = Exact<{
    id?: Maybe<Scalars['ID']>;
    name: Scalars['String'];
}>;

type EditRoleRoleMutation = { __typename?: 'Mutation' } & {
    role_role_edit: { __typename?: 'Role' } & {
        acls: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
        users: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
    } & RolePartFragment;
};

type RoleUnAssignAclMutationVariables = Exact<{
    id: Scalars['ID'];
    aclsId: Array<Scalars['ID']> | Scalars['ID'];
}>;

type RoleUnAssignAclMutation = { __typename?: 'Mutation' } & {
    roleUnAssignAcl: { __typename?: 'Role' } & {
        acls: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
    } & RolePartFragment;
};

type RoleAssignAclMutationVariables = Exact<{
    id: Scalars['ID'];
    aclsId: Array<Scalars['ID']> | Scalars['ID'];
}>;

type RoleAssignAclMutation = { __typename?: 'Mutation' } & {
    roleAssignAcl: { __typename?: 'Role' } & {
        acls: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
        users: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
    } & RolePartFragment;
};

type RoleAddUserMutationVariables = Exact<{
    id: Scalars['ID'];
    userId: Scalars['ID'];
}>;

type RoleAddUserMutation = { __typename?: 'Mutation' } & {
    roleAddUser: { __typename?: 'Role' } & {
        acls: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
        users: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
    } & RolePartFragment;
};

type RoleRemoveUserMutationVariables = Exact<{
    id: Scalars['ID'];
    userId: Scalars['ID'];
}>;

type RoleRemoveUserMutation = { __typename?: 'Mutation' } & {
    roleRemoveUser: { __typename?: 'Role' } & {
        acls: Array<{ __typename?: 'Acl' } & Pick<Acl, 'id' | 'acl'>>;
        users: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
    } & RolePartFragment;
};

type DeleteRoleRoleMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeleteRoleRoleMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'role_role_delete'
>;

type ProductSimplesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductSimplesQuery = { __typename?: 'Query' } & {
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

type ProductSimpleByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductSimpleByIdQuery = { __typename?: 'Query' } & {
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

type MyProductSimplesQueryVariables = Exact<{ [key: string]: never }>;

type MyProductSimplesQuery = { __typename?: 'Query' } & {
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

type ProductSimpleEditLabelMutationVariables = Exact<{
    id: Scalars['ID'];
    label: Scalars['String'];
}>;

type ProductSimpleEditLabelMutation = { __typename?: 'Mutation' } & {
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

type ProductSimpleDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductSimpleDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productSimpleDelete'
>;

type ProductSimpleSetStateMutationVariables = Exact<{
    id: Scalars['ID'];
    state: Scalars['String'];
}>;

type ProductSimpleSetStateMutation = { __typename?: 'Mutation' } & {
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

type SupportQuickResponseFragmentFragment = {
    __typename?: 'SupportQuickResponse';
} & Pick<
    SupportQuickResponse,
    'id' | 'title' | 'content' | 'update' | 'create'
>;

type SupportQuickResponseDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type SupportQuickResponseDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'supportQuickResponseDelete'
>;

type SupportQuickResponseEditMutationVariables = Exact<{
    dto: SupportQuickResponseEditDto;
}>;

type SupportQuickResponseEditMutation = { __typename?: 'Mutation' } & {
    supportQuickResponseEdit: {
        __typename?: 'SupportQuickResponse';
    } & SupportQuickResponseFragmentFragment;
};

type SupportQuickResponseCreateMutationVariables = Exact<{
    dto: SupportQuickResponseCreateDto;
}>;

type SupportQuickResponseCreateMutation = { __typename?: 'Mutation' } & {
    supportQuickResponseCreate: {
        __typename?: 'SupportQuickResponse';
    } & SupportQuickResponseFragmentFragment;
};

type SupportQuickResponsesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type SupportQuickResponsesQuery = { __typename?: 'Query' } & {
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

type SupportQuickResponseByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type SupportQuickResponseByIdQuery = { __typename?: 'Query' } & {
    supportQuickResponseById: {
        __typename?: 'SupportQuickResponse';
    } & SupportQuickResponseFragmentFragment;
};

type SupportTicketPartFragment = { __typename?: 'SupportTicket' } & Pick<
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

type SupportTicketDeleteMessageMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type SupportTicketDeleteMessageMutation = { __typename?: 'Mutation' } & {
    supportTicketDeleteMessage: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

type UserMyTicketsQueryVariables = Exact<{ [key: string]: never }>;

type UserMyTicketsQuery = { __typename?: 'Query' } & {
    user_me: { __typename?: 'User' } & Pick<User, 'id'> & {
            tickets: Array<
                { __typename?: 'SupportTicket' } & SupportTicketPartFragment
            >;
        };
};

type SupportTicketByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type SupportTicketByIdQuery = { __typename?: 'Query' } & {
    supportTicketById: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

type SupportTicketDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type SupportTicketDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'supportTicketDelete'
>;

type SupportTicketsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type SupportTicketsQuery = { __typename?: 'Query' } & {
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

type SupportTicketResetUnreadCounterMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type SupportTicketResetUnreadCounterMutation = { __typename?: 'Mutation' } & {
    supportTicketResetUnreadCounter: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

type AddMessageToSupportTicketMutationVariables = Exact<{
    message: Scalars['String'];
    id: Scalars['ID'];
}>;

type AddMessageToSupportTicketMutation = { __typename?: 'Mutation' } & {
    support_ticket_add_message: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

type SupportTicketSetStatusMutationVariables = Exact<{
    id: Scalars['ID'];
    status: Scalars['String'];
}>;

type SupportTicketSetStatusMutation = { __typename?: 'Mutation' } & {
    supportTicketSetStatus: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

type SupportTicketCloseMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type SupportTicketCloseMutation = { __typename?: 'Mutation' } & {
    supportTicketClose: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

type SupportTicketReopenMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type SupportTicketReopenMutation = { __typename?: 'Mutation' } & {
    supportTicketReopen: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

type SupportTicketAssignToMutationVariables = Exact<{
    id: Scalars['ID'];
    userId: Scalars['ID'];
}>;

type SupportTicketAssignToMutation = { __typename?: 'Mutation' } & {
    supportTicketAssignTo: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

type SupportTicketAddFileMutationVariables = Exact<{
    id: Scalars['ID'];
    fileId: Scalars['ID'];
}>;

type SupportTicketAddFileMutation = { __typename?: 'Mutation' } & {
    supportTicketAddFile: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

type EditSupportTicketMutationVariables = Exact<{
    id: Scalars['ID'];
    status?: Maybe<Scalars['String']>;
    priority?: Maybe<Scalars['Int']>;
}>;

type EditSupportTicketMutation = { __typename?: 'Mutation' } & {
    support_ticket_edit: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

type SupportTicketNewMutationVariables = Exact<{
    data: SupportTicketNewInput;
}>;

type SupportTicketNewMutation = { __typename?: 'Mutation' } & {
    support_ticket_new: {
        __typename?: 'SupportTicket';
    } & SupportTicketPartFragment;
};

type SupportTicketPrioritiesQueryVariables = Exact<{ [key: string]: never }>;

type SupportTicketPrioritiesQuery = { __typename?: 'Query' } & {
    supportTicketPriorities: Array<
        { __typename?: 'SupportTicketPriorityEnum' } & Pick<
            SupportTicketPriorityEnum,
            'id' | 'label' | 'priority'
        >
    >;
};

type SupportTicketRevisersQueryVariables = Exact<{ [key: string]: never }>;

type SupportTicketRevisersQuery = { __typename?: 'Query' } & {
    supportTicketRevisers: Array<
        { __typename?: 'SupportTicketReviserEnum' } & Pick<
            SupportTicketReviserEnum,
            'id' | 'name'
        >
    >;
};

type ProductTeamspeakPartFragment = { __typename?: 'ProductTeamspeak' } & Pick<
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

type ProductTeamspeakChangeLabelMutationVariables = Exact<{
    id: Scalars['ID'];
    label: Scalars['String'];
}>;

type ProductTeamspeakChangeLabelMutation = { __typename?: 'Mutation' } & {
    productTeamspeakChangeLabel: {
        __typename?: 'ProductTeamspeak';
    } & ProductTeamspeakPartFragment;
};

type ProductTeamspeaksQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductTeamspeaksQuery = { __typename?: 'Query' } & {
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

type MyProductTeamspeaksQueryVariables = Exact<{ [key: string]: never }>;

type MyProductTeamspeaksQuery = { __typename?: 'Query' } & {
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

type ProductTeamspeakByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductTeamspeakByIdQuery = { __typename?: 'Query' } & {
    productTeamspeakById: {
        __typename?: 'ProductTeamspeak';
    } & ProductTeamspeakPartFragment;
};

type ProductTeamspeakTokensQueryVariables = Exact<{
    teamspeakId: Scalars['ID'];
}>;

type ProductTeamspeakTokensQuery = { __typename?: 'Query' } & {
    productTeamspeakTokens: Array<
        { __typename?: 'ProductTeamspeakOutputToken' } & Pick<
            ProductTeamspeakOutputToken,
            'group' | 'token'
        >
    >;
};

type ProductTeamspeakRunningQueryVariables = Exact<{
    teamspeakId: Scalars['ID'];
}>;

type ProductTeamspeakRunningQuery = { __typename?: 'Query' } & Pick<
    Query,
    'productTeamspeakRunning'
>;

type ProductTeamspeakTokenCreateMutationVariables = Exact<{
    teamspeakId: Scalars['ID'];
    group: Scalars['String'];
}>;

type ProductTeamspeakTokenCreateMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productTeamspeakTokenCreate'
>;

type ProductTeamspeakTokenDeleteMutationVariables = Exact<{
    teamspeakId: Scalars['ID'];
    token: Scalars['String'];
}>;

type ProductTeamspeakTokenDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productTeamspeakTokenDelete'
>;

type ProductTeamspeakExistQueryVariables = Exact<{
    teamspeakId: Scalars['ID'];
}>;

type ProductTeamspeakExistQuery = { __typename?: 'Query' } & Pick<
    Query,
    'productTeamspeakExist'
>;

type ProductTeamspeakStartMutationVariables = Exact<{
    teamspeakId: Scalars['ID'];
}>;

type ProductTeamspeakStartMutation = { __typename?: 'Mutation' } & {
    productTeamspeakStart: {
        __typename?: 'ProductTeamspeak';
    } & ProductTeamspeakPartFragment;
};

type ProductTeamspeakRemoveMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductTeamspeakRemoveMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productTeamspeakRemove'
>;

type ProductTeamspeakStopMutationVariables = Exact<{
    teamspeakId: Scalars['ID'];
}>;

type ProductTeamspeakStopMutation = { __typename?: 'Mutation' } & {
    productTeamspeakStop: {
        __typename?: 'ProductTeamspeak';
    } & ProductTeamspeakPartFragment;
};

type ProductTeamspeakInstallMutationVariables = Exact<{
    teamspeakId: Scalars['ID'];
}>;

type ProductTeamspeakInstallMutation = { __typename?: 'Mutation' } & {
    productTeamspeakInstall: {
        __typename?: 'ProductTeamspeak';
    } & ProductTeamspeakPartFragment;
};

type ProductTemplateDomainPartFragment = {
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

type ProductTemplateDomainByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductTemplateDomainByIdQuery = { __typename?: 'Query' } & {
    productTemplateDomainById: {
        __typename?: 'ProductTemplateDomain';
    } & ProductTemplateDomainPartFragment;
};

type ProductTemplateDomainsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductTemplateDomainsQuery = { __typename?: 'Query' } & {
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

type CreateProductTemplateDomainMutationVariables = Exact<{
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    gTld: Scalars['String'];
    active: Scalars['Boolean'];
}>;

type CreateProductTemplateDomainMutation = { __typename?: 'Mutation' } & {
    productTemplateDomainCreate: {
        __typename?: 'ProductTemplateDomain';
    } & Pick<ProductTemplateDomain, 'id'>;
};

type EditProductTemplateDomainMutationVariables = Exact<{
    id: Scalars['ID'];
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    gTld: Scalars['String'];
    active: Scalars['Boolean'];
}>;

type EditProductTemplateDomainMutation = { __typename?: 'Mutation' } & {
    productTemplateDomainEdit: {
        __typename?: 'ProductTemplateDomain';
    } & ProductTemplateDomainPartFragment;
};

type DeleteProductTemplateDomainMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeleteProductTemplateDomainMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productTemplateDomainDelete'
>;

type ProductTemplateExtendPeriodsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductTemplateExtendPeriodsQuery = { __typename?: 'Query' } & {
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

type ProductTemplateExtendPeriodByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductTemplateExtendPeriodByIdQuery = { __typename?: 'Query' } & {
    productTemplateExtendPeriodById: {
        __typename?: 'ProductTemplateExtendPeriod';
    } & Pick<
        ProductTemplateExtendPeriod,
        'id' | 'expression' | 'discount' | 'discountFactor' | 'globalGroup'
    >;
};

type CreateProductTemplateExtendPeriodMutationVariables = Exact<{
    expression: Scalars['String'];
    globalGroup: Scalars['String'];
    discountFactor: Scalars['Float'];
    discount: Scalars['Float'];
}>;

type CreateProductTemplateExtendPeriodMutation = { __typename?: 'Mutation' } & {
    productTemplateExtendPeriodCreate: {
        __typename?: 'ProductTemplateExtendPeriod';
    } & Pick<ProductTemplateExtendPeriod, 'id'>;
};

type EditProductTemplateExtendPeriodMutationVariables = Exact<{
    id: Scalars['ID'];
    expression: Scalars['String'];
    globalGroup: Scalars['String'];
    discountFactor: Scalars['Float'];
    discount: Scalars['Float'];
}>;

type EditProductTemplateExtendPeriodMutation = { __typename?: 'Mutation' } & {
    productTemplateExtendPeriodEdit: {
        __typename?: 'ProductTemplateExtendPeriod';
    } & Pick<
        ProductTemplateExtendPeriod,
        'id' | 'expression' | 'discount' | 'discountFactor' | 'globalGroup'
    >;
};

type DeleteProductTemplateExtendPeriodMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeleteProductTemplateExtendPeriodMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTemplateExtendPeriodDelete'>;

type ProductTemplateGameserverPartFragment = {
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

type ProductTemplateGameserverByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductTemplateGameserverByIdQuery = { __typename?: 'Query' } & {
    productTemplateGameserverById: {
        __typename?: 'ProductTemplateGameserver';
    } & ProductTemplateGameserverPartFragment;
};

type ProductTemplateGameserversQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductTemplateGameserversQuery = { __typename?: 'Query' } & {
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

type CreateProductTemplateGameserverMutationVariables = Exact<{
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    active: Scalars['Boolean'];
    slotOptionId?: Maybe<Scalars['ID']>;
    memoryOptionId?: Maybe<Scalars['ID']>;
}>;

type CreateProductTemplateGameserverMutation = { __typename?: 'Mutation' } & {
    productTemplateGameserverCreate: {
        __typename?: 'ProductTemplateGameserver';
    } & Pick<ProductTemplateGameserver, 'id'>;
};

type EditProductTemplateGameserverMutationVariables = Exact<{
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

type EditProductTemplateGameserverMutation = { __typename?: 'Mutation' } & {
    productTemplateGameserverEdit: {
        __typename?: 'ProductTemplateGameserver';
    } & ProductTemplateGameserverPartFragment;
};

type DeleteProductTemplateGameserverMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeleteProductTemplateGameserverMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTemplateGameserverDelete'>;

type ProductTemplateOptionByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductTemplateOptionByIdQuery = { __typename?: 'Query' } & {
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

type ProductTemplateOptionsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductTemplateOptionsQuery = { __typename?: 'Query' } & {
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

type CreateProductTemplateOptionMutationVariables = Exact<{
    title: Scalars['String'];
    display: Scalars['String'];
}>;

type CreateProductTemplateOptionMutation = { __typename?: 'Mutation' } & {
    productTemplateOptionCreate: {
        __typename?: 'ProductTemplateOption';
    } & Pick<ProductTemplateOption, 'id'>;
};

type EditProductTemplateOptionMutationVariables = Exact<{
    id: Scalars['ID'];
    title: Scalars['String'];
    display: Scalars['String'];
    upgradeable: Scalars['Boolean'];
}>;

type EditProductTemplateOptionMutation = { __typename?: 'Mutation' } & {
    productTemplateOptionEdit: { __typename?: 'ProductTemplateOption' } & Pick<
        ProductTemplateOption,
        'id'
    >;
};

type ProductTemplateOptionVariantByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductTemplateOptionVariantByIdQuery = { __typename?: 'Query' } & {
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

type ProductTemplateOptionVariantsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductTemplateOptionVariantsQuery = { __typename?: 'Query' } & {
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

type CreateProductTemplateOptionVariantMutationVariables = Exact<{
    optionId: Scalars['ID'];
    key: Scalars['String'];
    sort: Scalars['Int'];
    label: Scalars['String'];
    price: Scalars['Float'];
    priceMultiplier: Scalars['Float'];
    priceSetup: Scalars['Float'];
}>;

type CreateProductTemplateOptionVariantMutation = {
    __typename?: 'Mutation';
} & {
    productTemplateOptionVariantCreate: {
        __typename?: 'ProductTemplateOptionVariant';
    } & Pick<ProductTemplateOptionVariant, 'id'>;
};

type EditProductTemplateOptionVariantMutationVariables = Exact<{
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

type EditProductTemplateOptionVariantMutation = { __typename?: 'Mutation' } & {
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

type DeleteProductTemplateOptionVariantMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeleteProductTemplateOptionVariantMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTemplateOptionVariantDelete'>;

type ProductTemplateSimplePartFragment = {
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

type ProductTemplateSimpleByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductTemplateSimpleByIdQuery = { __typename?: 'Query' } & {
    productTemplateSimpleById: {
        __typename?: 'ProductTemplateSimple';
    } & ProductTemplateSimplePartFragment;
};

type ProductTemplateSimplesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductTemplateSimplesQuery = { __typename?: 'Query' } & {
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

type CreateProductTemplateSimpleMutationVariables = Exact<{
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    active: Scalars['Boolean'];
}>;

type CreateProductTemplateSimpleMutation = { __typename?: 'Mutation' } & {
    productTemplateSimpleCreate: {
        __typename?: 'ProductTemplateSimple';
    } & Pick<ProductTemplateSimple, 'id'>;
};

type EditProductTemplateSimpleMutationVariables = Exact<{
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

type EditProductTemplateSimpleMutation = { __typename?: 'Mutation' } & {
    productTemplateSimpleEdit: {
        __typename?: 'ProductTemplateSimple';
    } & ProductTemplateSimplePartFragment;
};

type DeleteProductTemplateSimpleMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeleteProductTemplateSimpleMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productTemplateSimpleDelete'
>;

type ProductTemplateTeamspeakPartFragment = {
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

type ProductTemplateTeamspeakByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductTemplateTeamspeakByIdQuery = { __typename?: 'Query' } & {
    productTemplateTeamspeakById: {
        __typename?: 'ProductTemplateTeamspeak';
    } & ProductTemplateTeamspeakPartFragment;
};

type ProductTemplateTeamspeaksQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductTemplateTeamspeaksQuery = { __typename?: 'Query' } & {
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

type CreateProductTemplateTeamspeakMutationVariables = Exact<{
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    active: Scalars['Boolean'];
    slotOptionId: Scalars['ID'];
}>;

type CreateProductTemplateTeamspeakMutation = { __typename?: 'Mutation' } & {
    productTemplateTeamspeakCreate: {
        __typename?: 'ProductTemplateTeamspeak';
    } & Pick<ProductTemplateTeamspeak, 'id'>;
};

type EditProductTemplateTeamspeakMutationVariables = Exact<{
    id: Scalars['ID'];
    title: Scalars['String'];
    setup: Scalars['Float'];
    basePrice: Scalars['Float'];
    urlKey: Scalars['String'];
    active: Scalars['Boolean'];
    slotOptionId: Scalars['ID'];
}>;

type EditProductTemplateTeamspeakMutation = { __typename?: 'Mutation' } & {
    productTemplateTeamspeakEdit: {
        __typename?: 'ProductTemplateTeamspeak';
    } & ProductTemplateTeamspeakPartFragment;
};

type DeleteProductTemplateTeamspeakMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeleteProductTemplateTeamspeakMutation = {
    __typename?: 'Mutation';
} & Pick<Mutation, 'productTemplateTeamspeakDelete'>;

type ProductTemplateVserverPartFragment = {
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

type ProductTemplateVserversQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductTemplateVserversQuery = { __typename?: 'Query' } & {
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

type ProductTemplateVserverByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductTemplateVserverByIdQuery = { __typename?: 'Query' } & {
    productTemplateVserverById: {
        __typename?: 'ProductTemplateVserver';
    } & ProductTemplateVserverPartFragment;
};

type CreateProductTemplateVserverMutationVariables = Exact<{
    data: ProductTemplateVserverCreateInput;
}>;

type CreateProductTemplateVserverMutation = { __typename?: 'Mutation' } & {
    productTemplateVserverCreate: {
        __typename?: 'ProductTemplateVserver';
    } & ProductTemplateVserverPartFragment;
};

type EditProductTemplateVserverMutationVariables = Exact<{
    data: ProductTemplateVserverEditInput;
}>;

type EditProductTemplateVserverMutation = { __typename?: 'Mutation' } & {
    productTemplateVserverEdit: {
        __typename?: 'ProductTemplateVserver';
    } & ProductTemplateVserverPartFragment;
};

type DeleteProductTemplateVserverMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeleteProductTemplateVserverMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productTemplateVserverDelete'
>;

type TranslationPartFragment = { __typename?: 'Translation' } & Pick<
    Translation,
    'id' | 'language' | 'key' | 'value'
>;

type TranslationsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type TranslationsQuery = { __typename?: 'Query' } & {
    translations: { __typename?: 'TranslationResultMany' } & {
        edges: Array<{ __typename?: 'Translation' } & TranslationPartFragment>;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

type TranslationByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type TranslationByIdQuery = { __typename?: 'Query' } & {
    translationById: { __typename?: 'Translation' } & TranslationPartFragment;
};

type TranslationEditMutationVariables = Exact<{
    id: Scalars['ID'];
    value: Scalars['String'];
    key: Scalars['String'];
    language: Scalars['String'];
}>;

type TranslationEditMutation = { __typename?: 'Mutation' } & {
    translationEdit: { __typename?: 'Translation' } & TranslationPartFragment;
};

type TranslationCreateMutationVariables = Exact<{ [key: string]: never }>;

type TranslationCreateMutation = { __typename?: 'Mutation' } & {
    translationCreate: { __typename?: 'Translation' } & TranslationPartFragment;
};

type TranslationDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type TranslationDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'translationDelete'
>;

type UserPartFragment = { __typename?: 'User' } & Pick<
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

type UserSetActiveMutationVariables = Exact<{
    id: Scalars['ID'];
    active: Scalars['Boolean'];
}>;

type UserSetActiveMutation = { __typename?: 'Mutation' } & {
    userSetActive: { __typename?: 'User' } & UserPartFragment;
};

type PingQueryVariables = Exact<{ [key: string]: never }>;

type PingQuery = { __typename?: 'Query' } & Pick<Query, 'ping'>;

type UserPartAddressFragment = { __typename?: 'UserAddress' } & Pick<
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

type UsersQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type UsersQuery = { __typename?: 'Query' } & {
    users: { __typename?: 'UserResultMany' } & {
        edges: Array<{ __typename?: 'User' } & UserPartFragment>;
        pageInfo: { __typename?: 'CordPageInfo' } & Pick<
            CordPageInfo,
            'totalCount'
        >;
    };
};

type UserTestMyPasswordMutationVariables = Exact<{
    password: Scalars['String'];
}>;

type UserTestMyPasswordMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'userTestMyPassword'
>;

type UserByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type UserByIdQuery = { __typename?: 'Query' } & {
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

type MeLoggedInQueryVariables = Exact<{ [key: string]: never }>;

type MeLoggedInQuery = { __typename?: 'Query' } & Pick<Query, 'user_is_login'>;

type LoginMutationVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
}>;

type LoginMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'userLoginWithEmailToken'
>;

type AdminLoginAsUserMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type AdminLoginAsUserMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'user_admin_login'
>;

type UserMakeFeedbackMutationVariables = Exact<{
    availableForMoreFeedback?: Maybe<Scalars['Boolean']>;
    feedbackMessage?: Maybe<Scalars['String']>;
    feedbackSatisfied?: Maybe<Scalars['Boolean']>;
}>;

type UserMakeFeedbackMutation = { __typename?: 'Mutation' } & {
    userMakeFeedback: { __typename?: 'User' } & Pick<
        User,
        'id' | 'canMakeFeedback'
    >;
};

type UserMeQueryVariables = Exact<{ [key: string]: never }>;

type UserMeQuery = { __typename?: 'Query' } & {
    user_me: { __typename?: 'User' } & Pick<
        User,
        'supportId' | 'publicName' | 'canMakeFeedback'
    > & {
            address?: Maybe<
                { __typename?: 'UserAddress' } & UserPartAddressFragment
            >;
        } & UserPartFragment;
};

type UserAddressAddVerifyDocumentMutationVariables = Exact<{
    fileId: Scalars['ID'];
}>;

type UserAddressAddVerifyDocumentMutation = { __typename?: 'Mutation' } & {
    userAddressAddVerifyDocument: { __typename?: 'User' } & Pick<
        User,
        'supportId'
    > & {
            address?: Maybe<
                { __typename?: 'UserAddress' } & UserPartAddressFragment
            >;
        } & UserPartFragment;
};

type UserAddressDelVerifyDocumentMutationVariables = Exact<{
    [key: string]: never;
}>;

type UserAddressDelVerifyDocumentMutation = { __typename?: 'Mutation' } & {
    userAddressDelVerifyDocument: { __typename?: 'User' } & Pick<
        User,
        'supportId'
    > & {
            address?: Maybe<
                { __typename?: 'UserAddress' } & UserPartAddressFragment
            >;
        } & UserPartFragment;
};

type UserMeCustomCreditsQueryVariables = Exact<{ [key: string]: never }>;

type UserMeCustomCreditsQuery = { __typename?: 'Query' } & {
    user_me: { __typename?: 'User' } & Pick<
        User,
        | 'id'
        | 'bonusCredits'
        | 'importedCredits'
        | 'credits'
        | 'canHaveBonusCredits'
    >;
};

type UserCustomCreditsQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type UserCustomCreditsQuery = { __typename?: 'Query' } & {
    userById: { __typename?: 'User' } & Pick<
        User,
        'id' | 'bonusCredits' | 'importedCredits' | 'credits'
    >;
};

type UserEditSelfGeneralMutationVariables = Exact<{
    new_password?: Maybe<Scalars['String']>;
    nickname: Scalars['String'];
    forceEmailLogin?: Maybe<Scalars['Boolean']>;
    localAvatarId?: Maybe<Scalars['ID']>;
}>;

type UserEditSelfGeneralMutation = { __typename?: 'Mutation' } & {
    userEditSelfGeneral: { __typename?: 'User' } & {
        address?: Maybe<
            { __typename?: 'UserAddress' } & UserPartAddressFragment
        >;
    } & UserPartFragment;
};

type UserEditSelfAddressMutationVariables = Exact<{
    data: UserInputUserEditAddress;
}>;

type UserEditSelfAddressMutation = { __typename?: 'Mutation' } & {
    userEditSelfAddress: { __typename?: 'User' } & {
        address?: Maybe<
            { __typename?: 'UserAddress' } & UserPartAddressFragment
        >;
    } & UserPartFragment;
};

type UserEditSelfEmailMutationVariables = Exact<{
    email: Scalars['String'];
    password: Scalars['String'];
}>;

type UserEditSelfEmailMutation = { __typename?: 'Mutation' } & {
    userEditSelfEmail: { __typename?: 'User' } & UserPartFragment;
};

type UserCountriesQueryVariables = Exact<{ [key: string]: never }>;

type UserCountriesQuery = { __typename?: 'Query' } & Pick<
    Query,
    'userCountries'
>;

type RegisterNewUserMutationVariables = Exact<{
    googleCaptcha: Scalars['String'];
    data: UserInputRegister;
}>;

type RegisterNewUserMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'user_register'
>;

type UserAdminLogoutMutationVariables = Exact<{ [key: string]: never }>;

type UserAdminLogoutMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'userAdminLogout'
>;

type UserVerifyMutationVariables = Exact<{
    token: Scalars['String'];
}>;

type UserVerifyMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'user_verify'
>;

type ResetPasswordMutationVariables = Exact<{
    token: Scalars['String'];
    password: Scalars['String'];
}>;

type ResetPasswordMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'user_reset_password_token'
>;

type UserResetPasswordMutationVariables = Exact<{
    email: Scalars['String'];
    captcha: Scalars['String'];
}>;

type UserResetPasswordMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'user_reset_password'
>;

type ProductAdminInfoQueryVariables = Exact<{ [key: string]: never }>;

type ProductAdminInfoQuery = { __typename?: 'Query' } & {
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

type UserAddresssQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type UserAddresssQuery = { __typename?: 'Query' } & {
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

type UserAddressConfirmVerifyMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type UserAddressConfirmVerifyMutation = { __typename?: 'Mutation' } & {
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

type UserAddressRejectVerifyMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type UserAddressRejectVerifyMutation = { __typename?: 'Mutation' } & {
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

type UserCommentsByUserQueryVariables = Exact<{
    userId: Scalars['ID'];
}>;

type UserCommentsByUserQuery = { __typename?: 'Query' } & {
    userCommentsByUser: Array<
        { __typename?: 'UserComment' } & Pick<
            UserComment,
            'message' | 'id' | 'create'
        >
    >;
};

type UserCommentCreateMutationVariables = Exact<{
    userId: Scalars['ID'];
    message: Scalars['String'];
}>;

type UserCommentCreateMutation = { __typename?: 'Mutation' } & {
    userCommentCreate: { __typename?: 'UserComment' } & Pick<
        UserComment,
        'message' | 'id' | 'create'
    >;
};

type MyUserOAuthTokensQueryVariables = Exact<{ [key: string]: never }>;

type MyUserOAuthTokensQuery = { __typename?: 'Query' } & {
    myUserOAuthTokens: Array<
        { __typename?: 'UserOauthToken' } & Pick<
            UserOauthToken,
            'id' | 'service' | 'confirmed'
        >
    >;
};

type UserOauthTokenConfirmMutationVariables = Exact<{
    password: Scalars['String'];
    id: Scalars['ID'];
}>;

type UserOauthTokenConfirmMutation = { __typename?: 'Mutation' } & {
    userOauthTokenConfirm: { __typename?: 'UserOauthToken' } & Pick<
        UserOauthToken,
        'id' | 'service' | 'confirmed'
    >;
};

type UserOAuthDeleteTokenMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type UserOAuthDeleteTokenMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'userOAuthDeleteToken'
>;

type ProductVserverPartFragment = { __typename?: 'ProductVserver' } & Pick<
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

type ProductVserverByIdBackupsQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverByIdBackupsQuery = { __typename?: 'Query' } & {
    productVserverById: { __typename?: 'ProductVserver' } & {
        backups: Array<
            { __typename?: 'ProductVserverBackup' } & Pick<
                ProductVserverBackup,
                'id' | 'create' | 'sizeInMb' | 'restorable'
            >
        >;
    } & ProductVserverPartFragment;
};

type ProductVserverDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productVserverDelete'
>;

type ProductVserversQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductVserversQuery = { __typename?: 'Query' } & {
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

type ProductVserverExistQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverExistQuery = { __typename?: 'Query' } & Pick<
    Query,
    'productVserverExist'
>;

type ProductVserverStatsQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverStatsQuery = { __typename?: 'Query' } & {
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

type ProductVserverRunningQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverRunningQuery = { __typename?: 'Query' } & Pick<
    Query,
    'productVserverRunning'
>;

type ProductVserverMakeVncPortMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverMakeVncPortMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productVserverMakeVncPort'
>;

type ProductVserverInstallMutationVariables = Exact<{
    id: Scalars['ID'];
    recreate?: Maybe<Scalars['Boolean']>;
}>;

type ProductVserverInstallMutation = { __typename?: 'Mutation' } & {
    productVserverInstall: { __typename?: 'HostNodeTask' } & Pick<
        HostNodeTask,
        'id'
    >;
};

type ProductVserverBackupRestoreMutationVariables = Exact<{
    id: Scalars['ID'];
    backupId: Scalars['ID'];
}>;

type ProductVserverBackupRestoreMutation = { __typename?: 'Mutation' } & {
    productVserverBackupRestore: { __typename?: 'ProductVserverBackup' } & Pick<
        ProductVserverBackup,
        'id'
    >;
};

type ProductVserverBackupDownloadMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverBackupDownloadMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productVserverBackupDownload'
>;

type ProductVserverBackupCreateMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverBackupCreateMutation = { __typename?: 'Mutation' } & {
    productVserverBackupCreate: { __typename?: 'ProductVserverBackup' } & Pick<
        ProductVserverBackup,
        'id'
    >;
};

type ProductVserverBackupDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
    backupId: Scalars['ID'];
}>;

type ProductVserverBackupDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productVserverBackupDelete'
>;

type ProductVserverStartMutationVariables = Exact<{
    id: Scalars['ID'];
    withImages?: Maybe<Scalars['Boolean']>;
}>;

type ProductVserverStartMutation = { __typename?: 'Mutation' } & {
    productVserverStart: { __typename?: 'HostNodeTask' } & Pick<
        HostNodeTask,
        'id'
    >;
};

type ProductVserverStopMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverStopMutation = { __typename?: 'Mutation' } & {
    productVserverStop: { __typename?: 'HostNodeTask' } & Pick<
        HostNodeTask,
        'id'
    >;
};

type ProductVserverSetSshPasswordMutationVariables = Exact<{
    id: Scalars['ID'];
    password: Scalars['String'];
}>;

type ProductVserverSetSshPasswordMutation = { __typename?: 'Mutation' } & {
    productVserverSetSshPassword: {
        __typename?: 'ProductVserver';
    } & ProductVserverPartFragment;
};

type ProductVserverChangeLabelMutationVariables = Exact<{
    id: Scalars['ID'];
    label: Scalars['String'];
}>;

type ProductVserverChangeLabelMutation = { __typename?: 'Mutation' } & {
    productVserverChangeLabel: {
        __typename?: 'ProductVserver';
    } & ProductVserverPartFragment;
};

type ProductVserverAddImageMutationVariables = Exact<{
    id: Scalars['ID'];
    imageId: Scalars['ID'];
}>;

type ProductVserverAddImageMutation = { __typename?: 'Mutation' } & {
    productVserverAddImage: {
        __typename?: 'ProductVserver';
    } & ProductVserverPartFragment;
};

type ProductVserverRemoveImageMutationVariables = Exact<{
    id: Scalars['ID'];
    imageId: Scalars['ID'];
}>;

type ProductVserverRemoveImageMutation = { __typename?: 'Mutation' } & {
    productVserverRemoveImage: {
        __typename?: 'ProductVserver';
    } & ProductVserverPartFragment;
};

type ProductVserverByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverByIdQuery = { __typename?: 'Query' } & {
    productVserverById: { __typename?: 'ProductVserver' } & Pick<
        ProductVserver,
        'trafficTransferredInMB'
    > &
        ProductVserverPartFragment;
};

type ProductVserverUnlockNetworkSpeedMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverUnlockNetworkSpeedMutation = { __typename?: 'Mutation' } & {
    productVserverUnlockNetworkSpeed: {
        __typename?: 'ProductVserver';
    } & ProductVserverPartFragment;
};

type MyProductVserversQueryVariables = Exact<{ [key: string]: never }>;

type MyProductVserversQuery = { __typename?: 'Query' } & {
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

type ProductVserverImagePartFragment = {
    __typename?: 'ProductVserverImage';
} & Pick<
    ProductVserverImage,
    'id' | 'title' | 'platform' | 'resourceUrl' | 'active'
> & { logo?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>> };

type ProductVserverImagesQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductVserverImagesQuery = { __typename?: 'Query' } & {
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

type ProductVserverImageCreateMutationVariables = Exact<{
    data: ProductVserverImageCreateInput;
}>;

type ProductVserverImageCreateMutation = { __typename?: 'Mutation' } & {
    productVserverImageCreate: {
        __typename?: 'ProductVserverImage';
    } & ProductVserverImagePartFragment;
};

type ProductVserverImageEditMutationVariables = Exact<{
    data: ProductVserverImageEditInput;
}>;

type ProductVserverImageEditMutation = { __typename?: 'Mutation' } & {
    productVserverImageEdit: {
        __typename?: 'ProductVserverImage';
    } & ProductVserverImagePartFragment;
};

type ProductVserverImageDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverImageDeleteMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productVserverImageDelete'
>;

type ProductVserverImageByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverImageByIdQuery = { __typename?: 'Query' } & {
    productVserverImageById: {
        __typename?: 'ProductVserverImage';
    } & ProductVserverImagePartFragment;
};

type ProductVserverImagePlatformImagesQueryVariables = Exact<{
    platform: Scalars['String'];
    search?: Maybe<Scalars['String']>;
}>;

type ProductVserverImagePlatformImagesQuery = { __typename?: 'Query' } & {
    productVserverImagePlatformImages: Array<
        { __typename?: 'ProductVserverImage' } & ProductVserverImagePartFragment
    >;
};

type CreateProductVserverIpMutationVariables = Exact<{
    ip: Scalars['String'];
    hostNodeId?: Maybe<Scalars['ID']>;
    gateway: Scalars['String'];
    netmask: Scalars['String'];
    active: Scalars['Boolean'];
    cidr?: Maybe<Scalars['Int']>;
}>;

type CreateProductVserverIpMutation = { __typename?: 'Mutation' } & {
    productVserverIpCreate: Array<
        { __typename?: 'ProductVserverIp' } & Pick<ProductVserverIp, 'id'>
    >;
};

type EditProductVserverIpMutationVariables = Exact<{
    ip: Scalars['String'];
    hostNodeId?: Maybe<Scalars['ID']>;
    gateway: Scalars['String'];
    netmask: Scalars['String'];
    active: Scalars['Boolean'];
    vserverId?: Maybe<Scalars['ID']>;
    id: Scalars['ID'];
}>;

type EditProductVserverIpMutation = { __typename?: 'Mutation' } & {
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

type DeleteProductVserverIpMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

type DeleteProductVserverIpMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productVserverIpDelete'
>;

type ProductVserverIpsQueryVariables = Exact<{
    filter?: Maybe<CordFilter>;
}>;

type ProductVserverIpsQuery = { __typename?: 'Query' } & {
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

type ProductVserverIpByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

type ProductVserverIpByIdQuery = { __typename?: 'Query' } & {
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

type ProductVserverIpFreeQueryVariables = Exact<{ [key: string]: never }>;

type ProductVserverIpFreeQuery = { __typename?: 'Query' } & {
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

type ProductVserverIpReassignIpMutationVariables = Exact<{
    id: Scalars['ID'];
    newId: Scalars['ID'];
}>;

type ProductVserverIpReassignIpMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'productVserverIpReassignIp'
>;

/*
 * This file was generated by graphql-code-generator with the apollo-hooks-codegen plugin.
 * Any changes made to the file will be overwritten.
 */

import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';
import * as Urql from 'urql';

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryMeHasAcl.Document = gql`
    query meHasAcl($acl: String!) {
        acl_has_acl(acl: $acl)
    }
` as DocumentNode;

export function useQueryMeHasAcl(
    options: Omit<Urql.UseQueryArgs<MeHasAclQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<MeHasAclQuery>({
        query: useQueryMeHasAcl.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryAcls.Document = gql`
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
` as DocumentNode;

export function useQueryAcls(
    options: Omit<Urql.UseQueryArgs<AclsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<AclsQuery>({
        query: useQueryAcls.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationAclRefillAclCache.Document = gql`
    mutation aclRefillAclCache {
        aclRefillAclCache
    }
` as DocumentNode;

export function useMutationAclRefillAclCache() {
    return Urql.useMutation<
        AclRefillAclCacheMutation,
        AclRefillAclCacheMutationVariables
    >(useMutationAclRefillAclCache.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useMutationCreateBackupServer.Document = gql`
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
` as DocumentNode;

export function useMutationCreateBackupServer() {
    return Urql.useMutation<
        CreateBackupServerMutation,
        CreateBackupServerMutationVariables
    >(useMutationCreateBackupServer.Document);
}

useMutationEditBackupServer.Document = gql`
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
` as DocumentNode;

export function useMutationEditBackupServer() {
    return Urql.useMutation<
        EditBackupServerMutation,
        EditBackupServerMutationVariables
    >(useMutationEditBackupServer.Document);
}

useMutationDeleteBackupServerById.Document = gql`
    mutation deleteBackupServerById($id: ID!) {
        backupServerDelete(id: $id)
    }
` as DocumentNode;

export function useMutationDeleteBackupServerById() {
    return Urql.useMutation<
        DeleteBackupServerByIdMutation,
        DeleteBackupServerByIdMutationVariables
    >(useMutationDeleteBackupServerById.Document);
}

useQueryBackupServers.Document = gql`
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
` as DocumentNode;

export function useQueryBackupServers(
    options: Omit<Urql.UseQueryArgs<BackupServersQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<BackupServersQuery>({
        query: useQueryBackupServers.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryBackupServerById.Document = gql`
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
` as DocumentNode;

export function useQueryBackupServerById(
    options: Omit<
        Urql.UseQueryArgs<BackupServerByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<BackupServerByIdQuery>({
        query: useQueryBackupServerById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryBlogPostRead.Document = gql`
    query blogPostRead {
        blogPostRead {
            title
            link
            pubDate
            html
        }
    }
` as DocumentNode;

export function useQueryBlogPostRead(
    options: Omit<Urql.UseQueryArgs<BlogPostReadQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<BlogPostReadQuery>({
        query: useQueryBlogPostRead.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

/*,
 * Fragments from undefined,
 */
const _gql_ProductDomainPart = gql`
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

/*,
 * Operations from undefined,
 */

useQueryProductDomains.Document = gql`
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
` as DocumentNode;

export function useQueryProductDomains(
    options: Omit<Urql.UseQueryArgs<ProductDomainsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<ProductDomainsQuery>({
        query: useQueryProductDomains.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductDomainById.Document = gql`
    query productDomainById($id: ID!) {
        productDomainById(id: $id) {
            ...ProductDomainPart
        }
    }
    ${_gql_ProductDomainPart}
` as DocumentNode;

export function useQueryProductDomainById(
    options: Omit<
        Urql.UseQueryArgs<ProductDomainByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductDomainByIdQuery>({
        query: useQueryProductDomainById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryMyProductDomains.Document = gql`
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
` as DocumentNode;

export function useQueryMyProductDomains(
    options: Omit<
        Urql.UseQueryArgs<MyProductDomainsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyProductDomainsQuery>({
        query: useQueryMyProductDomains.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductDomainRequestNewAuthcode.Document = gql`
    mutation productDomainRequestNewAuthcode($id: ID!) {
        productDomainRequestNewAuthcode(id: $id) {
            ...ProductDomainPart
        }
    }
    ${_gql_ProductDomainPart}
` as DocumentNode;

export function useMutationProductDomainRequestNewAuthcode() {
    return Urql.useMutation<
        ProductDomainRequestNewAuthcodeMutation,
        ProductDomainRequestNewAuthcodeMutationVariables
    >(useMutationProductDomainRequestNewAuthcode.Document);
}

useMutationProductDomainDelete.Document = gql`
    mutation productDomainDelete($id: ID!) {
        productDomainDelete(id: $id)
    }
` as DocumentNode;

export function useMutationProductDomainDelete() {
    return Urql.useMutation<
        ProductDomainDeleteMutation,
        ProductDomainDeleteMutationVariables
    >(useMutationProductDomainDelete.Document);
}

useMutationProductDomainSetAuthcode.Document = gql`
    mutation productDomainSetAuthcode($id: ID!, $authcode: String!) {
        productDomainSetAuthcode(id: $id, authcode: $authcode) {
            ...ProductDomainPart
        }
    }
    ${_gql_ProductDomainPart}
` as DocumentNode;

export function useMutationProductDomainSetAuthcode() {
    return Urql.useMutation<
        ProductDomainSetAuthcodeMutation,
        ProductDomainSetAuthcodeMutationVariables
    >(useMutationProductDomainSetAuthcode.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useMutationDsgvoAnonymizeAccount.Document = gql`
    mutation dsgvoAnonymizeAccount($id: ID!) {
        dsgvoAnonymizeAccount(id: $id)
    }
` as DocumentNode;

export function useMutationDsgvoAnonymizeAccount() {
    return Urql.useMutation<
        DsgvoAnonymizeAccountMutation,
        DsgvoAnonymizeAccountMutationVariables
    >(useMutationDsgvoAnonymizeAccount.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_EmailTemplatePart = gql`
    fragment EmailTemplatePart on EmailTemplate {
        id
        sender
        subject
        template
    }
`;

/*,
 * Operations from undefined,
 */

useQueryEmailTemplates.Document = gql`
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
    ${_gql_EmailTemplatePart}
` as DocumentNode;

export function useQueryEmailTemplates(
    options: Omit<Urql.UseQueryArgs<EmailTemplatesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<EmailTemplatesQuery>({
        query: useQueryEmailTemplates.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryEmailTemplateById.Document = gql`
    query emailTemplateById($id: ID!) {
        emailTemplateById(id: $id) {
            ...EmailTemplatePart
            templateContent
        }
    }
    ${_gql_EmailTemplatePart}
` as DocumentNode;

export function useQueryEmailTemplateById(
    options: Omit<
        Urql.UseQueryArgs<EmailTemplateByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<EmailTemplateByIdQuery>({
        query: useQueryEmailTemplateById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationNewEmailTemplate.Document = gql`
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
    ${_gql_EmailTemplatePart}
` as DocumentNode;

export function useMutationNewEmailTemplate() {
    return Urql.useMutation<
        NewEmailTemplateMutation,
        NewEmailTemplateMutationVariables
    >(useMutationNewEmailTemplate.Document);
}

useMutationDeleteEmailTemplate.Document = gql`
    mutation deleteEmailTemplate($id: ID!) {
        email_template_delete(id: $id)
    }
` as DocumentNode;

export function useMutationDeleteEmailTemplate() {
    return Urql.useMutation<
        DeleteEmailTemplateMutation,
        DeleteEmailTemplateMutationVariables
    >(useMutationDeleteEmailTemplate.Document);
}

useMutationEditEmailTemplate.Document = gql`
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
    ${_gql_EmailTemplatePart}
` as DocumentNode;

export function useMutationEditEmailTemplate() {
    return Urql.useMutation<
        EditEmailTemplateMutation,
        EditEmailTemplateMutationVariables
    >(useMutationEditEmailTemplate.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useMutationFileDeleteFile.Document = gql`
    mutation FileDeleteFile($id: ID!) {
        FileDeleteFile(id: $id)
    }
` as DocumentNode;

export function useMutationFileDeleteFile() {
    return Urql.useMutation<
        FileDeleteFileMutation,
        FileDeleteFileMutationVariables
    >(useMutationFileDeleteFile.Document);
}

useQueryMyFiles.Document = gql`
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
` as DocumentNode;

export function useQueryMyFiles(
    options: Omit<Urql.UseQueryArgs<MyFilesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<MyFilesQuery>({
        query: useQueryMyFiles.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

/*,
 * Fragments from undefined,
 */
const _gql_FinanceTransactionPart = gql`
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

/*,
 * Operations from undefined,
 */

useQueryFinancePaymentMethods.Document = gql`
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
` as DocumentNode;

export function useQueryFinancePaymentMethods(
    options: Omit<
        Urql.UseQueryArgs<FinancePaymentMethodsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<FinancePaymentMethodsQuery>({
        query: useQueryFinancePaymentMethods.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryFinanceTransactions.Document = gql`
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
    ${_gql_FinanceTransactionPart}
` as DocumentNode;

export function useQueryFinanceTransactions(
    options: Omit<
        Urql.UseQueryArgs<FinanceTransactionsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<FinanceTransactionsQuery>({
        query: useQueryFinanceTransactions.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryFinanceTransactionById.Document = gql`
    query financeTransactionById($id: ID!) {
        financeTransactionById(id: $id) {
            ...FinanceTransactionPart
        }
    }
    ${_gql_FinanceTransactionPart}
` as DocumentNode;

export function useQueryFinanceTransactionById(
    options: Omit<
        Urql.UseQueryArgs<FinanceTransactionByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<FinanceTransactionByIdQuery>({
        query: useQueryFinanceTransactionById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationCreateFinanceTransaction.Document = gql`
    mutation CreateFinanceTransaction($data: FinanceTransactionCreateInput!) {
        financeTransactionCreate(data: $data) {
            ...FinanceTransactionPart
        }
    }
    ${_gql_FinanceTransactionPart}
` as DocumentNode;

export function useMutationCreateFinanceTransaction() {
    return Urql.useMutation<
        CreateFinanceTransactionMutation,
        CreateFinanceTransactionMutationVariables
    >(useMutationCreateFinanceTransaction.Document);
}

useQueryMyFinanceTransactions.Document = gql`
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
    ${_gql_FinanceTransactionPart}
` as DocumentNode;

export function useQueryMyFinanceTransactions(
    options: Omit<
        Urql.UseQueryArgs<MyFinanceTransactionsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyFinanceTransactionsQuery>({
        query: useQueryMyFinanceTransactions.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

/*,
 * Fragments from undefined,
 */
const _gql_FinanceChargePart = gql`
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

/*,
 * Operations from undefined,
 */

useQueryFinanceCharges.Document = gql`
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
    ${_gql_FinanceChargePart}
` as DocumentNode;

export function useQueryFinanceCharges(
    options: Omit<Urql.UseQueryArgs<FinanceChargesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<FinanceChargesQuery>({
        query: useQueryFinanceCharges.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryFinanceChargeById.Document = gql`
    query financeChargeById($id: ID!) {
        financeChargeById(id: $id) {
            ...FinanceChargePart
        }
    }
    ${_gql_FinanceChargePart}
` as DocumentNode;

export function useQueryFinanceChargeById(
    options: Omit<
        Urql.UseQueryArgs<FinanceChargeByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<FinanceChargeByIdQuery>({
        query: useQueryFinanceChargeById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationFinanceChargeVerify.Document = gql`
    mutation financeChargeVerify($id: ID!, $description: String) {
        financeChargeVerify(id: $id, description: $description) {
            ...FinanceChargePart
        }
    }
    ${_gql_FinanceChargePart}
` as DocumentNode;

export function useMutationFinanceChargeVerify() {
    return Urql.useMutation<
        FinanceChargeVerifyMutation,
        FinanceChargeVerifyMutationVariables
    >(useMutationFinanceChargeVerify.Document);
}

useMutationFinanceChargeDelete.Document = gql`
    mutation financeChargeDelete($id: ID!) {
        financeChargeDelete(id: $id)
    }
` as DocumentNode;

export function useMutationFinanceChargeDelete() {
    return Urql.useMutation<
        FinanceChargeDeleteMutation,
        FinanceChargeDeleteMutationVariables
    >(useMutationFinanceChargeDelete.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryFinanceDonationLinksMy.Document = gql`
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
` as DocumentNode;

export function useQueryFinanceDonationLinksMy(
    options: Omit<
        Urql.UseQueryArgs<FinanceDonationLinksMyQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<FinanceDonationLinksMyQuery>({
        query: useQueryFinanceDonationLinksMy.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationFinanceDonationLinkCreate.Document = gql`
    mutation financeDonationLinkCreate($message: String!, $label: String) {
        financeDonationLinkCreate(message: $message, label: $label) {
            id
            create
            message
            url
            totalDonationSum
        }
    }
` as DocumentNode;

export function useMutationFinanceDonationLinkCreate() {
    return Urql.useMutation<
        FinanceDonationLinkCreateMutation,
        FinanceDonationLinkCreateMutationVariables
    >(useMutationFinanceDonationLinkCreate.Document);
}

useMutationFinanceDonationLinkDelete.Document = gql`
    mutation financeDonationLinkDelete($id: ID!) {
        financeDonationLinkDelete(id: $id)
    }
` as DocumentNode;

export function useMutationFinanceDonationLinkDelete() {
    return Urql.useMutation<
        FinanceDonationLinkDeleteMutation,
        FinanceDonationLinkDeleteMutationVariables
    >(useMutationFinanceDonationLinkDelete.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_ProductGameserverPart = gql`
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

/*,
 * Operations from undefined,
 */

useMutationProductGameserverStart.Document = gql`
    mutation productGameserverStart($gameserverId: ID!, $scriptId: ID) {
        product_gameserver_start(
            gameserverId: $gameserverId
            scriptId: $scriptId
        ) {
            ...ProductGameserverPart
        }
    }
    ${_gql_ProductGameserverPart}
` as DocumentNode;

export function useMutationProductGameserverStart() {
    return Urql.useMutation<
        ProductGameserverStartMutation,
        ProductGameserverStartMutationVariables
    >(useMutationProductGameserverStart.Document);
}

useMutationProductGameserverSetAutorestarts.Document = gql`
    mutation productGameserverSetAutorestarts($id: ID!, $restarts: [Int!]!) {
        productGameserverSetAutorestarts(id: $id, restarts: $restarts) {
            ...ProductGameserverPart
        }
    }
    ${_gql_ProductGameserverPart}
` as DocumentNode;

export function useMutationProductGameserverSetAutorestarts() {
    return Urql.useMutation<
        ProductGameserverSetAutorestartsMutation,
        ProductGameserverSetAutorestartsMutationVariables
    >(useMutationProductGameserverSetAutorestarts.Document);
}

useMutationProductGameserverFailureAutorestart.Document = gql`
    mutation productGameserverFailureAutorestart($id: ID!, $restart: Boolean!) {
        productGameserverFailureAutorestart(id: $id, restart: $restart) {
            ...ProductGameserverPart
        }
    }
    ${_gql_ProductGameserverPart}
` as DocumentNode;

export function useMutationProductGameserverFailureAutorestart() {
    return Urql.useMutation<
        ProductGameserverFailureAutorestartMutation,
        ProductGameserverFailureAutorestartMutationVariables
    >(useMutationProductGameserverFailureAutorestart.Document);
}

useQueryProductGameserverRunning.Document = gql`
    query productGameserverRunning($gameserverId: ID!) {
        product_gameserver_running(gameserverId: $gameserverId)
    }
` as DocumentNode;

export function useQueryProductGameserverRunning(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverRunningQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverRunningQuery>({
        query: useQueryProductGameserverRunning.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductGameserverLog.Document = gql`
    query productGameserverLog($gameserverId: ID!) {
        product_gameserver_log(gameserverId: $gameserverId)
    }
` as DocumentNode;

export function useQueryProductGameserverLog(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverLogQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverLogQuery>({
        query: useQueryProductGameserverLog.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductGameserverStop.Document = gql`
    mutation productGameserverStop($gameserverId: ID!) {
        product_gameserver_stop(gameserverId: $gameserverId) {
            ...ProductGameserverPart
        }
    }
    ${_gql_ProductGameserverPart}
` as DocumentNode;

export function useMutationProductGameserverStop() {
    return Urql.useMutation<
        ProductGameserverStopMutation,
        ProductGameserverStopMutationVariables
    >(useMutationProductGameserverStop.Document);
}

useMutationProductGameserverConsole.Document = gql`
    mutation productGameserverConsole($gameserverId: ID!, $command: String!) {
        product_gameserver_console(
            gameserverId: $gameserverId
            command: $command
        )
    }
` as DocumentNode;

export function useMutationProductGameserverConsole() {
    return Urql.useMutation<
        ProductGameserverConsoleMutation,
        ProductGameserverConsoleMutationVariables
    >(useMutationProductGameserverConsole.Document);
}

useQueryProductGameserverExist.Document = gql`
    query productGameserverExist($gameserverId: ID!) {
        product_gameserver_exist(gameserverId: $gameserverId)
    }
` as DocumentNode;

export function useQueryProductGameserverExist(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverExistQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverExistQuery>({
        query: useQueryProductGameserverExist.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductGameserverChangeFtpPassword.Document = gql`
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
    ${_gql_ProductGameserverPart}
` as DocumentNode;

export function useMutationProductGameserverChangeFtpPassword() {
    return Urql.useMutation<
        ProductGameserverChangeFtpPasswordMutation,
        ProductGameserverChangeFtpPasswordMutationVariables
    >(useMutationProductGameserverChangeFtpPassword.Document);
}

useQueryProductGameserver.Document = gql`
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
    ${_gql_ProductGameserverPart}
` as DocumentNode;

export function useQueryProductGameserver(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverQuery>({
        query: useQueryProductGameserver.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductGameserverUsage.Document = gql`
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
` as DocumentNode;

export function useQueryProductGameserverUsage(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverUsageQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverUsageQuery>({
        query: useQueryProductGameserverUsage.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductGameserverAddons.Document = gql`
    query productGameserverAddons($gameserverId: ID!) {
        product_gameservers_scripts(gameserverId: $gameserverId) {
            id
            title
            standaloneBtn
            isDefault
        }
    }
` as DocumentNode;

export function useQueryProductGameserverAddons(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverAddonsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverAddonsQuery>({
        query: useQueryProductGameserverAddons.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductGameserverSetCustomAttribute.Document = gql`
    mutation productGameserverSetCustomAttribute(
        $id: ID!
        $key: String!
        $value: String!
    ) {
        productGameserverSetCustomAttribute(id: $id, key: $key, value: $value) {
            ...ProductGameserverPart
        }
    }
    ${_gql_ProductGameserverPart}
` as DocumentNode;

export function useMutationProductGameserverSetCustomAttribute() {
    return Urql.useMutation<
        ProductGameserverSetCustomAttributeMutation,
        ProductGameserverSetCustomAttributeMutationVariables
    >(useMutationProductGameserverSetCustomAttribute.Document);
}

useMutationProductGameserverChangeLabel.Document = gql`
    mutation productGameserverChangeLabel($id: ID!, $label: String!) {
        product_gameserver_change_label(id: $id, label: $label) {
            ...ProductGameserverPart
        }
    }
    ${_gql_ProductGameserverPart}
` as DocumentNode;

export function useMutationProductGameserverChangeLabel() {
    return Urql.useMutation<
        ProductGameserverChangeLabelMutation,
        ProductGameserverChangeLabelMutationVariables
    >(useMutationProductGameserverChangeLabel.Document);
}

useMutationProductGameserverBackupCreate.Document = gql`
    mutation productGameserverBackupCreate($gameserverId: ID!) {
        productGameserverBackupCreate(gameserverId: $gameserverId) {
            id
        }
    }
` as DocumentNode;

export function useMutationProductGameserverBackupCreate() {
    return Urql.useMutation<
        ProductGameserverBackupCreateMutation,
        ProductGameserverBackupCreateMutationVariables
    >(useMutationProductGameserverBackupCreate.Document);
}

useMutationProductGameserverBackupDelete.Document = gql`
    mutation productGameserverBackupDelete($backupId: ID!) {
        productGameserverBackupDelete(backupId: $backupId)
    }
` as DocumentNode;

export function useMutationProductGameserverBackupDelete() {
    return Urql.useMutation<
        ProductGameserverBackupDeleteMutation,
        ProductGameserverBackupDeleteMutationVariables
    >(useMutationProductGameserverBackupDelete.Document);
}

useMutationProductGameserverBackupRestore.Document = gql`
    mutation productGameserverBackupRestore($backupId: ID!) {
        productGameserverBackupRestore(backupId: $backupId)
    }
` as DocumentNode;

export function useMutationProductGameserverBackupRestore() {
    return Urql.useMutation<
        ProductGameserverBackupRestoreMutation,
        ProductGameserverBackupRestoreMutationVariables
    >(useMutationProductGameserverBackupRestore.Document);
}

useMutationProductGameserverDelete.Document = gql`
    mutation productGameserverDelete($id: ID!) {
        productGameserverDelete(id: $id)
    }
` as DocumentNode;

export function useMutationProductGameserverDelete() {
    return Urql.useMutation<
        ProductGameserverDeleteMutation,
        ProductGameserverDeleteMutationVariables
    >(useMutationProductGameserverDelete.Document);
}

useMutationProductGameserverInstall.Document = gql`
    mutation productGameserverInstall($id: ID!, $gameserverTemplateId: ID!) {
        productGameserverInstall(
            gameserverId: $id
            gameserverTemplateId: $gameserverTemplateId
        ) {
            ...ProductGameserverPart
        }
    }
    ${_gql_ProductGameserverPart}
` as DocumentNode;

export function useMutationProductGameserverInstall() {
    return Urql.useMutation<
        ProductGameserverInstallMutation,
        ProductGameserverInstallMutationVariables
    >(useMutationProductGameserverInstall.Document);
}

useQueryProductGameserverBackups.Document = gql`
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
` as DocumentNode;

export function useQueryProductGameserverBackups(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverBackupsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverBackupsQuery>({
        query: useQueryProductGameserverBackups.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductGameserverBackupDownload.Document = gql`
    mutation productGameserverBackupDownload($id: ID!) {
        productGameserverBackupDownload(id: $id)
    }
` as DocumentNode;

export function useMutationProductGameserverBackupDownload() {
    return Urql.useMutation<
        ProductGameserverBackupDownloadMutation,
        ProductGameserverBackupDownloadMutationVariables
    >(useMutationProductGameserverBackupDownload.Document);
}

useQueryProductGameservers.Document = gql`
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
` as DocumentNode;

export function useQueryProductGameservers(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserversQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserversQuery>({
        query: useQueryProductGameservers.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryMyProductGameservers.Document = gql`
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
` as DocumentNode;

export function useQueryMyProductGameservers(
    options: Omit<
        Urql.UseQueryArgs<MyProductGameserversQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyProductGameserversQuery>({
        query: useQueryMyProductGameservers.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryMyProductGameserverAccesses.Document = gql`
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
` as DocumentNode;

export function useQueryMyProductGameserverAccesses(
    options: Omit<
        Urql.UseQueryArgs<MyProductGameserverAccessesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyProductGameserverAccessesQuery>({
        query: useQueryMyProductGameserverAccesses.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryProductGameserverAccessesByGameserverId.Document = gql`
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
` as DocumentNode;

export function useQueryProductGameserverAccessesByGameserverId(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverAccessesByGameserverIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverAccessesByGameserverIdQuery>({
        query: useQueryProductGameserverAccessesByGameserverId.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductGameserverAccessInvite.Document = gql`
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
` as DocumentNode;

export function useMutationProductGameserverAccessInvite() {
    return Urql.useMutation<
        ProductGameserverAccessInviteMutation,
        ProductGameserverAccessInviteMutationVariables
    >(useMutationProductGameserverAccessInvite.Document);
}

useMutationProductGameserverAccessRevoke.Document = gql`
    mutation productGameserverAccessRevoke($id: ID!) {
        productGameserverAccessRevoke(id: $id)
    }
` as DocumentNode;

export function useMutationProductGameserverAccessRevoke() {
    return Urql.useMutation<
        ProductGameserverAccessRevokeMutation,
        ProductGameserverAccessRevokeMutationVariables
    >(useMutationProductGameserverAccessRevoke.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryProductGameserverMysqlByGameserver.Document = gql`
    query productGameserverMysqlByGameserver($gameserverId: ID!) {
        productGameserverMysqlByGameserver(gameserverId: $gameserverId) {
            id
            label
            create
            host
        }
    }
` as DocumentNode;

export function useQueryProductGameserverMysqlByGameserver(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverMysqlByGameserverQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverMysqlByGameserverQuery>({
        query: useQueryProductGameserverMysqlByGameserver.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductGameserverMysqlCreate.Document = gql`
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
` as DocumentNode;

export function useMutationProductGameserverMysqlCreate() {
    return Urql.useMutation<
        ProductGameserverMysqlCreateMutation,
        ProductGameserverMysqlCreateMutationVariables
    >(useMutationProductGameserverMysqlCreate.Document);
}

useMutationProductGameserverMysqlChangeLabel.Document = gql`
    mutation productGameserverMysqlChangeLabel($id: ID!, $label: String!) {
        productGameserverMysqlChangeLabel(id: $id, label: $label) {
            id
            label
            create
            host
        }
    }
` as DocumentNode;

export function useMutationProductGameserverMysqlChangeLabel() {
    return Urql.useMutation<
        ProductGameserverMysqlChangeLabelMutation,
        ProductGameserverMysqlChangeLabelMutationVariables
    >(useMutationProductGameserverMysqlChangeLabel.Document);
}

useMutationProductGameserverMysqlDelete.Document = gql`
    mutation productGameserverMysqlDelete($id: ID!) {
        productGameserverMysqlDelete(id: $id)
    }
` as DocumentNode;

export function useMutationProductGameserverMysqlDelete() {
    return Urql.useMutation<
        ProductGameserverMysqlDeleteMutation,
        ProductGameserverMysqlDeleteMutationVariables
    >(useMutationProductGameserverMysqlDelete.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryProductGameserverScripts.Document = gql`
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
` as DocumentNode;

export function useQueryProductGameserverScripts(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverScriptsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverScriptsQuery>({
        query: useQueryProductGameserverScripts.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductGameserverScriptEdit.Document = gql`
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
` as DocumentNode;

export function useMutationProductGameserverScriptEdit() {
    return Urql.useMutation<
        ProductGameserverScriptEditMutation,
        ProductGameserverScriptEditMutationVariables
    >(useMutationProductGameserverScriptEdit.Document);
}

useMutationProductGameserverScriptDelete.Document = gql`
    mutation productGameserverScriptDelete($id: ID!) {
        product_gameserver_script_delete(id: $id)
    }
` as DocumentNode;

export function useMutationProductGameserverScriptDelete() {
    return Urql.useMutation<
        ProductGameserverScriptDeleteMutation,
        ProductGameserverScriptDeleteMutationVariables
    >(useMutationProductGameserverScriptDelete.Document);
}

useQueryProductGameserverScriptById.Document = gql`
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
` as DocumentNode;

export function useQueryProductGameserverScriptById(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverScriptByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverScriptByIdQuery>({
        query: useQueryProductGameserverScriptById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

/*,
 * Fragments from undefined,
 */
const _gql_ProductGameserverTemplatePart = gql`
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

/*,
 * Operations from undefined,
 */

useQueryProductGameserverTemplate.Document = gql`
    query productGameserverTemplate($id: ID!) {
        product_gameserver_template(id: $id) {
            ...ProductGameserverTemplatePart
        }
    }
    ${_gql_ProductGameserverTemplatePart}
` as DocumentNode;

export function useQueryProductGameserverTemplate(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverTemplateQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverTemplateQuery>({
        query: useQueryProductGameserverTemplate.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductGameserverTemplates.Document = gql`
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
` as DocumentNode;

export function useQueryProductGameserverTemplates(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverTemplatesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverTemplatesQuery>({
        query: useQueryProductGameserverTemplates.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductGameserverTemplateEdit.Document = gql`
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
    ${_gql_ProductGameserverTemplatePart}
` as DocumentNode;

export function useMutationProductGameserverTemplateEdit() {
    return Urql.useMutation<
        ProductGameserverTemplateEditMutation,
        ProductGameserverTemplateEditMutationVariables
    >(useMutationProductGameserverTemplateEdit.Document);
}

useMutationProductGameserverTemplateDelete.Document = gql`
    mutation productGameserverTemplateDelete($id: ID!) {
        product_gameserver_template_delete(id: $id)
    }
` as DocumentNode;

export function useMutationProductGameserverTemplateDelete() {
    return Urql.useMutation<
        ProductGameserverTemplateDeleteMutation,
        ProductGameserverTemplateDeleteMutationVariables
    >(useMutationProductGameserverTemplateDelete.Document);
}

useMutationProductGameserverTemplateSetDefaultScript.Document = gql`
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
` as DocumentNode;

export function useMutationProductGameserverTemplateSetDefaultScript() {
    return Urql.useMutation<
        ProductGameserverTemplateSetDefaultScriptMutation,
        ProductGameserverTemplateSetDefaultScriptMutationVariables
    >(useMutationProductGameserverTemplateSetDefaultScript.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryHostNodeById.Document = gql`
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
` as DocumentNode;

export function useQueryHostNodeById(
    options: Omit<Urql.UseQueryArgs<HostNodeByIdQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<HostNodeByIdQuery>({
        query: useQueryHostNodeById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryHostNodes.Document = gql`
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
` as DocumentNode;

export function useQueryHostNodes(
    options: Omit<Urql.UseQueryArgs<HostNodesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<HostNodesQuery>({
        query: useQueryHostNodes.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryHostNodeTestFindNode.Document = gql`
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
` as DocumentNode;

export function useQueryHostNodeTestFindNode(
    options: Omit<
        Urql.UseQueryArgs<HostNodeTestFindNodeQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<HostNodeTestFindNodeQuery>({
        query: useQueryHostNodeTestFindNode.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationEditCreateHostNode.Document = gql`
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
` as DocumentNode;

export function useMutationEditCreateHostNode() {
    return Urql.useMutation<
        EditCreateHostNodeMutation,
        EditCreateHostNodeMutationVariables
    >(useMutationEditCreateHostNode.Document);
}

useMutationDeleteHostNodeById.Document = gql`
    mutation deleteHostNodeById($id: ID!) {
        host_node_delete(id: $id)
    }
` as DocumentNode;

export function useMutationDeleteHostNodeById() {
    return Urql.useMutation<
        DeleteHostNodeByIdMutation,
        DeleteHostNodeByIdMutationVariables
    >(useMutationDeleteHostNodeById.Document);
}

useMutationHostNodeUpdateDaemon.Document = gql`
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
` as DocumentNode;

export function useMutationHostNodeUpdateDaemon() {
    return Urql.useMutation<
        HostNodeUpdateDaemonMutation,
        HostNodeUpdateDaemonMutationVariables
    >(useMutationHostNodeUpdateDaemon.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryHostNodeTasksMy.Document = gql`
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
` as DocumentNode;

export function useQueryHostNodeTasksMy(
    options: Omit<
        Urql.UseQueryArgs<HostNodeTasksMyQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<HostNodeTasksMyQuery>({
        query: useQueryHostNodeTasksMy.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryHostNodeTaskById.Document = gql`
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
` as DocumentNode;

export function useQueryHostNodeTaskById(
    options: Omit<
        Urql.UseQueryArgs<HostNodeTaskByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<HostNodeTaskByIdQuery>({
        query: useQueryHostNodeTaskById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryHostNodeTaskIsRunning.Document = gql`
    query hostNodeTaskIsRunning($identifier: ID!) {
        host_node_task_running(identifier: $identifier)
    }
` as DocumentNode;

export function useQueryHostNodeTaskIsRunning(
    options: Omit<
        Urql.UseQueryArgs<HostNodeTaskIsRunningQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<HostNodeTaskIsRunningQuery>({
        query: useQueryHostNodeTaskIsRunning.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

/*,
 * Fragments from undefined,
 */
const _gql_PdfTemplatePart = gql`
    fragment PdfTemplatePart on PdfTemplate {
        id
        templateContent
        template
        create
        update
        templateFile
    }
`;

/*,
 * Operations from undefined,
 */

useQueryGetPdfTemplate.Document = gql`
    query getPdfTemplate($id: ID!) {
        pdf_template(id: $id) {
            ...PdfTemplatePart
        }
    }
    ${_gql_PdfTemplatePart}
` as DocumentNode;

export function useQueryGetPdfTemplate(
    options: Omit<Urql.UseQueryArgs<GetPdfTemplateQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<GetPdfTemplateQuery>({
        query: useQueryGetPdfTemplate.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryPdfTemplates.Document = gql`
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
    ${_gql_PdfTemplatePart}
` as DocumentNode;

export function useQueryPdfTemplates(
    options: Omit<Urql.UseQueryArgs<PdfTemplatesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<PdfTemplatesQuery>({
        query: useQueryPdfTemplates.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationDeletePdfTemplate.Document = gql`
    mutation deletePdfTemplate($id: ID!) {
        pdf_template_delete(id: $id)
    }
` as DocumentNode;

export function useMutationDeletePdfTemplate() {
    return Urql.useMutation<
        DeletePdfTemplateMutation,
        DeletePdfTemplateMutationVariables
    >(useMutationDeletePdfTemplate.Document);
}

useMutationEditPdfTemplate.Document = gql`
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
    ${_gql_PdfTemplatePart}
` as DocumentNode;

export function useMutationEditPdfTemplate() {
    return Urql.useMutation<
        EditPdfTemplateMutation,
        EditPdfTemplateMutationVariables
    >(useMutationEditPdfTemplate.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_ProductPart = gql`
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

/*,
 * Operations from undefined,
 */

useMutationProductSetAutorenewInterval.Document = gql`
    mutation productSetAutorenewInterval($id: ID!, $intervalId: ID) {
        productSetAutorenewInterval(id: $id, intervalId: $intervalId) {
            ...ProductPart
        }
    }
    ${_gql_ProductPart}
` as DocumentNode;

export function useMutationProductSetAutorenewInterval() {
    return Urql.useMutation<
        ProductSetAutorenewIntervalMutation,
        ProductSetAutorenewIntervalMutationVariables
    >(useMutationProductSetAutorenewInterval.Document);
}

useQueryProducts.Document = gql`
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
    ${_gql_ProductPart}
` as DocumentNode;

export function useQueryProducts(
    options: Omit<Urql.UseQueryArgs<ProductsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<ProductsQuery>({
        query: useQueryProducts.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductById.Document = gql`
    query ProductById($id: ID!) {
        productById(id: $id) {
            ...ProductPart
        }
    }
    ${_gql_ProductPart}
` as DocumentNode;

export function useQueryProductById(
    options: Omit<Urql.UseQueryArgs<ProductByIdQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<ProductByIdQuery>({
        query: useQueryProductById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductById2.Document = gql`
    query ProductById2($id: ID!) {
        productById(id: $id) {
            ...ProductPart
            availablePeriods {
                id
                days
            }
        }
    }
    ${_gql_ProductPart}
` as DocumentNode;

export function useQueryProductById2(
    options: Omit<Urql.UseQueryArgs<ProductById2QueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<ProductById2Query>({
        query: useQueryProductById2.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductEdit.Document = gql`
    mutation productEdit($data: ProductEditInput!) {
        productEdit(data: $data) {
            ...ProductPart
        }
    }
    ${_gql_ProductPart}
` as DocumentNode;

export function useMutationProductEdit() {
    return Urql.useMutation<ProductEditMutation, ProductEditMutationVariables>(
        useMutationProductEdit.Document
    );
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryProductGameserverFsReadIndex.Document = gql`
    query productGameserverFsReadIndex(
        $gameserverId: ID!
        $reloadIndex: Boolean
    ) {
        productGameserverFsReadIndex(
            gameserverId: $gameserverId
            reloadIndex: $reloadIndex
        )
    }
` as DocumentNode;

export function useQueryProductGameserverFsReadIndex(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverFsReadIndexQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverFsReadIndexQuery>({
        query: useQueryProductGameserverFsReadIndex.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductGameserverFsRead.Document = gql`
    query productGameserverFsRead($gameserverId: ID!, $file: String!) {
        productGameserverFsRead(gameserverId: $gameserverId, file: $file)
    }
` as DocumentNode;

export function useQueryProductGameserverFsRead(
    options: Omit<
        Urql.UseQueryArgs<ProductGameserverFsReadQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductGameserverFsReadQuery>({
        query: useQueryProductGameserverFsRead.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductGameserverFsWrite.Document = gql`
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
` as DocumentNode;

export function useMutationProductGameserverFsWrite() {
    return Urql.useMutation<
        ProductGameserverFsWriteMutation,
        ProductGameserverFsWriteMutationVariables
    >(useMutationProductGameserverFsWrite.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useMutationCreateProductGameserverScript.Document = gql`
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
` as DocumentNode;

export function useMutationCreateProductGameserverScript() {
    return Urql.useMutation<
        CreateProductGameserverScriptMutation,
        CreateProductGameserverScriptMutationVariables
    >(useMutationCreateProductGameserverScript.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_RolePart = gql`
    fragment RolePart on Role {
        id
        name
    }
`;

/*,
 * Operations from undefined,
 */

useQueryRoles.Document = gql`
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
    ${_gql_RolePart}
` as DocumentNode;

export function useQueryRoles(
    options: Omit<Urql.UseQueryArgs<RolesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<RolesQuery>({
        query: useQueryRoles.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryRoleById.Document = gql`
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
    ${_gql_RolePart}
` as DocumentNode;

export function useQueryRoleById(
    options: Omit<Urql.UseQueryArgs<RoleByIdQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<RoleByIdQuery>({
        query: useQueryRoleById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationEditRoleRole.Document = gql`
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
    ${_gql_RolePart}
` as DocumentNode;

export function useMutationEditRoleRole() {
    return Urql.useMutation<
        EditRoleRoleMutation,
        EditRoleRoleMutationVariables
    >(useMutationEditRoleRole.Document);
}

useMutationRoleUnAssignAcl.Document = gql`
    mutation roleUnAssignAcl($id: ID!, $aclsId: [ID!]!) {
        roleUnAssignAcl(id: $id, aclsId: $aclsId) {
            ...RolePart
            acls {
                id
                acl
            }
        }
    }
    ${_gql_RolePart}
` as DocumentNode;

export function useMutationRoleUnAssignAcl() {
    return Urql.useMutation<
        RoleUnAssignAclMutation,
        RoleUnAssignAclMutationVariables
    >(useMutationRoleUnAssignAcl.Document);
}

useMutationRoleAssignAcl.Document = gql`
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
    ${_gql_RolePart}
` as DocumentNode;

export function useMutationRoleAssignAcl() {
    return Urql.useMutation<
        RoleAssignAclMutation,
        RoleAssignAclMutationVariables
    >(useMutationRoleAssignAcl.Document);
}

useMutationRoleAddUser.Document = gql`
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
    ${_gql_RolePart}
` as DocumentNode;

export function useMutationRoleAddUser() {
    return Urql.useMutation<RoleAddUserMutation, RoleAddUserMutationVariables>(
        useMutationRoleAddUser.Document
    );
}

useMutationRoleRemoveUser.Document = gql`
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
    ${_gql_RolePart}
` as DocumentNode;

export function useMutationRoleRemoveUser() {
    return Urql.useMutation<
        RoleRemoveUserMutation,
        RoleRemoveUserMutationVariables
    >(useMutationRoleRemoveUser.Document);
}

useMutationDeleteRoleRole.Document = gql`
    mutation deleteRoleRole($id: ID!) {
        role_role_delete(id: $id)
    }
` as DocumentNode;

export function useMutationDeleteRoleRole() {
    return Urql.useMutation<
        DeleteRoleRoleMutation,
        DeleteRoleRoleMutationVariables
    >(useMutationDeleteRoleRole.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryProductSimples.Document = gql`
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
` as DocumentNode;

export function useQueryProductSimples(
    options: Omit<Urql.UseQueryArgs<ProductSimplesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<ProductSimplesQuery>({
        query: useQueryProductSimples.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductSimpleById.Document = gql`
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
` as DocumentNode;

export function useQueryProductSimpleById(
    options: Omit<
        Urql.UseQueryArgs<ProductSimpleByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductSimpleByIdQuery>({
        query: useQueryProductSimpleById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryMyProductSimples.Document = gql`
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
` as DocumentNode;

export function useQueryMyProductSimples(
    options: Omit<
        Urql.UseQueryArgs<MyProductSimplesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyProductSimplesQuery>({
        query: useQueryMyProductSimples.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductSimpleEditLabel.Document = gql`
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
` as DocumentNode;

export function useMutationProductSimpleEditLabel() {
    return Urql.useMutation<
        ProductSimpleEditLabelMutation,
        ProductSimpleEditLabelMutationVariables
    >(useMutationProductSimpleEditLabel.Document);
}

useMutationProductSimpleDelete.Document = gql`
    mutation productSimpleDelete($id: ID!) {
        productSimpleDelete(id: $id)
    }
` as DocumentNode;

export function useMutationProductSimpleDelete() {
    return Urql.useMutation<
        ProductSimpleDeleteMutation,
        ProductSimpleDeleteMutationVariables
    >(useMutationProductSimpleDelete.Document);
}

useMutationProductSimpleSetState.Document = gql`
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
` as DocumentNode;

export function useMutationProductSimpleSetState() {
    return Urql.useMutation<
        ProductSimpleSetStateMutation,
        ProductSimpleSetStateMutationVariables
    >(useMutationProductSimpleSetState.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_supportQuickResponseFragment = gql`
    fragment supportQuickResponseFragment on SupportQuickResponse {
        id
        title
        content
        update
        create
    }
`;

/*,
 * Operations from undefined,
 */

useMutationSupportQuickResponseDelete.Document = gql`
    mutation supportQuickResponseDelete($id: ID!) {
        supportQuickResponseDelete(id: $id)
    }
` as DocumentNode;

export function useMutationSupportQuickResponseDelete() {
    return Urql.useMutation<
        SupportQuickResponseDeleteMutation,
        SupportQuickResponseDeleteMutationVariables
    >(useMutationSupportQuickResponseDelete.Document);
}

useMutationSupportQuickResponseEdit.Document = gql`
    mutation supportQuickResponseEdit($dto: SupportQuickResponseEditDto!) {
        supportQuickResponseEdit(dto: $dto) {
            ...supportQuickResponseFragment
        }
    }
    ${_gql_supportQuickResponseFragment}
` as DocumentNode;

export function useMutationSupportQuickResponseEdit() {
    return Urql.useMutation<
        SupportQuickResponseEditMutation,
        SupportQuickResponseEditMutationVariables
    >(useMutationSupportQuickResponseEdit.Document);
}

useMutationSupportQuickResponseCreate.Document = gql`
    mutation supportQuickResponseCreate($dto: SupportQuickResponseCreateDto!) {
        supportQuickResponseCreate(dto: $dto) {
            ...supportQuickResponseFragment
        }
    }
    ${_gql_supportQuickResponseFragment}
` as DocumentNode;

export function useMutationSupportQuickResponseCreate() {
    return Urql.useMutation<
        SupportQuickResponseCreateMutation,
        SupportQuickResponseCreateMutationVariables
    >(useMutationSupportQuickResponseCreate.Document);
}

useQuerySupportQuickResponses.Document = gql`
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
    ${_gql_supportQuickResponseFragment}
` as DocumentNode;

export function useQuerySupportQuickResponses(
    options: Omit<
        Urql.UseQueryArgs<SupportQuickResponsesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<SupportQuickResponsesQuery>({
        query: useQuerySupportQuickResponses.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQuerySupportQuickResponseById.Document = gql`
    query supportQuickResponseById($id: ID!) {
        supportQuickResponseById(id: $id) {
            ...supportQuickResponseFragment
        }
    }
    ${_gql_supportQuickResponseFragment}
` as DocumentNode;

export function useQuerySupportQuickResponseById(
    options: Omit<
        Urql.UseQueryArgs<SupportQuickResponseByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<SupportQuickResponseByIdQuery>({
        query: useQuerySupportQuickResponseById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

/*,
 * Fragments from undefined,
 */
const _gql_SupportTicketPart = gql`
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

/*,
 * Operations from undefined,
 */

useMutationSupportTicketDeleteMessage.Document = gql`
    mutation supportTicketDeleteMessage($id: ID!) {
        supportTicketDeleteMessage(id: $id) {
            ...SupportTicketPart
        }
    }
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useMutationSupportTicketDeleteMessage() {
    return Urql.useMutation<
        SupportTicketDeleteMessageMutation,
        SupportTicketDeleteMessageMutationVariables
    >(useMutationSupportTicketDeleteMessage.Document);
}

useQueryUserMyTickets.Document = gql`
    query UserMyTickets {
        user_me {
            id
            tickets {
                ...SupportTicketPart
            }
        }
    }
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useQueryUserMyTickets(
    options: Omit<Urql.UseQueryArgs<UserMyTicketsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<UserMyTicketsQuery>({
        query: useQueryUserMyTickets.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQuerySupportTicketById.Document = gql`
    query supportTicketById($id: ID!) {
        supportTicketById(id: $id) {
            ...SupportTicketPart
        }
    }
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useQuerySupportTicketById(
    options: Omit<
        Urql.UseQueryArgs<SupportTicketByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<SupportTicketByIdQuery>({
        query: useQuerySupportTicketById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationSupportTicketDelete.Document = gql`
    mutation supportTicketDelete($id: ID!) {
        supportTicketDelete(id: $id)
    }
` as DocumentNode;

export function useMutationSupportTicketDelete() {
    return Urql.useMutation<
        SupportTicketDeleteMutation,
        SupportTicketDeleteMutationVariables
    >(useMutationSupportTicketDelete.Document);
}

useQuerySupportTickets.Document = gql`
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
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useQuerySupportTickets(
    options: Omit<Urql.UseQueryArgs<SupportTicketsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<SupportTicketsQuery>({
        query: useQuerySupportTickets.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationSupportTicketResetUnreadCounter.Document = gql`
    mutation supportTicketResetUnreadCounter($id: ID!) {
        supportTicketResetUnreadCounter(id: $id) {
            ...SupportTicketPart
        }
    }
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useMutationSupportTicketResetUnreadCounter() {
    return Urql.useMutation<
        SupportTicketResetUnreadCounterMutation,
        SupportTicketResetUnreadCounterMutationVariables
    >(useMutationSupportTicketResetUnreadCounter.Document);
}

useMutationAddMessageToSupportTicket.Document = gql`
    mutation addMessageToSupportTicket($message: String!, $id: ID!) {
        support_ticket_add_message(data: { message: $message, id: $id }) {
            ...SupportTicketPart
        }
    }
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useMutationAddMessageToSupportTicket() {
    return Urql.useMutation<
        AddMessageToSupportTicketMutation,
        AddMessageToSupportTicketMutationVariables
    >(useMutationAddMessageToSupportTicket.Document);
}

useMutationSupportTicketSetStatus.Document = gql`
    mutation supportTicketSetStatus($id: ID!, $status: String!) {
        supportTicketSetStatus(id: $id, status: $status) {
            ...SupportTicketPart
        }
    }
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useMutationSupportTicketSetStatus() {
    return Urql.useMutation<
        SupportTicketSetStatusMutation,
        SupportTicketSetStatusMutationVariables
    >(useMutationSupportTicketSetStatus.Document);
}

useMutationSupportTicketClose.Document = gql`
    mutation supportTicketClose($id: ID!) {
        supportTicketClose(id: $id) {
            ...SupportTicketPart
        }
    }
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useMutationSupportTicketClose() {
    return Urql.useMutation<
        SupportTicketCloseMutation,
        SupportTicketCloseMutationVariables
    >(useMutationSupportTicketClose.Document);
}

useMutationSupportTicketReopen.Document = gql`
    mutation supportTicketReopen($id: ID!) {
        supportTicketReopen(id: $id) {
            ...SupportTicketPart
        }
    }
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useMutationSupportTicketReopen() {
    return Urql.useMutation<
        SupportTicketReopenMutation,
        SupportTicketReopenMutationVariables
    >(useMutationSupportTicketReopen.Document);
}

useMutationSupportTicketAssignTo.Document = gql`
    mutation supportTicketAssignTo($id: ID!, $userId: ID!) {
        supportTicketAssignTo(id: $id, userId: $userId) {
            ...SupportTicketPart
        }
    }
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useMutationSupportTicketAssignTo() {
    return Urql.useMutation<
        SupportTicketAssignToMutation,
        SupportTicketAssignToMutationVariables
    >(useMutationSupportTicketAssignTo.Document);
}

useMutationSupportTicketAddFile.Document = gql`
    mutation supportTicketAddFile($id: ID!, $fileId: ID!) {
        supportTicketAddFile(id: $id, fileId: $fileId) {
            ...SupportTicketPart
        }
    }
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useMutationSupportTicketAddFile() {
    return Urql.useMutation<
        SupportTicketAddFileMutation,
        SupportTicketAddFileMutationVariables
    >(useMutationSupportTicketAddFile.Document);
}

useMutationEditSupportTicket.Document = gql`
    mutation editSupportTicket($id: ID!, $status: String, $priority: Int) {
        support_ticket_edit(
            data: { priority: $priority, status: $status }
            id: $id
        ) {
            ...SupportTicketPart
        }
    }
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useMutationEditSupportTicket() {
    return Urql.useMutation<
        EditSupportTicketMutation,
        EditSupportTicketMutationVariables
    >(useMutationEditSupportTicket.Document);
}

useMutationSupportTicketNew.Document = gql`
    mutation supportTicketNew($data: SupportTicketNewInput!) {
        support_ticket_new(data: $data) {
            ...SupportTicketPart
        }
    }
    ${_gql_SupportTicketPart}
` as DocumentNode;

export function useMutationSupportTicketNew() {
    return Urql.useMutation<
        SupportTicketNewMutation,
        SupportTicketNewMutationVariables
    >(useMutationSupportTicketNew.Document);
}

useQuerySupportTicketPriorities.Document = gql`
    query supportTicketPriorities {
        supportTicketPriorities {
            id
            label
            priority
        }
    }
` as DocumentNode;

export function useQuerySupportTicketPriorities(
    options: Omit<
        Urql.UseQueryArgs<SupportTicketPrioritiesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<SupportTicketPrioritiesQuery>({
        query: useQuerySupportTicketPriorities.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQuerySupportTicketRevisers.Document = gql`
    query supportTicketRevisers {
        supportTicketRevisers {
            id
            name
        }
    }
` as DocumentNode;

export function useQuerySupportTicketRevisers(
    options: Omit<
        Urql.UseQueryArgs<SupportTicketRevisersQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<SupportTicketRevisersQuery>({
        query: useQuerySupportTicketRevisers.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

/*,
 * Fragments from undefined,
 */
const _gql_ProductTeamspeakPart = gql`
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

/*,
 * Operations from undefined,
 */

useMutationProductTeamspeakChangeLabel.Document = gql`
    mutation productTeamspeakChangeLabel($id: ID!, $label: String!) {
        productTeamspeakChangeLabel(id: $id, label: $label) {
            ...ProductTeamspeakPart
        }
    }
    ${_gql_ProductTeamspeakPart}
` as DocumentNode;

export function useMutationProductTeamspeakChangeLabel() {
    return Urql.useMutation<
        ProductTeamspeakChangeLabelMutation,
        ProductTeamspeakChangeLabelMutationVariables
    >(useMutationProductTeamspeakChangeLabel.Document);
}

useQueryProductTeamspeaks.Document = gql`
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
` as DocumentNode;

export function useQueryProductTeamspeaks(
    options: Omit<
        Urql.UseQueryArgs<ProductTeamspeaksQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTeamspeaksQuery>({
        query: useQueryProductTeamspeaks.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryMyProductTeamspeaks.Document = gql`
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
` as DocumentNode;

export function useQueryMyProductTeamspeaks(
    options: Omit<
        Urql.UseQueryArgs<MyProductTeamspeaksQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyProductTeamspeaksQuery>({
        query: useQueryMyProductTeamspeaks.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductTeamspeakById.Document = gql`
    query productTeamspeakById($id: ID!) {
        productTeamspeakById(id: $id) {
            ...ProductTeamspeakPart
        }
    }
    ${_gql_ProductTeamspeakPart}
` as DocumentNode;

export function useQueryProductTeamspeakById(
    options: Omit<
        Urql.UseQueryArgs<ProductTeamspeakByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTeamspeakByIdQuery>({
        query: useQueryProductTeamspeakById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductTeamspeakTokens.Document = gql`
    query productTeamspeakTokens($teamspeakId: ID!) {
        productTeamspeakTokens(teamspeakId: $teamspeakId) {
            group
            token
        }
    }
` as DocumentNode;

export function useQueryProductTeamspeakTokens(
    options: Omit<
        Urql.UseQueryArgs<ProductTeamspeakTokensQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTeamspeakTokensQuery>({
        query: useQueryProductTeamspeakTokens.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductTeamspeakRunning.Document = gql`
    query productTeamspeakRunning($teamspeakId: ID!) {
        productTeamspeakRunning(teamspeakId: $teamspeakId)
    }
` as DocumentNode;

export function useQueryProductTeamspeakRunning(
    options: Omit<
        Urql.UseQueryArgs<ProductTeamspeakRunningQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTeamspeakRunningQuery>({
        query: useQueryProductTeamspeakRunning.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductTeamspeakTokenCreate.Document = gql`
    mutation productTeamspeakTokenCreate($teamspeakId: ID!, $group: String!) {
        productTeamspeakTokenCreate(teamspeakId: $teamspeakId, group: $group)
    }
` as DocumentNode;

export function useMutationProductTeamspeakTokenCreate() {
    return Urql.useMutation<
        ProductTeamspeakTokenCreateMutation,
        ProductTeamspeakTokenCreateMutationVariables
    >(useMutationProductTeamspeakTokenCreate.Document);
}

useMutationProductTeamspeakTokenDelete.Document = gql`
    mutation productTeamspeakTokenDelete($teamspeakId: ID!, $token: String!) {
        productTeamspeakTokenDelete(teamspeakId: $teamspeakId, token: $token)
    }
` as DocumentNode;

export function useMutationProductTeamspeakTokenDelete() {
    return Urql.useMutation<
        ProductTeamspeakTokenDeleteMutation,
        ProductTeamspeakTokenDeleteMutationVariables
    >(useMutationProductTeamspeakTokenDelete.Document);
}

useQueryProductTeamspeakExist.Document = gql`
    query productTeamspeakExist($teamspeakId: ID!) {
        productTeamspeakExist(teamspeakId: $teamspeakId)
    }
` as DocumentNode;

export function useQueryProductTeamspeakExist(
    options: Omit<
        Urql.UseQueryArgs<ProductTeamspeakExistQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTeamspeakExistQuery>({
        query: useQueryProductTeamspeakExist.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductTeamspeakStart.Document = gql`
    mutation productTeamspeakStart($teamspeakId: ID!) {
        productTeamspeakStart(teamspeakId: $teamspeakId) {
            ...ProductTeamspeakPart
        }
    }
    ${_gql_ProductTeamspeakPart}
` as DocumentNode;

export function useMutationProductTeamspeakStart() {
    return Urql.useMutation<
        ProductTeamspeakStartMutation,
        ProductTeamspeakStartMutationVariables
    >(useMutationProductTeamspeakStart.Document);
}

useMutationProductTeamspeakRemove.Document = gql`
    mutation productTeamspeakRemove($id: ID!) {
        productTeamspeakRemove(id: $id)
    }
` as DocumentNode;

export function useMutationProductTeamspeakRemove() {
    return Urql.useMutation<
        ProductTeamspeakRemoveMutation,
        ProductTeamspeakRemoveMutationVariables
    >(useMutationProductTeamspeakRemove.Document);
}

useMutationProductTeamspeakStop.Document = gql`
    mutation productTeamspeakStop($teamspeakId: ID!) {
        productTeamspeakStop(teamspeakId: $teamspeakId) {
            ...ProductTeamspeakPart
        }
    }
    ${_gql_ProductTeamspeakPart}
` as DocumentNode;

export function useMutationProductTeamspeakStop() {
    return Urql.useMutation<
        ProductTeamspeakStopMutation,
        ProductTeamspeakStopMutationVariables
    >(useMutationProductTeamspeakStop.Document);
}

useMutationProductTeamspeakInstall.Document = gql`
    mutation productTeamspeakInstall($teamspeakId: ID!) {
        productTeamspeakInstall(teamspeakId: $teamspeakId) {
            ...ProductTeamspeakPart
        }
    }
    ${_gql_ProductTeamspeakPart}
` as DocumentNode;

export function useMutationProductTeamspeakInstall() {
    return Urql.useMutation<
        ProductTeamspeakInstallMutation,
        ProductTeamspeakInstallMutationVariables
    >(useMutationProductTeamspeakInstall.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_ProductTemplateDomainPart = gql`
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

/*,
 * Operations from undefined,
 */

useQueryProductTemplateDomainById.Document = gql`
    query ProductTemplateDomainById($id: ID!) {
        productTemplateDomainById(id: $id) {
            ...ProductTemplateDomainPart
        }
    }
    ${_gql_ProductTemplateDomainPart}
` as DocumentNode;

export function useQueryProductTemplateDomainById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateDomainByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateDomainByIdQuery>({
        query: useQueryProductTemplateDomainById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductTemplateDomains.Document = gql`
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
` as DocumentNode;

export function useQueryProductTemplateDomains(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateDomainsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateDomainsQuery>({
        query: useQueryProductTemplateDomains.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationCreateProductTemplateDomain.Document = gql`
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
` as DocumentNode;

export function useMutationCreateProductTemplateDomain() {
    return Urql.useMutation<
        CreateProductTemplateDomainMutation,
        CreateProductTemplateDomainMutationVariables
    >(useMutationCreateProductTemplateDomain.Document);
}

useMutationEditProductTemplateDomain.Document = gql`
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
    ${_gql_ProductTemplateDomainPart}
` as DocumentNode;

export function useMutationEditProductTemplateDomain() {
    return Urql.useMutation<
        EditProductTemplateDomainMutation,
        EditProductTemplateDomainMutationVariables
    >(useMutationEditProductTemplateDomain.Document);
}

useMutationDeleteProductTemplateDomain.Document = gql`
    mutation deleteProductTemplateDomain($id: ID!) {
        productTemplateDomainDelete(id: $id)
    }
` as DocumentNode;

export function useMutationDeleteProductTemplateDomain() {
    return Urql.useMutation<
        DeleteProductTemplateDomainMutation,
        DeleteProductTemplateDomainMutationVariables
    >(useMutationDeleteProductTemplateDomain.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryProductTemplateExtendPeriods.Document = gql`
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
` as DocumentNode;

export function useQueryProductTemplateExtendPeriods(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateExtendPeriodsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateExtendPeriodsQuery>({
        query: useQueryProductTemplateExtendPeriods.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductTemplateExtendPeriodById.Document = gql`
    query productTemplateExtendPeriodById($id: ID!) {
        productTemplateExtendPeriodById(id: $id) {
            id
            expression
            discount
            discountFactor
            globalGroup
        }
    }
` as DocumentNode;

export function useQueryProductTemplateExtendPeriodById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateExtendPeriodByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateExtendPeriodByIdQuery>({
        query: useQueryProductTemplateExtendPeriodById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationCreateProductTemplateExtendPeriod.Document = gql`
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
` as DocumentNode;

export function useMutationCreateProductTemplateExtendPeriod() {
    return Urql.useMutation<
        CreateProductTemplateExtendPeriodMutation,
        CreateProductTemplateExtendPeriodMutationVariables
    >(useMutationCreateProductTemplateExtendPeriod.Document);
}

useMutationEditProductTemplateExtendPeriod.Document = gql`
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
` as DocumentNode;

export function useMutationEditProductTemplateExtendPeriod() {
    return Urql.useMutation<
        EditProductTemplateExtendPeriodMutation,
        EditProductTemplateExtendPeriodMutationVariables
    >(useMutationEditProductTemplateExtendPeriod.Document);
}

useMutationDeleteProductTemplateExtendPeriod.Document = gql`
    mutation deleteProductTemplateExtendPeriod($id: ID!) {
        productTemplateExtendPeriodDelete(id: $id)
    }
` as DocumentNode;

export function useMutationDeleteProductTemplateExtendPeriod() {
    return Urql.useMutation<
        DeleteProductTemplateExtendPeriodMutation,
        DeleteProductTemplateExtendPeriodMutationVariables
    >(useMutationDeleteProductTemplateExtendPeriod.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_ProductTemplateGameserverPart = gql`
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

/*,
 * Operations from undefined,
 */

useQueryProductTemplateGameserverById.Document = gql`
    query productTemplateGameserverById($id: ID!) {
        productTemplateGameserverById(id: $id) {
            ...ProductTemplateGameserverPart
        }
    }
    ${_gql_ProductTemplateGameserverPart}
` as DocumentNode;

export function useQueryProductTemplateGameserverById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateGameserverByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateGameserverByIdQuery>({
        query: useQueryProductTemplateGameserverById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductTemplateGameservers.Document = gql`
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
` as DocumentNode;

export function useQueryProductTemplateGameservers(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateGameserversQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateGameserversQuery>({
        query: useQueryProductTemplateGameservers.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationCreateProductTemplateGameserver.Document = gql`
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
` as DocumentNode;

export function useMutationCreateProductTemplateGameserver() {
    return Urql.useMutation<
        CreateProductTemplateGameserverMutation,
        CreateProductTemplateGameserverMutationVariables
    >(useMutationCreateProductTemplateGameserver.Document);
}

useMutationEditProductTemplateGameserver.Document = gql`
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
    ${_gql_ProductTemplateGameserverPart}
` as DocumentNode;

export function useMutationEditProductTemplateGameserver() {
    return Urql.useMutation<
        EditProductTemplateGameserverMutation,
        EditProductTemplateGameserverMutationVariables
    >(useMutationEditProductTemplateGameserver.Document);
}

useMutationDeleteProductTemplateGameserver.Document = gql`
    mutation deleteProductTemplateGameserver($id: ID!) {
        productTemplateGameserverDelete(id: $id)
    }
` as DocumentNode;

export function useMutationDeleteProductTemplateGameserver() {
    return Urql.useMutation<
        DeleteProductTemplateGameserverMutation,
        DeleteProductTemplateGameserverMutationVariables
    >(useMutationDeleteProductTemplateGameserver.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryProductTemplateOptionById.Document = gql`
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
` as DocumentNode;

export function useQueryProductTemplateOptionById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateOptionByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateOptionByIdQuery>({
        query: useQueryProductTemplateOptionById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductTemplateOptions.Document = gql`
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
` as DocumentNode;

export function useQueryProductTemplateOptions(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateOptionsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateOptionsQuery>({
        query: useQueryProductTemplateOptions.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationCreateProductTemplateOption.Document = gql`
    mutation createProductTemplateOption($title: String!, $display: String!) {
        productTemplateOptionCreate(title: $title, display: $display) {
            id
        }
    }
` as DocumentNode;

export function useMutationCreateProductTemplateOption() {
    return Urql.useMutation<
        CreateProductTemplateOptionMutation,
        CreateProductTemplateOptionMutationVariables
    >(useMutationCreateProductTemplateOption.Document);
}

useMutationEditProductTemplateOption.Document = gql`
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
` as DocumentNode;

export function useMutationEditProductTemplateOption() {
    return Urql.useMutation<
        EditProductTemplateOptionMutation,
        EditProductTemplateOptionMutationVariables
    >(useMutationEditProductTemplateOption.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryProductTemplateOptionVariantById.Document = gql`
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
` as DocumentNode;

export function useQueryProductTemplateOptionVariantById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateOptionVariantByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateOptionVariantByIdQuery>({
        query: useQueryProductTemplateOptionVariantById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductTemplateOptionVariants.Document = gql`
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
` as DocumentNode;

export function useQueryProductTemplateOptionVariants(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateOptionVariantsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateOptionVariantsQuery>({
        query: useQueryProductTemplateOptionVariants.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationCreateProductTemplateOptionVariant.Document = gql`
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
` as DocumentNode;

export function useMutationCreateProductTemplateOptionVariant() {
    return Urql.useMutation<
        CreateProductTemplateOptionVariantMutation,
        CreateProductTemplateOptionVariantMutationVariables
    >(useMutationCreateProductTemplateOptionVariant.Document);
}

useMutationEditProductTemplateOptionVariant.Document = gql`
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
` as DocumentNode;

export function useMutationEditProductTemplateOptionVariant() {
    return Urql.useMutation<
        EditProductTemplateOptionVariantMutation,
        EditProductTemplateOptionVariantMutationVariables
    >(useMutationEditProductTemplateOptionVariant.Document);
}

useMutationDeleteProductTemplateOptionVariant.Document = gql`
    mutation deleteProductTemplateOptionVariant($id: ID!) {
        productTemplateOptionVariantDelete(id: $id)
    }
` as DocumentNode;

export function useMutationDeleteProductTemplateOptionVariant() {
    return Urql.useMutation<
        DeleteProductTemplateOptionVariantMutation,
        DeleteProductTemplateOptionVariantMutationVariables
    >(useMutationDeleteProductTemplateOptionVariant.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_ProductTemplateSimplePart = gql`
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

/*,
 * Operations from undefined,
 */

useQueryProductTemplateSimpleById.Document = gql`
    query ProductTemplateSimpleById($id: ID!) {
        productTemplateSimpleById(id: $id) {
            ...ProductTemplateSimplePart
        }
    }
    ${_gql_ProductTemplateSimplePart}
` as DocumentNode;

export function useQueryProductTemplateSimpleById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateSimpleByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateSimpleByIdQuery>({
        query: useQueryProductTemplateSimpleById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductTemplateSimples.Document = gql`
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
` as DocumentNode;

export function useQueryProductTemplateSimples(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateSimplesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateSimplesQuery>({
        query: useQueryProductTemplateSimples.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationCreateProductTemplateSimple.Document = gql`
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
` as DocumentNode;

export function useMutationCreateProductTemplateSimple() {
    return Urql.useMutation<
        CreateProductTemplateSimpleMutation,
        CreateProductTemplateSimpleMutationVariables
    >(useMutationCreateProductTemplateSimple.Document);
}

useMutationEditProductTemplateSimple.Document = gql`
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
    ${_gql_ProductTemplateSimplePart}
` as DocumentNode;

export function useMutationEditProductTemplateSimple() {
    return Urql.useMutation<
        EditProductTemplateSimpleMutation,
        EditProductTemplateSimpleMutationVariables
    >(useMutationEditProductTemplateSimple.Document);
}

useMutationDeleteProductTemplateSimple.Document = gql`
    mutation deleteProductTemplateSimple($id: ID!) {
        productTemplateSimpleDelete(id: $id)
    }
` as DocumentNode;

export function useMutationDeleteProductTemplateSimple() {
    return Urql.useMutation<
        DeleteProductTemplateSimpleMutation,
        DeleteProductTemplateSimpleMutationVariables
    >(useMutationDeleteProductTemplateSimple.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_ProductTemplateTeamspeakPart = gql`
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

/*,
 * Operations from undefined,
 */

useQueryProductTemplateTeamspeakById.Document = gql`
    query productTemplateTeamspeakById($id: ID!) {
        productTemplateTeamspeakById(id: $id) {
            ...ProductTemplateTeamspeakPart
        }
    }
    ${_gql_ProductTemplateTeamspeakPart}
` as DocumentNode;

export function useQueryProductTemplateTeamspeakById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateTeamspeakByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateTeamspeakByIdQuery>({
        query: useQueryProductTemplateTeamspeakById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductTemplateTeamspeaks.Document = gql`
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
` as DocumentNode;

export function useQueryProductTemplateTeamspeaks(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateTeamspeaksQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateTeamspeaksQuery>({
        query: useQueryProductTemplateTeamspeaks.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationCreateProductTemplateTeamspeak.Document = gql`
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
` as DocumentNode;

export function useMutationCreateProductTemplateTeamspeak() {
    return Urql.useMutation<
        CreateProductTemplateTeamspeakMutation,
        CreateProductTemplateTeamspeakMutationVariables
    >(useMutationCreateProductTemplateTeamspeak.Document);
}

useMutationEditProductTemplateTeamspeak.Document = gql`
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
    ${_gql_ProductTemplateTeamspeakPart}
` as DocumentNode;

export function useMutationEditProductTemplateTeamspeak() {
    return Urql.useMutation<
        EditProductTemplateTeamspeakMutation,
        EditProductTemplateTeamspeakMutationVariables
    >(useMutationEditProductTemplateTeamspeak.Document);
}

useMutationDeleteProductTemplateTeamspeak.Document = gql`
    mutation deleteProductTemplateTeamspeak($id: ID!) {
        productTemplateTeamspeakDelete(id: $id)
    }
` as DocumentNode;

export function useMutationDeleteProductTemplateTeamspeak() {
    return Urql.useMutation<
        DeleteProductTemplateTeamspeakMutation,
        DeleteProductTemplateTeamspeakMutationVariables
    >(useMutationDeleteProductTemplateTeamspeak.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_ProductTemplateVserverPart = gql`
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

/*,
 * Operations from undefined,
 */

useQueryProductTemplateVservers.Document = gql`
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
    ${_gql_ProductTemplateVserverPart}
` as DocumentNode;

export function useQueryProductTemplateVservers(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateVserversQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateVserversQuery>({
        query: useQueryProductTemplateVservers.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductTemplateVserverById.Document = gql`
    query productTemplateVserverById($id: ID!) {
        productTemplateVserverById(id: $id) {
            ...ProductTemplateVserverPart
        }
    }
    ${_gql_ProductTemplateVserverPart}
` as DocumentNode;

export function useQueryProductTemplateVserverById(
    options: Omit<
        Urql.UseQueryArgs<ProductTemplateVserverByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductTemplateVserverByIdQuery>({
        query: useQueryProductTemplateVserverById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationCreateProductTemplateVserver.Document = gql`
    mutation createProductTemplateVserver(
        $data: ProductTemplateVserverCreateInput!
    ) {
        productTemplateVserverCreate(data: $data) {
            ...ProductTemplateVserverPart
        }
    }
    ${_gql_ProductTemplateVserverPart}
` as DocumentNode;

export function useMutationCreateProductTemplateVserver() {
    return Urql.useMutation<
        CreateProductTemplateVserverMutation,
        CreateProductTemplateVserverMutationVariables
    >(useMutationCreateProductTemplateVserver.Document);
}

useMutationEditProductTemplateVserver.Document = gql`
    mutation editProductTemplateVserver(
        $data: ProductTemplateVserverEditInput!
    ) {
        productTemplateVserverEdit(data: $data) {
            ...ProductTemplateVserverPart
        }
    }
    ${_gql_ProductTemplateVserverPart}
` as DocumentNode;

export function useMutationEditProductTemplateVserver() {
    return Urql.useMutation<
        EditProductTemplateVserverMutation,
        EditProductTemplateVserverMutationVariables
    >(useMutationEditProductTemplateVserver.Document);
}

useMutationDeleteProductTemplateVserver.Document = gql`
    mutation deleteProductTemplateVserver($id: ID!) {
        productTemplateVserverDelete(id: $id)
    }
` as DocumentNode;

export function useMutationDeleteProductTemplateVserver() {
    return Urql.useMutation<
        DeleteProductTemplateVserverMutation,
        DeleteProductTemplateVserverMutationVariables
    >(useMutationDeleteProductTemplateVserver.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_TranslationPart = gql`
    fragment TranslationPart on Translation {
        id
        language
        key
        value
    }
`;

/*,
 * Operations from undefined,
 */

useQueryTranslations.Document = gql`
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
    ${_gql_TranslationPart}
` as DocumentNode;

export function useQueryTranslations(
    options: Omit<Urql.UseQueryArgs<TranslationsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<TranslationsQuery>({
        query: useQueryTranslations.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryTranslationById.Document = gql`
    query translationById($id: ID!) {
        translationById(id: $id) {
            ...TranslationPart
        }
    }
    ${_gql_TranslationPart}
` as DocumentNode;

export function useQueryTranslationById(
    options: Omit<
        Urql.UseQueryArgs<TranslationByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<TranslationByIdQuery>({
        query: useQueryTranslationById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationTranslationEdit.Document = gql`
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
    ${_gql_TranslationPart}
` as DocumentNode;

export function useMutationTranslationEdit() {
    return Urql.useMutation<
        TranslationEditMutation,
        TranslationEditMutationVariables
    >(useMutationTranslationEdit.Document);
}

useMutationTranslationCreate.Document = gql`
    mutation translationCreate {
        translationCreate {
            ...TranslationPart
        }
    }
    ${_gql_TranslationPart}
` as DocumentNode;

export function useMutationTranslationCreate() {
    return Urql.useMutation<
        TranslationCreateMutation,
        TranslationCreateMutationVariables
    >(useMutationTranslationCreate.Document);
}

useMutationTranslationDelete.Document = gql`
    mutation translationDelete($id: ID!) {
        translationDelete(id: $id)
    }
` as DocumentNode;

export function useMutationTranslationDelete() {
    return Urql.useMutation<
        TranslationDeleteMutation,
        TranslationDeleteMutationVariables
    >(useMutationTranslationDelete.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_UserPart = gql`
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
const _gql_UserPartAddress = gql`
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

/*,
 * Operations from undefined,
 */

useMutationUserSetActive.Document = gql`
    mutation userSetActive($id: ID!, $active: Boolean!) {
        userSetActive(id: $id, active: $active) {
            ...UserPart
        }
    }
    ${_gql_UserPart}
` as DocumentNode;

export function useMutationUserSetActive() {
    return Urql.useMutation<
        UserSetActiveMutation,
        UserSetActiveMutationVariables
    >(useMutationUserSetActive.Document);
}

useQueryPing.Document = gql`
    query ping {
        ping
    }
` as DocumentNode;

export function useQueryPing(
    options: Omit<Urql.UseQueryArgs<PingQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<PingQuery>({
        query: useQueryPing.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryUsers.Document = gql`
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
    ${_gql_UserPart}
` as DocumentNode;

export function useQueryUsers(
    options: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<UsersQuery>({
        query: useQueryUsers.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationUserTestMyPassword.Document = gql`
    mutation userTestMyPassword($password: String!) {
        userTestMyPassword(password: $password)
    }
` as DocumentNode;

export function useMutationUserTestMyPassword() {
    return Urql.useMutation<
        UserTestMyPasswordMutation,
        UserTestMyPasswordMutationVariables
    >(useMutationUserTestMyPassword.Document);
}

useQueryUserById.Document = gql`
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
    ${_gql_UserPartAddress}
    ${_gql_UserPart}
` as DocumentNode;

export function useQueryUserById(
    options: Omit<Urql.UseQueryArgs<UserByIdQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<UserByIdQuery>({
        query: useQueryUserById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryMeLoggedIn.Document = gql`
    query meLoggedIn {
        user_is_login
    }
` as DocumentNode;

export function useQueryMeLoggedIn(
    options: Omit<Urql.UseQueryArgs<MeLoggedInQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<MeLoggedInQuery>({
        query: useQueryMeLoggedIn.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationLogin.Document = gql`
    mutation login($username: String!, $password: String!) {
        userLoginWithEmailToken(username: $username, password: $password)
    }
` as DocumentNode;

export function useMutationLogin() {
    return Urql.useMutation<LoginMutation, LoginMutationVariables>(
        useMutationLogin.Document
    );
}

useMutationAdminLoginAsUser.Document = gql`
    mutation adminLoginAsUser($id: ID!) {
        user_admin_login(id: $id)
    }
` as DocumentNode;

export function useMutationAdminLoginAsUser() {
    return Urql.useMutation<
        AdminLoginAsUserMutation,
        AdminLoginAsUserMutationVariables
    >(useMutationAdminLoginAsUser.Document);
}

useMutationUserMakeFeedback.Document = gql`
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
` as DocumentNode;

export function useMutationUserMakeFeedback() {
    return Urql.useMutation<
        UserMakeFeedbackMutation,
        UserMakeFeedbackMutationVariables
    >(useMutationUserMakeFeedback.Document);
}

useQueryUserMe.Document = gql`
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
    ${_gql_UserPartAddress}
    ${_gql_UserPart}
` as DocumentNode;

export function useQueryUserMe(
    options: Omit<Urql.UseQueryArgs<UserMeQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<UserMeQuery>({
        query: useQueryUserMe.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationUserAddressAddVerifyDocument.Document = gql`
    mutation userAddressAddVerifyDocument($fileId: ID!) {
        userAddressAddVerifyDocument(fileId: $fileId) {
            ...UserPart
            supportId
            address {
                ...UserPartAddress
            }
        }
    }
    ${_gql_UserPartAddress}
    ${_gql_UserPart}
` as DocumentNode;

export function useMutationUserAddressAddVerifyDocument() {
    return Urql.useMutation<
        UserAddressAddVerifyDocumentMutation,
        UserAddressAddVerifyDocumentMutationVariables
    >(useMutationUserAddressAddVerifyDocument.Document);
}

useMutationUserAddressDelVerifyDocument.Document = gql`
    mutation userAddressDelVerifyDocument {
        userAddressDelVerifyDocument {
            ...UserPart
            supportId
            address {
                ...UserPartAddress
            }
        }
    }
    ${_gql_UserPartAddress}
    ${_gql_UserPart}
` as DocumentNode;

export function useMutationUserAddressDelVerifyDocument() {
    return Urql.useMutation<
        UserAddressDelVerifyDocumentMutation,
        UserAddressDelVerifyDocumentMutationVariables
    >(useMutationUserAddressDelVerifyDocument.Document);
}

useQueryUserMeCustomCredits.Document = gql`
    query userMeCustomCredits {
        user_me {
            id
            bonusCredits
            importedCredits
            credits
            canHaveBonusCredits
        }
    }
` as DocumentNode;

export function useQueryUserMeCustomCredits(
    options: Omit<
        Urql.UseQueryArgs<UserMeCustomCreditsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<UserMeCustomCreditsQuery>({
        query: useQueryUserMeCustomCredits.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryUserCustomCredits.Document = gql`
    query userCustomCredits($id: ID!) {
        userById(id: $id) {
            id
            bonusCredits
            importedCredits
            credits
        }
    }
` as DocumentNode;

export function useQueryUserCustomCredits(
    options: Omit<
        Urql.UseQueryArgs<UserCustomCreditsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<UserCustomCreditsQuery>({
        query: useQueryUserCustomCredits.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationUserEditSelfGeneral.Document = gql`
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
    ${_gql_UserPartAddress}
    ${_gql_UserPart}
` as DocumentNode;

export function useMutationUserEditSelfGeneral() {
    return Urql.useMutation<
        UserEditSelfGeneralMutation,
        UserEditSelfGeneralMutationVariables
    >(useMutationUserEditSelfGeneral.Document);
}

useMutationUserEditSelfAddress.Document = gql`
    mutation userEditSelfAddress($data: UserInputUserEditAddress!) {
        userEditSelfAddress(data: $data) {
            ...UserPart
            address {
                ...UserPartAddress
            }
        }
    }
    ${_gql_UserPartAddress}
    ${_gql_UserPart}
` as DocumentNode;

export function useMutationUserEditSelfAddress() {
    return Urql.useMutation<
        UserEditSelfAddressMutation,
        UserEditSelfAddressMutationVariables
    >(useMutationUserEditSelfAddress.Document);
}

useMutationUserEditSelfEmail.Document = gql`
    mutation userEditSelfEmail($email: String!, $password: String!) {
        userEditSelfEmail(email: $email, password: $password) {
            ...UserPart
        }
    }
    ${_gql_UserPart}
` as DocumentNode;

export function useMutationUserEditSelfEmail() {
    return Urql.useMutation<
        UserEditSelfEmailMutation,
        UserEditSelfEmailMutationVariables
    >(useMutationUserEditSelfEmail.Document);
}

useQueryUserCountries.Document = gql`
    query userCountries {
        userCountries
    }
` as DocumentNode;

export function useQueryUserCountries(
    options: Omit<Urql.UseQueryArgs<UserCountriesQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<UserCountriesQuery>({
        query: useQueryUserCountries.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationRegisterNewUser.Document = gql`
    mutation registerNewUser(
        $googleCaptcha: String!
        $data: UserInputRegister!
    ) {
        user_register(data: $data, googleCaptcha: $googleCaptcha)
    }
` as DocumentNode;

export function useMutationRegisterNewUser() {
    return Urql.useMutation<
        RegisterNewUserMutation,
        RegisterNewUserMutationVariables
    >(useMutationRegisterNewUser.Document);
}

useMutationUserAdminLogout.Document = gql`
    mutation userAdminLogout {
        userAdminLogout
    }
` as DocumentNode;

export function useMutationUserAdminLogout() {
    return Urql.useMutation<
        UserAdminLogoutMutation,
        UserAdminLogoutMutationVariables
    >(useMutationUserAdminLogout.Document);
}

useMutationUserVerify.Document = gql`
    mutation userVerify($token: String!) {
        user_verify(token: $token)
    }
` as DocumentNode;

export function useMutationUserVerify() {
    return Urql.useMutation<UserVerifyMutation, UserVerifyMutationVariables>(
        useMutationUserVerify.Document
    );
}

useMutationResetPassword.Document = gql`
    mutation resetPassword($token: String!, $password: String!) {
        user_reset_password_token(token: $token, password: $password)
    }
` as DocumentNode;

export function useMutationResetPassword() {
    return Urql.useMutation<
        ResetPasswordMutation,
        ResetPasswordMutationVariables
    >(useMutationResetPassword.Document);
}

useMutationUserResetPassword.Document = gql`
    mutation userResetPassword($email: String!, $captcha: String!) {
        user_reset_password(email: $email, captcha: $captcha)
    }
` as DocumentNode;

export function useMutationUserResetPassword() {
    return Urql.useMutation<
        UserResetPasswordMutation,
        UserResetPasswordMutationVariables
    >(useMutationUserResetPassword.Document);
}

useQueryProductAdminInfo.Document = gql`
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
` as DocumentNode;

export function useQueryProductAdminInfo(
    options: Omit<
        Urql.UseQueryArgs<ProductAdminInfoQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductAdminInfoQuery>({
        query: useQueryProductAdminInfo.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryUserAddresss.Document = gql`
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
` as DocumentNode;

export function useQueryUserAddresss(
    options: Omit<Urql.UseQueryArgs<UserAddresssQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<UserAddresssQuery>({
        query: useQueryUserAddresss.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationUserAddressConfirmVerify.Document = gql`
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
` as DocumentNode;

export function useMutationUserAddressConfirmVerify() {
    return Urql.useMutation<
        UserAddressConfirmVerifyMutation,
        UserAddressConfirmVerifyMutationVariables
    >(useMutationUserAddressConfirmVerify.Document);
}

useMutationUserAddressRejectVerify.Document = gql`
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
` as DocumentNode;

export function useMutationUserAddressRejectVerify() {
    return Urql.useMutation<
        UserAddressRejectVerifyMutation,
        UserAddressRejectVerifyMutationVariables
    >(useMutationUserAddressRejectVerify.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryUserCommentsByUser.Document = gql`
    query userCommentsByUser($userId: ID!) {
        userCommentsByUser(userId: $userId) {
            message
            id
            create
        }
    }
` as DocumentNode;

export function useQueryUserCommentsByUser(
    options: Omit<
        Urql.UseQueryArgs<UserCommentsByUserQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<UserCommentsByUserQuery>({
        query: useQueryUserCommentsByUser.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationUserCommentCreate.Document = gql`
    mutation userCommentCreate($userId: ID!, $message: String!) {
        userCommentCreate(userId: $userId, message: $message) {
            message
            id
            create
        }
    }
` as DocumentNode;

export function useMutationUserCommentCreate() {
    return Urql.useMutation<
        UserCommentCreateMutation,
        UserCommentCreateMutationVariables
    >(useMutationUserCommentCreate.Document);
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useQueryMyUserOAuthTokens.Document = gql`
    query myUserOAuthTokens {
        myUserOAuthTokens {
            id
            service
            confirmed
        }
    }
` as DocumentNode;

export function useQueryMyUserOAuthTokens(
    options: Omit<
        Urql.UseQueryArgs<MyUserOAuthTokensQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyUserOAuthTokensQuery>({
        query: useQueryMyUserOAuthTokens.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationUserOauthTokenConfirm.Document = gql`
    mutation userOauthTokenConfirm($password: String!, $id: ID!) {
        userOauthTokenConfirm(id: $id, password: $password) {
            id
            service
            confirmed
        }
    }
` as DocumentNode;

export function useMutationUserOauthTokenConfirm() {
    return Urql.useMutation<
        UserOauthTokenConfirmMutation,
        UserOauthTokenConfirmMutationVariables
    >(useMutationUserOauthTokenConfirm.Document);
}

useMutationUserOAuthDeleteToken.Document = gql`
    mutation userOAuthDeleteToken($id: ID!) {
        userOAuthDeleteToken(id: $id)
    }
` as DocumentNode;

export function useMutationUserOAuthDeleteToken() {
    return Urql.useMutation<
        UserOAuthDeleteTokenMutation,
        UserOAuthDeleteTokenMutationVariables
    >(useMutationUserOAuthDeleteToken.Document);
}

/*,
 * Fragments from undefined,
 */
const _gql_ProductVserverPart = gql`
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

/*,
 * Operations from undefined,
 */

useQueryProductVserverByIdBackups.Document = gql`
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
    ${_gql_ProductVserverPart}
` as DocumentNode;

export function useQueryProductVserverByIdBackups(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverByIdBackupsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverByIdBackupsQuery>({
        query: useQueryProductVserverByIdBackups.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductVserverDelete.Document = gql`
    mutation productVserverDelete($id: ID!) {
        productVserverDelete(id: $id)
    }
` as DocumentNode;

export function useMutationProductVserverDelete() {
    return Urql.useMutation<
        ProductVserverDeleteMutation,
        ProductVserverDeleteMutationVariables
    >(useMutationProductVserverDelete.Document);
}

useQueryProductVservers.Document = gql`
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
    ${_gql_ProductVserverPart}
` as DocumentNode;

export function useQueryProductVservers(
    options: Omit<
        Urql.UseQueryArgs<ProductVserversQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserversQuery>({
        query: useQueryProductVservers.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductVserverExist.Document = gql`
    query productVserverExist($id: ID!) {
        productVserverExist(vserverId: $id)
    }
` as DocumentNode;

export function useQueryProductVserverExist(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverExistQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverExistQuery>({
        query: useQueryProductVserverExist.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductVserverStats.Document = gql`
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
` as DocumentNode;

export function useQueryProductVserverStats(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverStatsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverStatsQuery>({
        query: useQueryProductVserverStats.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductVserverRunning.Document = gql`
    query productVserverRunning($id: ID!) {
        productVserverRunning(vserverId: $id)
    }
` as DocumentNode;

export function useQueryProductVserverRunning(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverRunningQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverRunningQuery>({
        query: useQueryProductVserverRunning.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductVserverMakeVncPort.Document = gql`
    mutation productVserverMakeVncPort($id: ID!) {
        productVserverMakeVncPort(vserverId: $id)
    }
` as DocumentNode;

export function useMutationProductVserverMakeVncPort() {
    return Urql.useMutation<
        ProductVserverMakeVncPortMutation,
        ProductVserverMakeVncPortMutationVariables
    >(useMutationProductVserverMakeVncPort.Document);
}

useMutationProductVserverInstall.Document = gql`
    mutation productVserverInstall($id: ID!, $recreate: Boolean) {
        productVserverInstall(vserverId: $id, recreate: $recreate) {
            id
        }
    }
` as DocumentNode;

export function useMutationProductVserverInstall() {
    return Urql.useMutation<
        ProductVserverInstallMutation,
        ProductVserverInstallMutationVariables
    >(useMutationProductVserverInstall.Document);
}

useMutationProductVserverBackupRestore.Document = gql`
    mutation productVserverBackupRestore($id: ID!, $backupId: ID!) {
        productVserverBackupRestore(id: $id, backupId: $backupId) {
            id
        }
    }
` as DocumentNode;

export function useMutationProductVserverBackupRestore() {
    return Urql.useMutation<
        ProductVserverBackupRestoreMutation,
        ProductVserverBackupRestoreMutationVariables
    >(useMutationProductVserverBackupRestore.Document);
}

useMutationProductVserverBackupDownload.Document = gql`
    mutation productVserverBackupDownload($id: ID!) {
        productVserverBackupDownload(id: $id)
    }
` as DocumentNode;

export function useMutationProductVserverBackupDownload() {
    return Urql.useMutation<
        ProductVserverBackupDownloadMutation,
        ProductVserverBackupDownloadMutationVariables
    >(useMutationProductVserverBackupDownload.Document);
}

useMutationProductVserverBackupCreate.Document = gql`
    mutation productVserverBackupCreate($id: ID!) {
        productVserverBackupCreate(id: $id) {
            id
        }
    }
` as DocumentNode;

export function useMutationProductVserverBackupCreate() {
    return Urql.useMutation<
        ProductVserverBackupCreateMutation,
        ProductVserverBackupCreateMutationVariables
    >(useMutationProductVserverBackupCreate.Document);
}

useMutationProductVserverBackupDelete.Document = gql`
    mutation productVserverBackupDelete($id: ID!, $backupId: ID!) {
        productVserverBackupDelete(id: $id, backupId: $backupId)
    }
` as DocumentNode;

export function useMutationProductVserverBackupDelete() {
    return Urql.useMutation<
        ProductVserverBackupDeleteMutation,
        ProductVserverBackupDeleteMutationVariables
    >(useMutationProductVserverBackupDelete.Document);
}

useMutationProductVserverStart.Document = gql`
    mutation productVserverStart($id: ID!, $withImages: Boolean) {
        productVserverStart(vserverId: $id, withImages: $withImages) {
            id
        }
    }
` as DocumentNode;

export function useMutationProductVserverStart() {
    return Urql.useMutation<
        ProductVserverStartMutation,
        ProductVserverStartMutationVariables
    >(useMutationProductVserverStart.Document);
}

useMutationProductVserverStop.Document = gql`
    mutation productVserverStop($id: ID!) {
        productVserverStop(vserverId: $id) {
            id
        }
    }
` as DocumentNode;

export function useMutationProductVserverStop() {
    return Urql.useMutation<
        ProductVserverStopMutation,
        ProductVserverStopMutationVariables
    >(useMutationProductVserverStop.Document);
}

useMutationProductVserverSetSshPassword.Document = gql`
    mutation productVserverSetSshPassword($id: ID!, $password: String!) {
        productVserverSetSshPassword(vserverId: $id, password: $password) {
            ...ProductVserverPart
        }
    }
    ${_gql_ProductVserverPart}
` as DocumentNode;

export function useMutationProductVserverSetSshPassword() {
    return Urql.useMutation<
        ProductVserverSetSshPasswordMutation,
        ProductVserverSetSshPasswordMutationVariables
    >(useMutationProductVserverSetSshPassword.Document);
}

useMutationProductVserverChangeLabel.Document = gql`
    mutation productVserverChangeLabel($id: ID!, $label: String!) {
        productVserverChangeLabel(id: $id, label: $label) {
            ...ProductVserverPart
        }
    }
    ${_gql_ProductVserverPart}
` as DocumentNode;

export function useMutationProductVserverChangeLabel() {
    return Urql.useMutation<
        ProductVserverChangeLabelMutation,
        ProductVserverChangeLabelMutationVariables
    >(useMutationProductVserverChangeLabel.Document);
}

useMutationProductVserverAddImage.Document = gql`
    mutation productVserverAddImage($id: ID!, $imageId: ID!) {
        productVserverAddImage(id: $id, imageId: $imageId) {
            ...ProductVserverPart
        }
    }
    ${_gql_ProductVserverPart}
` as DocumentNode;

export function useMutationProductVserverAddImage() {
    return Urql.useMutation<
        ProductVserverAddImageMutation,
        ProductVserverAddImageMutationVariables
    >(useMutationProductVserverAddImage.Document);
}

useMutationProductVserverRemoveImage.Document = gql`
    mutation productVserverRemoveImage($id: ID!, $imageId: ID!) {
        productVserverRemoveImage(id: $id, imageId: $imageId) {
            ...ProductVserverPart
        }
    }
    ${_gql_ProductVserverPart}
` as DocumentNode;

export function useMutationProductVserverRemoveImage() {
    return Urql.useMutation<
        ProductVserverRemoveImageMutation,
        ProductVserverRemoveImageMutationVariables
    >(useMutationProductVserverRemoveImage.Document);
}

useQueryProductVserverById.Document = gql`
    query productVserverById($id: ID!) {
        productVserverById(id: $id) {
            ...ProductVserverPart
            trafficTransferredInMB
        }
    }
    ${_gql_ProductVserverPart}
` as DocumentNode;

export function useQueryProductVserverById(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverByIdQuery>({
        query: useQueryProductVserverById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductVserverUnlockNetworkSpeed.Document = gql`
    mutation productVserverUnlockNetworkSpeed($id: ID!) {
        productVserverUnlockNetworkSpeed(id: $id) {
            ...ProductVserverPart
        }
    }
    ${_gql_ProductVserverPart}
` as DocumentNode;

export function useMutationProductVserverUnlockNetworkSpeed() {
    return Urql.useMutation<
        ProductVserverUnlockNetworkSpeedMutation,
        ProductVserverUnlockNetworkSpeedMutationVariables
    >(useMutationProductVserverUnlockNetworkSpeed.Document);
}

useQueryMyProductVservers.Document = gql`
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
` as DocumentNode;

export function useQueryMyProductVservers(
    options: Omit<
        Urql.UseQueryArgs<MyProductVserversQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<MyProductVserversQuery>({
        query: useQueryMyProductVservers.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

/*,
 * Fragments from undefined,
 */
const _gql_ProductVserverImagePart = gql`
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

/*,
 * Operations from undefined,
 */

useQueryProductVserverImages.Document = gql`
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
    ${_gql_ProductVserverImagePart}
` as DocumentNode;

export function useQueryProductVserverImages(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverImagesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverImagesQuery>({
        query: useQueryProductVserverImages.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductVserverImageCreate.Document = gql`
    mutation productVserverImageCreate($data: ProductVserverImageCreateInput!) {
        productVserverImageCreate(data: $data) {
            ...ProductVserverImagePart
        }
    }
    ${_gql_ProductVserverImagePart}
` as DocumentNode;

export function useMutationProductVserverImageCreate() {
    return Urql.useMutation<
        ProductVserverImageCreateMutation,
        ProductVserverImageCreateMutationVariables
    >(useMutationProductVserverImageCreate.Document);
}

useMutationProductVserverImageEdit.Document = gql`
    mutation productVserverImageEdit($data: ProductVserverImageEditInput!) {
        productVserverImageEdit(data: $data) {
            ...ProductVserverImagePart
        }
    }
    ${_gql_ProductVserverImagePart}
` as DocumentNode;

export function useMutationProductVserverImageEdit() {
    return Urql.useMutation<
        ProductVserverImageEditMutation,
        ProductVserverImageEditMutationVariables
    >(useMutationProductVserverImageEdit.Document);
}

useMutationProductVserverImageDelete.Document = gql`
    mutation productVserverImageDelete($id: ID!) {
        productVserverImageDelete(id: $id)
    }
` as DocumentNode;

export function useMutationProductVserverImageDelete() {
    return Urql.useMutation<
        ProductVserverImageDeleteMutation,
        ProductVserverImageDeleteMutationVariables
    >(useMutationProductVserverImageDelete.Document);
}

useQueryProductVserverImageById.Document = gql`
    query productVserverImageById($id: ID!) {
        productVserverImageById(id: $id) {
            ...ProductVserverImagePart
        }
    }
    ${_gql_ProductVserverImagePart}
` as DocumentNode;

export function useQueryProductVserverImageById(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverImageByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverImageByIdQuery>({
        query: useQueryProductVserverImageById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductVserverImagePlatformImages.Document = gql`
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
    ${_gql_ProductVserverImagePart}
` as DocumentNode;

export function useQueryProductVserverImagePlatformImages(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverImagePlatformImagesQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverImagePlatformImagesQuery>({
        query: useQueryProductVserverImagePlatformImages.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

/*,
 * Fragments from undefined,
 */

/*,
 * Operations from undefined,
 */

useMutationCreateProductVserverIp.Document = gql`
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
` as DocumentNode;

export function useMutationCreateProductVserverIp() {
    return Urql.useMutation<
        CreateProductVserverIpMutation,
        CreateProductVserverIpMutationVariables
    >(useMutationCreateProductVserverIp.Document);
}

useMutationEditProductVserverIp.Document = gql`
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
` as DocumentNode;

export function useMutationEditProductVserverIp() {
    return Urql.useMutation<
        EditProductVserverIpMutation,
        EditProductVserverIpMutationVariables
    >(useMutationEditProductVserverIp.Document);
}

useMutationDeleteProductVserverIp.Document = gql`
    mutation deleteProductVserverIp($id: ID!) {
        productVserverIpDelete(id: $id)
    }
` as DocumentNode;

export function useMutationDeleteProductVserverIp() {
    return Urql.useMutation<
        DeleteProductVserverIpMutation,
        DeleteProductVserverIpMutationVariables
    >(useMutationDeleteProductVserverIp.Document);
}

useQueryProductVserverIps.Document = gql`
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
` as DocumentNode;

export function useQueryProductVserverIps(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverIpsQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverIpsQuery>({
        query: useQueryProductVserverIps.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductVserverIpById.Document = gql`
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
` as DocumentNode;

export function useQueryProductVserverIpById(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverIpByIdQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverIpByIdQuery>({
        query: useQueryProductVserverIpById.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useQueryProductVserverIpFree.Document = gql`
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
` as DocumentNode;

export function useQueryProductVserverIpFree(
    options: Omit<
        Urql.UseQueryArgs<ProductVserverIpFreeQueryVariables>,
        'query'
    > = {}
) {
    return Urql.useQuery<ProductVserverIpFreeQuery>({
        query: useQueryProductVserverIpFree.Document,
        ...queryDefaultOptions,
        ...options,
    });
}

useMutationProductVserverIpReassignIp.Document = gql`
    mutation productVserverIpReassignIp($id: ID!, $newId: ID!) {
        productVserverIpReassignIp(id: $id, newId: $newId)
    }
` as DocumentNode;

export function useMutationProductVserverIpReassignIp() {
    return Urql.useMutation<
        ProductVserverIpReassignIpMutation,
        ProductVserverIpReassignIpMutationVariables
    >(useMutationProductVserverIpReassignIp.Document);
}

/*
 * Boilerplate
 */

const queryDefaultOptions = {
    fetchPolicy: 'cache-and-network' as 'cache-and-network',
};
