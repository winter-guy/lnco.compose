/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { addDynamicIconSelectors } from '@iconify/tailwind';

const TAILWIND_PLUGINS = [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
];

const CUSTOM_PLUGINS = [addDynamicIconSelectors()];

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['Oswald', 'sans-serif'],
            body: ['Poppins', 'sans-serif'],
            exclusive: ['cheltenham', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '1.5rem',
        },
        extend: {
            flexGrow: {
                2: '2',
                3: '3',
            },
        },
    },
    plugins: [...TAILWIND_PLUGINS, ...CUSTOM_PLUGINS],
};
