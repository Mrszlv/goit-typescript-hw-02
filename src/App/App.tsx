import { useState, useEffect } from "react";

import { Toaster } from "react-hot-toast";

import { fetchImages, Image } from "../servises/api";

import ImageGallery from "../components/ImageGallery/ImageGallery";
import ImageModal from "../components/ImageModal/ImageModal";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import SearchBar from "../components/SearchBar/SearchBar";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [totalImages, setTotalImages] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);
        setTotalImages(data.total);
        setImages((prev) => [...prev, ...data.results]);
      } catch {
        setError("Could not fetch images. Please try again later");
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const showLoadMoreBtn = images.length < totalImages;

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);

  const handleOpenModal = (image: Image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleOpenModal} />
      {loading && <Loader />}
      {showLoadMoreBtn && <LoadMoreBtn onClick={handleLoadMore} />}
      {showModal && selectedImage && (
        <ImageModal
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          image={selectedImage}
        />
      )}
    </>
  );
};
export default App;
