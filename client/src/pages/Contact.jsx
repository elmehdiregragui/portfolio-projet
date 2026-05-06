import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact({ theme }) {
  const [state, handleSubmit] = useForm("mwvwdojw");

  return (
   <div
  className={`min-h-screen pt-28 px-6 ${
    theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
  }`}
>
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
          Contact
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Travaillons ensemble
        </h1>

        <p className="text-slate-300 text-lg leading-8 max-w-2xl mb-12">
          Vous avez un projet en tête ? N’hésitez pas à me contacter.
          Je réponds généralement rapidement.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-8 text-cyan-400">
              Informations
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-cyan-400 text-xl">
                  📧
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-white text-lg">
                    elmehdiregragui277@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-cyan-400 text-xl">
                  📞
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wide">
                    Téléphone
                  </p>
                  <p className="text-white text-lg">(263) 388-7161</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-cyan-400 text-xl">
                  📍
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wide">
                    Localisation
                  </p>
                  <p className="text-white text-lg">Laval, Québec, Canada</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              

              <a
                href="tel:2633887161"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-xl transition"
              >
                M'appeler
              </a>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-8 text-cyan-400">
              Envoyer un message
            </h2>

            {state.succeeded ? (
              <div className="bg-slate-950 border border-green-500 rounded-xl px-4 py-6 text-center">
                <p className="text-green-400 text-lg font-semibold">
                  Message envoyé avec succès !
                </p>
                <p className="text-slate-300 mt-2">
                  Merci, je vous répondrai dès que possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-cyan-400"
                />

                <ValidationError
                  prefix="Nom"
                  field="nom"
                  errors={state.errors}
                  className="text-red-400 text-sm"
                />

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-cyan-400"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm"
                />

                <textarea
                  id="message"
                  name="message"
                  placeholder="Votre message"
                  rows="6"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-cyan-400 resize-none"
                ></textarea>

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm"
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-700 disabled:text-slate-400 text-black font-semibold px-6 py-3 rounded-xl transition"
                >
                  {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;