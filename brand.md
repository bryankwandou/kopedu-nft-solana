# Brand — KopEdu Web3

_Status: active_

## Palette (light, editorial — matches KopEdu Web2 tone with Solana accent)

| Token | Value | Use |
|---|---|---|
| `--background` | `#f7f5f0` | warm cream page background |
| `--foreground` / `--ink` | `#1c1b22` | primary text |
| `--ink-2` | `#6b6875` | secondary text |
| `--line` / `--border` | `#e6e2ee` | hairlines, dividers |
| `--card` | `#ffffff` | cards, panels |
| `--primary` | `#7c3aed` | Solana violet — CTAs, links, active states |
| `--accent` | `#e9defc` | soft violet highlight background |
| `--accent-foreground` | `#6d28d9` | text on accent |
| `--destructive` | `#c0392b` | errors |

Gradient (Solana identity): `linear-gradient(90deg, #7c3aed 0%, #0ea86e 100%)` for headline accents; `linear-gradient(135deg, #7c3aed 0%, #14f195 100%)` for primary CTA fills (`.solana-gradient-text`, `.solana-gradient-bg` in `globals.css`).

## Typography

- Display/headings: Playfair Display (`--font-display`), weight 700–900.
- Body/UI: Inter (`--font-sans`).
- Data/mono (points, addresses, IDs): JetBrains Mono (`--font-mono`).

## Voice

Bahasa Indonesia natural, aktif, manusiawi — bukan gaya AI. Tanpa emoji. Turnitin-safe (bebas plagiarisme, tidak generik). Nada: hangat, mendidik, bukan korporat kaku. Istilah teknis Web3 dijelaskan singkat dalam bahasa Indonesia saat pertama muncul di satu halaman.

## Do not

- Jangan pakai warna hex acak di luar token — pakai kelas `bg-primary`, `text-ink-2`, dll.
- Jangan ganti struktur grid 5 kolom avatar selector.
- Jangan tambah emoji ke UI atau copy.
