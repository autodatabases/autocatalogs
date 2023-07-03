export class StatusError extends Error {
  constructor(type, description, status) {
    super(type);
    this.type = type;
    this.status = status;
    this.description = description;
  }
}

export default class Errors {
  static critical(description) {
    return new StatusError('CRITICAL', description, 550);
  }

  static conflict(description, type = 'CONFLICT') {
    return new StatusError(type, description, 459);
  }

  static forbidden(description, type = 'FORBIDDEN') {
    return new StatusError(type, description, 453);
  }

  static notFound(description, type = 'NOT_FOUND') {
    return new StatusError(type, description, 454);
  }

  static badRequestError(description, type = 'BAD_REQUEST_ERROR') {
    return new StatusError(type, description, 450);
  }
}
