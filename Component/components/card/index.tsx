import { Button, ButtonProps, Text, View } from 'react-native'
import { styles } from './style'

type CardProps = ButtonProps & {
    name?: string
}

export default function Card({ name, ...rest }: CardProps) {
    return (
        <View>
            <Text style = { styles.text }>{ name }</Text>
            <Button {...rest} />
        </View>
    ) 
}