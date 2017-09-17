import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return platziMusicService.get('/search', {
    params: { q: q, type: type }
  })
    .then(res => res.data)
}

trackService.getById = function (id) {
  return platziMusicService.get(`/tracks/${id}`)
}

export default trackService
