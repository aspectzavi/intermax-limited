import { whatsappLink, defaultWhatsappMessage } from "@/data/config";

export default function WhatsAppButton({
  message = defaultWhatsappMessage,
  className = "",
  children,
}: {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ||
        "inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
      }
    >
      {children || "Chat on WhatsApp"}
    </a>
  );
}

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Intermax Limited on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 transition hover:scale-105 hover:bg-emerald-400"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.696 4.61 1.9 6.484L4 29l7.71-1.865A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3zm.001 21.7c-1.86 0-3.6-.5-5.1-1.37l-.365-.213-4.573 1.106 1.13-4.457-.238-.375A9.66 9.66 0 0 1 5.3 15c0-5.9 4.8-10.7 10.7-10.7 5.9 0 10.7 4.8 10.7 10.7 0 5.9-4.8 10.7-10.7 10.7zm5.87-8.02c-.32-.16-1.9-.94-2.2-1.045-.295-.108-.51-.16-.725.16-.213.32-.83 1.045-1.02 1.26-.187.213-.375.24-.696.08-.32-.16-1.352-.499-2.575-1.593-.952-.85-1.594-1.897-1.782-2.217-.187-.32-.02-.492.14-.652.145-.144.32-.375.48-.563.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.724-1.746-.993-2.39-.262-.628-.528-.543-.724-.553l-.617-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.095-1.12 2.67 0 1.574 1.147 3.095 1.307 3.308.16.213 2.257 3.445 5.47 4.83.764.33 1.36.527 1.826.674.767.244 1.465.21 2.017.128.615-.092 1.9-.777 2.168-1.527.267-.75.267-1.393.187-1.527-.08-.133-.293-.213-.613-.373z" />
      </svg>
    </a>
  );
}
