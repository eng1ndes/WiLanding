 <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
        
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 flex justify-center relative">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <svg
              className="h-12 w-12 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            We’ve Received Your Request
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You’ll receive an email from <span className="font-medium">info@whiteintel.io</span> shortly with next steps.
            In the meantime, you can create a free account and start exploring our platform.
          </p>
        </div>

        {/* Buttons */}
        <div className="px-8 pb-8 flex gap-4 flex-col sm:flex-row">
          <a
            href="/signup"
            className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 text-center hover:from-blue-700 hover:to-indigo-700"
          >
            Create Free Account
          </a>
          <button
            onClick={onClose}
            className="flex-1 rounded-xl bg-gray-100 text-gray-800 font-semibold py-3 hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>