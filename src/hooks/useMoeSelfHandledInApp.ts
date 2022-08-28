import {useEffect} from 'react';
import ReactMoE from 'react-native-moengage';

export const useMoeSelfHandledInApp = (
  onSelfHandledInAppReceived: (payload: Record<string, any>) => void,
) => {
  useEffect(() => {
    ReactMoE.setEventListener(
      'inAppCampaignSelfHandled',
      (selfHandledPayload: Record<string, any>) => {
        if (
          selfHandledPayload &&
          Object.keys(selfHandledPayload).length !== 0
        ) {
          try {
            const obj = JSON.parse(
              selfHandledPayload.selfHandled.campaignContent,
            );
            onSelfHandledInAppReceived(obj);
          } catch (err) {
            console.log(err);
          }
        }
      },
    );
  }, []);
};
