import Layout from '@/components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <section className="py-24 text-center">
        <div className="container">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-lg text-muted-foreground mb-6">Page not found. The page you're looking for doesn't exist.</p>
        </div>
      </section>
    </Layout>
  )
}