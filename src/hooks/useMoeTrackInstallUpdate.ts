import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactMoE, {MoEAppStatus} from 'react-native-moengage';
import {getBuildNumber} from 'react-native-device-info';
import {isNumber} from '../utils/moengage-util';
import {useEffect} from 'react';

export const useMoeTrackInstallUpdate = () => {
  useEffect(() => {
    const execute = async () => {
      const savedBuildNumberStr = await AsyncStorage.getItem(
        MOE_BUILD_NUMBER_KEY,
      );

      if (!savedBuildNumberStr) {
        await onSavedBuildNumberIsNull();
        return;
      }

      // get current version number
      const buildNumberStr = getBuildNumber();

      if (!isNumber(savedBuildNumberStr)) {
        throw `useMoeTrackInstallUpdate: savedBuildNumberStr is not numeric: ${savedBuildNumberStr}`;
      }
      if (!isNumber(buildNumberStr)) {
        throw `useMoeTrackInstallUpdate: buildNumberStr is not numeric: ${buildNumberStr}`;
      }

      const savedBuildNumber = Number(savedBuildNumberStr.trim());
      const buildNumber = Number(buildNumberStr.trim());

      if (buildNumber > savedBuildNumber) {
        await onAppUpgraded(savedBuildNumber, buildNumber);
      } else if (buildNumber < savedBuildNumber) {
        await onAppDowngraded(savedBuildNumber, buildNumber);
      } else {
        // user using same version
        // do nothing
        console.log(
          `useMoeTrackInstallUpdate: User using same version: ${buildNumber}`,
        );
      }
    };
    execute();
  }, []);
};

const onSavedBuildNumberIsNull = async () => {
  console.info(`Tracking new app install`);
  ReactMoE.setAppStatus(MoEAppStatus.Install);
  const buildNumber = getBuildNumber();
  await AsyncStorage.setItem(MOE_BUILD_NUMBER_KEY, buildNumber);
};

const onAppUpgraded = async (savedBuildNumber: number, buildNumber: number) => {
  console.info(
    `Tracking app upgrade from ${savedBuildNumber} to ${buildNumber}`,
  );
  ReactMoE.setAppStatus(MoEAppStatus.Update);
  await AsyncStorage.setItem(MOE_BUILD_NUMBER_KEY, buildNumber.toString());
};

const onAppDowngraded = async (
  savedBuildNumber: number,
  buildNumber: number,
) => {
  console.info(
    `Tracking app downgrade from ${savedBuildNumber} to ${buildNumber}`,
  );
  await AsyncStorage.setItem(MOE_BUILD_NUMBER_KEY, buildNumber.toString());
};

const MOE_BUILD_NUMBER_KEY = '@moe_build_number';
