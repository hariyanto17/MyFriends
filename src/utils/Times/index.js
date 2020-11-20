export const getTime = date => {
    const hour = date.getHours();

    if (hour >= 1 && hour <= 12) {
        return 'Good Morning'
    } else if (hour > 12 && hour <= 16) {
        return 'Good Afternoon'
    } else if (hour > 16 && hour <= 21) {
        return 'Good Evening'
    } else if (hour > 21 && hour <= 24 || hour === 0) {
        return 'Good Night'
    } else {
        return 'Helloo'
    }
    

  };