# C.R.A.M. (Cosmic Resource Allocation Manager) - Design Document

## Core Game Loop
1. File paperwork to acquire resources
2. Use resources to improve efficiency
3. Automate processes to scale operations
4. Navigate bureaucracy to unlock new tiers
5. Eventually subvert/optimize the entire system

## Phase 1: Basic Implementation
- [ ] Basic resource management
  * Primary Resources
    - Administrative Authority (primary clicker resource)
    - Paperwork Efficiency (speeds up form processing)
    - Bureaucratic Influence (unlocks new departments)
    - Coffee (temporary productivity boosts)
    - Red Tape (paradoxically both hinders and enables certain processes)
    - Rubber Stamps (automated approvals)
- [ ] Form filing system
- [ ] Simple automation
- [ ] Save/Load system
- [ ] Basic UI improvements
- [ ] Resource production chains

## Phase 2: Bureaucratic Expansion
- [ ] Department System
  - Resource Department
  - Efficiency Department
  - Automation Department
  - Interdimensional Affairs
  - Internal Investigation Bureau

- [ ] Advanced Resources
  * Tier 1 (Basic)
    - Cosmic Dust
    - Paperclips
    - Time Fragments
  * Tier 2 (Standard)
    - Processed Dark Matter
    - Quantum Stamps
    - Bureaucratic Influence
  * Tier 3 (Restricted)
    - Reality Patches
    - Paradox Permits
    - Classified Ink
  * Tier 4 (Classified)
    - Universe Templates
    - Admin Privileges
    - Time Loops

## Phase 3: Automation & Optimization
- [ ] Automated Form Filing Systems
- [ ] Department Automation
- [ ] Process Optimization Trees
- [ ] Interdepartmental Synergies
- [ ] Unofficial Shortcuts System

## Phase 4: Bureaucratic Politics
- [ ] Influence System
- [ ] Department Relations
- [ ] Office Politics Events
- [ ] Interdepartmental Conflicts
- [ ] Coalition Building

## Phase 5: Crisis Management
- [ ] Random Events System
  * Paperwork Floods
  * Reality Audits
  * Timeline Inconsistencies
  * Budget Cuts
  * Interdimensional Paperwork Mix-ups

## Phase 6: The Meta Game
- [ ] System Subversion Mechanics
- [ ] Hidden Knowledge System
- [ ] Multiple Playthroughs Benefits
- [ ] Alternative Bureaucratic Paths

## Technical Requirements
- [ ] Proper Save/Load System
- [ ] Performance Optimization for Idle Mechanics
- [ ] Modular Event System
- [ ] Achievement System
- [ ] Statistics Tracking

## Technical Architecture

### Core Stack
- Frontend Framework: Vue 3
- Build Tool: Vite
- State Management: Pinia
- Language: JavaScript/Vue SFC

### Project Structure
```
src/
├── assets/         # Static assets
├── components/     # Vue components
├── stores/         # Pinia stores
├── styles/         # Global styles
└── game/          # Game logic
    ├── resources/   # Resource management
    ├── automation/  # Automation systems
    ├── departments/ # Department logic
    ├── events/      # Event system
    └── saves/       # Save/Load handling
```

### State Management
- Pinia stores for:
  * Resource tracking
  * Game state
  * Player progress
  * Department status
  * Event queue
  * Automation state

### Data Persistence
- Local Storage for save games
- JSON serialization for game state
- Auto-save functionality

### Performance Considerations
- Tick-based update system
- Batched UI updates
- Lazy loading for advanced features
- Background processing for idle mechanics

### Development Tools
- Vue DevTools for debugging
- Vite HMR for development
- VS Code + Volar extension

## UI/UX Features
- [ ] Department Overview Screen
- [ ] Resource Flow Visualizations
- [ ] Form Filing Interface
- [ ] Automation Management Panel
- [ ] Event Notification System
- [ ] Tutorial System
- [ ] Achievement Display

## Progression Systems

### Clearance Levels
1. Junior Associate (Start)
2. Associate Manager
3. Senior Manager
4. Department Head
5. Regional Director
6. Galactic Supervisor
7. Universal Administrator
8. Reality Executive
9. [REDACTED]

### Automation Tiers
1. Basic Auto-Filers
2. Department Automation
3. Process Optimization
4. Reality Engineering
5. Timeline Management
6. Universal Automation

### Efficiency Upgrades
1. Better Forms
2. Improved Processing
3. Quantum Filing
4. Timeline Compression
5. Reality Shortcuts

## Humor Elements
- Increasingly absurd form names and requirements
- Bureaucratic satire events
- Paradoxical paperwork chains
- Interdimensional coffee breaks
- Office politics across multiple realities

## Future Considerations
- Mobile version
- Multiplayer departments
- Alternate reality branches
- Competitive bureaucracy
- Cross-dimensional DLC

## Development Priorities
1. Core Resource Loop
2. Basic Automation
3. Department System
4. Events System
5. Politics Layer
6. Meta Progression

## Next Immediate Tasks
1. Implement basic resource production chains
2. Add first set of automation upgrades
3. Develop basic event system
4. Create save/load functionality
5. Improve UI feedback
6. Add first set of achievements