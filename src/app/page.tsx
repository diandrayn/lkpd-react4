import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Selamat datang di Portal Sekolah</h1>
      <p>
        <Link href="/teachers/budi">Daftar Guru</Link>
      </p>
      <p>
        <Link href="/library">Perpustakaan</Link>
      </p>
    </div>
  );
}