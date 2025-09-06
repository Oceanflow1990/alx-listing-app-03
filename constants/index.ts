export const API_URL = '';
export const API_VERSION = '';

export const ENDPOINTS = {
  USERS: `${API_URL}/${API_VERSION}/users`,
  PRODUCTS: `${API_URL}/${API_VERSION}/products`,
  ORDERS: `${API_URL}/${API_VERSION}/orders`,
};

export const UI_TEXT = {
  WELCOME_MESSAGE: 'Welcome to our app!',
  SUBMIT_BUTTON_TEXT: 'Submit',
  CANCEL_BUTTON_TEXT: 'Cancel',
};

export const CONFIG = {
  MAX_FILE_SIZE: 1024 * 1024 * 5, // 5MB
  SUPPORTED_FILE_TYPES: ['image/jpeg', 'image/png'],
};