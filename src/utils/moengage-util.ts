export const isPushFromMoEngage = (payload?: Record<string, any>) => {
  if (!payload || !payload.data || !payload.data.hasOwnProperty('push_from')) {
    return false;
  }

  return payload.data.push_from === 'moengage';
};
