import axios from "axios";
import toast from "react-hot-toast";

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  likes: number;
  user: {
    name: string;
  };
}

interface ResponseData {
  results: Image[];
}

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<ResponseData | unknown> => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        client_id: "_FGiO_vXXvx1ShKCkjhTMxThVvtc1JA7tmR_UezrG3U",
        query,
        page,
        per_page: 16,
      },
    });
    return response.data;
  } catch {
    toast.error("Images not found!");
  }
};
