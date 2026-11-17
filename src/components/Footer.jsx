import React from 'react'
import { PROFILE } from '../data'
import { goToChapter } from '../lib/scroll'

export default function Footer() {
    return (
        <footer className="px-5 pb-28 md:px-8">
            <div className="mx-auto flex max-w-5xl flex-col justify-between gap-3 border-t border-line/10 pt-8 text-sm text-muted sm:flex-row">
                <p>
                    © {new Date().getFullYear()} {PROFILE.name}
                </p>
                <button onClick={() => goToChapter(0)} className="text-left hover:text-fg">
                    Back to top ↑
                </button>
            </div>
        </footer>
    )
}
