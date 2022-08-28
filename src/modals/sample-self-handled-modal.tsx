import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

export type SampleSelfHandledModalProps = {
  title: string;
  visible: boolean;
  onDismissPress?: () => void;
};

export const SampleSelfHandledModal = ({
  visible,
  title,
  onDismissPress,
}: SampleSelfHandledModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onDismissPress?.();
      }}>
      <View style={styles.centeredView}>
        <View style={[{backgroundColor: title}, styles.modalView]}>
          <Text style={styles.modalText}>{title}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              onDismissPress?.();
            }}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
