import { ContactData } from "../typings";

export const sendMessage = async (data: ContactData) => {
  try {
    await fetch("/api/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
