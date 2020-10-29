json.subjects @subjects do |subject|
  json.id subject.id
  json.name subject.name
  json.description subject.description
  json.created_at subject.created_at
  json.teachers subject.teachers do |teacher|
    json.id teacher.id
    json.name teacher.name
  end
  json.students subject.students do |student|
    json.id student.id
    json.name student.name
  end
end
