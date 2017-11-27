module.exports = {
  exportPathMap: () => {
    return {
      '/': { page: '/', query: { page: 'page' } },
      '/page1': { page: '/', query: { page: 'page1' } },
      '/page2': { page: '/', query: { page: 'page2' } }
    }
  }
}
