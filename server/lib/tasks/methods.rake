#encoding: utf-8
namespace :methods do

  desc 'Generate methods'
  task :generate => :environment do
    create_methods(data)
  end

  def create_methods(data)
    data.each do |item|
      Methods.create(title: item[:title], text: item[:text], parent: item[:parent])
    end
  end

  def data
    [
        {title: 'Анкетні методи', text: "", parent: 0},
        {title: 'Метод нормування', text: "Метод нормування", parent: 1},
        {title: 'Метод парних порівнянь', text: "Метод парних порівнянь ffffff", parent: 1},
        {title: 'Метод ранжування', text: "Метод парних порівнянь ffffff", parent: 1},
        {title: 'Метод аналізу ієрархій', text: "Метод аналізу ієрархій ffffff", parent: 0},
        {title: 'Метод аналізу співвідношень', text: "Метод аналізу співвідношень", parent: 0},
        {title: 'Метод голосування', text: "Метод голосування", parent: 0}
    ]
  end

end