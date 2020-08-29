export interface Subject {
    registerObserver(o: Observer): void // 구독자를 추가한다
    removeObserver(o: Observer): void // 구독 해지한 사람을 구독자 목록에서 제외시킨다
    notifyObserver(): void // 구독자들에게 새로 업데이트된 정보를 전달한다
}

// void 는 아무것도 반환하지 않는 함수, return 값이 없는 함수

export interface Observer {
    update(t: number, h: number, p: number): void // 새로 전달받은 정보를 자기 자신에게 반영한다
}

