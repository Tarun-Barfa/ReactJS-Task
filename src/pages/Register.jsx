import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '', phone: '', email: '', password: '', company: '', isAgency: 'yes',
  });

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/account-settings');
  }

  const fields = [
    { key: 'fullName', label: 'Full Name*', type: 'text' },
    { key: 'phone', label: 'Phone number*', type: 'text' },
    { key: 'email', label: 'Email address*', type: 'email' },
    { key: 'password', label: 'Password *', type: 'password' },
    { key: 'company', label: 'Company name', type: 'text' },
  ];

  return (
    <PhoneFrame>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-6">
          Create your<br />PopX account
        </h1>

        <form onSubmit={handleSubmit}>
          {fields.map((f) => (
            <div className="relative mb-6" key={f.key}>
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-violet-700">
                {f.label}
              </label>
              <input
                type={f.type}
                placeholder="Marry Doe"
                required={f.label.includes('*')}
                value={form[f.key]}
                onChange={(e) => update(f.key, e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm outline-none focus:border-violet-600"
              />
            </div>
          ))}

          <p className="text-sm text-gray-700 mb-2">Are you an Agency?*</p>
          <div className="flex items-center gap-6 mb-10">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="isAgency" checked={form.isAgency === 'yes'} onChange={() => update('isAgency', 'yes')} className="accent-violet-700 w-4 h-4" />
              Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="isAgency" checked={form.isAgency === 'no'} onChange={() => update('isAgency', 'no')} className="accent-violet-700 w-4 h-4" />
              No
            </label>
          </div>

          <button type="submit" className="w-full py-3 rounded-md font-medium text-white bg-violet-800 hover:bg-violet-900 transition">
            Create Account
          </button>
        </form>
      </div>
    </PhoneFrame>
  );
}