import axios from "axios";

const instance = axios.create({
  baseURL: "https://academics.newtonschool.co/api/v1/bookingportals",
  headers: { projectID: "f104bi07c490" },
});
export default instance;
