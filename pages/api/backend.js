import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ipemfodnpbfkhhldtmtl.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function postMessage(msg) {
  const { data, error } = await supabase
    .from('messages')
    .insert([{ title: msg }]);
}

export async function getMessages() {
  let { data: messages, error } = await supabase.from('posts').select('*');
  return messages;
}

export async function deleteMessage(id) {
  const { data, error } = await supabase.from('posts').delete().eq('id', id);
}

export async function logSomething() {
  console.log('hello');
}
