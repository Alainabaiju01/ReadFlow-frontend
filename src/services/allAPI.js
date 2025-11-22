import commonAPI from "./commonAPI";
import serverURL from "./serverURL";



// WISHLIST ------------------------------------
export const addWishlistAPI = async (book) => {
  return await commonAPI("POST", `${serverURL}/wishlist`, book);
};

export const getWishlistAPI = async () => {
  return await commonAPI("GET", `${serverURL}/wishlist`, "");
};

export const removeWishlistAPI = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/wishlist/${id}`, "");
};


// STILL READING --------------------------------
export const addStillReadingAPI = async (book) => {
  return await commonAPI("POST", `${serverURL}/stillreading`, book);
};

export const getStillReadingAPI = async () => {
  return await commonAPI("GET", `${serverURL}/stillreading`, "");
};

export const updateStillReadingAPI = async (id, info) => {
  return await commonAPI("PATCH", `${serverURL}/stillreading/${id}`, info);
};

export const removeStillReadingAPI = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/stillreading/${id}`, "");
};


// READ ------------------------------------------
export const addReadAPI = async (book) => {
  return await commonAPI("POST", `${serverURL}/read`, book);
};

export const getReadAPI = async () => {
  return await commonAPI("GET", `${serverURL}/read`, "");
};

export const deleteReadAPI = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/read/${id}`, "");
};




export const updateReadAPI = async (id, info) => {
  return await commonAPI("PATCH", `${serverURL}/read/${id}`, info);
};
