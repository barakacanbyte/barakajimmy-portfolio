import { useState } from "react";
import { profile } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Contact Me" number="05" />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="lg:w-1/2 w-full">
            <form
              className="flex flex-col gap-8 sm:gap-12"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm text-secondary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full border-b border-border py-2 focus:border-primary outline-none bg-transparent"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm text-secondary mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full border-b border-border py-2 focus:border-primary outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-secondary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full border-b border-border py-2 focus:border-primary outline-none bg-transparent"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm text-secondary mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={2}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full border-b border-border py-2 focus:border-primary outline-none bg-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="button-hover-effect self-start px-7 py-4 border border-primary rounded-full bg-transparent text-xl font-medium"
              >
                <span className="text-primary">Send Now</span>
              </button>
            </form>
            <p className="text-secondary text-sm mt-6">
              I also write on{" "}
              <a
                href={profile.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Medium
              </a>
              .
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6 items-start lg:items-end w-full">
            <a
              href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl text-secondary hover:text-primary transition-colors"
              >
                GitHub <i className="fab fa-github ml-2" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl text-secondary hover:text-primary transition-colors"
              >
                LinkedIn <i className="fab fa-linkedin ml-2" />
              </a>
              <a
                href={profile.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl text-secondary hover:text-primary transition-colors"
              >
                Medium <i className="fab fa-medium ml-2" />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl text-secondary hover:text-primary transition-colors"
              >
                WhatsApp <i className="fab fa-whatsapp ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
