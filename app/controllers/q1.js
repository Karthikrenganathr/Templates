import EmberObject, { computed } from '@ember/object';
import Controller from '@ember/controller';

const Person = EmberObject.extend({
  firstName: '',
  lastName: '',

  fullName: computed('firstName', 'lastName', function () {
    return `${this.firstName} ${this.lastName}`.trim();
  })
});

export default Controller.extend({
  person: Person.create(),
  actions: {
    updateName() {
      let firstNameSelector=document.querySelector('.firstName');
      let lastNameSelector=document.querySelector('.lastName');
      let updateFirstName=firstNameSelector.value.trim();
      let updateLastName=lastNameSelector.value.trim();
      const spaceFirst=updateFirstName.includes(' ');
      const spaceLast=updateLastName.includes(' ');
      if(updateFirstName!='' &&  !spaceFirst)
      {
        this.person.set('firstName',updateFirstName);
      }
      if(updateLastName!='' &&  !spaceLast)
       {
          this.person.set('lastName',updateLastName);
       }
       if(spaceFirst)
       {
          alert("first name shouldnt contain space");
       }
       if(spaceLast)
       {
        alert("last name should not contain space");
       }
       firstNameSelector.value="";
       lastNameSelector.value="";
    }
  }
});

