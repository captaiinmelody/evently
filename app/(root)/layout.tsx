import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flexCol h-screen">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    )
  }