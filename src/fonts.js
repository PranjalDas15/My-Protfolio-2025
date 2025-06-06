import { Oswald, Anton, Parisienne, Roboto_Condensed } from "next/font/google";

export const oswald = Oswald({
    weight: ['200', '300', '400', '500', '600', '700'],
    variable: '--font-oswald',
    subsets: ['latin']
})

export const roboto_condensed = Roboto_Condensed({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800' , '900'],
    variable: '--font-robotoc',
    subsets: ['latin']
})

export const anton = Anton({
    weight: ['400'],
    variable: '--font-anton',
    subsets: ['latin']
})

export const parisienne = Parisienne({
    weight: ['400'],
    variable: '--font-parisienne',
    subsets: ['latin']
})