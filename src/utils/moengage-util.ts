export const isPushFromMoEngage = (payload?: Record<string, any>) => {
  if (!payload || !payload.data || !payload.data.hasOwnProperty('push_from')) {
    return false;
  }

  return payload.data.push_from === 'moengage';
};

export const isNumber = (str: string): boolean => {
  if (typeof str !== 'string') {
    return false;
  }

  if (str.trim() === '') {
    return false;
  }

  return !Number.isNaN(Number(str));
};
