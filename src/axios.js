import { DriveFileRenameOutline } from "@mui/icons-material";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-42f14/us-central1/api",
});

export default instance;
