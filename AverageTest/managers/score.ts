const average = (scores: number[]): number => {
    const sortedScores = scores.sort((a, b) => a - b)
    const majorScore = sortedScores[scores.length - 1]
    const secondMajorScore = sortedScores[scores.length - 2]
    return (majorScore + secondMajorScore) / 2
}

const category = (average: number): string => {
    if (average >= 0 && average < 3) {
        return "reprovado."
    } else if (average < 6) {
        return "de recuperaçao"
    } else if (average <= 10) {
        return "aprovado"
    } else {
        return "nota invalida"
    }
}

export const Score = {
    average: average,
    category: category
}