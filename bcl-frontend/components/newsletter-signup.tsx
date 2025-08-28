'use client';
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { motion } from 'framer-motion';

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {isSubscribed ? (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold text-green-800 mb-2 text-base">Successfully Subscribed!</h3>
            <p className="text-green-700 text-sm">
              Thank you for joining our community. Stay tuned for the latest blockchain updates!
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="font-serif text-xl font-bold text-gray-900">Stay Updated</h3>
            </div>
            <p className="text-gray-600 mb-4 text-base">
              Subscribe for the latest blockchain news, event updates, and exclusive content.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-base"
              />
              <Button
                type="submit"
                className="w-full text-base bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe anytime.</p>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}