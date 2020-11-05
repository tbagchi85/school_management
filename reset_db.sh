bundle exec rake db:drop \
  db:create \
  db:migrate --trace && \
  bundle exec rake db:seed \
  --trace;
