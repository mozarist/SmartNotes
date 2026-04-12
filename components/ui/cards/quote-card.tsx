import { colors } from "@/constants/color";
import * as size from "@/constants/sizing";
import { StyleSheet, Text, View } from "react-native";
import AddToBookmark from "../bookmark-button";
import Card from "../card";

type CardProps = {
    quote?: string;
    author?: string;
    onPress?: () => void;
};

export default function QuoteCard({ quote = "Hanya mereka yang berani gagal total yang dapat meraih keberhasilan total.", author = "Author Name", onPress = () => { } }: CardProps) {
    return (
        <Card onPress={onPress} >
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text
                    style={[
                        styles.quote,
                        {
                            flexShrink: 1,
                            flexGrow: 1,
                            flexBasis: 0,
                            flexWrap: "wrap",
                            maxWidth: '80%'
                        },
                    ]}
                    ellipsizeMode="tail"
                >
                    "{quote}"
                </Text>
                <AddToBookmark />
            </View>
            <Text style={styles.author} numberOfLines={1}>— {author}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    quote: {
        fontSize: size.fontSize.xl,
        fontWeight: 600,
        fontStyle: "italic",
        color: colors.foreground,
    },
    category: {
        fontSize: size.fontSize.md,
        color: colors.text,
    },
    author: {
        fontSize: size.fontSize.sm,
        fontWeight: 500,
        letterSpacing: 1,
        color: colors.primary,
    },
    date: {
        fontSize: size.fontSize.xs,
        color: colors.text,
    }

});
