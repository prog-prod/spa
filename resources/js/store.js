import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        refCount: 0,
        isLoading: false,
        isLoadingDOM:true,
        notification: {
            isShow: false,
            type: 'danger',
            fadeOutTime: 7000,
            timer:null,
            text: null
        },
        addTrackStage: window.addTrackStage,
        miniSidebarClass: 'minimize-sidebar',
        user: window.user,
        meta: window.meta,
        isSidebarMini: window.isSidebarMini,

        portfolios: {}
    },
    getters: {
        user: state => {
            return state.user
        },
        meta: state => {
            return state.meta
        },
        addTrackStage: state => {
            return state.addTrackStage;
        },
        isLoadingDOM: state => {
            return state.isLoadingDOM
        },
        isLoading: state => {
            return state.isLoading
        },
        portfolios: state => {
            return state.portfolios;
        }
    },
    mutations: {
        loading(state, isLoading) {
            // console.log({isLoading})
            if (isLoading) {
                state.refCount++;
                state.isLoading = true;
            } else if (state.refCount > 0) {
                state.refCount--;
                state.isLoading = (state.refCount > 0);
            }
        },
        loadingDOM(state, isLoading) {
            state.isLoadingDOM =  isLoading
        },
        notice(state,notification) {
            if (notification.isShow){
                state.notification.isShow = true;
                if(notification.type)
                {
                    state.notification.type = notification.type;
                }
                if(notification.fadeOutTime)
                {
                    state.notification.fadeOutTime = notification.fadeOutTime;
                }
                if(notification.text)
                {
                    state.notification.text = notification.text;
                }
                // console.log(state.notification)
            }else {
                state.notification.isShow = false;
            }
            // console.log("STATE ",state.notification)
        },
        updateSidebarState(state,isSidebarMini){
            state.isSidebarMini = isSidebarMini
        },
        fetch_user(state,user) {
            state.user = user;
        },
        fetch_meta(state,meta) {
            state.meta = meta;
        },
        setStageAddTracking(state,stage){
            state.addTrackStage = stage;
        },

        fetch_portfolios(state,portfolios) {
            state.portfolios = portfolios;
        },
    },
    actions: {
        makeNotice(store, data){
            // console.log(data);
            store.commit('notice', data);
            store.dispatch('startTimer')
        },
        deleteNotice(store){
            if(store.state.notification.timer != null)
            {
                store.dispatch('clearTimer')
            }

            store.commit('notice', {isShow: false});
        },
        startTimer(store){

            if(store.state.notification.timer != null)
            {
                store.dispatch('clearTimer')
            }

            return new Promise((resolve, reject) => {
                store.state.notification.timer = setTimeout(() => {
                    store.dispatch('deleteNotice')
                    resolve()
                }, store.state.notification.fadeOutTime)
            })
        },
        clearTimer({state}){
            clearTimeout(state.notification.timer);
        },
        fetchUser({commit},userUrl){
            axios.get(userUrl)
                .then(res => {
                    commit('fetch_user', res.data)
                }).catch(err => {
                console.log(err)
            })
        },

        fetchPortfolios({commit},url){
            axios.get(url)
                .then(res => {
                    commit('fetch_portfolios', res.data)
                }).catch(err => {
                console.log(err)
            })
        },

        checkPassword({commit},{url, password}){
            return axios.post(url, { password })
        },
        updateUser({commit},{url,data = null,method = null}){

            let axiosRes = null;

            if(method !== null)
            {
                axiosRes = axios[method](url,data)
            }else{
                axiosRes = axios.put(url,data)
            }

            return axiosRes
                .then(res => {
                    if(res.data.user)
                    {
                        commit('fetch_user', res.data.user)
                    }
                    return res;

                }).catch(err => console.log(err))
        },
        fetchMeta({commit},metaUrl){
            axios.get(metaUrl)
                .then(res => {
                    commit('fetch_meta', res.data)
                }).catch(err => {
                console.log(err)
            })
        },
        updateStageAddTracking({commit},{url, stage}){
            axios.post(url, {stage}).then(d => {
                if(!d.error){
                    commit('setStageAddTracking', stage)
                }
            })

        },
        loadedDOM({commit}){
            commit('loadingDOM', false)
        },
        loadingDOM({commit}){
            commit('loadingDOM', true)
        }
    }
})
