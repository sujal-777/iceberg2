'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function CAForm() {
  const [formData, setFormData] = useState({});
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  useEffect(() => {
    const fetchSlots = async () => {
      const { data, error } = await supabase
        .from('available_slots')
        .select('slot_time')
        .order('slot_time');
      if (!error && data) {
        setAvailableSlots(data.map((d: any) => d.slot_time));
      }
    };
    fetchSlots();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('ca_counselling_forms').insert([{ ...formData }]);
    if (!error) {
      setSubmitted(true);
    } else {
      console.error(error);
      alert('Submission failed. Try again.');
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-16 text-2xl font-bold text-green-600"
      >
        ✅ Thank you! We’ll contact you soon.
      </motion.div>
    );
  }

  return (
    <motion.div
      {...fadeInUp}
      className="max-w-4xl mx-auto space-y-8 p-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0f4ff, #ffffff)', borderRadius: '1.5rem' }}
    >
      <svg
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-150px] left-[-150px] opacity-10 rotate-45"
        style={{ width: 300, height: 300 }}
      >
        <path d="M512 0C795.9 0 1024 228.1 1024 512C1024 795.9 795.9 1024 512 1024C228.1 1024 0 795.9 0 512C0 228.1 228.1 0 512 0Z" fill="#3b82f6" />
      </svg>

      <h1 className="text-5xl font-black text-center text-blue-700 tracking-tight">🚀 CA Counselling Booking</h1>
      <p className="text-center text-gray-600 text-lg">Fill out the form below to book your personalized session with our expert mentors.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section: Personal Info */}
        <motion.div {...fadeInUp}>
          <Card className="shadow-xl border-blue-100 border-2">
            <CardContent className="grid gap-4 p-6">
              <h2 className="text-xl font-bold text-blue-600">👤 Personal Details</h2>
              <Input name="fullName" placeholder="Full Name" required onChange={handleChange} />
              <Input name="email" type="email" placeholder="Email" required onChange={handleChange} />
              <Input name="whatsapp" type="tel" placeholder="WhatsApp Number" required onChange={handleChange} />
              <Input name="timeZone" placeholder="Your Time Zone (e.g. IST, PST)" onChange={handleChange} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Section: CA Journey */}
        <motion.div {...fadeInUp}>
          <Card className="shadow-xl border-blue-100 border-2">
            <CardContent className="grid gap-4 p-6">
              <h2 className="text-xl font-bold text-blue-600">📘 Your CA Journey</h2>
              <Input name="currentStage" placeholder="Current CA Stage (e.g., Foundation, Intermediate)" onChange={handleChange} />
              <Input name="targetAttempt" placeholder="Target Attempt (Month/Year)" onChange={handleChange} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Section: Appointment */}
        <motion.div {...fadeInUp}>
          <Card className="shadow-xl border-blue-100 border-2">
            <CardContent className="grid gap-4 p-6">
              <h2 className="text-xl font-bold text-blue-600">🗓️ Schedule Counselling</h2>
              <Label className="text-sm font-medium">Select Available Slot</Label>
              <select
                name="preferredSlot"
                className="p-3 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              >
                <option value="">Select a Slot</option>
                {availableSlots.map((slot, idx) => (
                  <option key={idx} value={slot}>{slot}</option>
                ))}
              </select>
            </CardContent>
          </Card>
        </motion.div>

        {/* Section: Questions */}
        <motion.div {...fadeInUp}>
          <Card className="shadow-xl border-blue-100 border-2">
            <CardContent className="grid gap-4 p-6">
              <h2 className="text-xl font-bold text-blue-600">❓ Questions or Concerns</h2>
              <Textarea name="queries" placeholder="Any specific queries or doubts?" onChange={handleChange} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Section: Consent */}
        <motion.div {...fadeInUp}>
          <Card className="shadow-xl border-blue-100 border-2">
            <CardContent className="grid gap-4 p-6">
              <h2 className="text-xl font-bold text-blue-600">✅ Consent</h2>
              <Label className="flex items-center gap-2">
                <Checkbox onCheckedChange={(v) => handleCheckbox('emailConsent', Boolean(v))} />
                I agree to be contacted via Email.
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox onCheckedChange={(v) => handleCheckbox('whatsappConsent', Boolean(v))} />
                I agree to be contacted on WhatsApp.
              </Label>
            </CardContent>
          </Card>
        </motion.div>

        {/* Submit Button */}
        <motion.div {...fadeInUp} className="text-center pt-4">
          <Button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 text-lg rounded-full shadow-lg"
          >
            {loading ? 'Submitting...' : '🎯 Submit Form'}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}