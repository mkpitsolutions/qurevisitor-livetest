import React, { useState, useRef, useEffect } from 'react';

const VisitorEntry = () => {
  const [formData, setFormData] = useState({
    visitType: '',
    visitorName: '',
    contactNumber: '',
    department: '',
    meetingWith: '',
    purpose: '',
    company: '',
    email: '',
    inTime: '',
    city: '',
    state: '',
    country: 'India',
    zip: ''
  });
  
  const [capturedImage, setCapturedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Camera functions
  const startCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: {
          deviceId: selectedDevice ? { exact: selectedDevice } : undefined,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setShowCamera(true);
      }
    } catch (err) {
      console.error("Camera error:", err);
      setCameraError("Could not access camera. Please check permissions.");
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      setCapturedImage(canvasRef.current.toDataURL('image/png'));
      stopCamera();
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
    setShowCamera(false);
  };

  const retakeImage = () => {
    setCapturedImage(null);
    startCamera();
  };

  // Form handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!capturedImage) {
      alert('Please capture visitor image before submitting');
      return;
    }
    console.log('Form submitted:', { ...formData, visitorImage: capturedImage });
  };

  // Cleanup
  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Visitor Entry</h1> 
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Visit Type */}
          <div>
            <label htmlFor="visitType" className="block text-sm font-medium text-gray-700 mb-1">Visit Type *</label>
            <select 
              id="visitType" 
              name="visitType"
              value={formData.visitType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Visit Type</option>
              <option value="Business Meeting">Business Meeting</option>
              <option value="Delivery">Delivery</option>
              <option value="Interview">Interview</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Name and Contact */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="visitorName" className="block text-sm font-medium text-gray-700 mb-1">Visitor Full Name *</label>
              <input 
                type="text" 
                id="visitorName" 
                name="visitorName"
                value={formData.visitorName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">Visitor Contact Number *</label>
              <input 
                type="tel" 
                id="contactNumber" 
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Department and Meeting With */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
              <select 
                id="department" 
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Department</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Management">Management</option>
              </select>
            </div>
            <div>
              <label htmlFor="meetingWith" className="block text-sm font-medium text-gray-700 mb-1">Meeting With *</label>
              <select 
                id="meetingWith" 
                name="meetingWith"
                value={formData.meetingWith}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Meeting With</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
                <option value="Mike Johnson">Mike Johnson</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register Visitor
            </button>
          </div>
        </form>
      </div>

      {/* Right Side - Image Capture */}
      <div className="w-full md:w-1/2 p-6 bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-sm h-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Visitor Photo Capture</h2>
          
          {cameraError && (
            <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded">
              {cameraError}
              <button 
                onClick={startCamera}
                className="mt-2 text-sm text-blue-600 hover:text-blue-800"
              >
                Try Again
              </button>
            </div>
          )}

          <div className="flex flex-col items-center justify-center h-96 border-2 border-dashed border-gray-300 rounded-lg">
            {capturedImage ? (
              <div className="text-center">
                <img 
                  src={capturedImage} 
                  alt="Captured visitor" 
                  className="w-64 h-64 object-cover rounded-md border border-gray-300 mx-auto"
                />
                <div className="mt-4 space-x-2">
                  <button
                    onClick={retakeImage}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                  >
                    Retake
                  </button>
                  <button
                    disabled
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Photo Captured
                  </button>
                </div>
              </div>
            ) : showCamera ? (
              <div className="text-center w-full">
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline
                  muted
                  className="w-full h-64 object-cover rounded-md border border-gray-300 mx-auto"
                />
                <button
                  onClick={captureImage}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Capture Photo
                </button>
              </div>
            ) : (
              <div className="text-center p-4">
                <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <button
                  onClick={startCamera}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Open Camera
                </button>
                <p className="mt-2 text-sm text-gray-500">
                  Please capture a clear photo of the visitor's face
                </p>
              </div>
            )}
          </div>

          {/* Camera device selection (if multiple cameras) */}
          {devices.length > 1 && (
            <div className="mt-4">
              <label htmlFor="camera-select" className="block text-sm font-medium text-gray-700 mb-1">Select Camera:</label>
              <select
                id="camera-select"
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {devices.map(device => (
                  <option key={device.deviceId} value={device.deviceId}>
                    {device.label || `Camera ${device.deviceId.slice(0, 5)}`}
                  </option>
                ))}
              </select>
            </div>
          )}

          <canvas ref={canvasRef} className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default VisitorEntry;