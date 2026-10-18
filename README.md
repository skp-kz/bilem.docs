# bilem.docs — публичная документация Bilem

Сайт **https://docs.bilem.ai** на [Astro Starlight](https://starlight.astro.build). Публичный: всё, что здесь лежит, видит мир. Деплой — Cloudflare Pages из ветки `main` (PR и ветки — превью).

## Локально

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # dist/ + /llms.txt, /llms-full.txt, /llms-small.txt
```

## Как добавить страницу

1. Файл `src/content/docs/<имя>.mdx` с `title` и `description` во frontmatter.
2. Пункт в `sidebar` в `astro.config.mjs`.
3. `npm run guard` и `npm run build` — оба без ошибок.

Документация только на русском (решение Славы 18.10); казахской версии нет.

## Тарифы

Страница «Тарифы» строится из `src/data/pricing.json` — копии единого прайса Bilem. Руками цены не правим: `npm run sync-pricing` (рядом должен лежать клон `minidesk`, или `PRICING_JSON=путь`).

## Что нельзя публиковать (жёстко)

- Ничего со стенда разработки: внутренние адреса и домены, IP, имена баз, токены и ключи, учебные данные и названия учебных организаций, внутренние процессы и базы знаний.
- Реквизиты и запросы 1С, имена регистров, коды счетов в примерах — только общими словами.
- Цены — только из `pricing.json`.

Перед каждым push — `npm run guard` (скрипт `scripts/guard.sh`), он должен быть пустым. Шаблоны сторожа — в скрипте.

Типографика: «ёлочки», длинное тире —, суммы с неразрывным пробелом: «1 500 ₸».

## До публичного запуска сайт закрыт от индекса

Временно: `public/robots.txt` — `Disallow: /`, `public/_headers` — `X-Robots-Tag: noindex, nofollow` на все страницы.
**Перед публичным запуском:** вернуть в `robots.txt` `Allow: /` (и строку `Sitemap: https://docs.bilem.ai/sitemap-index.xml`), удалить `public/_headers`.
