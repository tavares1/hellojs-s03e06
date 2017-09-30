const axios = require("axios")

const api = axios.create({
  baseURL:"http://localhost:3000"
})

exports.pessoas = {
  list: _ => api.get("/pessoa/list"),
  save: p => api[p.idpessoa?"put":"post"]("/pessoa/save",p),
  del: id => api["delete"](`/pessoa/${id}`)
}

exports.eventos = {
  list: _ => api.get("/evento/list"),
  save: p => api[p.idevento?"put":"post"]("/evento/save",p),
  del: id => api["delete"](`/evento/${id}`)
}