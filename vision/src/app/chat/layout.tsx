const ChatLayout: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <div>
            <h1 className="text-3xl">Layout</h1>
            {props.children}
        </div>
    );
}

export default ChatLayout;