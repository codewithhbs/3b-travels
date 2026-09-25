"use client";
import { useEffect, useState } from "react";

const empty = { name: "", email: "", mobile: "", destination: "", travelDate: "", travellers: "", message: "" };

function validate(v, full) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Enter your full name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid e-mail address";
  if (!/^[6-9]\d{9}$/.test(v.mobile.replace(/\D/g, "").slice(-10))) e.mobile = "Enter a 10-digit mobile number";
  if (full && v.travellers && Number(v.travellers) < 1) e.travellers = "At least 1 traveller";
  return e;
}

export default function QueryForm({ full = false, destination = "" }) {
  const [v, setV] = useState({ ...empty, destination });
  const [err, setErr] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // Pre-fill destination from ?destination= (cards link here)
  useEffect(() => {
    const d = new URLSearchParams(window.location.search).get("destination");
    if (d) setV((x) => ({ ...x, destination: d }));
  }, []);

  const set = (k) => (e) => {
    setV({ ...v, [k]: e.target.value });
    if (err[k]) setErr({ ...err, [k]: undefined });
  };

  async function submit(e) {
    e.preventDefault();
    const found = validate(v, full);
    setErr(found);
    if (Object.keys(found).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, source: full ? "contact-page" : "home-page" }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setV({ ...empty, destination });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <h3>Query sent</h3>
        <p>Our travel expert will call you back within one working day.</p>
        <button className="pill pill-white" onClick={() => setStatus("idle")}>Send another query</button>
      </div>
    );
  }

  const field = (k, label, type = "text", extra = {}) => (
    <div className="field">
      <label htmlFor={`q-${k}`} className="sr-only">{label}</label>
      <input id={`q-${k}`} type={type} placeholder={label} value={v[k]} onChange={set(k)}
        aria-invalid={!!err[k]} aria-describedby={err[k] ? `q-${k}-err` : undefined} {...extra} />
      {err[k] && <span className="field-err" id={`q-${k}-err`}>{err[k]}</span>}
    </div>
  );

  return (
    <form className={`query-form ${full ? "is-full" : ""}`} onSubmit={submit} noValidate>
      {field("name", "Full Name", "text", { autoComplete: "name" })}
      {field("email", "E-mail", "email", { autoComplete: "email" })}
      {field("mobile", "Mobile  Number", "tel", { autoComplete: "tel", inputMode: "numeric", maxLength: 14 })}
      {full && (
        <>
          <div className="field-row">
            {field("destination", "Destination")}
            {field("travelDate", "Travel date", "date")}
          </div>
          {field("travellers", "No. of travellers", "number", { min: 1 })}
          <div className="field">
            <label htmlFor="q-message" className="sr-only">Message</label>
            <textarea id="q-message" rows={4} placeholder="Tell us about your trip" value={v.message} onChange={set("message")} />
          </div>
        </>
      )}
      <button type="submit" className="pill pill-teal submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send query"}
      </button>
      {status === "error" && <p className="form-error" role="alert">Query not sent. Check your connection and try again.</p>}
    </form>
  );
}
