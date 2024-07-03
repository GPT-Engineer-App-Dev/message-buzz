import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <header className="p-4 bg-primary text-primary-foreground">
        <h1 className="text-xl font-bold">ChatApp</h1>
      </header>
      <ScrollArea className="flex-1 p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {message.text}
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleSend} className="p-4 bg-muted flex space-x-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message"
          className="flex-1"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default Index;