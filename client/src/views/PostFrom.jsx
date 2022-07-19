import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePost } from "../context/PostContainer";
import { useNavigate } from "react-router-dom";

const PostFrom = () => {
  const { createPost } = usePost();
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required"),
        })}
        onSubmit={async (values, actions) => {
          await createPost(values);
          actions.resetForm();
          navigate("/");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="title"
              type="text"
              placeholder="title"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
            />
            <ErrorMessage
              component="p"
              className="text-red-400 text-sm"
              name="title"
            />
            <Field
              name="description"
              type="text"
              placeholder="description"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
            />
            <ErrorMessage
              component="p"
              className="text-red-400 text-sm"
              name="description"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostFrom;
