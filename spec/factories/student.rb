FactoryBot.define do
  factory :student do
    name        { Faker::Name.unique.name }
    roll_number { Faker::IDNumber.unique.brazilian_id }
    house       { Faker::Address.full_address }
  end
end
