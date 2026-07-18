function Contact() {
    return (
        <main className="w-full px-4 pt-24 max-lg:px-4 max-lg:pt-24">
            <div className="mx-auto w-full max-w-3xl rounded-2xl border border-neutral-600 bg-neutral-900/30 p-4">
                <div className="pb-8">
                    <h2 className="text-2xl font-bold text-mauve-200 capitalize">contatto</h2>
                </div>

                <form className="flex w-full flex-col justify-center text-mauve-200">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 text-lg font-bold sm:flex-row sm:items-center sm:gap-16">
                            <label htmlFor="name" className="min-w-[80px]">
                                nome:
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                required
                                placeholder="noemi bonilla"
                                className="w-full rounded-2xl border border-mauve-800 bg-mauve-100 px-4 py-2 text-center text-md font-medium text-mauve-900 sm:w-80"
                            />
                        </div>

                        <div className="flex flex-col gap-2 text-lg font-bold sm:flex-row sm:items-center sm:gap-16">
                            <label htmlFor="email" className="min-w-[80px]">
                                email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                placeholder="noemi@bonilla.com"
                                className="w-full rounded-2xl border border-mauve-800 bg-mauve-100 px-4 py-2 text-center text-md font-medium text-mauve-900 sm:w-80"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 py-2 pt-4 text-lg font-bold">
                        <div className="w-full py-4 text-center text-sm font-normal">
                            <label htmlFor="message">
                                Per proposte e collaborazioni scrivimi! sono lieta di risponderti. Grazie 🫂
                            </label>
                        </div>

                        <textarea
                            name="message"
                            id="message"
                            placeholder="ciao!"
                            className="w-full rounded-2xl border border-mauve-800 bg-mauve-100 p-2 text-md font-medium text-mauve-900 resize-none"
                        />

                        <button
                            type="submit"
                            className="w-28 cursor-pointer rounded-3xl bg-cyan-600 p-4 capitalize text-mauve-200"
                        >
                            invia
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Contact