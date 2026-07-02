import { Link } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

export default function Welcome() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col justify-end p-6 pb-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
        <Link
          to="/register"
          className="w-full text-center bg-violet-800 text-white font-medium py-3 rounded-md mb-3 hover:bg-violet-900 transition"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="w-full text-center bg-violet-100 text-violet-900 font-medium py-3 rounded-md hover:bg-violet-200 transition"
        >
          Already Registered? Login
        </Link>
      </div>
    </PhoneFrame>
  );
}