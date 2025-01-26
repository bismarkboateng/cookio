import { Dispatch, SetStateAction } from "react";

export type UserAuthProps = {
  values: {
    FullName: string;
    email: string;
    password: string;
  };
  setLoading: Dispatch<SetStateAction<string>>;
};

export type signInUserProps = {
  values: {
    email: string;
    password: string;
  };
  setLoading: Dispatch<SetStateAction<string>>;
};
