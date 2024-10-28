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

export interface FetchImagesResponse {
  results: Image[];
  total_pages: number;
}

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<FetchImagesResponse> => {
  try {
    const response = await axios.get<FetchImagesResponse>(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          client_id: "_FGiO_vXXvx1ShKCkjhTMxThVvtc1JA7tmR_UezrG3U",
          query,
          page,
        },
      }
    );
    return response.data;
  } catch {
    toast.error("Images not found!");
  }
};
