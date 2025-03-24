import EmberObject, { computed } from '@ember/object';
import Controller from '@ember/controller';

const StudentList = EmberObject.extend({
  students: ['Karthik', 'Nakul', 'Goutham'],
  sortedStudents: computed('students.[]', function () {
    return this.students.slice().sort(); 
  })
});

export default Controller.extend({
  clgStudents: StudentList.create(),
  actions: {
    addStudent() {
      let newStudent=document.querySelector(".addStudentName").value.trim();
      if (newStudent!="") {
        this.clgStudents.students.pushObject(newStudent);
      }
    },
    removeStudent(student) {
      this.clgStudents.students.removeObject(student);
    }
  }
});
