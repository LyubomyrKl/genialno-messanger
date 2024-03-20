export default function dayOfWeekAsString(dayIndex: number) {
    return ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][dayIndex] || '';
}