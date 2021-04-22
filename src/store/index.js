import {createStore} from 'vuex'

const store = createStore({
    state (){
        return {
            memories: [
                { id: 1, title: "ArcticDevs", image: "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80", description: "It was very good" },
                { id: 2, title: "ArcticTrips", image: "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80", description: "It was very good 1" },
                { id: 3, title: "ArcticFox", image: "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80", description: "It was very good 2" },
                { id: 4, title: "ArcticOcean", image: "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80", description: "It was very good 3" },
                { id: 5, title: "ArcticIce", image: "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80", description: "It was very good 4" },
                { id: 6, title: "ArcticCold", image: "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80", description: "It was very good 5" },
            ],
        };
    },
    mutations:{
        addMemory(state,memoryData){
            const newMemory = {
                id: new Date().toISOString(),
                title:memoryData.title,
                image:memoryData.image,
                description:memoryData.description                
            };
            state.memories.unshift(newMemory)

        }
    },
    actions:{
        addMemory(context ,memoryData){
            context.commit('addMemory',memoryData)
        }
    },
    getters:{
        memories(state){
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                // console.log(state.memories.find((memories) =>memories.id === memoryId) )
                // console.log(state.memories.find((memory) => memory.id === memoryId))
              return state.memories.find((memories) =>memories.id == memoryId);
            };
          },
    }
});

export default store;