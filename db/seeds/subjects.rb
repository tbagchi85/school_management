subjects_name = %w{ English Maths Hindi Science History Philosophy Economics Geography Psychology Sociology Chemistry Physics }

subjects_name.each do |subject|
  Subject.create(name: subject, description: Faker::Lorem.paragraph)
end
