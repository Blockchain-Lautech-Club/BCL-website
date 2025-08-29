const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://bcl-website.onrender.com'

export interface Event {
  id: string
  title: string
  description: string
  full_description?: string
  date: string
  time: string
  location: string
  type: string
  status: 'upcoming' | 'past' | 'cancelled'
  attendees: number
  max_attendees: number
  speaker_name: string
  speaker_title: string
  speaker_bio: string
  speaker_avatar?: string
  image?: string
  agenda?: Array<{ time: string; activity: string }>
  created_at: string
  updated_at: string
}

export interface Blog {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  author_bio: string
  author_avatar?: string
  category: string
  tags: string[]
  image?: string
  featured: boolean
  likes: number
  read_time: string
  source_url?: string
  created_at: string
  updated_at: string
}

export interface Member {
  id: string
  first_name: string
  last_name: string
  email: string
  student_id: string
  department: string
  level: string
  phone?: string
  interests: string[]
  experience: string
  goals?: string
  newsletter: boolean
  terms: boolean
  role?: string
  avatar?: string
  projects: number
  events_attended: number
  achievements: string[]
  featured: boolean
  created_at: string
  updated_at: string
}

export interface ApiResponse<T> {
  data: T
  error?: string
}

async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`
  
  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  
  const headers = {
    ...defaultHeaders,
    ...(options.headers as Record<string, string> || {}),
  }
  
  const response = await fetch(url, {
    ...options,
    headers,
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.detail || `HTTP error! status: ${response.status}`)
  }

  return response.json()
}

export const eventApi = {
  getEvents: async (params?: {
    status?: string
    type?: string
    limit?: number
  }): Promise<Event[]> => {
    const searchParams = new URLSearchParams()
    if (params?.status) searchParams.append('status', params.status)
    if (params?.type) searchParams.append('type', params.type)
    if (params?.limit) searchParams.append('limit', params.limit.toString())
    
    const query = searchParams.toString()
    return apiFetch<Event[]>(`/events${query ? `?${query}` : ''}`)
  },

  getEvent: async (id: string): Promise<Event> => {
    return apiFetch<Event>(`/events/${id}`)
  },

  getUpcomingEvents: async (limit?: number): Promise<Event[]> => {
    return eventApi.getEvents({ status: 'upcoming', limit })
  },

  getPastEvents: async (limit?: number): Promise<Event[]> => {
    return eventApi.getEvents({ status: 'past', limit })
  },

  registerForEvent: async (eventId: string, memberId: string): Promise<{ id: string; event_id: string; member_id: string; registered_at: string }> => {
    return apiFetch(`/members/register`, {
      method: 'POST',
      body: JSON.stringify({ event_id: eventId, member_id: memberId }),
    })
  },
}

export const blogApi = {
  getBlogs: async (params?: {
    category?: string
    featured?: boolean
    limit?: number
    search?: string
  }): Promise<Blog[]> => {
    const searchParams = new URLSearchParams()
    if (params?.category) searchParams.append('category', params.category)
    if (params?.featured !== undefined) searchParams.append('featured', params.featured.toString())
    if (params?.limit) searchParams.append('limit', params.limit.toString())
    if (params?.search) searchParams.append('search', params.search)
    
    const query = searchParams.toString()
    return apiFetch<Blog[]>(`/blogs${query ? `?${query}` : ''}`)
  },

  getBlog: async (id: string): Promise<Blog> => {
    return apiFetch<Blog>(`/blogs/${id}`)
  },

  getFeaturedBlogs: async (limit?: number): Promise<Blog[]> => {
    return blogApi.getBlogs({ featured: true, limit })
  },

  getBlogsByCategory: async (category: string, limit?: number): Promise<Blog[]> => {
    return blogApi.getBlogs({ category, limit })
  },

  likeBlog: async (id: string): Promise<{ likes: number }> => {
    return apiFetch<{ likes: number }>(`/blogs/${id}/like`, {
      method: 'POST',
    })
  },

  searchBlogs: async (query: string): Promise<Blog[]> => {
    return blogApi.getBlogs({ search: query })
  },
}

export const adminApi = {
  login: async (username: string, password: string): Promise<{ access_token: string; token_type: string }> => {
    return apiFetch<{ access_token: string; token_type: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
  },

  getAuthHeader: (): Record<string, string> => {
    const token = localStorage.getItem('admin_token')
    return token ? { Authorization: `Bearer ${token}` } : {}
  },

  createEvent: async (eventData: Omit<Event, 'id' | 'created_at' | 'updated_at' | 'attendees' | 'status'>): Promise<Event> => {
    return apiFetch<Event>('/events', {
      method: 'POST',
      headers: {
        ...adminApi.getAuthHeader(),
      },
      body: JSON.stringify(eventData),
    })
  },

  updateEvent: async (id: string, eventData: Partial<Event>): Promise<Event> => {
    return apiFetch<Event>(`/events/${id}`, {
      method: 'PUT',
      headers: {
        ...adminApi.getAuthHeader(),
      },
      body: JSON.stringify(eventData),
    })
  },

  deleteEvent: async (id: string): Promise<{ message: string }> => {
    return apiFetch<{ message: string }>(`/events/${id}`, {
      method: 'DELETE',
      headers: {
        ...adminApi.getAuthHeader(),
      },
    })
  },

  createBlog: async (blogData: Omit<Blog, 'id' | 'created_at' | 'updated_at' | 'likes' | 'read_time'>): Promise<Blog> => {
    return apiFetch<Blog>('/blogs', {
      method: 'POST',
      headers: {
        ...adminApi.getAuthHeader(),
      },
      body: JSON.stringify(blogData),
    })
  },

  createBlogFromUrl: async (data: {
    url: string
    author: string
    author_bio: string
    author_avatar?: string
    category: string
    tags: string[]
    featured: boolean
  }): Promise<Blog> => {
    return apiFetch<Blog>('/blogs/from-url', {
      method: 'POST',
      headers: {
        ...adminApi.getAuthHeader(),
      },
      body: JSON.stringify(data),
    })
  },

  updateBlog: async (id: string, blogData: Partial<Blog>): Promise<Blog> => {
    return apiFetch<Blog>(`/blogs/${id}`, {
      method: 'PUT',
      headers: {
        ...adminApi.getAuthHeader(),
      },
      body: JSON.stringify(blogData),
    })
  },

  deleteBlog: async (id: string): Promise<{ message: string }> => {
    return apiFetch<{ message: string }>(`/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        ...adminApi.getAuthHeader(),
      },
    })
  },

  uploadFile: async (file: File, category: 'events' | 'blogs' | 'avatars'): Promise<{ url: string; filename: string }> => {
    const formData = new FormData()
    formData.append('file', file)

    const authHeaders = adminApi.getAuthHeader()
    const response = await fetch(`${API_BASE_URL}/upload/${category}`, {
      method: 'POST',
      headers: authHeaders,
      body: formData,
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.detail || `Upload failed: ${response.status}`)
    }

    return response.json()
  },

  getMembers: async (): Promise<Member[]> => {
    return apiFetch<Member[]>('/members', {
      headers: {
        ...adminApi.getAuthHeader(),
      },
    })
  },

  updateMember: async (id: string, memberData: Partial<Member>): Promise<Member> => {
    return apiFetch<Member>(`/members/${id}`, {
      method: 'PUT',
      headers: {
        ...adminApi.getAuthHeader(),
      },
      body: JSON.stringify(memberData),
    })
  },

  deleteMember: async (id: string): Promise<{ message: string }> => {
    return apiFetch<{ message: string }>(`/members/${id}`, {
      method: 'DELETE',
      headers: {
        ...adminApi.getAuthHeader(),
      },
    })
  },
}

export const memberApi = {
  getFeaturedMembers: async (): Promise<Member[]> => {
    return apiFetch<Member[]>('/members/featured')
  },

  createMember: async (memberData: Omit<Member, 'id' | 'created_at' | 'updated_at'>): Promise<Member> => {
    return apiFetch<Member>('/members', {
      method: 'POST',
      body: JSON.stringify(memberData),
    })
  },
}

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const formatDateTime = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const isEventFull = (event: Event): boolean => {
  return event.attendees >= event.max_attendees
}

export const getEventStatus = (event: Event): 'upcoming' | 'past' | 'cancelled' => {
  return event.status
}

export const getBlogReadingTime = (content: string): string => {
  const wordsPerMinute = 200
  const wordCount = content.split(' ').length
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute))
  return `${minutes} min read`
}