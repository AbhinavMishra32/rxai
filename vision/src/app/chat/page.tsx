'use client'
import {NextPage} from 'next';
import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Fragment } from 'react';
import { useState } from 'react'

const ChatPage: NextPage = () => {
  return (
    <Fragment>
      <div className='justify-center items-center m-32'>
        <div className="bg-gray-600">
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/3055951?v=4" alt="Avatar"
            />
          </Avatar>
        </div>
      </div>
    </Fragment>
  );
};

type Message = {
    id: number
    text: string
    sender: "user" | "ai"
}

const ChatPage2: NextPage = () => {
    const [messages, setMessages]  = useState<Message[]>([
        {id: 1, text: "Hello! How can I assist you today?", sender: "ai"}
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, {id: messages.length +1, text: input, sender: 'user'}]);
            setInput("");

            setTimeout(()=> {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {id: prevMessages.length +1, text: "I'm an AI assistant. How can I help you?", sender: "ai"},
                ]) 
            }, 1000)
        }
    }
    return (
        <Card className='w-full'>

        </Card>
    )
}

export default ChatPage;