// src/components/ContactForm.tsx
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import CountrySelect from "./CountrySelect";

const ContactForm = () => {
  const { toast } = useToast(); // Ensure this returns a function
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phonePrefix: "+44",
    phoneNumber: "",
    message: "",
    acceptPolicy: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      setFormData({
        fullName: "",
        email: "",
        phonePrefix: "+44",
        phoneNumber: "",
        message: "",
        acceptPolicy: false,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl">
      <div>
        <label htmlFor="fullName" className="text-sm font-medium text-muted-foreground">
          Full Name
        </label>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="Enter your full name..."
          className="mt-1.5"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email address..."
          className="mt-1.5"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
          Phone Number
        </label>
        <div className="mt-1.5 flex gap-2">
          <CountrySelect
            value={formData.phonePrefix}
            onChange={(value) => setFormData({ ...formData, phonePrefix: value })}
          />
          <Input
            id="phone"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="(000) 000-0000"
            className="flex-1"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
          Message
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Enter your main text here..."
          className="mt-1.5 min-h-[120px]"
          maxLength={300}
          required
        />
        <div className="mt-1 text-xs text-muted-foreground text-right">
          {formData.message.length}/300
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          id="policy"
          checked={formData.acceptPolicy}
          onCheckedChange={(checked) => 
            setFormData({ ...formData, acceptPolicy: checked as boolean })
          }
          required
        />
        <label htmlFor="policy" className="text-sm text-muted-foreground">
          I hereby agree to our{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>{" "}
          terms.
        </label>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={loading || !formData.acceptPolicy}
      >
        {loading ? "Sending..." : "Submit Form"}
      </Button>
    </form>
  );
};

export default ContactForm;