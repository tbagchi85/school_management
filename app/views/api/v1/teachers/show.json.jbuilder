json.teacher do
  json.id @teacher.id
  json.name @teacher.name
  json.education @teacher.education
  json.created_at @teacher.created_at
  json.subjects @teacher.subjects do |subject|
    json.id subject.id
    json.name subject.name
    json.description subject.description
  end
  json.students @teacher.students do |student|
    json.id student.id
    json.name student.name
    json.roll_number student.roll_number
    json.house student.house
  end
end

