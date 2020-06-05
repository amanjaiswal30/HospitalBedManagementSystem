class RegistrationController < ApplicationController
    def register
        user=User.create(user_params)
        if user.save
            render json:{status:'SUCCESS',message:'Loaded user',data:user},status: :ok
        else
            render json:{status:'ERROR',message:'Loaded not user'},status: :unprocessable_entity
        end
    end
    def user_params
        params.permit(:email,:password)
    end
end

