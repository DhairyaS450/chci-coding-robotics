import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          display_name: string | null
          role: 'guest' | 'member' | 'moderator' | 'admin'
          avatar_url: string | null
          joined_at: string
          school: string | null
        }
        Insert: {
          id?: string
          email: string
          display_name?: string | null
          role?: 'guest' | 'member' | 'moderator' | 'admin'
          avatar_url?: string | null
          joined_at?: string
          school?: string | null
        }
        Update: {
          id?: string
          email?: string
          display_name?: string | null
          role?: 'guest' | 'member' | 'moderator' | 'admin'
          avatar_url?: string | null
          joined_at?: string
          school?: string | null
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          slug: string
          description: string
          tech_stack: string[]
          repo_url: string | null
          demo_url: string | null
          media: any | null
          status: 'pending' | 'rejected' | 'published'
          is_featured: boolean
          created_by: string
          approved_by: string | null
          rejection_reason: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description: string
          tech_stack: string[]
          repo_url?: string | null
          demo_url?: string | null
          media?: any | null
          status?: 'pending' | 'rejected' | 'published'
          is_featured?: boolean
          created_by: string
          approved_by?: string | null
          rejection_reason?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string
          tech_stack?: string[]
          repo_url?: string | null
          demo_url?: string | null
          media?: any | null
          status?: 'pending' | 'rejected' | 'published'
          is_featured?: boolean
          created_by?: string
          approved_by?: string | null
          rejection_reason?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string
          location: string
          start_time: string
          end_time: string
          recurrence: any | null
          created_by: string
          updated_by: string
          status: 'draft' | 'published'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          location: string
          start_time: string
          end_time: string
          recurrence?: any | null
          created_by: string
          updated_by?: string
          status?: 'draft' | 'published'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          location?: string
          start_time?: string
          end_time?: string
          recurrence?: any | null
          created_by?: string
          updated_by?: string
          status?: 'draft' | 'published'
          created_at?: string
          updated_at?: string
        }
      }
      problems_of_the_week: {
        Row: {
          id: string
          title: string
          source: string
          external_url: string
          notes: string | null
          week_start: string
          created_by: string
          approved_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          source: string
          external_url: string
          notes?: string | null
          week_start: string
          created_by: string
          approved_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          source?: string
          external_url?: string
          notes?: string | null
          week_start?: string
          created_by?: string
          approved_by?: string | null
          created_at?: string
        }
      }
      sponsors: {
        Row: {
          id: string
          name: string
          logo_path: string | null
          description: string | null
          contact_email: string | null
          website: string | null
          level: 'bronze' | 'silver' | 'gold'
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          logo_path?: string | null
          description?: string | null
          contact_email?: string | null
          website?: string | null
          level?: 'bronze' | 'silver' | 'gold'
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          logo_path?: string | null
          description?: string | null
          contact_email?: string | null
          website?: string | null
          level?: 'bronze' | 'silver' | 'gold'
          created_at?: string
        }
      }
      site_settings: {
        Row: {
          id: string
          key: string
          value: any
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          value: any
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          value?: any
          created_at?: string
          updated_at?: string
        }
      }
      activity_logs: {
        Row: {
          id: string
          user_id: string
          action_type: string
          resource: string
          resource_id: string | null
          details: any | null
          timestamp: string
        }
        Insert: {
          id?: string
          user_id: string
          action_type: string
          resource: string
          resource_id?: string | null
          details?: any | null
          timestamp?: string
        }
        Update: {
          id?: string
          user_id?: string
          action_type?: string
          resource?: string
          resource_id?: string | null
          details?: any | null
          timestamp?: string
        }
      }
    }
  }
}