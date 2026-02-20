import { invoke } from "@tauri-apps/api/core";

const TitleBar = ({ onOpenSettings }) => {
    const minimize = () => invoke("minimize_window");
    const maximize = () => invoke("toggle_maximize");
    const close = () => invoke("close_window");

    return (
        <div
            data-tauri-drag-region
            className="h-12 bg-slate-950/80 backdrop-blur-md flex justify-between items-center px-4 select-none shrink-0 border-b border-white/5 z-50"
        >
            {/* Sol: Logo + Başlık — sürükleme alanı */}
            <div
                data-tauri-drag-region
                className="flex items-center gap-3 flex-1 h-full cursor-grab active:cursor-grabbing"
            >
                <div className="relative w-6 h-6 flex items-center justify-center pointer-events-none" data-tauri-drag-region>
                    <div className="absolute inset-0 bg-duo-blue/20 rounded-lg blur-sm"></div>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 relative z-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" className="text-duo-blue opacity-30" />
                        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2.5" className="text-duo-blue" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-white animate-pulse" />
                        <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-duo-blue/60" />
                    </svg>
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] pointer-events-none" data-tauri-drag-region>
                    FOCUS <span className="text-slate-700 mx-1">/</span> <span className="text-slate-600 font-bold opacity-70">PROFESYONEL TAKİP</span>
                </span>
            </div>

            {/* Sağ: Butonlar */}
            <div className="flex gap-1 items-center">
                <button
                    onClick={onOpenSettings}
                    className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-all bg-transparent border-none outline-none group mr-2"
                    title="Ayarlar"
                >
                    {/* Vektörel dişli çark SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:rotate-90 transition-all duration-500"
                    >
                        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                    </svg>
                </button>

                <div className="flex gap-1 border-l border-white/10 pl-3">
                    <button
                        onClick={minimize}
                        className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-all bg-transparent border-none outline-none"
                        title="Küçült"
                    >
                        <div className="w-3 h-0.5 bg-slate-500"></div>
                    </button>

                    <button
                        onClick={maximize}
                        className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-all bg-transparent border-none outline-none"
                        title="Büyüt"
                    >
                        <div className="w-3 h-3 border-2 border-slate-500 rounded-sm"></div>
                    </button>

                    <button
                        onClick={close}
                        className="w-10 h-10 rounded-full hover:bg-red-500/20 hover:bg-opacity-20 flex items-center justify-center transition-all group bg-transparent border-none outline-none"
                        title="Kapat"
                    >
                        <div className="relative w-3.5 h-3.5">
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-500 group-hover:bg-red-500 rotate-45"></div>
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-500 group-hover:bg-red-500 -rotate-45"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TitleBar;
