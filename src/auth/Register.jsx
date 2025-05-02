import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@components/components/ui/card";
import { Input } from "@components/components/ui/input";
import { Button } from "@components/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/components/ui/select";
import { Checkbox } from "@components/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

export function RegistrationForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    usage: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState(["", "", "", ""]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address.";
    if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.usage) newErrors.usage = "Please select usage.";
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters.";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.terms) newErrors.terms = "You must agree to the terms.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setFormSubmitted(true);
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    }); 
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, usage: value }); 
    if (errors.usage) {
      setErrors({ ...errors, usage: '' });
    }
  };

  const handleTermsChange = (checked) => {
    setFormData({ ...formData, terms: checked }); 
    if (errors.terms) {
      setErrors({ ...errors, terms: '' });
    }
  };

  const passwordStrength = () => {
    const pwd = formData.password;
    if (!pwd) return { strength: 'Empty', score: 0 };
    
    let score = 0;
    // Length check
    if (pwd.length >= 8) score += 1;
    // Contains uppercase
    if (/[A-Z]/.test(pwd)) score += 1;
    // Contains number
    if (/[0-9]/.test(pwd)) score += 1;
    // Contains special char
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;
    
    if (score === 4) return { strength: 'Strong', score: 4 };
    if (score >= 2) return { strength: 'Medium', score };
    return { strength: 'Weak', score: 1 };
  };
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) document.getElementById(`otp-${index + 1}`).focus();
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').trim();
    if (/^\d{4}$/.test(pasteData)) {
      setOtp(pasteData.split(''));
      document.getElementById(`otp-3`).focus();
    }
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 4) {
      alert(`OTP ${enteredOtp} verified successfully!`);
    } else {
      alert('Please enter a valid 4-digit OTP');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-6xl flex rounded-2xl overflow-hidden shadow-2xl">
      <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-indigo-600 to-purple-700 text-white w-1/2">
          <div className="max-w-md">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 w-fit mb-6">
              <span className="text-sm font-medium">14-DAY FREE TRIAL</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-6">Book Your Free Trial OR Call  8178337101</h1>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Try our platform free for 15 days. It only takes 5 minutes to set up and our team is here to help with any questions you may have during your trial.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white/20 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>No credit card required</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white/20 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Full access to all features</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white/20 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Priority support during trial</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm opacity-80">Secure and encrypted</p>
                <p className="font-medium">Enterprise-grade security</p>
              </div>
            </div>
          </div>
        </div> 
        <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
          <Card className="w-full max-w-md border-0 shadow-none">
            <CardContent className="p-6 pt-0 bg-white">
              {!formSubmitted ? (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium">Full Name</label>
                    <Input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className={errors.name ? "border-red-500" : ""}
                      maxLength={40}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Official Email ID</label>
                    <Input 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className={errors.email ? "border-red-500" : ""}
                      maxLength={40}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Mobile Number</label>
                    <Input 
                      name="mobile" 
                      type="tel" 
                      value={formData.mobile} 
                      onChange={handleChange} 
                      className={errors.mobile ? "border-red-500" : ""}
                      maxLength={10}

                    />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Where to Use</label>
                    <Select 
                      onValueChange={handleSelectChange}
                      value={formData.usage}
                    >
                      <SelectTrigger className={errors.usage ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select usage purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="non-profit">Non-Profit</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.usage && <p className="text-red-500 text-xs mt-1">{errors.usage}</p>}
                  </div>

                  <div className="relative">
  <label className="block text-sm font-medium">Password</label>
  <div className="relative">
    <Input
      name="password"
      type={showPassword.password ? "text" : "password"}
      value={formData.password}
      onChange={handleChange}
      maxLength={32}
      className={`pr-10 ${errors.password ? "border-red-500" : ""}`}
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
    >
      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>
  </div>
  <div className="mt-2">
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4].map((i) => (
        <div 
          key={i}
          className={`h-1.5 flex-1 rounded-full ${
            passwordStrength().score >= i 
              ? passwordStrength().strength === 'Strong' 
                ? 'bg-green-500' 
                : passwordStrength().strength === 'Medium' 
                  ? 'bg-yellow-500' 
                  : 'bg-red-500'
              : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
    <p className="text-xs mt-1">
      Strength: <span className={
        passwordStrength().strength === 'Strong' ? 'text-green-600 font-medium' :
        passwordStrength().strength === 'Medium' ? 'text-yellow-600 font-medium' :
        'text-red-600 font-medium'
      }>
        {passwordStrength().strength}
      </span>
    </p>
    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
  </div>
</div>

<div className="relative">
  <label className="block text-sm font-medium">Confirm Password</label>
  <div className="relative">
    <Input
      name="confirmPassword"
      type={showPassword.confirmPassword ? "text" : "password"}
      value={formData.confirmPassword}
      onChange={handleChange}
      maxLength={32}
      className={`pr-10 ${errors.confirmPassword ? "border-red-500" : ""}`}
    /> 
  </div>
  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
</div>

                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="terms"
                      checked={formData.terms} 
                      onCheckedChange={handleTermsChange}
                      className={errors.terms ? "border-red-500" : ""}
                    />
                    <label htmlFor="terms" className="text-sm">
                      I agree to the <a href="#" className="text-indigo-600">Terms and Conditions</a>
                    </label>
                  </div>
                  {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}

                  <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 cursor-pointer">Start 14-Day Free Trial</Button>
                </form>
              ) : (
                <form className="space-y-6" onSubmit={verifyOtp}>
                <div className="text-center">
                  <h3 className="text-lg font-medium">Verify your email</h3>
                  <p className="text-sm">We've sent a 4-digit code to your email</p>
                </div>

                <div className="flex justify-center space-x-3">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onPaste={handleOtpPaste}
                      className="w-14 h-14 text-center"
                      inputMode="numeric"
                      required
                    />
                  ))}
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600">Verify & Continue</Button>

                <button type="button" onClick={() => setFormSubmitted(false)} className="w-full text-sm text-indigo-600">Back to registration</button>
              </form>
              )}
            </CardContent>
            <CardFooter className="bg-gray-50 p-4 border-t">
              <p className="text-center text-sm text-gray-600 w-full">Already have an account? <a href="#" className="text-indigo-600">Sign in</a></p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}