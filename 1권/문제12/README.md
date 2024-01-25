클래스 - 생성자 - 객체생성

생성자 (Constructor)

    constructor(health, mana, armor) {
        this.health = health
        this.mana = mana
        this.armor = armor
    }
health, mana, armor 세 가지 속성을 받아와서 객체의 속성으로 설정.
this 키워드로 현재 인스턴스의 속성으로 값을 할당

attack 메서드

    attack() { console.log('파이어볼') }

attack 메서드는 Wizard 클래스에 속하는 메서드
메서드가 호출되면 '파이어볼' 콘솔에 출력