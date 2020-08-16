import { mapState} from 'vuex';

// routes
import NProgress from "nprogress";

export default {
    computed: {
    ...mapState(['isLoading', 'refCount'])
    },
    created() {
        this.axios.interceptors.request.use((config) => {
            // console.log(this.$store)
            // console.log(this.Pace,window.Pace)
            NProgress.start();
            this.$store.commit('loading', true);
                return config;
            }, (error) => {
            this.$store.commit('loading', false);
            return Promise.reject(error);
        });
        this.axios.interceptors.response.use((response) => {
            NProgress.done();
            this.$store.commit('loading', false);
            return response;
        }, (error) => {
            NProgress.done();
            // this.Pace.done();
            this.$store.commit('loading', false);
            return Promise.reject(error);
        });
    }
}
