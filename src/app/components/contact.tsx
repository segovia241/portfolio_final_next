"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react";
import TextLookup from "@components/text-lookup";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success state
    setIsSubmitted(true);

    // Reset form after delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
      setIsSubmitted(false);
    }, 3000);

    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-16 relative mx-5">
      {/* Background animation */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          <TextLookup>get_in_touch</TextLookup>
        </h2>

        {/* Updated grid with proper centering */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-4">
            <Card className="hover-scale h-full">
              <CardHeader>
                <CardTitle className="mb-4">
                  <TextLookup>contact_information</TextLookup>
                </CardTitle>
                <CardDescription className="mb-2">
                  <TextLookup>contact_message</TextLookup>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center group">
                  <div className="p-2 mr-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <a
                    href="mailto:segovia.network@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    segovia.network@gmail.com
                  </a>
                </div>
                <div className="flex items-center group">
                  <div className="p-2 mr-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <a
                    href="https://api.whatsapp.com/send?phone=51951291338"
                    className="hover:text-primary transition-colors"
                  >
                    +51 951 291 338
                  </a>
                </div>
                <div className="flex items-center group">
                  <div className="p-2 mr-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>Lima, Perú - Villa María del Triunfo</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <Card className="hover-glow">
              <CardHeader>
                <CardTitle className="mb-4">
                  <TextLookup>send_message</TextLookup>
                </CardTitle>
                <CardDescription className="mb-2">
                  <TextLookup>response_time</TextLookup>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center animate-float">
                    <CheckCircle className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <TextLookup>message_sent</TextLookup>
                    </h3>
                    <p className="text-muted-foreground">
                      <TextLookup>thank_you_message</TextLookup>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10 mx-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          <TextLookup>name</TextLookup>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="hover-scale focus:hover-glow transition-all duration-300 mt-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          <TextLookup>email</TextLookup>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="hover-scale focus:hover-glow transition-all duration-300 mt-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        <TextLookup>subject</TextLookup>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="hover-scale focus:hover-glow transition-all duration-300 mt-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        <TextLookup>message</TextLookup>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="hover-scale focus:hover-glow transition-all duration-300 mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full hover-scale group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                          <TextLookup>sending</TextLookup>
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />{" "}
                          <div className="text-background">
                            <TextLookup>send_message</TextLookup>
                          </div>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
