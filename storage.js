// RooMatch - Storage Management
const StorageManager = {
    // User Management
    saveCurrentUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    },

    getCurrentUser() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    },

    clearUser() {
        localStorage.removeItem('currentUser');
    },

    // Language Management
    setLanguage(lang) {
        localStorage.setItem('language', lang);
    },

    getCurrentLanguage() {
        return localStorage.getItem('language') || 'en';
    },

    // Properties Data
    initializeProperties() {
        if (!localStorage.getItem('properties')) {
            const properties = [
                {
                    id: 1,
                    title: "Modern Studio Apartment",
                    location: "District 1, HCMC",
                    price: "$450/month",
                    category: "apartment",
                    area: "35 m²",
                    bedrooms: 1,
                    bathrooms: 1,
                    available: "Immediately",
                    verified: true,
                    partnership: true,
                    description: "A cozy modern studio apartment near RMIT campus, perfect for students. Features contemporary design with all essential amenities.",
                    images: [
                        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
                        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800",
                        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
                    ],
                    amenities: [
                        { icon: "🔒", name: "Security" },
                        { icon: "📶", name: "WiFi" },
                        { icon: "❄️", name: "AC" },
                        { icon: "🛋️", name: "Furnished" }
                    ]
                },
                {
                    id: 2,
                    title: "Shared Room - 2 Beds",
                    location: "District 3, HCMC",
                    price: "$200/month",
                    category: "roommate",
                    area: "25 m²",
                    bedrooms: 1,
                    bathrooms: 1,
                    available: "From Jan 15",
                    verified: true,
                    partnership: false,
                    description: "Looking for a roommate to share this comfortable 2-bed room. Great location close to RMIT and affordable for students.",
                    images: [
                        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
                        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800"
                    ],
                    amenities: [
                        { icon: "🔒", name: "Security" },
                        { icon: "📶", name: "WiFi" },
                        { icon: "🧺", name: "Laundry" },
                        { icon: "🍳", name: "Kitchen" }
                    ]
                },
                {
                    id: 3,
                    title: "Luxury 2BR Apartment",
                    location: "Binh Thanh, HCMC",
                    price: "$800/month",
                    category: "apartment",
                    area: "75 m²",
                    bedrooms: 2,
                    bathrooms: 2,
                    available: "Feb 1",
                    verified: true,
                    partnership: true,
                    description: "Spacious 2-bedroom luxury apartment with modern amenities. Perfect for sharing with friends or family.",
                    images: [
                        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
                        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
                        "https://images.unsplash.com/photo-1560185127-6d7b9b8f6d6d?w=800"
                    ],
                    amenities: [
                        { icon: "🔒", name: "Security" },
                        { icon: "📶", name: "WiFi" },
                        { icon: "❄️", name: "AC" },
                        { icon: "🛋️", name: "Furnished" },
                        { icon: "🏊", name: "Pool" },
                        { icon: "🏋️", name: "Gym" }
                    ]
                },
                {
                    id: 4,
                    title: "Cozy House Room",
                    location: "District 7, HCMC",
                    price: "$350/month",
                    category: "house",
                    area: "20 m²",
                    bedrooms: 1,
                    bathrooms: 1,
                    available: "Immediately",
                    verified: false,
                    partnership: false,
                    description: "Private room in a friendly shared house. Great community atmosphere and close to universities.",
                    images: [
                        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
                        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800"
                    ],
                    amenities: [
                        { icon: "🔒", name: "Security" },
                        { icon: "📶", name: "WiFi" },
                        { icon: "🍳", name: "Kitchen" },
                        { icon: "🅿️", name: "Parking" }
                    ]
                },
                {
                    id: 5,
                    title: "Student Dorm Style",
                    location: "District 10, HCMC",
                    price: "$180/month",
                    category: "roommate",
                    area: "15 m²",
                    bedrooms: 1,
                    bathrooms: 1,
                    available: "Immediately",
                    verified: true,
                    partnership: false,
                    description: "Affordable dorm-style room perfect for students. Basic amenities with a friendly community.",
                    images: [
                        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800"
                    ],
                    amenities: [
                        { icon: "🔒", name: "Security" },
                        { icon: "📶", name: "WiFi" },
                        { icon: "🧺", name: "Laundry" }
                    ]
                },
                {
                    id: 6,
                    title: "Premium Studio Downtown",
                    location: "District 1, HCMC",
                    price: "$600/month",
                    category: "apartment",
                    area: "40 m²",
                    bedrooms: 1,
                    bathrooms: 1,
                    available: "Jan 20",
                    verified: true,
                    partnership: true,
                    description: "Premium studio in the heart of the city with stunning views and top-notch facilities.",
                    images: [
                        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
                        "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800"
                    ],
                    amenities: [
                        { icon: "🔒", name: "Security" },
                        { icon: "📶", name: "WiFi" },
                        { icon: "❄️", name: "AC" },
                        { icon: "🛋️", name: "Furnished" },
                        { icon: "🏊", name: "Pool" }
                    ]
                },
                {
                    id: 7,
                    title: "Family House 3BR",
                    location: "Phu Nhuan, HCMC",
                    price: "$1200/month",
                    category: "house",
                    area: "120 m²",
                    bedrooms: 3,
                    bathrooms: 2,
                    available: "Feb 15",
                    verified: true,
                    partnership: true,
                    description: "Spacious family house with garden. Perfect for families or groups of students.",
                    images: [
                        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
                        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
                    ],
                    amenities: [
                        { icon: "🔒", name: "Security" },
                        { icon: "📶", name: "WiFi" },
                        { icon: "❄️", name: "AC" },
                        { icon: "🅿️", name: "Parking" },
                        { icon: "🌳", name: "Garden" }
                    ]
                },
                {
                    id: 8,
                    title: "Co-working Office Space",
                    location: "District 2, HCMC",
                    price: "$400/month",
                    category: "office",
                    area: "50 m²",
                    bedrooms: 0,
                    bathrooms: 1,
                    available: "Immediately",
                    verified: true,
                    partnership: true,
                    description: "Modern co-working space perfect for startups and freelancers. Great networking opportunities.",
                    images: [
                        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
                        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
                    ],
                    amenities: [
                        { icon: "🔒", name: "Security" },
                        { icon: "📶", name: "WiFi" },
                        { icon: "❄️", name: "AC" },
                        { icon: "☕", name: "Coffee" },
                        { icon: "🅿️", name: "Parking" }
                    ]
                }
            ];
            
            localStorage.setItem('properties', JSON.stringify(properties));
        }
    },

    getProperties() {
        this.initializeProperties();
        return JSON.parse(localStorage.getItem('properties') || '[]');
    },

    // Liked Properties
    getLikedProperties() {
        return JSON.parse(localStorage.getItem('likedProperties') || '[]');
    },

    addLikedProperty(propertyId) {
        const liked = this.getLikedProperties();
        if (!liked.includes(propertyId)) {
            liked.push(propertyId);
            localStorage.setItem('likedProperties', JSON.stringify(liked));
        }
    },

    removeLikedProperty(propertyId) {
        const liked = this.getLikedProperties();
        const filtered = liked.filter(id => id !== propertyId);
        localStorage.setItem('likedProperties', JSON.stringify(filtered));
    },

    isPropertyLiked(propertyId) {
        return this.getLikedProperties().includes(propertyId);
    },

    // Broker Applications
    getApplications() {
        return JSON.parse(localStorage.getItem('applications') || '[]');
    },

    addApplication(application) {
        const applications = this.getApplications();
        application.id = Date.now();
        application.status = 'pending';
        application.createdAt = new Date().toISOString();
        applications.push(application);
        localStorage.setItem('applications', JSON.stringify(applications));
        return application;
    },

    updateApplication(id, updates) {
        const applications = this.getApplications();
        const index = applications.findIndex(app => app.id === id);
        if (index !== -1) {
            applications[index] = { ...applications[index], ...updates };
            localStorage.setItem('applications', JSON.stringify(applications));
        }
    },

    // Messages
    getMessages() {
        if (!localStorage.getItem('messages')) {
            const mockMessages = [
                {
                    id: 1,
                    name: "John Nguyen",
                    avatar: "JN",
                    lastMessage: "Is the room still available?",
                    time: "2h ago",
                    unread: true,
                    messages: [
                        { sender: "John Nguyen", text: "Hi! I'm interested in your property.", time: "3h ago" },
                        { sender: "You", text: "Hello! Yes, it's still available.", time: "2h 30m ago" },
                        { sender: "John Nguyen", text: "Is the room still available?", time: "2h ago" }
                    ]
                },
                {
                    id: 2,
                    name: "Sarah Tran",
                    avatar: "ST",
                    lastMessage: "Thank you for your help!",
                    time: "1d ago",
                    unread: false,
                    messages: [
                        { sender: "Sarah Tran", text: "Can I schedule a viewing?", time: "2d ago" },
                        { sender: "You", text: "Sure! How about tomorrow at 2pm?", time: "1d 23h ago" },
                        { sender: "Sarah Tran", text: "Thank you for your help!", time: "1d ago" }
                    ]
                },
                {
                    id: 3,
                    name: "Mike Lee",
                    avatar: "ML",
                    lastMessage: "What's the deposit amount?",
                    time: "3d ago",
                    unread: false,
                    messages: [
                        { sender: "Mike Lee", text: "Hello! I saw your listing.", time: "4d ago" },
                        { sender: "You", text: "Hi Mike! Would you like more information?", time: "3d 22h ago" },
                        { sender: "Mike Lee", text: "What's the deposit amount?", time: "3d ago" }
                    ]
                }
            ];
            localStorage.setItem('messages', JSON.stringify(mockMessages));
        }
        return JSON.parse(localStorage.getItem('messages'));
    },

    addMessage(contactId, message) {
        const messages = this.getMessages();
        const contact = messages.find(m => m.id === contactId);
        if (contact) {
            contact.messages.push(message);
            contact.lastMessage = message.text;
            contact.time = "Just now";
            localStorage.setItem('messages', JSON.stringify(messages));
        }
    },

    // Notifications
    getNotifications() {
        if (!localStorage.getItem('notifications')) {
            const mockNotifications = [
                {
                    id: 1,
                    type: "message",
                    title: "New message from John Nguyen",
                    message: "Is the room still available?",
                    time: "2h ago",
                    read: false
                },
                {
                    id: 2,
                    type: "application",
                    title: "Application Approved",
                    message: "Your property listing has been approved!",
                    time: "1d ago",
                    read: false
                },
                {
                    id: 3,
                    type: "like",
                    title: "Someone liked your property",
                    message: "Modern Studio Apartment received a new like",
                    time: "2d ago",
                    read: true
                }
            ];
            localStorage.setItem('notifications', JSON.stringify(mockNotifications));
        }
        return JSON.parse(localStorage.getItem('notifications'));
    },

    markNotificationAsRead(id) {
        const notifications = this.getNotifications();
        const notification = notifications.find(n => n.id === id);
        if (notification) {
            notification.read = true;
            localStorage.setItem('notifications', JSON.stringify(notifications));
        }
    }
};

// Initialize properties on load
StorageManager.initializeProperties();