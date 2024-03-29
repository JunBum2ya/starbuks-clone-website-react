import MainMenuItemProps from "../interface/MainMenuItemProps";

export const headerData:MainMenuItemProps[] = [
  {
    name: "COFFEE",
    contents: [
      {name: "커피", contents: ["스타벅스 원두", "스타벅스 비아", "스타벅스 오리가미"]},
      {name: "에스프레소 음료", contents: ["도피오","에스프레소 마끼아또","아메리카노","마키아또","카푸치노","라떼","모카","리스트레또 비안코"]},
      {name: "커피 이야기", contents: ["스타벅스 로스트 스팩트럼","최상의 아라비카 원두","한 잔의 커피가 완성되기까지","클로버® 커피 추출 시스템"]},
      {name: "최상의 커피를 즐기는 법", contents: ["커피 프레스","푸어 오버","아이스 푸어 오버","커피 메이커","리저브를 매장에서 다양하게 즐기는 법"]}
    ],
    textureContents: [
      {title: "나와 어울리는 커피 찾기", detail: "스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.", isNew: false},
      {title: "최상의 커피를 즐기는 법", detail: "여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.", isNew: false}
    ]
  },
  {
    name: "MENU",
    contents: [
      {name: "음료", contents: ["콜드 브루","브루드 커피","에스프레소","프라푸치노","블렌디드 음료","스타벅스 피치오","티(티바나)","기타 제조 음료","스타벅스 주스(병음료)"]},
      {name: "푸드", contents: ["베이커리","케익","샌드위치 & 샐러드","샌드위치 & 샐러드","과일 & 요거트","스낵 & 미니 디저트","아이스크림"]},
      {name: "상품", contents: ["머그","글라스","플라스틱 텀블러","스테인리스 텀블러","보온병","액세서리","커피 용품","패키지 티(티바나)"]},
      {name: "카드", contents: ["실물카드","e-Gift 카드"]},
      {name: "메뉴 이야기", contents: ["콜드 브루","스타벅스 티바나"]}
    ],
    textureContents: [
      {title: "스타벅스 티바나", detail: "다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의 티를 선보입니다.", isNew: true}
    ]
  },
  {
    name: "STORE",
    contents: [
      {name: "매장 찾기", contents: ["퀵 검색","지역 검색","My 매장"]},
      {name: "매장 이야기", contents: ["청담스타","티바나 인스파이어드 매장","파미에파크"]}
    ],
    textureContents: [
      {title: "매장 찾기",detail: "보다 빠르게 매장을 찾아보세요.", isNew: false},
      {title: "청담스타",detail: "스타벅스 1,000호점인 청담스타점을 만나보세요.", isNew: true}
    ]
  },
  {
    name: "RESPONSIBILITY",
    contents: [
      {name: "지역 사회 참여 활동", contents: ["회망배달 캠페인","재능기부 카페 소식","커뮤니티 스토어","청년인재 양성","우리 농산물 사랑 캠페인","우리 문화 지키기"]},
      {name: "환경보호 활동", contents: ["환경 발자국 줄이기","일회용 컵 없는 매장","커피 원두 재활용"]},
      {name: "윤리 구매", contents: ["윤리적 원두 구매","공정무역 인증","커피 농가 지원 활동"]},
      {name: "글로벌 사회 공헌", contents: ["윤리경영 보고서","스타벅스 재단","지구촌 봉사의 달"]}
    ],
    textureContents: [
      {title: "커피원두 재활용",detail: "스타벅스 커피 원두를 재활용 해보세요.", isNew: false}
    ]
  },
  {
    name: "MY STARBUCKS REWARDS",
    contents: [
      {name: "마이 스타벅스 리워드", contents: ["마이 스타벅스 리워드 소개","등급 및 혜택","스타벅스 별","자주하는 질문"]},
      {name: "스타벅스 카드", contents: ["스타벅스 카드 소개","스타벅스 카드 갤러리","등록 및 조회","충전 및 이용안내","분실신고/환불신청","자주하는 질문"]},
      {name: "스타벅스 카드 e-Gift", contents: ["스타벅스 카드 e-Gift 소개","이용안내","선물하기","자주하는 질문"]}
    ],
    textureContents: [
      {title: "스타벅스 카드 등록하기", detail: "카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.", isNew: false}
    ]
  },
  {
    name: "WHAT'S NEW",
    contents: [
      {name: "프로모션 & 이벤트", contents: ["전체","스타벅스 카드","마이 스타벅스 리워드","온라인","2017 스타벅스 플래너"]},
      {name: "새소식", contents: ["전체","상품 출시","스타벅스의 문화","스타벅스 사회공헌","스타벅스 카드출시"]},
      {name: "매장별 이벤트", contents: ["일반 매장","신규 매장"]}
    ],
    textureContents: [
      {title: "매장별 이벤트", detail: "스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.", isNew: false},
      {title: "소셜 스타벅스", detail: "다양한 스타벅스 SNS 채널을 통해 스타벅스를 만나보세요!", isNew: false}
    ]
  }
];

export const noticeData:string[] = [
  "크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내",
  "[당첨자 발표] 2023 스타벅스 플래너 영수증 이벤트",
  "스타벅스 카드 이용약관 개정 안내 페이스북 공유하기 새창",
  "브런치 유어 웨이 별 적립 혜택 안내(업데이트) 페이스북 공유하기 새창"
];