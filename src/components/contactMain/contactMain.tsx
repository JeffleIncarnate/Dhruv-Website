import "./contactMain.css";

import { useRef } from "react";

export default function ContactMain() {
  const fName = useRef(null);
  const lName = useRef(null);
  const email = useRef(null);
  const pNumber = useRef(null);
  const message = useRef(null);

  let clear_form = () => {
    (document.getElementById("fName")! as any).value = "";
    (document.getElementById("lName")! as any).value = "";
    (document.getElementById("email")! as any).value = "";
    (document.getElementById("pNumber")! as any).value = "";
    (document.getElementById("message")! as any).value = "";
  };

  let validate_data = (values: any) => {
    for (let [key, value] of Object.entries(values)) {
      if (value === null || value === undefined || value === "") {
        if (key === "phone_number") {
          return true;
        }
        return false;
      }
    }
    return true;
  };

  let send_email = (values: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      subject: "https://dhruv-website.vercel.app/ - Contact Form",
      body: `First name: ${values.first_name}, Last name: ${values.last_name}, Email: ${values.email}, Phone Number: ${values.phone_number}, Message: ${values.message}`,
      user_to: "dhruvrayat50@gmail.com",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  };

  return (
    <main className="contact_main">
      <div className="contact_left">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const values = {
              first_name: (fName.current! as any).value,
              last_name: (lName.current! as any).value,
              email: (email.current! as any).value,
              phone_number: (pNumber.current! as any).value,
              message: (message.current! as any).value,
            };

            if (!validate_data(values)) return alert("Provide all values.");

            send_email(values);
            clear_form();
          }}
        >
          <div className="contact_wrapper">
            <div className="contact_inner_wrapper">
              <label htmlFor="fName">
                First Name <span className="asterix">*</span>
              </label>
              <input
                id="fName"
                ref={fName}
                required
                name="fName"
                placeholder="Joe"
                type="text"
              ></input>
            </div>

            <div className="contact_inner_wrapper">
              <label htmlFor="lName">
                Last Name <span className="asterix">*</span>
              </label>
              <input
                id="lName"
                ref={lName}
                required
                name="lName"
                placeholder="Smith"
                type="text"
              ></input>
            </div>
          </div>

          <div className="contact_wrapper">
            <div className="contact_inner_wrapper">
              <label htmlFor="email">
                Email <span className="asterix">*</span>
              </label>
              <input
                id="email"
                ref={email}
                required
                name="email"
                placeholder="name@website.com"
                type="email"
              ></input>
            </div>

            <div className="contact_inner_wrapper">
              <label htmlFor="pNumber">Phone Number</label>
              <input
                id="pNumber"
                ref={pNumber}
                name="email"
                placeholder="+12 345 6789"
                type="number"
              ></input>
            </div>
          </div>

          <div className="contact_textarea">
            <label>
              Your Message <span className="asterix">*</span>
            </label>
            <textarea
              id="message"
              ref={message}
              required
              placeholder="Leave a comment..."
            />
          </div>
          <p>
            By submitting this form you agree to our terms and conditions and
            our privacy policy which explains how we may collect, use and
            disclose your personal information including to third parties.{" "}
            <strong>
              If the labal has a <span className="asterix">*</span> next to it,
              it is required.
            </strong>
          </p>

          <div className="contact_submit">
            <input type="submit" />
          </div>
        </form>
      </div>

      <div className="contact_right">
        <div className="contact_right_section">
          <i className="fa-solid fa-map-location-dot contact_right_section_icon"></i>
          <h2>Location</h2>
          <p>Auckland, New Zealand</p>
        </div>

        <div className="contact_right_section">
          <i className="fa-brands fa-discord contact_right_section_icon"></i>
          <h2>Discord</h2>
          <p>ʇɐʎɐᴚ ʌnɹɥᗡ#2867</p>
        </div>
      </div>
    </main>
  );
}
