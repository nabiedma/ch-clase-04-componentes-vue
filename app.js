Vue.component("titulo", {
    props: ["titulo"],
    template: `
    <h1>Acá esta el Título, que es un componente</h1>
    `
})

var app = new Vue({
    el: "#app",
    data: {

    }
})