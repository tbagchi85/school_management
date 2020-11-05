5.times do
  Teacher.create(name: Faker::Name.unique.name, education: Teacher::educations.values.sample)
end
