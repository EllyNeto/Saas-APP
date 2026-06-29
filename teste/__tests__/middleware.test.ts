import { describe, it, expect, vi } from 'vitest'
import { isPublicRoute, middlewareHandler } from '../proxy'
import { NextRequest } from 'next/server'

describe('Middleware Route Matcher', () => {
  const createRequest = (path: string) => {
    return new NextRequest(new URL(path, 'http://localhost:3000'))
  }

  it('should allow public routes', () => {
    const publicRoutes = [
      '/',
      '/sign-in',
      '/sign-up',
      '/sign-in/nested',
      '/sign-up/nested',
    ]

    publicRoutes.forEach((route) => {
      const req = createRequest(route)
      expect(isPublicRoute(req)).toBe(true)
    })
  })

  it('should protect non-public routes', () => {
    const protectedRoutes = [
      '/dashboard',
      '/settings',
      '/api/data',
      '/companions/new',
    ]

    protectedRoutes.forEach((route) => {
      const req = createRequest(route)
      expect(isPublicRoute(req)).toBe(false)
    })
  })
})

describe('Middleware Handler', () => {
  const createRequest = (path: string) => {
    return new NextRequest(new URL(path, 'http://localhost:3000'))
  }

  const createAuth = () => ({
    protect: vi.fn().mockResolvedValue({}),
  })

  it('should call auth.protect() for non-public routes', async () => {
    const auth = createAuth()
    const req = createRequest('/dashboard')

    await middlewareHandler(auth as any, req)

    expect(auth.protect).toHaveBeenCalled()
  })

  it('should NOT call auth.protect() for public routes', async () => {
    const auth = createAuth()
    const req = createRequest('/')

    await middlewareHandler(auth as any, req)

    expect(auth.protect).not.toHaveBeenCalled()
  })
})
