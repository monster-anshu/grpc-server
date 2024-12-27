import { UserServiceServer } from "@/proto/user/v1/user";

export const userServiceServer: UserServiceServer = {
  createUser: (call, cb) => {
    const { email, password, username } = call.request;
    const user = { email, password, username };
    console.log("Creating user : ", user);
    cb(null, {
      email: user.email,
      username: user.username,
    });
  },
  deleteUser: (call, cb) => {
    const { username } = call.request;
    console.log("Deleting user : ", username);
    cb(null, {
      success: true,
    });
  },
  updateUser: (call, cb) => {
    const { email, password, username } = call.request;
    const user = { email, password, username };
    console.log("Updating user : ", user);
    cb(null, {
      email: user.email,
      username: user.username,
    });
  },
};
