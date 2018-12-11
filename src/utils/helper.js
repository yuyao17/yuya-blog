export const coffenate = mins => {
  const coffee = Math.round(mins / 5)

  return `${new Array(coffee || 1).fill('☕️').join('')} ${mins} mins to read`
}
