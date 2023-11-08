import postcssImport from 'postcss-import'
import tailwindcssNesting from '@tailwindcss/nesting'
import tailwindCss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssUrl from 'postcss-url'
import cssnano from 'cssnano'
export default {

    plugins: [

        postcssImport({
            resolve: (id, basedir, importOptions) => {
                console.log({ id, basedir, importOptions })
                return ''
            },
        }),

        tailwindcssNesting(),
        tailwindCss(),
        autoprefixer(),
        postcssUrl(),

        cssnano({
            preset: ['default', {
                minifyFontValues: {
                    removeQuotes: true,
                },
            }],
        }),

    ],
}
