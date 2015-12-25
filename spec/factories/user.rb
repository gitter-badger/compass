# FactoryGirl.define do


  FactoryGirl.define do
    factory :editor do
      title "The amazing article title"
      published_at { DateTime.now }
    end
  end




  #
  #
  # factory :editor do
  #   first_name "admin"
  #   last_name  "Doe"
  #   admin false
  # end
  #
  #
  # # This will use the User class (Admin would have been guessed)
  # factory :admin  do
  #   first_name "Admin"
  #   last_name  "User"
  #   admin      true
  # end




# end