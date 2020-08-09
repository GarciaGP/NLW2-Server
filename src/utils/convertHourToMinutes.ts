// Converte o horário recebido em minutos
export default function convertHourToMinutes(time: string) {
    // 8:00
    const [hour, minutes] = time.split(':').map(Number);
    const TimeInMinutes = (hour * 60 + minutes);

    return TimeInMinutes;
}