import { useQuery } from "react-query";
import api from "./api/api";

export const useGetUserName = (token) => {
  return useQuery(
    ["username", token],
    async () => {
      const { data } = await api.get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.name;
    },
    {
      enabled: !!token,
      select: (name) => name || "Anonymous",
      retry: 1,
    }
  );
};
