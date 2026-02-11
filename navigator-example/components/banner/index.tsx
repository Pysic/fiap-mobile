import { Button, ButtonProps, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../banner/style"

type BannerProps = ButtonProps & {
    name?: string
}

export default function Banner({ name, title, ...rest }: BannerProps) {
    return(
        <View>
            <TouchableOpacity activeOpacity={0.4} {...rest}>
                <Text style={ styles.text }>{ name ?? "Default" }</Text>
            </TouchableOpacity>
            {/* <Text style={ styles.text }>{ name ?? "Default" }</Text> */}
            <Button title={title} {...rest} />
        </View>
    )
}
