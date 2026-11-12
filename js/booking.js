(() => {
  const bookings = [];
  window.NovaBooking = {
    save(data) {
      const reference = "NL-" + Math.random().toString(36).slice(2, 8).toUpperCase();
      bookings.unshift({ tests: data.tests, date: data.date, reference, status: "Appointment requested" });
      return reference;
    },
    getAll() { return bookings.slice(); },
    remove(reference) {
      const index = bookings.findIndex(booking => booking.reference === reference);
      if (index >= 0) bookings.splice(index, 1);
    }
  };
})();
