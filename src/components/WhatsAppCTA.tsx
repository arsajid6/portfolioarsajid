"use client";

export default function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/923234416045"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center group"
      aria-label="Chat with Abdul Rehman Sajid on WhatsApp"
    >
      {/* Official WhatsApp logo SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.418-2.007A15.936 15.936 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.268a13.22 13.22 0 0 1-6.736-1.843l-.483-.286-4.996 1.192 1.215-4.866-.315-.499A13.22 13.22 0 0 1 2.732 16C2.732 8.664 8.664 2.732 16 2.732S29.268 8.664 29.268 16 23.336 29.268 16 29.268zm7.258-9.878c-.398-.199-2.354-1.162-2.719-1.294-.366-.133-.632-.199-.899.199-.266.398-1.031 1.294-1.264 1.56-.233.265-.465.298-.863.1-.398-.2-1.681-.619-3.203-1.977-1.184-1.057-1.983-2.362-2.216-2.76-.233-.398-.025-.613.175-.812.18-.179.398-.465.598-.698.199-.232.265-.398.398-.664.133-.265.066-.498-.033-.697-.1-.199-.899-2.166-1.231-2.964-.324-.778-.653-.673-.899-.686l-.765-.013a1.47 1.47 0 0 0-1.064.498c-.366.398-1.397 1.365-1.397 3.33 0 1.966 1.43 3.864 1.63 4.13.198.265 2.814 4.3 6.818 6.031.953.412 1.696.657 2.276.841.956.305 1.826.262 2.514.159.767-.114 2.354-.963 2.686-1.893.333-.93.333-1.727.233-1.893-.1-.165-.366-.264-.764-.463z"/>
      </svg>
      <span className="absolute right-full mr-4 bg-[#050505] text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:block">
        Chat with me
      </span>
    </a>
  );
}
