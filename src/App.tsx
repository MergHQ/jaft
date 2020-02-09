import React, { Fragment, useState } from 'react'
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'

import FullScreen from './utils/Fullscreen'
import TimeSelector from './components/TimeSelector'
import { format } from 'date-fns'

const App = () => {
  FullScreen.enable()
  const [runningTimer, setRunningTimer] = useState<Date | null>(null)

  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <TimeSelector setRunningTimer={setRunningTimer} />
            <Text style={styles.title}>{runningTimer ? format(runningTimer, 'HH:mm:ss') : 'No running timer'}</Text>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.black
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.black,
    height: '100%'
  },
  sectionContainer: {
    marginTop: '20%',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 24
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    color: '#d4d4d4'
  },
  sectionDescription: {
    marginTop: 100,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
})

export default App
