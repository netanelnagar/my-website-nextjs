'use client';
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { LuMail } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { RiLoader2Line } from "react-icons/ri";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const { toast } = useToast();
  const moreThanTwo = useRef<number>(0)

  const onSubmit = async (data: ContactFormData) => {
    if (moreThanTwo.current >= 1) {
      toast({
        title: "Too many submissions",
        description: "Please wait one hour before sending another message.",
      });
      return;
    }
    moreThanTwo.current++;

    try {
        // TODO: change the url to your own aws lambda function url use env variables
      const res = await fetch('https://xiosh47esxpxec3jdgp6qv32xm0luxgn.lambda-url.eu-central-1.on.aws/', {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: `Email from ${data.fullName} - ${data.email} ${data.phone ? `- ${data.phone}` : ""}`,
          emailBody: data.message,
          toAddress: "netanelnagar1234@gmail.com"
        })
      })
      if (!res.ok) {
        throw new Error((await res.json()).body);
      }
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Message me on WhatsApp.",
      });
    }
  };

  useEffect(() => {
    document.title = "Contact | Netanel Nagar";
    const interval = setInterval(() => {
      moreThanTwo.current = 0;
     }, 60 * 60 * 1000);

    return () => clearInterval(interval);

  }, [])


  return (
    <>
      <div className="py-12 grow px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-slate-100 p-8 md:px-60 md:py-8 rounded-lg ">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-linear-to-r from-primary to-secondary p-3 rounded-lg">
                <LuMail className="h-6 w-6 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold  mb-4">
              Get in touch
            </h1>
            <p className="text-gray-600">Let's work together!</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                {...register("fullName", { required: "Full name is required" })}
                placeholder="Full name"
                className="w-full"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Email address"
                className="w-full"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register("phone")}
                type="tel"
                placeholder="Phone number"
                className="w-full"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <Textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Message"
                className="w-full min-h-[150px]"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/80 text-white py-3 rounded-lg transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting && <RiLoader2Line className="animate-spin" />} {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>

      <a
        href="https://wa.me/972555686119"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-50 p-3 lg:p-4 rounded-full bg-linear-to-r from-primary to-secondary text-white shadow-lg hover:scale-105 transition-transform"
      >
        <FaWhatsapp className="w-6 h-6 lg:w-8 lg:h-8" />
      </a>
    </>
  );
};

export default Contact;