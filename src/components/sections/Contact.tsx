"use client";

import { useState, FormEvent } from "react";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionReveal from "@/src/components/ui/SectionReveal";

const CONTACT_EMAIL = "Cakepuarknomsod2@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`YZU application inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\nReply to: ${email}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="section-pad scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionReveal>
            <p className="font-mono text-xs tracking-[0.2em] text-accent-primary uppercase">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Get in touch
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-text-muted">
              Questions about my application or projects—send a message and
              I&apos;ll respond as soon as I can.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-sm text-accent-primary transition-colors hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
            >
              <Mail className="h-5 w-5" aria-hidden />
              {CONTACT_EMAIL}
            </a>
          </SectionReveal>

          <SectionReveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border-default bg-bg-secondary p-6 sm:p-8"
              noValidate
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-xs tracking-widest text-text-muted uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-md border border-border-default bg-bg-tertiary px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-xs tracking-widest text-text-muted uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-md border border-border-default bg-bg-tertiary px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/30"
                    placeholder={CONTACT_EMAIL}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-xs tracking-widest text-text-muted uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-md border border-border-default bg-bg-tertiary px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/30"
                    placeholder="Your message…"
                  />
                </div>
              </div>

              {status === "error" && (
                <p
                  className="mt-4 flex items-center gap-2 text-sm text-warning"
                  role="alert"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
                  Please fill in all fields.
                </p>
              )}
              {status === "sent" && (
                <p
                  className="mt-4 flex items-center gap-2 text-sm text-success"
                  role="status"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
                  Opening your mail client…
                </p>
              )}

              <button
                type="submit"
                className="btn-primary mt-6 w-full sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden />
                Send message
              </button>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
