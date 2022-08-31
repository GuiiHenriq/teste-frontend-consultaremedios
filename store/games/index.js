export const state = () => ({
	gamesCart: [],
});

export const getters = {
	games (state) {
		return state.gamesCart;
	},
	countGames (state) {
		return state.gamesCart.length;
	},
};

export const mutations = {
	addGame (state, payload) {
		state.gamesCart.push({ ...payload });
	},
	removeGame (state, payload) {
		state.gamesCart = state.gamesCart.filter(x => x.id !== payload);
	},
};

export const actions = {
	adicionarGame ({ commit }, payload) {
		commit('addGame', payload);
	},
	deleteGame ({ commit }, payload) {
		commit('removeGame', payload);
	},
};