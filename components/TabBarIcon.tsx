import React from 'react';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


interface TabBarIconProps {
  IconComponent: React.ElementType;
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}

const TabBarIcon = (props: TabBarIconProps) => {
  const { IconComponent, name, color, size = 28 } = props;

  return <props.IconComponent size={28} style={{ marginBottom: -3 }} {...props} />;
};

export default TabBarIcon;
