<template>
    <div class="modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Конструктор фильтра</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="my-4">
                        <div class="d-flex mb-2">
                            <div class="form-check align-self-center w-25">
                                <input v-model="checkedCheckbox" @click="statuses.statusName = !statuses.statusName"
                                       value="name" class="form-check-input" type="checkbox">
                                <label class="form-check-label">
                                    По наименованию
                                </label>
                            </div>
                            <input type="text" v-show="statuses.statusName" v-model="filters.name"
                                   class="form-control w-50 h-50 mx-4">
                        </div>
                        <div class="d-flex mb-2">
                            <div class="form-check align-self-center w-25">
                                <input v-model="checkedCheckbox"
                                       @click="statuses.statusCategory = !statuses.statusCategory" value="category"
                                       class="form-check-input" type="checkbox">
                                <label class="form-check-label">
                                    По категории
                                </label>
                            </div>
                            <input type="text" v-show="statuses.statusCategory" v-model="filters.category"
                                   class="form-control w-50 h-50 mx-4">
                        </div>
                        <div class="d-flex mb-2">
                            <div class="form-check align-self-center w-25">
                                <input v-model="checkedCheckbox" @click="statuses.statusWeight = !statuses.statusWeight"
                                       value="weight" class="form-check-input" type="checkbox">
                                <label class="form-check-label">
                                    По весу
                                </label>
                            </div>
                            <input type="text" v-model="filters.weight" v-show="statuses.statusWeight"
                                   class="form-control w-50 h-50 mx-4">
                        </div>
                        <div class="d-flex mb-2">
                            <div class="form-check align-self-center w-25">
                                <input v-model="checkedCheckbox"
                                       @click="statuses.statusCostPrice = !statuses.statusCostPrice" value="cost_price"
                                       class="form-check-input" type="checkbox">
                                <label class="form-check-label">
                                    По себестоимости
                                </label>
                            </div>
                            <input type="text" v-show="statuses.statusCostPrice" v-model="filters.cost_price"
                                   class="form-control w-50 h-50 mx-4">
                        </div>
                        <div class="d-flex mb-2">
                            <div class="form-check align-self-center w-25">
                                <input v-model="checkedCheckbox"
                                       @click="statuses.statusProductCondition = !statuses.statusProductCondition"
                                       value="product_condition" class="form-check-input" type="checkbox">
                                <label class="form-check-label">
                                    По состоянию продукта
                                </label>
                            </div>
                            <input type="text" v-show="statuses.statusProductCondition" v-model="filters.product_condition"
                                   class="form-control w-50 h-50 mx-4">
                        </div>
                        <div class="d-flex mb-2">
                            <div class="form-check align-self-center w-25">
                                <input v-model="checkedCheckbox"
                                       @click="statuses.statusCreatedAt = !statuses.statusCreatedAt" value="created_at"
                                       class="form-check-input" type="checkbox">
                                <label class="form-check-label">
                                    По дате добавления
                                </label>
                            </div>
                            <input type="text" v-show="statuses.statusCreatedAt" v-model="filters.created_at"
                                   class="form-control w-50 h-50 mx-4">
                        </div>
                    </div>
                    <div v-if="errorBool" class="alert alert-danger alert-dismissible fade show d-flex " role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                             class="bi bi-x-circle-fill m-lg-2 align-self-center" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                        <div class="align-self-center">{{ errorMessage }}</div>
                        <button type="button" class="btn-close align-self-center" @click="closeHandler"
                                data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" @click="createFilter" class="btn btn-primary" data-bs-dismiss="modal">Найти
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Отмена</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                checkedCheckbox: [],
                errorMessage:    "",
                errorBool:       false,
                statuses:        {
                    statusName:             false,
                    statusCategory:         false,
                    statusWeight:           false,
                    statusCostPrice:        false,
                    statusProductCondition: false,
                    statusCreatedAt:        false
                },
                filters:         {
                    name:              null,
                    category:          null,
                    weight:            null,
                    cost_price:        null,
                    product_condition: null,
                    created_at:        null
                }
            }
        },
        methods: {

            async createFilter() {
                if (this.checkedCheckbox.length === 0) {
                    this.errorMessage = "Вы не выбрали фильтр. Поиск не возможен"
                    this.errorBool    = true
                    return false
                }

                const createResponseData = {}

                for (let idx in this.checkedCheckbox) {
                    for (let key in this.filters) {
                        if (this.checkedCheckbox[idx] === key) {
                            createResponseData[key] = this.filters[key]
                        }
                    }
                }

                await this.$store.dispatch('filter', createResponseData)

                this.$emit('array', this.$store.getters.dataTable)
            },
            closeHandler() {
                this.errorBool = false
            }
        }

    }
</script>