import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type DefaultButtonProps = TouchableOpacityProps & {
    title: string
}

export function DefaultButton({ title, ...rest }: DefaultButtonProps) {
    return (
        <TouchableOpacity style = { styles.button } {...rest}>
            <Text style = { styles.text }>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#007AFF',
    backgroundColor: '#E6F0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 16,
  },
});