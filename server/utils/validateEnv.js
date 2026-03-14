/**
 * Validates that all required environment variables are present on startup.
 * Throws an error with a descriptive message if any are missing.
 */
const validateEnv = () => {
  const isVercel = process.env.VERCEL === '1';
  
  const required = [
    'EMAIL_USER',
    'EMAIL_PASS'
  ];

  // Only require PORT locally
  if (!isVercel) {
    required.push('PORT');
  }

  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    const errorMsg = `
    ❌ STARTUP ERROR: Missing Environment Variables
    The following keys are missing: ${missing.join(', ')}
    
    If you are on Vercel, add these in Settings > Environment Variables.
    `;
    
    if (isVercel) {
      console.error(errorMsg);
      // Don't exit on Vercel, just let the request fail gracefully
      return;
    } else {
      console.error(errorMsg);
      process.exit(1);
    }
  }

  // Basic email format check for EMAIL_USER
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailUser = process.env.EMAIL_USER || '';
  if (emailUser && !emailRegex.test(emailUser)) {
    console.error(`❌ STARTUP ERROR: Invalid EMAIL_USER - "${emailUser}"`);
    if (!isVercel) process.exit(1);
    return;
  }

  // Check for spaces in EMAIL_PASS
  const emailPass = process.env.EMAIL_PASS || '';
  if (emailPass && emailPass.includes(' ')) {
    console.error(`❌ STARTUP ERROR: Invalid EMAIL_PASS - contains spaces.`);
    if (!isVercel) process.exit(1);
    return;
  }

  console.log('✅ Configuration Validated');
};

export default validateEnv;
