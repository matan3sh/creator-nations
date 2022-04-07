import { ChangeEvent, FormEvent, useState } from "react";

import { ContactData } from "../../../typings";
import styles from "./Contact.module.css";

interface IProps {
  onSubmit: (values: ContactData) => void;
  success: boolean;
}

export function Contact({ onSubmit, success }: IProps) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    });
    onSubmit(values);
  };

  return (
    <div className={styles.container}>
      <h1>Contact</h1>

      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.row}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.row}>
          <textarea
            rows={12}
            name="message"
            placeholder="Message"
            onChange={handleInputChange}
          />
        </div>

        {success && (
          <span className={styles.success}>Weve got your message!</span>
        )}

        <div className={styles.row}>
          <button className={styles.button} type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
