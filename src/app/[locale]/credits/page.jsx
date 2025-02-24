export default function CreditsPage() {
    return (
        <div className="w-svw h-svh bg-background dark:bg-background-dark relative flex justify-center items-center">
            <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover z-0 saturate-0 brightness-50"
            >
                <source src="/videos/bgSunVideo.mp4" type="video/mp4" />
            </video>
            <div className="max-w-3xl mx-auto px-6 relative">
                <h1 className="text-4xl mb-8 text-cyan-300 font-clash font-semibold">Créditos</h1>

                <div className="space-y-6 text-justify font-normal font-archivo text-white">
                    <p>
                        LUMA utiliza imágenes del Observatorio Solar y Heliosférico SOHO (Solar and Heliospheric
                        Observatory) para
                        realizar sus análisis y obtener parámetros de actividad solar. SOHO es un proyecto de
                        cooperación
                        internacional entre la ESA (Agencia Espacial Europea) y la NASA.
                    </p>

                    <p>
                        Las imágenes utilizadas en nuestra aplicación provienen de diferentes instrumentos a bordo del
                        SOHO,
                        incluyendo el Extreme ultraviolet Imaging Telescope (EIT) que captura imágenes del Sol en
                        diferentes
                        longitudes de onda del ultravioleta extremo, y el Michelson Doppler Imager (MDI) que proporciona
                        imágenes de
                        la fotosfera solar.
                    </p>

                    <p>
                        Agradecemos al equipo de SOHO por hacer estas imágenes disponibles para la comunidad científica
                        y educativa.
                        Las imágenes de SOHO son cruciales para nuestro trabajo de análisis y comprensión de la
                        actividad solar.
                    </p>

                    <div className="mt-16 text-center text-sm text-cyan-300 font-archivo">
                        Hecho con ❤️ desde el semillero de astronomía y ciencia de datos de la UTB
                    </div>
                </div>
            </div>
        </div>
    )
}

