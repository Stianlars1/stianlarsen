"use client";

import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "./formContainer.css";

import { Reveal } from "@/components/reveal";
import { ButtonLoading } from "@/components/ui/ButtonLoading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { sendEmail } from "../email/send";
import { EmailFromContactFormTemplate } from "../email/template/template";

const formSchema = z.object({
  name: z.string().min(2, { message: "This field is required." }),
  email: z
    .string()
    .min(1, { message: "This field is required." })
    .email("This is not a valid email address"),
});
export const FormContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("clicked!", values);
    setIsLoading(true);

    try {
      const formattedMessage = message.replace(/\n/g, "<br>");

      const htmlContent = EmailFromContactFormTemplate({
        name: values.name,
        email: values.email,
        message: formattedMessage,
      });

      const { isSuccess } = await sendEmail({
        fromName: values.name,
        fromEmail: values.email,
        message: message,
        subject: "‼️ Melding fra kontaktskjema 🎉",
        html: htmlContent,
      });

      if (isSuccess) {
        console.log("Email sent successfully!");
        toast({
          title: "Email sent successfully 🎉",
          description: "I will get back to you as soon as possible.",
        });
        form.reset();
        setMessage("");
      }
    } catch (err) {
      console.log(err, " \nNot successfull");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="form-container">
      <Form {...form}>
        <form className="space-y-8 textBackgroundImage">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <Reveal type="up" delay={0.4} width="100%">
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write you're full name"
                      className="margin-top"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </Reveal>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem style={{ marginTop: "20px" }}>
                <Reveal type="up" delay={0.5} width="100%">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write you're email address"
                      className="margin-top"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </Reveal>
              </FormItem>
            )}
          />
        </form>
      </Form>

      <div
        className="grid w-full gap-1.5 textBackgroundImage"
        style={{ marginTop: "20px" }}
      >
        <Label htmlFor="message">
          <Reveal type="up" delay={0.6} width="100%">
            Your message
          </Reveal>
        </Label>
        <Reveal type="up" delay={0.6} width="100%">
          <Textarea
            value={message}
            placeholder="Type your message here."
            id="message"
            onChange={(e: any) => setMessage(e.target.value)}
            className="margin-top"
          />
        </Reveal>
      </div>

      {!isLoading && (
        <Button
          className="cta-button"
          variant={"default"}
          onClick={form.handleSubmit(onSubmit)}
        >
          Send mail to reach out
        </Button>
      )}

      {isLoading && <ButtonLoading />}
    </div>
  );
};
