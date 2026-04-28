const WHATSAPP_NUMBER = "256700000000";
const WHATSAPP_TEXT = encodeURIComponent("Hi Swangz Creative Academy, I would like to learn more about your courses.");

export function FloatingWhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0012.03 0C5.4 0 .02 5.38.02 12c0 2.12.55 4.2 1.6 6.04L0 24l6.14-1.6A11.96 11.96 0 0012.02 24h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.51-8.52zM12.03 21.9c-1.8 0-3.57-.48-5.12-1.38l-.37-.22-3.64.95.97-3.55-.24-.37A9.83 9.83 0 012.2 12c0-5.42 4.4-9.83 9.83-9.83 2.62 0 5.08 1.02 6.93 2.89a9.75 9.75 0 012.9 6.94c0 5.42-4.4 9.83-9.83 9.83zm5.4-7.37c-.3-.15-1.8-.9-2.08-1-.28-.1-.48-.15-.68.15-.2.3-.78 1-.95 1.2-.18.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.47.13-.62.13-.12.3-.32.45-.48.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.54 0 1.5 1.08 2.95 1.24 3.16.15.2 2.13 3.26 5.17 4.57.72.31 1.29.5 1.73.64.73.24 1.4.2 1.92.13.59-.09 1.8-.74 2.06-1.45.25-.72.25-1.34.18-1.46-.08-.12-.28-.2-.58-.35z" />
      </svg>
    </a>
  );
}
