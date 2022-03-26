import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer} from './components';


const apiKey = 'v8gmx2mdqqrs';

const client = StreamChat.getInstance(apiKey);


const App = () => {
  return (
    <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer 
                    // isCreating={isCreating}
                    // setIsCreating={setIsCreating}
                    // setCreateType={setCreateType}
                    // setIsEditing={setIsEditing}
                />
                <ChannelContainer 
                    // isCreating={isCreating}
                    // setIsCreating={setIsCreating}
                    // isEditing={isEditing}
                    // setIsEditing={setIsEditing}
                    // createType={createType}
                />
            </Chat>
        </div>
  )
}

export default App