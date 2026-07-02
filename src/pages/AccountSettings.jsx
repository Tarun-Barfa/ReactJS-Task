import PhoneFrame from '../components/PhoneFrame';

export default function AccountSettings() {
  return (
    <PhoneFrame>
      <div>
        <div className="border-b border-gray-200 px-6 py-4">
          <h1 className="font-semibold text-gray-900">Account Settings</h1>
        </div>

        <div className="px-6 py-6 border-b border-dashed border-gray-200">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/80?img=47"
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-violet-800 rounded-full p-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                  <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-3.382l-.724-1.447A1 1 0 0015 2H9zm3 15a5 5 0 110-10 5 5 0 010 10z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Marry Doe</p>
              <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-4 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}