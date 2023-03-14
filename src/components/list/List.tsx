import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import groupStyles from './groupStyles';
import { getOrderedSymbol, getStyleValue, getUnorderedSymbol } from './util';

const stylesheet = StyleSheet.create({
  listContainer: {
    paddingLeft: 10,
  },
  listItemContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 5,
  },
  listItemWrapper: {
    flex: 1,
    paddingLeft: 5,
  },
});

const isListItemType = (element) => {
  return element.type.name === 'ListItem';
};

const getSymbolWidth = (charCount, fontSize = 8) => {
  const fontSizePercent = 0.1;
  const minWidth = Math.max(fontSize, 20);
  const charCountPadding = Math.round(fontSize * fontSizePercent);
  return Math.max(minWidth, charCount * charCountPadding);
};

const withSymbolCharCount = (children) => {
  const symbolLength = React.Children.toArray(children).reduce((max: any, child: any) => {
    const isListItem = isListItemType(child);
    return isListItem ? Math.max(max, child.props.symbol.length) : max;
  }, 0);
  return React.Children.map(children, (child) => {
    const isListItem = isListItemType(child);
    return React.cloneElement(child, {
      symbolCharCount: isListItem ? symbolLength : undefined,
    });
  });
};

interface ListItemProps {
  children: JSX.Element | string;
  itemWrapperStyle?: any;
  style?: any;
  symbol?: string;
  symbolCharCount?: number;
  symbolStyle?: any;
}

const ListItem = ({
  children,
  itemWrapperStyle = {},
  style,
  symbol,
  symbolCharCount,
  symbolStyle = {},
  ...rest
}: ListItemProps) => {
  const { layoutStyle, textStyle, viewStyle } = groupStyles(style);
  const containerStyles = [stylesheet.listItemContainer, layoutStyle, viewStyle];
  const symbolWidth = getSymbolWidth(
    symbolCharCount ?? symbol.length,
    getStyleValue(textStyle, 'fontSize'),
  );
  const symbolStyles = [
    {
      width: symbolWidth,
    },
    textStyle,
    symbolStyle,
  ];
  const listItemWrapperStyles = [stylesheet.listItemWrapper, itemWrapperStyle];
  return (
    <View {...rest} style={containerStyles}>
      <Text style={symbolStyles}>{symbol}</Text>
      <View style={listItemWrapperStyles}>
        {typeof children === 'string' ? <Text style={textStyle}>{children}</Text> : children}
      </View>
    </View>
  );
};

interface UnorderedListProps {
  children: JSX.Element[];
  depth?: number;
  getSymbol?: (depth: number) => string;
  itemWrapperStyle?: any;
  style?: any;
  symbol?: string;
  symbolStyle?: any;
}

const UnorderedList = ({
  children,
  depth = 0,
  getSymbol,
  itemWrapperStyle,
  style,
  symbol,
  symbolStyle,
  ...rest
}: UnorderedListProps) => {
  const symbolFunction = getSymbol ?? getUnorderedSymbol;
  const mappedChildren = React.Children.map(children, (child) => {
    const isListItem = isListItemType(child);
    return React.cloneElement(child, {
      depth: isListItem ? child.props.depth : depth + 1,
      itemWrapperStyle: child.props.itemWrapperStyle ?? itemWrapperStyle,
      style: child.props.style ? [style, child.props.style] : style,
      symbol: isListItem
        ? symbol ?? child.props.symbol ?? symbolFunction(depth)
        : child.props.symbol,
      symbolStyle: child.props.symbolStyle ?? symbolStyle,
    });
  });
  return (
    <View {...rest} style={[stylesheet.listContainer, style]}>
      {withSymbolCharCount(mappedChildren)}
    </View>
  );
};

interface OrderedListProps {
  children: JSX.Element | JSX.Element[];
  depth?: number;
  getSymbol?: (index: number, depth: number) => string;
  itemWrapperStyle?: any;
  reversed?: boolean;
  start?: number;
  style?: any;
  symbolStyle?: any;
}

const OrderedList = ({
  children,
  depth = 0,
  getSymbol,
  itemWrapperStyle,
  reversed = false,
  start,
  style,
  symbolStyle,
  ...rest
}: OrderedListProps) => {
  const symbolFunction = getSymbol ?? getOrderedSymbol;
  children = Array.isArray(children) ? children : [children];
  const startNum = start ? Number(start) : reversed ? children.filter(isListItemType).length : 1;
  const indexToCount = (index) => {
    return reversed ? startNum - index : startNum + index;
  };
  let notItemListCount = 0;
  const mappedChildren = React.Children.map(children, (child, index) => {
    !isListItemType(child) && notItemListCount++;
    return React.cloneElement(child, {
      depth: depth + 1,
      itemWrapperStyle: child.props.itemWrapperStyle ?? itemWrapperStyle,
      style: child.props.style ? [style, child.props.style] : style,
      symbol: isListItemType(child)
        ? child.props.symbol ?? symbolFunction(indexToCount(index - notItemListCount), depth)
        : child.props.symbol,
      symbolStyle: child.props.symbolStyle ?? symbolStyle,
    });
  });

  return (
    <View {...rest} style={[stylesheet.listContainer, style]}>
      {withSymbolCharCount(mappedChildren)}
    </View>
  );
};

export { ListItem, OrderedList, UnorderedList };
