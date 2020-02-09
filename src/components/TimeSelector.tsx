import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const TimeSelector = ({ setRunningTimer }: { setRunningTimer: (date: Date) => void  }) => {
  const [time, setTime] = useState<string>('')

  return (
    <View>
      <TextInput
        style={styles.timePickerSlider}
        keyboardType='number-pad'
        maxLength={4}
        onEndEditing={() => setRunningTimer(parseInput(time))}
        onChangeText={setTime}
      />
    </View>
  )
}

const parseInput = (text: string): Date | null => {
  switch (text.length) {
    case 0:
      return null
    case 1:
    case 2:
      return new Date(Date.now() + (parseInt(text) * 1000))
    case 3:
      const [min, sec] = [text.charAt(0), text.slice(1)]
      return new Date(Date.now() + (parseInt(min) * 60 * 1000) + parseInt(sec) * 1000)
    case 4:
      const [min1, sec1] = [text.slice(0, 2), text.slice(2)]
      return new Date(Date.now() + (parseInt(min1) * 60 * 1000) + parseInt(sec1) * 1000)
  }
}

const styles = StyleSheet.create({
  timePickerSlider: {
    color: 'white',
    fontSize: 100,
    borderRadius: 20,
    minWidth: 350,
    textAlign: 'center',
    backgroundColor: '#171717',
  }
})

export default TimeSelector
