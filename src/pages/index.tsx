import ContactForm from "../components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/50 text-sm font-medium">
          Contact Us
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let's Get In Touch.
        </h1>
        <p className="text-muted-foreground">
          Or just reach out manually to{" "}
          <a
            href="mailto:hello@example.com"
            className="text-primary hover:underline"
          >
            hello@example.com
          </a>
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Index;