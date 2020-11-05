json.students @students do |student|
  json.id student.id
  json.name student.name
  json.roll_number student.roll_number
  json.house student.house
  json.created_at student.created_at
  json.subjects student.subjects do |subject|
    json.id subject.id
    json.name subject.name
    json.description subject.description
  end
  json.teachers student.teachers do |teacher|
    json.id teacher.id
    json.name teacher.name
    json.education teacher.education
  end
end
