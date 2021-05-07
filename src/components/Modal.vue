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
                            <div class="form-check align-self-center w-50">
                                <input v-model="checkedCheckbox" :class="{'is-invalid': $v.filters.name.$error}"
                                       @click="statuses.statusName = !statuses.statusName"
                                       value="name" class="form-check-input" type="checkbox">
                                <label class="form-check-label">
                                    По наименованию
                                </label>
                            </div>
                            <div class="form-control w-25 h-25" style="border: none !important;"></div>
                            <input type="text" v-show="statuses.statusName"
                                   :class="{'is-invalid': $v.filters.name.$error}" v-model="filters.name"
                                   class="form-control w-50 h-50 mx-4"
                                   style="margin-right: 22px !important; margin-left: 32px;">
                        </div>
                        <div class="d-flex mb-2">
                            <div class="form-check align-self-center w-50">
                                <input v-model="checkedCheckbox"
                                       @click="statuses.statusCategory = !statuses.statusCategory"
                                       :class="{'is-invalid': $v.filters.category.value.$error}" value="category"
                                       class="form-check-input" type="checkbox">
                                <label class="form-check-label">
                                    По категории
                                </label>
                            </div>
                            <select v-model="filters.category.value"
                                    :class="{'is-invalid': $v.filters.category.value.$error}"
                                    v-show="statuses.statusCategory"
                                    class="form-select w-25 h-25">
                                <option v-for="cat in dataCategory" :key="cat" :value="cat">{{cat}}</option>
                            </select>
                            <div class="form-control w-50 h-50 mx-4" style="border: none !important;"></div>
                        </div>
                        <div class="d-flex mb-2">
                            <div class="form-check align-self-center w-50">
                                <input v-model="checkedCheckbox" :class="{'is-invalid': $v.filters.weight.value.$error}"
                                       @click="statuses.statusWeight = !statuses.statusWeight"
                                       value="weight" class="form-check-input" type="checkbox">
                                <label class="form-check-label">
                                    По весу
                                </label>
                            </div>
                            <select v-model="filters.weight.quote"
                                    :class="{'is-invalid': $v.filters.weight.quote.$error}"
                                    v-show="statuses.statusWeight"
                                    class="form-select w-25">
                                <option value="=">=</option>
                                <option value=">"> ></option>
                                <option value="<"> <</option>
                            </select>
                            <input type="text" v-model="filters.weight.value"
                                   :class="{'is-invalid': $v.filters.weight.value.$error}"
                                   v-show="statuses.statusWeight"
                                   class="form-control w-50 h-50 mx-4">
                        </div>
                        <div class="d-flex mb-2">
                            <div class="form-check align-self-center w-50">
                                <input v-model="checkedCheckbox"
                                       :class="{'is-invalid': $v.filters.cost_price.value.$error}"
                                       @click="statuses.statusCostPrice = !statuses.statusCostPrice" value="cost_price"
                                       class="form-check-input" type="checkbox">
                                <label class="form-check-label">
                                    По себестоимости
                                </label>
                            </div>
                            <select v-model="filters.cost_price.quote"
                                    :class="{'is-invalid': $v.filters.cost_price.quote.$error}"
                                    v-show="statuses.statusCostPrice"
                                    class="form-select w-25 h-25" aria-label="Default select example">
                                <option value="=">=</option>
                                <option value=">"> ></option>
                                <option value="<"> <</option>
                            </select>
                            <input type="text" v-show="statuses.statusCostPrice"
                                   :class="{'is-invalid': $v.filters.cost_price.value.$error}"
                                   v-model="filters.cost_price.value"
                                   class="form-control w-50 h-50 mx-4">
                        </div>
                        <div class="d-flex mb-2">
                            <div class="form-check align-self-center w-50">
                                <input v-model="checkedCheckbox"
                                       :class="{'is-invalid': $v.filters.product_condition.value.$error}"
                                       @click="statuses.statusProductCondition = !statuses.statusProductCondition"
                                       value="product_condition" class="form-check-input" type="checkbox">
                                <label class="form-check-label">
                                    По состоянию продукта
                                </label>
                            </div>
                            <select v-model="filters.product_condition.value" v-show="statuses.statusProductCondition"
                                    :class="{'is-invalid': $v.filters.product_condition.value.$error}"
                                    class="form-select w-25" aria-label="Default select example">
                                <option v-for="dc in dataProductCondition" :key="dc" :value="dc">{{dc}}</option>
                            </select>
                            <div class="form-control w-50 h-50 mx-4" style="border: none !important;"></div>
                        </div>
                        <div class="d-flex mb-2">
                            <div class="form-check align-self-center w-50">
                                <input v-model="checkedCheckbox"
                                       :class="{'is-invalid': $v.filters.created_at.value.$error}"
                                       @click="statuses.statusCreatedAt = !statuses.statusCreatedAt" value="created_at"
                                       class="form-check-input" type="checkbox">
                                <label class="form-check-label">
                                    По дате добавления
                                </label>
                            </div>
                            <select v-model="filters.created_at.quote" v-show="statuses.statusCreatedAt"
                                    :class="{'is-invalid': $v.filters.created_at.quote.$error}"
                                    class="form-select w-25 h-25" aria-label="Default select example">
                                <option value="=">=</option>
                                <option value=">"> ></option>
                                <option value="<"> <</option>
                            </select>
                            <input type="datetime-local" v-show="statuses.statusCreatedAt"
                                   :class="{'is-invalid': $v.filters.created_at.value.$error}"
                                   v-model="filters.created_at.value"
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
                    <button type="button" @click="createFilter" class="btn btn-primary">Найти
                    </button>
                    <button type="button" @click="clear" class="btn btn-primary">Сбросить фильтры</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {required} from "vuelidate/lib/validators";

    export default {
        data() {
            return {
                dataCategory:         [],
                dataProductCondition: [],
                checkedCheckbox:      [],
                errorMessage:         "",
                errorBool:            false,
                statuses:             {
                    statusName:             false,
                    statusCategory:         false,
                    statusWeight:           false,
                    statusCostPrice:        false,
                    statusProductCondition: false,
                    statusCreatedAt:        false
                },
                filters:              {
                    name:              "",
                    category:          {
                        tableName: 'category',
                        quote:     "=",
                        value:     ""
                    },
                    weight:            {
                        tableName: 'weight',
                        quote:     "",
                        value:     ""
                    },
                    cost_price:        {
                        tableName: 'cost_price',
                        quote:     "",
                        value:     ""
                    },
                    product_condition: {
                        tableName: 'product_condition',
                        quote:     "=",
                        value:     ""
                    },
                    created_at:        {
                        tableName: 'created_at',
                        quote:     "",
                        value:     ""
                    }
                }
            }
        },
        validations() {
            return {
                filters: {
                    name:              this.statuses.statusName ? {required} : {},
                    category:          {
                        value: this.statuses.statusCategory ? {required} : {}
                    },
                    weight:            {
                        quote: this.statuses.statusWeight ? {required} : {},
                        value: this.statuses.statusWeight ? {required} : {},
                    },
                    cost_price:        {
                        quote: this.statuses.statusCostPrice ? {required} : {},
                        value: this.statuses.statusCostPrice ? {required} : {},
                    },
                    product_condition: {
                        value: this.statuses.statusProductCondition ? {required} : {}
                    },
                    created_at:        {
                        quote: this.statuses.statusCreatedAt ? {required} : {},
                        value: this.statuses.statusCreatedAt ? {required} : {},
                    }
                }
            }
        },
        mounted() {
            this.getSelectData()
        },
        methods: {
            async getSelectData() {
                await this.$store.dispatch('select')
                this.dataCategory         = new Set(this.$store.getters.selectTable.map(item => item.category))
                this.dataProductCondition = new Set(this.$store.getters.selectTable.map(item => item.product_condition))
            },

            async createFilter() {
                if (this.checkedCheckbox.length === 0) {
                    this.errorMessage = "Вы не выбрали фильтр. Поиск не возможен"
                    this.errorBool    = true
                    return false
                }

                switch (true) {
                    case this.$v.filters.name.$invalid:
                        this.$v.filters.name.$touch()
                        return false
                    case this.$v.filters.category.value.$invalid:
                        this.$v.filters.category.value.$touch()
                        return false
                    case (
                        this.$v.filters.weight.value.$invalid && this.$v.filters.weight.quote.$invalid
                    ):
                        this.$v.filters.weight.value.$touch()
                        this.$v.filters.weight.quote.$touch()
                        return false
                    case (
                        this.$v.filters.cost_price.value.$invalid && this.$v.filters.cost_price.quote.$invalid
                    ):
                        this.$v.filters.cost_price.value.$touch()
                        this.$v.filters.cost_price.quote.$touch()
                        return false
                    case this.$v.filters.product_condition.value.$invalid:
                        this.$v.filters.product_condition.value.$touch()
                        return false
                    case (
                        this.$v.filters.created_at.value.$invalid && this.$v.filters.created_at.quote.$invalid
                    ):
                        this.$v.filters.created_at.value.$touch()
                        this.$v.filters.created_at.quote.$touch()
                        return false
                }

                const createResponseData = {}

                for (let idx in this.checkedCheckbox) {
                    for (let key in this.filters) {
                        if (this.checkedCheckbox[idx] === key) {
                            if (typeof this.filters[key] === typeof {}) {
                                createResponseData[key] = Object.values(this.filters[key])
                            } else {
                                createResponseData[key] = this.filters[key]
                            }
                        }
                    }
                }

                await this.$store.dispatch('filter', createResponseData)

                this.$emit('array', this.$store.getters.dataTable)
            },

            async clear() {
                this.checkedCheckbox                     = []
                this.statuses.statusProductCondition     = false
                this.statuses.statusCreatedAt            = false
                this.statuses.statusCostPrice            = false
                this.statuses.statusCategory             = false
                this.statuses.statusName                 = false
                this.statuses.statusWeight               = false
                this.filters.name                        = ""
                this.filters.category.tableName          = 'category'
                this.filters.category.quote              = "="
                this.filters.category.value              = ""
                this.filters.weight.tableName            = 'weight'
                this.filters.weight.quote                = ""
                this.filters.weight.value                = ""
                this.filters.cost_price.tableName        = 'cost_price'
                this.filters.cost_price.quote            = ""
                this.filters.cost_price.value            = ""
                this.filters.product_condition.tableName = 'product_condition'
                this.filters.product_condition.quote     = "="
                this.filters.product_condition.value     = ""
                this.filters.created_at.tableName        = 'created_at'
                this.filters.created_at.quote            = ""
                this.filters.created_at.value            = ""
                this.$v.$reset()
                await this.$store.dispatch('goods')
                this.$emit('dataRes', this.$store.getters.dataTable)
            },

            closeHandler() {
                this.errorBool = false
            }
        }

    }
</script>