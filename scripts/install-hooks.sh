#!/bin/bash

# Script de instalação dos hooks de segurança do Git
# Este script copia os hooks do diretório scripts/hooks/ para .git/hooks/

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
HOOKS_SOURCE="$SCRIPT_DIR/hooks"
HOOKS_TARGET="$PROJECT_ROOT/.git/hooks"

echo "🔒 Instalando hooks de segurança do Git..."

# Verifica se o diretório .git existe
if [ ! -d "$PROJECT_ROOT/.git" ]; then
    echo "❌ Erro: Diretório .git não encontrado. Este não parece ser um repositório Git."
    exit 1
fi

# Verifica se os hooks fonte existem
if [ ! -d "$HOOKS_SOURCE" ]; then
    echo "❌ Erro: Diretório de hooks fonte não encontrado: $HOOKS_SOURCE"
    exit 1
fi

# Cria o diretório de hooks se não existir
mkdir -p "$HOOKS_TARGET"

# Copia os hooks
for hook in pre-commit commit-msg; do
    if [ -f "$HOOKS_SOURCE/$hook" ]; then
        cp "$HOOKS_SOURCE/$hook" "$HOOKS_TARGET/$hook"
        chmod +x "$HOOKS_TARGET/$hook"
        echo "✅ Hook instalado: $hook"
    else
        echo "⚠️  Aviso: Hook não encontrado: $hook"
    fi
done

echo ""
echo "✅ Hooks de segurança instalados com sucesso!"
echo ""
echo "Os hooks agora irão:"
echo "  • Bloquear commits com caminhos locais (pre-commit)"
echo "  • Validar mensagens de commit (commit-msg)"
echo ""
echo "Para mais informações, consulte: docs/SECURITY-RULES.md"

