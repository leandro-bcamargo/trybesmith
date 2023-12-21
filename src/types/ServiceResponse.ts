type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;

type ServiceResponseError = {
  status: string,
  data: { message: string }
}

type ServiceResponseSuccess<T> = {
  status: string,
  data: T,
}

export default ServiceResponse;