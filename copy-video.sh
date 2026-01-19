#!/bin/bash
# Script para copiar vídeo para o projeto

SOURCE="/Users/viniciusbrigido/mesa/Nexor/Video Topo Site por do sol .MOV"
TARGET="public/videos/hero-video.mov"

if [ -f "$SOURCE" ]; then
    cp "$SOURCE" "$TARGET"
    echo "✅ Vídeo copiado com sucesso!"
    ls -lh "$TARGET"
else
    echo "❌ Arquivo não encontrado em: $SOURCE"
    echo ""
    echo "Por favor, arraste o arquivo para esta pasta:"
    echo "$(pwd)/public/videos/"
    echo ""
    echo "Ou execute manualmente:"
    echo "cp \"[caminho do seu arquivo]\" $(pwd)/public/videos/hero-video.mov"
fi
