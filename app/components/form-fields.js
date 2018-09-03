import Component from '@ember/component';
import {dept} from '../client-data/form-data';
import {semester} from '../client-data/form-data';

export default Component.extend({
    classNames:['form-transition'],
    deptName:"",
    semesterNum:"",
    depts:dept,
    semesters:semester,
    didInsertElement(){
        this.$('.dropdown').dropdown();
        this.$('.blurring').dimmer({
            on: 'hover'
          });
    },

    checkValid(){
        return (this.get('deptName')!="" && this.get('semesterNum')!="")?true:false;
    },

    actions:{
        fetchData(data,dropName){
            this.set(`${dropName}`,data);          
            if(this.checkValid()){   
                console.log(this.get('subjectData'));
                this.sendAction('fetchSubjects',this.get('deptName'),this.get('semesterNum'));
            }
        }
    }
});
 