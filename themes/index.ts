

type ThemeColors = {
    text: string,
    bgColor: (opacity: number) => string,
    primaryColor: (opacity: number) => string
}

export const themeColors: ThemeColors = {
    text: "#f97316",
    bgColor: opacity => `rgba(251, 146, 60, ${opacity})`,
    primaryColor: opacity => `rgba(13, 148, 136, ${opacity})`, // tel color
}