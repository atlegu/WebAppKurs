UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections,5,content}',
  '"| | Aksje 1 | Aksje 2 | Statsobligasjon |\n|---|---|---|---|\n| μ | 9% | 7% | 3% |\n| σ | 18% | 12% | 2% |\n\nKorrelasjonsmatrisen\n\n$$\\rho = \\begin{pmatrix} 1 & 0.3 & -0.1\\\\ 0.3 & 1 & 0\\\\ -0.1 & 0 & 1 \\end{pmatrix}$$\n\ngjør at selv en liten andel statsobligasjoner senker porteføljens totale standardavvik betydelig uten å trekke ned forventet avkastning like mye."'
)
WHERE id = '5b87be0d-cd23-4c5c-b524-70274946baf9';