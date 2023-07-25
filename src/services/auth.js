import axios from "axios";


function setAxiosToken(){
    axios.defaults.headers["authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjY1MWZkNDVkMzhhNGRhOGUwYzZhOTdlNTBmM2FmNyIsInN1YiI6IjY0YmU0NjllNThlZmQzMDExYzQwNmM0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cJVkVa2bn_oZ_hfc8LWnA9zSKZbGMfMy1h5t4OKlRos"
}
export default {

    setAxiosToken,
}