import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { MdAddPhotoAlternate } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (values: { query: string }, { resetForm }: any) => {
    const query = values.query.trim();
    if (query === "") {
      toast.error("Please enter search query!");
      return;
    }
    onSubmit(query);
    resetForm();
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <MdAddPhotoAlternate className={s.icon} />
        <h2 className={s.title}>Gallery</h2>
      </div>

      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter search photo and image..."
            className={s.input}
          />
          <button type="submit" className={s.btn}>
            Search <CiSearch />
          </button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
};
export default SearchBar;
