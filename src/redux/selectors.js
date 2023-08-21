export const selectItems = state => state.products.items;
export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;

//Cart

export const selectCart = state => state.carts.items;

//User

export const selectUser = state => state.user;
export const selectLoggedIn = state => state.user.isLoggedIn;
