FactoryGirl.define do

  factory :user, class: Account do
    name "John"
    surname  "Doe"
    email "user@user.ru"
    password "123123"
    password_confirmation "123123"
    role 'user'
  end

  factory :admin, class: Account do
    name "Admin"
    surname  "admin"
    email "admin@admin.ru"
    password "123123"
    password_confirmation "123123"
    role "admin"
  end

  factory :editor, class: Account do
    name "Editor"
    surname  "Edit"
    email "editor@editor.ru"
    password "123123"
    password_confirmation "123123"
    role "editor"
  end

end