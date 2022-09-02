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
	ADD_GAME (state, payload) {
		state.gamesCart.push({ ...payload });
	},
	REMOVE_GAME (state, payload) {
		state.gamesCart = state.gamesCart.filter(x => x.id !== payload);
	},
};

export const actions = {
	addGame ({ commit }, payload) {
		commit('ADD_GAME', payload);
	},
	removeGame ({ commit }, payload) {
		commit('REMOVE_GAME', payload);
	},
};