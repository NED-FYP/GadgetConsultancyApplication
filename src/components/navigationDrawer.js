import React,{ Component } from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems} from 'react-navigation-drawer';

const navigationDrawer = props => (
    <ScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: 'always', horizontal: 'never' }} >
              <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});

export default navigationDrawer

