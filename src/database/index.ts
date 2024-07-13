import { createClient, SupabaseClientOptions } from "@supabase/supabase-js";
import { Database } from '../../supabase/supabase';
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

// Create a single supabase client for interacting with your database

export const supaBase = () => {
  const [url, key] = [
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_API_KEY,
  ];
  const options:SupabaseClientOptions<'public'> = {
    db: {
      schema: "public",
    },
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
    global: {
      headers: { "x-my-custom-header": "a1naire" },
    },
  };

  const supabase = createClient<Database>(<string>url, <string>key, options);
  return supabase;
};

interface CreateUserDto {
    id?: string
    email: string | null;
    phone: string | null;

}

const sb = supaBase();

export const Supabase = {
  CreateUser: async (dto: CreateUserDto)=>{
    const { data, error } = await sb
      .from('users')
      .insert({...dto, id:uuidv4()})
      .select()

      return {data, error}
    },

    GetUser: async () => {
      const { data, error } = await sb.from("users").select("*");
      return { data, error}
    },

    SupaBase: sb,

}

export const SupaBaseContext = createContext(Supabase)

