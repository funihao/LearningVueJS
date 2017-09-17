import Search from '@/components/Search'
import About from '@/components/About'
import TrackDetail from '@/components/TrackDetail'

const routes = [
  {path: '/search', component: Search, name: 'search'},
  {path: '/about', component: About, name: 'about'},
  {path: '/track/:id', component: TrackDetail, name: 'track'}
]

export default routes
