import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValid = email.trim() !== '' && password.trim() !== '';

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    navigate('/account-settings');
  }

  return (
    <PhoneFrame>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-2">
          Signin to your<br />PopX account
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-violet-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm outline-none focus:border-violet-600"
            />
          </div>

          <div className="relative mb-8">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-violet-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm outline-none focus:border-violet-600"
            />
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-3 rounded-md font-medium text-white transition ${
              isValid ? 'bg-violet-800 hover:bg-violet-900' : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </PhoneFrame>
  );
}