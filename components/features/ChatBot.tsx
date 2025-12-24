'use client';

import React, { useState, useRef, useEffect } from 'react';
import { getChatbotResponse, quickActions } from '@/data/chatbotResponses';
import styles from './ChatBot.module.css';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Halo! Saya Cahaya-Bot 🤖. Ada yang bisa saya bantu terkait pengiriman kargo Anda?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messageIdCounter = useRef(1);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (messageText?: string) => {
        const text = messageText || input.trim();
        if (!text) return;

        // Add user message
        const userMessage: Message = {
            id: `msg-${messageIdCounter.current++}`,
            text,
            sender: 'user',
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        // Simulate typing
        setIsTyping(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Get bot response
        const response = getChatbotResponse(text);
        const botMessage: Message = {
            id: `msg-${messageIdCounter.current++}`,
            text: response,
            sender: 'bot',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
    };

    const handleQuickAction = (query: string) => {
        handleSend(query);
    };

    return (
        <>
            {/* Chat Button */}
            <button
                className={styles.chatButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Chat dengan kami"
            >
                {isOpen ? '✖️' : '💬'}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className={styles.chatWindow}>
                    {/* Header */}
                    <div className={styles.chatHeader}>
                        <div className={styles.headerInfo}>
                            <div className={styles.avatar}>🤖</div>
                            <div>
                                <h3>Cahaya-Bot</h3>
                                <p>Asisten Virtual</p>
                            </div>
                        </div>
                        <button
                            className={styles.closeButton}
                            onClick={() => setIsOpen(false)}
                        >
                            ✖️
                        </button>
                    </div>

                    {/* Messages */}
                    <div className={styles.chatMessages}>
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`${styles.message} ${message.sender === 'user' ? styles.userMessage : styles.botMessage
                                    }`}
                            >
                                <div className={styles.messageContent}>{message.text}</div>
                                <div className={styles.messageTime}>
                                    {message.timestamp.toLocaleTimeString('id-ID', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className={`${styles.message} ${styles.botMessage}`}>
                                <div className={styles.typing}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Actions */}
                    {messages.length <= 2 && (
                        <div className={styles.quickActions}>
                            {quickActions.map((action, index) => (
                                <button
                                    key={index}
                                    className={styles.quickActionButton}
                                    onClick={() => handleQuickAction(action.query)}
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input */}
                    <form
                        className={styles.chatInput}
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSend();
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Ketik pertanyaan Anda..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit" disabled={!input.trim()}>
                            ➤
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};
