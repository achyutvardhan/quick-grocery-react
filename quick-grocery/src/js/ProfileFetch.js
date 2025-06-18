import axios from "axios";


const LoginFetch = async (email, password) => {
  try {
    const profile = await axios.get(
      `http://localhost:3000/profile?email=${email}`
    );
    if (profile.status === 200) {
      if (profile.data[0].password === password)
        return { status: true, data: profile.data[0] };
      else return { status: false, message: "wrong password" };
    } else return { status: false, message: "Profile Not found" };
  } catch (error) {
    return { status: false, message: "User not Found" };
  }
};

const SignUp = async (name, email, password) => {
  try {
    const prf = await axios.get(`http://localhost:3000/profile?email=${email}`);
    if (prf.data && prf.data.length > 0)
      return { status: false, message: "Profile already existed" };
    const postProfile = await axios.post("http://localhost:3000/profile", {
      name: name,
      email: email,
      password: password,
    });
    // console.log(postProfile);
    if (postProfile.status === 201)
      return { status: true, message: "Profile created successfully" };
    else return { status: false, message: "server Error" };
  } catch (error) {
    return { status: false, message: "server Error" };
  }
};

export { LoginFetch, SignUp };
