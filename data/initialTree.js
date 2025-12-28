const initialTree = [
  {
    id: 1,
    code: "",
    title: "حساب‌های اصلی",
    children: [
      {
        id: 2,
        code: "1",
        title: "دارایی‌های جاری",
        children: [
          {
            id: 3,
            code: "101",
            title: "وجوه نقد",
            children: [
              { id: 4, code: "10101", title: "تن‌خواه", children: [] },
              { id: 5, code: "10102", title: "بانک", children: [] },
            ],
          },
          {
            id: 6,
            code: "103",
            title: "حساب‌های دریافتنی",
            children: [
              {
                id: 7,
                code: "10301",
                title: "حساب‌های دریافتنی حامی‌کت",
                children: [],
              },
            ],
          },
        ],
      },

      {
        id: 8,
        code: "2",
        title: "دارایی‌های غیرجاری",
        expandable: true,
        children: [],
      },

      {
        id: 9,
        code: "3",
        title: "بدهی‌های جاری",
        children: [
          {
            id: 10,
            code: "301",
            title: "حساب‌های پرداختنی جاری",
            children: [
              {
                id: 11,
                code: "30101",
                title: "کیف پول پرداختنی خریدار",
                children: [],
              },
              {
                id: 12,
                code: "30102",
                title: "حساب‌های پرداختنی فروشگاه",
                children: [],
              },
              {
                id: 13,
                code: "30103",
                title: "حساب‌های پرداختنی فروشنده",
                children: [],
              },
              {
                id: 14,
                code: "30104",
                title: "حساب‌های پرداختنی پیک",
                children: [],
              },
            ],
          },
          {
            id: 15,
            code: "302",
            title: "حساب‌های پرداختنی غیرتجاری",
            children: [
              { id: 16, code: "30201", title: "مالیات پرداختنی", children: [] },
              { id: 17, code: "30202", title: "بیمه پرداختنی", children: [] },
              {
                id: 18,
                code: "30203",
                title: "ارزش افزوده پرداختنی",
                children: [],
              },
              { id: 19, code: "30204", title: "حقوق پرداختنی", children: [] },
            ],
          },
          {
            id: 20,
            code: "4",
            title: "بدهی‌های غیرجاری",
            expandable: true,
            children: [],
          },
        ],
      },

      {
        id: 21,
        code: "5",
        title: "حقوق صاحبان سهام (سرمایه)",
        expandable: true,
        children: [],
      },

      {
        id: 22,
        code: "6",
        title: "درآمد",
        children: [
          {
            id: 23,
            code: "601",
            title: "درآمدهای عملیاتی",
            children: [
              {
                id: 24,
                code: "60101",
                title: "درآمد سفر (رفت به فروشگاه)",
                children: [],
              },
              {
                id: 25,
                code: "60102",
                title: "درآمد سفر (رفت به خریدار)",
                children: [],
              },
              {
                id: 26,
                code: "60103",
                title: "درآمد سفر (رفت به انبار)",
                children: [],
              },
              {
                id: 27,
                code: "60104",
                title: "درآمد سفر (رفت از انبار به فروشگاه)",
                children: [],
              },
              {
                id: 28,
                code: "60105",
                title: "درآمد سفر (رفت به انبار)",
                children: [],
              },
              {
                id: 29,
                code: "60106",
                title: "درآمد سفر (رفت از انبار به خریدار)",
                children: [],
              },
              {
                id: 30,
                code: "60107",
                title: "درآمد سفر (رفت از انبار به خریدار)",
                children: [],
              },
            ],
          },
          {
            id: 31,
            code: "602",
            title: "درآمدهای غیرعملیاتی",
            children: [
              {
                id: 32,
                code: "60201",
                title: "درآمد سفر (رفت از انبار به خریدار)",
                children: [],
              },
            ],
          },
        ],
      },

      {
        id: 33,
        code: "7",
        title: "قیمت تمام‌شده",
        expandable: true,
        children: [],
      },
      { id: 34, code: "8", title: "هزینه‌ها", expandable: true, children: [] },

      {
        id: 35,
        code: "9",
        title: "حساب‌های انتظامی",
        children: [
          {
            id: 36,
            code: "801",
            title: "حساب‌های انتظامی سفیر",
            children: [
              {
                id: 37,
                code: "80101",
                title: "سفر تحویل از فروشگاه",
                children: [],
              },
              {
                id: 38,
                code: "80102",
                title: "سفر تحویل از خریدار",
                children: [],
              },
              {
                id: 39,
                code: "80103",
                title: "سفر تحویل از انباردار",
                children: [],
              },
            ],
          },
          {
            id: 40,
            code: "802",
            title: "حساب‌های انتظامی فروشگاه",
            children: [
              { id: 41, code: "80201", title: "تحویل به سفیر", children: [] },
              { id: 42, code: "80202", title: "تحویل از خریدار", children: [] },
            ],
          },
          {
            id: 43,
            code: "803",
            title: "حساب‌های انتظامی انبار",
            children: [
              { id: 44, code: "80301", title: "تحویل از سفیر", children: [] },
            ],
          },
        ],
      },
    ],
  },
];

export default initialTree;
