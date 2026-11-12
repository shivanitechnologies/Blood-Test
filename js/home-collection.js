(() => {
  window.NovaCollection = {
    validatePhone(value) { return /^[0-9+\-\s()]{8,16}$/.test(value.trim()); }
  };
})();
