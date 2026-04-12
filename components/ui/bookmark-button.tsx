import { colors } from '@/constants/color';
import * as size from '@/constants/sizing';
import { Bookmark } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable } from 'react-native';

export default function AddToBookmark() {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <Pressable
      onPress={() => setBookmarked((prev) => !prev)}
      style={({ pressed }) => [{
        backgroundColor: bookmarked ? colors.accent : colors.background,
        borderRadius: size.radius.full,
        padding: size.spacing.sm,
        maxWidth: 42,
        maxHeight: 42,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: pressed ? 0.7 : 1,
      }]}
      accessibilityRole="button"
      accessibilityLabel={bookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
    >
      <Bookmark
        color={bookmarked ? colors.primary : colors.foreground}
        fill={bookmarked ? colors.primary : 'none'}
        width={24}
        height={24}
      />
    </Pressable>
  );
}