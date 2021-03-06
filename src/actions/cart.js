import * as cartConstants from "./../constants/cart";

export const fetchListCart = () => {
  return {
    type: cartConstants.FETCH_CART,
    payload: {

    }
  };
};

export const fetchListCartSuccess = data => {
  return {
    type: cartConstants.FETCH_CART_SUCCESS,
    payload: {
      data
    }
  };
};

export const updateCartStatus = (params) => {
  return {
    type: cartConstants.UPDATE_CART,
    payload: {
      params
    }
  };
};

export const updateCartStatusSuccess = data => {
  return {
    type: cartConstants.UPDATE_CART_SUCCESS,
    payload: {
      data
    }
  };
};

export const findCart = (id) => {
  return {
    type: cartConstants.FIND_CART,
    payload: {
      id
    }
  };
};

export const findCartSuccess = data => {
  return {
    type: cartConstants.FIND_CART_SUCCESS,
    payload: {
      data
    }
  };
};

export const removeCarts = () => {
  return {
    type: cartConstants.REMOVE_CARTS,
    payload: {
    }
  };
};

export const removeCartsSuccess = data => {
  return {
    type: cartConstants.REMOVE_CARTS_SUCCESS,
    payload: {
      data
    }
  };
};
