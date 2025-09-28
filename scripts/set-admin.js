import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('Supabase URL or Service Role Key is missing. Make sure to set them in your .env.local file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function setAdmin(email) {
  if (!email) {
    console.error('Please provide an email address.');
    console.log('Usage: node scripts/set-admin.js <user_email>');
    return;
  }

  console.log(`Attempting to grant admin role to ${email}...`);

  // First, get the user by email
  const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
  
  if (listError) {
    console.error('Error listing users:', listError.message);
    return;
  }

  const user = users.find(u => u.email === email);

  if (!user) {
    console.error(`User with email ${email} not found.`);
    return;
  }

  // Now, update the user's app_metadata
  const { data: updatedUser, error: updateError } = await supabase.auth.admin.updateUserById(
    user.id,
    { app_metadata: { ...user.app_metadata, role: 'admin' } }
  );

  if (updateError) {
    console.error('Error updating user role:', updateError.message);
  } else {
    console.log(`Successfully granted admin role to ${updatedUser.user.email}`);
    console.log('New app_metadata:', updatedUser.user.app_metadata);
  }
}

const email = process.argv[2];
setAdmin(email);
