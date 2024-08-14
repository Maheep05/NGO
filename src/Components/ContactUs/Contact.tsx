import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { FC } from "react";
import * as Yup from "yup";

interface ContactProps {
  name: string;
  number: string;
  email: string;
  projectBrief: string;
  subscribe: boolean;
}

const Contact: FC = () => {
  const initialValues: ContactProps = {
    name: "",
    number: "",
    email: "",
    projectBrief: "",
    subscribe: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    number: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be at least 10 digits")
      .required("Number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    projectBrief: Yup.string().required("Project brief is required"),
    subscribe: Yup.boolean(),
  });

  const onSubmit = (values: ContactProps, { resetForm }: FormikHelpers<ContactProps>) => {
    const { name, number, email, projectBrief, subscribe } = values;

    // Create the mailto link
    const subject = encodeURIComponent("Project Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nProject Brief: ${projectBrief}\nSubscribed: ${subscribe ? "Yes" : "No"}`
    );
    
    // Open the default mail client
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

    // Optionally reset the form
    resetForm();
  };

  return (
    <div className="min-h-screen bg-slate-900  flex justify-center items-center">
      <div className="bg-white m-6  p-4 md:p-8 rounded-lg shadow-lg w-[22rem]  md:w-1/2 ">
        <h2 className="text-xl md:text-2xl font-poppins font-semibold mb-6 text-center">
          Stay In Contact
        </h2>
        <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-6 text-center">
          Get In Touch
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-4">
            <div className="md:flex md:flex-row gap-6 items-center">
              <div className="md:w-1/2 shadow-md">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="md:w-1/2 shadow-md">
                <Field
                  type="text"
                  id="number"
                  name="number"
                  placeholder="Number"
                  className="mt-1 p-2 w-full border border-gray-300 rounded"
                />
                <ErrorMessage
                  name="number"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="shadow-md">
              <Field
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="shadow-md">
              <Field
                as="textarea"
                id="projectBrief"
                name="projectBrief"
                placeholder="Project Brief"
                className="mt-1 p-2 w-full h-32 border border-gray-300 rounded resize-none"
              />
              <ErrorMessage
                name="projectBrief"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex items-center">
              <Field
                type="checkbox"
                id="subscribe"
                name="subscribe"
                className="mr-2 h-3 w-3 accent-[#B99674]"
              />
              <label htmlFor="subscribe" className="text-gray-700 font-poppins">
                Subscribe to newsletter
              </label>
            </div>
            <button
              type="submit"
              className="w-full font-poppins p-4 bg-[#B99674] text-white rounded hover:bg-[#7c634a]"
            >
              Send Message
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
