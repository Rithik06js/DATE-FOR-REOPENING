// Function to calculate the difference between two dates
function dateDifference(date1, date2) {
    // Calculate the difference in milliseconds
    const diffInMilliseconds = date2 - date1;
  
    // Convert the difference to days, hours, and minutes
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  
    // Return the difference as an object
    return { days, hours, minutes };
  }
  
  // Set the date/time for the comparison
  const date2 = new Date('2024-05-23T12:12:00'); // Set to March 1, 2023 at 12:00 PM
  
  // Get the current date/time
  const date1 = new Date();
  
  // Calculate the difference between the two dates
  const diff = dateDifference(date1, date2);
  
  // Display the difference
  console.log(`There are ${diff.days} days, ${diff.hours} hours, and ${diff.minutes} minutes left until ${date2}.`);
