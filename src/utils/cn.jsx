import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
    classGroups: {
        'font-size': [
            {
                text: [
                    'h1',
                    'h2',
                    'h3',
                    'subheading-1',
                    'subheading-2',
                    'subheading-3',
                    'table',
                    'label',
                    'body-highlight',
                    'body-base',
                    'body-sm',
                    'card-heading',
                    'card-subheading',
                    'card-highlight',
                    'card-body',
                ],
            },
        ],
        'font-weight': [
            {
                text: [
                    'h1',
                    'h2',
                    'h3',
                    'subheading-1',
                    'subheading-2',
                    'subheading-3',
                    'table',
                    'label',
                    'body-highlight',
                    'body-base',
                    'body-sm',
                    'card-heading',
                    'card-subheading',
                    'card-highlight',
                    'card-body',
                ],
            },
        ],
    },
});

export function cn(...inputs) {
    return customTwMerge(inputs);
}