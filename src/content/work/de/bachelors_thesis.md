---
title: "Leveleditor für Vektoria"
publishDate: 2025-11-03 20:00:00
img: /src/images/vekedit.webp
img_alt: Ein Leveleditor für eine Game-Engine
description: |
  C++ Leveleditor mit DearImgui
tags:
  - "2025"
  - GameDev
  - University
  - C++
---

- Meine Bachelorarbeit aus 2025
- Aufbauende Arbeit zur Erweiterung eines barebones Leveleditor für die Vektoria Game-Engine, um mehr Node-Typen zu unterstützen
- **Verwendete Libraries**: Vektoria (24.07) und Dear ImGui
- Implementierte Inspektor Widgets:
  - Translation
  - Rotation
  - Scale
  - Lichquellen: Radial, Spot und Directional
  - Geometire: Arrow, Cone, Cube, Cylinder, Dodecaherdon, Dome, Elipsoid, Icosahedron, Octahedron, Pyramid
    - +Modaler Dialog zur Erstellung der Geometrie mit ihren zugehörigen Eigenschaften
  - Audio
  - Kamera
  - Emitter
  - Image
  - Texture
  - Placement (Ähnlich zu Blenders Empty oder Godots Node3D)
  - Materials
- Weiter Funktionalität
  - Löschen von Nodes aus dem Szenegraph
  - Hinzufügen von Nodes zu dem Szenegraph
- Note: 1.7