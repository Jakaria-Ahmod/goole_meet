import React from 'react';
import { useParams } from 'react-router';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Coll = () => {
  const { collId } = useParams();
  const meet = element => {
    const appID = 122576635;
    const serverSecret = 'bcdadbe62f6eca739368a5e34ecd1ebe';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      collId,
      Date.now().toString(),
      'md jakaria ahmod'
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div>
      <div
        className="myCallContainer"
        ref={meet}
        style={{ width: '100vw', height: '100vh' }}
      ></div>
    </div>
  );
};

export default Coll;
