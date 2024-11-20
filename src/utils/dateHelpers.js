// src/utils/dateHelpers.js
const getDayOfWeek = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = days[now.getDay()];
    console.log("Day of Week:", dayOfWeek); // Imprimir el día para diagnóstico
    return dayOfWeek;
};

module.exports = {
    getDayOfWeek
};
