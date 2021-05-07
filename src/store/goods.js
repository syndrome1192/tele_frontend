import axios from 'axios'

export default {
    state:     {
        dataTable:   [],
        selectTable: [],
        totalPage: 0,
        perPage: 0

    },
    actions:   {
        async goods({commit}, data) {
            await axios.get('http://127.0.0.1:8000/api/goods', data).then(response => {
                console.log(response.data.data.data)
                commit('dataSuccess', response.data.data.data)
                commit('pagination', response.data.data)
            }).catch(e => {
                console.log(e)
            })
        },
        async filter({commit}, payload) {
            const instance = axios.create({
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await instance.post('http://127.0.0.1:8000/api/filter', payload).then(response => {
                commit('dataSuccess', response.data.data)
            }).catch(e => {
                console.log(e)
            })
        },
        async select({commit}) {
            await axios.get('http://127.0.0.1:8000/api/goods').then(response => {
                commit('dataSuccess', response.data.data.data)
            }).catch(e => {
                console.log(e)
            })
        },
    },
    mutations: {
        dataSuccess(state, data) {
            state.dataTable   = data
            state.selectTable = data
        },
        pagination(state, data) {
            state.totalPage = data.total
            state.perPage = data.per_page
        }
    },
    getters:   {
        dataTable:   state => state.dataTable,
        selectTable: state => state.selectTable,
        totalPage: state => state.totalPage,
        perPage: state => state.perPage
    }
}