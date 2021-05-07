<template>
    <div class="bodyTable mt-4">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th scope="col">
                    <div class="d-flex justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6c757d"
                             class="align-self-center bi bi-funnel-fill" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                        </svg>
                        <p class="text-secondary m-lg-2">ID</p>
                    </div>
                </th>
                <th scope="col">
                    <div class="d-flex justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6c757d"
                             class="align-self-center bi bi-funnel-fill" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                        </svg>
                        <p class="text-secondary m-lg-2">Наименование</p>
                    </div>
                </th>
                <th scope="col">
                    <div class="d-flex justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6c757d"
                             class="align-self-center bi bi-funnel-fill" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                        </svg>
                        <p class="text-secondary m-lg-2">Артикул</p>
                    </div>
                </th>
                <th scope="col">
                    <div class="d-flex justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6c757d"
                             class="align-self-center bi bi-funnel-fill" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                        </svg>
                        <p class="text-secondary m-lg-2">Категория</p>
                    </div>
                </th>
                <th scope="col">
                    <div class="d-flex justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6c757d"
                             class="align-self-center bi bi-funnel-fill" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                        </svg>
                        <p class="text-secondary m-lg-2">Вес</p>
                    </div>
                </th>
                <th scope="col">
                    <div class="d-flex justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6c757d"
                             class="align-self-center bi bi-funnel-fill" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                        </svg>
                        <p class="text-secondary m-lg-2">Себестоимость</p>
                    </div>
                </th>
                <th scope="col">
                    <div class="d-flex justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6c757d"
                             class="align-self-center bi bi-funnel-fill" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                        </svg>
                        <p class="text-secondary m-lg-2">Состояние продукта</p>
                    </div>
                </th>
                <th scope="col">
                    <div class="d-flex justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6c757d"
                             class="align-self-center bi bi-funnel-fill" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                        </svg>
                        <p class="text-secondary m-lg-2">Дата добавления</p>
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(good, idx) in table" :key="good.id">
                <th scope="row">{{good.id}}</th>
                <td>{{good.name}}</td>
                <td>{{good.vendor_code}}</td>
                <td>{{good.category}}</td>
                <td>{{good.weight}}</td>
                <td>{{good.cost_price}}</td>
                <td>{{good.product_condition}}</td>
                <td>{{good.created_at}}</td>
            </tr>

            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        props: {
            table: Array
        }
    }
</script>