export const CalculateTimeToEvent = () => {
    const eventDate = new Date("2023-12-14T10:00:00-07:00");
    const currentDate = new Date()
    const remainingTime = eventDate.getTime()-currentDate.getTime()

    const days = Math.floor(remainingTime / (1000*60*60*24));
    const hours = Math.floor(
        (remainingTime % (1000*60*60*24)) / (1000*60*60)
    );
    const minutes = Math.floor((remainingTime%(1000*60*60))/(1000*60))
    const seconds = Math.floor((remainingTime%(1000*60))/1000);

    return {days, hours, minutes, seconds}
}
