"""
Features Set Module for ForAvi
A collaborative steered AI interface feature management system.
"""


class FeaturesSet:
    """
    Manages the set of features available in the ForAvi collaborative AI interface.
    """
    
    def __init__(self):
        """Initialize the features set with an empty collection."""
        self._features = {}
    
    def add_feature(self, name, description, enabled=True):
        """
        Add a new feature to the set.
        
        Args:
            name (str): The unique name/identifier of the feature
            description (str): A description of what the feature does
            enabled (bool): Whether the feature is enabled by default
        
        Returns:
            bool: True if feature was added, False if it already exists
        """
        if name in self._features:
            return False
        
        self._features[name] = {
            'description': description,
            'enabled': enabled
        }
        return True
    
    def remove_feature(self, name):
        """
        Remove a feature from the set.
        
        Args:
            name (str): The name of the feature to remove
        
        Returns:
            bool: True if feature was removed, False if it didn't exist
        """
        if name in self._features:
            del self._features[name]
            return True
        return False
    
    def enable_feature(self, name):
        """
        Enable a feature.
        
        Args:
            name (str): The name of the feature to enable
        
        Returns:
            bool: True if successful, False if feature doesn't exist
        """
        if name in self._features:
            self._features[name]['enabled'] = True
            return True
        return False
    
    def disable_feature(self, name):
        """
        Disable a feature.
        
        Args:
            name (str): The name of the feature to disable
        
        Returns:
            bool: True if successful, False if feature doesn't exist
        """
        if name in self._features:
            self._features[name]['enabled'] = False
            return True
        return False
    
    def is_enabled(self, name):
        """
        Check if a feature is enabled.
        
        Args:
            name (str): The name of the feature to check
        
        Returns:
            bool: True if enabled, False if disabled or doesn't exist
        """
        return self._features.get(name, {}).get('enabled', False)
    
    def get_feature(self, name):
        """
        Get information about a specific feature.
        
        Args:
            name (str): The name of the feature
        
        Returns:
            dict: Feature information or None if not found
        """
        return self._features.get(name)
    
    def list_features(self, enabled_only=False):
        """
        List all features in the set.
        
        Args:
            enabled_only (bool): If True, only return enabled features
        
        Returns:
            dict: Dictionary of features
        """
        if enabled_only:
            return {
                name: info for name, info in self._features.items() 
                if info['enabled']
            }
        return self._features.copy()
    
    def get_feature_count(self):
        """
        Get the total number of features in the set.
        
        Returns:
            int: Number of features
        """
        return len(self._features)
    
    def get_enabled_count(self):
        """
        Get the number of enabled features.
        
        Returns:
            int: Number of enabled features
        """
        return sum(1 for info in self._features.values() if info['enabled'])


# Example usage
if __name__ == '__main__':
    # Create a new features set
    features = FeaturesSet()
    
    # Add some features
    features.add_feature('ai_steering', 'Collaborative AI steering capability', True)
    features.add_feature('multi_user', 'Support for multiple users', True)
    features.add_feature('voice_input', 'Voice input for AI commands', False)
    
    # List all features
    print("All features:")
    for name, info in features.list_features().items():
        status = "enabled" if info['enabled'] else "disabled"
        print(f"  - {name}: {info['description']} ({status})")
    
    # Check feature status
    print(f"\nVoice input enabled: {features.is_enabled('voice_input')}")
    
    # Enable a feature
    features.enable_feature('voice_input')
    print(f"Voice input enabled after enabling: {features.is_enabled('voice_input')}")
    
    # Feature counts
    print(f"\nTotal features: {features.get_feature_count()}")
    print(f"Enabled features: {features.get_enabled_count()}")
