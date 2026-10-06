import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  MapPin,
  MessageSquare,
  X,
} from "lucide-react";

function LeadPopup({ onClose }) {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Full Name
    if (name === "name") {
      // Only letters and spaces
      const cleanedValue = value
        .replace(/[^a-zA-Z\s]/g, "")
        .slice(0, 50);

      setFormData((prev) => ({
        ...prev,
        name: cleanedValue,
      }));

      // Remove error while typing valid data
      if (errors.name) {
        setErrors((prev) => ({
          ...prev,
          name: "",
        }));
      }

      return;
    }

    // Phone Number
    if (name === "phone") {
      // Only numbers and maximum 10 digits
      const numbersOnly = value
        .replace(/\D/g, "")
        .slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        phone: numbersOnly,
      }));

      // Remove error while typing valid data
      if (errors.phone) {
        setErrors((prev) => ({
          ...prev,
          phone: "",
        }));
      }

      return;
    }

    // City
    if (name === "city") {
      // Only letters and spaces
      const cleanedCity = value
        .replace(/[^a-zA-Z\s]/g, "")
        .slice(0, 50);

      setFormData((prev) => ({
        ...prev,
        city: cleanedCity,
      }));

      // Remove error while typing
      if (errors.city) {
        setErrors((prev) => ({
          ...prev,
          city: "",
        }));
      }

      return;
    }

    // Message
    if (name === "message") {
      const limitedMessage = value.slice(0, 500);

      setFormData((prev) => ({
        ...prev,
        message: limitedMessage,
      }));

      // Remove error while typing
      if (errors.message) {
        setErrors((prev) => ({
          ...prev,
          message: "",
        }));
      }

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // -------------------------
    // NAME VALIDATION
    // -------------------------
    const name = formData.name.trim();

    if (!name) {
      newErrors.name = "Full name is required";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name can contain only letters";
    }

    // -------------------------
    // PHONE VALIDATION
    // -------------------------
    const phone = formData.phone.trim();

    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9][0-9]{9}$/.test(phone)) {
      newErrors.phone =
        "Enter a valid 10-digit phone number";
    }

    // -------------------------
    // CITY VALIDATION
    // -------------------------
    const city = formData.city.trim();

    if (!city) {
      newErrors.city = "City is required";
    } else if (city.length < 2) {
      newErrors.city = "Enter a valid city";
    } else if (!/^[a-zA-Z\s]+$/.test(city)) {
      newErrors.city =
        "City can contain only letters";
    }

    // -------------------------
    // MESSAGE VALIDATION
    // -------------------------
    if (formData.message.length > 500) {
      newErrors.message =
        "Maximum 500 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  console.log("Login Popup Submitted:", formData);

  navigate("/thank-you");
  onClose();
};

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 px-3 py-4 backdrop-blur-[3px]">

      {/* Popup */}
      <div className="relative w-full max-w-120 overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="relative flex h-14 items-center justify-center bg-[#3269c5] sm:h-16">

          <h2 className="text-lg font-bold text-white sm:text-xl">
            aNquest Media
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close popup"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white transition hover:scale-110 sm:right-4"
          >
            <X size={25} />
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-3 p-4 sm:p-5"
        >

          {/* Full Name */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-800 sm:text-base">
              Full Name{" "}
              <span className="text-red-500">*</span>
            </label>

            <div
              className={`flex h-11 items-center rounded-xl border-2 ${
                errors.name
                  ? "border-red-400"
                  : "border-gray-300"
              }`}
            >
              <User
                size={20}
                className="ml-3 shrink-0 text-gray-500"
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={50}
                placeholder="Enter Full Name"
                autoComplete="name"
                className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-gray-500 sm:text-base"
              />
            </div>

            <div className="mt-1 flex items-center justify-between">
              {errors.name ? (
                <p className="text-xs text-red-500">
                  {errors.name}
                </p>
              ) : (
                <span />
              )}

              <span className="text-xs text-gray-400">
                {formData.name.length}/50
              </span>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-800 sm:text-base">
              Phone Number{" "}
              <span className="text-red-500">*</span>
            </label>

            <div
              className={`flex h-11 overflow-hidden rounded-xl border-2 ${
                errors.phone
                  ? "border-red-400"
                  : "border-gray-300"
              }`}
            >
              <div className="flex shrink-0 items-center gap-1 border-r border-gray-300 bg-gray-50 px-3 text-xs font-semibold text-gray-700 sm:text-sm">
                <span>IN</span>
                <span>+91</span>
                <span className="text-gray-400">
                  ⌄
                </span>
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                inputMode="numeric"
                maxLength={10}
                placeholder="Enter Phone Number"
                autoComplete="tel"
                className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-gray-500 sm:text-base"
              />
            </div>

            <div className="mt-1 flex items-center justify-between">
              {errors.phone ? (
                <p className="text-xs text-red-500">
                  {errors.phone}
                </p>
              ) : (
                <span />
              )}

              <span className="text-xs text-gray-400">
                {formData.phone.length}/10
              </span>
            </div>
          </div>

          {/* City */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-800 sm:text-base">
              City{" "}
              <span className="text-red-500">*</span>
            </label>

            <div
              className={`flex h-11 items-center rounded-xl border-2 ${
                errors.city
                  ? "border-red-400"
                  : "border-gray-300"
              }`}
            >
              <MapPin
                size={20}
                className="ml-3 shrink-0 text-gray-500"
              />

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                maxLength={50}
                placeholder="Enter City"
                autoComplete="address-level2"
                className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-gray-500 sm:text-base"
              />
            </div>

            <div className="mt-1 flex items-center justify-between">
              {errors.city ? (
                <p className="text-xs text-red-500">
                  {errors.city}
                </p>
              ) : (
                <span />
              )}

              <span className="text-xs text-gray-400">
                {formData.city.length}/50
              </span>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-800 sm:text-base">
              Message
            </label>

            <div
              className={`flex rounded-xl border-2 ${
                errors.message
                  ? "border-red-400"
                  : "border-gray-300"
              }`}
            >
              <MessageSquare
                size={20}
                className="ml-3 mt-3 shrink-0 text-gray-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={500}
                rows={2}
                placeholder="Write your message..."
                className="w-full resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-gray-500 sm:text-base"
              />
            </div>

            <div className="mt-1 flex items-center justify-between">
              {errors.message ? (
                <p className="text-xs text-red-500">
                  {errors.message}
                </p>
              ) : (
                <span />
              )}

              <span className="text-xs text-gray-400">
                {formData.message.length}/500
              </span>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-[#3269c5] py-2.5 text-base font-bold text-white shadow-md transition hover:bg-[#285caf] active:scale-[0.99] sm:py-3"
          >
            Submit Request
          </button>

        </form>
      </div>
    </div>
  );
}

export default LeadPopup;