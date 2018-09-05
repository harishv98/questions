import Component from '@ember/component';

export default Component.extend({
    actions:{
        add(part){
            $('.ui.longer.modal').modal('show');
        }
    }
});
