import axiosInstance from "../utils"

const getOauth = async (memberId) => {
    try {
      const { data } = await axiosInstance.get(`/oauth2/authorization/google`, memberId)
      return data
    } catch (error) {
      console.error(error)
    }
  }