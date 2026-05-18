# GenJ — AI Creative Simulation Platform

> 학생이 AI와 함께 자신의 질문을 게임 · 시뮬레이션 · 디지털 트윈으로 만드는 PBL 기반 AI 창작 교육 플랫폼.

🌐 **Live**: [soonsoon2.github.io/GenJ](https://soonsoon2.github.io/GenJ)

---

## What is GenJ?

**GenJ** (Gen AI + 장난감) 는 학생들이 생성형 AI를 활용해 자신의 관심 주제를 게임처럼 만들고, 시뮬레이션처럼 시험하며, 나만의 작은 연구실로 발전시키는 교육법이자 플랫폼입니다.

### 3F 개발법

1. **Fast Thinking** — AI와 대화하며 아이디어를 구조화
2. **Fast Making** — 웹 미니게임 · 시뮬레이션으로 즉시 구현
3. **Fast Feedback** — 친구 · 교사 · AI 피드백으로 반복 개선

---

## Tech Stack

| Layer | Technology |
|---|---|
| Site | [Astro](https://astro.build) (Static) |
| Hosting | GitHub Pages |
| Fonts | Pretendard Variable · Space Grotesk · JetBrains Mono |
| Images | Generated via [SAM](https://sam.soonsoon.ai) + gpt-image-2 |
| Platform (planned) | SAM (LLM Router) + SPUM BASE (Character Engine) |

---

## Development

```bash
npm install
npm run dev      # localhost:4321
npm run build    # → dist/
```

---

## Deployment

Push to `main` → GitHub Actions automatically builds and deploys to Pages.

---

## Links

- [제안서 (PROPOSAL.md)](./PROPOSAL.md)
- [soonsoon.io](https://soonsoon.io)
- [파주 캠프 후기](https://soonsoon.io/genai-game-making-high-school-summer-study-camp/)
- [순순빌리지](https://soonsoon.io/ai-spum-agent-soonsoon-village/)

---

## License

© 2026 SOONSOON FACTORY. All rights reserved.
