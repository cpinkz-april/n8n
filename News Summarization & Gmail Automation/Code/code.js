const articles = $input.all().map((item, index) => {
  return `#${index + 1}; ${item.json.output}`; 
})

return [{
  json: {
    articles: articles.join('\n\n')
  }
}]
