import { useState, useEffect } from "react";
//import "animate.css";

export const Newsletter = ({ subscribe, status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState(""); // Success or error alert
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (status === "success") {
      setAlertType("success");
      setAlertMessage(message);
      setAlertVisible(true);
      clearFields();
    } else if (status === "error") {
      setAlertType("error");
      setAlertMessage(message);
      setAlertVisible(true);
    }
  }, [status, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <div className="lg:col-span-12">
      <div className="newsletter-bx animate__animated animate__zoomIn">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
          <div className="md:col-span-2 xl:col-span-3">
            <h3 className="text-xl font-semibold">Subscribe to my Newsletter</h3>
            {alertVisible && (
              <div
                className={`p-4 rounded-md ${
                  alertType === "success" ? "bg-green-200" : "bg-red-200"
                }`}
              >
                {alertMessage}
              </div>
            )}
          </div>
          <div className="md:col-span-2 xl:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center">
                <input
                  type="email"
                  value={email}
                  name="EMAIL"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
