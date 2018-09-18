import Component from '@ember/component';
import  Ember  from 'ember';
import {questContent} from '../client-data/form-data'

export default Component.extend({
    subjectUnits:['Unit-1','Unit-2','Unit-3','Unit-4','Unit-5'],
    twoMark:['ques'],
    actions:{
        add(part){
            $('.ui.longer.modal').modal('show');
            this.set('questContent',questContent);
        },
        fetchQuestion(unit){
            var url = '';
            Ember.$.ajax({
                url: url,
                type: 'GET',
                accepts: 'application/json',
                success: function(data) {
                    
                },
                error: function() {
                    console.log('DEBUG: GET Enquiries Failed');
                }
            });
        },
        addQuestion(content){
            let twoMarks = this.get('twoMark');
            console.log(twoMarks);
            twoMarks.push(content);
            this.set('twoMark',twoMarks);
        }
    }
});
