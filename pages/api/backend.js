import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ipemfodnpbfkhhldtmtl.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function postPost(title, body) {
  const { data, error } = await supabase
    .from('posts')
    .insert([{ title, body }]);
  return data;
}

export async function getPosts() {
  let { data: messages, error } = await supabase.from('posts').select('*');
  return messages;
}

export async function deletePost(id) {
  const { data, error } = await supabase.from('posts').delete().eq('id', id);
}

export async function updatePost({ id, title, body }) {
  const { data, error } = await supabase
    .from('posts')
    .update({ title, body })
    .eq('id', id);
  return data;
}
