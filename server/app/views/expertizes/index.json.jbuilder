json.array!(@expertizes) do |expertize|
  json.extract! expertize, :id
  json.url expertize_url(expertize, format: :json)
end
