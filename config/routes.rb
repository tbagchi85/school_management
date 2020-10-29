Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :students, only: [:index, :show, :create, :delete]
      resources :teachers, only: [:index, :show, :create, :delete]
      resources :subjects
    end
  end
  root 'homes#index'
end
