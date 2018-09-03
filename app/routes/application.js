import Route from '@ember/routing/route';

export default Route.extend({

    subjectData:[],
    model(){
        var model={};
        model.subjectData=this.get('subjectData');
        return model;
    },

    actions:{
        fetchSubjects(dept,sem){
            let self = this;
            this.store.queryRecord('subject',{dept,sem}).then(function(res) {
                self.set('subjectData',res.subjectNames);
                self.refresh();
            })
        }
    }
});
