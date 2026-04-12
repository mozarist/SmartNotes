import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/constants/color';
import * as sizing from '@/constants/sizing';
import Button from '@/components/ui/button';
import { SquarePen } from 'lucide-react-native';
import QuoteCard from '@/components/ui/cards/quote-card';
import FeaturedQuoteCard from '@/components/ui/cards/featured-quote-card';
import InspirationCard from '@/components/ui/cards/inspiration-card';

export default function DiscoverScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.heading}>Daily Inspiration</Text>
          <Text style={styles.subheading}>Discover new ideas and perspectives every day.</Text>
        </View>

        <FeaturedQuoteCard />

        <FlatList contentContainerStyle={{ gap: sizing.spacing.sm }} showsVerticalScrollIndicator={false}
          data={[1, 2,]}
          renderItem={() =>
            <InspirationCard title='Lorem ipsum dolor sit amet, adipiscing elit constracta.' />}
          keyExtractor={(item) => item.toString()}
        />

        <FlatList contentContainerStyle={{ gap: sizing.spacing.sm }} showsVerticalScrollIndicator={false}
          data={[1, 2, 3,]}
          renderItem={() =>
            <QuoteCard quote='Lorem ipsum dolor sit amet, adipiscing elit constracta.' />}
          keyExtractor={(item) => item.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: sizing.spacing.xl,
    padding: sizing.spacing.xl,
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
