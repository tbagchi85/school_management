require 'faker'

seed_files = []
Dir.glob("#{Rails.root}/db/seeds/*.rb") do |file|
  seed_files.push(file.split('/').last)
end

seed_files.each do |filename|
  puts "Loading #{filename}..."
  require_relative("seeds/#{filename}")
  puts "#{filename} loaded"
end

  puts "Loading Academic..."
  require_relative("seeds/joining_tables/academics.rb")
  puts "Academics loaded."
