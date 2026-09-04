"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactWindow() {
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSending(true)
    setMessage("")

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY


    if (!serviceId || !templateId || !publicKey) {
      console.error("Variables EmailJS manquantes")

      setMessage(
        "✗ Configuration EmailJS incomplète. Vérifie ton fichier .env.local."
      )

      setSending(false)
      return
    }

    try {

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
      )

      setMessage("✓ Message envoyé avec succès !")

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("❌ EMAILJS ERROR")
      console.error("Erreur complète :", error)

      if (error instanceof Error) {
        console.error("Error.message :", error.message)
        console.error("Error.stack :", error.stack)
      }

      console.error(
        "Erreur JSON :",
        JSON.stringify(error, Object.getOwnPropertyNames(error))
      )

      setMessage(
        "✗ Impossible d'envoyer le message. Consulte la console."
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="p-5 h-full overflow-auto font-mono">

      <div className="mb-6">
        <h2 className="text-2xl text-[#87CEFA] font-bold mb-3">
          CONTACT.EXE
        </h2>

        <p className="text-[#D8BFD8] leading-relaxed">
          Besoin de me contacter ?
          <br />
          Que ce soit pour une opportunité, un projet, une mission
          ou simplement pour échanger, vous pouvez m'envoyer un message ici.
        </p>
      </div>


      <div className="border-2 border-[#8A2BE2] bg-[#1a0033] px-3 py-2 mb-6 text-xs">
        <span className="text-[#87CEFA]">
          ●
        </span>{" "}
        <span className="text-[#D8BFD8]">
          Connexion disponible — vous pouvez m'écrire
        </span>
      </div>


      <form
        onSubmit={sendEmail}
        className="space-y-5 font-mono text-sm"
      >


        <div>
          <label
            htmlFor="name"
            className="block text-[#87CEFA] mb-1 font-bold"
          >
            Nom complet
          </label>

          <p className="text-xs text-[#D8BFD8] mb-2">
            Comment puis-je vous appeler ?
          </p>
        </div>

          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white placeholder:text-[#777] focus:border-[#87CEFA] outline-none"
          />
        </div>


        <div>
          <label
            htmlFor="email"
            className="block text-[#87CEFA] mb-1 font-bold"
          >
            Email
          </label>

          <p className="text-xs text-[#D8BFD8] mb-2">
            Où puis-je vous répondre ?
          </p>

          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@mail.fr"
            required
            className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white placeholder:text-[#777] focus:border-[#87CEFA] outline-none"
          />
        </div>


        <div>
          <label
            htmlFor="phone"
            className="block text-[#87CEFA] mb-1 font-bold"
          >
            Numéro de téléphone
          </label>

          <p className="text-xs text-[#D8BFD8] mb-2">
            Optionnel — si vous préférez être rappelé(e).
          </p>
        </div>

        <div>
          <label className="block text-[#D8BFD8] mb-1">
            Numéro:
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0606060606"
            pattern="[0-9]{10}"
            className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white placeholder:text-[#777] focus:border-[#87CEFA] outline-none"
          />
        </div>


        <div>
          <label
            htmlFor="message"
            className="block text-[#87CEFA] mb-1 font-bold"
          >
            Message
          </label>

          <p className="text-xs text-[#D8BFD8] mb-2">
            Écrivez votre message ici...
          </p>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Bonjour, je vous contacte au sujet de..."
            required
            className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white placeholder:text-[#777] focus:border-[#87CEFA] outline-none resize-none"
          />
        </div>


        <button
          type="submit"
          disabled={sending}
          className="px-5 py-2 bg-[#8A2BE2] text-white hover:bg-[#6A1CB2] border-2 border-[#D8BFD8] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? "► ENVOI EN COURS..." : "► ENVOYER"}
        </button>
      </form>


      {message && (
        <div className="mt-5 border-2 border-[#8A2BE2] bg-[#1a0033] p-3">
          <p
            className={
              message.startsWith("✓")
                ? "text-[#87CEFA]"
                : "text-red-400"
            }
          >
            {message}
          </p>
        </div>
      )}


      <div className="mt-8 border-t-2 border-[#8A2BE2] pt-5">

        <h3 className="text-[#87CEFA] font-bold mb-2">
          Retrouvez-moi aussi sur :
        </h3>

        <p className="text-xs text-[#D8BFD8] mb-4">
          Quelques autres endroits où me retrouver sur le web.
        </p>

        <div className="space-y-2">

          <a
            href="https://www.linkedin.com/in/melinda-e-m/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 border-2 border-transparent hover:border-[#8A2BE2] hover:bg-[#2a0044] text-[#D8BFD8] hover:text-[#87CEFA] transition-colors"
          >
            💼 LinkedIn
            <span className="text-xs text-[#777] ml-3">
              linkedin.com/in/melinda-e-m
            </span>
          </a>

          <a
            href="https://github.com/Melinda-EM"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 border-2 border-transparent hover:border-[#8A2BE2] hover:bg-[#2a0044] text-[#D8BFD8] hover:text-[#87CEFA] transition-colors"
          >
            👩‍💻 GitHub
            <span className="text-xs text-[#777] ml-3">
              github.com/Melinda-EM
            </span>
          </a>

        </div>
      </div>


      <div className="mt-8 pt-4 border-t border-[#8A2BE2] text-center">

        <p className="text-xs text-[#D8BFD8]">
          Connexion établie.
        </p>

        <p className="text-xs text-[#87CEFA] mt-1">
          Merci d'être passé par ici !
        </p>

        <p className="text-[#87CEFA] font-bold mt-4">
          Poulpi.exe 🐙
        </p>

      </div>

    </div>
  )
}