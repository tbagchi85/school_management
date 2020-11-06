FactoryBot.define do
  factory :teacher do
    name        { Faker::Name.unique.name }
    education   { Teacher::educations.values.sample }
  end
end
