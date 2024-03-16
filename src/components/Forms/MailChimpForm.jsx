import MailchimpSubscribe from "react-mailchimp-subscribe";
<<<<<<< HEAD
import { Newsletter } from "../Forms/Newsletter";
=======
import { Newsletter } from "./Newsletter";
>>>>>>> 842b8eaeed5240638b9f1b163a43906b06c4e5c5

export const MailchimpForm = () => {
const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${import.meta.env.VITE_MAILCHIMP_U}&id=${import.meta.env.VITE_MAILCHIMP_ID}`;
return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};