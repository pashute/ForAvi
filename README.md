# ForAvi
Colaborative Steered AI interface

## Development Workflow

This project uses **Git Flow** for branch management and development workflow.

### Git Flow Branching Model

- **main**: Production-ready code
- **develop**: Integration branch for features
- **feature/**: Feature branches (branched from develop)
- **release/**: Release preparation branches
- **hotfix/**: Emergency fixes for production

### Working with Features

To start a new feature:
```bash
git flow feature start <feature-name>
```

To finish a feature:
```bash
git flow feature finish <feature-name>
```

### Features

See [FEATURES_SET.md](FEATURES_SET.md) for information about the Features Set module. 
