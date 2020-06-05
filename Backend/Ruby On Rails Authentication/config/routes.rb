Rails.application.routes.draw do

    post '/authenticate', to: 'authentication#authenticate'
    post '/register', to: 'registration#register'
   
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   

  end