import { useState } from "react";

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

export default function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [gender, setGender] = useState(GENDERS[0].value);
  const [role, setRole] = useState(ROLES[0].value);

  const [hobbies, setHobbies] = useState([]);

  function onHobbiesToggle(event) {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      setHobbies((prev) => prev.filter((item) => item !== targetValue));
    } else {
      setHobbies((prev) => [...prev, targetValue]);
    }
  }

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: 18, fontFamily: "Arial" }}>
      <h2>Registration Form</h2>

      <div style={{ border: "1px solid #ddd", borderRadius: 10, padding: 16 }}>
        {/* Username */}
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: 10 }}
          />
        </div>

        {/* Firstname */}
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Firstname</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            style={{ width: "100%", padding: 10 }}
          />
        </div>

        {/* Lastname */}
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Lastname</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            style={{ width: "100%", padding: 10 }}
          />
        </div>

        {/* Gender */}
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

        {/* Hobbies */}
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

        {/* Role */}
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
      </div>

      {/* Live reflect */}
      <div style={{ marginTop: 16, border: "1px solid #ddd", borderRadius: 10, padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Live Preview</h3>
        <p><b>Username:</b> {username || "-"}</p>
        <p><b>Firstname:</b> {firstname || "-"}</p>
        <p><b>Lastname:</b> {lastname || "-"}</p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Hobbies:</b> {hobbies.length ? hobbies.join(", ") : "-"}</p>
        <p><b>Apply Role:</b> {role}</p>
      </div>
    </div>
  );
}
