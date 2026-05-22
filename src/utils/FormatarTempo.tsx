export const formatarTempo = (minutes: number) => {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    if (hours >= 24) {
      const days = Math.floor(hours / 24);
      return `${days} dia${days > 1 ? "s" : ""} atrás`;
    }

    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) return `${hours}h atrás`;
    return `${hours}h ${remainingMinutes}m atrás`;
  }

  return `${minutes} min atrás`;
};
