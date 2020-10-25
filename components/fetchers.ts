import axios from "axios";

const axiosFetch = (url: string) => axios.get(url).then((res) => res.data);

export default axiosFetch;
