function Footer() {
    return (
        <footer className="w-full border-t border-black/10 dark:border-white/10 text-gray-300 py-4 px-6">
            <div className="flex flex-col md:flex-row max-w-[1180px] text-sm text-neutral-500 dark:text-white/60 mx-auto px-6 py-4 items-center md:justify-between">
                <span className="font-bold tracking-tight text-neutral-700 dark:text-white/80">Movie<span className="text-brand-500">Find</span>
            </span>
            <div className="flex text-sm text-gray-400 gap-6 items-center">
                <p className="hover:text-neutral-900 dark:hover:text-white cursor-pointer">About</p>
                <p className="hover:text-neutral-900 dark:hover:text-white cursor-pointer">GitHub</p>
                <p className="hover:text-neutral-900 dark:hover:text-white cursor-pointer">Contact</p>
            </div>
                <p>&copy; 2026 MovieFind.</p> 
            </div>
        </footer>
    )
}

export default Footer