Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do

  end
   root 'homes#index'
end
