import { CONSTANTS } from './../constants';

export interface IColorProps {
    background: string;
    blurColor: string;
    letterColor: string;
}

export function getCurrentColor (letter: string) {
    const colors: Record<string, IColorProps> = {
        A: {
            background: CONSTANTS.colors.purple_light,
            blurColor: CONSTANTS.colors.purple_primary,
            letterColor: CONSTANTS.colors.purple
        },
        B: {
            background: CONSTANTS.colors.green_light,
            blurColor: CONSTANTS.colors.green_primary,
            letterColor: CONSTANTS.colors.green
        },
        C: {
            background: CONSTANTS.colors.blue_light,
            blurColor: CONSTANTS.colors.blue_primary,
            letterColor: CONSTANTS.colors.blue
        },
        D: {
            background: CONSTANTS.colors.orange_light,
            blurColor: CONSTANTS.colors.orange_primary,
            letterColor: CONSTANTS.colors.orange
        },
        E: {
            background: CONSTANTS.colors.pink_light,
            blurColor: CONSTANTS.colors.pink_primary,
            letterColor: CONSTANTS.colors.pink
        },
        F: {
            background: CONSTANTS.colors.lilac_light,
            blurColor: CONSTANTS.colors.lilac_primary,
            letterColor: CONSTANTS.colors.lilac
        },
        G: {
            background: CONSTANTS.colors.yellow_light,
            blurColor: CONSTANTS.colors.yellow_primary,
            letterColor: CONSTANTS.colors.yellow
        },
        H: {
            background: CONSTANTS.colors.brown_light,
            blurColor: CONSTANTS.colors.brown_primary,
            letterColor: CONSTANTS.colors.brown
        },
        I: {
            background: CONSTANTS.colors.salmon_light,
            blurColor: CONSTANTS.colors.salmon_primary,
            letterColor: CONSTANTS.colors.salmon
        },
        J: {
            background: CONSTANTS.colors.cyan_light,
            blurColor: CONSTANTS.colors.cyan_primary,
            letterColor: CONSTANTS.colors.cyan
        },
        K: {
            background: CONSTANTS.colors.gray_light,
            blurColor: CONSTANTS.colors.gray_primary,
            letterColor: CONSTANTS.colors.gray
        },
        L: {
            background: CONSTANTS.colors.purple_light,
            blurColor: CONSTANTS.colors.purple_primary,
            letterColor: CONSTANTS.colors.purple
        },
        M: {
            background: CONSTANTS.colors.green_light,
            blurColor: CONSTANTS.colors.green_primary,
            letterColor: CONSTANTS.colors.green
        },
        N: {
            background: CONSTANTS.colors.blue_light,
            blurColor: CONSTANTS.colors.blue_primary,
            letterColor: CONSTANTS.colors.blue
        },
        O: {
            background: CONSTANTS.colors.orange_light,
            blurColor: CONSTANTS.colors.orange_primary,
            letterColor: CONSTANTS.colors.orange
        },
        P: {
            background: CONSTANTS.colors.pink_light,
            blurColor: CONSTANTS.colors.pink_primary,
            letterColor: CONSTANTS.colors.pink
        },
        Q: {
            background: CONSTANTS.colors.lilac_light,
            blurColor: CONSTANTS.colors.lilac_primary,
            letterColor: CONSTANTS.colors.lilac
        },
        R: {
            background: CONSTANTS.colors.yellow_light,
            blurColor: CONSTANTS.colors.yellow_primary,
            letterColor: CONSTANTS.colors.yellow
        },
        S: {
            background: CONSTANTS.colors.brown_light,
            blurColor: CONSTANTS.colors.brown_primary,
            letterColor: CONSTANTS.colors.brown
        },
        T: {
            background: CONSTANTS.colors.salmon_light,
            blurColor: CONSTANTS.colors.salmon_primary,
            letterColor: CONSTANTS.colors.salmon
        },
        U: {
            background: CONSTANTS.colors.cyan_light,
            blurColor: CONSTANTS.colors.cyan_primary,
            letterColor: CONSTANTS.colors.cyan
        },
        V: {
            background: CONSTANTS.colors.gray_light,
            blurColor: CONSTANTS.colors.gray_primary,
            letterColor: CONSTANTS.colors.gray
        },
        W: {
            background: CONSTANTS.colors.purple_light,
            blurColor: CONSTANTS.colors.purple_primary,
            letterColor: CONSTANTS.colors.purple
        },
        X: {
            background: CONSTANTS.colors.green_light,
            blurColor: CONSTANTS.colors.green_primary,
            letterColor: CONSTANTS.colors.green
        },
        Y: {
            background: CONSTANTS.colors.blue_light,
            blurColor: CONSTANTS.colors.blue_primary,
            letterColor: CONSTANTS.colors.blue
        },
        Z: {
            background: CONSTANTS.colors.orange_light,
            blurColor: CONSTANTS.colors.orange_primary,
            letterColor: CONSTANTS.colors.orange
        }
    }

    return colors[letter];
}