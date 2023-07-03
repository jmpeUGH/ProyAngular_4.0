export interface UserInterface{
  username: string;
  password: string;
  email: string;
  token: string;
}

export interface UserResp
{
      token: string | null;
        users:UserInterface[]

  }

export interface UserLogin{
  username: string;
  password: string;
  email: string;
}

export interface UserLoginResp{
  users:UserLogin[]
}
