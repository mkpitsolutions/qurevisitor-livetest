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
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const countdownRef = useRef(null);
  const [isPhotoSaved, setIsPhotoSaved] = useState(false);
  // Get available camera devices
  useEffect(() => {
    const getDevices = async () => {
      try {
        // First request camera access to ensure permissions
        await navigator.mediaDevices.getUserMedia({ video: true });
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        if (videoDevices.length === 0) {
          setCameraError("No camera devices found");
        }
        setDevices(videoDevices);
        if (videoDevices.length > 0) {
          setSelectedDevice(videoDevices[0].deviceId);
        }
      } catch (err) {
        console.error("Error accessing devices:", err);
        setCameraError("Camera access denied. Please enable camera permissions.");
      }
    };
    
    getDevices();

    return () => {
      stopCamera();
    };
  }, []);

  // Camera functions
  const startCamera = async () => {
    setCameraError(null);
    setIsCapturing(false);
    setShowCamera(true);
    
    try {
      if (devices.length === 0) {
        throw new Error("No camera devices found");
      }
      const constraints = {
        video: {
          deviceId: selectedDevice ? { exact: selectedDevice } : undefined,
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        }
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (!videoRef.current) {
        throw new Error("Video element not available");
      }  
      videoRef.current.srcObject = stream;
    
      // Wait for video to be ready
      await new Promise((resolve, reject) => {
        if (!videoRef.current) {
          reject("Video element not available");
          return;
        }
        
        videoRef.current.onloadedmetadata = resolve;
        videoRef.current.onerror = () => reject("Video stream error");
        
        // Timeout in case the stream never loads
        setTimeout(() => {
          reject("Camera stream timed out");
        }, 5000);
      });
      
      setShowCamera(true);    
      /* if (videoRef.current) {
        videoRef.current.srcObject = stream;
        // Wait for video to be ready
        await new Promise((resolve) => {
          if (videoRef.current) {
            videoRef.current.onloadedmetadata = resolve;
          }
        });
      } */
    } catch (err) {
      /* console.error("Camera error:", err);
      setCameraError("Failed to access camera. Please check permissions.");
      setShowCamera(false); */
      console.error("Camera error:", err);
      let errorMessage = "Failed to access camera.";
      
      if (err.message.includes("permission")) {
        errorMessage = "Camera access denied. Please enable camera permissions.";
      } else if (err.message.includes("found") || devices.length === 0) {
        errorMessage = "No camera devices found.";
      } else if (err.message.includes("timed out")) {
        errorMessage = "Camera stream timed out. Please try again.";
      }
      
      setCameraError(errorMessage);
      setShowCamera(false);
      stopCamera(); 
    }
  };

  const captureImageWithCountdown = () => {
    if (!videoRef.current) return;
    
    setIsCapturing(true);
    let count = 3;
    
    // Clear any existing countdown
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
    }
    
    setCameraError(`Capturing in ${count}...`);
    
    countdownRef.current = setInterval(() => {
      count--;
      
      if (count > 0) {
        setCameraError(`Capturing in ${count}...`);
      } else {
        clearInterval(countdownRef.current);
        setCameraError("Say cheese!");
        
        // Small delay before actual capture
        setTimeout(() => {
          captureImage();
          setIsCapturing(false);
          setCameraError(null);
        }, 300);
      }
    }, 1000);
  };


  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) {
      setCameraError("Capture failed: Video not ready");
      return;
    }

    try {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (!context) {
        throw new Error("Could not get canvas context");
      }

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Draw image
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Create circular mask
      const circularCanvas = document.createElement('canvas');
      circularCanvas.width = canvas.width;
      circularCanvas.height = canvas.height;
      const circularCtx = circularCanvas.getContext('2d');
      
      if (!circularCtx) {
        throw new Error("Could not create circular mask");
      }
      
      // Draw circle mask
      circularCtx.beginPath();
      const radius = Math.min(canvas.width, canvas.height) / 2;
      circularCtx.arc(
        canvas.width / 2,
        canvas.height / 2,
        radius,
        0,
        Math.PI * 2
      );
      circularCtx.closePath();
      circularCtx.clip();
      
      // Draw original image onto circular canvas
      circularCtx.drawImage(canvas, 0, 0);
      
      // Save the result
      setCapturedImage(circularCanvas.toDataURL('image/png'));
      stopCamera();
    } catch (err) {
      console.error("Capture error:", err);
      setCameraError("Failed to capture image. Please try again.");
      setIsCapturing(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      
      tracks.forEach(track => {
        track.stop();
      });
      
      videoRef.current.srcObject = null;
    }
    
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
    
    setShowCamera(false);
    setIsCapturing(false);
  };

  const retakeImage = () => {
    setCapturedImage(null);
    startCamera();
  };

  // Location functions
  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      return;
    }

    setLocationError("Accessing location...");
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy
        });
        setLocationError(null); 
        setFormData(prev => ({
          ...prev,
          city: "Mumbai",
          state: "Maharashtra"
        }));
      },
      (error) => {
        setLocationError("Unable to retrieve your location: " + error.message);
      }
    );
  };

  // Form handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   if (!capturedImage) {
  //     alert('Please capture visitor image before submitting');
  //     return;
  //   }
    
  //   if (!isPhotoSaved) {
  //     alert('Please save the captured photo before submitting');
  //     return;
  //   }
    
  //   const submissionData = {
  //     ...formData,
  //     visitorImage: capturedImage,
  //     location: location || "Not available",
  //     timestamp: new Date().toISOString()
  //   };
    
  //   console.log('Form submitted:', submissionData);
  //   alert('Visitor registered successfully!');
    
  //   // Reset form
  //   setFormData({
  //     visitType: '',
  //     visitorName: '',
  //     contactNumber: '',
  //     department: '',
  //     meetingWith: '',
  //     purpose: '',
  //     company: '',
  //     email: '',
  //     inTime: '',
  //     city: '',
  //     state: '',
  //     country: 'India',
  //     zip: ''
  //   });
  //   setCapturedImage(null);
  //   setLocation(null);
  //   setIsPhotoSaved(false);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!capturedImage) {
      alert('Please capture visitor image before submitting');
      return;
    } 
    
    if (!isPhotoSaved) {
      alert('Please save the captured photo before submitting');
      return;
    }
    
    const submissionData = {
      ...formData,
      visitorImage: capturedImage,
      location: location || "Not available",
      timestamp: new Date().toISOString()
    };
    
    console.log('Form submitted:', submissionData);
    alert('Visitor registered successfully!');
    
    // Reset form
    setFormData({
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
    setCapturedImage(null);
    setLocation(null);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      stopCamera();
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, []);

 


  const handleSavePhoto = async () => {
    try {
      setIsPhotoSaved(true);
      // Example: Send to an API endpoint
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: capturedImage,
          visitorId: formData.visitorName // or some unique identifier
        }),
      });
  
      if (response.ok) {
        setIsPhotoSaved(true);
        alert('Photo saved successfully!');
      } else {
        throw new Error('Failed to save photo');
      }
    } catch (error) {
      console.error('Error saving photo:', error);
      setIsPhotoSaved(false);
      setCameraError('Failed to save photo. Please try again.');
      alert('Error saving photo. Please try again.');
    }
  };
   
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 h-full">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Visitor Registration</h1>
              <p className="text-gray-600">Please fill in the visitor details</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="visitorName" className="block text-sm font-medium text-gray-700 mb-1">Visitor Full Name *</label>
                <input 
                  type="text" 
                  id="visitorName" 
                  name="visitorName"
                  value={formData.visitorName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+91 9876543210"
                  required
                />
              </div>
            </div>

            {/* Department and Meeting With */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
                <select 
                  id="department" 
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Person</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Jane Smith">Jane Smith</option>
                  <option value="Mike Johnson">Mike Johnson</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="pt-2">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                {location ? (
                  <span className="text-xs text-green-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Location captured
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={getLocation}
                    className="text-xs text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Capture current location
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <input 
                    type="text" 
                    id="city" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="City"
                    readOnly={!!location}
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    id="state" 
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="State"
                    readOnly={!!location}
                  />
                </div>
              </div>
              {locationError && (
                <p className="mt-1 text-xs text-red-600">{locationError}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
              >
                Register Visitor
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Image Capture */}
      <div className="w-full md:w-1/2 p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Visitor Photo</h2>
          <p className="text-gray-600 mb-6">Please capture a clear photo of the visitor's face</p>
          
          {/* {cameraError && (
            <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                {cameraError}
                <button 
                  onClick={startCamera}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Try Again
                </button>
              </div>
            </div>
          )} */}
            {cameraError && !showCamera && (
              <div className="mb-4 p-4 bg-red-100 border border-red-200 text-red-700 rounded-lg flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="font-medium">{cameraError}</p>
                  {!cameraError.includes("No camera devices") && (
                    <button 
                      onClick={startCamera}
                      className="mt-2 text-sm text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Try Again
                    </button>
                  )}
                </div>
              </div>
            )}
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 relative overflow-hidden">
            {/* {capturedImage ? (
              <div className="text-center p-4 w-full">
                <div className="relative mx-auto w-64 h-64">
                  <img 
                    src={capturedImage} 
                    alt="Captured visitor" 
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-dashed animate-spin-slow" style={{ borderColor: 'rgba(99, 102, 241, 0.3)' }}></div>
                </div>
                <div className="mt-6 space-x-3">
                <div className="flex justify-center mt-6">
                <button
                    disabled
                    className="px-5 py-2.5 bg-green-100 text-green-800 rounded-lg flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Photo Captured
                  </button>
                </div>
                <div className="flex justify-center mt-6">
                      <button
                        onClick={retakeImage}
                        className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all shadow-md flex items-center justify-center transform hover:scale-105 cursor-pointer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Retake Photo
                      </button>
                    </div>
                 
                </div>
              </div>
            ) */}
            
            {capturedImage ? (
  <div className="text-center p-4 w-full">
    <div className="relative mx-auto w-64 h-64">
      <img 
        src={capturedImage} 
        alt="Captured visitor" 
        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
      />
      <div className="absolute inset-0 rounded-full border-4 border-transparent border-dashed animate-spin-slow" style={{ borderColor: 'rgba(99, 102, 241, 0.3)' }}></div>
    </div>
    
    {/* Success message - add this right below the image div */}
    {isPhotoSaved && (
      <div className="mt-4 p-2 bg-green-100 text-green-800 rounded-lg text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Photo saved successfully
      </div>
    )}
    
    <div className="mt-6 space-x-3 flex justify-center">
      <button
        onClick={retakeImage}
        className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg hover:from-orange-600 hover:to-pink-700 transition-all duration-300 shadow-lg flex items-center cursor-pointer transform hover:scale-[1.03] active:scale-100"       
       >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Retake
      </button>
      <button
        onClick={handleSavePhoto}
        disabled={isPhotoSaved}
        className={`px-6 py-2.5 text-white rounded-lg transition-colors flex items-center ${
          isPhotoSaved 
            ? 'bg-green-500 cursor-default' 
            : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
        }`}
      >
        {isPhotoSaved ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Saved
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Save Photo
          </>
        )}
      </button>
    </div>
  </div>
) : showCamera  ? (
              <div className="text-center w-full h-full flex flex-col">
                <div className="relative flex-1 flex items-center justify-center bg-black">
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline
                    muted
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-64 h-64 rounded-full border-4 border-white border-dashed opacity-70"></div>
                  </div>
                  {cameraError && (
                    <div className="absolute top-4 left-0 right-0 text-center">
                      <div className="inline-block bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                        {cameraError}
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-6 left-0 right-0">
                  <button
                    onClick={captureImageWithCountdown}
                    disabled={isCapturing}
                    className={`px-6 py-3 rounded-full shadow-lg ${
                      isCapturing ? 'bg-gray-500 cursor-none' : 'bg-red-500 hover:bg-red-600 cursor-pointer'
                    } text-white transition-colors flex items-center mx-auto`}
                  >
                    {isCapturing ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Capturing...
                      </span>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Capture Photo
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center p-6 w-full">
                <div className="relative mx-auto w-48 h-48 mb-9">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-70"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full shadow-inner"></div>
                  <svg className="relative mx-auto h-44 w-24 text-gray-400 mt-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <button
                  onClick={startCamera}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white cursor-pointer rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md transition-all duration-300 flex items-center mx-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Open Camera
                </button>
                <p className="mt-4 text-sm text-gray-500 max-w-xs mx-auto">
                  Ensure good lighting and position the visitor's face within the circle
                </p>
              </div> 
            )}
 
          </div>

          {/* Camera device selection (if multiple cameras) */}
          {devices.length > 1 && !capturedImage && (
            <div className="mt-4">
              <label htmlFor="camera-select" className="block text-sm font-medium text-gray-700 mb-1">Select Camera:</label>
              <select
                id="camera-select"
                value={selectedDevice}
                onChange={(e) => {
                  setSelectedDevice(e.target.value);
                  if (showCamera) {
                    stopCamera();
                    startCamera();
                  }
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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