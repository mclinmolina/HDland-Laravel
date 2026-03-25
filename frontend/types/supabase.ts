export type Database = {
  public: {
    Tables: {
      media: {
        Row: {
          id: string
          title: string
          url: string
          created_at: string
        }
        Insert: {
          title: string
          url: string
        }
        Update: {
          title?: string
          url?: string
        }
      }
    }
  }
}