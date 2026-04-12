import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/constants/color';
import * as sizing from '@/constants/sizing';
import NoteCard from '@/components/ui/cards/note-card';
import Button from '@/components/ui/button';
import { SquarePen } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.heading}>My Notes</Text>
          <Text style={styles.subheading}>You have 12 active thoughts today.</Text>
        </View>

        <FlatList contentContainerStyle={{ gap: sizing.spacing.sm }} showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5,]}
          renderItem={() =>
            <NoteCard content='Lorem ipsum dolor sit amet, adipiscing elit constracta.' date='2026-04-12' />}
          keyExtractor={(item) => item.toString()}
        />
      </ScrollView>
      <View style={styles.fab}>
        <Button label="Write" icon={SquarePen} labelSize='lg' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: sizing.spacing.xl,
    padding: sizing.spacing.xl,
  },
  fab: {
    position: 'absolute',
    right: sizing.spacing.xl,
    bottom: 72,
    borderRadius: sizing.radius.full,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 100,
  },
  greeting: {
    fontSize: sizing.fontSize.xl,
    color: colors.foreground,
  },
  heading: {
    fontSize: sizing.fontSize["5xl"],
    fontWeight: "bold",
    color: colors.foreground,
  },
  subheading: {
    fontSize: sizing.fontSize.sm,
    color: colors.text,
  },

});
