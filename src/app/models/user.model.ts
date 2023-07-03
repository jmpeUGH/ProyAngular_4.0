export interface UserInterface{
  username: string;
  name:string;
  password: string;
  pasguord:string;
  email: string;
  token: string;
}

export interface UserResp
{
        token: string | null;

        characters:UserInterface[]

  }
