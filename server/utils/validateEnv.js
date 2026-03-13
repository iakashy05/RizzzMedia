/**
 * Validates that all required environment variables are present on startup.
 * Throws an error with a descriptive message if any are missing.
 */
const validateEnv = () => {
  const required = [
    'PORT',
    'EMAIL_USER',
    'EMAIL_PASS'
  ];

  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    console.error(`
    ❌ STARTUP ERROR: Missing Environment Variables
    The following keys are missing in your .env file:
    ${missing.join(', ')}

    Please check your .env file and ensure these are defined.
    Refer to .env.example for the required format.
    `);
    process.exit(1);
  }

  // Basic email format check for EMAIL_USER
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(process.env.EMAIL_USER)) {
    console.error(`
    ❌ STARTUP ERROR: Invalid EMAIL_USER
    "${process.env.EMAIL_USER}" does not look like a valid email address.
    `);
    process.exit(1);
  }

  // Check for spaces in EMAIL_PASS (common mistake with Google App Passwords)
  if (process.env.EMAIL_PASS.includes(' ')) {
    console.error(`
    ❌ STARTUP ERROR: Invalid EMAIL_PASS
    Your EMAIL_PASS contains spaces. Google App Passwords must be entered without spaces.
    Example: "ghlyahwknlgrcdjs" instead of "ghly ahwk nlgr cdjs"
    `);
    process.exit(1);
  }

  console.log('✅ Configuration Validated');
};

export default validateEnv;
