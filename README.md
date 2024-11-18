<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Service Provider Sign-Up</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Service Provider Sign-Up</h1>
    <form id="signupForm">
      <label for="email">Email Address *</label>
      <input type="email" id="email" name="email" required>

      <label for="name">Name *</label>
      <input type="text" id="name" name="name" required>

      <label for="state">State *</label>
      <select id="state" name="state" required>
        <option value="">Select a state</option>
        <option value="California">California</option>
        <option value="Texas">Texas</option>
        <!-- Add more states as needed -->
      </select>

      <label for="specialty">Specialty *</label>
      <input type="text" id="specialty" name="specialty" required>

      <label for="phone">Phone Number (Optional)</label>
      <input type="tel" id="phone" name="phone">

      <label for="yearsExp">Years of Experience (Optional)</label>
      <input type="number" id="yearsExp" name="yearsExp" min="0">

      <label for="address">Address (Optional)</label>
      <textarea id="address" name="address"></textarea>

      <label>
        <input type="checkbox" id="serviceAvailable" name="serviceAvailable">
        Currently Available for Service
      </label>

      <button type="submit">Sign Up</button>
      <p id="errorMessage" class="error-message"></p>
    </form>
  </div>

  <script src="script.js"></script>
</body>
</html>
