import { BasUser ,Admin } from "./mock";

export const loginByEmail = async (email,password) => {
  let user = {}

  try{
    if( Admin.email === email ){
      user = Admin
    } else if( BasUser.email === email) {
      user = BasUser
    }

    if(!user || !user.token){
      throw new Error(`User [${email} is not found]`)
    }
  }catch(err) {
    console.warn(`[loginByEmail] ${err}`)
  }

  return user
}
