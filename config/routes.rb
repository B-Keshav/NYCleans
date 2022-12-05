Rails.application.routes.draw do
  resources :volunteers
  resources :users
  resources :jobs
  resources :locations
  resources :organizations

  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end