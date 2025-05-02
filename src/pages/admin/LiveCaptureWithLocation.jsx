import React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@components/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@components/components/ui/card";
import { CameraOff, Camera, MapPin, Loader2 } from "lucide-react";

export function LiveCaptureWithLocation() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
 
  useEffect(() => {
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
        }
        setHasCameraPermission(true);
      } catch (err) {
        console.error("Camera access denied:", err);
        setHasCameraPermission(false);
        setError("Camera access was denied. Please enable camera permissions.");
      }
    };

    initCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;

    setIsCapturing(true);
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataUrl = canvas.toDataURL("image/jpeg");
      setCapturedImage(imageDataUrl);
    }
    setIsCapturing(false);
  };

  const getLocation = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
        });
      });

      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
      setHasLocationPermission(true);
    } catch (err) {
      console.error("Location access error:", err);
      setHasLocationPermission(false);
      setError("Location access was denied. Please enable location permissions.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetCapture = () => {
    setCapturedImage(null);
  };

  const openInMaps = () => {
    if (location) {
      window.open(`https://www.google.com/maps?q=${location.lat},${location.lng}`, "_blank");
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="w-5 h-5" />
          Live Capture with Location
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {error && (
          <div className="text-red-500 text-sm p-2 bg-red-50 rounded-md">
            {error}
          </div>
        )}

        {!capturedImage ? (
          <div className="relative aspect-video bg-gray-100 rounded-md overflow-hidden">
            {hasCameraPermission === false ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <CameraOff className="w-12 h-12 mb-2" />
                <p>Camera access denied</p>
              </div>
            ) : (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            )}
            <canvas ref={canvasRef} className="hidden" />
          </div>
        ) : (
          <div className="relative aspect-video bg-gray-100 rounded-md overflow-hidden">
            <img
              src={capturedImage}
              alt="Captured"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex gap-2">
          {!capturedImage ? (
            <Button
              onClick={captureImage}
              disabled={hasCameraPermission === false || isCapturing}
              className="flex-1"
            >
              {isCapturing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Capturing...
                </>
              ) : (
                <>
                  <Camera className="mr-2 h-4 w-4" />
                  Capture Image
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={resetCapture}
              variant="outline"
              className="flex-1"
            >
              Retake
            </Button>
          )}

          <Button
            onClick={getLocation}
            disabled={isLoading || (location && hasLocationPermission)}
            variant={location ? "secondary" : "default"}
            className="flex-1"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Locating...
              </>
            ) : location ? (
              <>
                <MapPin className="mr-2 h-4 w-4" />
                Location Saved
              </>
            ) : (
              <>
                <MapPin className="mr-2 h-4 w-4" />
                Get Location
              </>
            )}
          </Button>
        </div>

        {location && (
          <div className="text-sm p-3 bg-gray-50 rounded-md">
            <p className="font-medium">Location Coordinates:</p>
            <p>Latitude: {location.lat.toFixed(6)}</p>
            <p>Longitude: {location.lng.toFixed(6)}</p>
            <Button
              onClick={openInMaps}
              variant="link"
              className="p-0 h-auto text-blue-600"
            >
              View on Google Maps
            </Button>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button disabled={!capturedImage || !location}>
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}