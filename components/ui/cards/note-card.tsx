import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/color";
import * as size from "@/constants/sizing";
import Card from "../card";
import Label from "../label";
import { Image } from "expo-image";

type CardProps = {
    title?: string;
    category?: string;
    content?: string;
    imageUri?: string;
    date?: string | Date;
    onPress?: () => void;
};

export default function NoteCard({ title = "New note", category = "General", content, imageUri, date = new Date(), onPress = () => { } }: CardProps) {
    return (
        <Card onPress={onPress} >
            <Label>{category}</Label>
            <View style={{ gap: size.spacing.xxs }}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
                { content && <Text style={styles.content} numberOfLines={2}>{content}</Text> }
                { imageUri && <Image source={{ uri: imageUri }} style={styles.image} /> }
            </View>
            <Text style={styles.date}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</Text>
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
    date: {
        fontSize: size.fontSize.xs,
        color: colors.text,
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: size.radius.lg,
    }


});
