module.exports = {
  exportPathMap: () => {
    return {
      '/': { page: '/', query: { page: 'page' } },
      '/page/1': { page: '/', query: { page: 'page1' } },
      '/page/2': { page: '/', query: { page: 'page2' } }
    }
  }
}
