# Features Set

The Features Set module provides a flexible way to manage features in the ForAvi collaborative steered AI interface.

## Overview

The `FeaturesSet` class allows you to:
- Add and remove features
- Enable and disable features dynamically
- Query feature status
- List all or enabled-only features
- Track feature counts

## Usage

### Basic Example

```python
from features_set import FeaturesSet

# Create a new features set
features = FeaturesSet()

# Add features
features.add_feature('ai_steering', 'Collaborative AI steering capability', enabled=True)
features.add_feature('multi_user', 'Support for multiple users', enabled=True)
features.add_feature('voice_input', 'Voice input for AI commands', enabled=False)

# Check if a feature is enabled
if features.is_enabled('ai_steering'):
    print("AI steering is available")

# Enable a feature
features.enable_feature('voice_input')

# List all enabled features
enabled_features = features.list_features(enabled_only=True)
for name, info in enabled_features.items():
    print(f"{name}: {info['description']}")
```

### API Reference

#### `add_feature(name, description, enabled=True)`
Add a new feature to the set.

**Parameters:**
- `name` (str): Unique identifier for the feature
- `description` (str): Description of the feature
- `enabled` (bool): Whether the feature is enabled by default

**Returns:** `bool` - True if added, False if already exists

#### `remove_feature(name)`
Remove a feature from the set.

**Parameters:**
- `name` (str): Name of the feature to remove

**Returns:** `bool` - True if removed, False if didn't exist

#### `enable_feature(name)`
Enable a feature.

**Parameters:**
- `name` (str): Name of the feature to enable

**Returns:** `bool` - True if successful, False if feature doesn't exist

#### `disable_feature(name)`
Disable a feature.

**Parameters:**
- `name` (str): Name of the feature to disable

**Returns:** `bool` - True if successful, False if feature doesn't exist

#### `is_enabled(name)`
Check if a feature is enabled.

**Parameters:**
- `name` (str): Name of the feature to check

**Returns:** `bool` - True if enabled, False otherwise

#### `get_feature(name)`
Get information about a specific feature.

**Parameters:**
- `name` (str): Name of the feature

**Returns:** `dict` - Feature information or None if not found

#### `list_features(enabled_only=False)`
List all features.

**Parameters:**
- `enabled_only` (bool): If True, only return enabled features

**Returns:** `dict` - Dictionary of features

#### `get_feature_count()`
Get the total number of features.

**Returns:** `int` - Number of features

#### `get_enabled_count()`
Get the number of enabled features.

**Returns:** `int` - Number of enabled features

## Example Output

Running `python features_set.py` will produce:

```
All features:
  - ai_steering: Collaborative AI steering capability (enabled)
  - multi_user: Support for multiple users (enabled)
  - voice_input: Voice input for AI commands (disabled)

Voice input enabled: False
Voice input enabled after enabling: True

Total features: 3
Enabled features: 3
```
