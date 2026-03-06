export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 py-6 sm:py-8 mt-12">
      <div className="max-w-6xl mx-auto text-center text-xs sm:text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Nadeeka Sachinthana. All rights reserved.</p>
      </div>
    </footer>
  );
}