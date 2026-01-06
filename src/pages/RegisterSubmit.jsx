import { useMemo, useState } from "react";

const GENDERS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Others", value: "Others" },
];

const HOBBIES = [
  { label: "Music", value: "Music" },
  { label: "Movies", value: "Movies" },
  { label: "Plastic Model", value: "Plastic Model" },
];

const ROLES = [
  { label: "General staff", value: "General staff" },
  { label: "Developer", value: "Developer" },
  { label: "System Analyst", value: "System Analyst" },
];

export default function RegisterSubmit() {
  // form states
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState(GENDERS[0].value);
  const [role, setRole] = useState(ROLES[0].value);
  const [hobbies, setHobbies] = useState([]);

  // view state (ternary)
  const [isSubmitted, setIsSubmitted] = useState(false);

  // store submitted snapshot (submission value)
  const [submittedData, setSubmittedData] = useState(null);

  function onHobbiesToggle(e) {
    const value = e.target.value;
    const checked = e.target.checked;

    if (!checked) {
      setHobbies((prev) => prev.filter((x) => x !== value));
    } else {
      setHobbies((prev) => [...prev, value]);
    }
  }

  function onSubmit(e) {
    e.preventDefault();

    // snapshot what user submitted
    setSubmittedData({
      username,
      firstname,
      lastname,
      gender,
      hobbies,
      role,
    });

    setIsSubmitted(true);
  }

  function onBackToForm() {
    setIsSubmitted(false);
  }

  // optional: show a nice hobbies string
  const hobbiesText = useMemo(() => hobbies.join(", "), [hobbies]);
  const submittedHobbiesText = submittedData?.hobbies?.join(", ") ?? "-";

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: 18, fontFamily: "Arial" }}>
      <h2>Register + Submit</h2>

      {/* TERNARY RENDERING */}
      {!isSubmitted ? (
        <>
          {/* FORM VIEW */}
          <form
            onSubmit={onSubmit}
            style={{ border: "1px solid #ddd", borderRadius: 10, padding: 16 }}
          >
            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", marginBottom: 6 }}>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: "100%", padding: 10 }}
              />
            </div>

            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", marginBottom: 6 }}>Firstname</label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                style={{ width: "100%", padding: 10 }}
              />
            </div>

            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", marginBottom: 6 }}>Lastname</label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                style={{ width: "100%", padding: 10 }}
              />
            </div>

            <div style={{ marginBottom: 12 }}>
              <div style={{ marginBottom: 6 }}>Gender</div>
              {GENDERS.map((g) => (
                <label key={g.value} style={{ marginRight: 16 }}>
                  <input
                    type="radio"
                    name="gender"
                    value={g.value}
                    checked={gender === g.value}
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  {g.label}
                </label>
              ))}
            </div>

            <div style={{ marginBottom: 12 }}>
              <div style={{ marginBottom: 6 }}>Hobbies</div>
              {HOBBIES.map((h) => (
                <label key={h.value} style={{ display: "block", marginBottom: 6 }}>
                  <input
                    type="checkbox"
                    value={h.value}
                    checked={hobbies.includes(h.value)}
                    onChange={onHobbiesToggle}
                  />{" "}
                  {h.label}
                </label>
              ))}
            </div>

            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", marginBottom: 6 }}>Apply Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ width: "100%", padding: 10 }}
              >
                {ROLES.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            {/* SUBMIT BUTTON just below the form (inside form, at bottom) */}
            <button type="submit" style={{ padding: "10px 14px", cursor: "pointer" }}>
              Submit
            </button>
          </form>

          {/* LIVE DISPLAY (Display input data) */}
          <div style={{ marginTop: 16, border: "1px solid #ddd", borderRadius: 10, padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>Live Display</h3>
            <p><b>Username:</b> {username || "-"}</p>
            <p><b>Firstname:</b> {firstname || "-"}</p>
            <p><b>Lastname:</b> {lastname || "-"}</p>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Hobbies:</b> {hobbiesText || "-"}</p>
            <p><b>Role:</b> {role}</p>
          </div>
        </>
      ) : (
        <>
          {/* SUBMISSION VIEW */}
          <div style={{ border: "1px solid #ddd", borderRadius: 10, padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>Submitted Value</h3>

            <p><b>Username:</b> {submittedData?.username || "-"}</p>
            <p><b>Firstname:</b> {submittedData?.firstname || "-"}</p>
            <p><b>Lastname:</b> {submittedData?.lastname || "-"}</p>
            <p><b>Gender:</b> {submittedData?.gender || "-"}</p>
            <p><b>Hobbies:</b> {submittedHobbiesText}</p>
            <p><b>Role:</b> {submittedData?.role || "-"}</p>

            <button
              onClick={onBackToForm}
              style={{ padding: "10px 14px", cursor: "pointer", marginTop: 8 }}
            >
              Back to form
            </button>
          </div>
        </>
      )}
    </div>
  );
}
