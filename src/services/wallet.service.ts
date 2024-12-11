import { WalletServiceServer } from "../proto/wallet/v1/wallet";

export const walletServiceServer: WalletServiceServer = {
  balance: (call, callback) => {
    callback(null, {
      available: 100,
      total: 776,
    });
  },
  createAddress: (call, callback) => {
    callback(null, {
      address: "0x123",
    });
  },
  transaction: (call, callback) => {
    callback(null, {
      transactionId: 1,
    });
  },
  walletInfo: (call, callback) => {
    callback(null, {
      available: 100,
      total: 776,
      transactions: [],
    });
  },
};
