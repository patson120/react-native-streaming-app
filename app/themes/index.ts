

type ThemeColors = {
    text: string,
    bgColor: (opacity: number) => string,
    primaryColor: (opacity: number) => string
}

export const themeColors: ThemeColors = {
    text: "#f97316",
    bgColor: opacity => `rgba(251, 146, 60, ${opacity})`,
    primaryColor: opacity => `rgba(4, 120, 113, ${opacity})`, // tel color
}