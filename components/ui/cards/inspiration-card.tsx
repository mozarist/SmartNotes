import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/color";
import * as size from "@/constants/sizing";
import Card from "../card";
import Label from "../label";
import AddToBookmark from "../bookmark-button";

type CardProps = {
    title?: string;
    category?: string;
    content?: string;
    author?: string;
    onPress?: () => void;
};

export default function InspirationCard({ title = "Menjaga fokus di era distraksi digital", content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore commodi dignissimos consequatur quas odio quo ea.", author = "author name", onPress = () => { } }: CardProps) {
    return (
        <Card onPress={onPress} >
            <View style={{ gap: size.spacing.xxs }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text
                        style={[
                            styles.title,
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
                        "{title}"
                    </Text>
                    <AddToBookmark />
                </View>
                <Text style={styles.content} numberOfLines={2}>{content}</Text>
            </View>
            <Text style={styles.author}>by {author}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: size.fontSize.xl,
        fontWeight: 500,
        color: colors.foreground,
    },
    category: {
        fontSize: size.fontSize.md,
        color: colors.text,
    },
    content: {
        fontSize: size.fontSize.sm,
        color: colors.text,
    },
    author: {
        fontSize: size.fontSize.xs,
        color: colors.text,
    }

});
