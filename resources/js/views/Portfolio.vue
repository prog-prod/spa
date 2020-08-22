<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <page-template>
                    <h1 class="page-title">{{capitalize($route.name)}} <small>My projects or sites</small></h1>
                    <hr>
                    <div class="row" v-for="portfolios in portfoliosArray">
                        <div class="col-md-4" v-for="portfolio in portfolios">
                            <div>
                                <div class="card mb-4 shadow-sm">
                                    <img class="bd-placeholder-img card-img-top" :src="'/img/' + portfolio.img"
                                         width="100%" height="225" alt="">
                                    <div class="card-body">
                                        <h4 class="card-text"><b>{{portfolio.name}}</b></h4>
                                        <p class="card-text">{{portfolio.desc}}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <a :href="'https://'+portfolio.link"
                                               class="btn btn-sm btn-outline-primary">View</a>
                                            <small class="text-muted">{{portfolio.time}}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </page-template>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import PageTemplate from "./PageTemplate";

    export default {
        name: "portfolio",
        data: () => {
            return {
                //
            }
        },
        computed: {
            ...mapGetters(['portfolios']),
            portfoliosArray() {
                return this.chunkArray(this.portfolios, 3)
            }
        },
        methods: {
            ...mapActions([
                'fetchPortfolios',
            ]),
            getPortfolio() {
                this.fetchPortfolios('/api/portfolio');
            }
        },
        components: {
            PageTemplate
        },
        created() {
            this.getPortfolio()
            console.log(this.portfoliosArray)
        }
    }
</script>

<style scoped>

</style>
