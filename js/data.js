/*
'sol', 0
'bori', 1
'iceTea', 2
'fruit', 3
'fanta', 4
'spark', 5
'bubble', 6
'coke', 7
'milkTea', 8
'sikHye', 9
'yogurt', 10
'cider', 11
'iceW', 12
'milk', 13
'coffee', 14
'maeSil', 15
*/

const qnaList = [
  {
    q: '1. 평소 친구들과 있는 시간이 많나요?',
    a: [
      { answer: 'a. 네, 일주일에 5번 정도?', type: [2, 3, 4, 7, 8, 11, 12, 14] },
      { answer: 'b. 많을 때도 있고, 없을 때도 있고', type: [0, 5, 6, 9, 10, 15] },
      { answer: 'c. ... 흑', type: [1, 13] },
    ]
  },
  {
    q: '2. 스트레스를 받을 때 어떻게 하나요?',
    a: [
      { answer: 'a. 친구에게 연락해요.', type: [0, 2, 3, 4, 5, 6, 7, 8, 11, 12, 14] },
      { answer: 'b. 혼자 방에서 게임을 합니다.', type: [13, 15] },
      { answer: 'c. 그냥 자요 zZZ', type: [1, 9, 10] },
    ]
  },
  {
    q: '3. 조별과제를 할 때 추구하는 방법은?',
    a: [
      { answer: 'a. 무조건 빨리빨리', type: [0, 2, 3, 4, 7, 8, 11] },
      { answer: 'b. 일단 먼저 계획을 세우고 하지 뭐', type: [5, 6, 9, 10, 12, 14, 15] },
      { answer: 'c. 최소 3번은 계획에 대해서 생각합니다.', type: [1, 13] }
    ]
  },
  {
    q: '4. 시험을 보는데 모르는 문제가 나오면?',
    a: [
      { answer: 'a. 풀릴 때까지 계속 고민한다.', type: [1, 5, 9, 13, 14] },
      { answer: 'b. 일단 다음 문제부터', type: [0, 2, 3, 4, 7, 11] },
      { answer: 'c. 지금 이 문제를 푸는게 다음 문제부터 풀 때보다 더 좋은지 생각해본다. ', type: [6, 8, 10, 12, 15] },
    ]
  },
  {
    q: '5. 쉴 때 무엇을 주로 하나요?',
    a: [
      { answer: 'a. 친구와 놀기', type: [0, 2, 3, 4, 7, 8, 9] },
      { answer: 'b. 독서, 퍼즐 정도??', type: [1, 9, 10, 13, 15]},
      { answer: 'c. 침대에서 뒹굴뒹굴', type: [5, 6, 11, 12, 14] },
    ]
  },

  {
    q: '6. 어느 때가 가장 중요하나요?',
    a: [
      { answer: 'a. 지금 이 순간', type: [0, 2, 3, 5, 9, 15] },
      { answer: 'b. 미래', type: [1, 4, 7, 8, 12] },
      { answer: 'c. 그러게요.', type: [6, 10, 11, 13, 14] },
    ]
  },
  {
    q: '7. 안녕',
    a: [
      { answer: 'a. 안녕', type: [1, 5, 7, 8, 12, 13, 15] },
      { answer: 'b. 뭐지', type: [2, 3, 9, 10] },
      { answer: 'c. 응?', type: [0, 4, 6, 11, 14] },
    ]
  },
  {
    q: '8. 자신이 생각하는 성격은 무엇인가요?',
    a: [
      { answer: 'a. 친절하고 쉽게 화를 내지 않는다.', type: [1, 2, 3, 4, 7, 8, 15] },
      { answer: 'b. 화를 잘 낸다.', type: [0, 5, 6, 9] },
      { answer: 'c. a와 b의 중간 정도', type: [10, 11, 12, 13, 14] },
    ]
  },
  {
    q: '9. 무슨 과목을 좋아하나요?',
    a: [
      { answer: 'a. 국어, 사회, 영어', type: [1, 3, 5, 7, 9, 11] },
      { answer: 'b. 수학, 과학', type: [2, 4, 6, 8, 10] },
      { answer: 'c. 활동적인 과목', type: [0, 12, 13, 14] },
    ]
  },
  {
    q: '10. 당신이 천재라고 생각하나요?',
    a: [
      { answer: 'a. 나는 태어났을 때 부터 천재로 인정받아온 사람이지 후훗.', type: [1, 2, 3, 4] },
      { answer: 'b. 흠... 살짝 potential(잠재력)이 있는 정도??', type: [5, 6, 7, 8] },
      { answer: 'c. 절대 네버 아닙니다.', type: [9, 10, 11, 12, 13, 14, 15] },
    ]
  },
  {
    q: '11. 공부습관은?',
    a: [
      { answer: 'a. 형광펜 3개는 필수지. 펜도 있으면 좋고.', type: [3, 6, 9, 12, 15] },
      { answer: 'b. 연필(또는 샤프), 지우개, 형광펜 하나면 다 되지', type: [2, 4, 8, 14] },
      { answer: 'c. 필통을 보면 항상 뭐 하나가 빠짐', type: [0, 1, 5, 7, 10, 11, 13] },
    ]
  },
  {
    q: '12. 마지막으로 장래희망은?',
    a: [
      { answer: 'a. 안정적이고 이상적인 직업', type: [1, 3, 5, 9] },
      { answer: 'b. 재밌고 새로운 직업', type: [2, 4, 6, 8] },
      { answer: 'c. 취업하기 쉬운 직업', type: [0, 7, 10, 11, 12, 13, 14, 15] },
    ]
  }
]

