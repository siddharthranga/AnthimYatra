import React, { useState } from "react";
import { supabase } from "./supabase";

export default function App() {
  const [page, setPage] = useState("home");
  const [language, setLanguage] = useState("English");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    address: "",
    city_town_village: "",
    district: "",
    state: "",
    faith: "",
    service_type: "",
    message: "",
  });

  const languages = [
    "English",
    "Hindi",
    "Telugu",
    "Tamil",
    "Kannada",
    "Malayalam",
    "Marathi",
    "Bengali",
    "Gujarati",
    "Punjabi",
  ];

  const maroon = "#6b2f2f";
  const cream = "#fbf7ef";

  const btn = {
    background: maroon,
    color: "white",
    border: 0,
    borderRadius: 30,
    padding: "14px 24px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: 16,
  };

  const outlineBtn = {
    background: "white",
    color: maroon,
    border: `1px solid ${maroon}`,
    borderRadius: 30,
    padding: "14px 24px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: 16,
  };

  const card = {
    background: "white",
    padding: 26,
    borderRadius: 24,
    border: "1px solid #eadcc5",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("Bookings").insert([formData]);

    setLoading(false);

    if (error) {
  console.log("Supabase error:", error);
  alert("Something went wrong. Please try again or contact AnthimYatra support.");
  return;
}

    alert("Your request has been submitted successfully. AnthimYatra support will contact you shortly.");

    setFormData({
      full_name: "",
      phone: "",
      address: "",
      city_town_village: "",
      district: "",
      state: "",
      faith: "",
      service_type: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: cream,
        fontFamily: "Arial, sans-serif",
        color: "#241f1a",
      }}
    >
      <header
        style={{
          background: "white",
          padding: "18px 28px",
          borderBottom: "1px solid #eadcc5",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>AnthimYatra</h2>
          <p style={{ margin: 0, color: "#666" }}>Compassion. Dignity. Peace.</p>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["home", "services", "nri", "vriksha", "booking"].map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              style={page === item ? btn : outlineBtn}
            >
              {item === "nri"
                ? "NRI"
                : item === "vriksha"
                ? "Anthim Vriksha"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </header>

      {page === "home" && (
        <main style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
          <div
            style={{
              background: "white",
              display: "inline-block",
              padding: "10px 18px",
              borderRadius: 30,
              color: maroon,
              fontWeight: "bold",
              border: "1px solid #eadcc5",
            }}
          >
            India-Wide Final Rites & Family Support
          </div>

          <h1 style={{ fontSize: 58, lineHeight: 1.1, maxWidth: 900, marginTop: 24 }}>
            Supporting families across India with dignity, faith, and compassion.
          </h1>

          <p style={{ fontSize: 20, lineHeight: 1.8, color: "#555", maxWidth: 850 }}>
            AnthimYatra helps families across villages, towns, and cities with funeral
            coordination, cremation, burial support, rituals, documentation, NRI family
            assistance, and eco memorial services.
          </p>

          <div style={{ marginTop: 30, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button style={btn} onClick={() => setPage("booking")}>
              Need Immediate Help
            </button>

            <button style={outlineBtn}>📞 Call Support</button>

            <button style={outlineBtn}>WhatsApp Support</button>
          </div>

          <div style={{ marginTop: 24 }}>
            <label style={{ fontWeight: "bold" }}>Select Language:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                marginLeft: 12,
                padding: 12,
                borderRadius: 12,
                border: "1px solid #ddd",
                fontSize: 16,
              }}
            >
              {languages.map((lang) => (
                <option key={lang}>{lang}</option>
              ))}
            </select>
          </div>

          <section
            style={{
              marginTop: 60,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 20,
            }}
          >
            {[
              ["All India Support", "Coverage for villages, towns, and cities across India."],
              ["Faith-Sensitive Services", "Hindu, Muslim, Christian, Sikh, Jain, Buddhist, and regional customs."],
              ["NRI Coordination", "Remote support for families abroad with live updates."],
              ["Anthim Vriksha", "Eco-friendly living memorial tree services."],
            ].map(([title, text]) => (
              <div key={title} style={card}>
                <h3>{title}</h3>
                <p style={{ color: "#666", lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </section>

          <section style={{ marginTop: 70 }}>
            <h2 style={{ fontSize: 38 }}>Faith-Sensitive Final Rites</h2>

            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#555", maxWidth: 850 }}>
              AnthimYatra supports families across faiths and traditions with deep respect
              for religious and cultural customs.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: 20,
                marginTop: 30,
              }}
            >
              {[
                "Hindu Final Rites",
                "Muslim Burial Support",
                "Christian Funeral Services",
                "Sikh Antim Sanskar",
                "Jain Final Rites",
                "Buddhist Ceremonies",
              ].map((item) => (
                <div key={item} style={card}>
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {page === "services" && (
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
          <h1>Services</h1>

          {[
            ["Basic Assistance", "Affordable support for rural and urban families."],
            ["Complete Family Support", "Transport, rituals, documentation, coordination."],
            ["NRI Family Support", "International family coordination and updates."],
            ["Anthim Vriksha Memorial", "Living memorial tree service."],
          ].map(([title, text]) => (
            <div key={title} style={{ ...card, marginBottom: 18 }}>
              <h2>{title}</h2>
              <p style={{ color: "#666", lineHeight: 1.7 }}>{text}</p>
              <button style={btn} onClick={() => setPage("booking")}>
                Request Service
              </button>
            </div>
          ))}
        </main>
      )}

      {page === "nri" && (
        <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
          <div style={card}>
            <h1>NRI Family Support</h1>

            <p style={{ fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              AnthimYatra helps families abroad coordinate final rites, cremation, burial,
              rituals, live updates, and documentation remotely across India.
            </p>

            <ul style={{ lineHeight: 2, fontSize: 17 }}>
              <li>WhatsApp updates</li>
              <li>Live video support</li>
              <li>Dedicated coordinator</li>
              <li>Faith-sensitive arrangements</li>
              <li>Village and rural coordination support</li>
            </ul>

            <button style={btn} onClick={() => setPage("booking")}>
              Start NRI Assistance
            </button>
          </div>
        </main>
      )}

      {page === "vriksha" && (
        <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
          <div
            style={{
              ...card,
              background: "linear-gradient(135deg,#eef7ea,#ffffff)",
            }}
          >
            <h1>Anthim Vriksha 🌱</h1>

            <h2>Transform remembrance into living legacy.</h2>

            <p style={{ fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              Families can choose eco-conscious memorial options where ashes are respectfully
              placed into biodegradable memorial urns and planted with sacred trees.
            </p>

            <button
              style={{
                ...btn,
                background: "#2f6b3f",
              }}
              onClick={() => setPage("booking")}
            >
              Request Anthim Vriksha
            </button>
          </div>
        </main>
      )}

      {page === "booking" && (
        <main style={{ maxWidth: 820, margin: "0 auto", padding: "60px 24px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #fffaf2, #ffffff)",
              padding: 36,
              borderRadius: 30,
              border: "1px solid #eadcc5",
              boxShadow: "0 14px 45px rgba(70, 35, 20, 0.12)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 30 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#f1e5d0",
                  color: maroon,
                  padding: "8px 16px",
                  borderRadius: 30,
                  fontWeight: "bold",
                  marginBottom: 14,
                }}
              >
                AnthimYatra Support
              </div>

              <h1 style={{ color: "#4b1e1e", fontSize: 40, margin: 0 }}>
                Request Support
              </h1>

              <p style={{ color: "#6b4c3b", fontSize: 16, lineHeight: 1.7, marginTop: 10 }}>
                Don’t know what to do? Share the details below. Our team will guide you step by step.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                name="full_name"
                placeholder="Family Contact Name"
                value={formData.full_name}
                onChange={handleChange}
                style={premiumInputStyle}
                required
              />

              <input
                name="phone"
                placeholder="Phone / WhatsApp Number"
                value={formData.phone}
                onChange={handleChange}
                style={premiumInputStyle}
                required
              />

              <textarea
                name="address"
                placeholder="Complete Address"
                value={formData.address}
                onChange={handleChange}
                style={{ ...premiumInputStyle, height: 95, resize: "vertical" }}
                required
              />

              <input
                name="city_town_village"
                placeholder="Village / Town / City"
                value={formData.city_town_village}
                onChange={handleChange}
                style={premiumInputStyle}
                required
              />

              <input
                name="district"
                placeholder="District"
                value={formData.district}
                onChange={handleChange}
                style={premiumInputStyle}
              />

              <input
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                style={premiumInputStyle}
                required
              />

              <select
                name="faith"
                value={formData.faith}
                onChange={handleChange}
                style={premiumInputStyle}
                required
              >
                <option value="">Select Faith / Tradition</option>
                <option>Hindu</option>
                <option>Muslim</option>
                <option>Christian</option>
                <option>Sikh</option>
                <option>Jain</option>
                <option>Buddhist</option>
                <option>Other</option>
              </select>

              <select
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
                style={premiumInputStyle}
                required
              >
                <option value="">Select Service Needed</option>
                <option>Immediate Assistance</option>
                <option>Cremation Support</option>
                <option>Burial Support</option>
                <option>Ambulance / Hearse</option>
                <option>Freezer Box</option>
                <option>Priest / Religious Support</option>
                <option>NRI Family Support</option>
                <option>Anthim Vriksha Memorial</option>
              </select>

              <textarea
                name="message"
                placeholder="Brief situation or requirement"
                value={formData.message}
                onChange={handleChange}
                style={{ ...premiumInputStyle, height: 120, resize: "vertical" }}
              />

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #5b1f1f, #7b2d2d)",
                  color: "white",
                  border: 0,
                  borderRadius: 18,
                  padding: "18px",
                  fontSize: 18,
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginTop: 8,
                  boxShadow: "0 10px 25px rgba(107, 47, 47, 0.25)",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </main>
      )}

      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          background: "#25D366",
          color: "white",
          padding: "16px 22px",
          borderRadius: 40,
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        }}
      >
        WhatsApp Help
      </a>

      <footer style={{ textAlign: "center", padding: 30, color: "#777" }}>
        © 2026 AnthimYatra. Supporting families across India with compassion and dignity.
      </footer>
    </div>
  );
}

const premiumInputStyle = {
  width: "100%",
  padding: 16,
  marginBottom: 14,
  borderRadius: 16,
  border: "1px solid #d9c3a5",
  fontSize: 16,
  boxSizing: "border-box",
  background: "#fffdf8",
  outline: "none",
};