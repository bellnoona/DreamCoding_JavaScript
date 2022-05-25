// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.lastName} ${this.firstName}`;
  }
  //   fullName() {
  //     return `${this.lastName} ${this.firstName}`;
  //   }
}
const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName);
