Rails.application.routes.draw do
  resources :volunteers, only: [:create, :destroy, :index, :show]
  resources :users, only: [:index, :create]
  resources :jobs, only: [:index, :show, :create, :update, :destroy]
  resources :locations, only: [:index, :show]
  resources :organizations

  post '/signup', to: "users#create"
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/hello', to: 'application#hello_world'

  get '/joblocations', to: "jobs#job_locations"

  get '/myjobs', to: "users#my_jobs"

  delete '/findvolunteer/:jobID', to: "volunteers#findvolunteer"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end