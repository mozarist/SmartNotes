import { colors } from "@/constants/color";
import * as size from "@/constants/sizing";
import { StyleSheet, Text, View } from "react-native";
import Card from "../card";
import Badge from "../badge";

type CardProps = {
    quote?: string;
    author?: string;
    onPress?: () => void;
};

export default function FeaturedQuoteCard({ quote = "Creativity is intelligence having fun.", author = "Albert Einstein", onPress = () => { } }: CardProps) {
    return (
        <Card Color={colors.primary} onPress={onPress} >
            <Badge>Featured</Badge>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.quote}>"{quote}"</Text>
            </View>
            <Text style={styles.author} numberOfLines={1}>— {author}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    quote: {
        fontSize: size.fontSize['2xl'],
        fontWeight: 700,
        letterSpacing: 0.7,
        color: colors.primaryForeground,
    },
    category: {
        fontSize: size.fontSize.md,
        color: colors.text,
    },
    author: {
        fontSize: size.fontSize.sm,
        fontWeight: 500,
        letterSpacing: 1,
        color: colors.accent,
    },
    date: {
        fontSize: size.fontSize.xs,
        color: colors.text,
    }

});
