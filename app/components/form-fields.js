import Component from '@ember/component';
import {dept} from '../client-data/form-data';
import {semester} from '../client-data/form-data';
import {subject} from '../client-data/form-data';

export default Component.extend({
    classNames:['form-transition'],
    deptName:"",
    semesterNum:"",
    depts:dept,
    semesters:semester,
    didInsertElement(){
        // this.$(.)
        this.$('.dropdown').dropdown();
        $('.card').dimmer({
            on: 'hover'
          });
    },

    checkValid(){
        return (this.get('deptName')!="" && this.get('semesterNum')!="")?true:false;
    },

    fetchSubjects(){
        // Ember.$.ajax();
        this.set('subjectData',subject);
        this.set('')
        // $('.form-transition').transition('fly left');
    },

    actions:{
        fetchData(data,dropName){
            this.set(`${dropName}`,data);          
            if(this.checkValid()){   
                this.fetchSubjects();
            }
        }
    }
});
 