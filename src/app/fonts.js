import localFont from 'next/font/local'

const clashDisplay = localFont({
    src: './fonts/ClashDisplay-Variable.ttf',
    variable: '--font-clash'
})

const archivo = localFont({
    src: [
        {
            path: './fonts/Archivo-Variable.ttf',
            style: 'normal',
        },
        {
            path: './fonts/Archivo-VariableItalic.ttf',
            style: 'italic',
        }
    ],
    variable: '--font-archivo'
})

export { clashDisplay, archivo }
