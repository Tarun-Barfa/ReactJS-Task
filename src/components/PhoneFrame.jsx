export default function PhoneFrame({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-sm h-[700px] bg-white rounded-lg shadow-sm overflow-y-auto">
        {children}
      </div>
    </div>
  );
}