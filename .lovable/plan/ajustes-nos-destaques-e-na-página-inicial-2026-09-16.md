# Ajustes nos destaques e na página inicial

Concordo com as duas mudanças: elas deixam mais honesto o fato de que destaque é espaço pago, e evitam duas buscas competindo na home.

## 1. Selos combinados nos destaques

- Todo negócio que aparece em Destaques passa a exibir  "Em destaque", já que a posição é paga.
- Um mesmo negócio pode mostrar vários selos ao mesmo tempo (ex.: "Novo" + "Em destaque" ).
- Quando o negócio já foi vencedor de alguma edição, o selo de premiação aparece junto (ex.: "Melhor do Ano 2022"), com o visual dourado que já diferencia premiação de publicidade.
- Ordem visual fixa dos selos: premiação primeiro (dourado), depois em alta, depois destaque— para o olho separar reconhecimento de espaço comercial.
- Em telas pequenas os selos quebram em duas linhas em vez de cortar.

## 2. Posições em "Destaques da semana" (home)

- Os quatro cards passam a mostrar a posição (01, 02, 03, 04) de forma clara sobre a foto, no mesmo estilo do ranking da página Destaques.
- O texto da seção deixa explícito que são posições de visibilidade patrocinada, não premiação.

## 3. Busca da home

- Removo a barra de busca do topo da home.
- No lugar, dois botões: "Descobrir lugares" (leva para Descobrir) e "Ver destaques da semana".
- A busca continua existindo só na página Descobrir.

## Detalhes técnicos

- Em `src/lib/mock-data.ts`: `badge?: string` vira `badges: string[]`, mais um campo opcional `awards: number[]` com os anos de premiação por negócio; os vencedores por ano continuam derivados dessa mesma lista para não haver contradição entre páginas.
- Em `src/components/platform.tsx`: `AppBadge` continua um selo único; novo `BadgeRow` renderiza a lista ordenada. `BusinessCard` ganha prop opcional `rank` para o número sobre a imagem. `RankingItem` usa o mesmo `BadgeRow`.
- `src/routes/index.tsx`: remove `SearchBar` do hero, adiciona os dois CTAs, passa `rank` aos cards de destaque.
- `src/routes/destaques.tsx`, `descobrir.tsx`, `melhores-do-ano.tsx`, `negocio.restaurante-exemplo.tsx`: adaptados ao novo formato de selos.
- Verificação: build limpo e conferência visual da home e de Destaques em desktop e celular.
- retirar a tag "Patrocinado"