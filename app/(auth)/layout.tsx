import Image from "next/image"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex">
            <section className="xl:w-2/5 w-1/2 p-10 bg-brand lg:flex hidden justify-center items-center">
                <div className="max-w-[430px] max-h-[800px] flex flex-col justify-center gap-12">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        alt="storeit"
                        width={224}
                        height={82}
                        className="object-contain"
                    />

                    <div className="flex flex-col gap-5">
                        <h1 className="h1 text-white">
                            Manage your files the best way
                        </h1>

                        <p className="body-1 text-white">
                            This is a place where you can store all your documents.
                        </p>
                    </div>

                    <Image
                        src="/assets/images/files.png"
                        alt="files"
                        width={342}
                        height={342}
                        className="transition-all hover:rotate-2 hover:scale-105"
                    />
                </div>
            </section>

            <section className="lg:px-10 px-4 lg:py-0 py-10 flex flex-1 flex-col lg:justify-center items-center">
                <div className="mb-16 lg:hidden">
                    <Image
                        src="/assets/icons/logo-full-brand.svg"
                        alt="storeit"
                        width={224}
                        height={82}
                        className="lg:w-[250px] w-[200px] object-contain"
                    />
                </div>

                {children}
            </section>
        </div>
    )
}

export default AuthLayout