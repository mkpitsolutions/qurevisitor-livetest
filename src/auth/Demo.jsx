import React, { useState } from "react";
import { Card, CardContent } from "@components/components/ui/card";
import { Input } from "@components/components/ui/input";
import { Button } from "@components/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@components/components/ui/radio-group";
import { Label } from "@components/components/ui/label";
import { Textarea } from "@components/components/ui/textarea";

export function Demo() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    usage: '',
    installationMode: 'online',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address.";
    if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.company.trim()) newErrors.company = "Company/Organization is required.";
    if (!formData.usage) newErrors.usage = "Please select usage.";
    if (!formData.message.trim()) newErrors.message = "Message/Requirement is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setFormSubmitted(true);
    console.log("Form Data:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: value 
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-6xl flex rounded-2xl overflow-hidden shadow-2xl">
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-indigo-600 to-purple-700 text-white w-1/2">
          <div className="max-w-md">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 w-fit mb-6">
              <span className="text-sm font-medium">14-DAY FREE TRIAL</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-6">Book Your Free Trial OR Call 8178337101</h1>
            
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium">Full Name</label>
                  <Input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className={errors.name ? "border-red-500" : ""}
                    maxLength={40}
                    placeholder="Full Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium">Email ID</label>
                  <Input 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className={errors.email ? "border-red-500" : ""}
                    maxLength={40}
                    placeholder="Email ID"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium">Company Organization</label>
                  <Input 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    className={errors.company ? "border-red-500" : ""}
                    maxLength={50}
                    placeholder="Company Organization"
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
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
                    placeholder="Mobile Number"
                  />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div> 
                
                <div>
                  <label className="block text-sm font-medium">Where do you want to use it?</label>
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

                <div>
                  <label className="block text-sm font-medium mb-2">Installation Mode:</label>
                  <RadioGroup 
                    defaultValue="online" 
                    className="flex gap-4"
                    value={formData.installationMode}
                    onValueChange={(value) => setFormData({...formData, installationMode: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online">Online</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="offline" id="offline" />
                      <Label htmlFor="offline">Offline</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <label className="block text-sm font-medium">Message / Requirement</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-red-500" : ""}
                    rows={3}
                    placeholder="Please describe your requirements..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 cursor-pointer">Submit</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
