import axios from 'axios'

export default {
    state: {
        dataTable: []
    },
    actions: {
        async goods({commit}) {
            await axios.get('http://127.0.0.1:8000/api/goods').then(response => {
                commit('dataSuccess', response.data.data)
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
        }
    },
    mutations: {
        dataSuccess(state, data) {
            state.dataTable = data
        }
    },
    getters: {
        dataTable: state => state.dataTable
    }
}