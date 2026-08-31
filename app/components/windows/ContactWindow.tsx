"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactWindow() {
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setSending(true);
  setMessage("");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const confirmationTemplateId =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONFIRMATION;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  console.log("=== EMAILJS CONFIG ===");
  console.log("Service ID :", serviceId);
  console.log("Template ID :", templateId);
  console.log("Confirmation ID :", confirmationTemplateId);
  console.log("Public Key présente :", !!publicKey);

  if (!serviceId || !templateId || !publicKey) {
    console.error("Variables EmailJS manquantes");

    setMessage(
      "✗ Configuration EmailJS incomplète. Vérifie ton fichier .env.local."
    );

    setSending(false);
    return;
  }

  try {

    console.log("➡️ Envoi du message principal...");

    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Non renseigné",
        message: formData.message,
      },
      publicKey
    );

    console.log("✅ MESSAGE PRINCIPAL :", result.status, result.text);

    setMessage("✓ Message envoyé avec succès !");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (error) {
    console.error("❌ EMAILJS ERROR");

    console.error("Erreur complète :", error);

    if (error instanceof Error) {
      console.error("Error.message :", error.message);
      console.error("Error.stack :", error.stack);
    }

    console.error(
      "Erreur JSON :",
      JSON.stringify(error, Object.getOwnPropertyNames(error))
    );

    setMessage(
      "✗ Impossible d'envoyer le message. Consulte la console."
    );
  } finally {
    setSending(false);
  }
};

  return (
    <div className="p-4 h-full overflow-auto">
      <h2 className="text-2xl font-orange text-[#87CEFA] mb-4 font-bold">
        [SYSTEM] Initialisation du formulaire de contact...
      </h2>

      <p className="text-[#D8BFD8] mb-6">
        Veuillez entrer vos informations pour établir une connexion.
        Toute proposition de contrat, mission ou renseignement sera
        traitée en priorité 🚀
      </p>

      <form
        onSubmit={sendEmail}
        className="space-y-4 font-mono text-sm"
      >
        
        <div>
          <label className="block text-[#D8BFD8] mb-1">
            Nom complet:
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white focus:border-[#87CEFA] outline-none"
          />

          <p className="text-xs text-[#87CEFA] mt-1">
            * Exemple : Poulpi.exe
          </p>
        </div>

        <div>
          <label className="block text-[#D8BFD8] mb-1">
            Email:
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@mail.fr"
            required
            className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white focus:border-[#87CEFA] outline-none"
          />

          <p className="text-xs text-[#87CEFA] mt-1">
            Astuce : utilisez un vrai email 😅
          </p>
        </div>

        <div>
          <label className="block text-[#D8BFD8] mb-1">
            Numéro:
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0606060606"
            pattern="[0-9]{10}"
            className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white focus:border-[#87CEFA] outline-none"
          />

          <p className="text-xs text-[#87CEFA] mt-1">
            Optionnel mais recommandé 📟
          </p>
        </div>

        <div>
          <label className="block text-[#D8BFD8] mb-1">
            Message:
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Bonjour, je vous contacte au sujet de..."
            required
            className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white focus:border-[#87CEFA] outline-none"
          />

          <p className="text-xs text-[#87CEFA] mt-1">
            Tapez votre requête comme si vous étiez sous MS-DOS...
          </p>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="px-4 py-2 bg-[#8A2BE2] text-white hover:bg-[#6A1CB2] border-2 border-[#D8BFD8] font-bold disabled:opacity-50"
        >
          {sending ? "► TRANSMISSION..." : "► ENVOYER"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-[#87CEFA] font-mono">
          [SYSTEM] {message}
        </p>
      )}

      <div className="mt-6 text-[#D8BFD8] border-t border-[#8A2BE2] pt-4">
        <p>[INFO] Canaux alternatifs de connexion :</p>

        <ul className="mt-2 space-y-1">
          <li>
            💼 LinkedIn :{" "}
            <a
              href="https://www.linkedin.com/in/melinda-e-m/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#87CEFA]"
            >
              linkedin.com/in/melinda-e-m
            </a>
          </li>

          <li>
            👩‍💻 GitHub :{" "}
            <a
              href="https://github.com/Melinda-EM"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#87CEFA]"
            >
              github.com/Melinda-EM
            </a>
          </li>
        </ul>
      </div>

      <p className="text-sm text-[#D8BFD8] mt-6">
        [INFO] Vos données resteront confidentielles.
        <br />
        Stockage local :{" "}
        <span className="text-[#87CEFA]">
          C:\Users\Poulpi\Formulaires\2026\
        </span>
      </p>

      <p className="mt-6 text-[#87CEFA] font-bold text-center font-mono">
        --- FIN DE TRANSMISSION ---
        <br />
        Poulpi.exe 🐙
      </p>
    </div>
  );
}