const infoList = [
  {
    name: '뛰어난 상황 적응력과 논리적인 <솔의눈>',
    desc: '백과사전형인 당신! 논리적이고 뛰어난 상황 적응력을 가지고 있습니다.'
  },
  {
    name: '따뜻한 감성의 <보리차>',
    desc: '성인군자형인 당신! 따뜻한 감성을 가진 겸손한 사람입니다.'
  },
  {
    name: '우호적인 성격의 <아이스티>',
    desc: '사교형인 당신! 분위기를 고조시키는 우호적인 성격이랍니다.'
  },
  {
    name: '다양함을 선호하는 <생과일 주스>',
    desc: '활동가형인 당신! 친구, 운동, 음식 등 다양함을 선호한답니다.'
  },
  {
    name: '전체를 조합하는 <환타>',
    desc: '과학자형인 당신! 전체를 조합해 비전을 제시하는 사람입니다.'
  },
  {
    name: '전체를 조합하는 <탄산수>',
    desc: '과학자형인 당신! 전체를 조합해 비전을 제시하는 사람입니다.' //똑같음
  },
  {
    name: '풍부한 상상력을 지닌 <버블티>',
    desc: '발명가형인 당신! 풍부한 상상력으로 새로운 것에 도전합니다.'
  },
  {
    name: '활력적으로 인도하는 <콜라>',
    desc: '지도자형인 당신! 비전을 갖고 타인을 활력적으로 인도합니다.'
  },
  {
    name: '이상적인 세상을 만드는 <밀크티>',
    desc: '잔다르크형인 당신! 이상적인 세상을 만들어가는 사람들 중 한 명 입니다.'
  },
  {
    name: '통찰력을 가진 <식혜>',
    desc: '예언자형인 당신! 사람에 관한 뛰어난 통찰력을 가진 사람입니다.'
  },
  {
    name: '열정적인 <요구르트>',
    desc: '스파크형인 당신! 열정적으로 새 관계를 만드는 사람입니다.'
  },
  {
    name: '다같이 협동하는 <사이다>',
    desc: '언변능숙형인 당신! 타인의 성장을 도모하고 협동하는 사람입니다.'
  },
  {
    name: '집요한 <얼음물>',
    desc: '소금형인 당신! 한 번 시작한 일은 끝까지 해내는 성격입니다.'
  },
  {
    name: '온화한 <우유>',
    desc: '권력형인 당신! 성실하고 온화하며 협조를 잘하는 사람입니다.'
  },
  {
    name: '사무적인 <커피>',
    desc: '사업가형인 당신! 사무적, 실용적, 현실적인 스타일입니다.'
  },
  {
    name: '현실감있는 <매실차>',
    desc: '친선도모형인 당신! 친절, 현실감을 바탕으로 타인에게 봉사하는 사람입니다.'
  },
]
