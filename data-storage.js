// Portfolio Data Storage System
// This file manages the data flow between admin and portfolio

class PortfolioDataManager {
    constructor() {
        this.storageKey = 'alex_portfolio_data';
        this.initializeData();
    }

    // Initialize default data if empty
    initializeData() {
        if (!localStorage.getItem(this.storageKey)) {
            const defaultData = {
                videos: [
                    {
                        id: 1,
                        title: "Featured Masterpiece",
                        description: "Professional video editing showcase with advanced color grading and motion graphics",
                        src: "assets/img/WhatsApp Video 2026-02-05 at 19.10.34.mp4",
                        category: "Video Edit",
                        color: "blue",
                        views: 245,
                        likes: 42,
                        date: "2024-01-15",
                        featured: true,
                        permanentFeatured: true // Permanent featured video
                    },
                    {
                        id: 2,
                        title: "Cinematic Project",
                        description: "Advanced color grading & effects",
                        src: "assets/img/WhatsApp Video 2026-02-05 at 19.09.08.mp4",
                        category: "Video Edit",
                        color: "blue",
                        views: 189,
                        likes: 31,
                        date: "2024-01-14",
                        featured: false
                    },
                    {
                        id: 3,
                        title: "Motion Design",
                        description: "Dynamic visual effects",
                        src: "assets/img/WhatsApp Video 2026-02-05 at 19.11.33.mp4",
                        category: "Motion Graphics",
                        color: "purple",
                        views: 156,
                        likes: 28,
                        date: "2024-01-13",
                        featured: false
                    },
                    {
                        id: 4,
                        title: "Color Excellence",
                        description: "Professional color correction",
                        src: "assets/img/WhatsApp Video 2026-02-05 at 19.14.02.mp4",
                        category: "Color Grade",
                        color: "green",
                        views: 134,
                        likes: 25,
                        date: "2024-01-12",
                        featured: false
                    },
                    {
                        id: 5,
                        title: "Smooth Flow",
                        description: "Seamless transitions",
                        src: "assets/img/WhatsApp Video 2026-02-05 at 19.14.39.mp4",
                        category: "Transitions",
                        color: "orange",
                        views: 98,
                        likes: 19,
                        date: "2024-01-11",
                        featured: false
                    },
                    {
                        id: 6,
                        title: "Visual Effects",
                        description: "Creative VFX work",
                        src: "assets/img/WhatsApp Video 2026-02-05 at 19.15.21.mp4",
                        category: "Effects",
                        color: "indigo",
                        views: 167,
                        likes: 33,
                        date: "2024-01-10",
                        featured: false
                    },
                    {
                        id: 7,
                        title: "Creative Edit",
                        description: "Innovative editing style",
                        src: "assets/img/WhatsApp Video 2026-02-05 at 19.22.23.mp4",
                        category: "Edit",
                        color: "pink",
                        views: 145,
                        likes: 27,
                        date: "2024-01-09",
                        featured: false
                    },
                    {
                        id: 8,
                        title: "Sound Design",
                        description: "Professional audio mixing",
                        src: "assets/img/WhatsApp Video 2026-02-05 at 19.23.18.mp4",
                        category: "Audio",
                        color: "yellow",
                        views: 89,
                        likes: 15,
                        date: "2024-01-08",
                        featured: false
                    },
                    {
                        id: 9,
                        title: "Perfect Timing",
                        description: "Precision editing",
                        src: "assets/img/WhatsApp Video 2026-02-05 at 19.23.57.mp4",
                        category: "Timing",
                        color: "teal",
                        views: 112,
                        likes: 21,
                        date: "2024-01-07",
                        featured: false
                    },
                    {
                        id: 10,
                        title: "Masterpiece",
                        description: "Ultimate editing showcase",
                        src: "assets/img/WhatsApp Video 2026-02-05 at 19.33.43.mp4",
                        category: "Master",
                        color: "indigo",
                        views: 198,
                        likes: 37,
                        date: "2024-01-06",
                        featured: false
                    }
                ],
                images: [
                    {
                        id: 11,
                        title: "Professional Portrait",
                        description: "Advanced photo retouching and enhancement",
                        src: "assets/img/WhatsApp Image 2026-02-04 at 11.37.34.jpeg",
                        category: "Photo Edit",
                        color: "pink",
                        views: 312,
                        likes: 67,
                        date: "2024-01-05",
                        featured: false
                    }
                ],
                nextId: 12
            };
            this.saveData(defaultData);
        }
    }

