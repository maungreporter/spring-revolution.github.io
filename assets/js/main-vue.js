console.log("martyrList" + martyrList);
Vue.component('martyr-list', {
    props: ['todo'],
    template: '<li>{{ todo[0] }}</li>'
  })

var martyrVM = new Vue({
    el:'#martyr',
    data:{
        martyrList: martyrList,
        hello:'hello'
    }
})