class CustomError extends Error {
  status: string

  constructor(status: string, message: string) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;