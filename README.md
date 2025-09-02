📬 Contact Section (React + Tailwind + Shadcn + Lucide)
A modern Contact Section built with React, TailwindCSS, Shadcn/UI, and Lucide Icons.
It features a styled contact form, social/contact methods, quick action buttons, and a terminal-style availability status.
🚀 Features
🎨 Modern UI with Tailwind + Gradient effects
📩 Contact Form with Toast notification
🔗 Quick access to Email, GitHub, LinkedIn, Instagram, Twitter
🧩 Extra section below form with FAQ + Quick Links (WhatsApp, Resume, Book a Call)
🖥️ Terminal-style status (Availability, Response time, Timezone)
⚡ Responsive and mobile-friendly
📂 File Location
Place the component in:
src/components/Contact.tsx
⚙️ Setup
Install dependencies (if not already):
npm install lucide-react @radix-ui/react-toast
Ensure you have Shadcn/UI installed and configured:
npx shadcn-ui init
Import the component wherever you need:
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <div>
      <Contact />
    </div>
  );
}
✉️ Contact Form Logic
Currently, the form:
Accepts Name, Email, Message
On submit → Shows a toast notification
Resets the form
👉 You can extend it to send data using:
EmailJS
Formspree
Your own backend API
Example (handleSubmit update):
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  await fetch("/api/send-message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  toast({
    title: "Message Sent!",
    description: "Thanks for reaching out. I'll get back to you soon!",
  });

  setFormData({ name: "", email: "", message: "" });
};
🎯 Customization
Update contact methods in contactMethods array:
{
  icon: Github,
  title: "GitHub",
  description: "github.com/rishabhm",
  action: "https://github.com/rishabhm",
  color: "text-secondary"
}
Change Quick Links (WhatsApp, Resume, Book a Call)
Modify FAQ section for your needs
Update terminal status (availability / timezone)
📸 Preview
✨ Contact Section includes:
Left: Form + FAQ + Quick Links
Right: About text + Social links + Status panel
🛠️ Tech Stack
React (Next.js compatible)
TailwindCSS
Shadcn/UI Components
Lucide React Icons
