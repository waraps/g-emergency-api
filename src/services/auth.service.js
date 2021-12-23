const { JwtHelper } = require("../helpers");

class AuthService {
  constructor({ UserService }) {
    this._userService = UserService;
  }

  async signUp(user) {
    const { email } = user;
    const userExist = await this._userService.getUserByEmail(email);
    if (userExist) {
      const error = new Error();
      error.status = 400;
      error.message = "User already exist";
      throw error;
    }

    const newUser = await this._userService.create(user);
    const createdUser = newUser.toJSON();
    delete createdUser.password;
    return createdUser;
  }

  async signIn(user) {
    const { email, password } = user;
    const userExist = await this._userService.getUserByEmail(email);
    if (!userExist) {
      const error = new Error();
      error.status = 404;
      error.message = "User does not exist";
      throw error;
    }

    const validPassword = userExist.validPassword(password);
    if (!validPassword) {
      const error = new Error();
      error.status = 400;
      error.message = "Invalid Password";
      throw error;
    }

    const userToEncode = {
      email: userExist.email,
      roleId: userExist.roleId,
      id: userExist._id,
    };

    const token = JwtHelper.generateToken(userToEncode);

    const currentUser = userExist.toJSON();
    delete currentUser.password;
    return { token, user: currentUser };
  }
}

module.exports = AuthService;
