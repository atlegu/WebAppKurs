-- Fix the duplicate LaTeX rendering issue by cleaning up the content
UPDATE sub_modules SET 
content = jsonb_set(
  content,
  '{sections,1,content}',
  '"Prosentavkastningen for én periode er\n\n$$\\text{HPR} = \\frac{D + P_{\\text{slutt}} - P_{\\text{start}}}{P_{\\text{start}}}$$\n\nder\n• $D$ er kontantutbetalingen i perioden\n• $P_{\\text{start}}$ er prisen ved periodestart\n• $P_{\\text{slutt}}$ er prisen ved periodeslutt\n\n**Eksempel**\n\nAnta at du kjøper 100 aksjer til 37 kr (totalt 3 700 kr). Etter ett år mottar du 1,85 kr i utbytte per aksje og selger til 40,33 kr.\n\n$$\\begin{aligned}\n\\text{Kontantutbetaling} &= 100 \\times 1,85 = 185 \\text{ kr} \\\\\n\\text{Kapitalgevinst} &= 100 \\times (40,33 - 37) = 333 \\text{ kr} \\\\\n\\text{HPR} &= \\frac{185 + 333}{3700} \\approx 14\\%\n\\end{aligned}$$"'
)
WHERE id = 'eb2709c1-e19e-40b8-8349-9575bfc5f5ff';