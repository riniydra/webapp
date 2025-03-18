import api from "./api";
import endpoints from "./endpoints.json";

export const getMyRequests = async () => {
  const response = await api.get(endpoints.GET_MY_REQUESTS);
  return response.data;
};
export const getOthersRequests = async () => {
  const response = await api.get(endpoints.GET_OTHERS_REQUESTS);
  return response.data;
};
export const getManagedRequests = async () => {
  const response = await api.get(endpoints.GET_MANAGED_REQUESTS);
  return response.data;
};
export const getRequestComments = async () => {
  const response = await api.get(endpoints.GET_COMMENTS);
  return response.data;
};
export const predictCategories = async (requestBody) => {
  const response = await api.post(
    endpoints.PREDICT_CATEGORIES,
    {
      ...requestBody,
      isBase64Encoded: false,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.data;
};
// export const generateAnswer = async (request) => {
//   const response = await api.post(
//     endpoints.GENERATE_ANSWER,
//     request,
//   );
//   return response.data;
// };