    // Get all data
    getData() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : { videos: [], images: [], nextId: 1 };
    }

    // Save data
    saveData(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
        this.notifyDataChange();
    }

    // Add new video
    addVideo(videoData) {
        const data = this.getData();
        const newVideo = {
            id: data.nextId++,
            ...videoData,
            views: 0,
            likes: 0,
            date: new Date().toISOString().split('T')[0],
            featured: false
        };
        data.videos.unshift(newVideo); // Add to beginning
        this.saveData(data);
        return newVideo;
    }

    // Add new image
    addImage(imageData) {
        const data = this.getData();
        const newImage = {
            id: data.nextId++,
            ...imageData,
            views: 0,
            likes: 0,
            date: new Date().toISOString().split('T')[0],
            featured: false
        };
        data.images.unshift(newImage); // Add to beginning
        this.saveData(data);
        return newImage;
    }

    // Update item
    updateItem(type, id, updates) {
        const data = this.getData();
        const items = type === 'video' ? data.videos : data.images;
        const index = items.findIndex(item => item.id === parseInt(id));
        
        if (index !== -1) {
            items[index] = { ...items[index], ...updates };
            this.saveData(data);
            return items[index];
        }
        return null;
    }

    // Delete item
    deleteItem(type, id) {
        const data = this.getData();
        const items = type === 'video' ? data.videos : data.images;
        const index = items.findIndex(item => item.id === parseInt(id));
        
        if (index !== -1) {
            items.splice(index, 1);
            this.saveData(data);
            return true;
        }
        return false;
    }

    // Toggle featured status
    toggleFeatured(type, id) {
        const data = this.getData();
        const items = type === 'video' ? data.videos : data.images;
        const item = items.find(item => item.id === parseInt(id));
        
        if (item) {
            // Check if this is the permanent featured video
            if (item.permanentFeatured) {
                console.log('This video is permanently featured and cannot be changed');
                return item;
            }
            
            // Unfeature all other items if featuring this one
            if (!item.featured) {
                items.forEach(i => {
                    if (!i.permanentFeatured) { // Don't unfeature permanent video
                        i.featured = false;
                    }
                });
            }
            item.featured = !item.featured;
            this.saveData(data);
            return item;
        }
        return null;
    }

    // Get featured item (always returns permanent featured video if it exists)
    getFeatured(type) {
        const data = this.getData();
        const items = type === 'video' ? data.videos : data.images;
        
        // First, check for permanent featured video
        const permanentFeatured = items.find(item => item.permanentFeatured);
        if (permanentFeatured) {
            return permanentFeatured;
        }
        
        // Otherwise, return regular featured video or first item
        return items.find(item => item.featured) || items[0];
    }

    // Get statistics
    getStatistics() {
        const data = this.getData();
        const totalViews = [...data.videos, ...data.images].reduce((sum, item) => sum + item.views, 0);
        const totalLikes = [...data.videos, ...data.images].reduce((sum, item) => sum + item.likes, 0);
        
        return {
            totalVideos: data.videos.length,
            totalImages: data.images.length,
            totalViews: totalViews,
            totalLikes: totalLikes,
            totalWorks: data.videos.length + data.images.length
        };
    }

    // Notify data change (for real-time updates)
    notifyDataChange() {
        // Dispatch custom event for other tabs/pages
        window.dispatchEvent(new CustomEvent('portfolioDataChanged', {
            detail: this.getData()
        }));
        
        // Store timestamp for last update
        localStorage.setItem('portfolio_last_update', Date.now().toString());
    }

    // Check for updates from other tabs
    checkForUpdates() {
        const lastUpdate = localStorage.getItem('portfolio_last_update');
        if (lastUpdate && this.lastKnownUpdate !== parseInt(lastUpdate)) {
            this.lastKnownUpdate = parseInt(lastUpdate);
            return true;
        }
        return false;
    }

    // Export data for backup
    exportData() {
        const data = this.getData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `portfolio-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Import data from backup
    importData(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            if (data.videos && data.images) {
                this.saveData(data);
                return true;
            }
        } catch (error) {
            console.error('Invalid data format:', error);
        }
        return false;
    }

    // Reset to default data with all works
    resetToDefault() {
        // Clear existing data
        localStorage.removeItem(this.storageKey);
        
        // Reinitialize with all works
        this.initializeData();
        
        // Notify of change
        this.notifyDataChange();
        
        return this.getData();
    }

    // Force update existing data with all works
    updateWithAllWorks() {
        const currentData = this.getData();
        
        // Check if we need to add missing works
        const allVideoPaths = [
            "assets/img/WhatsApp Video 2026-02-05 at 19.10.34.mp4",
            "assets/img/WhatsApp Video 2026-02-05 at 19.09.08.mp4",
            "assets/img/WhatsApp Video 2026-02-05 at 19.11.33.mp4",
            "assets/img/WhatsApp Video 2026-02-05 at 19.14.02.mp4",
            "assets/img/WhatsApp Video 2026-02-05 at 19.14.39.mp4",
            "assets/img/WhatsApp Video 2026-02-05 at 19.15.21.mp4",
            "assets/img/WhatsApp Video 2026-02-05 at 19.22.23.mp4",
            "assets/img/WhatsApp Video 2026-02-05 at 19.23.18.mp4",
            "assets/img/WhatsApp Video 2026-02-05 at 19.23.57.mp4",
            "assets/img/WhatsApp Video 2026-02-05 at 19.33.43.mp4"
        ];
        
        const allImagePaths = [
            "assets/img/WhatsApp Image 2026-02-04 at 11.37.34.jpeg"
        ];
        
        const videoTemplates = [
            { title: "Featured Masterpiece", description: "Professional video editing showcase with advanced color grading and motion graphics", category: "Video Edit", color: "blue", featured: true, permanentFeatured: true },
            { title: "Cinematic Project", description: "Advanced color grading & effects", category: "Video Edit", color: "blue", featured: false },
            { title: "Motion Design", description: "Dynamic visual effects", category: "Motion Graphics", color: "purple", featured: false },
            { title: "Color Excellence", description: "Professional color correction", category: "Color Grade", color: "green", featured: false },
            { title: "Smooth Flow", description: "Seamless transitions", category: "Transitions", color: "orange", featured: false },
            { title: "Visual Effects", description: "Creative VFX work", category: "Effects", color: "indigo", featured: false },
            { title: "Creative Edit", description: "Innovative editing style", category: "Edit", color: "pink", featured: false },
            { title: "Sound Design", description: "Professional audio mixing", category: "Audio", color: "yellow", featured: false },
            { title: "Perfect Timing", description: "Precision editing", category: "Timing", color: "teal", featured: false },
            { title: "Masterpiece", description: "Ultimate editing showcase", category: "Master", color: "indigo", featured: false }
        ];
        
        const imageTemplates = [
            { title: "Professional Portrait", description: "Advanced photo retouching and enhancement", category: "Photo Edit", color: "pink", featured: false }
        ];
        
        // Add missing videos
        allVideoPaths.forEach((path, index) => {
            const existingVideo = currentData.videos.find(v => v.src === path);
            if (!existingVideo && videoTemplates[index]) {
                const template = videoTemplates[index];
                currentData.videos.push({
                    id: currentData.nextId++,
                    src: path,
                    title: template.title,
                    description: template.description,
                    category: template.category,
                    color: template.color,
                    featured: template.featured,
                    permanentFeatured: template.permanentFeatured || false,
                    views: Math.floor(Math.random() * 200) + 50,
                    likes: Math.floor(Math.random() * 50) + 10,
                    date: new Date(2024, 0, 15 - index).toISOString().split('T')[0]
                });
            }
        });
        
        // Add missing images
        allImagePaths.forEach((path, index) => {
            const existingImage = currentData.images.find(i => i.src === path);
            if (!existingImage && imageTemplates[index]) {
                const template = imageTemplates[index];
                currentData.images.push({
                    id: currentData.nextId++,
                    src: path,
                    title: template.title,
                    description: template.description,
                    category: template.category,
                    color: template.color,
                    featured: template.featured,
                    views: Math.floor(Math.random() * 300) + 100,
                    likes: Math.floor(Math.random() * 70) + 20,
                    date: new Date(2024, 0, 5 - index).toISOString().split('T')[0]
                });
            }
        });
        
        this.saveData(currentData);
        return currentData;
    }
}

// Initialize global data manager
window.portfolioDataManager = new PortfolioDataManager();

// Auto-update checker
let updateChecker;
function startUpdateChecker() {
    updateChecker = setInterval(() => {
        if (window.portfolioDataManager.checkForUpdates()) {
            window.dispatchEvent(new CustomEvent('portfolioDataUpdated'));
        }
    }, 1000); // Check every second
}

function stopUpdateChecker() {
    if (updateChecker) {
        clearInterval(updateChecker);
    }
}

// Start checker when page loads
document.addEventListener('DOMContentLoaded', () => {
    startUpdateChecker();
});

// Stop checker when page unloads
window.addEventListener('beforeunload', () => {
    stopUpdateChecker();
});
