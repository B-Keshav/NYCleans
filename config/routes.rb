Rails.application.routes.draw do
  resources :volunteers
  resources :users
  resources :jobs
  resources :locations, only: [:index, :show]
  resources :organizations

  post '/signup', to: "users#create"
  get '/me', to: 'users#show'

  post '/login', to: 'session#create'
  delete '/logout', to: 'sessions#destroy'

  get '/hello', to: 'application#hello_world'

  get '/joblocations', to: "jobs#job_locations"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end