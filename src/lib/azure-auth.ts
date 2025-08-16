// Microsoft Authentication Library (MSAL) integration
import { PublicClientApplication, type AccountInfo } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: "3c641d65-9a56-4eb3-bc32-6d64389de243",
    authority: "https://login.microsoftonline.com/3c641d65-9a56-4eb3-bc32-6d64389de243"
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const loginWithMsal = async (): Promise<AccountInfo | null> => {
  try {
    const response = await msalInstance.loginPopup();
    return response.account;
  } catch (error) {
    console.error('MSAL login failed:', error);
    return null;
  }
};

export const logoutFromMsal = async (): Promise<void> => {
  try {
    await msalInstance.logoutPopup();
  } catch (error) {
    console.error('MSAL logout failed:', error);
  }
};

export const getCurrentAccount = (): AccountInfo | null => {
  const accounts = msalInstance.getAllAccounts();
  return accounts.length > 0 ? accounts[0] : null;
};

export const isAuthenticated = (): boolean => {
  return msalInstance.getAllAccounts().length > 0;
};