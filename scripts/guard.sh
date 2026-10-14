#!/usr/bin/env bash
# Проверка перед push: в публичной доке не должно быть ничего со стенда и секретов (README.md, раздел «Что нельзя публиковать»).
set -euo pipefail
cd "$(dirname "$0")/.."
PAT='lakomka|1c\.bilem\.dev|100\.(6[4-9]|[7-9][0-9]|1[01][0-9]|12[0-7])\.[0-9]+\.[0-9]+|BLM-[A-Z0-9]{4}-|token|Шумск|Лакомк|Вкусняшк|\.ts\.net|handoff|Земля|Воздух'
if grep -rnIiE "$PAT" src/ public/; then echo "СТОРОЖ: найдено запрещённое — не пушить" >&2; exit 1; fi
echo "сторож: чисто"
