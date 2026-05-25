'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";

const PUBLIC_ROUTES = ["/login", "/register"];

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !user && !PUBLIC_ROUTES.includes(pathname)) {
      router.push("/login");
    }
  }, [user, loading, pathname]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  // No mostrar header en rutas públicas
  if (PUBLIC_ROUTES.includes(pathname)) return null;

  // No mostrar nada mientras carga
  if (loading) return null;

  // No mostrar si no hay sesión
  if (!user) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <Link href="/" className="text-red-600 text-4xl font-bold tracking-wide">
          NETFLIX
        </Link>

        <nav className="flex gap-6 text-sm font-medium items-center">
          <Link href="/" className="hover:text-red-500">Inicio</Link>
          <Link href="/dashboard" className="hover:text-red-500">Dashboard</Link>
          <Link href="/search" className="hover:text-red-500">Buscar</Link>
          <Link href="/favorites" className="hover:text-red-500">Favoritos</Link>
          <Link href="/profile" className="hover:text-red-500">Perfil</Link>
          <button
            onClick={handleLogout}
            className="text-zinc-400 hover:text-red-500 transition"
          >
            Cerrar sesión
          </button>
        </nav>

      </div>
    </header>
  );
}