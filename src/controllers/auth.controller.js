class AuthController {
  constructor({ AuthService }) {
    this._authService = AuthService;
  }

  async signUp(req, res) {
    const { body } = req;
    const createdUser = await this._authService.signUp(body);
    return res.status(201).send(createdUser);
  }

  async signIn(req, res) {
    const { body } = req;
    const creds = await this._authService.signIn(body);
    return res.send(creds);
  }
}

module.exports = AuthController;
