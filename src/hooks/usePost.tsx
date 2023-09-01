import React from "react";
import Service from "../setup/Network";

const PostDataMethod = (url:string, payload: object) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<string[] | unknown>([]);
  const [errorText, setErrorText] = React.useState<string | unknown>("");

  const postData = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await Service.post(url, payload);
      setIsLoading(false);
      setData(response);
    } catch (err:unknown) {
      setIsLoading(false);
      setErrorText(err);
    }
  }, [url, payload]);

  React.useEffect(() => {
    postData();
  }, [url]);

  return { isLoading, errorText, data, postData };
};

export default PostDataMethod;
