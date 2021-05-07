<template>
    <div>
        <div class="mainBody">
            <div class="d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="cornflowerblue"
                     class="align-self-center bi bi-funnel-fill" viewBox="0 0 16 16">
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                </svg>
                <a class="Link mx-2 btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Создать фильтр</a>
            </div>
            <div v-if="loader" class="d-flex justify-content-center mt-4">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Загрузка...</span>
                </div>
            </div>
            <!-- Table components -->
            <Table v-else :loading="loader" :table="dataTable"></Table>
            <Paginate
                    :page-count='totalPage'
                    :click-handler='clickHandler'
                    :prev-text="'Пред'"
                    :container-class="'pagination'"
                    :next-text="'След'"
                    :prev-class="'page-item'"
                    :prev-link-class="'page-link'"
                    :next-link-class="'page-link'"
                    :next-class="'page-item'"
                    :page-class="'page-item'"
                    :active-class="'active'"
                    :page-link-class="'page-link'"
            />
        </div>
        <!-- Modal components -->
        <Modal @array="getObject" @dataRes="getDataInModal" :data="dataTable"></Modal>
    </div>
</template>

<script>


    export default {
        name:       'Home',
        components: {
            Table: () => import('@/components/Table'),
            Modal: () => import('@/components/Modal')
        },
        data() {
            return {
                dataTable: [],
                loader:    false,
                perPage: 10,
                currentPage: 1,
                totalPage: 0
            }
        },
        mounted() {
            this.getDataTable()
        },
        methods:    {
            async getDataTable() {
                this.loader = true
                await this.$store.dispatch('goods', {
                    params: {
                        page:    this.currentPage,
                        per_page: this.perPage
                    }
                })
                this.totalPage = Math.ceil(this.$store.getters.totalPage / this.$store.getters.perPage)
                this.dataTable = this.$store.getters.dataTable
                // сделал исскуственную задержку на 2 секунды
                setTimeout(this.loaderFalse, 2000)
            },
            loaderFalse() {
                this.loader = false
            },
            getObject(arr) {
                this.loader    = true
                this.dataTable = arr
                setTimeout(this.loaderFalse, 2000)
            },
            getDataInModal(arr) {
                this.loader    = true
                this.dataTable = arr
                setTimeout(this.loaderFalse, 2000)
            },
            clickHandler(page) {
                this.currentPage = page
                this.getDataTable()
            }
        }
    }
</script>
<style lang="scss">
    .mainBody {
        max-width: 1280px;
        margin: 0 auto;
        margin-top: 100px;

        .Link {
            text-decoration: none;
            color: cornflowerblue;
        }

        .pagination {
            .active {
                color: #fff;
                background: #1f2937;
            }
        }
    }
</style>
