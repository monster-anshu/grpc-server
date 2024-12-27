import { Server, ServerCredentials } from "@grpc/grpc-js";
import { WalletServiceService } from "@/proto/wallet/v1/wallet";
import { UserServiceService } from "@/proto/user/v1/user";

import { walletServiceServer } from "@/services/wallet.service";
import { userServiceServer } from "@/services/user.service";

const server = new Server();

server.addService(WalletServiceService, walletServiceServer);
server.addService(UserServiceService, userServiceServer);

server.bindAsync(
  "0.0.0.0:8000",
  ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      throw error;
    }
    console.log("server is running on", port);
  }
);

process.on("SIGINT", () => {
  server.forceShutdown();
  console.log("server shutdown");
});
