    // Wait for DOM
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        window.sonner?.toast?.success("You have been successfully logged out") ||
          console.log("You have been successfully logged out");

        setTimeout(() => {
          window.location.href = "/";
        }, 1000); // Extra 1s after toast
      }, 1000); // Simulate logout delay
    });