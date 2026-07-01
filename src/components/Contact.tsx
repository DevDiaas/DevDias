import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../context/LanguageContext";
import { useAudio } from "../context/AudioContext";
import { Mail, Check, Github, Linkedin, Send, AlertCircle, Copy, Instagram } from "lucide-react";

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { playHover, playClick } = useAudio();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "jandersonvidalvidal14@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    playClick();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = t.contact.requiredField;
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = t.contact.requiredField;
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "E-mail inválido / Invalid email";
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = t.contact.requiredField;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      playClick();
      return;
    }

    setIsSending(true);
    setSendSuccess(false);
    setSendError(false);
    playClick();

    try {
      const response = await fetch("https://formsubmit.co/ajax/jandersonvidalvidal14@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Novo contato de ${form.name} via Portfólio`,
        }),
      });

      if (response.ok) {
        setSendSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setSendError(true);
      }
    } catch (err) {
      setSendError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-6 md:px-12 bg-transparent overflow-hidden"
    >
      {/* Decorative background glow matching DevDias color palette */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-radial from-blue-500/5 via-cyan-500/2 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-left">
        {/* Main Section Header */}
        <div className="mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight mb-4" id="contact-title">
              {t.contact.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed max-w-2xl" id="contact-subtitle">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Form and Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Send a Message Form */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="contact-form-column"
          >
            {/* Column Header: Comment Style */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs sm:text-sm font-bold text-blue-400 tracking-wider flex-shrink-0">
                // {t.contact.sendMessageLabel}
              </span>
              <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/20 to-transparent" />
            </div>

            {/* Simulated success or error alerts */}
            <AnimatePresence mode="wait">
              {sendSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20 flex gap-3"
                  id="contact-success-alert"
                >
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.contact.successTitle}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">{t.contact.successDesc}</p>
                  </div>
                </motion.div>
              )}

              {sendError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-lg bg-rose-500/5 border border-rose-500/20 flex gap-3"
                  id="contact-error-alert"
                >
                  <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.contact.errorTitle}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">{t.contact.errorDesc}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Core Message Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="contact-message-form">
              {/* Field: Name */}
              <div className="flex flex-col">
                <label className="font-mono text-xs font-bold text-blue-400/90 mb-2.5 tracking-wider flex items-center gap-1.5">
                  <span>//</span>
                  <span>{t.contact.nameLabel}</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder={t.contact.namePlaceholder}
                  className={`w-full bg-[#070b19]/60 border rounded-lg px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all font-mono text-sm ${
                    errors.name ? "border-rose-500/30" : "border-blue-500/10 hover:border-blue-500/20"
                  }`}
                  id="contact-input-name"
                />
                {errors.name && (
                  <span className="text-rose-400 text-[11px] font-mono mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </span>
                )}
              </div>

              {/* Field: Email */}
              <div className="flex flex-col">
                <label className="font-mono text-xs font-bold text-blue-400/90 mb-2.5 tracking-wider flex items-center gap-1.5">
                  <span>//</span>
                  <span>{t.contact.emailLabel}</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder={t.contact.emailPlaceholder}
                  className={`w-full bg-[#070b19]/60 border rounded-lg px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all font-mono text-sm ${
                    errors.email ? "border-rose-500/30" : "border-blue-500/10 hover:border-blue-500/20"
                  }`}
                  id="contact-input-email"
                />
                {errors.email && (
                  <span className="text-rose-400 text-[11px] font-mono mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </span>
                )}
              </div>

              {/* Field: Message */}
              <div className="flex flex-col">
                <label className="font-mono text-xs font-bold text-blue-400/90 mb-2.5 tracking-wider flex items-center gap-1.5">
                  <span>//</span>
                  <span>{t.contact.messageLabel}</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder={t.contact.messagePlaceholder}
                  rows={5}
                  className={`w-full bg-[#070b19]/60 border rounded-lg px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all font-mono text-sm resize-none leading-relaxed ${
                    errors.message ? "border-rose-500/30" : "border-blue-500/10 hover:border-blue-500/20"
                  }`}
                  id="contact-input-message"
                />
                {errors.message && (
                  <span className="text-rose-400 text-[11px] font-mono mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Styled Submit Button */}
              <div className="mt-2">
                <motion.button
                  type="submit"
                  disabled={isSending}
                  onMouseEnter={playHover}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-mono uppercase text-xs font-bold tracking-widest px-7 py-4 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] disabled:opacity-50 transition-all duration-300 group cursor-pointer"
                  id="contact-submit-button"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  {isSending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{t.contact.sending}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.contact.submitBtn}</span>
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Connect Info & Availability */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="contact-connect-column"
          >
            {/* Column Header: Comment Style */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs sm:text-sm font-bold text-blue-400 tracking-wider flex-shrink-0">
                // {t.contact.connectLabel}
              </span>
              <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/20 to-transparent" />
            </div>

            {/* List of elegant connection card details */}
            <div className="flex flex-col gap-4" id="contact-cards-container">
              
              {/* GitHub Card */}
              <a
                href="https://github.com/DevDiaas"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="group relative flex items-center gap-4 p-4 rounded-xl border border-blue-500/10 bg-[#070b19]/40 hover:bg-blue-500/5 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-300"
                id="connect-card-github"
              >
                <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10 text-blue-400 group-hover:text-cyan-400 group-hover:scale-105 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-bold font-mono text-gray-500 tracking-wider uppercase">GitHub</span>
                  <span className="text-sm font-mono text-white mt-0.5 group-hover:text-blue-300 transition-colors">@DevDiaas</span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/janderson-vidal"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="group relative flex items-center gap-4 p-4 rounded-xl border border-blue-500/10 bg-[#070b19]/40 hover:bg-blue-500/5 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-300"
                id="connect-card-linkedin"
              >
                <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10 text-blue-400 group-hover:text-cyan-400 group-hover:scale-105 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-bold font-mono text-gray-500 tracking-wider uppercase">LinkedIn</span>
                  <span className="text-sm font-mono text-white mt-0.5 group-hover:text-blue-300 transition-colors">/in/janderson-vidal</span>
                </div>
              </a>

              {/* Email Card with copy functionality */}
              <div
                className="group relative flex items-center justify-between gap-4 p-4 rounded-xl border border-blue-500/10 bg-[#070b19]/40 hover:bg-blue-500/5 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-pointer"
                onClick={handleCopyEmail}
                onMouseEnter={playHover}
                id="connect-card-email"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10 text-blue-400 group-hover:text-cyan-400 group-hover:scale-105 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-bold font-mono text-gray-500 tracking-wider uppercase">Email</span>
                    <span className="text-sm font-mono text-white mt-0.5 group-hover:text-blue-300 transition-colors text-ellipsis overflow-hidden max-w-[210px] sm:max-w-none">
                      {emailAddress}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Column Divider & Availability status block */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs sm:text-sm font-bold text-blue-400 tracking-wider flex-shrink-0">
                  /* {t.contact.availabilityLabel} */
                </span>
                <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/20 to-transparent" />
              </div>

              <div
                className="p-5 rounded-xl border border-cyan-500/10 bg-gradient-to-br from-[#070b19]/60 via-[#070b19]/30 to-transparent backdrop-blur-sm"
                id="availability-container"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
                  <span className="font-mono text-[11px] font-bold text-cyan-400 tracking-widest uppercase">
                    Active Status
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed" id="availability-text">
                  {t.contact.availabilityText}
                </p>
              </div>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
