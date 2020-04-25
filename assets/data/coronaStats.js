export default {
  majorStats: {
    total: {
      heading: 'Total Cases',
      quantity: 1182,
      info: '1st case: 27/02/2020'
    },
    hospitalized: {
      heading: 'Currently Hospitalized',
      // quantity: 925
    },
    deaths: {
      heading: 'Deaths',
      quantity: 35
    },
    discharged: {
      heading: 'Discharged',
      quantity: 222
    }
  },
  statesData: [
    { state: 'Lagos', total: 689, recovered: 122, death: 19 },
    { state: 'FCT', total: 138, recovered: 35, death: 3 },
    { state: 'Kano', total: 77, recovered: 0, death: 1 },
    { state: 'Ogun', total: 35, recovered: 5, death: 1 },
    { state: 'Osun', total: 32, recovered: 18, death: 0 },
    { state: 'Gombe', total: 30, recovered: 0, death: 0 },
    { state: 'Borno', total: 30, recovered: 0, death: 2 },
    { state: 'Katsina', total: 30, recovered: 4, death: 1 },
    { state: 'Edo', total: 22, recovered: 7, death: 3 },
    { state: 'Oyo', total: 18, recovered: 5, death: 1 },
    { state: 'Bauchi', total: 11, recovered: 5, death: 0 },
    { state: 'Kwara', total: 11, recovered: 2, death: 0 },
    { state: 'Akwa Ibom', total: 11, recovered: 6, death: 1 },
    { state: 'Kaduna', total: 10, recovered: 4, death: 0 },
    { state: 'Ekiti', total: 8, recovered: 2, death: 1 },
    { state: 'Delta', total: 6, recovered: 0, death: 1 },
    { state: 'Ondo', total: 4, recovered: 2, death: 1 },
    { state: 'Rivers', total: 3, recovered: 2, death: 1 },
    { state: 'Enugu', total: 2, recovered: 2, death: 0 },
    { state: 'Niger', total: 2, recovered: 0, death: 0 },
    { state: 'Jigawa', total: 2, recovered: 0, death: 0 },
    { state: 'Zamfara', total: 2, recovered: 0, death: 0 },
    { state: 'Sokoto', total: 2, recovered: 0, death: 0 },
    { state: 'Abia', total: 2, recovered: 0, death: 0 },
    { state: 'Benue', total: 1, recovered: 0, death: 0 },
    { state: 'Anambra', total: 1, recovered: 1, death: 0 },
    { state: 'Plateau', total: 1, recovered: 0, death: 0 },
    { state: 'Adamawa', total: 1, recovered: 0, death: 0 },
    { state: 'Imo', total: 1, recovered: 0, death: 0 }
  ],
  helplines: [
    { state: 'Abia', helplines: ['07002242362', '0700ABIADOC'] },

    { state: 'Adamawa', helplines: ['08031230359', '07080601139'] },

    {
      state: 'Akwa Ibom',
      helplines: ['08028442194', '08037934966', '09023330092']
    },

    {
      state: 'Anambra',
      helplines: ['08145434416', '08030953771', '08117567363']
    },

    {
      state: 'Bauchi',
      helplines: [
        '08023909309',
        '08032717887',
        '08059600898',
        '0803368036',
        '08080330216',
        '08036911698'
      ]
    },

    {
      state: 'Bayelsa',
      helplines: ['08039216821', '07019304970', '08151693570']
    },

    { state: 'Benue', helplines: ['09018602439', '07025031214'] },

    { state: 'Borno', helplines: ['08088159881', '08009999999'] },

    {
      state: 'Cross River',
      helplines: ['09036281412', '08050907736-WhatsApp']
    },

    {
      state: 'Delta',
      helplines: ['08033521961', '08035078541', '08030758179', '09065031241']
    },

    {
      state: 'Ebonyi',
      helplines: ['08037433129', '08125915350', '09020332489']
    },

    { state: 'Edo', helplines: ['08084096723', '08064258163', '080358385529'] },

    {
      state: 'Ekiti',
      helplines: ['112', '09062970434', '09082970435', '09062970436']
    },

    { state: 'Enugu', helplines: ['117', '112', '08182555550'] },

    { state: 'FCT - Abuja', helplines: ['08099936312', '07080631500'] },

    { state: 'Gombe', helplines: ['07025116657', '07026256569'] },

    { state: 'Imo', helplines: ['08099555577', '07087110839'] },

    {
      state: 'Jigawa',
      helplines: ['08069323005', '08036440532', '08038806682', '07035188486']
    },

    {
      state: 'Kaduna',
      helplines: [
        '08025088304',
        '08032401473',
        '08035871662',
        '08037808191',
        '08036045755',
        '08097000010'
      ]
    },

    { state: 'Kano', helplines: ['09093995333', '09093995444'] },

    { state: 'Katsina', helplines: ['09035037114', '09047092428'] },

    {
      state: 'Kebbi',
      helplines: ['08036782507', '08036074588', '08032907601', '08067677723']
    },

    {
      state: 'Kogi',
      helplines: ['07088292249', '08150953486', '08095227003', '07043402122']
    },

    { state: 'Kwara', helplines: ['08064369063', '09029397826'] },

    { state: 'Lagos', helplines: ['08000CORONA', '0800027662'] },

    {
      state: 'Nasarawa',
      helplines: [
        '08036018579',
        '08035871718',
        '08033254549',
        '08121243191',
        '08032910826',
        '080097000010'
      ]
    },

    {
      state: 'Niger',
      helplines: ['08038246018', '09093093642', '08077213070']
    },

    { state: 'Ogun', helplines: ['08188978393', '08188978392'] },

    {
      state: 'Ondo',
      helplines: [
        '0800COVID19',
        '08002684319',
        '0700COVID19',
        '07002684319',
        '070012684319'
      ]
    },

    {
      state: 'Osun',
      helplines: ['293', '08035025692', '08033908772', '08056546250']
    },

    {
      state: 'Oyo',
      helplines: ['08095394000', '08095963000', '08078288999', '08078288800']
    },

    {
      state: 'Plateau',
      helplines: ['07032864444', '08035422711', '08065486416', '08035779917']
    },

    {
      state: 'Rivers',
      helplines: ['08056109538', '08031888093', '08033124314']
    },

    {
      state: 'Sokoto',
      helplines: ['07031936037', '08022069567', '08035074228', '08036294462']
    },

    {
      state: 'Taraba',
      helplines: ['08032501165', '08065508675', '08039359368', '08037450227']
    },

    { state: 'Yobe', helplines: ['08131834764', '07041116027'] },

    {
      state: 'Zamfara',
      helplines: ['08035626731', '08035161538', '08161330774', '08066408606']
    }
  ]
}
