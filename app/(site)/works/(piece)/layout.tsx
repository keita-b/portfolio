import HeaderB from '@/app/components/header/HeaderB'

export default function PieceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderB />
      <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
    </>
  )
}
