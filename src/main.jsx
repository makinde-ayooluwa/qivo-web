import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PostProvider } from './providers/postProvider.jsx'
import { StoryProvider } from './providers/storyProvider.jsx'
import { FeedProvider } from './providers/feedProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostProvider>
      <StoryProvider>
        <FeedProvider>
          <App />
        </FeedProvider>
      </StoryProvider>
    </PostProvider>
  </StrictMode>,
)
